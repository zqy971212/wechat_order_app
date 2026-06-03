# 情侣点单 MVP

一个微信原生小程序 MVP，用本地 mock 数据实现情侣私下使用的点单菜单页。当前版本不需要登录、不接后端、不接云开发、不支付、不创建真实订单。

## 目录结构

```text
couple-menu-miniapp
├── app.js
├── app.json
├── app.wxss
├── pages/order
├── components/menu-category
├── components/menu-item-card
├── components/selected-bar
├── data/menu.js
├── utils/storage.js
└── assets/images
```

## 当前功能

- 接近外卖菜单页的 UI：自定义顶部、圆角搜索框、图标分类栏、菜品卡片和黄色底部选择栏。
- 顶部标题、说明文案和搜索框。
- 左侧图标分类 Tabs，右侧按分类展示菜单项目。
- 内置 26 个 mock 菜单项目，`其他` 分类暂时留空用于验证空状态。
- 点击加号选择，再次点击取消选择。
- 底部固定选择栏实时展示已选数量。
- 点击「查看已选」弹出已选列表，并支持取消选择。
- 点击「确认选择」展示确认弹窗，不产生真实订单。
- 已选项目 ID 保存到微信本地 storage，刷新后仍会保留。
- 数据为空或格式异常时做了基础兜底，避免页面直接报错。

## 如何运行

1. 打开微信开发者工具。
2. 选择「导入项目」。
3. 项目目录选择本文件夹：`couple-menu-miniapp`。
4. AppID 可先使用测试号、游客模式，或保留 `project.config.json` 中的 `touristappid`。
5. 导入后编译运行，默认页面是 `pages/order/order`。

## 维护菜单数据

菜单和分类都在 `data/menu.js` 中：

- `categories` 控制左侧分类。
- `menuItems` 控制右侧菜单项目。
- 每个菜单项目建议保持 `id`、`categoryId`、`image`、`title`、`subtitle`、`description`、`tags`、`price` 字段。
- 当前图片统一使用 `assets/images/menu-placeholder.svg`，后续可替换为真实图片路径。

## 未来扩展方向

1. 接入微信云开发数据库：把 `data/menu.js` 替换为云数据库查询，并保持页面消费的数据字段一致。
2. 增加用户系统：在 `app.js` 或独立 service 中处理登录态、情侣绑定关系和用户偏好。
3. 增加菜单管理后台：后台维护分类、菜品、图片、标签、上下架状态，再由小程序拉取。
4. 增加购物车和订单：把当前选择列表升级为购物车，补充数量、备注、规格和订单状态。
5. 增加微信支付：订单确认后接入支付能力，并增加支付回调与订单校验。
6. 增加商用多店铺模式：为分类、菜品和订单增加 `shopId`，支持多门店、营业状态和店铺配置。
