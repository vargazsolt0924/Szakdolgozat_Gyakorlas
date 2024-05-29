class VideosPage {
    constructor(page) {
       this.page = page;
    }
  
    async searchForVideos(keyword) {
       await this.page.fill('//*[@id="agenda_filters"]/div/div/div[1]/div/div/div[1]/div/input', keyword);
       await this.page.press('//*[@id="agenda_filters"]/div/div/div[1]/div/div/div[1]/div/input', 'Enter');
    }
  
   }
  
   module.exports = { VideosPage };