// pages/wx_joinHistory/index.js

//获取应用实例
const app = getApp()
import ajax from '../../utils/ajax.js'
import util from '../../utils/util.js'
import api from '../../utils/api.js'
const datetime = require("../../utils/datetime.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
     count: 0,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (opt) {
    util.load_wait(app,this,()=>{
      this.setData({
        status: "",
        list: [],
        pageNo: 1,
       })
       this.init()
    })
  },
  init(){
    var that = this;
    var typeObj = {
      2: "/images/index/jiugongge.png",
      1: "/images/index/dazhuanpan.png",
      3: "/images/index/niudanji.png"
    }
    ajax.post({
      url: "app/activity/lottery/myJoinLotterylist",
      data: {
        openId: this.data.openId
      },
      success(res){
        res.list = res.list || [];
        var list = that.data.list;
          res.list.map((obj)=>{
              var now = new Date().getTime()
              var ising = false;
              if(now>=obj.start_time && now<obj.end_time){
                ising = true
              }
              obj.ising = ising;  // 是否正在进行中
              obj.startTime = datetime.time2date(obj.start_time,'x-x-x')
              obj.endTime = datetime.time2date(obj.end_time,'x-x-x')
              if(!obj.lottery_icon){
                obj.img = typeObj[obj.lottery_type]
              }else{
                obj.img = app.globalData.appSrc + obj.lottery_icon
              }
              list.push(obj)
          })
          that.setData({
            list: list
          })
          that.list_status.show({
            length: list.length
          })
      }
    })
  },
  toPage(e){
    let typeObj = {
      2:"/pages/wx_9gongge/index",
     // 1:"/pages/wx_dazhuanpan/index"
    }
    if(typeObj[e.currentTarget.dataset.type]){
       if(this.data.userInfo.userId){
          wx.navigateTo({
            url: typeObj[e.currentTarget.dataset.type] + "?id=" + e.currentTarget.dataset.id + "&come=wx_joinHistory",
          })
       }else{
          wx.reLaunch({
            url: typeObj[e.currentTarget.dataset.type] + "?id=" + e.currentTarget.dataset.id + "&come=wx_joinHistory",
          })
       }
      
    }else{
      util.alert("没有该类型的活动")
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
})