// pages/my-bookings-listings/my-bookings-listings.js
Page({

  /**
   * Page initial data
   */
  data: {
    currentTab:"bookings",

    bookingsBackup: [
      { title: "Cozy Kitchen", city: "Beijing", price: 500, address: "50 Beiluoguxiang", category: 'kitchen', rating: 3, image_url: "https://images.unsplash.com/photo-1600607686527-6fb886090705?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=675&ixid=MnwxfDB8MXxyYW5kb218MHx8aW50ZXJpb3J8fHx8fHwxNjI2Njc2MDU4&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1200" },
      { title: 'Open Workspace', city: 'Shanghai', price: 600, address: '100 West Nanjing Rd.', category: 'workspace', rating: 4, image_url: "https://images.unsplash.com/photo-1519642918688-7e43b19245d8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=675&ixid=MnwxfDB8MXxyYW5kb218MHx8aW50ZXJpb3J8fHx8fHwxNjI2Njc2MTA2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1200"}
    ]
  },

  showSpaces() {
    this.setData({ currentTab: 'spaces' })
  },

  showBookings() {
    this.setData({ currentTab: 'bookings' })
  },

  showPopup() {
    this.setData({ showPopup: true})
  },

  updateBooking(e) {
    const booking_id = this.data.booking.id
    const space_id = this.data.booking.space_id
    // const user_id = this.data.booking.user_id
    const user_id = 1
    const start_date = new Date(e.detail.values.start_date);
    const end_date = new Date(e.detail.values.end_date);
    const number_of_people = e.detail.values.num;
    const info = e.detail.values.info
    let newBooking = {
      space_id: space_id,
      user_id: user_id,
      start_date: start_date,
      end_date: end_date,
      number_of_people: number_of_people,
      additional_info: info,
      owner_response: false,
      confirmed: false
    }
    console.log(newBooking)
    wx.request({
      url: `https://airspace-api.herokuapp.com/api/v1/spaces/${space_id}/bookings/${booking_id}`,
      method: "PUT",
      data: newBooking,
      success() {
        console.log("success")
        wx.navigateTo({
          url: `my-bookings-listings?id=${user_id}`,
        })
      }
    })
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    // const userID = options.id || 1
    const userID = 1
    wx.lin.initValidateForm(this);
    const targetTab = options.tab || null

    if (targetTab ===  'spaces') {
      this.setData({
        currentTab: "spaces"
      })
    } else {
      this.setData({
        currentTab: "bookings"
      })
    }
    const page = this;
      wx.request({
        url: `https://airspace-api.herokuapp.com/api/v1/bookings/user/${userID}`,
        method: "GET",
        success(res) {
        console.log('request 1 bookings')
          const bookings = res.data.bookings
          page.setData({
            bookings: bookings
          });
        }
      })

      wx.request({
        url: `https://airspace-api.herokuapp.com/api/v1/spaces/user/${userID}`,
        // url: 'http://localhost:3000/api/v1/spaces',
        method: "GET",
        success(res) {
          console.log('request 2 spaces')
          const spaces = res.data.spaces
          page.setData({
            spaces: spaces
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