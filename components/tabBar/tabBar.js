// components/tabBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    myPage: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    footerList: [{ name: '首页', url: '/pages/index/index' }, { name: '日志', url: '/pages/logs/logs'}],
    ind:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _trunPage(e){
      let index = e.currentTarget.dataset.index;
      let url = e.currentTarget.dataset.item.url
      console.log(e,'----trunPage---')
      wx.reLaunch({
        url: url,
      })
    }
  }
})
