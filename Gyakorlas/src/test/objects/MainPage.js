const { chromium } = require("@playwright/test")

class MainPage {
    constructor(page) {
        this.page = page;
        this.articleButton = this.page.locator('//*[@id="app"]/header/div/div/ul[1]/li[6]/a');
    }

    async open() {
        return this.page.goto('https://wearecommunity.io/');
    }

    async clickArticlesButton() {
        await this.articleButton.click();
    }
}

module.exports = MainPage;