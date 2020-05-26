let asyncShowModal = function asyncShowModal(content){
  return new Promise(function(resolve,reject){
    wx.showModal({
      content: content,
      success:function(res){
        if(res.confirm){
          resolve(res)
        }else{
          console.log("啥事都没发生")
        }
      }
    })
  })
}
let asyncAddress = function asyncAddress(){
  return new Promise(function(resolve,reject){
    wx.chooseAddress({
      success:function(res){
        resolve(res)
      },
      fail:function(err){
        reject(err)
      }
    })
  })
}
//导出
export {
  asyncShowModal,asyncAddress
}