// components/_theme/_theme.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    themeData:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick:function(e){
      this.triggerEvent("mytab",e.currentTarget)
    }
  }
})
