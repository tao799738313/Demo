// pages/wx_addAct_jiugongge/index.js

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
     id: "",
     title: "",
     startDate: '',
     startTime: "00:00",
     endDate: '',
     endTime: '23:59',
     choujiangRate: [{
       name: "永久", id: 0
     },{
      name: "每天", id: 1
    },{
      name: "每周", id: 2
    },{
      name: "每月", id: 3
    },{
      name: "每季度", id: 4
    },{
      name: "每年度", id: 5
    },],
    lotteryType: 2,  // 2是九宫格
    lotteryCycle: 0,
    lotteryMaxCount: "",
    noWinImg: "wx_gd_ewsm/doc/app/activity/image/WechatIMG140.png",
    noWinDefaultImg: "wx_gd_ewsm/doc/app/activity/image/WechatIMG140.png",
    item: {},
    itemObj: {},
    itemArr: [],
    isShow: false,
    typeRange: [{
      name: "实物(名字+电话+地址)", id: 1
    },{
      name: "充值类(名字+电话)", id: 2
    },{
      name: "现场领取", id: 3
    },
    // {
    //   name: "兑换码", id: 4
    // }
  ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (opt) {
     util.load_wait(app,this,()=>{
        if(opt.id){
          wx.setNavigationBarTitle({
            title: '修改九宫格活动'
          })
          this.setData({
            id: opt.id
          })
          this.init()
        }
     })
  },
  init(){
    // 日期改动
    var that = this;
    ajax.post({
      url: "app/activity/lottery/getLotteryById",
      data: {
        id: that.data.id
      },
      success(res){
          var startTime = datetime.time2date(res.lottery.startTime,'x-x-x x:x')
          var endTime = datetime.time2date(res.lottery.endTime,'x-x-x x:x')
          var lotteryCycle = that.data.choujiangRate.findIndex((obj)=>{
            return obj.id === res.lottery.lotteryCycle;
          })
          var itemArr = [];
          var itemObj = {};
          res.lotteryItems.map((obj)=>{
            obj.winRate = obj.winRate * 100;
            obj.shengyu = obj.allowWinnerCount - (obj.winCount || 0)
             obj.typeRangeIndex = that.data.typeRange.findIndex((obj2)=>{
               return obj2.id === obj.itemType
             })
             itemArr.push(obj.id)
             itemObj[obj.id] = obj
          })
          that.setData({
            noWinImg: res.lottery.noWinImg,
            title: res.lottery.title,
            lotteryCycle: lotteryCycle,
            lotteryMaxCount: res.lottery.lotteryMaxCount,
            startDate: startTime.split(" ")[0],
            startTime: startTime.split(" ")[1],
            endDate: endTime.split(" ")[0],
            endTime: endTime.split(" ")[1],
            itemArr,itemObj
          })
      }
    })
  },
  useDefaultNoWinImg(){
    this.setData({
      noWinImg: this.data.noWinDefaultImg
    })
  },
  tijiao(){
    if(!this.data.item.picture){
       this.tips.show({
         text: "请先上传奖品图片"
       })
       return;
     }
     if(!this.data.item.name){
       this.tips.show({
         text: "奖品名称不能为空"
       })
       return;
     }
     if(this.data.item.allowWinnerCount === "" || this.data.item.allowWinnerCount === undefined){
      this.tips.show({
        text: "奖品数量不能为空"
      })
      return;
     }else{
       var allowWinnerCount = Number(this.data.item.allowWinnerCount)
        if(allowWinnerCount === 0){
          this.tips.show({
            text: "奖品数量不能为 0"
          })
          return;
        }
     }

     if(this.data.item.winRate === "" || this.data.item.winRate === undefined){
      this.tips.show({
        text: "奖品概率不能为空"
      })
      return;
     }else{
       var count = Number(this.data.item.winRate);
       for(let k in this.data.itemObj){
         if(k != this.data.item.id){
           count += Number(this.data.itemObj[k].winRate);
         }
       }
       if(count>100){
          util.alert("所有奖品的总概率相加不能大于100,当前总概率为" + count)
          return;
       }
     }
     if(this.data.item.id){
      this.setData({
        ["itemObj." + this.data.item.id]: this.data.item
      })  
     }else{
      var uuId = util.uuId()
      var itemArr = this.data.itemArr
      itemArr.push(uuId)
      this.data.item.id = uuId
      this.setData({
        itemArr: itemArr,
        ["itemObj." + uuId]: this.data.item
      })
     }
     
     this.setData({
       isShow: false
     })

  },
  toSave(){
    var title = this.data.title;
    if(!title){
       this.tips.show({
         text: "活动名称不能为空"
       })
       return;
    }

    var startDate = this.data.startDate
    var endDate = this.data.endDate
    
    if(!startDate || !endDate){
      this.tips.show({
        text: "开始时间和结束时间不能为空"
      })
      return;
    }else{
      var startTime = datetime.date2time(startDate + " " + this.data.startTime)
      var endTime = datetime.date2time(endDate + " " + this.data.endTime)
      if(startTime > endTime){
          this.tips.show({
            text: "开始时间不能大于结束时间"
          })
          return;
      }
    }

    var lotteryMaxCount = this.data.lotteryMaxCount;
    if(!lotteryMaxCount){
      this.tips.show({
        text: "抽奖次数不能为空"
      })
      return;
    }

    var itemArr = this.data.itemArr
    if(itemArr.length == 0){
       this.tips.show({
         text: "至少设置一个奖品"
       })
       return;
    }

    var that = this;
    util.confirm("保存后除奖品概率外其他设置不可修改，是否提交",()=>{
        var canshu = {
          noWinMsg: "很遗憾您本次活动没有中奖哦，期待您参与下次活动",
          noWinImg: that.data.noWinImg,
          openId: that.data.openId,
          title,
          lotteryCycle: that.data.choujiangRate[that.data.lotteryCycle].id,
          lotteryMaxCount,
          claimContacter: "", // 固定空
          'name' : [],
          'allowWinnerCount':[], //数量
          'winRate':[], //概率
          'itemId':[], //奖品id
          'allowWinnerName':[],  //允许白名单
          'description':[], //描述
          'picture':[],  //奖项图片
          'itemType':[], //奖项类型
          'awards_url':[],  //奖项领取链接,类型是4
        }
        canshu.startTime = startTime
        canshu.endTime = endTime
        itemArr.map((id)=>{
           var obj = that.data.itemObj[id]
           canshu.name.push(obj.name)
           canshu.allowWinnerCount.push((obj.allowWinnerCount))
           canshu.winRate.push((obj.winRate/100).toFixed(2));
           canshu.allowWinnerName.push('')
           canshu.description.push('')
           canshu.picture.push(obj.picture)
           canshu.itemType.push(that.data.typeRange[obj.typeRangeIndex].id)
           canshu.awards_url.push('')
           if(that.data.id){
             canshu.itemId.push(id)
           }else{
             canshu.itemId.push("")
           }
        })
        canshu.exchangeType = canshu.itemType
        if(this.data.id){
          canshu.id = this.data.id
        }
        ajax.post({
          url: "app/activity/lottery/save",
          data: canshu,
          success(res){
            if(res.retCode==0){
              util.alert(res.message,function () {
                  if(that.data.id){
                     var pages = getCurrentPages()
                     var page = pages[pages.length - 2]
                     console.log(page)
                     page.onLoad()
                     wx.navigateBack()
                  }else{
                    wx.redirectTo({
                      url: '/pages/qy_myActivity/index',
                    })
                  }
            
              });
            }else{
              util.alert(data.message);
            }
          }
        })
    })
  },
  updataById(e){
    var id = e.target.dataset.id
    var item = this.data.itemObj[id]
    this.setData({
      item: item,
      isShow: true
    })
  },
  delById(e){
    util.confirm("是否删除该奖品",()=>{
        var id = e.target.dataset.id
        var itemArr = this.data.itemArr;
        var index = itemArr.indexOf(id);
        itemArr.splice(index,1)
        var itemObj = this.data.itemObj;
        delete itemObj[id]
        this.setData({
          itemObj,itemArr
        })
    })
  },
  addPrize(){
    if(this.data.itemArr.length == 7){
      util.alert("最多设置7个奖品")
      return;
    }
     this.setData({
       item: {
        typeRangeIndex: 0
       },
       isShow: true
     })
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
  updataNoWinImg(){
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: "compressed",
      success(res){
        var tempFilePaths = res.tempFilePaths;
        ajax.file({
           url: "fileUpload/uploadFile",
           path: tempFilePaths,
           success(res2){
            that.setData({
              noWinImg: JSON.parse(res2)[0].thumbnail_url
            })
           }
        })
      }
    })
  },
  updataImg(){
    if(this.data.id){
      return;
    }
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: "compressed",
      success(res){
        var tempFilePaths = res.tempFilePaths;
        ajax.file({
           url: "fileUpload/uploadFile",
           path: tempFilePaths,
           success(res2){
            that.setData({
              ["item.picture"]: JSON.parse(res2)[0].thumbnail_url
            })
           }
        })
      }
    })
  },
  bindPickerChange: function(e) {
    this.setData({
      [e.target.dataset.value]: e.detail.value
    })
  },
  bindTypeChange: function(e) {
    var typeRangeIndex = e.detail.value
    this.setData({
      ["item.typeRangeIndex"]: typeRangeIndex
    })
  },
  bindDateChange: function(e) {
    this.setData({
      [e.target.dataset.value]: e.detail.value
    })
  },
  bindTimeChange: function(e) {
    this.setData({
      [e.target.dataset.value]: e.detail.value
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