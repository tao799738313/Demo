// pages/qy_shareCount/index.js
const app = getApp()
import ajax from '../../utils/ajax.js'
import util from '../../utils/util.js'
import api from '../../utils/api.js'


Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     util.load_wait(app,this,()=>{
       this.setData({
          list: [],
          status: "",
          count: 0,
          pageNo: 1
       })
       this.init();
     })
  },
  init(){
    var that = this;
     ajax.post({
       url: "app/activity/activityUserLog/lotteryDateViewOpenId",
       data: {
        "openId": this.data.openId,
         pageNo: this.data.pageNo,
       },
       success(res){
         var list = that.data.list;
            res.lotteryList = res.lotteryList || [];
            res.lotteryList.map((obj)=>{
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