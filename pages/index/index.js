//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // 组件所需的参数
    nvabarData: {
      showCapsule: 1, //是否显示左上角图标   1表示显示    0表示不显示
      showBack:1,
      showHome:1,
      title: '首页', //导航栏 中间的标题
    },
    height: app.globalData.height * 2 + 20,
  },
  onLoad() {
    console.log(this.data.height)
  }
})