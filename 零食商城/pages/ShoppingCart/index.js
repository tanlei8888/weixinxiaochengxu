// pages/ShoppingCart/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    getData:[],
    // index:null,
    // countArr:[],
    price:0
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 页面加载时获取本地储存数据
    let getData = wx.getStorageSync('cate')
    getData.map((e,i)=>{
      console.log(e.price*e.i)
    })
    this.setData({
      getData:getData
    })
    // console.log(this.data.getData)
  },
  //减少点击事件
  reduceCount:function(e){
    // console.log(e)
    let getData = wx.getStorageSync('cate')
    let index = e.currentTarget.dataset.index
      if(getData[index].i > 1){
        getData[index].i--
      }
      // console.log(getData[index].money)
      getData[index].money = getData[index].price* getData[index].i
      // console.log(getData[index].price)
      // console.log(getData[index].i)
    wx.setStorageSync('cate', getData)
    this.setData({
      getData:getData,
    })
  },
  //增加点击事件
  addCount:function(e){
    // console.log(e)
    let getData = wx.getStorageSync('cate')
    let index = e.currentTarget.dataset.index
      getData[index].i++
      // console.log(getData[index].money)
      getData[index].money = getData[index].price* getData[index].i
      // console.log(getData[index].price)
      // console.log(getData[index].i)
    wx.setStorageSync('cate', getData)
    this.setData({
      getData:getData,
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