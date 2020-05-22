// pages/ProductDetail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productData:{},
    id:null,
    arr:[],
    count:1
  },
  fn:function(e){
    let productData = require("../../data/details-data")
    let carData = this.data.id
    this.setData({
      productData: productData[carData],
      count:productData[carData].count
    })
  },
  joinCar:function(e){
    let getData = wx.getStorageSync('cate') || [];
    this.setData({
      arr:getData
    })
    this.data.arr.push(this.data.productData)
    wx.setStorageSync('cate', this.data.arr)
  },
  addProduct:function(e){
    this.data.productData.count++
    this.setData({
      count:this.data.productData.count
    })
    // console.log(this.data.productData.count++)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // let getData = wx.getStorageSync('cate')
    this.setData({
      id: options.id
      // arr: getData
    })
    this.fn()
    console.log(this.data.productData)
    console.log(this.data.count)
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
    this.setData({
      count:this.data.productData.count
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