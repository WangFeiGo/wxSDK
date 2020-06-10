//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userName:"",
    isLogin:  false,
  },
  //事件处理函数
 onShow:function(){
  // console.log(window.navigator.userAgent)
  if(wx.getStorageSync('isLogin')==true){
     this.setData({
       isLogin:true
     })
  }
 },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  changeName:function(a,b){
    // console.log(a,b)
     
    // app.sensors.track('pageView',{
    //   pagename: 'index'
    // })
    
  },
  getUserName:function(e){
   
     this.setData({
      userName: e.detail.value,
    })
     
  },
  doLogin:function(e){
      if(this.data.userName=="admin"){
        wx.showToast({
          title: '登录成功！',
        })
        wx.setStorageSync('isLogin', true);
        this.setData({
          isLogin:true
        })
        getApp().myTrack.user_set("login","admin",{
          khh:"123456", //开户账号
        })
      }
  },
  doLoginOut:function(e){
    wx.removeStorage({
      key:"isLogin"
    });
    this.setData({
      isLogin:false
    })

    getApp().myTrack.user_set("logout");
  },
  onShareAppMessage: function() {
    // let users = wx.getStorageSync('user');
    // if (res.from === 'button') {}
    return {
      title: '转发',
      path: '/pages/home/home',
      success: function(res) {}
    }
  },

})
