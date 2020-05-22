// pages/cateDetail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cateData:[],
    rightContent:[],
    i:null
  },
  fn:function(e){
    let cateDetail = require("../../data/cate-detail")
    // console.log(e)
    // cateDetail[index]
    this.setData({
      cateData:cateDetail
    })
  },
  handleClick:function(e){
    // console.log(e)
    let index=e.currentTarget.dataset.index
    this.setData({
      rightContent:this.data.cateData[index],
      i:index
    })
    
    // console.log(index)
    // console.log(this.data.rightContent)
  },
  handleUrl:function(e){
    let id = this.data.rightContent.id
    wx.navigateTo({
      url: `../../pages/guowei/index?id=${id}`
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fn()
    // this.navigete()
    // console.log(this.data.cateData)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      rightContent:this.data.cateData[0],
      i:0
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
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