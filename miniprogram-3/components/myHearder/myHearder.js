// components/myHearder/myHearder.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabItems:{
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
    handleItemActive(e){
      this.triggerEvent('mytap','haha');
    }
  }
})
