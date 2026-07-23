const { chromium } = require('playwright');

(async () => {
  console.log('Launching browser...');
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const page = await context.newPage();

  // ── 1. EXPORT DARK MODE PDF ──
  console.log('Navigating to http://localhost:3000/deck.html for Dark Mode...');
  await page.goto('http://localhost:3000/deck.html', { waitUntil: 'networkidle' });
  await page.evaluate(() => {
    localStorage.setItem('deck-theme', 'dark');
    document.documentElement.className = 'dark-theme';
  });
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForTimeout(3000); // Wait for animations to settle

  const darkPath = 'C:\\Users\\anura\\Downloads\\infinyty-tech-deck-dark.pdf';
  console.log(`Generating Dark Mode PDF to ${darkPath}...`);
  await page.pdf({
    path: darkPath,
    format: 'A4',
    landscape: true,
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  });
  console.log('Dark Mode PDF generated successfully!');

  // ── 2. EXPORT LIGHT MODE PDF ──
  console.log('Switching to Light Mode...');
  await page.evaluate(() => {
    localStorage.setItem('deck-theme', 'light');
    document.documentElement.className = 'light-theme';
  });
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForTimeout(3000); // Wait for animations to settle

  const lightPath = 'C:\\Users\\anura\\Downloads\\infinyty-tech-deck-light.pdf';
  console.log(`Generating Light Mode PDF to ${lightPath}...`);
  await page.pdf({
    path: lightPath,
    format: 'A4',
    landscape: true,
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  });
  console.log('Light Mode PDF generated successfully!');

  await browser.close();
})();
