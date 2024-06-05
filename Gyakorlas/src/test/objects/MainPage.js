const { chromium } = require("@playwright/test")

class MainPage {
    constructor(page) {
        this.page = page;
        this.articleButton = this.page.getByText('Articles').click();
    }

    async open() {
        return this.page.goto('https://wearecommunity.io/');
    }

    async clickArticlesButton() {
        await this.articleButton.click();
    }
}

module.exports = MainPage;