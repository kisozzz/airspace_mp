// pages/form/form.js
Page({

  /**
   * Page initial data
   */
  data: {
    array: ['Shanghai', 'Beijing', 'Shenzhen'],
    objectArray: [
      {
        id: 0,
        name: 'Shanghai'
      },
      {
        id: 1,
        name: 'Beijing'
      },
      {
        id: 2,
        name: 'Shenzhen'
      },
      {
        id: 3,
        name: '日本'
      }
    ]
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

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