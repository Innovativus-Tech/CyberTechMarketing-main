import { test } from 'node:test';
import assert from 'node:assert/strict';
import { DatabaseSync } from 'node:sqlite';
import { readFileSync } from 'node:fs';
import worker, { handleContact } from './sites-worker.mjs';

const valid = { firstName: 'Test', lastName: 'Visitor', email: 'test@example.com', phone: '+919999999999', company: '', serviceInterest: 'Web Development', message: 'Testing the enquiry submission process.' };
const request = (data, headers = {}) => new Request('https://example.com/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json', Origin: 'https://example.com', ...headers }, body: JSON.stringify(data) });
test('valid enquiry persists all fields, including quotes, and returns a receipt', async () => {
  const db = new DatabaseSync(':memory:');
  db.exec(readFileSync(new URL('../drizzle/0000_dry_abomination.sql', import.meta.url), 'utf8'));
  const DB = { prepare(sql) { return { bind(...values) { return { async run() { db.prepare(sql).run(...values); } }; } }; } };
  const message = "We'd like a website; DROP TABLE enquiries; --";
  const response = await handleContact(request({ ...valid, message }), { DB });
  assert.equal(response.status, 201);
  assert.ok((await response.json()).reference);
  const row = db.prepare('SELECT * FROM enquiries').get();
  assert.equal(row.message, message);
  assert.equal(row.service, 'Web Development');
  db.close();
});
test('invalid data and cross-origin posts do not touch storage', async () => {
  const DB = { prepare() { throw new Error('Storage must not be touched'); } };
  for (const patch of [{ email: 'invalid' }, { message: 'short' }, { phone: '1' }, { serviceInterest: 'Unknown' }, { firstName: '' }]) {
    assert.equal((await handleContact(request({ ...valid, ...patch }), { DB })).status, 400);
  }
  assert.equal((await handleContact(request(valid, { Origin: 'https://other.example' }), { DB })).status, 403);
});
test('storage failure cannot produce a success receipt', async () => {
  assert.equal((await handleContact(request(valid), {})).status, 503);
  assert.equal((await handleContact(request(valid), { DB: { prepare() { throw new Error('offline'); } } })).status, 503);
});
test('honeypot requests are discarded', async () => {
  assert.equal((await handleContact(request({ ...valid, website: 'spam' }), {})).status, 201);
});
test('client-side navigation receives a component payload, not HTML', async () => {
  let path;
  const response = await worker.fetch(new Request('https://example.com/services/web-development?_rsc=123', { headers: { RSC: '1' } }), { ASSETS: { fetch(req) { path = new URL(req.url).pathname; return new Response('rsc-payload'); } } });
  assert.equal(path, '/services/web-development.txt');
  assert.equal(response.headers.get('Content-Type'), 'text/x-component');
  assert.equal(await response.text(), 'rsc-payload');
});
