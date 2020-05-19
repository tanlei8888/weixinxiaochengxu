//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    swiper_list:[],
    catItems:[],
    floorData:[]
  },
  
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (options) {
    this.getSwipeList()
    this.getCatItems()
    this.getFloorData()
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
  getSwipeList:function(e){
    const swiper_list={
      swiper_img:[{
        "img_src":"http://www.linweiqin.cn/img/banner1.jpg"
      },
      {
        "img_src":"http://www.linweiqin.cn/img/banner2.jpg"
      },
      {
        "img_src":"http://www.linweiqin.cn/img/banner3.jpg"
      },]
    }
    this.setData({
      swiper_list:swiper_list.swiper_img
    })
  },

  //获取navIcon数据
  getCatItems: function (e) {
    const catItems = {
      "message": [{
        "name": "分类",
        "image_src": "http://www.linweiqin.cn/img/cat1.png",
        "open_type": "switchTab",
        "navigator_url": "/pages/user/index"
      }, {
        "name": "秒杀拍",
        "image_src": "http://www.linweiqin.cn/img/cat2.png",
        "open_type": "switchTab",
        "navigator_url": "/pages/user/index"
      }, {
        "name": "超市购",
        "image_src": "http://www.linweiqin.cn/img/cat3.png",
        "open_type": "switchTab",
        "navigator_url": "/pages/user/index"
      }, {
        "name": "母婴品",
        "image_src": "http://www.linweiqin.cn/img/cat4.png",
        "open_type": "switchTab",
        "navigator_url": "/pages/user/index"
      }, {
        "name": "母婴品",
        "image_src": "http://www.linweiqin.cn/img/cat5.png",
        "open_type": "switchTab",
        "navigator_url": "/pages/user/index"
      }],
      "meta": {
        "msg": "获取成功",
        "status": 200
      }
    }
    this.setData({
      catItems: catItems.message
    })
  },
  getFloorData: function (e) {
    const floorData = {
      "message": [{
        "floor_title": {
          "name": "时尚服装",
        },
        "product_list": [{
          "name": "服饰",
          "image_src": "http://www.linweiqin.cn/img/floor1.jpg",
          "open_type": "navigate",
          "navigator_url": "/pages/goodsList/index?query=服饰"
        }, {
          "name": "服饰",
          "image_src": "http://www.linweiqin.cn/img/floor2.jpg",
          "open_type": "navigate",
          "navigator_url": "/pages/goodsList/index?query=服饰"
        }, {
          "name": "服饰",
          "image_src": "http://www.linweiqin.cn/img/floor3.jpg",
          "open_type": "navigate",
          "navigator_url": "/pages/goodsList/index?query=服饰"
        }, {
          "name": "服饰",
          "image_src": "http://www.linweiqin.cn/img/floor4.jpg",
          "open_type": "navigate",
          "navigator_url": "/pages/goodsList/index?query=服饰"
        }, {
          "name": "服饰",
          "image_src": "http://www.linweiqin.cn/img/floor5.jpg",
          "open_type": "navigate",
          "navigator_url": "/pages/goodsList/index?query=服饰"
        }, {
          "name": "服饰",
          "image_src": "http://www.linweiqin.cn/img/floor6.jpg",
          "open_type": "navigate",
          "navigator_url": "/pages/goodsList/index?query=服饰"
        }]
      }],
      "meta": {
        "msg": "获取成功",
        "status": 200
      }
    }
    // console.log(floorData.message[0].floor_title)
    this.setData({
      floorData: floorData.message
    })
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
