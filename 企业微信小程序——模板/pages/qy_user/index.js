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
    intoMsg: "", // 权限管理
    userInfo: null,
    openId: null,
    userId: null
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    util.load_wait(app,this,()=>{
       util.into(app,this,()=>{

       })
    })
  },
  toPage(e){
    var pageObj = {
              1: "/pages/wx_userPrize/index",
              2: "/pages/wx_userPlace/index",
              3: "/pages/wx_joinHistory/index",
       4: "/pages/qy_shareCount/index",
       5: "/pages/qy_myActivity/index",
       6: "/pages/qy_addActivity/index",
    }
    var page = e.currentTarget.dataset.page
    if(pageObj[page]){
      wx.navigateTo({
        url: pageObj[page],
      })
    }else{
      util.alert("正在开发中...")
    }
  },
})