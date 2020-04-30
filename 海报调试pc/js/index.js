var dituImg  =  ""
var doArr = []

var canvas = $('#canvas')[0]
var ctx  = canvas.getContext("2d");
var canvas2 = $('#canvas2')[0]
var ctx2  = canvas2.getContext("2d");
var selectArea = 0

var colorArr = ["red","blue","green"]

if(1){
	doArr = JSON.parse('[{"type":"dituImg","w":389,"h":483,"id":"dituImg"},{"type":"selectArea","selectAreaType":"Code","s_x":25,"s_y":108,"e_x":206,"e_y":296,"id":"e443df48bbfeebd13eb9d848bcf5d310","select":"1"},{"type":"selectArea","selectAreaType":"Logo","s_x":215,"s_y":232,"e_x":357,"e_y":368,"id":"b7bb9abdd05f62fc76dd855f8c73b564","select":"1"},{"type":"selectArea","selectAreaType":"Logo","s_x":76,"s_y":196,"e_x":222,"e_y":333,"id":"d54cc05974d4d119984657c510615228","select":"1"},{"type":"selectArea","selectAreaType":"Head","s_x":239,"s_y":53,"e_x":377,"e_y":182,"id":"e084754c0af0d88fb2fe26d30d9d8630","select":"1"},{"type":"selectArea","selectAreaType":"Head","s_x":94,"s_y":36,"e_x":139,"e_y":81,"id":"737460c38471b41a495ab28c23849087","select":"1"}]')
	
	var img = document.createElement("img")
	var id = "dituImg"
	img.id = id;
	img.onload = function(){
		dituImg = img
		img.className = "img9999"
		$('#imgBox').append(img)
		var w = $(dituImg).width()
		var h = $(dituImg).height()
		if(w>400){
		   var num = (w/400).toFixed(0);
		   num = 1 / num;
		   w = w * num
		   h = h * num
		}
		canvas.width = w
		canvas.height = h
		doArrDraw()
		blockDraw()
	}
	img.src = "img/test.jpg"
}


function fileUpload(file){
	var fr = new FileReader()
	fr.readAsDataURL(file)
	fr.onload = function(res){
		var base64 = res.currentTarget.result;
		
		// 还原页面
		doArr = []
		$('#imgBox').html("")
		doArrDraw()
		blockDraw()
		
		var img = document.createElement("img")
		var id = "dituImg"
		img.id = id;
		img.onload = function(){
			dituImg = img
			img.className = "img9999"
			$('#imgBox').append(img)
			var w = $(dituImg).width()
			var h = $(dituImg).height()
			if(w>400){
			   var num = (w/400).toFixed(0);
			   num = 1 / num;
			   w = w * num
			   h = h * num
			}
			canvas.width = w
			canvas.height = h
			ctx.drawImage(dituImg, 0, 0, canvas.width, canvas.height)
			doArr.push({
				type:"dituImg",
				w: w,
				h: h,
				id: id
			})
		}
		img.src = base64
	}
	$('#fileInp').val("")
}

function returnBtn(){
	var len = doArr.length;
	if(len==0){ 
		console.log("没有底图")
		return; 
	}
	var obj = doArr.pop()
	if(obj.type == "dituImg"){
		ctx.clearRect(0,0,obj.w,obj.h);
		canvas.width = 0
		canvas.height = 0
		dituImg = "";
		$('#'+ obj.id).remove()
	}
	if(obj.type == "selectArea"){
		var id = obj.id
		$('#block_' + id).remove()
		$('#logo_' + id).remove()
		doArrDraw()
	}
}

function selectAreaDo(that,typeName){
	if(dituImg == ""){
		console.log("没有底图")
		return;
	}
	if(selectArea == typeName){
		// 关闭
		$('.selectAreaBtn').css("backgroundColor","gray")
		selectArea = 0
	}else{
		$('.selectAreaBtn').css("backgroundColor","gray")
		$(that).css("backgroundColor","orange")
		selectArea = typeName
	}
}


function doArrDraw(){
	ctx.clearRect(0,0,canvas.width,canvas.height);
	
	var len = doArr.length;
	if(len==0){
		console.log("没有底图")
		return; 
	}
	doArr.forEach(function(obj,index){
		if(obj.type == "dituImg"){
			ctx.drawImage(dituImg, 0, 0, obj.w, obj.h)
		}
		if(obj.type == "selectArea"){
			var color = colorArr[(index % colorArr.length)]
			// 满的
			ctx.beginPath();  // 开始画
			ctx.fillStyle = color; //设置颜色
			var xywh = count(obj)
			ctx.fillRect(xywh.x,xywh.y,xywh.w,xywh.h); //绘制边框
			ctx.stroke();
			if(obj.selectAreaType=="Code"){
				// 镂空的
				ctx.beginPath();  // 开始画
				ctx.strokeStyle = 'white';
				var nw = (xywh.w / 4)
				var ny = (xywh.h / 4)
				ctx.strokeRect(xywh.x+(xywh.w/2)-(nw/2),xywh.y+(xywh.h/2)-(ny/2),nw,ny); //绘制边框
				ctx.stroke();
			}
			ctx.font = "20px Times New Roman";
			ctx.fillStyle = "white";
			ctx.fillText(obj.selectAreaType,xywh.x+10,xywh.y + 25);
		}
	})
}

function addBlock(id,index,opt){
	var color = colorArr[(index % colorArr.length)]
	doArr[index].id = id
	var div = document.createElement("div")
	div.id = "block_" + id;
	div.className = "block"
	div.style.cssText = "color:" + color + ";"
	var xywh = count(opt)
	var xywhStr = `<span>X轴:${xywh.x}</span>,<span>Y轴:${xywh.y}</span>,<span>宽:${xywh.w}</span>,<span>高:${xywh.h}</span>`
	var str = ``
	if(opt.selectAreaType == "Code"){
		str += `<div>二维码~${xywhStr}</div>
		        <div><select id="select_${id}" onchange="select('${id}','${index}')">`
				   if(opt.select && opt.select=="2"){
					   str += `<option value="1">URL生成二维码</option>	
								<option value="2" selected="selected">自定义规则</option>	`
				   }else{
					   str += `<option value="1" selected="selected">URL生成二维码</option>	
								<option value="2">自定义规则</option>	`
					   doArr[index].select = "1"
				   }
		str += `</select></div>
				<div>
				   <input type="text" id="inp_${id}" oninput="input('${id}','${index}')" value="${opt.inp || ''}"/>	
				</div>`
	}
	if(opt.selectAreaType == "Head"){
		str += `<div>头像~${xywhStr}</div>`
	}
	if(opt.selectAreaType == "Logo"){
		str += `<div>Logo~${xywhStr}</div>
		        <div>
				<input id="logoInp_${id}" type="file" onchange="logoFile(this.files[0],'${id}','${index}')"/>
				</div>`
			if(document.querySelector('#logo_'+id)){
				var src = $('#logo_'+id).attr("src")
				str += `<img id="clone_${id}" src="${src}"/>`
			}	
	}
	div.innerHTML = str
	
	// 添加方法，带上序号
	$('#block').append(div)
}

function select(id,index){
	var val = $('#select_' + id).val()
	doArr[index].select = val
}

function logoFile(file,id,index){
	$('#logo_' + id).remove()
	$('#clone_' + id).remove()

	var fr = new FileReader()
	fr.readAsDataURL(file)
	fr.onload = function(res){
		var base64 = res.currentTarget.result;
		var img = document.createElement("img")
		img.id = "logo_" + id;
		img.onload = function(){
			img.className = "img9999"
			$('#imgBox').append(img)
			var clone = $(img).clone();
			clone[0].id = "clone_" + id;
            $('#block_' + id).append(clone)
		}
		img.src = base64
	}
	$('#logoInp_' + id).val("")
}

function input(id,index){
	var val = $('#inp_' + id).val()
	doArr[index].inp = val
}

function blockDraw(){
	$('#block').html("")
	var len = doArr.length;
	if(len==0){
		console.log("没有数据")
		return; 
	}
	doArr.forEach(function(obj,index){
		if(obj.type=="selectArea"){
			addBlock(obj.id || uuid(),index,obj)
		}
	})
}

var mouseStart = false
function canvasMD(){
	if(selectArea==0){ return; }
	mouseStart = true
	doArr.push({
		type: "selectArea",
		"selectAreaType": selectArea,
		s_x : event.layerX,
		s_y : event.layerY,
	})
}

function canvasMV(){
	if(selectArea==0){ return; }
	if(!mouseStart){ return; }

	var index = doArr.length-1
	doArr[index].e_x = event.layerX
	doArr[index].e_y = event.layerY
	doArrDraw()
	tishi(doArr[index])

}

function tishi(obj){
	var xywh = count(obj)
	var str = ``
	str += `<span>X轴:${xywh.x}</span>,<span>Y轴:${xywh.y}</span>,<span>宽:${xywh.w}</span>,<span>高:${xywh.h}</span>`
	$('#tishi').html(str)
}

function count(obj){
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
		x: x,
		y: y,
		w: x2-x,
		h: y2-y
	}
}

        function uuid(){
            var S4 = function() {
                return(((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
            };
            return(S4() + S4() + S4() + S4() + S4() + S4() + S4() + S4());
        }

function canvasMU(){
	if(selectArea==0){ return; }
	if(!mouseStart){ return; }
	var index = doArr.length-1
	doArr[index].e_x = event.layerX
	doArr[index].e_y = event.layerY
	var xywh = count(doArr[index])
	if(xywh.w<30 || xywh.h<30){
        doArr.pop()
	}else{
		addBlock(uuid(),index,doArr[index])
	}
	doArrDraw()
	$('#tishi').html("")
	mouseStart = false
}

function view(){
	doArr.forEach(function(obj){
		if(obj.type == "dituImg"){
			canvas2.width = obj.w
			canvas2.height = obj.h
			ctx2.drawImage($('#'+obj.id)[0], 0, 0, obj.w, obj.h)
		}
		if(obj.type == "selectArea"){
			var xywh = count(obj)
			
			if(obj.selectAreaType == "Code"){
				ctx2.drawImage($('#code')[0],xywh.x,xywh.y,xywh.w,xywh.h)
			}
			if(obj.selectAreaType == "Head"){
				ctx2.drawImage($('#head')[0],xywh.x,xywh.y,xywh.w,xywh.h)
			}
			if(obj.selectAreaType == "Logo"){
				if(document.querySelector('#logo_'+obj.id)){
					ctx2.drawImage($('#logo_'+obj.id)[0],xywh.x,xywh.y,xywh.w,xywh.h)
				}else{
					console.log("上传头像效果更加")
					ctx2.drawImage($('#logo')[0],xywh.x,xywh.y,xywh.w,xywh.h)
				}
			}
		}
	})
	$('#mask').show()
}


function closeMask(){
	$('#mask').hide()
}