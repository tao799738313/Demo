var nowPage = 0
var pageArr = ["page1","page2","page3","page4","page5"]
var flag = false

function init(){
	last_next()
    allhide()
	page1()
}
init()



function allhide(){
	$('.hide').hide()
}

function animateCSS(element, animationName, callback) {
var node = document.querySelector(element)

function handleAnimationEnd() {
	node.classList.remove('animated', ...animationName)
	node.removeEventListener('animationend', handleAnimationEnd)

	if (typeof callback === 'function'){
		// 动画结束接入下一个动画
		callback()
	} 
}

node.addEventListener('animationend', handleAnimationEnd)
node.classList.add('animated', ...animationName)
$(node).show()
}

function animateCSSOut(element, animationName, callback) {
var node = document.querySelector(element)
function handleAnimationEnd() {
	node.classList.remove('animated', ...animationName)
	node.removeEventListener('animationend', handleAnimationEnd)
	$(node).hide()
	if (typeof callback === 'function'){
		// 动画结束接入下一个动画
		callback()
	} 
}
node.addEventListener('animationend', handleAnimationEnd)
node.classList.add('animated', ...animationName)

}

function last_next(){
	var start = 0
	document.body.addEventListener("touchstart",function(e){
		start = e.changedTouches[0].pageY
	})
	document.body.addEventListener("touchmove",function(e){
		e.preventDefault();
	},{passive: false})
	document.body.addEventListener("touchend",function(e){
		var end = e.changedTouches[0].pageY;
		
		if(end>start+100 && flag){
			touchDown()
			console.log("向下滑")
		}else if(start>end+100 && flag){
			touchUp()
			console.log("向上滑")
		}
	})
	
}



function page1(){
		animateCSS("#page1_title",["fadeInDownBig"])
		animateCSS("#page1_Lead",["zoomInLeft","slow"],function(){	
		// animateCSS("#page1_kaiShi",["bounceInRight"])
				$("#nextBtn").show()
				flag = true
		})
}

function page1out(cb){
      animateCSSOut("#page1_title",["fadeOutUpBig"])
      animateCSSOut("#page1_Lead",["zoomOutRight"],function(){
		  cb()
	  })
// 	  animateCSSOut("#page1_kaiShi",["bounceOutRight"],function(){
// 		  
// 	  })
}

function page2(cb){
		animateCSS("#page2_title",["fadeInDownBig"])
		animateCSS("#page2_wenZi",["flipInY","slow"],function(){
			$("#nextBtn").show()
			flag = true
		})
}
function page2out(cb){
		animateCSSOut("#page2_wenZi",["flipOutY"])
		animateCSSOut("#page2_title",["fadeOutUpBig"],function(){
			cb()
		})
}
function page3(cb){
		animateCSS("#page3_title",["fadeInDownBig"])
		animateCSS("#page3_wenZi",["zoomIn","slow"],function(){	
			$("#nextBtn").show()
			flag = true
		})
}
function page3out(cb){

		animateCSSOut("#page3_wenZi",["zoomOut"])
		animateCSSOut("#page3_title",["fadeOutUpBig"],function(){
			cb()
		})

}

function page4(){
		animateCSS("#page4_title",["fadeInDownBig"])
		animateCSS("#page4_wenZi",["fadeInUpBig","slow"],function(){	
            $("#nextBtn").show()
			flag = true
		})
}
function page4out(cb){
		animateCSSOut("#page4_wenZi",["fadeOutDownBig","slow"])
		animateCSSOut("#page4_title",["fadeOutUpBig"],function(){
			cb()
		})
}

function page5(){
		animateCSS("#page5_title",["fadeInDownBig"])
		animateCSS("#page5_wenZi",["fadeInUpBig","slow"],function(){
			animateCSS("#page5_kaiShi",["fadeInDownBig"])
            $("#nextBtn").show()
			flag = true
		})
}
function page5out(cb){
	$("#page5_kaiShi").hide()
		animateCSSOut("#page5_wenZi",["fadeOutDownBig","slow"])
		animateCSSOut("#page5_title",["fadeOutUpBig"],function(){
			cb()
		})
}

function touchUp(){
	$("#nextBtn").hide()
	flag = false
	
	window[pageArr[nowPage]+"out"](function(){
		var lastPage = nowPage;
		if(lastPage==pageArr.length-1){
			nowPage = 0
		}else{
			nowPage++;
		}
		// 上一页效果
		$("#"+pageArr[nowPage]).css({
			"display":"block",
			"z-index":"100"
		})
		animateCSS('#'+pageArr[nowPage], ['fadeInUp'],function(){
			$("#"+pageArr[lastPage]).css({
				"display":"none",
				"z-index":"1"
			})
			$("#"+pageArr[nowPage]).css({
				"z-index":"1"
			})
			window[pageArr[nowPage]]()
		})
	})
}

function touchDown(){
	$("#nextBtn").hide()
	flag = false
	window[pageArr[nowPage]+"out"](function(){
		var lastPage = nowPage;
		if(lastPage==0){
			nowPage = pageArr.length - 1
		}else{
			nowPage--;
		}
		// 下一页效果
		$("#"+pageArr[nowPage]).css({
			"display":"block",
			"z-index":"100"
		})
		animateCSS('#'+pageArr[nowPage], ['fadeInDown'],function(){
			$("#"+pageArr[lastPage]).css({
				"display":"none",
				"z-index":"1"
			})
			$("#"+pageArr[nowPage]).css({
				"z-index":"1"
			})
			window[pageArr[nowPage]]()
		})
	})

}

function changePlay(){
	var isPlay = $("#myAudio").attr("data-isPlay")
	if(isPlay==1){
		$("#myAudio").attr("data-isPlay",0)
		$("#myAudio")[0].pause(); 
		$("#music").attr("src","img/MusicOff@2x.png")
		// $("#music").css("animation","none")
	}else{
		$("#myAudio").attr("data-isPlay",1)
		$("#myAudio")[0].play(); 
		$("#music").attr("src","img/MusicOn@2x.png")
		// $("#music").css("animation","rotating 3s linear infinite")
	}
}
