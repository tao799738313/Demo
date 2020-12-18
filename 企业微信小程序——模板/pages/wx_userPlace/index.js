// pages/userPlace/index.js
const app = getApp()
import ajax from '../../utils/ajax.js'
import util from '../../utils/util.js'
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
    util.load_wait(app,this,()=>{
      this.setData({
        region: [], // ['广东省', '广州市', '海珠区'],
        list:[],
        listObj: {},
        pageNo: 1,
        name: "",
        phone: "",
        status: "",
        count: 0,
        id: "",
        address: "",
        openId: app.globalData.openId
      })
      this.getList()
    })

  },
  getList(){
    var that = this;
    ajax.post({
      url: "app/activity/activityUserAddress/list",
      data: {
        openId: that.data.openId
      },
      success(res){
        res.list = res.list || [];
        var list = that.data.list;
        res.list.map((obj)=>{
          obj.region = JSON.parse(obj.region || '[]')
          that.setData({
            ["listObj." + obj.id] : obj
          })
          list.push(obj);
        })
        that.setData({
          list: list,
          pageNo: ++this.data.pageNo
        })
        that.list_status.set({
          noData: "您当前没有创建任何地址哦~"
        })
        that.list_status.show({
          length: list.length
        })
      }
    })
  },
  delById(e){
     var that = this;
     util.confirm("您是否确定删除该地址",function(){
        ajax.post({
          url: "app/activity/activityUserAddress/delete",
          data: {
            id: e.currentTarget.dataset.id
          },
          success(){
            that.onLoad()
          }
        })
      })
  },
  updataById(e){
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/wx_userPlace_change/index?id='+id,
    })
  },
  toChange(){
    wx.navigateTo({
      url: '/pages/wx_userPlace_change/index',
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

  },
})