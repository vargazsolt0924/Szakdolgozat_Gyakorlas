class MainPage {
   get articlesButton() { return $('//*[@id="app"]/header/div/div/ul[1]/li[6]/a'); }

   open() {
       browser.url('https://wearecommunity.io/');
   }

   clickArticlesButton() {
       this.articlesButton.click();
   }
}

module.exports = new MainPage();
