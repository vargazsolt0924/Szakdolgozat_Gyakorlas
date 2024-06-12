const { Given, When, Then, BeforeStep, world, setDefaultTimeout } = require('@cucumber/cucumber');
const MainPage = require('../objects/MainPage.js');
const ArticlesPage = require('../objects/ArticlesPage.js');
const expect = require('@playwright/test').expect;
setDefaultTimeout(parseInt(process.env.DEFAULT_TIMEOUT) || 60000);

let mainPage;
let articlesPage;

BeforeStep(async function () {
    mainPage = new MainPage(world.page);
    articlesPage = new ArticlesPage(world.page);
});

Given("the 'Main' site is opened", async () => {    
    await mainPage.open();
});

Given("the 'Articles' button is clicked", async () => {
    await mainPage.clickArticlesButton();
});

When("I search for {string}", async (input) => {
    await articlesPage.searchForInput(input);
});

Then("I see {int} article card", async (expectedCardCount) => {
    await articlesPage.waitForArticleCardsCount(expectedCardCount);
});

Then("All cards contain the {string} word", async (word) => {
    await articlesPage.verifyAllCardsContainWord(word);
});

When("I narrow the tag to {string}", async (tag) => {
    await articlesPage.clickTagFilter();
    await articlesPage.setTagFilterInput(tag);
});

When("I click the highlighted checkbox", async () => {
    await articlesPage.clickHighlightedCheckbox();
});

Then("the 'More Filters' option is opened", async () => {
    await articlesPage.clickMoreFiltersOption();
    await articlesPage.waitForMoreFiltersOption();
});

Then("the Language Filter Dropdown is opened", async () => {
    await articlesPage.clickLanguageFilter();
    await articlesPage.waitForLanguageFilterDropdown();
});

When("I select the {string} checkbox", async (language) => {
    await articlesPage.selectLanguageCheckbox(language);
});
