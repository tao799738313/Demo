//index.js
//获取应用实例
const app = getApp()
import ajax from '../../utils/ajax.js'
import util from '../../utils/util.js'
import api from '../../utils/api.js'
const datetime = require("../../utils/datetime.js");
//计数器
var interval = null;

Page({
  data: {
    color: ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
    //9张奖品图片
    images: [],
    haiyou: "",
    scene: "",
    come: "",
    canClick: false, // true就是能点击
    luckPosition: null, 
    index: 0,
    lottery: null,
    isShow_lotterys: false,
    isShow_haiyou: false,
    remainCount: 0,
    gundong: null,
    actTime: "",
  },
  onLoad:function(opt){
    wx.hideHomeButton()
    util.load_wait(app,this,()=>{
      if(opt.scene){
        api.scene(opt.scene,(res)=>{
          this.setData({
            come: res.come || "scene",
            lotteryId : res.activityId,
          })
          this.init();
        })
      }else{
        this.setData({
          come: opt.come,
          lotteryId : opt.id,
        })
        this.init();
      }
    })
  },
  init(){
      if(!this.data.lotteryId){
        util.alert("缺少重要参数")
        return;
      }
      if(this.data.come && this.data.come != "wx_joinHistory" && this.data.come != this.data.userId){
          api.savelog({
            data:{
              sharer: this.data.come,
              lotteryId: this.data.lotteryId,
              type: "0",
              openId: this.data.openId,
            }
          })
      }
      var that = this;
      ajax.post({
        url : "app/data/itemList",  // 获取奖品列表
        data: {
          lotteryId: this.data.lotteryId
        },
        success(res){
          if(res && res.beans && res.beans.length == 8){
            that.setData({
              images:  res.beans
            })
            that.getLotteryById()
            that.particpantList()
          }else{
              util.alert("奖项数据不规范")  
          }
        },function() {
            util.alert("查无此活动")
        }
      })
  },
  getLotteryById(){
    var that = this;
    ajax.post({
      url : "app/activity/lottery/getLotteryById",   // 活动详情
      data: {
        id: this.data.lotteryId
      },
      success(res){
          var lottery = res.lottery
          that.setData({
            lottery: res.lottery,
            actTime: datetime.time2date(res.lottery.startTime,'x-x-x x:x') + " 到 " + datetime.time2date(res.lottery.endTime,'x-x-x x:x')
          })
          that.getLotteryCount();
      }
    })
  },
  getLotteryCount(){
    var that = this;
    ajax.post({
      url : "app/data/getLotteryCount",
      data: {
        lotteryId: that.data.lotteryId,
        openId : that.data.openId,
      },
      success(res){
        var haiyou = ""
        if (res.remainCount == 0) {
           // 提示没有抽奖机会了
           haiyou = "您的抽奖机会已用完！"
        }else{
          var typeObj = {
            0 : "您还有",
            1: "您今天还有",
            2: "您本周还有",
            3: "您本月还有",
            4: "您本季度还有",
            5: "您本年度还有"
          }
          if(typeObj[res.type]){
            haiyou += typeObj[res.type];
            haiyou += (res.remainCount || 0) + "次抽奖机会";
          }else{
            haiyou = "您的抽奖机会已用完！"
          }
        }
        that.setData({
          isShow_haiyou: true,
          haiyou: haiyou,
          remainCount: res.remainCount,
          canClick: true
        })
      }
   })
  },
  // 点击抽奖按钮
  clickLuck:function(){
    var now = new Date().getTime();
    if(now> this.data.lottery.startTime && now < this.data.lottery.endTime){

    }else{
       util.alert("该活动不再活动时间内")
       return;
    }

    var that = this;
    util.isLogin(app,this,function(){
      if(!that.data.canClick){
        return;
      }
      if(that.data.remainCount == 0){
        util.alert(that.data.haiyou)
      }else{
        that.setData({
          //设置按钮不可点击
          canClick:false,
        })
        that.drawlotteryWorldCup()
      }
      if(that.data.come && that.data.come != "wx_joinHistory" && that.data.come != that.data.userId){
        api.savelog({
          data:{
            sharer: that.data.come,
            lotteryId: that.data.lotteryId,
            type: "2",
            openId: that.data.openId
          }
        })
      }
    })
    },
    drawlotteryWorldCup(){
      var that = this;
      ajax.post({
        url : "app/data/drawlotteryWorldCup",
        data: {
          lotteryId: this.data.lotteryId,
          openId : this.data.openId,
          accountId: this.data.accountId,
          come: this.data.come
        },
        success(res){
          var luckPositionObj = {
            338: 0,
            293: 1,
            248: 2,
            203: 3,
            158: 4,
            113: 5,
            68: 6,
            23: 7
          };
          if(luckPositionObj[res.angle] === "" || luckPositionObj[res.angle] == undefined){
            // 没有对应的值，提示没抽中
            that.setData({
              canClick: true
            })
            that.tips.show({
              text: res.message
            });
          }else{
            that.setData({
              luckPosition: luckPositionObj[res.angle]
            })
            that.choujiang(res,120);
          }
        },
        fail:function(){
          that.setData({
            canClick: true
          })
        }
      })
  },
  choujiang: function (opt,time,num){
    var that = this;
    setTimeout(function () {
      var index = that.data.index
      var color = that.data.color
      if(index > 7) {
        index = 0;
      }
      if(index==0){
        color[7] = 'none';
      }else{
        color[index-1] = 'none';
      }
      color[index] = 'rgba(254,179,35,0.5)';
      that.setData({
        index: index,
        color: color
      });
      if(that.data.luckPosition == null){
        // 转到luckPosition有值为止
        that.setData({
          index: index+1
        });
        that.choujiang(opt,time,num);
      }else{
        if(num == null){
           // 再转三圈就停
           let num =  8 * 3 + (that.data.luckPosition == 0 ? 8 - index - 1 : that.data.luckPosition - index - 1);
           that.setData({
            index: index+1
          });
           that.choujiang(opt,200,num);
        }else{
           if(num == 0){
            // 抽奖动画结束 
            that.data.luckPosition = null;
            that.data.canClick = true;
            if(opt.success){
              // 中奖
              that.prize.show({
                actId: that.data.lotteryId,  // 活动id
                id: opt.uuid,  // 奖品id
                img: that.data.imgAppSrc + opt.coupon.originalIcon,
                // code: "aaaaa66666",
                // tishi: "请去往京东商城兑换",
                name: opt.coupon.giftName,
                openId: that.data.openId,
                type: opt.coupon.exchangeType || 3,
                tijiaoCB: function(res,data){
                  util.alert("恭喜中奖！我司将在活动结束后尽快为您派送礼品，请注意查收。")
                  that.prize.hide()
                }
              })
            }else{
              // 没中奖
              util.alert(opt.prize)
            }
            // 结束要再查一次还剩多少次数
            that.getLotteryCount()
           }else{
              that.setData({
                index: index+1
              });
              num--;
              that.choujiang(opt,num >= 10 ? time : time + 40,num);
           }
        } 
      }
    }, time);
  },
  toUserPage(){
    if(this.data.debug || !this.data.userInfo.userId){
      wx.navigateTo({
        url: '/pages/wx_user/index',
      })
    }else{
      wx.switchTab({
        url: '/pages/qy_user/index',
      })
    }
  },
  particpantList(){
    var that = this;
    ajax.post({
      url : "app/data/particpantList",  // 中奖列表
      data: {
        lotteryId: this.data.lotteryId
      },
      success(res){
        if(res.length != 0){
          that.setData({
            isShow_lotterys: true,
            lotterys: res
          })
          that.gundong(res.length * 1400)
        }
      }
    })
  },
  gundong(time){
    var animation = wx.createAnimation()
    animation.translateY('-50%').step({duration: time})
    this.setData({
      gundong: animation.export()
    })
    setTimeout(()=>{
      var animation = wx.createAnimation()
      animation.translateY(0).step({duration: 0})
      this.setData({
        gundong: animation.export()
      },function(){
        this.gundong(time)
      })
    },time)  
  },
})
