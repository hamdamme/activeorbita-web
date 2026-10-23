import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { matchesProductSearch } from '../lib/product-search.ts';
const products = JSON.parse(readFileSync(new URL('../app/data/branded-products.json', import.meta.url), 'utf8'));

test('diesel buyers can find pails and drums using either viscosity spelling', () => {
  for (const brand of ['Mobil', 'Everest', 'Shell']) {
    const compact = products.filter(p => matchesProductSearch(p, `${brand} 15w40 drum`));
    const hyphenated = products.filter(p => matchesProductSearch(p, `${brand} 15W-40 drum`));
    assert.ok(compact.length > 0, `${brand} drum should be found`);
    assert.deepEqual(compact, hyphenated);
    assert.ok(products.some(p => matchesProductSearch(p, `${brand} 15w40 pail`)));
  }
});
test('manufacturer package numbers find their products', () => {
  for (const product of products) for (const pack of product.packages ?? []) {
    if (pack.manufacturerPartNumber) assert.ok(matchesProductSearch(product, pack.manufacturerPartNumber));
  }
});
test('search requires every word and accepts empty searches', () => {
  assert.ok(products.every(p => matchesProductSearch(p, '  ')));
  assert.ok(products.every(p => !matchesProductSearch(p, 'nonexistent-product-987xyz')));
  assert.ok(products.some(p => matchesProductSearch(p, 'crest')));
});
