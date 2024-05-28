class HomePage {
    constructor(page) {
       this.page = page;
    }

    async navigateToMainSite(URL) {
       await this.page.goto(URL);
    }

    async clickVideosButton() {
       await this.page.click('text="Videos"');
    }
   }

   module.exports = { HomePage };