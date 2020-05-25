// pages/pay/pay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:{},
    getData:[],
    price:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //支付函数
  payClick:function(e){
    wx.showModal({
      content:'支付接口暂时关闭',
      success:function(res){
        if(res.confirm){
          wx.switchTab({
            url: '/pages/myInfo/index',
          })
        }
      }
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
    let address = wx.getStorageSync('address') || {};
    let getData = wx.getStorageSync('cate') || [];
    let price = 0;
    let arr=[]
    getData.forEach(e => {
      if(e.checked === true){
        price += +e.money
        arr.push(e)
      }
    })
    this.setData({
      getData:arr,
      address,
      price
    })
    // console.log(getData)
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