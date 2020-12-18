// pages/wx_userPrize_change/index.js

const app = getApp()
import ajax from '../../utils/ajax.js'
import util from '../../utils/util.js'
var QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js');
var qqmapsdk = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: "",
    region: [],
    name: "",
    address: "",
    phone: "",
    switchChecked: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (opt) {
    util.load_wait(app,this,()=>{
      this.setData({
        id: opt.id || ""
      })
      qqmapsdk = new QQMapWX({
        key: app.globalData.mapKey
      });
      this.getMyAddressById()
    })
  },
  dingwei(){
    var that = this;
    wx.getLocation({
      type: 'gcj02',
      success (res) {
        qqmapsdk.reverseGeocoder({
          location: {
            latitude: res.latitude,
            longitude: res.longitude
          },
          success: function(res) {//成功后的回调
            console.log(res);
            that.setData({
              region: [res.result.ad_info.province,res.result.ad_info.city,res.result.ad_info.district],
              address: res.result.address_component.street_number || ""
            })
          },
          fail: function(error) {
            console.error(error);
          }
        })
      }
     })
  },
  switchChange(e){
     this.setData({
      switchChecked: e.detail.value
     })
  },
  getMyAddressById(){
    var that = this;
    ajax.get({
      url: "app/activity/activityUserAddress/get",
      data:{
        id: that.data.id,
        openId: that.data.openId
      },
      success(res){
          that.setData({
              name: res.name,
              phone: res.phone,
              region: JSON.parse(res.region || '[]'),
              address: res.address,
              switchChecked: (res.def == "1") ? true : false, 
          })
         
      }
    })
  },
  input(e){
    this.setData({
      [e.target.dataset.inp]: e.detail.value
    })
  },
  toSave(){
    var that = this;
    util.tips_inspect(app,this,{
      name: {
        name: "名字",
        require: true,
      },
      phone: {
        name: "手机号码",
        require: true,
        isPhone: true
      },
      region(){
        if(that.data.region.length == 0){
            that.tips.show({
              text: "省市区不能为空"
            })
            return false
        }else{
          return true
        }
      },
      address: {
        name: "详细地址",
        require: true
      },
    },()=>{
      ajax.post({
        url: "app/activity/activityUserAddress/save",
        data:{
          id: that.data.id,  // 有id就是更新，没有就是添加
          openId: that.data.openId,
          name: that.data.name,
          phone: that.data.phone,
          region: JSON.stringify(that.data.region || []),
          address: that.data.address,
          openId: that.data.openId,
          def: that.data.switchChecked ? "1" : "0",
        },
        success(res){
           if(res.success){
             var str = ""
             if(that.data.id){
                str = "修改成功"
             }else{
                str = "添加成功"
             }
             util.alert(str,()=>{
                var pages = getCurrentPages();
                var beforePage = pages[pages.length - 2];
                // 调用列表页的获取数据函数
                beforePage.onLoad();
                wx.navigateBack()
            })
           }else{
             that.tips.show({
               text: "未知错误"
             })
           }
        }
      })
    })
  },
  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value
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