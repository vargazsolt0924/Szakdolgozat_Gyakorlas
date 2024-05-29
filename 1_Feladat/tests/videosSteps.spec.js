const { Given, Then } = require('@cucumber/cucumber');
const { HomePage } = require('../Objects/HomePage');
const { VideosPage } = require('../Objects/VideosPage');

const URL = "https://wearecommunity.io/";

Given('the {string} site is opened', async function () {
    const homePage = new HomePage(this.page);
    await homePage.navigateToMainSite(URL);
});

Given('the {string} button is clicked', async function () {
    const homePage = new HomePage(this.page);
    await homePage.clickVideosButton();
});

Then('I search for {string}', async function (keyword) {
    const videosPage = new VideosPage(this.page);
    await videosPage.searchForVideos(keyword);
});