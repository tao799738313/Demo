/**
 * Created by taotao on 2018-12-05.
 */

var accountId = methods.getQueryString("accountId"),
    agentId = methods.getQueryString("agentId"),
    gui = methods.getQueryString("id"),
    userCode = methods.getQueryString("userCode"),
    cookieObj = JSON.parse(decodeURIComponent(methods.getCookie("yq_hz_user_" + agentId).replace(/(^\"*)|(\"*$)/g, ""))),
    userId = methods.getCookie("yq_qy_userid_" + agentId);


var basePath = methods.basePath;
//appSrc是线上图片前缀
//var appSrc = "http://develop.yunqunet.net/"  //http://47.110.60.215:9901/
//var appSrc = "http://47.110.60.215:9901/"	 
var appSrc = window.location.origin+'/';

var loadMask = methods.loadMask;
var timeMask = methods.timeMask;
var qrcode;
var canvasObj = {};
var coding = "";
var isTS = 0;  // 启动调试
var appImgBasePath = isTS ? '' : "http://work.hztel10000.com/" // "http://47.110.60.215:9901/"
//var appImgBasePath =  "http://47.110.60.215:9901/"
var canvas = $('#canvas')[0]
var ctx  = canvas.getContext("2d");

var canClick = false
var touchX = 0

var vaccountId = "wx284e37f5fc87b162";
var vagentId = "AudDfwFb";

// 入口
function init() {
    qrcode = new QRCode("qrcode");

    var img = new Image();
    img.crossOrigin = ""
    img.id = 'qrCode';
    img.style.cssText = 'position: fixed;top: 9999px;';
    img.onload = function(){
        $('#yuantuBox').append(img)

        var userIcon = new Image();
        userIcon.crossOrigin = ""
        userIcon.id = 'userIcon';
        userIcon.style.cssText = 'position: fixed;top: 9999px;';
        userIcon.onload = function(){
            $('#yuantuBox').append(userIcon)
        }
        userIcon.onerror = function (event) {
            timeMask("头像获取失败")
        }
        // img.src = './img/qrCodeCanvas.jpg'  //测试，这个大小废弃了
        userIcon.src = basePath + "app/market/activity/downloadImgByUrl?url=" + encodeURIComponent(cookieObj.userIcon);

    }
    img.onerror = function (event) {
        timeMask("个人二维码获取失败,请先上传头像以及生成个人二维码")
    }
    // img.src = './img/qrCodeCanvas.jpg'  //测试，这个大小废弃了
    //  img.src = './img/code.jpg'
    
    //省企业
    if(accountId != vaccountId){
    	img.src = basePath + "app/market/activity/downloadImg?qyUserType=sqy&loginName="+ cookieObj.userName;
    }else{
    	img.src = basePath + "app/market/activity/downloadImg?qyUserType=hzqy&loginName="+ cookieObj.userName;
    }
    
    getDetail(gui)
}
init();
function isLogin() {
    $(loadMask).show()
    var phone = cookieObj.phone

    if(!phone){
        methods.alert("无法访问")
        return;
    }
    $.ajax({
        type:'post',
        url:basePath+'app/market/activity/findHHrIdByPhone',
        dataType:"json",
        data:{
            phone: cookieObj.phone
        },
        success:function(res){
            $(loadMask).hide()
            if(res.success){
                userCode = res.userId
            }else{
                methods.alert("温馨提示:系统检测您当前无合伙人id，如需转发合伙人业务海报关联揽装，请先注册。");
                // userInfo.userId = "000000"
            }
            // 获取全部
            //typeChange()
        },
        error:function () {
            methods.alert("请查看当前网络状况");
        }
    })
}
function urlAddParams(url,couserId) {

    var targetUrl="";
    $.ajax({
        type:'post',
        url:basePath+'app/market/activity/urlJointParame',
        dataType:"json",
        async:false,	//同步返回
        data:{
            agentId: agentId,
            url: url,
            couserId:couserId
        },
        success:function(res){
            targetUrl = res.url;
        },
        error:function () {
            methods.alert("参数转换失败");
        }
    })

    return targetUrl;
}

// 获取详情
function getDetail(gui) {

        $(loadMask).show()
        $.ajax({
            type:'post',
            url:basePath+'app/market/activity/findDetailById',
            dataType:"json",
            data:{
                id: gui
            },
            success:function(res){
                if(res.success){
                    canvasObj[gui] = {
                        activity:res.activity,
                        url:res.activity.goUrl,
                        shareWord:res.activity.shareWord,
                        imageList:res.imageList,
                        arr:[]
                    };
                    if (res.activity.goUrl&&res.activity.goUrl.indexOf('{couser_id}'>=0)) {
                        isLogin();
                    }
                    $('#title').html(res.activity.title)
                    $('#time').html(methods.time2date(res.activity.createTime))
                    if(res.activity.shareWord){
                        $('#copyVal').html(res.activity.shareWord)
                        $('#copyValDiv').show()
                    }
                    if(res.activity.remark){
                        $('#remark').html(res.activity.remark)
                        $('#remarkDiv').show()
                    }
                    getCanvasObjArr(gui)
                }
                $(loadMask).hide()
            },
            error:function () {
                methods.alert("请查看当前网络状况");
            }
        })

}

// 所有图片加载
function getCanvasObjArr(gui) {
    var imageList = canvasObj[gui].imageList
    imageList.forEach(function (obj,index) {
        if(obj.imgUrl){
            canvasObj[gui].arr.push({
                area: JSON.parse(obj.area||"0"),
                imgUrl: appSrc + obj.imgUrl
            })
            var str = isTS ? 'img/test.jpg' : appSrc + obj.imgUrl
            if(imageList.length>=3){
                str = `<div class="smallList3"  data-index="${index}" onclick="openCanvas('${gui}','${index}')"><img src="${str}" /> </div>`
                $('#smallList').append(str)
            }else{
                str = `<div class="smallList" data-index="${index}" onclick="openCanvas('${gui}','${index}')"><img src="${str}" /> </div>`
                $('#smallList').append(str)
            }
        }
    })
    if(imageList.length>=3){
        $('#smallListDiv').css('overflow','hidden')
        $('#smallList').css('align-items','flex-end')
        var str = `<div id="indexDiv">`
        for(var i=0;i< imageList.length;i++){
            str += `<div class="indexDiv"></div>`
        }
        str += `</div><div id="draw3Btn" onclick="draw3Btn()" >生成专属海报</div>`
        $('#isBtn').html(str)
        $('.indexDiv').eq(1).css('background-color','#008aff')
    }else{
        $('#smallListDiv').css('overflow-y','hidden')
        $('#isBtn').html('点击 ↑ 缩略图生成海报')
    }
}

function draw3Btn() {
    canClick = true
    $('#smallList .smallList3').eq(1).click()
}


function touchS() {
    if($('#smallList .smallList3').length<3){return;}
    touchX = event.changedTouches[0].pageX
}

function touchM() {
    var len = $('#smallList .smallList3').length
    if(len<3){return;}
    if(event.changedTouches[0].pageX - touchX > 0){
        // 手指向右
        $('#smallList').css('margin-left',(event.changedTouches[0].pageX - touchX) + 'px')
    }
    if(event.changedTouches[0].pageX - touchX < 0){
        // 手指向左，向右移动一位
        $('#smallList').css('margin-left',(event.changedTouches[0].pageX - touchX) + 'px')
    }
}

function touchE() {
    var len = $('#smallList .smallList3').length
    if(len<3){return;}

    if(event.changedTouches[0].pageX - touchX > 80){
        // 手指向右，向左移动一位

        var last = $('#smallList').children('.smallList3').eq(len-1)
        $('#smallList').prepend(last)

        $('.indexDiv').css('background-color','#c1bdbd')
        var index = $('#smallList .smallList3').eq(1).attr('data-index')
        $('.indexDiv').eq(index).css('background-color','#008aff')
    }
    if(event.changedTouches[0].pageX - touchX < -80){
        // 手指向左，向右移动一位
        var frist = $('#smallList').children('.smallList3').eq(0)
        $('#smallList').append(frist)

        $('.indexDiv').css('background-color','#c1bdbd')
        var index = $('#smallList .smallList3').eq(1).attr('data-index')
        $('.indexDiv').eq(index).css('background-color','#008aff')
    }
    $('#smallList').css('margin-left','0px')
}

function changeUrl(gui,sourceUrl){
    var targetUrl = "";
    $.ajax({
        type:'POST',
        url:basePath+'app/shorturlapi/long2short',
        dataType:"text",
        async:false,	//同步返回
        data:{
            url: sourceUrl,
            activityId_:gui,
            coUserId_:userCode,
            loginName_:cookieObj.userName,
            xsyCode_:cookieObj.xsyCode,
        },
        success:function(res){
            targetUrl = res;
        },
        error:function(XMLHttpRequest, textStatus, errorThrown){
            methods.alert("地址转换出错!");
        }
    });
    return targetUrl;
}

// 计算比例
function count(obj,bili){
    var bili = bili || 1
    var x,y,x2,y2;
    obj.s_x = Math.abs( obj.s_x )
    obj.s_y = Math.abs( obj.s_y )
    obj.e_x = Math.abs( obj.e_x )
    obj.e_y = Math.abs( obj.e_y )
    if(obj.s_x > obj.e_x){
        x = obj.e_x
        x2 = obj.s_x
    }else{
        x = obj.s_x
        x2 = obj.e_x
    }
    if(obj.s_y > obj.e_y){
        y = obj.e_y
        y2 = obj.s_y
    }else{
        y = obj.s_y
        y2 = obj.e_y
    }
    return {
        x: x * bili,
        y: y * bili,
        w: (x2-x) * bili,
        h: (y2-y) * bili
    }
}

// 点击小图打开大图
function openCanvas(gui,index) {

    var len = $('#smallList .smallList3').length
    if(len >= 3 && !canClick){return;}

    var canArr = canvasObj[gui].arr
    if(canArr.length==0 || !canArr[index].imgUrl){
        timeMask("没有海报底图")
    }else{
        $(loadMask).show()

        if(document.querySelector('#yuantu_'+gui+'_'+index)){

            saveCheckPostersRecord(gui,canvasObj[gui].arr[index].url);

            // 先清空画布
            ctx.clearRect(0,0,canvas.width,canvas.height);

            // 画底图
            var yuantu = $('#yuantu_'+gui+'_'+index)
            yuantu[0].crossOrigin = ""
            var yuantuW = yuantu.width();
            var yuantuH = yuantu.height();

            if(yuantuW>800){
                var num = (yuantuW/800).toFixed(0);
                num = 1 / num;
                yuantuW = yuantuW * num
                yuantuH = yuantuH * num
            }

            canvas.width = yuantuW;
            canvas.height = yuantuH;
            ctx.drawImage(yuantu[0],0,0,yuantuW,yuantuH)

            drawElse(gui,index)

            var base64 = canvas.toDataURL('image/jpeg',1)
            var str = `<div style="max-height: 80vh;overflow-y:auto;"><img src="${base64}" style="width: 80vw;" onclick="event.stopPropagation()"></div>`

            $('#canvasMask').html(str).show()
            $(loadMask).hide()
            canClick = false
            event.stopPropagation()
        }else{

            if(canArr[index].area != 0){
                getAllImg(canArr[index].area,0,gui,index,function (gui,index) {
                    openCanvas(gui,index)
                })
            }else{
                // 只显示底图
                var img = new Image();
                img.crossOrigin = ""
                img.id = 'yuantu_'+gui+'_'+index;
                img.style.cssText = 'position: fixed;top: 9999px;';
                img.onload = function(){
                    $('#yuantuBox').append(img)
                    openCanvas(gui,index)
                }
                img.onerror = function (event) {
                    $(loadMask).hide()
                    timeMask("底图获取失败")
                }
                //   img.src = './img/qrCodeCanvas.jpg'  //测试，这个大小废弃了
                //   img.src = './img/test.jpg'
                img.src = isTS ? './img/test.jpg' : canArr[index].imgUrl;
            }
        }
    }
}

// 最终绘制
function drawElse(gui,index) {
    var area = canvasObj[gui].arr[index].area
    if(area==0){
        return
    }
    var dituObj = area[0]
    var bili = canvas.width / dituObj.w
    area = area.slice(1)
    for(var i=0;i<area.length;i++){
        var obj = area[i]
        if(obj.type == "selectArea"){
            var xywh = count(obj,bili)
            if(obj.selectAreaType == "Code"){
                if(obj.select=="1"){
                    // 活动链接就行用url参数
                    var url = canvasObj[gui].url
                    console.log(canvasObj[gui]);
                    var couserId =  canvasObj[gui].activity.couserId;
                    url = changeUrl(gui,urlAddParams(url,couserId))
                    //url = changeUrl(gui,url)
                    qrcode.makeCode(url);
                    var qrImg = $('#qrcode').find('canvas')[0]
                    if(qrImg){
                        white(xywh,qrImg)
                        // ctx.drawImage(qrImg,xywh.x,xywh.y,xywh.w,xywh.h)
                    }
                }else if(obj.select=="2"){
                    // 个人名片
                    var qrCode = $('#qrCode')[0]
                    if(qrCode){
                        var w = $('#qrCode').width()
                        var h = $('#qrCode').height()
                        // ctx.drawImage(qrCode,w*0.08,h*0.08,w*0.84,h*0.84,xywh.x,xywh.y,xywh.w,xywh.h)
                        ctx.drawImage(qrCode,xywh.x,xywh.y,xywh.w,xywh.h)
                        // 自带头像
                        var userIcon = $('#userIcon')[0];
                        if(userIcon){
                            console.log(xywh)
                            // 二维码中间加logo或者头像
                            var r = 6,x = xywh.x + xywh.w * 0.4, y= xywh.y + xywh.h * 0.4, w=xywh.w * 0.2,h=xywh.h *0.2;
                            // 圆角的矩形
                            ctx.beginPath();
                            ctx.moveTo(x, y);
                            ctx.arcTo(x+w, y, x+w, y+h, r);
                            ctx.arcTo(x+w, y+h, x, y+h, r);
                            ctx.arcTo(x, y+h, x, y, r);
                            ctx.arcTo(x, y, x+w, y, r);
                            ctx.closePath();
                            ctx.save();
                            ctx.clip();
                            ctx.drawImage(userIcon,x,y,w,h);
                            ctx.restore();
                        }

                    }
                }else if(obj.select=="3"){
                    // 活动链接就行用url参数
                    var couserId =  canvasObj[gui].activity.couserId;
                    var url = changeUrl(gui,urlAddParams(obj.inp,couserId))
                    qrcode.makeCode(url);
                    var qrImg = $('#qrcode').find('canvas')[0]
                    if(qrImg){
                        white(xywh,qrImg)
                        // ctx.drawImage(qrImg,xywh.x,xywh.y,xywh.w,xywh.h)
                    }
                }else if(obj.select=="4"){
                    if(document.querySelector("#code_"+gui+"_"+index+"_"+(i+1))){
                        ctx.drawImage($("#code_"+gui+"_"+index+"_"+(i+1))[0],xywh.x,xywh.y,xywh.w,xywh.h)
                    }
                }
            }
            if(obj.selectAreaType == "Head"){
                var userIcon = $('#userIcon')[0];
                if(userIcon){
                    // 二维码中间加logo或者头像
                    var r = 6,x = xywh.x,y= xywh.y,w=xywh.w,h=xywh.h;
                    // 圆角的矩形
                    ctx.beginPath();
                    ctx.moveTo(x, y);
                    ctx.arcTo(x+w, y, x+w, y+h, r);
                    ctx.arcTo(x+w, y+h, x, y+h, r);
                    ctx.arcTo(x, y+h, x, y, r);
                    ctx.arcTo(x, y, x+w, y, r);
                    ctx.closePath();
                    ctx.save();
                    ctx.clip();
                    ctx.drawImage(userIcon,xywh.x,xywh.y,xywh.w,xywh.h);
                    ctx.restore();
                }
            }
            if(obj.selectAreaType == "Logo"){
                if(document.querySelector("#logo_"+gui+"_"+index+"_"+(i+1))){
                    ctx.drawImage($("#logo_"+gui+"_"+index+"_"+(i+1))[0],xywh.x,xywh.y,xywh.w,xywh.h)
                }
            }
        }
    }
}

function myCopy() {
    // $('#copyVal').html(wenanObj[imgUrl])
    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents($('#copyVal')[0]);
    selection.removeAllRanges();
    selection.addRange(range);
    if(document.execCommand("Copy")){
        timeMask('复制成功!')
        selection.removeAllRanges();
    }else{
        timeMask('复制失败，请自行长按复制')
        selection.removeAllRanges();
    }
}

// 获取除了底图外的其他图片，logo等等
function getAllImg(arr,index,gui,index2,cb) {
    var len = arr.length;
    if(len == index){
        cb(gui,index2)
    }else{
        var obj = arr[index]
        if(obj.type == "dituImg"){
            var img = new Image();
            img.crossOrigin = ""
            img.id = 'yuantu_'+ gui + '_' + index2;
            img.style.cssText = 'position: fixed;top: 9999px;';
            img.onload = function(){
                $('#yuantuBox').append(img)
                getAllImg(arr,index+1,gui,index2,cb)
            }
            img.onerror = function (event) {
                $(loadMask).hide()
                timeMask("底图获取失败")
            }
            //   img.src = './img/qrCodeCanvas.jpg'  //测试，这个大小废弃了
            //   img.src = './img/test.jpg'
            img.src = isTS ? "img/test.jpg" : appImgBasePath + obj.url;
        }else if(obj.type == "selectArea"){
            if(obj.selectAreaType == "Code"){
                if(obj.select=="4"){
                    var img = document.createElement("img")
                    img.id = "code_" + gui + "_" + index2 + "_" + index;
                    img.onload = function(){
                        img.className = "img9999"
                        $('#yuantuBox').append(img)
                        getAllImg(arr,index+1,gui,index2,cb)
                    }
                    img.onerror = function (event) {
                        getAllImg(arr,index+1,gui,index2,cb)
                    }
                    img.src = isTS ? "img/code.jpg" : appImgBasePath + obj.url
                }else{
                    getAllImg(arr,index+1,gui,index2,cb)
                }
            }else if(obj.selectAreaType == "Logo"){
                var img = document.createElement("img")
                img.id = "logo_" + gui + "_" + index2 + "_" + index;
                img.onload = function(){
                    img.className = "img9999"
                    $('#yuantuBox').append(img)
                    getAllImg(arr,index+1,gui,index2,cb)
                }
                img.onerror = function (event) {
                    getAllImg(arr,index+1,gui,index2,cb)
                }
                img.src = isTS ? "img/code.png" : appImgBasePath + obj.url
            }else{
                getAllImg(arr,index+1,gui,index2,cb)
            }
        }else{
            getAllImg(arr,index+1,gui,index2,cb)
        }
    }
}

// 选择海报记录
function saveCheckPostersRecord(gui,url) {
    $(loadMask).show()
    $.ajax({
        type:'post',
        url:basePath+'app/poster/record/saveCheckPostersRecord',
        dataType:"json",
        data:{activityId:gui,imgUrl:url,userId:userId,partnerId:userCode},
        success:function(res){

        },
        error:function () {
            // methods.alert("请查看当前网络状况");
        }
    })
}

// 二维码白边
function white(xywh,qrImg) {
    ctx.beginPath();  // 开始画
    ctx.fillStyle = "white"; //设置颜色
    ctx.fillRect(xywh.x,xywh.y,xywh.w,xywh.h);//填充矩形
    ctx.stroke();
    ctx.drawImage(qrImg,xywh.x+xywh.w*0.05,xywh.y+xywh.h*0.05,xywh.w*0.9,xywh.h*0.9)
}
