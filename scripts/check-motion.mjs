import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, resolve, sep } from 'node:path';

const dist = resolve('dist');
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.jpeg': 'image/jpeg', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml' };
const server = createServer(async (request, response) => {
  const pathname = new URL(request.url, 'http://localhost').pathname;
  const requestedPath = resolve(dist, '.' + (pathname === '/' ? '/index.html' : pathname));
  const file = extname(requestedPath) ? requestedPath : resolve(dist, 'index.html');
  if (!file.startsWith(dist + sep)) return response.writeHead(403).end();
  try { response.writeHead(200, { 'Content-Type': types[extname(file)] || 'application/octet-stream' }).end(await readFile(file)); }
  catch { response.writeHead(404).end(); }
});

await new Promise(done => server.listen(0, '127.0.0.1', done));
let browser;
try {
  browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 }, reducedMotion: 'no-preference' });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto(`http://127.0.0.1:${server.address().port}`, { waitUntil: 'load' });
  const marquee = page.locator('.metrics-marquee');
  const before = await marquee.evaluate(element => getComputedStyle(element).transform);
  await page.waitForTimeout(900);
  const after = await marquee.evaluate(element => getComputedStyle(element).transform);
  assert.notEqual(before, after, 'Metrics marquee should move continuously');
  const row = page.locator('.work-row').first();
  await row.scrollIntoViewIfNeeded();
  const animation = await row.evaluate(element => getComputedStyle(element, '::after').animationName);
  assert.equal(animation, 'work-sweep', 'Work rows should have continuous motion');
  assert.deepEqual(errors, [], 'No browser runtime errors');
  console.log('PASS: metrics and work animations move continuously with no runtime errors.');
} finally {
  await browser?.close();
  server.close();
}
