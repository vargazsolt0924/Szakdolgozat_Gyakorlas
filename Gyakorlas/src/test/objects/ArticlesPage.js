class ArticlesPage {
    constructor(page) {
       this.page = page;
    }
  
    async searchForVideos(keyword) {
       await this.page.fill('nav-item active articles-icon', keyword);
       await this.page.press('nav-item active articles-icon', 'Enter');
    }
  
   }

   module.exports = { ArticlesPage };