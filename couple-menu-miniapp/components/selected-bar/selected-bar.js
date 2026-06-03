Component({
  properties: {
    selectedCount: {
      type: Number,
      value: 0
    }
  },

  methods: {
    handleViewSelected() {
      this.triggerEvent('viewselected');
    },

    handleConfirm() {
      this.triggerEvent('confirm');
    }
  }
});
