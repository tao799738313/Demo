let http = "https://wxtest.yunqunet.net/wx_gd_ewsm/";
const util = require("./util.js");
const configure = require("./configure.js");


if(configure.isGDSDX){
    http = "https://enter.gd189.cn/wx_gd_ewsm/"
}

function get(opt){
    util.showLoading()
    wx.request({
        url: http + opt.url, //仅为示例，并非真实的接口地址
        data: opt.data,
        method: "GET",
        success (res) {
           opt.success && opt.success(res.data)
        },
        fail(res){
            // util.alert('接口报错')
            opt.fail &&  opt.fail(res.data)
        },
        complete: function () {
            util.hideLoading()
        }
      })
}

function post(opt){
    util.showLoading()
    wx.request({
        url: http + opt.url, //仅为示例，并非真实的接口地址
        data: opt.data,
        method: "POST",
        success (res) {
            opt.success && opt.success(res.data)
        },
        fail(res){
            // util.alert('接口报错')
            opt.fail && opt.fail(res.data)
        },
        complete: function () {
            util.hideLoading()
        }
      })
}


function file(opt) {
     wx.showToast({
     icon: "loading",
     title: "正在上传",
     mask: true
     })
     var index = opt.index || 0;
     var  filePath = opt.path[index];
     wx.uploadFile({
     url: http + opt.url,
     filePath: filePath,
     name: opt.name || 'file',
     header: { "Content-Type": "multipart/form-data" },
     formData: opt.data,
     success: function (res) {
        util.alert('上传成功')
        opt.success && opt.success(res.data)
     },
     fail: function (res) {
         util.alert('上传失败')
         opt.fail && opt.fail(res.data)
     },
     complete: function () {
        if(opt.path.length == index+1){
            wx.hideToast(); //隐藏Toast
        }else{
            opt.index = ++index
            file(opt)
        }
     }
     })
    }


module.exports = {
    get,post,file
    }