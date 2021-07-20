// pages/landing/landing.js
// Page({
  Page({
    data: {
      cards: [
        { title: "A nice apartment", city: "Shanghai", image_url: "https://images.unsplash.com/photo-1592247350271-c5efb34dd967?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=675&ixid=MnwxfDB8MXxyYW5kb218MHx8aW50ZXJpb3J8fHx8fHwxNjI2Njc1OTY3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1200" },
        'hold',
        'hold',
        'hold',
        'hold',
        'hold'
      ],
      indicatorDots: true,
      avatar: 'https://ca.slack-edge.com/T02NE0241-UDDHS5Q1X-f91c15199529-512'
    },
    changeIndicatorDots: function(e) {
      this.setData({
        indicatorDots: !this.data.indicatorDots
      })
    }
  })
  /**
   * Page initial data
   */
  // data: {

  // },

  /**
   * Lifecycle function--Called when page load
   */
//   onLoad: function (options) {

//   },

//   /**
//    * Lifecycle function--Called when page is initially rendered
//    */
//   onReady: function () {

//   },

//   /**
//    * Lifecycle function--Called when page show
//    */
//   onShow: function () {

//   },

//   /**
//    * Lifecycle function--Called when page hide
//    */
//   onHide: function () {

//   },

//   /**
//    * Lifecycle function--Called when page unload
//    */
//   onUnload: function () {

//   },

//   /**
//    * Page event handler function--Called when user drop down
//    */
//   onPullDownRefresh: function () {

//   },

//   /**
//    * Called when page reach bottom
//    */
//   onReachBottom: function () {

//   },

//   /**
//    * Called when user click on the top right corner to share
//    */
//   onShareAppMessage: function () {

//   }
// })