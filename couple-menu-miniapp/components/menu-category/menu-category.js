Component({
  properties: {
    categories: {
      type: Array,
      value: []
    },
    activeId: {
      type: String,
      value: ''
    }
  },

  methods: {
    handleTap(event) {
      const id = event.currentTarget.dataset.id;

      if (!id) {
        return;
      }

      this.triggerEvent('change', { id });
    }
  }
});
