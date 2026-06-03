const menuData = require('../../data/menu.js');
const storage = require('../../utils/storage.js');

Page({
  data: {
    pageTitle: '今天想吃什么',
    pageDesc: '两个人一起选，少一点纠结',
    categories: [],
    activeCategoryId: '',
    menuItems: [],
    displayItems: [],
    keyword: '',
    selectedMap: {},
    selectedItems: [],
    selectedCount: 0,
    selectedPanelVisible: false,
    errorMessage: '',
    topAreaStyle: 'padding-top: 56px;'
  },

  onLoad() {
    this.setupNavMetrics();
    this.initMenu();
  },

  setupNavMetrics() {
    try {
      const systemInfo = wx.getWindowInfo ? wx.getWindowInfo() : wx.getSystemInfoSync();
      const menuButton = wx.getMenuButtonBoundingClientRect
        ? wx.getMenuButtonBoundingClientRect()
        : null;
      const statusBarHeight = systemInfo.statusBarHeight || 36;
      const topPadding = menuButton ? menuButton.top + 2 : statusBarHeight + 14;

      this.setData({
        topAreaStyle: `padding-top: ${topPadding}px;`
      });
    } catch (error) {
      console.warn('[order] setup nav metrics failed:', error);
    }
  },

  initMenu() {
    const safeCategories = Array.isArray(menuData.categories) ? menuData.categories : [];
    const safeItems = Array.isArray(menuData.menuItems) ? menuData.menuItems : [];
    const activeCategoryId = safeCategories.length ? safeCategories[0].id : '';
    const selectedMap = this.buildSelectedMap(storage.getSelectedIds(), safeItems);
    const displayItems = this.buildDisplayItems(safeItems, activeCategoryId, '', selectedMap);
    const selectedItems = this.buildSelectedItems(safeItems, selectedMap);

    this.setData({
      categories: safeCategories,
      activeCategoryId,
      menuItems: safeItems,
      displayItems,
      selectedMap,
      selectedItems,
      selectedCount: selectedItems.length,
      errorMessage: safeCategories.length ? '' : '菜单数据暂时不可用'
    });
  },

  buildSelectedMap(ids, items) {
    const validIds = {};
    const selectedMap = {};

    items.forEach((item) => {
      if (item && item.id) {
        validIds[item.id] = true;
      }
    });

    if (!Array.isArray(ids)) {
      return selectedMap;
    }

    ids.forEach((id) => {
      if (validIds[id]) {
        selectedMap[id] = true;
      }
    });

    return selectedMap;
  },

  buildSelectedItems(items, selectedMap) {
    if (!Array.isArray(items)) {
      return [];
    }

    return items
      .filter((item) => item && selectedMap[item.id])
      .map((item) => Object.assign({}, item, { isSelected: true }));
  },

  buildDisplayItems(items, categoryId, keyword, selectedMap) {
    if (!Array.isArray(items) || !categoryId) {
      return [];
    }

    const normalizedKeyword = String(keyword || '').trim().toLowerCase();

    return items
      .filter((item) => item && item.categoryId === categoryId)
      .filter((item) => {
        if (!normalizedKeyword) {
          return true;
        }

        const searchableText = [
          item.title,
          item.subtitle,
          item.description,
          Array.isArray(item.tags) ? item.tags.join(' ') : ''
        ].join(' ').toLowerCase();

        return searchableText.indexOf(normalizedKeyword) > -1;
      })
      .map((item) => Object.assign({}, item, { isSelected: !!selectedMap[item.id] }));
  },

  syncSelection(nextSelectedMap) {
    const selectedItems = this.buildSelectedItems(this.data.menuItems, nextSelectedMap);
    const selectedIds = selectedItems.map((item) => item.id);
    const displayItems = this.buildDisplayItems(
      this.data.menuItems,
      this.data.activeCategoryId,
      this.data.keyword,
      nextSelectedMap
    );

    storage.saveSelectedIds(selectedIds);

    this.setData({
      selectedMap: nextSelectedMap,
      selectedItems,
      selectedCount: selectedItems.length,
      displayItems,
      selectedPanelVisible: selectedItems.length ? this.data.selectedPanelVisible : false
    });
  },

  handleCategoryChange(event) {
    const nextCategoryId = event.detail && event.detail.id;

    if (!nextCategoryId || nextCategoryId === this.data.activeCategoryId) {
      return;
    }

    this.setData({
      activeCategoryId: nextCategoryId,
      displayItems: this.buildDisplayItems(
        this.data.menuItems,
        nextCategoryId,
        this.data.keyword,
        this.data.selectedMap
      )
    });
  },

  handleSearchInput(event) {
    const keyword = event.detail ? event.detail.value : '';

    this.setData({
      keyword,
      displayItems: this.buildDisplayItems(
        this.data.menuItems,
        this.data.activeCategoryId,
        keyword,
        this.data.selectedMap
      )
    });
  },

  clearSearch() {
    this.setData({
      keyword: '',
      displayItems: this.buildDisplayItems(
        this.data.menuItems,
        this.data.activeCategoryId,
        '',
        this.data.selectedMap
      )
    });
  },

  handleToggleItem(event) {
    const itemId = event.detail && event.detail.itemId;

    if (!itemId) {
      wx.showToast({
        title: '菜品信息异常',
        icon: 'none'
      });
      return;
    }

    const nextSelectedMap = Object.assign({}, this.data.selectedMap);

    if (nextSelectedMap[itemId]) {
      delete nextSelectedMap[itemId];
    } else {
      nextSelectedMap[itemId] = true;
    }

    this.syncSelection(nextSelectedMap);
  },

  removeSelected(event) {
    const itemId = event.currentTarget.dataset.id;

    if (!itemId) {
      return;
    }

    const nextSelectedMap = Object.assign({}, this.data.selectedMap);
    delete nextSelectedMap[itemId];
    this.syncSelection(nextSelectedMap);
  },

  clearAllSelected() {
    if (!this.data.selectedCount) {
      return;
    }

    this.syncSelection({});
    wx.showToast({
      title: '已清空',
      icon: 'none'
    });
  },

  showSelectedPanel() {
    if (!this.data.selectedCount) {
      wx.showToast({
        title: '还没有选择菜品',
        icon: 'none'
      });
      return;
    }

    this.setData({
      selectedPanelVisible: true
    });
  },

  hideSelectedPanel() {
    this.setData({
      selectedPanelVisible: false
    });
  },

  noop() {},

  confirmSelection() {
    if (!this.data.selectedCount) {
      wx.showToast({
        title: '先选一点想吃的',
        icon: 'none'
      });
      return;
    }

    const names = this.data.selectedItems.map((item) => item.title).join('、');

    wx.showModal({
      title: '选择已确认',
      content: `你们选了 ${this.data.selectedCount} 项：${names}`,
      confirmText: '知道了',
      showCancel: false
    });
  }
});
