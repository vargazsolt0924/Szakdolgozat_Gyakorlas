class MainPage {
    constructor(page) {
        this.page = page;
        this.articleButton = page.locator("li.nav-item.articles-icon a[href='/articles']");
    }

    async open() {
        await this.page.goto('https://wearecommunity.io/', {timeout:20000});
    }

    async clickArticlesButton() {
        await this.articleButton.click();
    }
}

module.exports = MainPage;
