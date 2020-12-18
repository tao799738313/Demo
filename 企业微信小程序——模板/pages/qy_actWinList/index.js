// pages/qy_actWinList/index.js

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
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (opt) {
    if(!opt.id){
      util.alert("没有传递ID")
      return;
    }
      util.load_wait(app,this,()=>{
         this.setData({
            lotteryId: opt.id,
            status: "",
            count: 0,
            list: []
         })
         this.init()
      })
  },
  init(){
    var that = this;
    ajax.post({
      url : "app/data/particpantList",  // 中奖列表
      data: {
        lotteryId: this.data.lotteryId
      },
      success(res){
        var res = res || [];
        var list = that.data.list;
        list = list.concat(res)
        that.setData({
          list: list
        })
        if(list.length == 0){
          that.setData({
            status: "noData"
          })
        }else{
           if(that.data.count < list.length){
            that.setData({
              status: "noMoreData"
            })
           }else{
            that.setData({
              status: "getMore"
            })
           }
        }
      }
    })

    
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

  }
})