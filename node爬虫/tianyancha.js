const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })  //{ show: true }
const request = require('request');   //请求接口的插件，类似于$.ajax
const fs = require('fs')   //文件控制插件
//数据在mListPoint里,页面控制在mListPoint.ListJsonData.CurrentPageIndex，然后点击换页
var opt = "";
// {
// 	"id":"",
// 	"name":"",
// 	"nameArr":["中建钢构有限公司"],
//  "faId":"",
//  "faIdArr":[""]
// }
async function init(opt){
	opt = JSON.parse(fs.readFileSync('aa.json','utf-8'));
	console.log(opt)
	for(let i=0;i<opt.nameArr.length;i++){
		var id = await getIdByName(opt)
		opt.id = id;
		console.log(id)
		var res = await getDataById(opt) 
		// console.log(res)
		console.log(opt)
	}
	await nightmare.end()  //最后关掉
}



async function getDataById(opt){
	await nightmare.goto("https://dis.tianyancha.com/dis/enterprise?id="+opt.id).wait(5000);
	 var aa = await nightmare.evaluate(async (opt) => {
		 var nameArr = []
		 var faIdArr = []
		 var res = {
			 faId:opt.faId,
			 id:opt.id,
			 name:opt.name,
			 center:{
				 name:"",
				 type:"",
			 },
			 holder:{
				 name:"股东",
				 val:[]
			 },
			 executives:{
				 name:"高管",
				 val:[]
			 },
			 invest:{
				 name:"对外投资",
				 val:[]
			 },
			 branch:{
				 name:"分支机构",
				 val:[]
			 },
			 historyholder:{
				 name:"历史股东",
				 val:[]
			 },
			 historylegal:{
				 name:"历史法定代表人",
				 val:[]
			 }
		 }
		 var svg = document.querySelector('svg');
		 var g1 = svg.querySelector('g');
		 var g2 = g1.querySelector('g');
		 var glist = Array.from(g2.querySelectorAll('g'));
		 var center = glist.shift();
		 fenxi(center,"center",opt);
		 
		 for(let i=0;i<glist.length;i++){
			 let x = glist[i];
			 if(x.classList.contains('holder-node')){
			 				  fenxi(x,"holder",opt)
			 }else if(x.classList.contains('executives-node')){
			 				  fenxi(x,"executives",opt)
			 }else if(x.classList.contains('history-legal-node')){
			 				  fenxi(x,"historylegal",opt)
			 }else if(x.classList.contains('history-holder-node')){
			 				  fenxi(x,"historyholder",opt)
			 }else if(x.classList.contains('invest-node')){
			 				  fenxi(x,"invest",opt)
			 }else if(x.classList.contains('branch-node')){
			 				  fenxi(x,"branch",opt)
			 }
		 }

		 function fenxi(dom,type,opt){
			 if(type=="center"){
				 var childNode = Array.from(dom.childNodes);
				 var textDomArr = getTextDom(childNode,type);
				 if(textDomArr.length==2){
					 res[type].name = textDomArr[0].childNodes[0].textContent;
					 res[type].type = textDomArr[0].childNodes[1].textContent;
				 }else if(textDomArr.length==1){
					 res[type].name = textDomArr[0].childNodes[0].textContent;
				 }
			 }else if(type=="holder"){
				 var childNode = Array.from(dom.childNodes);
				 var textDomArr = getTextDom(childNode,type);
				 res[type].val.push({
					 name:textDomArr[0].textContent,
					 percent:textDomArr[1].textContent,
				 })
			 }else if(type=="executives"){
				 var childNode = Array.from(dom.childNodes);
				 var textDomArr = getTextDom(childNode,type);
				 res[type].val.push({
					 name:textDomArr[0].textContent,
					 type:textDomArr[1].textContent,
				 })
			 }else if(type=="historylegal"){
				 var childNode = Array.from(dom.childNodes);
				 var textDomArr = getTextDom(childNode,type);
				 res[type].val.push({
					 name:textDomArr[0].textContent,
				 })
			 }else if(type=="historyholder"){
				 var childNode = Array.from(dom.childNodes);
				 var textDomArr = getTextDom(childNode,type);
				 res[type].val.push({
					 name:textDomArr[0].textContent,
				 })
			 }else if(type=="invest"){
				 var childNode = Array.from(dom.childNodes);
				 var textDomArr = getTextDom(childNode,type);
				 if(textDomArr.length==3){
					 res[type].val.push({
						 name:textDomArr[0].textContent,
						 amount:textDomArr[1].textContent,
						 percent:textDomArr[2].textContent,
					 })
				 }else if(textDomArr.length==2){
					 res[type].val.push({
						 name:textDomArr[0].textContent,
						 percent:textDomArr[1].textContent,
					 })
				 }else if(textDomArr.length==1){
					 res[type].val.push({
						 name:textDomArr[0].textContent,
					 })
				 }
				 nameArr.push(textDomArr[0].textContent)
				 faIdArr.push(opt.id)
			 }else if(type=="branch"){
				 var childNode = Array.from(dom.childNodes);
				 var textDomArr = getTextDom(childNode,type);
				     // nameArr.push(textDomArr[0].textContent) 
					 res[type].val.push({
						 name:textDomArr[0].textContent,
					 })
			 }
		 }
		 
		 function getTextDom(dom,type){
			 return dom.filter(x=>{
				return x.tagName=="text";				
			 })
		 }
		 
		 return [nameArr,faIdArr,res];		//这是全局变量mListPoint里的数据，也就是最后要拿到的数据
	 }, opt).then(async (arr)=>{
		  opt.nameArr = [...opt.nameArr,...arr[0]];   //拼接数组
		  opt.faIdArr = [...opt.faIdArr,...arr[1]];   //拼接数组
		  fs.writeFileSync('aa.json',JSON.stringify(opt),'utf-8');
		  var jsonRes = JSON.stringify(arr[2]);
// 		  for(let j=0;j<res.length;j++){
// 			 var last =  await newRequest(res[j],j,opt)   //把数据传给接口
// 			 console.log("===="+opt.folder+"===="+opt.page+"=="+j+"===="+last)
// 		  }
		  return jsonRes
    })
	 return aa;  //aa就是上面的res
}

async function getIdByName(opt){
	 opt.name = opt.nameArr.shift()
	 opt.faId = opt.faIdArr.shift()
	 await nightmare.goto("https://www.tianyancha.com/search?key="+opt.name).wait(5000);  //开启网页，给3秒的开启时间  //
	 var aa = await nightmare.evaluate(async (opt) => {   //操作页面的方法
		 var id = "";
		 if(document.querySelector('.search-result-single')){
			 id = document.querySelector('.search-result-single').getAttribute("data-id");  //只获取第一个
		 }
		 return id;		
	 }, opt)
	 return aa;
}


//请求
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
		
