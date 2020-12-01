const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })  //{ show: true }
const request = require('request');   //请求接口的插件，类似于$.ajax
const fs = require('fs')   //文件控制插件
//数据在mListPoint里,页面控制在mListPoint.ListJsonData.CurrentPageIndex，然后点击换页
var opt = {
	city:"  ", //两个空格就是所有的省，也就是全国
	subcity:"  ", //两个空格就是全省所有市，
	keyword:"",  //这个是搜索框，把city改成全国后这里可以查到整个省
	page:0, //页数
	folder:'all',  //保存文件夹，但是要提交新建文件夹
	startPage:478,
}
async function init(opt){
	var page = await getPage(opt)   //拿到总页数
	console.log("所有页数是:"+page)
	for(let i=0;i<page-opt.startPage;i++){  //循环总页数
		opt.page = i + opt.startPage;
		await getData(opt)  //获取每一页的数据
	}
	await nightmare.end()  //最后关掉
}

async function getPage(opt){
	 await nightmare.goto("http://www.icbc.com.cn/ICBCDynamicSite2/LBS/nets/netsappointreal.aspx").wait(3000);  //开启网页，给3秒的开启时间  //
	 var aa = await nightmare.evaluate(async (opt) => {   //操作页面的方法
		 function awaittime(num){
			  return new Promise(function(resolve,reject){
				  setTimeout(function(){
					 resolve()
				  },num)
			  })
		 }
		 $('#icbccity').val(opt.city);
		 $('#subcity')[0].options[0].value = opt.subcity;
		 $('#keyword').val(opt.keyword);
		 getParas(5);   //点击搜索的意思
		 await awaittime(7000)   //搜索需要给点时间
		 var index = parseInt($(".curPage").eq(0).html().split("/")[1]);  
		 return index;		
	 }, opt)
	 return aa;
}

async function getData(opt){
	 var aa = await nightmare.evaluate(async (opt) => {
		 function awaittime(num){
			  return new Promise(function(resolve,reject){
				  setTimeout(function(){
					 resolve()
				  },num)
			  })
		 }
		 mListPoint.ListJsonData.CurrentPageIndex = (opt.page + "")   //mListPoint是页面里的全局变量
		 ListPointNextPageClick(1);   //这是点击下一页的方法
		 await awaittime(5000)   //点击下一页给到搜索时间
		 return mListPoint.Points;		//这是全局变量mListPoint里的数据，也就是最后要拿到的数据
	 }, opt).then(async (res)=>{
		  var jsonRes = JSON.stringify(res)
		  var now = new Date().getTime()
		  var flag = fs.writeFileSync(opt.folder+"/"+opt.page+'.json',jsonRes,'utf-8');
		  for(let j=0;j<res.length;j++){
			 var last =  await newRequest(res[j],j,opt)   //把数据传给接口
			 console.log("===="+opt.folder+"===="+opt.page+"=="+j+"===="+last)
		  }
		  return true
    })
	 return true;  //aa就是上面的res
}

function newRequest(obj,index,opt){
	return new Promise(function(resolve,reject){
        		var realObj  = {
        			remarks:"ALL20191016A002", //备注  opt.folder+"-"+opt.page+"-"+index
        			infomationtype:obj.infomationtype,
        			shortspellname:obj.shortspellname,
        			imageurlcol:obj.imageurlcol,
        			struId:obj.stru_id,
        			pointguid:obj.pointguid,
        			struFname:obj.stru_fname,
        			struSname:obj.stru_sname,
        			addrDetail:obj.addr_detail,
        			netPhoneNo1:obj.net_phone_no1,
        			netPhoneNo2:obj.net_phone_no2,
        			publicNetPhoneNo1:obj.public_net_phone_no1,
        			publicNetPhoneNo2:obj.public_net_phone_no2,
        			lat:obj.lat,
        			lng:obj.lng,
        			businessKind:obj.business_kind,
        			bhAmBeginM2f:obj.bh_am_begin_m2f,
        			bhAmEndM2f:obj.bh_am_end_m2f,
        			bhPmBeginM2f:obj.bh_pm_begin_m2f,
        			bhPmEndM2f:obj.bh_pm_end_m2f,
        			bhAmBeginSat:obj.bh_am_begin_sat,
        			bhAmEndSat:obj.bh_am_end_sat,
        			bhPmBeginSat:obj.bh_pm_begin_sat,
        			bhPmEndSat:obj.bh_pm_end_sat,
        			bhAmBeginSun:obj.bh_am_end_sun,
        			bhAmEndSun:obj.bh_am_end_sun,
        			bhPmBeginSun:obj.bh_pm_begin_sun,
        			bhPmEndSun:obj.bh_pm_end_sun,
        			bhAmbeginM2fComp:obj.bh_ambegin_m2f_comp,
        			bhAmendM2fComp:obj.bh_amend_m2f_comp,
        			bhPmbeginM2fComp:obj.bh_pmbegin_m2f_comp,
        			bhPmendM2fComp:obj.bh_pmend_m2f_comp,
        			intelligentServ:obj.intelligent_serv,
        			ifWifi:obj.if_wifi,
        			ifViproom:obj.if_viproom,
        			ifGoldextra:obj.if_goldextra,
        			fSelfservice:obj.if_selfservice,
        			title:obj.title,
        			address:obj.address,
        			telPrivate:obj.tel_private,
        			telPublic:obj.tel_public,
        			businesstype:obj.businesstype,
        			btpvWorkam:obj.btpv_workam,
        			btpvWorkpm:obj.btpv_workpm,
        			btpvSatam:obj.btpv_satam,
        			btpvSatpm:obj.btpv_satpm,
        			btpvSunam:obj.btpv_sunam,
        			btpvSunpm:obj.btpv_sunpm,
        			btpbWorkam:obj.btpv_workam,
        			pbWorkpm:obj.btpv_workpm,
        			btpbSunam:obj.btpb_sunam,
        			btpbSunpm:obj.btpb_sunpm,
        			btpbSatam:obj.btpb_workam,
        			btpbSatpm:obj.btpb_workpm,
        		}
		request({   //发起请求，用的json字符串
			url: "http://localhost:8080/wx_hz_console/app/icbc/save",//请求路径
			method: "POST",//请求方式，默认为get
 			headers: {//设置请求头			
			"content-type": "application/json;charset=utf-8",
            "content-Type": "application/json;charset=utf-8",
			"contentType": "application/json;charset=utf-8",
 			},
			body:JSON.stringify(realObj),//post参数字符串
			data:realObj,
		}, function(error, response, body) {
			if (!error && response.statusCode == 200) {
				body = JSON.parse(body)
				// 下面fs的方法都是在记录日记
				//fs.appendFileSync("log.txt","参数===="+JSON.stringify(realObj)+"\r\n",'utf-8', function(err){ });
				if(body.success==true){
					fs.appendFileSync("log2.txt",opt.folder+"-"+opt.page+"-"+index+"-成功-"+JSON.stringify(body)+"\r\n",'utf-8', function(err){ });
					resolve("成功")
				}else{
					fs.appendFileSync("log2.txt",opt.folder+"-"+opt.page+"-"+index+"-失败-"+JSON.stringify(body)+"\r\n",'utf-8', function(err){ }); 
					resolve("失败")
				}
			}else{
				fs.appendFileSync("log2.txt",opt.folder+"-"+opt.page+"-"+index+"-错误-"+JSON.stringify(error)+"\r\n", 'utf-8', function(err){ }); 
				resolve("错误")
			}
		}); 
	})
}   
       init(opt)  //正式执行入口
	   // newRequest({},1,opt)  //测试接口
		
		
// 	   var realObj  = {
// 			remarks:opt.folder+"-"+opt.page+"-"+index, //备注
// 			infomationtype:obj.infomationtype,
// 			shortspellname:obj.shortspellname,
// 			imageurlcol:obj.imageurlcol[0],
// 			struId:obj.stru_id,
// 			pointguid:obj.pointguid,
// 			struFname:obj.stru_fname,
// 			struSname:obj.stru_sname,
// 			addrDetail:obj.addr_detail,
// 			netPhoneNo1:obj.net_phone_no1,
// 			netPhoneNo2:obj.net_phone_no2,
// 			publicNetPhoneNo1:obj.public_net_phone_no1,
// 			publicNetPhoneNo2:obj.public_net_phone_no2,
// 			lat:obj.lat,
// 			lng:obj.lng,
// 			businessKind:obj.business_kind,
// 			bhAmBeginM2f:obj.bh_am_begin_m2f,
// 			bhAmEndM2f:obj.bh_am_end_m2f,
// 			bhPmBeginM2f:obj.bh_pm_begin_m2f,
// 			bhPmEndM2f:obj.bh_pm_end_m2f,
// 			bhAmBeginSat:obj.bh_am_begin_sat,
// 			bhAmEndSat:obj.bh_am_end_sat,
// 			bhPmBeginSat:obj.bh_pm_begin_sat,
// 			bhPmEndSat:obj.bh_pm_end_sat,
// 			bhAmBeginSun:obj.bh_am_end_sun,
// 			bhAmEndSun:obj.bh_am_end_sun,
// 			bhPmBeginSun:obj.bh_pm_begin_sun,
// 			bhPmEndSun:obj.bh_pm_end_sun,
// 			bhAmbeginM2fComp:obj.bh_ambegin_m2f_comp,
// 			bhAmendM2fComp:obj.bh_amend_m2f_comp,
// 			bhPmbeginM2fComp:obj.bh_pmbegin_m2f_comp,
// 			bhPmendM2fComp:obj.bh_pmend_m2f_comp,
// 			intelligentServ:obj.intelligent_serv,
// 			ifWifi:obj.if_wifi,
// 			ifViproom:obj.if_viproom,
// 			ifGoldextra:obj.if_goldextra,
// 			fSelfservice:obj.if_selfservice,
// 			title:obj.title,
// 			address:obj.address,
// 			telPrivate:obj.tel_private,
// 			telPublic:obj.tel_public,
// 			businesstype:obj.businesstype,
// 			btpvWorkam:obj.btpv_workam,
// 			btpvWorkpm:obj.btpv_workpm,
// 			btpvSatam:obj.btpv_satam,
// 			btpvSatpm:obj.btpv_satpm,
// 			btpvSunam:obj.btpv_sunam,
// 			btpvSunpm:obj.btpv_sunpm,
// 			btpbWorkam:obj.btpv_workam,
// 			pbWorkpm:obj.btpv_workpm,
// 			btpbSunam:obj.btpb_sunam,
// 			btpbSunpm:obj.btpb_sunpm,
// 			btpbSatam:obj.btpb_workam,
// 			btpbSatpm:obj.btpb_workpm,
// 		}