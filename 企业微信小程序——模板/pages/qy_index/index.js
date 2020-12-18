//index.js
//获取应用实例
const app = getApp()
const datetime = require("../../utils/datetime.js");
const ajax = require("../../utils/ajax.js");
const util = require("../../utils/util.js");


Page({
  data: {
    status: "",
    intoMsg: "", // 权限管理
    list: [],
    count: 0,
    pageNo: 1,
  },
  onLoad:function(){
    util.load_wait(app,this,()=>{
      util.into(app,this,()=>{
        this.setData({
          status: "",
          list: [],
          pageNo: 1,
         })
         this.init()
         wx.stopPullDownRefresh()
      })
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
      url: "app/activity/lottery/listEnable",
      data: {
        openId: this.data.openId
      },
      success(res){
        var list = that.data.list;
          res.list = res.list || [];
          res.list.map((obj)=>{
              var now = new Date().getTime()
              var ising = false;
              if(now>=obj.startTime && now<obj.endTime){
                ising = true
              }
              obj.ising = ising;
              obj.startTime = datetime.time2date(obj.startTime,'x-x-x')
              obj.endTime = datetime.time2date(obj.endTime,'x-x-x')
              if(!obj.lotteryIcon){
                obj.img = typeObj[obj.lotteryType]
              }else{
                obj.img = that.data.imgAppSrc + obj.lotteryIcon
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
  onPullDownRefresh: function () {
    //调用刷新时将执行的方法
    this.onLoad();
  },
})
