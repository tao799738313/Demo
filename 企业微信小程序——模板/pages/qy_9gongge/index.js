//index.js
//获取应用实例
const app = getApp()
import ajax from '../../utils/ajax.js'
import util from '../../utils/util.js'
import api from '../../utils/api.js'
const datetime = require("../../utils/datetime.js");

Page({
  data: {
    //9张奖品图片
    images: [],
    lotteryId: "",
    lottery: "",
    canShare: false,
    actTime: "",
  },
  onLoad:function(opt){
    wx.hideShareMenu()
    wx.hideHomeButton()
    if(!opt.id){
      util.alert("缺少重要参数")
      return;
    }
    util.load_wait(app,this,()=>{    
      this.setData({
        lotteryId : opt.id,
      })
      var that = this;
      ajax.post({
        url : "app/data/itemList",
        data: {
          lotteryId: this.data.lotteryId,
        },
        success(res){
          if(res && res.beans && res.beans.length == 8){
              that.setData({
                images:  res.beans
              })
              that.getLotteryById()
          }else{
              util.alert("奖项数据不规范")  
          }
        }
      })
    })
  },
  getLotteryById(){
    var that = this;
    ajax.post({
      url : "app/activity/lottery/getLotteryById",   // 活动详情
      data: {
        id: this.data.lotteryId
      },
      success(res){
          var lottery = res.lottery
          that.setData({
            lottery: lottery,
            actTime: datetime.time2date(res.lottery.startTime,'x-x-x x:x') + " 到 " + datetime.time2date(res.lottery.endTime,'x-x-x x:x')
          })
          var now = new Date().getTime()
          if(now> res.lottery.startTime && now < res.lottery.endTime){
            // 判断身份权限
            that.checkActivityEnable()
          }else{
             util.alert("该活动不再活动时间内，不可以分享")
          }
      }
    })
  },
  checkActivityEnable(){
    var that = this;
      api.checkActivityEnable({
        data: {
          openId: this.data.openId,
          activityId: this.data.lotteryId
        },
        success(res){
           if(res.success){
              // wx.showShareMenu({
              //   withShareTicket: true,
              // })
              that.setData({
                canShare: true
              })
           }else{
             util.alert("您无权限分享~")
           }
        }
      })
  },
  //点击抽奖按钮
  clickLuck:function(){
     util.alert("分享出去才可以抽奖")
  },
  debugOpen(){
    wx.navigateTo({
      url: '/pages/wx_9gongge/index?id=' + this.data.lotteryId,
    })
  },
  isWXShare(){
    util.alert("只有在企业微信app才能分享")
  },
  onShareAppMessage: function(options){
    var that = this;
    var obj = {
　　　　title: "幸运大抽奖", // 默认是小程序的名称(可以写slogan等)
　　　　path: '/pages/wx_9gongge/index?id=' + this.data.lotteryId + "&come=" + this.data.userId,
　　　　imageUrl: '', //自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径，支持PNG及JPG，不传入 imageUrl 则使用默认截图。显示图片长宽比是 5:4
　　　　success: function(res){
　　　　// 转发成功之后的回调
        //if(res.errMsg == 'shareAppMessage:ok'){
            util.alert("分享成功！")
            api.savelog({
              data:{
                openId: that.data.openId,
                lotteryId: that.data.lotteryId,
                type: "1"
              }
            })
        //}
　　　　}
   };
   return obj
  }
})
