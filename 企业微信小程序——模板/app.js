//app.js
import ajax from './utils/ajax.js'
import util from './utils/util.js'
import configure from './utils/configure.js'

App({
  onLaunch: function () {
    if(configure.isGDSDX){
      this.globalData.accountId = "gh_174123039a50"
      this.globalData.qy_accountId = "ww01969f1988fe9088"
      this.globalData.qy_agentId = "lRHJuE8j"
      this.globalData.imgAppSrc = "http://enter.gd189.cn/qywx/pic/"
      this.globalData.appSrc = "http://enter.gd189.cn/wx_gd_ewsm/"
      this.globalData.mapKey = "FNABZ-3LQWV-RHWPO-UBQR3-M73MS-ZZFJ6"
    }

    var that = this;
    wx.getSystemInfo({
      success(res){
        if(res.environment == "wxwork"){
          // 企业微信进来
          that.globalData.isQY = true
          that.getUserId()
        }else{
          // 微信进来
          that.getOpenId()
        }
      }
    })
  },
  getOpenId(cb,flag){
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        this.globalData.code = res.code;
        ajax.get({
          url: "app/miniprogram/oauth/code2Session", //set in config .js  //2.后台API
          data: {
            userId: this.globalData.loginName || "",
            code: this.globalData.code,
            accountId: this.globalData.accountId
          },
          success: (res) => {
            this.globalData.openId = res.openid;
            this.globalData.session_key = res.session_key;
            if(res.userInfo && !flag){
              // 有userInfo就是授权登录过的
              // flag=true表示来自企业微信的user的回调
              res.userInfo.avatarUrl = res.userInfo.userIcon;
              if(res.userInfo.sysUserId){
                res.userInfo.userId = res.userInfo.sysUserId;
                this.globalData.userId = res.userInfo.sysUserId;
              }
              this.globalData.userInfo = res.userInfo;
            }
            this.globalData.isLoading = false
            cb && cb()
          }
        }) 
      }
    })
  },
  getUserId(){
    wx.qy.login({
        success: res => {
          if(res.errMsg == "qy.login:ok"){
              this.globalData.qy_code = res.code;
              ajax.get({
              url: "app/qyminiprogram/oauth/code2Session", //set in config .js  //2.后台API
              data: {
                qyAccountId: this.globalData.qy_accountId,
                code: this.globalData.qy_code,
                agentId: this.globalData.qy_agentId,
                accountId: this.globalData.accountId
              },
              success: (res) => {
                if(res.success){
                  if(!res.userInfo){
                    // 企业外部用户，查无userInfo
                    this.getOpenId()
                  }else{
                    res.userInfo.userId = res.userInfo.userid
                    res.userInfo.avatarUrl = res.userInfo.avatar
                    res.userInfo.nickName = res.userInfo.name
                    res.userInfo.phone = res.userInfo.mobile

                    this.globalData.userId = res.userInfo.userid;
                    this.globalData.loginName = res.loginName;
                    this.globalData.userInfo = res.userInfo;
                    if(res.userInfo.openId){
                      this.globalData.openId = res.userInfo.openId;
                      this.globalData.isLoading = false
                    }else{
                      this.getOpenId("",true)
                    }
                  }
                }
              }
            })
          }
        }
    })
  },
  add_updata_user(cb){
    let userInfo = this.globalData.userInfo;
    ajax.post({
      url: "app/miniprogram/oauth/updateUserInfo",
      data: {
        accountId: this.globalData.accountId,
        openId: this.globalData.openId,
        nickName: userInfo.nickName,
        avatarUrl: userInfo.avatarUrl,
        gender: userInfo.gender,
      },
      success: (res) => {
        cb && cb()
      }
    }) 
  },
  globalData: {
    debug: false, // 小程序分享的调试模式
    isLoading: true, // 初始化数据多个接口的判断
    isQY: false,  // 默认不是在企业微信app
    code: null,
    qy_code: null,
    userInfo: null,
    loginName: null,
    openId: null,
    mapKey: "FNABZ-3LQWV-RHWPO-UBQR3-M73MS-ZZFJ6",  // 腾讯地图的key
    userId: null,
    session_key: null,
    accountId: "gh_db469c17f2c8",  // 广东省电信要改
    qy_accountId: "wx7f69ffa796793a0e",  // 广东省电信要改
    qy_agentId: "apDFHLvM",  // 广东省电信要改
    imgAppSrc: "http://wxtest.yunqunet.net/",        // 图片服务器   广东省电信要改
    appSrc: "http://wxtest.yunqunet.net/"   // 接口前缀 广东省电信要改
  }
})