const { test, expect } = require('@playwright/test');

const URL = "https://wearecommunity.io/";

test('Videó keresés', async ({ page }) => {
    // Oldal megnyitása
    await page.goto(URL);
    
    // Várakozás az elem betöltődésére
    await page.waitForSelector('text="Videos"');
    
    // Videók oldalra navigálás
    await Promise.all([
      page.click('text="Videos"'),
      page.waitForNavigation({ waitUntil: 'networkidle' }),
    ]);
  
    // Keresőmező kitöltése és keresés végrehajtása
    // Feltételezve, hogy a keresőmező `type="search"` attribútummal rendelkezik
    await page.fill('.evnt-search', 'English');
    await page.press('.evnt-search', 'Enter');
    
    // Várakozás az eredmények megjelenésére
    await page.waitForSelector(`text="English"`);

  });