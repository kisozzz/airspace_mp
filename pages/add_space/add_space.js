// pages/form/form.js
Page({

  /**
   * Page initial data
   */
  data: {
    typeArray:['Kitchen', 'Work', 'Event'],
    cityArray: ['Shanghai', 'Beijing', 'Shenzhen', 'Xiamen', 'Ningbo', 'Hangzhou', 'Nanjing', 'Chengdu', 'Changsha', 'Chongqing'],
    chooseImgs: [],
    textValue: ''
  },

  uploadImgs: [],

  submitSpace(event){
    console.log(event.detail);
    // const space_id = this.data.id;
    const user_id = 1;
    const title = event.detail.values.title;
    const category = event.detail.values.type;
    const city = event.detail.values.city;
    const address = event.detail.values.address;
    const price = event.detail.values.price;
    const {description, chooseImgs} = this.data;
    let space = {
      user_id: user_id,
      title: title,
      category: category,
      city: city,
      address: address,
      price: price,
      description: description
    }
    chooseImgs.forEach((v,i)=>{
      wx.uploadFile({
        filePath: v,
        name: 'image',
        url: 'img.coolcr.cn/index/api.html',
        formData: {},
        header: {},
        timeout: 0,
        success: (result) => {
          console.log(result)
          let url = JSON.parse(result.data).url;
          this.uploadImgs.push(url);
          // console.log(this.uploadImgs);
        },
      });
    }),
    wx.request({
     url: 'https://airspace-api.herokuapp.com/api/v1/spaces',
    //  url: 'http://localhost:3000/api/v1/spaces',
    // https://airspace-api.herokuapp.com/api/v1/spaces
     method: 'POST',
     data: { space: space },
     success(res) {
       console.log(res)
        wx.redirectTo({
          url: `/pages/my-bookings-listings/my-bookings-listings?id=${user_id}&tab=spaces`
        });
      }
    })
  },

  bindPickerChangeType: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      typeIndex: e.detail.value
    })
  },
  bindPickerChangeCity: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      cityIndex: e.detail.value
    })
  },
  handleChooseImg: function(e) {
    console.log(e.detail)
    this.setData({
      chooseImgs: [...this.data.chooseImgs,...e.detail.all]
    })
  },

  handleTextInput(e){
    console.log(e.detail.value)
    this.setData({
      description:e.detail.value
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    wx.lin.initValidateForm(this);
    console.log(options);
    const page = this;
    wx.request({
      url: 'https://airspace-api.herokuapp.com/api/v1/spaces',
      // url: 'http://localhost:3000/api/v1/spaces',
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