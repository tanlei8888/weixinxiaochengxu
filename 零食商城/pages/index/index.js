//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
      swiper_list:[],
      themeData:[],
      newestData:[]
  },
  // 获取轮播图数据
  getSwipeList:function(e){
    const swiper_list={
      swiper_img:[{
        "img_src":"/image/b1.jpg"
      },
      {
        "img_src":"/image/b2.jpg"
      },
      {
        "img_src":"/image/b3.jpg"
      },]
    }
    this.setData({
      swiper_list:swiper_list.swiper_img
    })
  },
  // 获取精选主题数据
  getThemeData: function (e) {
    const themeData = {
      "message": [{
        "themeData_title": {
          "name": "精选主题",
        },
        "themeData_list": [{
          "id": "shuoguo",
          "image_src": "/image/s1.png",
          "open_type": "navigate",
          "navigator_url": "../../pages/guowei/index"
        }, {
          "id": "dianxin",
          "image_src": "/image/s2.png",
          "open_type": "navigate",
          "navigator_url": "../../pages/dianxin/index"
        }, {
          "id": "ganwu",
          "image_src": "/image/s3.png",
          "open_type": "navigate",
          "navigator_url": "../../pages/chaohuo/index"
        }]
      }],
      "meta": {
        "msg": "获取成功",
        "status": 200
      }
    }
    this.setData({
      themeData: themeData.message
    })
  },
  mytab:function(e){
    let index = e.detail.dataset.index
    let navigator_url = this.data.themeData[0].themeData_list[index].navigator_url
    wx.navigateTo({
      url: navigator_url
    })
  },
  getnewestData: function (e) {
    let newestData = require("../../data/newest")
    this.setData({
      newestData: newestData.newest
    })
    // console.log(newestData)
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.getSwipeList()
    this.getThemeData()
    this.getnewestData()
    console.log(this.data.newestData)
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
