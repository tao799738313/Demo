
// 注意需要wxjdk 1.2以上
//  微信的函数(需要用就直接调用，功能是取消分享或者分享)

// 上面部分的两个函数是用的微信结果获得的是一个base64，但是不能获得图片/摄像头以外的文件
// 配合uploadBase64使用
// wxChooseImage(uploadBase64,{},function () {
// },function (res) {
//    console.log(res)
// },function () {
//    methods.alert('网络错误')
// })

function wxChooseImage(cb,opt,uploadStart,uploadEnd,uploadError) {
    if(arguments.length==5){
        wx.chooseImage({
            count: 1, // 默认9,如果选多个是返回的数组
            sizeType: ['compressed'], // 可以指定是原图'original'还是压缩图，默认二者都有，这里屏蔽了原图
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机'camera'，默认二者都有，这里屏蔽了相机
            success: function (res) {
                //这意味着只有IOS8以上的手机才能用这个本地图片接口，而以下的版本如果使用JSSDK1.2.0版本会导致无法获取图片数据，或者使用1.1.0又无法预览图片的尴尬场面,另外用了1.2.0版本后uploadImage会出现file not exists的错误
                var localIds = res.localIds;  //这是数组
                wxGetLocalImgData(localIds[0],cb,opt,uploadStart,uploadEnd,uploadError);  //但是这个程序只要一张图片，所以取值arr[0]
            }
        })
    }else{
       console.log('参数必须有5个')
    }
}

//微信的转成base64的功能
function wxGetLocalImgData(localIds,cb,opt,uploadStart,uploadEnd,uploadError) {
    wx.getLocalImgData({
        localId:localIds,
        success: function (res){
            var localData = res.localData;  //base64
            /*判断ios是不是用的 wkwebview 内核*/
            if (window.__wxjs_is_wkwebview){
                localData = localData.replace('data:image/jgp', 'data:image/jpeg');
            }else{
                if (localData.indexOf('data:image') != 0) {
                    //判断是否有这样的头部
                    localData = "data:image/jpeg;base64," + localData;
                }
            }
            cb(localData,opt,uploadStart,uploadEnd,uploadError)
        }
    })
}

// ----------------------------------------------------
// 上面的两个函数是普通input的file，还用的exif进行了图片压缩和正确旋转
// 配合uploadBase64使用
// inputChooseImage(file,function (base64) {
//     uploadBase64(base64,{},function () {
//     },function (res) {
//         console.log(res)
//     },function () {
//         methods.alert('网络错误')
//     })
// })

function inputChooseImage(file,cb){
    var fr = new FileReader()
    fr.readAsDataURL(file)
    fr.onload = function (res) {
        var base64 = res.target.result
        if(file.type.indexOf('image/')==-1){
            cb(base64)
        }else{
            if(window.EXIF){
                EXIF.getData(file, function () {
                    var allTags = EXIF.getAllTags(this);
                    // 旋转的值
                    var orientation = allTags.Orientation;
                    var image = new Image();
                    image.src = base64;
                    image.onload = function () {
                        var width = this.width;
                        var height = this.height;
                        var newWidth;
                        var newHeight;
                        if (width > height && width > 640) {
                            newWidth = 640;
                            newHeight = newWidth * height / width;
                        } else if (height > width && height > 640) {
                            newHeight = 640;
                            newWidth = newHeight * width / height;
                        } else {
                            newWidth = width;
                            newHeight = height;
                        }
                        rotateImg(image,orientation,newWidth,newHeight,cb)
                    }
                })
            }else{
                cb(base64)
            }
        }

    }
}

    function rotateImg (img,orientation,newWidth,newHeight,cb) {
        var angle = {
            0:'0',
            6:'90',
            8:'270',
            3:'180',
        }
        var width = newWidth;
        var height = newHeight;
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext("2d");
        var degree = (angle[orientation] || 0) * Math.PI / 180;
        if(degree=='0'){
            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(img, 0, 0, width, height);
        }else if(degree=='90'){
            canvas.width = height;
            canvas.height = width;
            ctx.rotate(degree);
            ctx.drawImage(img, 0, -height, width, height);
        }else if(degree=='180'){
            canvas.width = width;
            canvas.height = height;
            ctx.rotate(degree);
            ctx.drawImage(img, -width, -height, width, height);
        }else if(degree=='270'){
            canvas.width = height;
            canvas.height = width;
            ctx.rotate(degree);
            ctx.drawImage(img, -width, 0, width, height);
        }
         var base64 = canvas.toDataURL('image/jpeg');
         cb(base64)
    }



// --------------------------------------------------
// 上面是传base64格式的接口

function uploadBase64(base64,opt,uploadStart,uploadEnd,uploadError) {
    uploadStart && uploadStart()
    //上传图片到服务器
    var formData = new FormData();
    formData.append("data", base64);
    formData.append("busId", opt.busId);   //一个uuid
    formData.append("busType", opt.busType);  //一个指定的值，在不同项目不同
    formData.append("length", opt.base64Length);
    formData.append("fileName", opt.fileName);
    formData.append("fileType", opt.fileType);
    formData.append("weixinToSysId", opt.userId);
    $.ajax({
        type: 'post',
        contentType:"multipart/form-data",
        url:'/wx_tjsd_henan/app/common/uploadBase64',
        data:formData,
        dataType: "json",  //相应回来的格式
        processData: false, // 不处理数据
        contentType: false, // 不设置内容类型
        success:function(x){
            uploadEnd && uploadEnd(x)
        },
        error:function(){
            uploadError && uploadError()
        },
    });
}

// ------------------------------
// 地址的使用
// wxGetLocation(qqMapGetPlace,function (res) {
//         console.log(res)
// })

// 测试使用
// qqMapGetPlace({latitude:'23.100271',longitude:'114.400574'},function (res) {
//     locat = res.detail.location;  //暴露全局
//     var addressComponents = res.detail.addressComponents;
//     var str = addressComponents.province+addressComponents.city+addressComponents.district+addressComponents.street+addressComponents.streetNumber;
//     locat.address = str;  //详细地址
// })

function wxGetLocation(cb,getSuccess) {
    // console.log('进入了wxGetLocation')
    if(arguments.length==2){
        wx.getLocation({
            type: 'gcj02', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02' wgs84
            success: function (res) {
                // console.log('获得了wxGetLocation的res')
                var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
                var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
                var speed = res.speed; // 速度，以米/每秒计
                var accuracy = res.accuracy; // 位置精度
                // 把经纬度传给腾讯地图获得准确地点，微信是没提供准确地点的api的
                cb(res,getSuccess)
            },
            error:function (res) {
                // console.log('wx.getLocation报错'+JSON.stringify(res));
            }
        });
    }
}

// 这个单独使用,带回调函数就行，第一个参数是个对象，需要latitude和longitude
function qqMapGetPlace(res,getSuccess) {
    // console.log('进入了qqMapGetPlace')
    geocoder = new qq.maps.Geocoder({
        complete : function(result){
            // console.log('获得了qqMapGetPlace的result')
            getSuccess(result)
        }
    });
    var latLng = new qq.maps.LatLng(res.latitude,res.longitude);
    geocoder.getAddress(latLng);

}

/*
    地图的使用
    $('#address').click(function () {   //这样写就每次都会加载新地图，所以onClose需要移除remove地图，也可以把qqMapOpen执行一次，只加载一次，点击只负责显示隐藏
                    qqMapOpen(locat,{
                        'id':'mapBox',
                        'width':'100%',  //不传默认100%
                        'height':'100%',  //不传默认100%
                        'isChange':true,  //是否可以点击修改位置
                        'isFind':true,  //是否可以搜索位置
                        onClose:function (p,newloc) {  //隐藏还是移除要自己决定
                            $(p).remove();
                            $('#mapBox').hide()
                            locat = newloc.latLng;  //把newloc赋值给全局的变量locat
                            //可以在用新值获得详细地址
                            qqMapGetPlace({latitude:locat.lat,longitude:locat.lng},function (aa) {
                                console.log(aa);
                            })
                        }
                    })
                    $('#mapBox').show()  //点击显示
    })
*/

function qqMapOpen(loc,opt) {
    var newloc = "";
    var marker = "";
    var now = new Date().getTime();
    var domId = 'map_'+ now;
    var center = new qq.maps.LatLng(loc.lat,loc.lng)
    var str = `<div id="${domId}" style="width:${opt.width};height:${opt.height};"></div><div id="btnGroup_${now}" style="position: fixed;width: 10%;bottom: 7vw;right: 2vw;"></div>`;
    $('#'+opt.id).append(str);
    map = new qq.maps.Map(document.getElementById(domId), {
        center: center,      // 地图的中心地理坐标。
        zoom:13      // 地图的中心地理坐标。
    });
    marker=new qq.maps.Marker({
        position: loc,
        map:map
    });


    //     // 添加返回页面的功能
    //     var str = `<img id="close_${now}" src="imgs/clo.png" style="width:100%;background-color: white;border-radius: 50%;"/> `;
    //     $('#btnGroup_'+now).append(str);
    //     $('#close_'+now).click(function () {
    //         opt.onClose($('#map_'+now)[0],newloc)
    //     })

    //  新版本用hash进行返回
    //     location.hash = "/map_" + now
    //     var mapHash = location.hash
    //     var mapHashFun = function (ev) {
    //         var hash = location.hash
    //         if(mapHash != hash){
    //             if(opt.onClose && !opt.readOnly){
    //                 opt.onClose($('#map_'+now)[0],newloc)
    //             }else{
    //                 $('#map_' + now).remove()
    //                 $('#' + opt.id).hide();
    //             }
    //             window.removeEventListener('hashchange', mapHashFun)
    //         }
    //     }
    //     window.addEventListener('hashchange',mapHashFun)

    // 使用history(不会修改地址链接)
    window["openMap_"+now] = true
    history.pushState({},null,location.pathname + location.search + location.hash)
    var popstate = function(){
        if(window["openMap_"+now]){
            window["openMap_"+now] = false
            if(opt.onClose && !opt.readOnly){
                opt.onClose($('#map_'+now)[0],newloc)
            }else{
                $('#map_' + now).remove()
                $('#' + opt.id).hide();
            }
            window.removeEventListener('popstate', popstate)
        }
    }
    window.addEventListener('popstate',popstate)

    //添加可以修改位置的功能
    if(opt.isChange){
        if(opt.radius){
            var changeScopeLat = opt.changeScopeLat || loc.lat;
            var changeScopeLng = opt.changeScopeLng || loc.lng;
            var circle=new qq.maps.Circle({
                map:map,
                center:new qq.maps.LatLng(changeScopeLat,changeScopeLng),
                radius:opt.radius,
                strokeWeight:1
            });
            // marker=new qq.maps.Marker({
            //     position: loc,
            //     map:map
            // });
            qq.maps.event.addListener(circle,"click",function(event){
                newloc = event;
                if(marker){
                    marker.setPosition(event.latLng);
                }
            });
        }else{
            //添加监听事件   获取鼠标单击事件
            qq.maps.event.addListener(map, 'click', function(event) {
                newloc = event;
                if(marker){
                    marker.setPosition(event.latLng);
                }
            });
        }
        // 可以回到原点的功能
        opt.isReturn = true;
    }
    //添加搜索框
    if(opt.isFind){
        var placeholder = "输入详细地址"
        if(opt.find && opt.find.type == 'near'){
            placeholder = "搜索附近"
        }
        var str = `<div style="position: fixed;width: 100%;top: 0; left:0; background-color: #f0f0f0;display: flex;align-items: center;z-index: 1;padding: 0.5rem;">
                    <div style="flex: 1">
                      <input  id="inp_${now}" type="text" style="width: 100%;padding:0.4rem;border:1px solid rgb(200,200,200);border-radius:0.2rem;" placeholder="${placeholder}">
                    </div>
                    <img id="find_${now}" src="imgs/find.png" alt="" style="width:1rem;margin-left: 0.5rem;">
                    </div> `;
        $('#map_'+now).append(str);

        // 点击非输入框的地方都让输入框失去焦点
        document.body.addEventListener('click',function (ev) {
            $('#inp_'+now).blur()
        })
        $('#inp_'+now).click(function () {
            event.stopPropagation()
        })

        if(opt.find && opt.find.type == 'near'){
            searchService = new qq.maps.SearchService({
                complete : function(result){
                    $('#findNear_'+now).remove()
                    var str = `<div id="findNear_${now}" style="position: fixed;width: 100%;bottom: 0; left:0; background-color: #f0f0f0;z-index: 1;max-height: 40%;overflow: auto;padding: 0.5rem;">
        <div style="text-align: right;"><img id="closeFindNear_${now}" src="./imgs/close.png" style="width: 6vw;"></div>
</div>`
                    $('#map_'+now).append(str);
                    $('#closeFindNear_'+now).click(function () {
                        $('#findNear_'+now).remove()
                    })
                    for(var i = 0;i < result.detail.pois.length; i++) {
                        (function(n){
                            var obj = result.detail.pois[n];
                            var str = `<div id="findNear_${obj.id}" class="findNear_${now}" style="padding: 0.3rem 0.5rem;border-bottom: 1px solid white;"><p>${obj.name}</p><p style="color: grey;font-size: 12px;">${obj.address}</p></div>`
                            $('#findNear_'+now).append(str);
                            $('#findNear_'+obj.id).click(function () {
                                $('.findNear_'+now).css("font-weight","500")
                                $(this).css("font-weight","600")

                                newloc = obj;
                                if(marker){
                                    marker.setPosition(obj.latLng);
                                    map.setCenter(new qq.maps.LatLng(obj.latLng.lat,obj.latLng.lng));
                                }
                            });
                        })(i);
                    }
                }
            });
        }else{
            findGeocoder = new qq.maps.Geocoder({
                complete : function(result){
                    console.log(result)
                    map.zoomTo(15);
                    map.setCenter(result.detail.location);
                }
            });
        }

        $('#find_'+now).click(function () {
            var val = $('#inp_'+now).val().trim()
            if(opt.find && opt.find.type == 'near'){
                searchService.searchNearBy(val,center,opt.radius || 2000);
            }else{
                findGeocoder.getLocation(val);
            }
        })

        // 可以回到原点的功能
        opt.isReturn = true;
    }

    if(opt.list && opt.list.length!=0){
        for(var i = 0;i < opt.list.length; i++) {
            (function(n){
                var obj = opt.list[n];
                if(obj.lat && obj.lng){
                    setTimeout(function () {
                        var iconWH = opt.iconWH || 24;
                        var anchor = new qq.maps.Point(iconWH/2,iconWH/2),
                            size = new qq.maps.Size(iconWH, iconWH),
                            origin = new qq.maps.Point(0, 0),
                            scaleSize = new qq.maps.Size(iconWH, iconWH),
                            icon = new qq.maps.MarkerImage(obj.icon || 'https://mapapi.qq.com/web/lbs/javascriptV2/demo/img/center.gif', size, origin, anchor,scaleSize);
                        var marker = new qq.maps.Marker({
                            icon: icon,
                            position: new qq.maps.LatLng(obj.lat,obj.lng),
                            map: map,
                            // BOUNCE	反复弹跳
                            // DROP	从天而降
                            // DOWN	落下
                            // UP 升起
                            animation: opt.iconAnimation ? qq.maps.MarkerAnimation[opt.iconAnimation] : ""
                        });
                        if(opt.listClick){
                            qq.maps.event.addListener(marker, 'click', function() {
                                opt.listClick(obj,n)
                            });
                        }
                    },500)
                }
            })(i);
        }
    }

    if(opt.isReturn){
        // 添加回到原点的功能
        var str = `<img id="return_${now}" src="imgs/local.png" style="width:100%;background-color: white;border-radius: 50%;"/> `;
        $('#btnGroup_'+now).prepend(str);
        $('#return_'+now).click(function () {
            map.setCenter(loc);
            map.zoomTo(13);
            if(marker){
                marker.setPosition(loc);
            }
        })
    }

    if(opt.nowPlaceHandle && !opt.readOnly){
        // 添加处理当前定位的功能
        var str = `<img id="nowPlaceHandle_${now}" src="imgs/nowPlaceHandle.png" style="width:100%;background-color: white;border-radius: 50%;"/> `;
        $('#btnGroup_'+now).prepend(str);
        $('#nowPlaceHandle_'+now).click(function () {
            opt.nowPlaceHandle($('#map_'+now)[0],newloc)
        })
    }
}


// ------------------------------------------------
/*  仅用于拷贝，因为每个页面需求不同，所以不能用公共的方法
function getSignatureByJsapi() {
    $.ajax({
        type: 'POST',
        url: basePath + '/app/qyweixin/oauth2/getQySignatureByJsapi',
        dataType: 'json',
        data: {
            accountId: accountId,
            url: encodeURIComponent(locat.href)
        },
        error: function () {
            //alert('网络好像有点问题！');
        },
        success: function (rs) {
            if (rs.success) {
                wx.config({
                    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                    appId: rs.bean.appId, // 必填，公众号的唯一标识
                    timestamp: rs.bean.timestamp, // 必填，生成签名的时间戳
                    nonceStr: rs.bean.noncestr, // 必填，生成签名的随机串
                    signature: rs.bean.signature,// 必填，签名，见附录1
                    jsApiList: [
                        'checkJsApi',
                        'openLocation',
                        'getLocation',
                        'scanQRCode',  //扫一扫
                        'chooseImage', // 选图片
                        'getLocalImgData', //转图片base64，需要在chooseImage配合下使用
                    ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                });
                wx.ready(function () {
                    必须写在这里的有: 分享的设置
                    可以写在这里实现自执行也可以写外面的有: 获得地址，打开地图，扫一扫, 选图片
                    getPlace()
                });
                wx.error(function (res) {

                });
            }
        }
    })
}
// 用微信的api获取地址后通过腾讯地图解析出详细地址
function getPlace(debug) {
    $('#address').html('正在获取地址...');
    if(debug){
 // 用于测试
        setTimeout(function () {
            var firstPlace = {latitude:'23.100271',longitude:'114.400574'}; //应该存起来
            qqMapGetPlace(firstPlace,function (res) {
                locat = res.detail.location;
                var addressComponents = res.detail.addressComponents;
                var str = addressComponents.province+addressComponents.city+addressComponents.district+addressComponents.street+addressComponents.streetNumber;
                locat.address = str;
                $('#address').html(str);
                $('#address').click(function () {
                    qqMapOpen(locat,{
                        'id':'mapBox',
                        'width':'100%',
                        'height':'100%',
                        'isChange':true,
                        'isFind':true,
                        'radius':1000,
                        isReturn:false,
                        readOnly:false,
                        'changeScopeLat':firstPlace.latitude,
                        'changeScopeLng':firstPlace.longitude,
                        iconWH:"34",
                        iconAnimation:"DROP",
                        nowPlaceHandle:function(p,newloc){
                           $(p).remove();
                            $('#mapBox').hide()
                        },
                        list:[{
                            name:"小李",
                            lat:"23.110261",
                            lng:"114.400474",
                            icon:"",
                        }],
                        listClick:function(obj){
                            console.log(obj)
                        },
                        onClose:function (p,newloc) {
                            $(p).remove();
                            $('#mapBox').hide()
                            if(newloc){
                                locat = newloc.latLng;
                                qqMapGetPlace({latitude:locat.lat,longitude:locat.lng},function (aa) {
                                    console.log(aa);
                                    $('#address').html(aa.detail.address);
                                })
                            }
                        }
                    })
                    $('#mapBox').show()
                })
            })
        },1000)
    }else{
        wxGetLocation(qqMapGetPlace,function (res) {
            // console.log('腾讯地图给的res:'+JSON.stringify(res))
            locat = res.detail.location;
            var addressComponents = res.detail.addressComponents;
            var str = addressComponents.province+addressComponents.city+addressComponents.district+addressComponents.street+addressComponents.streetNumber;
            locat.address = str;
            $('#address').html(str);
        })
    }
}
*/