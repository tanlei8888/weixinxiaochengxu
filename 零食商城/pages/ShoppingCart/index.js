// pages/ShoppingCart/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    getData:[]
    
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(this.data.getData)
    let getData = wx.getStorageSync('cate')
    this.setData({
      getData:getData
    })
  },
  //减少点击事件
  reduceCount:function(e){
    // this.data.
  },
  //增加点击事件
  addCount:function(e){

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let getData = wx.getStorageSync('cate')
    this.setData({
      getData:getData
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