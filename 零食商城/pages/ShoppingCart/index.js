// pages/ShoppingCart/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //本地缓存数据
    getData:[],
    //总价
    price:0.00,
    checked:false
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 页面加载时获取本地储存数据
    let getData = wx.getStorageSync('cate')
    let money = 0
    getData.forEach((e,i)=>{
      if(e.checked === true){
        money += +e.money
      }
    })
    this.setData({
      getData:getData,
      price:money.toFixed(2)
    })
  },

  checkedToogle:function(e){
    let index = e.currentTarget.dataset.index
    let getData = wx.getStorageSync('cate');
    //如果这个商品的checked是真那么变为假如果是假变为真
    getData[index].checked === true ? getData[index].checked = false : getData[index].checked = true 
    //是否所有商品都被选中 选中返回0 否则返回-1
    let flag = getData.findIndex(e => e.checked === true) === 0 ? true : false
    wx.setStorageSync('cate', getData)
    let money = 0
    //被选中的商品价格计算
    getData.forEach((e,i)=>{
      if(e.checked === true){
        money += +e.money
      }
    })
    this.setData({
      getData:getData,
      price:money.toFixed(2),
      checked:flag
    })
    console.log(flag)
    console.log(index)
  },
  //减少点击事件
  reduceCount:function(e){
    //获取本地储存数据
    let getData = wx.getStorageSync('cate')
    //获取购物车里被点击的商品下标
    let index = e.currentTarget.dataset.index
      if(getData[index].i > 1){
        getData[index].i--;
      }
    //单个商品总价
    getData[index].money =( getData[index].price* getData[index].i).toFixed(2)
    //所有商品总价
    let money = 0
    getData.forEach((e,i)=>{
      money += +e.money
    })
    //储存新的改变后的getData 并传给全局data 
    wx.setStorageSync('cate', getData)
    this.setData({
      getData:getData,
    })
    //被选中的商品影响总价
    if( getData[index].checked === true){
      this.setData({
        price:money.toFixed(2)
      })
    }
   

  },
  //增加点击事件
  addCount:function(e){
    let getData = wx.getStorageSync('cate')
    //获取购物车里被点击的商品下标
    let index = e.currentTarget.dataset.index
     getData[index].i++
    //单个商品总价
    getData[index].money = (getData[index].price* getData[index].i).toFixed(2)
    //所有商品总价
    let money = 0
    getData.forEach((e,i)=>{
      money += +e.money
    })
     //储存新的改变后的getData 并传给全局data 
    wx.setStorageSync('cate', getData)
    this.setData({
      getData:getData
    })
     //被选中的商品影响总价
    if( getData[index].checked === true){
      this.setData({
        price:money.toFixed(2)
      })
    }
  },

  removeCate:function(e){
    //获取购物车里被点击的商品下标
    let index = e.currentTarget.dataset.index
    let getData = wx.getStorageSync('cate')
    let price = (this.data.price - getData[index].money).toFixed(2)
    getData.splice(index,1)
    wx.setStorageSync('cate', getData)
    this.setData({
      getData:getData,
      price
    })
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
    let money = 0
    getData.forEach((e,i)=>{
      if(e.checked === true){
        money += +e.money
      }
    })
    this.setData({
      getData:getData,
      price:money.toFixed(2)
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