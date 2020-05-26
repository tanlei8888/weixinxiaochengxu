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
    count:1,
    activeTab:"detail"
  },

  //加入购物车按钮
  joinCar:function(e){
    //每次点击先获取到原来的本地储存的数据
    let getData = wx.getStorageSync('cate') || [];
    //利用id判断本地储存内是否已经储存该商品
    let i = getData.findIndex(e=> e.id === this.data.productData.id)
    //-1 表示不存在 push进本地储存
    if(i === -1){
      this.data.productData.i =  this.data.count
      getData.push(this.data.productData)
    }else{
        //已经存在该商品 只添加数量至购物车
        getData[i].i = getData[i].i + this.data.count
        getData[i].money = (getData[i].i * getData[i].price).toFixed(2)
    }
    
    //接受本地数据
    this.setData({
      arr:getData,
    })
    //储存最新的本地储存数据
    wx.setStorageSync('cate', getData)
  },

  //添加数量按钮
  addProduct:function(e){
    //每次点击数量增加
    let count = this.data.count
    ++count
    //把每次增加的 i set到全局属性渲染标签
    this.setData({
      count
    })
    //每次点击 改变 通过 id 获取到的这个商品的总价money数据，单价乘以数量 
    this.data.productData.money = (this.data.count*this.data.productData.price).toFixed(2)
  },
  //切换底部详情样式事件
  handleChange:function(e){
    this.setData({
      activeTab:e.target.dataset.tab
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //通过跳转到这个页面的options得到被点击的那个商品的ID
    let productData = require("../../data/details-data")
    let carData = options.id
    if(carData === undefined){
      this.setData({
        productData: productData.qiyiguo,
      })
    }else{
      this.setData({
        productData: productData[carData],
        count:productData[carData].i,
        id: carData
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
    this.setData({
      count:1
    })
    // console.log(this.data.productData)
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