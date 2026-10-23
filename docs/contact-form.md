# Contact inquiry delivery

The contact route independently attempts the existing Supabase `contact_messages` insert and Resend notification. No new services or schema changes are required.

- Email accepted: HTTP 200, received confirmation. Provider acceptance does not guarantee inbox delivery.
- Only database saved: HTTP 202, explicitly tells the visitor that notification failed and provides the phone number. There is no automatic email retry worker; staff must review saved inquiries.
- Both failed: HTTP 503, generic error; the form retains the inquiry for retry.

Provider errors are not returned to visitors. Server logs identify the failed channel without logging customer messages or credentials. Database requests time out after 10 seconds. Credentials are checked within each delivery attempt, so missing database configuration does not block email.

Validation bounds JSON requests to 128,000 bytes, names to 120 characters, email to 254, company to 200, and messages to 20,000 (including quote lists). HTML email content is escaped and a plain-text version is included. A hidden honeypot rejects basic automated submissions silently. This is basic spam filtering, not distributed rate limiting or CAPTCHA protection.

The form prevents concurrent submissions and announces results to assistive technology. A retry after a lost network response can still create a duplicate inquiry; no cross-request idempotency or database migration is included.

Run the mocked delivery and validation tests with Node 22.6+:

```sh
node --experimental-strip-types --test tests/contact-handler.test.mjs
```

These tests do not access Supabase or Resend. Live delivery still requires a separately authorized test with configured services.
