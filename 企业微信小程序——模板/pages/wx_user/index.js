// pages/user/index.js
const app = getApp()
const datetime = require("../../utils/datetime.js");
const ajax = require("../../utils/ajax.js");
const util = require("../../utils/util.js");
var timer = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null,
    openId: null,
    userId: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (opt) {
    util.load_wait(app,this,()=>{
      this.setData({
        redirect: opt.redirect
      })
    })
  },
  getUserInfo: function (e) {
    let userInfo = e.detail.userInfo
    this.setData({
      userInfo: userInfo
    })
    app.globalData.userInfo = userInfo
    var that = this;
    app.add_updata_user(function(){
      if(that.data.redirect){
         wx.navigateBack()
      }
    })
  },
  getPhoneNumber(e) {
    var that = this;
    if (e.detail.errMsg == 'getPhoneNumber:ok') {
      var that = this;
      ajax.post({
        url: "app/miniprogram/oauth/getPhoneNumber",
        data:{
          sessionKey: app.globalData.session_key,
          encryptedData: e.detail.encryptedData,
          iv: e.detail.iv,
          accountId: app.globalData.accountId,
          openId: that.data.openId,
        },
        success(res){
            // 返回手机，手机后端自己先保存
            var userInfo = that.data.userInfo;
            userInfo.phone = res.result.phoneNumber;
            that.setData({
              userInfo: userInfo
            })
        }
      })
    }
  },
  toPage(e){
    console.log(e)
    var pageObj = {
      1: "/pages/wx_userPrize/index",
      2: "/pages/wx_userPlace/index",
      3: "/pages/wx_joinHistory/index",
    }
    var page = e.currentTarget.dataset.page
    if(this.data.userInfo){
      if(pageObj[page]){
        wx.navigateTo({
          url: pageObj[page],
        })
      }else{
        util.alert("正在开发中...")
      }
    }else{
       util.alert("请先授权登录")
    }
  }
})