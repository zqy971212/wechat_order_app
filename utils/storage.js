const SELECTED_IDS_KEY = 'COUPLE_MENU_SELECTED_IDS';

function getSelectedIds() {
  try {
    const ids = wx.getStorageSync(SELECTED_IDS_KEY);
    return Array.isArray(ids) ? ids : [];
  } catch (error) {
    console.warn('[storage] get selected ids failed:', error);
    return [];
  }
}

function saveSelectedIds(ids) {
  try {
    wx.setStorageSync(SELECTED_IDS_KEY, Array.isArray(ids) ? ids : []);
    return true;
  } catch (error) {
    console.warn('[storage] save selected ids failed:', error);
    return false;
  }
}

function clearSelectedIds() {
  try {
    wx.removeStorageSync(SELECTED_IDS_KEY);
    return true;
  } catch (error) {
    console.warn('[storage] clear selected ids failed:', error);
    return false;
  }
}

module.exports = {
  SELECTED_IDS_KEY,
  getSelectedIds,
  saveSelectedIds,
  clearSelectedIds
};
