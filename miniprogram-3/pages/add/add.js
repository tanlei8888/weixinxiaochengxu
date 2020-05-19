// pages/add/add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    texts:[
      '2011年1月，&nbsp;微信1.0发布\n',
      '同年5月，微信2.0语音对讲发布\n',
      '10月，微信3.0新增摇一摇功能\n',
      '2012年3月，微信用户突破1亿\n',
      '4月份，微信4.0朋友圈发布\n',
      '同年7月，微信4.2发布公众平台\n',
      '2013年8月，微信5.0发布微信支付\n',
      '2014年9月，企业号发布\n',
      '同月，发布微信卡包\n',
      '2015年1月，微信第一条朋友圈广告\n',
      '2016年1月，企业微信发布\n',
      '2017年1月，小程序发布\n',
    ],
    index:0,
    text:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  addMessage:function(e){
    let texts = this.data.text
    texts += `${1+this.data.index}&nbsp;:&nbsp;${this.data.texts[this.data.index++]}`
    if(this.data.index < this.data.texts.length){
      this.setData({
        text:texts
      })
    }else if(this.data.index === this.data.texts.length){
      this.setData({
        text:`${texts}已经是最后一条新闻`
      })
    }
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