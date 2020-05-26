// pages/ShoppingCart/index.js
import {asyncShowModal} from "../../asyncUtil/asyncUtil.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //本地缓存数据
    getData:[],
    //总价
    price:0.00,
    //初始全选状态
    checked:false
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 页面加载时获取本地储存数据
    let getData = wx.getStorageSync('cate') || [];
    //储存修改过后的新数据 重新渲染页面
    this.saveData(getData)
  },

  //全选点击事件
  checkedToogle:function(evnt){
    let index = evnt.currentTarget.dataset.index
    let getData = wx.getStorageSync('cate') || [];
    //如果这个商品的checked是真那么变为假如果是假变为真
    getData[index].checked === true ? getData[index].checked = false : getData[index].checked = true 
     //储存修改过后的新数据 重新渲染页面
     this.saveData(getData)
    //每次点击判断是否所有商品都被选中
    let flag;
    for(let i = 0; i < getData.length; i++){
      if(!getData[i].checked === true){
        //如果有一个=== false flag等于false
        flag = false;
        break
      }else{
        //全部都===true flag等于true
        flag = true
      }
    }
    //重新渲染页面
    this.setData({
      checked:flag
    })
  },

  //全选点击事件
  checkedAll:function(e){
    //获取到初始的data 里的 checked 和 gedata
    let checked = this.data.checked;
    let getData = this.data.getData;
    //每次点击取反 切换
    checked = !checked
    //储存全局checked值
    this.setData({
      checked:checked
    })
    //
    for(let i = 0; i < getData.length; i++){
      //如果全局checked为false 让全局getdata数组里的每项checked变为fales
      if(!checked){
        getData[i].checked = checked;
      }else{
        getData[i].checked = checked;
        }
    }
   //储存修改后的新的本地储存 重新渲染
    this.saveData(getData)
  },
  
  //减少点击事件
  reduceCount:async function(e){
    //获取本地储存数据
    let getData = wx.getStorageSync('cate') || [];
    //获取购物车里被点击的商品下标
    let index = e.currentTarget.dataset.index
    // console.log(getData)
    if(getData[index].i === 1){
      let res = await asyncShowModal("您确定要删除该商品吗")
      if(res.confirm){
        getData.splice(index,1)
      }
    }else{
      getData[index].i--;
      //单个商品总价
      getData[index].money
      =( getData[index].price * getData[index].i).toFixed(2)
    }
    if(getData.length === 0){
      this.setData({
        checked:false
      })
    }
    //储存修改后的新的本地储存 重新渲染
    this.saveData(getData)
  },

  //增加点击事件
  addCount:function(e){
    let getData = wx.getStorageSync('cate') || [];
    //获取购物车里被点击的商品下标
    let index = e.currentTarget.dataset.index
     getData[index].i++
    //单个商品总价
    getData[index].money
    = (getData[index].price * getData[index].i).toFixed(2)
    //储存修改后的新的本地储存 重新渲染
    this.saveData(getData)
  },

  removeCate:function(e){
    //获取购物车里被点击的商品下标
    let index = e.currentTarget.dataset.index
    let getData = wx.getStorageSync('cate') || [];
    //剪去点击的那个商品
    getData.splice(index,1)
    //储存修改后的新的本地储存 重新渲染
    this.saveData(getData)
    
    if(getData.length === 0){
      this.setData({
        checked:false
      })
    }
  },

  //重新渲染页面函数 储存数据 
  saveData(getData){
    let price = 0
    //每次初次渲染 拿到所有被选中商品的价格
    getData.forEach((e,i)=>{
      if(e.checked === true){
        price += +e.money
      }
    })
    //储存修改后的新的本地储存
    wx.setStorageSync('cate', getData)
    this.setData({
      getData:getData,
      price:price.toFixed(2)
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
    let getData = wx.getStorageSync('cate') || [];
    let flag ;
    for(let i = 0; i < getData.length; i++){
      if(!getData[i].checked === true || getData.length === 0){
        //如果有一个=== false flag等于false
        flag = false;
        break
      }else{
        //全部都===true flag等于true
        flag = true
      }
    }
    //储存修改后的新的本地储存 重新渲染
    this.saveData(getData)
    this.setData({
      checked:flag
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