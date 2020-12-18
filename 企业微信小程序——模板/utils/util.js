// 只限微信小程序使用
function isLogin(app,that,success,fail){
  if(app.globalData.openId && app.globalData.userInfo){
     success && success()
  }else{
      if(fail){
          fail()
      }else{
          // 把提示登陆的窗口显示
          confirm("您还未登陆，登陆后才可以抽奖",function(){
                  // let pages = getCurrentPages(); //当前页面栈
                  // let page = pages[pages.length - 1].route;
                  // let options = pages[pages.length - 1].options;
                  wx.navigateTo({
                      url: "/pages/wx_user/index?redirect=1"
                  })
              })
      }
  }
}


function load_wait(app,that,success,fail){
   if(!app.globalData.isLoading){
      hideLoading()
      that.setData({
        loginName: app.globalData.loginName,
        debug: app.globalData.debug,
        userInfo: app.globalData.userInfo,
        userId: app.globalData.userId,
        isQY: app.globalData.isQY,
        openId: app.globalData.openId,
        accountId: app.globalData.accountId,
        imgAppSrc: app.globalData.imgAppSrc,
        appSrc : app.globalData.appSrc,
      })
      that.tips = that.selectComponent("#tips");
      that.prize = that.selectComponent("#prize");
      that.list_status = that.selectComponent("#list_status");
      // 后续补充
      success && success()
   }else{
      showLoading()
      setTimeout(()=>{
        load_wait(app,that,success,fail)
      },500)
   }
}

function showLoading(){
  wx.showLoading({
    title: '加载中',
    mask: true
  })
}

function hideLoading(){
  wx.hideLoading()
}

function alert(str,cb){
  wx.showModal({
    title: '提示',
    showCancel: false,
    content: str || '传str',
    success (res) {
      if (res.confirm) {
        cb && cb()
      }
    }
  })
}

function confirm(str,yes,no){
  wx.showModal({
    title: '提示',
    showCancel: true,
    content: str || '传str',
    success (res) {
      if (res.confirm) {
        yes && yes()
      }else if (res.cancel) {
        no && no()
      }
    }
  })
}


function isPhone(phone){
  var reg = /^1[0-9]{10}$/
  if(reg.test(phone)){
     return true 
  }else{
    return false
  }
}

function tips_inspect(app,that,opt,success){
   var flag = true 
  for(let k in opt){
    var obj = opt[k]
    if(Object.prototype.toString.call(opt[k])=="[object Function]"){
      var flag = opt[k]()
      if(!flag){
        break;
      }
    }else{
    var val = k.split(".").reduce((a,b)=>{ return a[b]; }, that.data)
    if(obj.require){
       if(!val){
         that.tips.show({
           text: obj.name + "不能为空"
         })
         flag = false;
         break;
       }
      // 必填，非必填但有值
      if(val){
          if(obj.isPhone){
            if(!isPhone(val)){
              that.tips.show({
                text: obj.name + "格式不正确"
              })
              flag = false;
              break;
            }
          }
        }
      }
    }
  }
  if(flag){
    success && success()
  }
}


function uuId(){
  var S4 = function() {
      return(((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return(S4() + S4() + S4() + S4() + S4() + S4() + S4() + S4());
}

function into(app,that,success,fail){
  if(app.globalData.isQY){
     if(app.globalData.userId){
        success && success()
     }else{
        wx.hideTabBar()
        that.setData({
          intoMsg: "您不是企业内部员工"
        })
     }
  }else{
    // 微信打开
      if(app.globalData.userId){
        success && success()
      }else{
          wx.hideTabBar()
          that.setData({
            intoMsg: "无权访问"
          })
          // 直接跳转到wx_user页面
          wx.redirectTo({
            url: '/pages/wx_static_index/index',
          })
      }
  }
}


function into2(app,that,success,fail){
  if(app.globalData.isQY){
      success && success()
  }else{
    if(app.globalData.userId){
        that.setData({
           intoMsg: "请在企业微信APP使用"
        })
    }else{
        wx.hideTabBar()
        that.setData({
            intoMsg: "无权访问"
        })
    }
  }
}

module.exports = {
  isLogin,load_wait,showLoading,hideLoading,alert,confirm,tips_inspect,into,into2,uuId
}
