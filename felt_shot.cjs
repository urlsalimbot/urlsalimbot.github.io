const { chromium } = require('playwright-core');
(async () => {
  const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome-stable' });
  const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  await p.goto('http://127.0.0.1:4174/', { waitUntil: 'networkidle' });
  await p.waitForTimeout(800);
  await p.screenshot({ path: '/tmp/opencode/felt_home.png' });
  const m = await b.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  await m.goto('http://127.0.0.1:4174/', { waitUntil: 'networkidle' });
  await m.waitForTimeout(600);
  await m.screenshot({ path: '/tmp/opencode/felt_mobile.png' });
  const l = await b.newPage({ viewport: { width: 1440, height: 900 } });
  await l.goto('http://127.0.0.1:4174/', { waitUntil: 'networkidle' });
  await l.evaluate(() => localStorage.setItem('theme', 'light'));
  await l.reload({ waitUntil: 'networkidle' });
  await l.waitForTimeout(600);
  await l.screenshot({ path: '/tmp/opencode/felt_light.png' });
  await b.close();
})();
