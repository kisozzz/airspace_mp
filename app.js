// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    const that = this
    // 登录
    wx.login({
      success: res => {
        console.log(res)
        wx.request({
          // to do: replace with heroku url
          url: 'http://localhost:3000/api/v1/login',
          method: 'POST',
          data: {
            code: res.code
          },
          success(res) {
            // console.log(res)
            that.globalData.user = res.data.user
          }
        })
      }
    })
  },
  globalData: {
   user: null 
  }
})
