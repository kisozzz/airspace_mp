// components/request-card.js
Component({
  /**
   * Component properties
   */
  properties: {
    booking: Object
  },

  /**
   * Component initial data
   */
  data: {

  },

  
  /**
   * Component methods
   */
  methods: {
    goToRequest() {
      wx.navigateTo({
        url: `../../pages/approve_booking/approve_booking?id=${this.data.booking.id}`,
      })
    },
  }
})
