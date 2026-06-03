const PLACEHOLDER_IMAGE = '/assets/images/menu-placeholder.svg';

const categories = [
  { id: 'recommend', name: '推荐', icon: '/assets/images/icons/recommend.svg' },
  { id: 'staple', name: '主食', icon: '/assets/images/icons/staple.svg' },
  { id: 'drink', name: '饮料', icon: '/assets/images/icons/drink.svg' },
  { id: 'dessert', name: '甜品', icon: '/assets/images/icons/dessert.svg' },
  { id: 'snack', name: '小吃', icon: '/assets/images/icons/snack.svg' },
  { id: 'other', name: '其他', icon: '/assets/images/icons/other.svg' }
];

// MVP 阶段使用本地 mock。后续接后台时，可保持字段结构一致并替换数据来源。
const menuItems = [
  {
    id: 'rec-001',
    categoryId: 'recommend',
    image: PLACEHOLDER_IMAGE,
    title: '日式咖喱饭',
    subtitle: '米饭、咖喱、鸡肉、土豆',
    description: '胡萝卜组合，口味稳定，适合两个人一起选。',
    tags: ['推荐', '热食'],
    price: 0,
    badge: '推荐'
  },
  {
    id: 'rec-002',
    categoryId: 'recommend',
    image: PLACEHOLDER_IMAGE,
    title: '日式豚骨拉面',
    subtitle: '浓郁豚骨汤底，鲜香不腻',
    description: '配溏心蛋和叉烧，适合想吃热汤面的时候。',
    tags: ['热食', '经典'],
    price: 0
  },
  {
    id: 'rec-003',
    categoryId: 'recommend',
    image: PLACEHOLDER_IMAGE,
    title: '台式卤肉饭',
    subtitle: '经典台式风味，卤肉香浓',
    description: '搭配酸菜解腻，适合想吃家常饭的时候。',
    tags: ['家常', '推荐'],
    price: 0
  },
  {
    id: 'rec-004',
    categoryId: 'recommend',
    image: PLACEHOLDER_IMAGE,
    title: '柠檬蜂蜜茶',
    subtitle: '清新柠檬搭配蜂蜜',
    description: '酸甜适中，解腻醒神，适合配主食。',
    tags: ['饮品', '清爽'],
    price: 0
  },
  {
    id: 'rec-005',
    categoryId: 'recommend',
    image: PLACEHOLDER_IMAGE,
    title: '提拉米苏',
    subtitle: '绵密口感，咖啡香与可可粉',
    description: '甜度柔和，适合饭后一起分享。',
    tags: ['甜品', '人气'],
    price: 0
  },
  {
    id: 'staple-001',
    categoryId: 'staple',
    image: PLACEHOLDER_IMAGE,
    title: '黑椒牛柳炒饭',
    subtitle: '香气足，饱腹感强',
    description: '牛柳、洋葱和彩椒快炒，黑椒味明显。',
    tags: ['主食', '热食', '咸香']
  },
  {
    id: 'staple-002',
    categoryId: 'staple',
    image: PLACEHOLDER_IMAGE,
    title: '咖喱鸡肉饭',
    subtitle: '温柔咖喱，不辣',
    description: '土豆胡萝卜炖到软糯，适合想吃暖食的时候。',
    tags: ['主食', '热食', '不辣']
  },
  {
    id: 'staple-003',
    categoryId: 'staple',
    image: PLACEHOLDER_IMAGE,
    title: '葱油拌面',
    subtitle: '简单但很香',
    description: '葱油、酱油和细面拌匀，适合夜宵。',
    tags: ['主食', '快手', '热食']
  },
  {
    id: 'staple-004',
    categoryId: 'staple',
    image: PLACEHOLDER_IMAGE,
    title: '菌菇鸡汤面',
    subtitle: '清淡一点，也有满足感',
    description: '鸡汤打底，配菌菇和青菜，汤头鲜甜。',
    tags: ['主食', '清淡', '暖胃']
  },
  {
    id: 'staple-005',
    categoryId: 'staple',
    image: PLACEHOLDER_IMAGE,
    title: '蛋包饭',
    subtitle: '软软的，有一点仪式感',
    description: '番茄炒饭外盖嫩蛋，配少量酱汁。',
    tags: ['主食', '人气', '酸甜']
  },
  {
    id: 'staple-006',
    categoryId: 'staple',
    image: PLACEHOLDER_IMAGE,
    title: '鲜虾云吞面',
    subtitle: '汤面党友好',
    description: '云吞皮薄馅足，配细面和青菜。',
    tags: ['主食', '清淡', '热食']
  },
  {
    id: 'drink-001',
    categoryId: 'drink',
    image: PLACEHOLDER_IMAGE,
    title: '柠檬红茶',
    subtitle: '酸甜清爽',
    description: '红茶搭配新鲜柠檬，适合配油一点的主食。',
    tags: ['饮料', '冰饮', '清爽']
  },
  {
    id: 'drink-002',
    categoryId: 'drink',
    image: PLACEHOLDER_IMAGE,
    title: '热可可',
    subtitle: '甜甜暖暖',
    description: '可可味浓，适合冷天或看电影时喝。',
    tags: ['饮料', '热饮', '甜']
  },
  {
    id: 'drink-003',
    categoryId: 'drink',
    image: PLACEHOLDER_IMAGE,
    title: '蜜桃乌龙',
    subtitle: '茶香和果香都轻轻的',
    description: '低甜度乌龙茶，带一点蜜桃香气。',
    tags: ['饮料', '清淡', '低甜']
  },
  {
    id: 'drink-004',
    categoryId: 'drink',
    image: PLACEHOLDER_IMAGE,
    title: '百香果气泡水',
    subtitle: '想清醒一点就选它',
    description: '百香果酸味明显，气泡感足。',
    tags: ['饮料', '冰饮', '酸甜']
  },
  {
    id: 'drink-005',
    categoryId: 'drink',
    image: PLACEHOLDER_IMAGE,
    title: '桂花酒酿奶',
    subtitle: '柔和甜香',
    description: '酒酿香气很轻，桂花味温柔。',
    tags: ['饮料', '热饮', '香甜']
  },
  {
    id: 'dessert-001',
    categoryId: 'dessert',
    image: PLACEHOLDER_IMAGE,
    title: '草莓奶冻',
    subtitle: '饭后一点甜',
    description: '奶冻入口细腻，草莓酸甜平衡。',
    tags: ['甜品', '冰凉', '推荐']
  },
  {
    id: 'dessert-002',
    categoryId: 'dessert',
    image: PLACEHOLDER_IMAGE,
    title: '焦糖布丁',
    subtitle: '甜度刚好',
    description: '布丁口感顺滑，焦糖香气明显。',
    tags: ['甜品', '人气', '香甜']
  },
  {
    id: 'dessert-003',
    categoryId: 'dessert',
    image: PLACEHOLDER_IMAGE,
    title: '芋泥小丸子',
    subtitle: '软糯党会喜欢',
    description: '芋泥绵密，小丸子 Q 弹，适合分享。',
    tags: ['甜品', '软糯', '双人']
  },
  {
    id: 'dessert-004',
    categoryId: 'dessert',
    image: PLACEHOLDER_IMAGE,
    title: '抹茶巴斯克',
    subtitle: '微苦不腻',
    description: '抹茶香气清楚，芝士口感浓郁。',
    tags: ['甜品', '低甜', '西式']
  },
  {
    id: 'dessert-005',
    categoryId: 'dessert',
    image: PLACEHOLDER_IMAGE,
    title: '红豆双皮奶',
    subtitle: '经典温柔款',
    description: '双皮奶细滑，红豆增加一点颗粒感。',
    tags: ['甜品', '清淡', '香甜']
  },
  {
    id: 'snack-001',
    categoryId: 'snack',
    image: PLACEHOLDER_IMAGE,
    title: '盐酥鸡',
    subtitle: '看剧必备',
    description: '外层酥脆，撒一点椒盐更香。',
    tags: ['小吃', '热食', '人气']
  },
  {
    id: 'snack-002',
    categoryId: 'snack',
    image: PLACEHOLDER_IMAGE,
    title: '蒜香薯角',
    subtitle: '比薯条更有满足感',
    description: '土豆外焦里软，蒜香味明显。',
    tags: ['小吃', '热食', '咸香']
  },
  {
    id: 'snack-003',
    categoryId: 'snack',
    image: PLACEHOLDER_IMAGE,
    title: '芝士玉米粒',
    subtitle: '拉丝甜香',
    description: '玉米粒和芝士烤到微焦，适合趁热吃。',
    tags: ['小吃', '热食', '香甜']
  },
  {
    id: 'snack-004',
    categoryId: 'snack',
    image: PLACEHOLDER_IMAGE,
    title: '凉拌海带丝',
    subtitle: '清爽解腻',
    description: '微酸微辣，也可以后续调成不辣。',
    tags: ['小吃', '清淡', '凉菜']
  },
  {
    id: 'snack-005',
    categoryId: 'snack',
    image: PLACEHOLDER_IMAGE,
    title: '鸡蛋火腿三明治',
    subtitle: '轻食但不敷衍',
    description: '鸡蛋、火腿和生菜搭配，适合加餐。',
    tags: ['小吃', '轻食', '快手']
  }
];

module.exports = {
  categories,
  menuItems,
  PLACEHOLDER_IMAGE
};
