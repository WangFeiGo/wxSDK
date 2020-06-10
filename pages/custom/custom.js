//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
   
  },
  onShow:function (e){
    // console.log( getApp());
    getApp().myTrack.event_report({
      id:"page",
      // page_id:"0001",
      page_title:"自定义"
    })
  },
  buttonClick:function(e){
    getApp().myTrack.event_report({
      id:"webclick",
      btn_id:"test"
     
    })
  },
  handleView:function(e){
    console.log(e)
    getApp().myTrack.event_report({
      id:"webclick",
      btn_id:"test2"
    })
  },
  handleMove:function(e){
    // console.log(e)
    // console.log(e.target)
    // console.log(e.currentTarget)
  },
  buttonClickOther:function(){
    getApp().myTrack.event_report({
      id:"other",
    })
  }
})
