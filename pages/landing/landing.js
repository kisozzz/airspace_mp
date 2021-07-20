// pages/landing/landing.js
// Page({
  Page({
    data: {
      cards: [
        'hold',
        'hold',
        'hold',
        'hold',
        'hold',
        'hold'
      ],
      indicatorDots: true,
      autoplay: false,
      interval: 5000,
      duration: 1000,
    },
    changeIndicatorDots: function(e) {
      this.setData({
        indicatorDots: !this.data.indicatorDots
      })
    },
    changeAutoplay: function(e) {
      this.setData({
        autoplay: !this.data.autoplay
      })
    },
    intervalChange: function(e) {
      this.setData({
        interval: e.detail.value
      })
    },
    durationChange: function(e) {
      this.setData({
        duration: e.detail.value
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