Component({
  properties: {
    item: {
      type: Object,
      value: {}
    },
    selected: {
      type: Boolean,
      value: false
    }
  },

  data: {
    imageError: false
  },

  observers: {
    item() {
      this.setData({
        imageError: false
      });
    }
  },

  methods: {
    handleImageError() {
      this.setData({
        imageError: true
      });
    },

    handleToggle() {
      const item = this.data.item || {};

      this.triggerEvent('toggle', {
        itemId: item.id
      });
    }
  }
});
