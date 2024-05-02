const { test } = require('@playwright/test');
const { HomePage } = require('../Objects/HomePage');
const { VideosPage } = require('../Objects/VideosPage');

const URL = "https://wearecommunity.io/";

test('Navigate to Videos page and search for English videos', async ({ page }) => {
 const homePage = new HomePage(page);
 await homePage.navigateToMainSite(URL);
 await homePage.clickVideosButton();

 const videosPage = new VideosPage(page);
 const searchKeyword = 'English';
 await videosPage.searchForVideos(searchKeyword);

});