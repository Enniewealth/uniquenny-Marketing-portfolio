import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';

// Run after the production build, so checks do not depend on Vite startup.
const dist = resolve('dist');
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.jpeg': 'image/jpeg', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml' };
const server = createServer(async (request, response) => {
  const pathname = new URL(request.url, 'http://localhost').pathname;
  const file = resolve(dist, '.' + (pathname === '/' ? '/index.html' : pathname));
  if (!file.startsWith(dist + sep)) {
    response.writeHead(403).end();
    return;
  }
  try {
    const body = await readFile(file);
    response.writeHead(200, { 'Content-Type': types[extname(file)] || 'application/octet-stream' }).end(body);
  } catch {
    response.writeHead(404).end();
  }
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
console.log('Starting browser against production build');
let browser;
try {
  browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ reducedMotion: 'reduce' });
  await page.route('https://fonts.googleapis.com/**', route => route.abort());
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  for (const width of [320, 375, 390, 640, 768, 820, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(`http://127.0.0.1:${server.address().port}`, { waitUntil: 'load', timeout: 60000 });
    await page.locator('h1').waitFor();
    const brokenAnchors = await page.evaluate(() => [...document.querySelectorAll('a[href^="#"]')]
      .map(link => link.getAttribute('href'))
      .filter(href => href.length > 1 && !document.getElementById(href.slice(1))));
    assert.deepEqual(brokenAnchors, [], 'Every section link has a destination');
    await page.evaluate(async () => {
      await document.fonts.ready;
      for (let y = 0; y < document.body.scrollHeight; y += 600) {
        window.scrollTo(0, y);
        await new Promise(resolve => setTimeout(resolve, 30));
      }
    });
    await page.waitForTimeout(800);
    const overflow = await page.evaluate(() => [...document.querySelectorAll('section h1, section h2, section h3, section p, section a, section img')]
      .filter(el => { const r = el.getBoundingClientRect(); const rail = el.closest('.overflow-x-auto, .metrics-marquee'); return !rail && r.width && (r.left < -1 || r.right > innerWidth + 1); })
      .map(el => `${el.tagName}: ${el.textContent?.trim().slice(0, 70) || el.getAttribute('alt')}`));
    assert.deepEqual(overflow, [], `Content overflows at ${width}px`);
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
    if (width < 1024) {
      const toggle = page.getByRole('button', { name: 'Open navigation' });
      await toggle.click();
      await page.getByRole('navigation', { name: 'Mobile navigation' }).waitFor();
      await page.keyboard.press('Escape');
      assert.equal(await toggle.getAttribute('aria-expanded'), 'false');
      await toggle.click();
      await page.getByRole('navigation', { name: 'Mobile navigation' }).getByRole('link', { name: 'About', exact: true }).click();
      assert.equal(await toggle.getAttribute('aria-expanded'), 'false');
      await page.waitForURL('**/about');
      await page.getByRole('heading', { name: 'I care about the thinking behind the post.' }).waitFor();
    }
    console.log(`PASS ${width}px: content fits; navigation works`);
  }
  await page.setViewportSize({ width: 667, height: 320 });
  await page.getByRole('button', { name: 'Open navigation' }).click();
  const menu = page.getByRole('navigation', { name: 'Mobile navigation' });
  assert.ok(await menu.evaluate(el => el.getBoundingClientRect().bottom <= innerHeight));
  await menu.getByRole('link', { name: 'Contact', exact: true }).click();
  await page.waitForURL('**/contact');
  assert.deepEqual(errors, [], 'Browser runtime errors');
  console.log('PASS landscape menu and no browser runtime errors');
} finally {
  await browser?.close();
  server.close();
}
