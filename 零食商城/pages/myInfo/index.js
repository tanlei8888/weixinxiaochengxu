// pages/myInfo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    getData:[],
    address:{},
    userInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let getData = wx.getStorageSync('cate') || [];
    let address = wx.getStorageSync('address') || {};
    let arr = [];
    getData.forEach(e => {
      if(e.checked === true){
        arr.push(e)
      }
    })
    console.log(address)
    this.setData({
      getData:arr,
      address
    })
  },
  //获取个人信息事件
  getUserInfoClick:function(e){
    // console.log(e)
    let userInfo = e.detail.userInfo
    this.setData({
      userInfo
    })
    wx.setStorageSync('userInfo', userInfo)
  },
  //获取地址事件
  getAddress:function(e){

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (e) {
    let userInfo = wx.getStorageSync('userInfo') || {};
    let address = wx.getStorageSync('address') || {};
    this.setData({
      userInfo,
      address
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})