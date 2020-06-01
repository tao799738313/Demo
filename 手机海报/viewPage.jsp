<%@ page language="java" import="java.util.*" pageEncoding="utf-8" %>
<!DOCTYPE html>
<html>

<head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
    <meta content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
          name="viewport">
    <meta content="application/xhtml+xml;charset=UTF-8" http-equiv="Content-Type">
    <meta content="no-cache,must-revalidate" http-equiv="Cache-Control">
    <meta content="no-cache" http-equiv="pragma">
    <meta content="0" http-equiv="expires">
    <meta content="telephone=no, address=no" name="format-detection">
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
    <title>海报</title>
    <link rel="stylesheet" href="../common/css/weui.css">
    <link rel="stylesheet" href="../common/css/weuix.css">
    <link rel="stylesheet" href="../common/css/newBase.css">
    <style>
        #headImg{
            width: 100%;
            border-radius: 50%;
        }
        #canvasMask{
            position: fixed;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.8);
            top: 0;
            left: 0;
            display: flex;
            padding: 0.5rem;
            align-items:center;
            justify-content: center;
        }
        .headP{
            padding-top: 0.5rem;font-weight: 600;color: white;text-align: center;
        }
        .list{
            margin: 0.6rem;
            padding: 0.5rem;
            border: 2px solid rgb(17, 122, 232);
            border-radius: 0.2rem;
            box-shadow: 2px 2px 1px 1px rgb(199, 199, 199);
        }
        span.headP{
            cursor: pointer;
        }
        #yuantuBox img{
            width: auto;
        }
        .img9999{
            position: fixed;
            left: 9999px;
        }
        /*添加开关*/
        #isDrawPhone{
            vertical-align: middle;
        }
        .weui-switch:checked, .weui-switch-cp__input:checked ~ .weui-switch-cp__box {
            border-color: #4a7ebe;
            background-color: #4581cb;
        }
        .weui-switch, .weui-switch-cp__box {
            width: 42px;
            height: 26px;
        }
        .weui-switch:before, .weui-switch-cp__box:before {
            width: 40px;
            height: 24px;
        }
        .weui-switch:after, .weui-switch-cp__box:after {
            width: 24px;
            height: 24px;
        }
        #copyVal{
            /*color: white;*/
        }
        #mycopy{
            margin: 0.2rem 0;
            padding: 0.1rem 0.2rem;
            border: 2px solid white;
            color: white;
            display: inline-block;
        }
        #smallList {
            /*width: 90vw;*/
            /*overflow: scroll;*/
            display: flex;
            justify-content: center;
        }
        #smallList .smallList,#smallList .smallList3{
            margin: 2vw;
            background-color: white;
        }
        #smallList .smallList3:nth-of-type(2) img {
            width: 48vw;
        }
        #smallList .smallList3:nth-of-type(n+4){
            display: none;
        }

        #smallList img{
            width: 40vw;
        }
        #con{
            padding: 1rem 0.5rem 0.5rem 0.5rem;
        }
        #title{
            font-size: 0.74rem;
            font-weight: 600;
        }
        #time{
            color: grey;
            margin-bottom: 3vw;
        }
        #myCopy{
            background-color: #f09140;
            display: inline-block;
            padding: 1vw 3vw;
            border-radius: 0.4vw;
            color: white;
        }

        #draw3Btn{
            display: inline-block;
            color: white;
            background-color: dodgerblue;
            padding: 2vw 4vw;
            border-radius: 1vw;
        }
        #indexDiv{
            padding: 3vw;
            display: flex;
            justify-content: center;
        }
        .indexDiv{
            width: 3vw;
            height: 3vw;
            background-color: #c1bdbd;
            border-radius: 50%;
            margin: 0 1vw;
        }

    </style>
</head>
<body>
<div id="yuantuBox">
    <canvas id="canvas" style="position: fixed;top: 9999px;"></canvas>
    <div id="qrcode" style="position: fixed;top: 9999px;"></div>
</div>
<div id="con">
    <div id="title"></div>
    <div id="time"></div>

    <div id="copyValDiv" style="display: none;margin-bottom: 3vw;">
        <div style="font-weight: 600;">
             <span style="font-size: 0.64rem;margin-bottom: 2vw;">宣传语</span>
             <span onclick="myCopy()" style="color: dodgerblue;padding: 0 2vw;font-size: 0.54rem;">复制</span>
        </div>
        <div id="copyVal"></div>
    </div>

    <div id="smallListDiv" style="max-height: 70vw;" ontouchstart="touchS()" ontouchmove="touchM()" ontouchend="touchE()">
        <div id="smallList">

        </div>
    </div>
    <div id="isBtn" style="text-align: center;color: #f6882a;margin-top: 5vw;">


    </div>
</div>
<div id="canvasMask" onclick="$('#canvasMask').hide()" style="display: none;"></div>
<script src="../common/js/jQuery-v2.1.4.min.js"></script>
<script src="../common/js/newMethods.js?_version=202004301431"></script>
<script src="../common/js/jweixin-1.4.0.js"></script>
<script src="../common/js/fastclick.min.js"></script>
<%--<script src="../common/js/vconsole.min.js"></script>--%>
<script type="text/javascript">
    var u = navigator.userAgent;
    if(u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
        //	      //安卓手机
        FastClick.attach(document.body);
    } else if(u.indexOf('iPhone') > -1) {
        //	        //苹果手机
    } else if(u.indexOf('Windows Phone') > -1) {
        //	         //winphone手机
        Fastclick.attach(document.body);
    }
</script>
<script src="js/qrcode.min.js?_version=202004301431"></script>
<script src="js/viewPage.js?_version=202005161332"></script>

</body>
</html>