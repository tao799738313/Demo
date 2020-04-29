var dituImg  =  ""
var doArr = []

var canvas = $('#canvas')[0]
var ctx  = canvas.getContext("2d");
var canvas2 = $('#canvas2')[0]
var ctx2  = canvas2.getContext("2d");
var selectArea = 0

if(1){
	doArr = JSON.parse('[{"type":"dituImg","w":389,"h":483,"id":"dituImg"},{"type":"selectArea","s_x":6,"s_y":119,"e_x":382,"e_y":368,"id":1588139344052,"select":"2","inp":"123123123123"},{"type":"selectArea","s_x":92,"s_y":151,"e_x":349,"e_y":423,"id":1588139354084,"select":"1","inp":"www.baidi.com"}]')
	var img = document.createElement("img")
	var id = "dituImg"
	img.id = id;
	img.onload = function(){
		dituImg = img
		img.className = "img9999"
		$('body').append(img)
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
		doArrDraw()
		blockDraw()
		
		var img = document.createElement("img")
		var id = "dituImg"
		img.id = id;
		img.onload = function(){
			dituImg = img
			img.className = "img9999"
			$('body').append(img)
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
		dituImg = "";
		$('#'+ obj.id).remove()
	}
	if(obj.type == "selectArea"){
		var id = obj.id
		$('#block_' + id).remove()
		doArrDraw()
	}
}

function selectAreaDo(that){
	if(dituImg == ""){
		console.log("没有底图")
		return;
	}
	if(selectArea==0){
		selectArea = 1
		$(that).removeClass("btnClose").addClass("btnOpen")
	}else{
		selectArea = 0
		$(that).removeClass("btnOpen").addClass("btnClose")
	}
}



function doArrDraw(){
	ctx.clearRect(0,0,canvas.width,canvas.height);
	
	var len = doArr.length;
	if(len==0){
		console.log("没有底图")
		return; 
	}
	doArr.forEach(function(obj){
		if(obj.type == "dituImg"){
			ctx.drawImage(dituImg, 0, 0, obj.w, obj.h)
		}
		if(obj.type == "selectArea"){
			ctx.beginPath();  // 开始画
			ctx.strokeStyle = "red";
			var x,y,x2,y2;
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
			ctx.strokeRect(x,y,x2-x,y2-y); //绘制边框
			ctx.stroke();
		}
	})
}

function addBlock(id,opt){
	var index = doArr.length-1
	doArr[index].id = id
	var div = document.createElement("div")
	div.id = "block_" + id;
	var str = `<div><select id="select_${id}" onchange="select('${id}','${index}')">`
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
	div.innerHTML = str
	
	// 添加方法，带上序号
	$('#block').append(div)
}

function select(id,index){
	var val = $('#select_' + id).val()
	doArr[index].select = val
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
	doArr.forEach(function(obj){
		if(obj.type=="selectArea"){
			addBlock(obj.id,obj)
		}
	})
}

var mouseStart = false
function canvasMD(){
	if(selectArea==0){ return; }
	mouseStart = true
	doArr.push({
		type: "selectArea",
		s_x : event.layerX,
		s_y : event.layerY,
	})
}

function canvasMV(e){
	if(selectArea==0){ return; }
	if(mouseStart){
		var index = doArr.length-1
		doArr[index].e_x = event.layerX
		doArr[index].e_y = event.layerY
		doArrDraw()
	}
}

function canvasMU(e){
	if(selectArea==0){ return; }
	var index = doArr.length-1
	doArr[index].e_x = event.layerX
	doArr[index].e_y = event.layerY
	doArrDraw()
	addBlock(new Date().getTime(),{})
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
			var x,y,x2,y2;
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
			ctx2.drawImage($('#code')[0],x,y,x2-x,y2-y)
		}
	})
	$('#mask').show()
}


function closeMask(){
	$('#mask').hide()
}