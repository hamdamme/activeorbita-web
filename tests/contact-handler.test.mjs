import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createContactHandler, inquiryHtml } from '../lib/contact-handler.ts';

const valid = { name: 'Buyer', email: 'buyer@example.com', company: '', message: '12 cases of oil, please.' };
const request = (body) => new Request('https://example.com/api/contact', {
  method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body),
});
function fixture(failures = []) {
  const calls = [];
  const handler = createContactHandler({
    save: async () => { calls.push('database'); if (failures.includes('database')) throw new Error('secret database detail'); },
    send: async () => { calls.push('email'); if (failures.includes('email')) throw new Error('secret email detail'); },
    report: () => {},
  });
  return { handler, calls };
}
for (const [failures, status] of [[[], 200], [['database'], 200], [['email'], 202], [['database', 'email'], 503]]) {
  test(`delivery failures ${JSON.stringify(failures)} return ${status} and attempt both channels`, async () => {
    const { handler, calls } = fixture(failures);
    const result = await handler(request(valid));
    assert.equal(result.status, status);
    assert.deepEqual(calls.sort(), ['database', 'email']);
    const text = await result.text();
    assert.ok(!text.includes('secret'));
    if (status === 202) assert.match(text, /saved.*notification could not be sent/);
    if (status === 503) assert.match(text, /try again/);
  });
}
test('invalid types, missing fields, invalid email, header injection and long fields never deliver', async () => {
  for (const body of [null, [], { ...valid, name: {} }, { ...valid, message: ' ' },
    { ...valid, email: 'invalid' }, { ...valid, name: 'Buyer\r\nBcc: other@example.com' },
    { ...valid, company: 'x'.repeat(201) }, { ...valid, message: 'x'.repeat(20001) }]) {
    const { handler, calls } = fixture();
    assert.equal((await handler(request(body))).status, 400);
    assert.deepEqual(calls, []);
  }
});
test('honeypot accepts silently without saving or sending', async () => {
  const { handler, calls } = fixture();
  assert.equal((await handler(request({ ...valid, website: 'spam.example' }))).status, 200);
  assert.deepEqual(calls, []);
});
test('malformed JSON and oversized bodies are rejected without delivery', async () => {
  const { handler, calls } = fixture();
  assert.equal((await handler(new Request('https://example.com', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{' }))).status, 400);
  assert.equal((await handler(request({ ...valid, message: 'x'.repeat(128001) }))).status, 413);
  assert.deepEqual(calls, []);
});
test('HTML customer content is escaped while message line breaks remain readable', () => {
  const html = inquiryHtml({ ...valid, name: '<img src=x onerror="bad()">', message: 'A & B\n<script>bad()</script>' });
  assert.ok(!html.includes('<img'));
  assert.ok(!html.includes('<script>'));
  assert.match(html, /A &amp; B<br \/>&lt;script&gt;/);
});
test('quote-sized multiline inquiries are accepted', async () => {
  const { handler } = fixture();
  assert.equal((await handler(request({ ...valid, message: 'Product and package details\n'.repeat(500) }))).status, 200);
});
