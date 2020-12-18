// pages/qy_addActivity/index.js

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
  toPage(e){
    var pageObj = {
        1: "/pages/qy_addAct_jiugongge/index",
        // 2: "/pages/qy_addAct_dazhuanpan/index",
        // 3: "/pages/qy_addAct_niudanji/index",
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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