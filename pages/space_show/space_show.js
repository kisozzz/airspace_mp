// pages/space_show/space_show.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    booking_form: {
      start_date: '',
      end_date: '',
      num: '',
      info: ''
    },
  },

  submit(event){
    const {detail} = event;
  },

  bindShowPopup() {
    this.setData({ showPopup: true })
  },

  createBooking(e) {
    const space_id = this.data.space.id;
    const user_id = 1;
    const start_date = new Date(e.detail.values.start_date);
    const end_date = new Date(e.detail.values.end_date);
    const number_of_people = e.detail.values.num;
    const info = e.detail.values.info
    let booking = {
      space_id: space_id,
      user_id: user_id,
      start_date: start_date,
      end_date: end_date,
      number_of_people: number_of_people,
      additional_info: info
    }
    wx.request({
    // https://airspace-api.herokuapp.com/api/v1/spaces/${space_id}/bookings
     url: `https://airspace-api.herokuapp.com/api/v1/spaces/${space_id}/bookings`,
     method: 'POST',
     data: { booking: booking },
     success(res) {
       console.log(res)
        wx.redirectTo({
          url: `/pages/my-bookings-listings/my-bookings-listings?id=${user_id}`
        });
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.lin.initValidateForm(this);
    // console.log(options.id)
    const space_id = options.id;
    const page = this;
    wx.request({
      url: `https://airspace-api.herokuapp.com/api/v1/spaces/${space_id}`,
      method: "GET",
      success(res) {
        const space = res.data;
        console.log(space);
        page.setData({
          space: space
        });
      }
    });
    wx.request({
      url: `https://airspace-api.herokuapp.com/api/v1/space/${space_id}/reviews`,
      method: "GET",
      success(res) {
        const reviews = res.data;
        console.log(reviews);
        page.setData({
          reviews: reviews.reviews
        });
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})