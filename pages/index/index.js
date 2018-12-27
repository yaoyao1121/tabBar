//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list: [{ id: '123', name: "zhangsan", age: '17' }, { id: '456', name: "zhangsan", age: '18' }],
    flag:true
  },

  onLoad: function () {
   
  },
  moreTab(){
    let flag=this.data.flag;
    this.setData({flag:!flag})
  },
  showTab(){
    setTimeout(function(){
      wx.showTabBar({})
    },3000)
    
  },
  hideTab(){
    setTimeout(function(){
      wx.hideTabBar({})
    },3000)
    
  }
})
