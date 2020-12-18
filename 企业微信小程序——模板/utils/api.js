
const ajax = require("./ajax.js");
const util = require("./util.js");

function savelog(opt){
    ajax.post({
        url : "app/activity/activityUserLog/save",
        data: opt.data,
        success(res){
            opt.success && opt.success(res)
        }
    })
}


function checkActivityEnable(opt){
    ajax.post({
        url : "app/activity/lottery/checkActivityEnable",
        data: opt.data,
        success(res){
            opt.success && opt.success(res)
        }
    })
}

function scene(id,success){
    ajax.get({
        url : "app/data/getQrcodeParams",
        data: {
            sceneId: id
         },
        success(res){
            if(res.success){
                success && success(JSON.parse(res.result))
            }else{
                util.alert("获取scene参数失败")
            }
        }
    })
}

module.exports = {
    savelog,scene,checkActivityEnable
}