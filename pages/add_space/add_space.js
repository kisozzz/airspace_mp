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
    ],

    space: {
      title: '',
      type: '',
      city: '',
      address: '',
      price: '',
      image_url: '',
      description: ''
    },
  },

  submit(event){
    const {detail} = event;
  },

  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  createSpace() {
    const space_id = this.data.id;
    const user_id = 1;
    const title = 'studio';
    const category = 'studio';
    const city = 'shanghai';
    const address = 'shanghai';
    const price = '200';
    const description = 'nice space';
    let space = {
      space_id: space_id,
      user_id: user_id,
      title: title,
      category: category,
      city: city,
      address: address,
      price: price,
      description: description
    }
    wx.request({
    //  url: 'https://airspace-api.herokuapp.com/api/v1/spaces',
     url: 'http://localhost:3000/api/v1/spaces',
     method: 'POST',
     data: { space: space },
     success(res) {
       console.log(res)
        wx.redirectTo({
          url: `/pages/my-bookings-listings/my-bookings-listings?id=${user_id}`
        });
      }
    })
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    wx.lin.initValidateForm(this);

    const page = this;
    wx.request({
      url: 'http://localhost:3000/api/v1/spaces',
      method: "GET",
      success(res) {
        const space = res.data;
        console.log(space);
        page.setData({
          space: space
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