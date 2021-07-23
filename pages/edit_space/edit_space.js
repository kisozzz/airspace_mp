// pages/edit_space/edit_space.js
Page({

  /**
   * 页面的初始数据
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
    const space_id = this.data.space.id;
    const user_id = 1;
    const title = event.detail.values.title;
    const category = event.detail.values.type;
    const city = event.detail.values.city;
    const address = event.detail.values.address;
    const price = event.detail.values.price;
    const {description, chooseImgs} = this.data;
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
     url: `https://airspace-api.herokuapp.com/api/v1/spaces/${space_id}`,
     method: 'PUT',
     data: { space: space },
     success(res) {
       console.log(res)
        wx.redirectTo({
          url: `/pages/my-bookings-listings/my-bookings-listings?id=${user_id}&tab=spaces`
        });
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.lin.initValidateForm(this);
    let page = this;

    wx.showToast({
      title: 'Loading...',
      icon: 'loading',
      duration: 1500
    });


    // Get story data from server (to show in form)
    wx.request({
      url: `https://airspace-api.herokuapp.com/api/v1/spaces/${options.id}`,
      method: 'GET',
      success(res) {
        var space = res.data;

        // Update local data
        page.setData({
          space
        });

        wx.hideToast();
      }
    });
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