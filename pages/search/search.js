// pages/search/search.js
Page({

  /**
   * Page initial data
   */
  data: {
    cards: [
      { title: "Gathering Space", city: "Shanghai", image_url: "https://images.unsplash.com/photo-1592247350271-c5efb34dd967?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=675&ixid=MnwxfDB8MXxyYW5kb218MHx8aW50ZXJpb3J8fHx8fHwxNjI2Njc1OTY3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1200" },
      { title: "Cozy Kitchen", city: "Beijing", image_url: "https://images.unsplash.com/photo-1600607686527-6fb886090705?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=675&ixid=MnwxfDB8MXxyYW5kb218MHx8aW50ZXJpb3J8fHx8fHwxNjI2Njc2MDU4&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1200" },
      {title: 'Party Room', city: "Shenzhen", image_url: "https://images.unsplash.com/photo-1587316205943-b15dc52a12e0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=675&ixid=MnwxfDB8MXxyYW5kb218MHx8aW50ZXJpb3J8fHx8fHwxNjI2Njc2MDgz&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1200"},
      { title: 'Open Workspace', city: 'Shanghai', image_url: "https://images.unsplash.com/photo-1519642918688-7e43b19245d8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=675&ixid=MnwxfDB8MXxyYW5kb218MHx8aW50ZXJpb3J8fHx8fHwxNjI2Njc2MTA2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1200"},
    ]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log(options);
    const page = this;
    const query = options.query;
    const location = options.location || null
      wx.request({
        url: `https://airspace-api.herokuapp.com/api/v1/spaces?query=${query}`,
        method: "GET",
        success(res) {
          const spaces = res.data.spaces;
          // console.log(spaces);
          page.setData({
            spaces: spaces,
            location: location
          });
        }
      })
    
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})