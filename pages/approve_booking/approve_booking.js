// pages/manage_space/manage_space.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  approve() {
    this.data.booking.owner_response = true
    this.data.booking.confirmed = true
    let booking = this.data.booking
    wx.request({
      url: `http://localhost:3000/api/v1/spaces/${booking.space_id}/bookings/${booking.id}`,
      method: "PUT",
      data: booking,
      success() {
        console.log("success")
        wx.navigateTo({
          url: `../../pages/manage_space/manage_space?id=${booking.space_id}`,
        })
      }
    })
  },

  deny() {
    this.data.booking.owner_response = true
    let booking = this.data.booking
    wx.request({
      url: `http://localhost:3000/api/v1/spaces/${booking.space_id}/bookings/${booking.id}`,
      method: "PUT",
      data: booking,
      success() {
        console.log("success")
        wx.navigateTo({
          url: `../../pages/manage_space/manage_space?id=${booking.space_id}`,
        })
      }
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const page = this
    wx.request ({
      url: `http://localhost:3000/api/v1/bookings/${page.options.id}`,
      method: 'GET',
      success(res) {
        const booking = res.data
        page.setData({
          booking: booking
        })
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