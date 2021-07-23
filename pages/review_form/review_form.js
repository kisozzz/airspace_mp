// pages/review_form/review_form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleTextInput(e){
    this.setData({
      content: e.detail.value
    })
  },

  changeScore(e){
    console.log(e.detail)
    this.setData({
      rating: e.detail.value
    })
  },

  createReview(){
    const space_id = this.data.space.id;
    const user_id = 1;
    let review = {
      space_id: space_id,
      user_id: user_id,
      rating: rating,
      content: content
    }
    wx.request({
     url: `https://airspace-api.herokuapp.com/api/v1/spaces/${space_id}/reviews`,
     method: 'POST',
     data: { review: review },
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