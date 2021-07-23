// pages/components/card.js
Component({
  /**
   * Component properties
   */
  properties: {
      space: Object
  },

  /**
   * Component initial data
   */
  data: {

  },

  /**
   * Component methods
   */
  // NEED TO REDO FOR MY SPACES
  methods: {
    deleteBooking() {
      // console.log('connected');
      // console.log(this.data.booking.id);
      const booking_id = this.data.booking.id;
      const space_id = this.data.booking.space.id;
      const user_id = this.data.booking.user_id;

      ///api/v1/spaces/:space_id/bookings/:id

      wx.request({
        url: `https://airspace-api.herokuapp.com/api/v1/spaces/${space_id}/bookings/${booking_id}`,
        method: 'DELETE',
        success(res) {
          console.log(res);
          wx.redirectTo({
            url: `/pages/my-bookings-listings/my-bookings-listings?id=${user_id}`
          });
        }
      })
    }
  }
})
