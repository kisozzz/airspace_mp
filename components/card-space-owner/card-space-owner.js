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

  methods: {
    deleteSpace() {
      const space_id = this.data.space.id;
      const user_id = this.data.space.user_id;

      wx.request({
        //  api/v1/spaces/:id
        url: `https://airspace-api.herokuapp.com/api/v1/spaces/${space_id}`,
        method: 'DELETE',
        success(res) {
          console.log(res);
          wx.redirectTo({
            url: `/pages/my-bookings-listings/my-bookings-listings?id=${user_id}`
          });
        }
      })
    },

    editSpace(){
      const user_id = this.data.space.user_id;
      wx.redirectTo({
        url: `/pages/edit_space/edit_space?id=${user_id}`
      })
    }

  }
})
