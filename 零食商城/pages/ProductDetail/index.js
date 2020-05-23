// pages/ProductDetail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //储存利用id接收到的当前需要的json
    productData:{},
    //获取到通过options获取到的 id 
    id:null,
    //储存修改过后的json 传给本地储存 storage
    arr:[],
    //购物车里的数量
    count:1
  },
  fn:function(e){
    let productData = require("../../data/details-data")
    let carData = this.data.id
    //获取到通过id属性接收到的那一组json 和 购物车数量
    this.setData({
      productData: productData[carData],
      count:productData[carData].i
    })
  },
  //加入购物车按钮
  joinCar:function(e){
    //每次点击先获取到原来的本地储存的数据
    let getData = wx.getStorageSync('cate') || [];
    //接受本地数据
    this.setData({
      arr:getData
    })
    //push 进去新获取到的商品json
    this.data.arr.push(this.data.productData)
    //储存最新的本地储存数据
    wx.setStorageSync('cate', this.data.arr)
  },
  //添加数量按钮
  addProduct:function(e){
    //每次点击数量增加
    this.data.productData.i++
    //每次点击 改变 通过 id 获取到的这个商品的总价money数据，单价乘以数量 
    this.data.productData.money = this.data.productData.i*this.data.productData.price
    //把每次增加的 i set到全局属性渲染标签
    this.setData({
      count:this.data.productData.i
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //通过跳转到这个页面的options得到被点击的那个商品的ID
    this.setData({
      id: options.id
    })
    this.fn()
    // console.log(this.data.productData)
    // console.log(this.data.count)
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
    // let productData = require("../../data/details-data")
    // let carData = this.data.id
    // this.setData({
    //   productData:productData[carData]
    // })
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