class AppURL {
  static BaseURL = 'http://127.0.0.1:8000/api';
  static PostContact = this.BaseURL + '/postcontact';
  static AllSiteInfo = this.BaseURL + '/allsiteinfo';
  static AllCategoryDeatils = this.BaseURL + '/allcategory';

  static ProductListByRemark(Remark) {
    return this.BaseURL + '/productlistbyremark/' + Remark;
  }

  static ProductListByCategory(category) {
    return this.BaseURL + '/productlistbycategory/' + category;
  }

  static ProductListBySubCategory(category, subcategory) {
    return (
      this.BaseURL + '/productlistbysubcategory/' + category + '/' + subcategory
    );
  }
  static AllSlider = this.BaseURL + '/allslider';

}

export default AppURL;
