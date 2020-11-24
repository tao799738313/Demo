
(function (){
	var historyArr = []
	var historyObj = {}
	
	//唯一值
	function getGui(){
		var S4 = function() {
			return(((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
		};
		return(S4() + S4() + S4() + S4() + S4() + S4() + S4() + S4());
	}
	
	function historyPushobj(cb){
		history.pushState({},null,location.pathname + location.search + location.hash)
		var uuid = getGui()
		historyArr.push(uuid)
		historyObj[uuid] = cb
		window.onpopstate = function (ev) {
			if(historyArr.length != 0){
				var popId = historyArr.pop()
				historyObj[popId]()
				delete historyObj[popId]
			}
		}
		return uuid;
	}
	
	function delHistory(uuid) {
		// 不传uuid就是最后一个
		var len = historyArr.length
		if(len != 0){
			var uuid = uuid || historyArr[len - 1];
			historyObj[uuid] = function () {
				history.go(-1)
			}
		}
	}
	
	window.methods = {
		historyArr,historyObj,historyPushobj,delHistory,getGui
	}
})()




