const { Given, When, Then, world} = require('@cucumber/cucumber');
const MainPage = require('../objects/MainPage.js');
const ArticlesPage = require('../objects/ArticlesPage.js');

Given(/^the 'Main' site is opened$/, async () => {    
    const mainPage = new MainPage(world.page);
    await mainPage.open();
});

Given(/^the 'Articles' button is clicked$/, async () => {
    await MainPage.clickArticlesButton();
});

When(/^I search for '([^']*)'$/, async (input) => {
    await ArticlesPage.searchForInput(input);
});

Then(/^I see (\d+) article card$/, async (expectedCardCount) => {
    await ArticlesPage.waitForArticleCardsCount(expectedCardCount);
});

Then(/^All cards contain the '([^']*)' word$/, async (word) => {
    await ArticlesPage.verifyAllCardsContainWord(word);
});

When(/^I narrow the tag to '([^']*)'$/, async (tag) => {
    await ArticlesPage.clickTagFilter();
    await ArticlesPage.setTagFilterInput(tag);
});

When(/^I click the highlighted checkbox$/, async () => {
    await ArticlesPage.clickHighlightedCheckbox();
});

Then(/^the 'More Filters' option is opened$/, async () => {
    await ArticlesPage.clickMoreFiltersOption();
    await ArticlesPage.waitForMoreFiltersOption();
});

Then(/^the Language Filter Dropdown is opened$/, async () => {
    await ArticlesPage.clickLanguageFilter();
    await ArticlesPage.waitForLanguageFilterDropdown();
});

When(/^I select the '([^']*)' checkbox$/, async (language) => {
    await ArticlesPage.selectLanguageCheckbox(language);
});