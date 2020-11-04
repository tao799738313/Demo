var dituImg  =  ""
var doArr = []

var canvas = $('#canvas')[0]
var ctx  = canvas.getContext("2d");
var canvas2 = $('#canvas2')[0]
var ctx2  = canvas2.getContext("2d");
var selectArea = 0

var colorArr = ["#fe0000","#1469d3","#399f0e","#e722ff","#ff8d00","#06ad97"]

if(1){
	doArr = JSON.parse('[{"type":"dituImg","w":389,"h":483,"id":"dituImg"},{"type":"selectArea","selectAreaType":"Code","s_x":82,"s_y":152,"e_x":318,"e_y":385,"id":"c13c9626f36e79642404064a37cbb9fb","select":"1"},{"type":"selectArea","selectAreaType":"Logo","s_x":176,"s_y":244,"e_x":224,"e_y":294,"id":"d05240f586b226fde51c565217cac1a2"},{"type":"selectArea","selectAreaType":"Head","s_x":21,"s_y":436,"e_x":63,"e_y":479,"id":"732b9b4f1f1c97a5abc37a93fdb0ea40"},{"type":"selectArea","selectAreaType":"Phone","s_x":76,"s_y":444,"e_x":284,"e_y":478,"id":"037fe58c4897339cae96d43ce39b8389","fontColor":"#12ffff"}]')
	
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
		getElseImg(doArr.slice(1),0)
	}
	img.src = "img/test.jpg"
}


function getElseImg(arr,index) {
	var len = arr.length;
	if(len!=index){
		var obj = arr[index]
		if(obj.type == "selectArea"){
			if(obj.selectAreaType == "Code"){
				if(obj.select=="4"){
					var img = document.createElement("img")
					img.id = "code_" + obj.id;
					img.onload = function(){
						img.className = "img9999"
						$('#imgBox').append(img)
						var clone = $(img).clone();
						clone[0].id = "clone_" + obj.id;
						$('#block_' + obj.id).append(clone)
						getElseImg(arr,index+1)
					}
					img.src = obj.url
				}else{
                    getElseImg(arr,index+1)
                }
			}else if(obj.selectAreaType == "Logo"){
				var img = document.createElement("img")
				img.id = "logo_" + obj.id;
				img.onload = function(){
					img.className = "img9999"
					$('#imgBox').append(img)
					var clone = $(img).clone();
					clone[0].id = "clone_" + obj.id;
					$('#block_' + obj.id).append(clone)
                    getElseImg(arr,index+1)
				}
				img.src = obj.url
			}else{
                getElseImg(arr,index+1)
            }
		}
	}
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
			
			var xywh = count(obj)
			var color = colorArr[(index % colorArr.length)]
			// 外边黑色边框
			ctx.beginPath();  // 开始画
			ctx.lineWidth = 2; // 画笔粗细
			ctx.strokeStyle = 'black';
			ctx.strokeRect(xywh.x,xywh.y,xywh.w,xywh.h); //绘制边框
			ctx.stroke();
			// 满的
			ctx.beginPath();  // 开始画
			ctx.fillStyle = color; //设置颜色
			ctx.fillRect(xywh.x+1,xywh.y+1,xywh.w-2,xywh.h-2); //绘制边框
			ctx.stroke();
			if(obj.selectAreaType=="Code"){
				if(obj.select==2){
					// 白色边框
					ctx.beginPath();  // 开始画
					ctx.fillStyle = 'black';
					ctx.fillRect(xywh.x+(xywh.w*0.4),xywh.y+(xywh.h*0.4),xywh.w*0.2,xywh.h*0.2); //绘制边框
					ctx.stroke();
				}else{
					// 白色边框
					ctx.beginPath();  // 开始画
					ctx.strokeStyle = 'white';
					ctx.strokeRect(xywh.x+(xywh.w*0.4),xywh.y+(xywh.h*0.4),xywh.w*0.2,xywh.h*0.2); //绘制边框
					ctx.stroke();
				}
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
	doArr[index] = realXY(index)
	var div = document.createElement("div")
	div.id = "block_" + id;
	div.className = "block"
	div.style.cssText = "color:" + color + ";"

	var xywh = count(opt)
	var xywhStr = `
<span>X轴: <input type="text" oninput="xywhInput('x','${index}')" value="${xywh.x}"> </span>,
<span>Y轴: <input type="text" oninput="xywhInput('y','${index}')" value="${xywh.y}"> </span>,
<span>宽:  <input type="text" oninput="xywhInput('w','${index}')" value="${xywh.w}"> </span>,
<span>高:  <input type="text" oninput="xywhInput('h','${index}')" value="${xywh.h}"></span>`
	var str = ``
	var viewObj = {
		1:"活动链接",
		// 2:"个人名片(黑色区域为默认自带头像)",
		3:"自定义跳转",
		4:"上传图片",
	}
	if(opt.selectAreaType == "Code"){
		doArr[index].select = doArr[index].select || '1'
		str += `<div>二维码~${xywhStr}</div>
		        <div><select id="select_${id}" onchange="select('${id}','${index}')">`
				   for(var i in viewObj){
					   if(opt.select == i){ 
						   str += `<option value="${i}" selected="selected">${viewObj[i]}</option>`
					   }else{
						   str += `<option value="${i}">${viewObj[i]}</option>`
					   }
				   }
		str += `</select></div><div id="selectDiv_${id}">`
		               
				   if(opt.select=="1"||opt.select=="2"){
					   
				   }else if(opt.select=="3"){
					   str+=` <input type="text" id="inp_${id}" oninput="input('${id}','${index}')" value="${opt.inp || ''}"/>`
				   }else if(opt.select=="4"){
					   str+=` <input type="file" id="inp_${id}" onchange="codeFile(this.files[0],'${id}','${index}')" />`
				   }
				   
		str += `</div>`
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
	if(opt.selectAreaType == "Phone"){
		opt.fontColor = opt.fontColor || '#000000'
		str += `<div>电话号码~${xywhStr}</div>
            <div>字体颜色：<input type="text" oninput="fontColorInput('${index}')" value="${opt.fontColor}" style="display: inline-block;width: 120px;"></div>
            <div>区域的高度就是字体大小，区域宽度应大于高度的6倍</div>`
	}
	div.innerHTML = str
	
	// 添加方法，带上序号
	$('#block').append(div)
}



function realXY(index) {
	var obj = JSON.parse(JSON.stringify(doArr[index]))
	var sx = obj.s_x,ex = obj.e_x,sy = obj.s_y,ey = obj.e_y;
	if(sx > ex && sy > ey){
	    obj.s_x = ex
		obj.s_y = ey
		obj.e_x = sx
		obj.e_y = sy
	}
	return obj
}

function select(id,index){
	$('#code_' + id).remove()
	$('#clone_' + id).remove()
	var val = $('#select_' + id).val()
	doArr[index].select = val
	var str = ``
	
   if(val=="1"||val=="2"){
	   
   }else if(val=="3"){
	   str+=`<input type="text" id="inp_${id}" oninput="input('${id}','${index}')" />`
   }else if(val=="4"){
	   str+=`<input type="file" id="codeInp_${id}" onchange="codeFile(this.files[0],'${id}','${index}')" />`
   }
   $('#selectDiv_'+id).html(str)
	doArrDraw()
}

function fontColorInput(index) {
	var val = event.target.value.trim();
	var obj = doArr[index]
	obj.fontColor = val
}


function xywhInput(type,index) {
	var val = event.target.value.trim();
	if(val==""){
		val = 0
	}
	var obj = doArr[index]
	var reg = /^\d{1,}$/
	if(reg.test(val)){
		if(type=='x'){ var wywh = count(obj); obj.s_x = val; obj.e_x = Number(obj.s_x) + Number(wywh.w);   }
		if(type=='y'){ var wywh = count(obj); obj.s_y = val; obj.e_y = Number(obj.s_y) + Number(wywh.h); }
		if(type=='w'){ obj.e_x = Number(obj.s_x) + Number(val)  }
		if(type=='h'){ obj.e_y = Number(obj.s_y) + Number(val)  }
		doArrDraw()
	}else{
		var wywh = count(obj)
       $(event.target).val(wywh[type])
	}
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
	if(xywh.w<20 || xywh.h<20){
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
		
		if(obj.selectAreaType == "Phone"){
						// 这个是 字体大小等于高的一半
						// var fontSize = xywh.h * 0.5;
						// ctx2.font=`normal bold ${fontSize}px Arial`;
						// ctx2.fillStyle="#fff000";
						// ctx2.fillText("12345678999",xywh.x + ((xywh.w - fontSize*6.2)/2) ,xywh.y + xywh.h * 0.7);
		
						// 这个是字体大小等于高
						var fontSize = xywh.h;
						ctx2.font=`normal bold ${fontSize}px Arial`;
						ctx2.fillStyle= obj.fontColor || "#000000";
						ctx2.fillText("13512345678",xywh.x + ((xywh.w - fontSize*6.2)/2) ,xywh.y + xywh.h * 0.87);
					}
	})
	$('#mask').show()
}


function closeMask(){
	$('#mask').hide()
}