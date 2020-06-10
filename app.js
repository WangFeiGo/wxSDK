//app.js
var myTrack= require('./utils/sensorsdata.full.js');

myTrack.init({
  show_log:true,
  autoTrack:false,
  channel_env:"dev",
  product_type:"wx",
  product_id:"00488",

});

App({

  onLaunch: function () {
    // 展示本地存储能力
   
    wx.getLocation({
      success:function(obj){
      //  console.log(obj)
      }
    })

    myTrack.event_report({
      id:"system",
      sysType:"start",
    })
    
    //  myTrack.user_set("login","admin")
    
    // console.log(wx.getLaunchOptionsSync())

    // 登录
    wx.login({
      success: res => {
        console.log(res.code)
        var code=res.code;
        var appId = 'wx7cf8ebc6aa7829e3';
          var secret = '4421b4f96bfff47bff132eb0b9e2b083';
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appId + '&secret=' + secret + '&js_code=' + code + '&grant_type=authorization_code',
            header: {
              'content-type': 'json'
            },
            success: function (res) {
              // console.log(res)
              // var openid = res.data.openid; //返回openid
              // var sessionKey=res.data.sessionKey;
              // console.log(",,,",res)
              // myTrack.setOpenid(openid);
              // myTrack.identify('khh', true);
              // console.log('openid为' + openid);
            }
          })

        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              console.log(res.userInfo)
              
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  onShow:function(e){
    
    myTrack.event_report({
      id:"system",
      sysType:"in"
    })
    // console.log( getApp())
  },

  onHide:function(e){
    
    myTrack.event_report({
      id:"system",
      sysType:"out"
    })
  },
  globalData: {
    userInfo: null,
    myTrack:myTrack,
  }
})