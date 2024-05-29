class MainPage {
    constructor(page) {
       this.page = page;
    }

    async navigateToMainSite(URL) {
       await this.page.goto(URL);
    }

    async clickArticlesButton() {
       await this.page.click('text="Articles"');
    }

    async clickVideosButton() {
        await this.page.click('text="Videos"');
     }
   }

   module.exports = { MainPage };