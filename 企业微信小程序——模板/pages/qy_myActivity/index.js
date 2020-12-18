// pages/qy_myActivity/index.js

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
          pageNo: 1,
          list: [],
          status: "",
        })
        this.init()
      })
  },
  init(){
    var  that = this;
     ajax.post({
       url: "app/activity/lottery/list",
       data: {
         openId: that.data.openId
       },
       success(res){
        var typeObj = {
          2: "/images/index/jiugongge.png",
          1: "/images/index/dazhuanpan.png",
          3: "/images/index/niudanji.png"
        }
         var list = that.data.list;
          res.list = res.list || [];
          res.list.map((obj)=>{
            obj.img = typeObj[obj.lotteryType]
             obj.startTime = datetime.time2date(obj.startTime,'x-x-x')
             obj.endTime = datetime.time2date(obj.endTime,'x-x-x')
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
  duijiang(e){
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/qy_actWinList/index?id=' + id,
    })
  },
  delById(e){
    var id = e.currentTarget.dataset.id
    util.alert("正在开发中..")
  },
  updataById(e){
    var id = e.currentTarget.dataset.id
    var type = e.currentTarget.dataset.type
    if(!id){
      util.alert("没有设置ID")
      return;
    }
    var typeObj = {
      2: "/pages/qy_addAct_jiugongge/index"
    }
    if(type == null || type == undefined || !typeObj[type]){
      util.alert("没有设置类型")
      return;
    }else{
      wx.navigateTo({
        url: typeObj[type] + '?id=' + id,
      })
    }
  },
  fenxiang(e){
    let typeObj = {
      2:"/pages/qy_9gongge/index",
     // 1:"/pages/qy_dazhuanpan/index"
    }
    if(typeObj[e.currentTarget.dataset.type]){
      wx.navigateTo({
        url: typeObj[e.currentTarget.dataset.type] + "?id=" + e.currentTarget.dataset.id,
      })
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