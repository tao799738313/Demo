var id = new URLSearchParams(location.search).get("id"); 

var closeSVG = 'img/chevron-right.svg'
var openSVG = 'img/chevron-down.svg'

var details = {
	
}

var nameObj = {
	ggList:"高管",
	dwtzList:"对外投资",
	fzjgList:"分支机构",
	gdList:"股东",
}
function init(){
	$('#loadMask').show()
	$.ajax({
		url:'http://localhost:8080/rp_project_hunan/app/hnGsData1224/getGsDw',
		data:{
			companyId: id || '17289817'
		},
		dataType:'json',
		success:function(data){
			if(data.success){
				var dom = document.createElement('div')
				$('#app').append(dom)
				var data = dataHandle(data)
				draw(data,'div_'+data.id,dom)
			}else{
				tishi(2)
			}
			$('#loadMask').hide()
		}
	})
}
init()

function dataHandle(data){
	var data = JSON.parse(JSON.stringify(data))
	// data.id = data.basicInfo.id;
	// data.name = data.basicInfo.name || '无名';
	return data;
}

function draw(data,id,dom){
	// 把详情缓存起来
	if(!details[id]){
		details[id] = data;
	}
	var dom =  drawGS(data.name,id,dom)
	// console.log(dom)

	data.dwtzList = data.isExistDwtz ? data.dwtzList : [];
	data.fzjgList = data.isExistFzjg ? data.fzjgList : [];
    drawDWTZ(data.dwtzList,id,'dwtzList',dom)
	drawFZJG(data.fzjgList,id,'fzjgList',dom)

	// drawGG(data.ggList,id,'ggList',dom)
	// drawGD(data.gdList,id,'gdList',dom)
}


function drawGS(str,id,dom){
	var str = `<div class="gs">
	<span class="gsName" onclick="showDetail('${id}')">${str}</span>
	<img src="${closeSVG}" class="gsOpen" onclick="openCloseGs(this,'${id}_gs')" data-open="true">
	</div>
	<div id='${id}_gs'></div>`
	$(dom).append(str)
	return $(dom).children(`#${id}_gs`)[0]
}

function drawGG(arr,id,arrName,dom){
	var str = ``;
	if(arr.length==0){
		str += `<div class="mgLB">
		<span class="noArr">${nameObj[arrName]}</span>
		</div>`; 
	}else{
		str += `<div class="mgLB">
		<span class="${arrName}" onclick="openCloseArr(this,'${id}_${arrName}')" data-open="true" >
           ${nameObj[arrName]}
           <img src="${closeSVG}" class="arrOpen">
		</span>
		<div id="${id}_${arrName}" class="mgL"></div>
		</div>`; 
	}
	$(dom).append(str)
	
    var str = ``
    arr.forEach(function(opt){
	   str += `<div><span class="gs-${arrName}">${opt.name}(${opt.position})</span></div>`
    })
    $(dom).children().children(`#${id}_${arrName}`).eq(0).append(str)
}


function drawDWTZ(arr,id,arrName,dom){

	var str = ``;
	if(arr.length==0){
		str += `<div class="mgLB">
		<span class="noArr">${nameObj[arrName]}</span>
		</div>`; 
	}else{
		str += `<div class="mgLB">
		<span class="${arrName}" onclick="openCloseArr(this,'${id}_${arrName}')" data-open="true" >
            ${nameObj[arrName]}
            <img src="${closeSVG}" class="arrOpen">
		</span>
		<div id="${id}_${arrName}" class="mgL"></div>
		</div>`; 
	}
	$(dom).append(str)
	
    var str = ``
    arr.forEach(function(opt){
		 str += `<div><span id="div_${opt.gsId}" class="gs-${arrName}" onclick="getData(this,'${opt.gsId}')">${opt.name}</span></div>`

    })
	$(dom).children().children(`#${id}_${arrName}`).eq(0).append(str)
}

function drawFZJG(arr,id,arrName,dom){
	var str = ``;
	if(arr.length==0){
		str += `<div class="mgLB">
		<span class="noArr">${nameObj[arrName]}</span>
		</div>`; 
	}else{
		str += `<div class="mgLB">
		<span class="${arrName}" onclick="openCloseArr(this,'${id}_${arrName}')" data-open="true" >
            ${nameObj[arrName]}
		    <img src="${closeSVG}" class="arrOpen">
		</span>
		<div id="${id}_${arrName}" class="mgL"></div>
		</div>`; 
	}
	$(dom).append(str)
    var str = ``
    arr.forEach(function(opt){
		str += `<div><span id="div_${opt.gsId}" class="gs-${arrName}" onclick="getData(this,'${opt.gsId}')">${opt.name}</span></div>`
    })
	$(dom).children().children(`#${id}_${arrName}`).eq(0).append(str)
}


function drawGD(arr,id,arrName,dom){
	var str = ``;
	if(arr.length==0){
		str += `<div class="mgLB">
		<span class="noArr">${nameObj[arrName]}</span>
		</div>`; 
	}else{
		str += `<div class="mgLB">
		<span class="${arrName}" onclick="openCloseArr(this,'${id}_${arrName}')" data-open="true" >
           ${nameObj[arrName]}
		   <img src="${closeSVG}" class="arrOpen">
		</span>
		<div id="${id}_${arrName}" class="mgL"></div>
		</div>`; 
	}
	$(dom).append(str)
	
    var str = ``
    arr.forEach(function(opt){
	   str += `<div><span class="gs-${arrName}">${opt.shareholder}</span></div>`
    })
    $(dom).children().children(`#${id}_${arrName}`).eq(0).append(str)
}



function openCloseArr(dom,id){
	var flag = $(dom).attr('data-open')
	if(flag=='true'){
		 $(dom).attr('data-open','false')
		 $(dom).children('.arrOpen').attr('src',openSVG)
		 $(dom).parent('.mgLB').eq(0).children(`#${id}`).hide()
	}else{
		 $(dom).attr('data-open','true')
		 $(dom).children('.arrOpen').attr('src',closeSVG)
		 $(dom).parent('.mgLB').eq(0).children(`#${id}`).show()
	}
}

function openCloseGs(dom,id){
	var flag = $(dom).attr('data-open')
	if(flag=='true'){
		 $(dom).attr('data-open','false')
		 $(dom).attr('src',openSVG)
		 $(dom).parent('.gs').eq(0).parent().children(`#${id}`).eq(0).hide()
	}else{
		 $(dom).attr('data-open','true')
		$(dom).attr('src',closeSVG)
		 $(dom).parent('.gs').eq(0).parent().children(`#${id}`).eq(0).show()
	}
}

function showDetail(id){
	var detail = details[id] && details[id].basicInfo || {};
	console.log(detail)
	var viewObj = {
		// approvalDate: "2019-05-15"
		// businessRegistrationNumber: "100000000005227"
		// businessTerm: "2017-05-22至无固定期限"
		// commercialLat: ""
		// commercialLong: ""
		companyType: "公司类型",
		companyUrl: "公司官网",
		contributedCapital: "注册资金",
		// contributorsIn: "0"
		// controlName: "国务院"
		// email: "cmhk@cmhk.com↵查看更多"
		// englishName: "China Merchants Group Co.,Limited"
		// formerName: "-"
		// id: "id",
		industry: "所在行业",
		introduction: "公司详情",
		legalPerson: "创建人",
		name: "公司名",
		// operatingState: "在业"
		// organizationCode: "100005220"
		// phone: "25428288"
		registeredAddress: "所在地址",
		// registeredCapital: "1670000万人民币"
		// registrationAuthority: "北京市工商行政管理局"
		// scopeOfBusiness: "主营"
		// setUpDate: "1986-10-14"
		// staffSize: "-"
		// taxpayerIdentificationNumber: "91110000100005220B"
		// taxpayerQualification: "-"
		// unifiedSocialCreditCode: "91110000100005220B"
		// yysr: ""
	}
	var str = ``
	for(var i in viewObj){
		if(detail[i]){
			str += `<div><span style="color:grey;">${viewObj[i]} : </span>${detail[i]}</div>`
		}
	}
	$('#maskBox').html(str || '<p style="text-align: center;">无更多详情</p>')
	$('#mask').show()
}

function getData(dom,id){
	$('#loadMask').show()
	var oldDom = $(dom);
	$.ajax({
		url:'http://localhost:8080/rp_project_hunan/app/hnGsData1224/getGsDw',
		data:{
			companyId:id
		},
		dataType:'json',
		success:function(data){
			if(data.success){
				var newDom = document.createElement('div')
				// newDom.id= 'div_'+id;
				$(newDom).replaceAll(oldDom)
				var data = dataHandle(data)
				draw(data,'div_'+ id,newDom)
			}else{
				tishi(2)
			}
			$('#loadMask').hide()
		}
	})
}

function tishi(type){
	var typeObj = {
		1:"页面上已经存在该公司",
		2:"请求返回错误",
	}
	var time = time || 2000;
	var text = typeObj[type] || '操作出现错误';
	var dom = document.createElement('div');
	dom.style.cssText = "word-wrap:break-word; font-size: 16px;position: fixed; line-height:20px;text-align: center;max-width:60%;padding:5px; background-color:black;color:white; border-radius: 4px;bottom:10px;left: 50%;transform: translate(-50%,0);border: 1px solid gray; box-shadow: 2px 2px 2px gray;opacity:0;transition:bottom 0.5s,opacity 0.5s;z-index:100;";
	dom.innerHTML = text;
	document.querySelector('body').appendChild(dom);
	window.setTimeout(function() {
		document.querySelector('body').removeChild(dom);
	},time)
	setTimeout(function () {
		dom.style.bottom = "40px";
		dom.style.opacity = "1"
	},100)

}