//index.js
//获取应用实例
const app = getApp()
import util from '../../utils/util.js'
import api from '../../utils/api.js'
//计数器
var interval = null;

Page({
  data: {
    color: ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
    //9张奖品图片
    images: ['/images/9gongge/static_index/youKu.png','/images/9gongge/static_index/xiaoLian.png','/images/9gongge/static_index/huaFei.png','/images/9gongge/static_index/xiaoLian.png','/images/9gongge/static_index/youKu.png','/images/9gongge/static_index/xiaoLian.png','/images/9gongge/static_index/huaFei.png','/images/9gongge/static_index/xiaoLian.png'],
  },
  onLoad:function(opt){
    wx.hideHomeButton()
  },
  // 点击抽奖按钮
  clickLuck:function(){
    var that = this;
    util.isLogin(app,that,function(){
        util.alert("您暂时没有抽奖机会")
    })
  },
  toUserPage(){
    wx.navigateTo({
      url: '/pages/wx_user/index',
    })
  }
})
