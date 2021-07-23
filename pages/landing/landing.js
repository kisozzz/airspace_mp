// pages/landing/landing.js
// Page({
  Page({
    data: {
      spacesBackup: [
        { title: "Gathering Space", city: "Shanghai", image_urls: ["https://images.unsplash.com/photo-1592247350271-c5efb34dd967?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=675&ixid=MnwxfDB8MXxyYW5kb218MHx8aW50ZXJpb3J8fHx8fHwxNjI2Njc1OTY3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1200"] },
        { title: "Cozy Kitchen", city: "Beijing", image_urls: ["https://images.unsplash.com/photo-1600607686527-6fb886090705?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=675&ixid=MnwxfDB8MXxyYW5kb218MHx8aW50ZXJpb3J8fHx8fHwxNjI2Njc2MDU4&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1200"]},
        {title: 'Party Room', city: "Shenzhen", image_urls: ["https://images.unsplash.com/photo-1587316205943-b15dc52a12e0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=675&ixid=MnwxfDB8MXxyYW5kb218MHx8aW50ZXJpb3J8fHx8fHwxNjI2Njc2MDgz&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1200"]},
        { title: 'Open Workspace', city: 'Shanghai', image_urls: ["]https://images.unsplash.com/photo-1519642918688-7e43b19245d8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=675&ixid=MnwxfDB8MXxyYW5kb218MHx8aW50ZXJpb3J8fHx8fHwxNjI2Njc2MTA2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1200"]}
      ],
      indicatorDots: true,
      avatar: 'https://ca.slack-edge.com/T02NE0241-UDDHS5Q1X-f91c15199529-512'
    },
    changeIndicatorDots: function(e) {
      this.setData({
        indicatorDots: !this.data.indicatorDots
      })
    },

    searchSpaces(e) {
      // console.log(e.detail.value.query)
      const query = e.detail.value.query
      wx.navigateTo({
        url: `/pages/search/search?query=${query}`,
      })
    },

    navigateToLocationSearch() {
      const query = 'shanghai'
      const location = 'Shanghai'
      wx.navigateTo({
        url: `/pages/search/search?query=${query}&location=${location}`,
      })
    },

    onLoad: function (options) {
      const page = this;
      wx.request({
        url: "https://airspace-api.herokuapp.com/api/v1/spaces",
        method: "GET",
        success(res) {
          const spaces = res.data.spaces;
          const spacesSwiper = spaces.slice(-5);
          // console.log(spaces);
          page.setData({
            spaces: spaces,
            spacesSwiper: spacesSwiper
          });
        }
      })
    },
  })
  