/**
 * 一些操作方法集合 mon(qq:505038730) 2014-9-30
 */
(function(root, factory ) {
    if ( typeof define === "function" && define.amd ) {
        define( factory );
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.methods = factory();
    }
}(this, function() {

    var regObj = {
        phone : /^[1]{1}[0-9]{10}/,
        idCard : /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
        num:/\d+/g,
    }
    var thisGui = getGui();
    var loadMask = loadMask();
    var doc = location.href.indexOf('doc');
    var basePath = location.href.substring(0, doc);
    var accountId = getQueryString("accountId")
    // 公众号没有 agentId
    var agentId = getQueryString("agentId")
    var cookieObj = JSON.parse(decodeURIComponent(getCookie("yq_hz_user_" + accountId).replace(/(^\"*)|(\"*$)/g, "")));
    // 企业号的 userId = methods.getCookie("yq_qy_userid_" + agentId);
    var userId = cookieObj.userId;
    // 企业号没有openId
    var openId = cookieObj.openId;
    return  (function(){
        rem();
        ios();
        setFontSize();
        // hideOptionMenu();
        return {
            basePath:basePath, // ajax请求的前缀
            accountId:accountId,
            agentId:agentId,
            cookieObj:cookieObj,  // cookie的信息都在这里
            userId:userId,
            openId:openId,
            appSrc:'http://218.244.149.31:9901/',  //这个是图片文件的前缀，每个项目的图片前缀都不一样，是每个项目都要改的
            thisGui:thisGui,
            loadMask:loadMask,
            regObj:regObj,
            getSearchMap:getSearchMap,
            getLink:getLink,
            title:title,
            getQueryString:getQueryString,
            charm:charm,  // 数据校验，用于提交
            timeMask:timeMask,
            isPhone:isPhone,
            isIdCard:isIdCard,
            getCookie:getCookie,
            getGui:getGui,  // 随机id
            time2date:time2date,
            date2time:date2time,
            alert:alert,
            comfirm:confirm,
            mask:mask,
            qrcode:qrcode, // 会有一个默认关注二维码的弹窗
            closeMask:closeMask,
            getType:getType,  // 获取数据格式，也可以用来对比
            timeIn:timeIn, // 是否在活动时间里
            copyVal:copyVal,  // 生成一个带有复制功能的按钮，按钮样式自己写
            Alert:Alert,
            Alert2:Alert2, // 卓卓要求定制的
            Comfirm:Comfirm,
            ts:ts,
            rollTo:rollTo,  // 滚动到最上面
            //在这下面一下的方法是需要jq支持的
            addScroll:addScroll,   // 下拉加载
            hideOptionMenu:hideOptionMenu,  // 隐藏全部
            showOptionMenu:showOptionMenu,
            closeWindow:closeWindow,
            getSignatureByJsapi:getSignatureByJsapi,  //这个是每个项目都要改的
            // 公众号才有关注和绑定
            isfollow:isfollow,  //这个是每个项目都要改的
            tobinding:tobinding,  //这个是每个项目都要改的
            follow_tobinding:follow_tobinding,
        }
    })()


    var regObj = {
        phone : /^[1]{1}[0-9]{10}$/,
        idCard : /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
        num:/\d+/g,
    }

    function rem(){
        //750的设计图使用,测量的值除以50,改成40也行
        var rem = 50 / 750 * document.documentElement.clientWidth;
        document.documentElement.style.fontSize = rem + 'px';
        window.onresize = function () {
            var rem = 50 / 750 * document.documentElement.clientWidth;
            document.documentElement.style.fontSize = rem + 'px';
        }
    }

    function title(str){
        document.querySelector('title').innerHTML = str;
    }

    /*去链接的参数值*/
    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        // window.location.search 获取从问号之后的所有内容后substr(1)删掉问号
        var r = window.location.search.substr(1).match(reg);
        // 地址栏的中文会被编码,unescape是解码
        if (r != null) return decodeURIComponent(r[2]); return null;
    }

    function isPhone(phone){
        return charm({
            phone:{name:"手机号码",reg:regObj["phone"]}
        },{
            phone:phone
        })
    }

    function isIdCard(idCard){
        return charm({
            idCard:{name:"身份证号码",reg:regObj["idCard"]}
        },{
            idCard:idCard
        })
    }

    function getLink(url) {
        var loc = location
        if(url){
            loc = new URL(url)
        }
        var origin = loc.origin
        var pathname = loc.pathname
        var search = loc.search
        var link = ""

        search = search.split("?")
        if(search.length==2){
            // openId是线上的测试参数，不能出现在分享和复制链接里
            var link = getSearchMap("",["openId"],1)
            link.slice(1)
            return origin + pathname + "?" + link;
        }else{
            return origin + pathname;
        }
    }

    function getSearchMap(loc,blackArr,isPJ) {
        var map = {}
        var blackArr = blackArr || []
        var loc = loc || location
        var search = loc.search
        search = search.split("?")
        if(search.length==2 && search[1] != ""){
            search = search[1]
            search = search.split("&")
            search.forEach(function(str,index){
                var arr = str.split("=")
                if(arr[0] !="" && arr[1] !="") {
                    if (blackArr.indexOf(arr[0]) == -1) {
                        if (map[arr[0]]) {
                            map[arr[0]].push(arr[1])
                        } else {
                            map[arr[0]] = [arr[1] || ""]
                        }
                    }
                }
            })
            if(isPJ){
                var str = ""
                for(var i in map){
                    var arr = map[i]
                    arr.forEach(function (val) {
                        str += "&" + i + "=" + val
                    })
                }
                return str
            }
            return map
        }
        return ""
    }

    function reload() {
        var link = getSearchMap("",["_v"],1)
        location.href = location.origin + location.pathname + "?" + link + "&_v=" + new Date().getTime();
    }

    function charm(charmObj,dataObj){
        // console.log(charmObj,dataObj)
        // 	charmObj:{
        // 		title : {name:'标题',alert:"标题必须带【666】",reg:/[666]/} ...
        // 		}
        // 	dataObj:{
        // 		title : '我是标题' ...
        // 		}
        for(var key in dataObj){
            var value = dataObj[key];
            if(charmObj[key]){
                console.log(key)
                if(getType(charmObj[key],'string')){
                    charmObj[key] = {
                        name:charmObj[key]
                    }
                }
                var name = charmObj[key]['name'];
                var alert = charmObj[key]['alert'] || name+"格式不正确";
                var reg = charmObj[key]['reg'] || /(.|\n)/;
                if(value){
                    if(reg.test(value)){

                    }else{
                        timeMask(alert);
                        return false;
                    }
                }else{
                    timeMask(name+"不能为空")
                    return false;
                }
            }
        }
        return true

    }


   function setFontSize() {
       isWX(function () {
           // 设置网页字体为默认大小
           WeixinJSBridge.invoke('setFontSizeCallback', {

               'fontSize': 0

           });
           // 重写设置网页字体大小的事件
           WeixinJSBridge.on('menu:setfont', function () {

               WeixinJSBridge.invoke('setFontSizeCallback', {

                   'fontSize': 0

               });

           });
       })
   }


    //黑色
    function timeMask(text,time,cb) {
        var time = time || 2000;
        var text = text || '操作出现错误';
        var dom = document.createElement('div');
        dom.style.cssText = "word-wrap:break-word; font-size: 0.6rem;position: fixed; line-height:0.8rem;text-align: center;max-width:60%;padding:0.4rem; background-color:black;color:white; border-radius: 0.2rem;bottom:1rem;left: 50%;transform: translate(-50%,0);border: 1px solid gray; box-shadow: 2px 2px 2px gray;opacity:0;transition:bottom 0.5s,opacity 0.5s;z-index:100;";
        dom.innerHTML = text;
        document.querySelector('body').appendChild(dom);
        window.setTimeout(function() {
            document.querySelector('body').removeChild(dom);
            if(cb){
                cb()
            }
        },time)
        setTimeout(function () {
            dom.style.bottom = "3rem";
            dom.style.opacity = "1"
        },100)
    }


    function getCookie(name) {
        var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
        if(arr=document.cookie.match(reg))
            return decodeURIComponent(arr[2]);
        else return null;
    }

    function time2date(time,str){
        var time = Number(time);
        if(time){
            var str = str || 'x-x-x x:x:x';
            var A = new Date(time).getFullYear();
            var B = new Date(time).getMonth()+1;
            var C = new Date(time).getDate();
            var D = new Date(time).getHours();
            var E = new Date(time).getMinutes();
            var F = new Date(time).getSeconds();

            var arr = [A,B,C,D,E,F];
            arr.forEach(function(x){
                str = str.replace('x',add0(x))
            })
            return str;
        }else{
            console.log("时间格式不正确")
        }
    }

    function add0(str){
        str = Number(str);
        return (str<10?'0'+str:str)
    }

    function date2time(data,flag){
        var reg = regObj.num

        var str3 = "x-x-x 00:00:00"
        var str4 = "x-x-x x:00:00"
        var str5 = "x-x-x x:x:00"
        var str6 = "x-x-x x:x:x"

        var arr = data.match(reg);
        var len = arr.length;
        var str = (len==3) && str3 || (len==4) && str4 || (len==5) && str5 || (len==6) && str6;
        arr.forEach(function(x){
            str = str.replace('x',add0(x));
        })
        if(flag){
            return [str,new Date(str).getTime()];
        }else{
            return new Date(str).getTime();
        }

    }

    function ios(){

        //     $('body').on('blur','input[type="text"]',function () {
        //         console.log("IOS")
        //         setTimeout(function() {
        //             var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0;
        //             window.scrollTo(0, Math.max(scrollHeight - 1, 0));
        //         }, 100);
        //     })
        //
        //     $('body').on('blur','textarea',function () {
        //         console.log("IOS")
        //         setTimeout(function() {
        //             var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0;
        //             window.scrollTo(0, Math.max(scrollHeight - 1, 0));
        //         }, 100);
        //     })

        document.body.addEventListener('click',function (e) {
            if(e.target.type == "text" || e.target.type == "password" || e.target.tagName == "TEXTAREA" ){
                var nowTop = document.documentElement.scrollTop || document.body.scrollTop || 0;
                e.target.addEventListener('blur',mimeBlur)
                function mimeBlur() {
                    var e = event || window.event;
                    e.target.removeEventListener('blur',mimeBlur)
                    setTimeout(function() {
                        window.scrollTo(0,nowTop);
                    }, 100);
                }
            }
        })

    }

    //唯一值
    function getGui(){
        var S4 = function() {
            return(((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return(S4() + S4() + S4() + S4() + S4() + S4() + S4() + S4());
    }

    function loadMask(){
        var dom = document.createElement('div');
        dom.style.cssText = 'display: none; position: fixed;width: 100%;height: 100%;top: 0;left: 0;background-color: rgba(255,255,255,0.5);z-index: 200';
        dom.innerHTML = `
        <style type="text/css">
            .spinner {
                position: absolute;
                top:50%;
                left: 50%;
                transform: translate(-50%,-50%);
                /*width: 50px;*/
                margin: auto;
                height: 60px;
                text-align: center;
                font-size: 10px;
                bottom: auto;
                right: auto;
            }
            .spinner > div {
                background-color:rgb(121,182,249);
                height: 100%;
                width: 6px;
                display: inline-block;
                -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
                animation: stretchdelay 1.2s infinite ease-in-out;
            }
            .spinner .rect2 {
                -webkit-animation-delay: -1.1s;
                animation-delay: -1.1s;
            }
            .spinner .rect3 {
                -webkit-animation-delay: -1.0s;
                animation-delay: -1.0s;
            }
            .spinner .rect4 {
                -webkit-animation-delay: -0.9s;
                animation-delay: -0.9s;
            }
            .spinner .rect5 {
                -webkit-animation-delay: -0.8s;
                animation-delay: -0.8s;
            }
            @-webkit-keyframes stretchdelay {
                0%, 40%, 100% { -webkit-transform: scaleY(0.4) }
                20% { -webkit-transform: scaleY(1.0) }
            }
            @keyframes stretchdelay {
                0%, 40%, 100% {
                    transform: scaleY(0.4);
                    -webkit-transform: scaleY(0.4);
                }  20% {
                       transform: scaleY(1.0);
                       -webkit-transform: scaleY(1.0);
                   }
            }
        </style>
        <div class="spinner">
            <div class="rect1"></div>
            <div class="rect2"></div>
            <div class="rect3"></div>
            <div class="rect4"></div>
            <div class="rect5"></div>
        </div>`;
        document.body.appendChild(dom);
        return dom;
    }
    /*模拟alert框，有cb就执行cb*/
    function alert(text,cb){
        var dom = document.createElement('div');
        dom.style.cssText = 'position:fixed;width:100%;height:100%;top:0;left:0;z-index:200;';
        dom.innerHTML = `
        <div style="transform:translate(-50%,-50%);width:10rem;position:absolute;top:50%;left:50%;z-index:20;box-shadow:1px 1px 3px rgba(0,0,0,0.1);background:#fff;border:1px solid #ccc;color:#333;border-radius:5px;">
        <div style="padding:0.6rem;word-break:break-all;font-size:0.6rem;line-height:0.8rem">${text}</div>
		<div style="padding:0.4rem 0;text-align:center;background-color:#f5f5f5;border-top:1px solid #ddd;">
		<span style="font-size:0.6rem;padding:0.3rem 0.5rem;vertical-align: middle;background-color: #2e6da4;color: #fff;border: 1px solid #337ab7;border-radius:0.1rem;display:inline-block;">确定</span>
		</div>
		</div>`;
        document.body.appendChild(dom);
        dom.children[0].children[1].children[0].addEventListener('click',function(){
            dom.remove()
            if(cb){cb()}
        })
    }
    /*模拟alert框，有cb就执行cb*/
    function confirm(text,cbOk,cbNo){
        var dom = document.createElement('div');
        dom.style.cssText = 'position:fixed;width:100%;height:100%;top:0;left:0;z-index:200;';
        dom.innerHTML = `
         <div style="transform:translate(-50%,-50%);width:10rem;position:absolute;top:50%;left:50%;box-shadow:1px 1px 3px rgba(0,0,0,0.1);background:#fff;border:1px solid #ccc;color:#333;border-radius:5px;">
        <div style="padding:0.6rem;word-break:break-all;font-size:0.6rem;line-height:0.8rem">${text}</div>
		<div style="padding:0.4rem 0;text-align:center;background-color:#f5f5f5;border-top:1px solid #ddd;">
		<span style="font-size:0.6rem;padding:0.3rem 0.5rem;vertical-align: middle;background-color: #7f8487;color: #fff;border-radius:0.1rem;display:inline-block;">取消</span>
		<span style="font-size:0.6rem;padding:0.3rem 0.5rem;vertical-align: middle;background-color: #2e6da4;color: #fff;border-radius:0.1rem;display:inline-block;">确定</span>
		</div>
		</div>`;
        document.body.appendChild(dom);
        dom.children[0].children[1].children[0].addEventListener('click',function(){
            dom.remove()
            if(cbNo){cbNo()}
        })
        dom.children[0].children[1].children[1].addEventListener('click',function(){
            dom.remove()
            if(cbOk){cbOk()}
        })
    }

    function Alert(text,cb) {
        var dom = document.createElement('div');
        dom.style.cssText = 'position:fixed;width:100%;height:100%;top:0;left:0;z-index:20;background-color:rgba(0,0,0,0.6);';
        dom.innerHTML = `
        <div style="transform:translate(-50%,-50%);width:12rem;position:fixed;top:50%;left:50%;z-index:20;box-shadow:1px 1px 3px rgba(0,0,0,0.1);background:white;border-radius:5px;padding:0.8rem 0.8rem 0.5rem 0.8rem;">
        <div id="AlertTitle_${thisGui}" style="word-break:break-all;color:black;font-weight: 600;">提示</div>
        <div style="word-break:break-all;font-size:0.6rem;color:grey;padding: 0.3rem 0 0.4rem 0;">${text||'内容'}</div>
		<div style="text-align: right;">
		<span id="AlertBtn_${thisGui}" style="font-size:0.6rem;padding:0.2rem 0.5rem;vertical-align: middle;color: #0070ff;display:inline-block;font-weight: 600;cursor: pointer;">确认</span>
		</div>
		</div>`;
        document.body.appendChild(dom);
        document.querySelector(`#AlertBtn_${thisGui}`).addEventListener('click',function(){
            dom.remove()
            if(cb&&getType(cb,'function')){cb()}
        })
        return function (title,btnText) {
            document.querySelector(`#AlertTitle_${thisGui}`).innerHTML = (title || '提示');
            document.querySelector(`#AlertBtn_${thisGui}`).innerHTML = (btnText || '确认');
        }
    }

    function Alert2(text,cb) {
        var dom = document.createElement('div');
        dom.style.cssText = 'position:fixed;width:100%;height:100%;top:0;left:0;z-index:20;background-color:rgba(0,0,0,0.6);';
        dom.innerHTML = `<div style="transform:translate(-50%,-50%);width:12rem;position:fixed;top:50%;left:50%;z-index:20;box-shadow:1px 1px 3px rgba(0,0,0,0.1);background:white;border-radius:5px;padding:0.8rem 0.8rem 0.5rem 0.8rem;">
        <div id="AlertTitle_${thisGui}" style="word-break:break-all;color:black;text-align: center;">提示</div>
        <div style="word-break:break-all;font-size:0.6rem;color:grey;padding: 0.3rem 0 0.4rem 0;text-align: center;">${text||'内容'}</div>
		<div style="text-align: center;">
		<span id="AlertBtn_${thisGui}" style="font-size:0.6rem;padding:0.2rem 0.5rem;vertical-align: middle;color: #0070ff;display:inline-block;font-weight: 600;cursor: pointer;">确认</span>
		</div>
		</div>`;
        document.body.appendChild(dom);
        document.querySelector(`#AlertBtn_${thisGui}`).addEventListener('click',function(){
            dom.remove()
            if(cb&&getType(cb,'function')){cb()}
        })
        return function (title,btnText) {
            document.querySelector(`#AlertTitle_${thisGui}`).innerHTML = (title || '提示');
            document.querySelector(`#AlertBtn_${thisGui}`).innerHTML = (btnText || '确认');
        }
    }

    function Comfirm(text,cbY,cbN) {
        var dom = document.createElement('div');
        dom.style.cssText = 'position:fixed;width:100%;height:100%;top:0;left:0;z-index:20;background-color:rgba(0,0,0,0.6);';
        dom.innerHTML = `
        <div style="transform:translate(-50%,-50%);width:12rem;position:fixed;top:50%;left:50%;z-index:20;box-shadow:1px 1px 3px rgba(0,0,0,0.1);background:white;border-radius:5px;padding:0.8rem 0.8rem 0.5rem 0.8rem;">
        <div id="ComfirmTitle_${thisGui}" style="word-break:break-all;color:black;font-weight: 600;">提示</div>
        <div style="word-break:break-all;font-size:0.6rem;color:grey;padding: 0.3rem 0 0.4rem 0;">${text||'内容'}</div>
		<div style="text-align: right;">
		<span id="ComfirmBtnN_${thisGui}" style="font-size:0.6rem;padding:0.2rem 0.5rem;vertical-align: middle;color: grey;display:inline-block;font-weight: 600;cursor: pointer;">取消</span>
		<span id="ComfirmBtnY_${thisGui}" style="font-size:0.6rem;padding:0.2rem 0.5rem;vertical-align: middle;color: #0070ff;display:inline-block;font-weight: 600;cursor: pointer;">确认</span>
		</div>
		</div>`;
        document.body.appendChild(dom);

        document.querySelector(`#ComfirmBtnN_${thisGui}`).addEventListener('click',function(){
            dom.remove()
            if(cbN&&getType(cbN,'function')){cbN()}
        })
        document.querySelector(`#ComfirmBtnY_${thisGui}`).addEventListener('click',function(){
            dom.remove()
            if(cbY&&getType(cbY,'function')){cbY()}
        })

        return function (title,btnY,btnN) {
            document.querySelector(`#ComfirmTitle_${thisGui}`).innerHTML = (title || '提示');
            document.querySelector(`#ComfirmBtnY_${thisGui}`).innerHTML = (btnY || '确认');
            document.querySelector(`#ComfirmBtnN_${thisGui}`).innerHTML = (btnN || '取消');
        }
    }

    function qrcode(src){
        var src = src || basePath+'doc/app/common/img/code.png'
        var dom = document.createElement('div');
        dom.style.cssText = "position: absolute;background-color:white;top:50%;left: 50%;width:80%;transform: translate(-50%,-50%);border-radius:0.5rem;overflow:hidden;";
        dom.innerHTML = '<img src="'+src+'" style="width:100%;vertical-align:top;"/>';
        mask(dom)
    }

    function mask(doc){
        var dom = document.createElement('div');
        dom.style.cssText = "position: fixed;background-color:rgba(0,0,0,0.5);top:0;left: 0;width:100%;height:100%;";
        document.querySelector('body').appendChild(dom);
        if(doc){
            dom.appendChild(doc);
        }
        return dom;
    }

    function closeMask(doc){
        var dom = document.createElement('div');
        dom.setAttribute('onclick','this.remove()');
        dom.style.cssText = "position: fixed;background-color:rgba(0,0,0,0.5);top:0;left: 0;width:100%;height:100%;";
        document.querySelector('body').appendChild(dom);
        if(doc){
            doc.addEventListener('click',function(event){
                event.stopPropagation()
            })
            dom.appendChild(doc);
        }
        return dom;
    }

    function timeIn(timeStartObj,timeEndObj){
        var timeStart = timeStartObj.time;
        var timeEnd = timeEndObj.time;
        var now = new Date().getTime()
        if(!Number(timeStart)){
            timeStart = date2time(timeStart,true)[1]
        }
        if(!Number(timeEnd)){
            timeEnd = date2time(timeEnd,true)[1]
        }
        // console.log(timeStart,timeEnd)
        if(timeStart>now){
            // timeMask(timeStartObj.tishi || '活动未开始')
            return false;
        }
        if(now>timeEnd){
            // timeMask(timeEndObj.tishi || '活动已结束')
            return false;
        }
        return true;
    }

    function getType(opt,typeStr){
        var type = Object.prototype.toString.call(opt)
        if(typeStr){
            if(type.split(" ")[1].replace("]","").toLowerCase()==typeStr.toLowerCase()){
                return true;
            }else{
                return false;
            }
        }else{
            return type;
        }
    }

    function copyVal(val,faDom) {
        var faDom = faDom || document.querySelector('body');
        var div = document.createElement('div');
        //不能displaynone，会复制不到
        div.style.cssText = `position:fixed;bottom:-99999px`;
        div.innerHTML = `<form name="copyValForm"><input name="beCopy" type="text"  value="${val}" readonly="readonly" /></form>`
        document.querySelector('body').append(div);
        var btn = document.createElement('div')
        btn.className = "copyBtn";
        btn.innerHTML="复制";
        btn.addEventListener('click',function () {
            //不同进入光标也能选中
            // document.form1.beCopy.focus();
            document.copyValForm.beCopy.select();
            document.execCommand("Copy");
            document.copyValForm.beCopy.blur(); //复制后立刻离开光标，打断输入法弹出
            timeMask('复制成功!')
        })
        faDom.append(btn)
    }

    function ts(str) {
        var daan = {
            '省略':"overflow: hidden;white-space: nowrap;text-overflow: ellipsis;",
            '验证':"validation",
            '判断':'judge',
            '换行':'word-break:break-word;'  //break-all是把单词也强制换行
        }
        console.log(daan[str])
    }

    //------------------------下面的功能是需要jq支持的，上面的是不需要jq的---------------------------------------

    // faDom一般是window，如果是另一个div，需要使用绝对定位才有属于div自己的独立滚动条
    // sonDom如果不是填充满faDom,那sonDom一定要用padding填充到跟faDom一样的高度
    // cb一定要有加载更多判断，比如一个全局变量，否则滚动一下会调用几十次请求
    function addScroll(faDom,sonDom,cb) {
        var top = 0;
        $(faDom).on("scroll",function(e){
            var windowHeight = $(faDom).height();//当前窗口的高度
            var scrollTop = $(faDom).scrollTop();//当前滚动条从上往下滚动的距离
            var docHeight = $(sonDom).height(); //当前文档的高度
            // console.log( windowHeight,scrollTop,docHeight);
            //当 滚动条距底部的距离 + 滚动条滚动的距离 >= 文档的高度 - 窗口的高度
            //换句话说：（滚动条滚动的距离 + 窗口的高度 = 文档的高度）  这个是基本的公式
            if(scrollTop>top){
                // 向上
                if (scrollTop + windowHeight >= docHeight - 30) {
                    console.log("===加载更多数据===");
                    if(cb){
                        cb()
                    }
                }
            }else{
                // 向下
            }
            top = scrollTop;
        });
    }


    function rollTo(distance,time,cb){
        distance = distance || 0;
        cb = cb || function () {}
        if (!time) {
            window.scrollTo(0, distance);
            cb()
            return;
        }
        var spacingTime = 20; // 设置循环的间隔时间  值越小消耗性能越高
        var index = time / spacingTime; // 计算循环的次数
        var now = document.body.scrollTop + document.documentElement.scrollTop; // 获取当前滚动条位置
        var rollDistance = (distance - now) / index; // 计算每次滑动的距离
        var rollTimer = setInterval(function() {
            if (index > 0) {
                index--;
                rollTo(now += rollDistance,"",function () {});
            } else {
                clearInterval(rollTimer); // 清除计时器
                cb()
            }
        }, spacingTime);
    };

    function isWX(cb) {
        // cb()
        // return;
        if (typeof WeixinJSBridge == "undefined") {
            if (document.addEventListener) {
                document.addEventListener('WeixinJSBridgeReady', cb, false);
            } else if (document.attachEvent) {
                document.attachEvent('WeixinJSBridgeReady', cb);
                document.attachEvent('onWeixinJSBridgeReady', cb);
            }
        } else {
            cb();
        }
    }

    function hideOptionMenu() {
        isWX(function () {
            // invoke和call现在已经废弃了,现在都是用wx.xxxx()
            WeixinJSBridge.call('hideOptionMenu');  //wx.showOptionMenu();
        })
    }

    function showOptionMenu() {
        isWX(function () {
            // invoke和call现在已经废弃了,现在都是用wx.xxxx()
            WeixinJSBridge.call('showOptionMenu');  //wx.showOptionMenu();
        })
    }

    function closeWindow() {
        isWX(function () {
            WeixinJSBridge.call('closeWindow');
        })
    }

    // 使用
    // getSignatureByJsapi({
    //     accountId:accountId,
    //     debug:false,
    //     jsApiList:[],
    //     ready:function () {
    //
    //     }
    // })
    function getSignatureByJsapi(opt){
        var link = getLink()
        isWX(function () {
            $.ajax({
                type: 'POST',
                url: basePath + 'app/data/getSignatureByJsapi',
                dataType: 'json',
                data: {
                    accountId: opt.accountId || accountId,
                    url: encodeURIComponent(location.href)
                }
            }).done(function (rs) {
                if (rs.success) {
                    wx.config({
                        beta: true,// 必须这么写，否则wx.invoke调用形式的jsapi会有问题
                        debug: opt.debug || false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                        appId: rs.appId, // 必填，公众号的唯一标识
                        timestamp: rs.timestamp, // 必填，生成签名的时间戳
                        nonceStr: rs.noncestr, // 必填，生成签名的随机串
                        signature: rs.signature,// 必填，签名，见附录1
                        jsApiList: opt.jsApiList || [
                            'checkJsApi',  //判断当前客户端版本是否支持指定JS接口
                            'updateAppMessageShareData',  //“分享给朋友”及“分享到QQ”1.4
                            'updateTimelineShareData', //“分享到朋友圈”及“分享到QQ空间”1.4
                            'onMenuShareAppMessage', //“分享给朋友”及“分享到QQ
                            'onMenuShareTimeline', //“分享到朋友圈”及“分享到QQ空间
                        ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                    });
                    wx.ready(function () {
                        if (opt.ready) {
                            opt.ready()
                        } else {
                            //“分享给朋友”及“分享到QQ”1.4
                            wx.onMenuShareAppMessage({
                                title: $('title').html(), // 分享标题
                                desc: $('title').html(), // 分享描述
                                link: link,
                                imgUrl: basePath + 'doc/app/common/img/share.png', // 分享图标
                            })
                            //“分享到朋友圈”及“分享到QQ空间”1.4
                            wx.onMenuShareTimeline({
                                title: $('title').html(), // 分享标题
                                link: link,
                                imgUrl: basePath + 'doc/app/common/img/share.png', // 分享图标
                            })
                        }
                    });
                    wx.error(function (res) {
                        console.log(res)
                    });
                }
            });
        })
    }

    //是否关注
    // 使用
    // isfollow({
    //     accountId:accountId,
    //     userId:userId,
    //     debug:true,
    //     success:function () {
    //
    //     },
    //     error:function () {
    //
    //     }
    // })
    function isfollow(opt) {
        $.ajax({
            type: "post",
            url: basePath + "app/weixin/blessingUser/isFollow",
            data:{
                accountId:opt.accountId || accountId,
                userId:opt.userId || userId,
            },
        }).done(function(data) {
            if(opt.debug===true){
                data.success = true;
                data.isCan = true;
            }else if(opt.debug===false){
                data.success = false;
                data.isCan = false;
            }
            if(data.success && data.isCan) {
                //已经关注
                if(opt.success){
                    opt.success()
                }
            } else {
                //未关注
                if(opt.error){
                    opt.error()
                }
            }
        });
    }

    //查询是否绑定省电信
    // tobinding({
    //     accountId:accountId,
    //     userId:userId,
    //     debug:true,
    //     success:function () {
    //
    //     },
    //     error:function (url) {
    //
    //     }
    // })
    function tobinding(opt){ //查询是否绑定省电信
        $.ajax({
            type:"post",
            url:basePath+"app/fans/binding/tobinding",
            data:{
                bindType :"3",
                accountId:opt.accountId || accountId,
                userId:opt.userId || userId,
            }
        }).done(function(data){
            if(opt.debug===true){
                data.errorcode = "00"
                data.bindStatus = "0"
            }
            if(data.errorcode == "00"){
                if(data.bindStatus == "0"){ //“0” 绑定过
                    if(opt.success){
                        opt.success()
                    }
                }else {
                    if(opt.error){
                        opt.error(basePath+'doc/app/rentcard/registerbind.jsp?accountId='+opt.accountId+'&url='+encodeURIComponent(location.href))
                    }
                }
            }else{
                console.log(data.errormsg);
            }
        });
    }

    function follow_tobinding(opt) {
        isfollow({
            accountId:opt.accountId,
            userId:opt.userId,
            debug:opt.debug,
            success:function () {
                tobinding({
                    accountId:opt.accountId,
                    userId:opt.userId,
                    debug:opt.debug,
                    success:function () {
                        if(opt.success){
                            opt.success()
                        }
                    },
                    error:function (url) {
                        if(opt.error){
                            opt.error(url)
                        }
                    }
                })
            },
            error:function () {
                qrcode(opt.codeImg)   //不传参用默认
            }
        })
    }

}));
