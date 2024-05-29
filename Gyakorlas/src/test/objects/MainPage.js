const {chromium} = require('@playwright/test')

class MainPage {
   get articlesButton() { return $('//*[@id="app"]/header/div/div/ul[1]/li[6]/a'); }
   

   async open() {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://wearecommunity.io/');
    page.waitForTimeout(5000);
    return true;
   }

   clickArticlesButton() {
       this.articlesButton.click();
   }
}

module.exports = new MainPage();
