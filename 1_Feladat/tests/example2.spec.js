const { test, expect } = require('@playwright/test');

const URL = "https://wearecommunity.io/";

test('Videó keresés', async ({ page }) => {
    
    await page.goto(URL);
    
    await page.waitForSelector('text="Videos"');
    
    await Promise.all([
      page.click('text="Videos"'),
      page.waitForNavigation({ waitUntil: 'networkidle' }),
    ]);
  
    await page.fill('.evnt-search', 'English');
    await page.press('.evnt-search', 'Enter');
    
    await page.waitForSelector(`text="English"`);

  });