const ajax = require("../../utils/ajax");
const util = require("../../utils/util");

// components/prize/prize.js
const app = getApp();
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {    //定义组件属性
    
  },
  /**
   * 页面的初始数据
   */
  data: {
     placeArr: null,
     isShow: false,
     title: "",
     img: "",
     name: "",
     id: "",
     openId: "",
     tips: "",
     actName: "",
     userName: "",
     userPhone: "",
     userRegion: [],
     userAddress: "",
     type: 3, // 奖品类型，1是要填名字，电话，快递地址，2是要填名字，电话，3是现场领取什么都不用填，4是中奖兑换码，需要传code + tishi
  },
  ready: function() {
    this.tips = this.selectComponent("#tips");
    this.place_Radio = this.selectComponent("#place_radio");
   
   },
  methods:{
    
     show(opt){
      
       if(!opt.actId || !opt.id || !opt.openId){
         return;
       }
       if(opt.type == 4 && !opt.code){
        return;
      }
      if(this.data.id && this.data.id != opt.id && this.data.placeArr){
        var placeArr = this.data.placeArr || []
        placeArr.map(obj=>{
          obj.checked = false;
        })
        this.setData({
          placeArr: placeArr
        })
      }
      this.setData({
        isShow: true,
        actId: opt.actId,  // 活动id
        id: opt.id,  // 奖品id
        openId: opt.openId,
        title: opt.title || "恭喜您获得",
        img: opt.img || "",
        name: opt.name || "奖品名",
        type: opt.type || 3,
        actName: opt.actName || "",  // 活动名
        code: opt.code || "",
        tishi: opt.tishi || "",
        tips: opt.tips || "关闭后可在【我的-我的奖品】查看",
        tijiaoCB: opt.tijiaoCB || function(){},
        userName: opt.userName || "",
        userPhone: opt.userPhone || "",
        userRegion: opt.userRegion || [],
        userAddress: opt.userAddress || "",
      })
      // if(!opt.userName && !opt.userPhone){
      //   this.setData({
      //     userName: app.globalData.userInfo.nickName,
      //     userPhone: app.globalData.userInfo.phone,
      //   })
      // }
     },
     hide(){
        this.setData({
          isShow: false
        })
     },
     input(e){
       this.setData({
         [e.target.dataset.inp]: e.detail.value
       })
     },
     tijiao(){
      var that = this;
      util.tips_inspect(app,this,{
        userName: {
          name: "名字",
          require: true,
        },
        userPhone: {
          name: "手机号码",
          require: true,
          isPhone: true
        }
      },()=>{
        ajax.post({
          url: "app/fastBroadbandUser/saveUser",
          data: {
            openId: that.data.openId,
            activityId: that.data.actId,
            poolId: that.data.id,
            userName: that.data.userName,
            region: JSON.stringify(that.data.userRegion || []),
            userAddress: that.data.userAddress,
            userPhone: that.data.userPhone,
          },
          success(res){
            if(that.data.tijiaoCB){
              that.data.tijiaoCB(res,that.data)
            }else{
              that.hide()
            }
          }
        })
      })
     },
     bindRegionChange: function (e) {
      this.setData({
        userRegion: e.detail.value
      })
    },
     choosePlace(){
       console.log(this.data.placeArr)
       if(this.data.placeArr){
          this.hide()
          this.place_Radio.show({
            list: this.data.placeArr
          })
       }else{
          // 请求所有地址
          var that = this;
          ajax.post({
            url: "app/activity/activityUserAddress/list",
            data: {
              openId: that.data.openId
            },
            success(res){
              res.list = res.list || []
              res.list.map(obj=>{
                obj.region = JSON.parse(obj.region || '[]')
              })
              that.setData({
                placeArr : res.list
              })
              that.hide()
              that.place_Radio.show({
                list: that.data.placeArr
              })
            }
          })

       }
     },
     returnPlace(res){
       var opt = this.data
       if(res.detail.rs){
        if(res.detail.rs.id){
          opt.userName = res.detail.rs.name
          opt.userPhone = res.detail.rs.phone
          opt.userAddress = res.detail.rs.address || ""
          opt.userRegion = res.detail.rs.region || []
          this.setData({
           placeArr : res.detail.list
          })
        }
       }
       this.show(opt)
     },
     copy_code(){
      wx.setClipboardData({
        data: this.data.code
      })
     }
  }
})