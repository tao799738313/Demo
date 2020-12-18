// pages/userPrize/index.js
const app = getApp()
import ajax from '../../utils/ajax.js'
import util from '../../utils/util.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(opt){
    util.load_wait(app,this,()=>{
      this.setData({
        openId: app.globalData.openId,
        list: [],
        count: 0,
        status: "",
        listObj: {},
        pageNo: 1
      })
      this.getList()
    })

  },
  getList(){
    var that = this;
     ajax.post({
       url: "app/data/findNotesById",
       data: {
         openId: that.data.openId
       },
       success(res){
        res.myPrize =  res.myPrize || []
         var list = that.data.list;
          res.myPrize.map((obj)=>{
              that.setData({
                ["listObj." + obj.uuid]: obj,
              })
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
  viewPrize(e){
    var id = e.currentTarget.dataset.id;  // 奖品Id
    var obj = this.data.listObj[id];
    var that = this;
    this.prize.show({
       id: id,
       actId: obj.lottery_id,
       openId: this.data.openId,
       type: obj.exchange_type,
       actName: obj.title,
       name: obj.name,
      //  img: that.data.imgAppSrc + obj.picture,
       userName: obj.user_name,
       userPhone: obj.user_phone,
       userAddress: obj.user_address,
       userRegion : JSON.parse(obj.region || '[]'),
       tijiaoCB: function(res,data){
          if(res.success){
            obj.user_phone = data.userPhone;
            obj.user_name = data.userName;
            obj.user_address = data.userPlace;
            obj.region = JSON.stringify(data.userRegion);
            that.setData({
              ["listObj." + id]: obj
            })
            that.prize.hide()
          }else{
            wx.showToast({
              title: res.msg || "未知错误，请重试",
              icon: 'none'
            })
          }
       }
    })
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