class ArticlesPage {
    get searchInput() { return $('.evnt-search-filter .form-control.evnt-search'); }
    get articleCards() { return $$('.evnt-articles-wrapper .evnt-card-wrapper'); }
    get articleCardTitles() { return $$('.evnt-articles-wrapper .evnt-article-name'); }
    get tagFilter() { return $('#filter_tag'); }
    get tagFilterInput() { return $('.evnt-filter-menu.show .evnt-search'); }
    get tagFilterHighlightedItem() { return $('.highlight-text'); }
    get moreFiltersOption() { return $('//*[@id="agenda_filters"]/div/div[1]/div[1]/div/div/div[4]'); }
    get languageFilter() { return $('#filter_language'); }
    get languageFilterCheckBox() { return $('.evnt-filter-item'); }
    get checkBoxName() { return $$('.evnt-filter-item .form-check-label'); }
 
    open() {
        browser.url('https://wearecommunity.io/articles');
    }
 
    searchForInput(input) {
        this.searchInput.setValue(input);
        browser.keys('Enter'); // Ensure the search is triggered
    }
 
    getArticleCardTitles() {
        return this.articleCardTitles.map(el => el.getText());
    }
 
    clickTagFilter() {
        this.tagFilter.click();
    }
 
    setTagFilterInput(tag) {
        this.tagFilterInput.setValue(tag);
    }
 
    clickHighlightedCheckbox() {
        this.tagFilterHighlightedItem.click();
    }
 
    clickMoreFiltersOption() {
        this.moreFiltersOption.click();
    }
 
    clickLanguageFilter() {
        this.languageFilter.click();
    }
 
    selectLanguageCheckbox(language) {
        const checkboxes = this.checkBoxName;
        for (let checkbox of checkboxes) {
            if (checkbox.getText().toLowerCase().includes(language.toLowerCase())) {
                checkbox.click();
                break;
            }
        }
    }
 }
 
 module.exports = new ArticlesPage();