function mimeTree(domId, option) {
    var that = this;
    var bug = false;
    this.cache = {}; // 缓存 uuid 对应 真实id
    this.cache2 = {}; // 缓存 真实id 对应 uuid数组
    var sameIdHandle = (option.sameIdHandle == false) ? false : true;  // 默认true，对相同id一起处理
    option.default = JSON.parse(JSON.stringify(option.default)) // 深拷贝参数
    if (option.hasCannotChecked) {
        option.isLinkage = false  // 默认不启动id联动
    }
    if(!option.isLinkage && option.radio){
        option.max = 1
    }
    if(!option.isLinkage && option.max != -1 && option.default.length > option.max){
        option.default.length = option.max;  // 切断默认选中的参数，因为不支持这么多
    }

    option.max = parseInt(option.max) || -1;  // -1 就是无限
    this.tree = JSON.parse(JSON.stringify(option.tree));
    this.direction = "";
    this.option = option;
    this.init = function(cb) {
        var gui = that.gui();
        that.cache[gui] = {
            child: that.tree
        };
        var w = option.width || '100vw';;
        var h = option.height || '100vh';
        document.querySelector('#' + domId).style.width = w;
        document.querySelector('#' + domId).style.height = h;

        var str = ``
        str +=
            `<div style="display: flex;flex-flow: column;width: ${w};height: ${h};"><div id="fa_${gui}" style="flex:1;padding: 2vw;overflow: auto;">
							<label id="label_${gui}" style="display:none;"><input id="check_${gui}" type="checkbox"></label>
							   </div>
               <div> <div id="ok_${gui}" class="okbtn">我选好了</div> </div></div>`

        document.querySelector('#' + domId).innerHTML = str;

        document.querySelector('#ok_' + gui).addEventListener('click', function(event) {
            var getCheck = that.getCheck(true);
            option.checkOK && option.checkOK(option.default,getCheck[0],getCheck[1],getCheck[2]);
        })
        that.drawArr(that.tree, gui);  // 初次循环参数数组
        that.default(option.default);  // 有默认选择值就选中
        that.show()  // 用于路由
        cb(that)  // 初始化回调，在这里显示dom最好

    }

    // api方法，给调用者二次显示的，集成了路由
    this.show = function(cb){
        cb && cb()
        // 添加返回页面的功能
        if(option.closeType == "btn"){

        }else{
			if(window.methods && methods.historyPushobj){
				methods.historyPushobj(function () {
					// 这是路由的关闭事件，也可以能有其他的关闭事件，记得要删除路由
				    option.closeFun && option.closeFun()
				})
			}
        }
    }

    this.drawArr = function(arr, faId, comePush, er) {
        arr.forEach(function(obj, index) {
            if (comePush) {
				// 如果是异步加载的
                if (er) {
                    var len = index;
                } else {
                    if(!that.cache[faId].child){
                        that.cache[faId].child = [];
                    }
                    var len = that.cache[faId].child.length;
					// 放到父cache里
                    that.cache[faId].child.push(obj)
                }
                comePush.push(obj.id);
                that.drawOne(obj, faId, len, comePush)
            } else {
				// 初次加载的
                that.drawOne(obj, faId, index)
            }
        })
        if (comePush) {
            return comePush
        }
    }
    this.drawOne = function(obj, faId, index, comePush) {
        var gui = that.gui()
        obj.faId = faId;
        obj._id = gui;  // 自定义uuid
        that.cache[gui] = obj;  // cache存起来
        var copy = JSON.parse(JSON.stringify(obj))
		if(!that.cache2[copy.id]){
			copy.guiArr = [gui]
			that.cache2[copy.id] = copy;  // cache2存起来
		}else{
			that.cache2[copy.id].guiArr.push(gui)
		}
		
        if (that.cache[faId]) {
            var _index = that.cache[faId]['_index'];
            if (_index === "" || _index === undefined || _index === null) {
                that.cache[faId].child[index]["_index"] = 0;
            } else {
                that.cache[faId].child[index]["_index"] = (_index + 1);
            }
        }
        var dom = document.createElement('div')
        dom.innerHTML =
            `<div id="box_${gui}" class="tree_box"></div><div id="fa_${gui}" class="fa_box" style="display:none;"></div>`
        document.querySelector('#fa_' + faId).appendChild(dom)
        that.drawOpen(obj, gui)
        // 如果有某些dom不需要选中，比如只需要选择人或者只需要选择部门
        if (option.hasCannotChecked) {
			// 钩子判断 
            if (option.cannotChecked(obj)) {
                // 钩子同意
                that.drawCheckbox(obj, gui, faId)
                that.drawLabel(obj, gui, faId)
                if (option.needClick) {
                    that.drawClick(obj, gui)
                }
            } else {
                // 钩子不同意，不可以选择
                that.drawClick(obj, gui, faId)
            }
        } else {
			// 跟钩子同意是一样的
            that.drawCheckbox(obj, gui, faId)
            that.drawLabel(obj, gui, faId)
            if (option.needClick) {
                that.drawClick(obj, gui)
            }
        }

        that.drawOldId(obj, gui)
		
		// 递归
        if (obj.child) {
            that.drawArr(obj.child, gui, comePush, 2)
        }
    }
    this.drawLabel = function(obj, gui, faId) {
        var dom = document.createElement('label')
        dom.id = "label_" + gui;
        dom.setAttribute('for', 'check_' + gui)
        if (!option.needClick) {
            dom.className = 'label_span'
            dom.innerHTML = obj.name
        }
        document.querySelector('#box_' + gui).appendChild(dom)
        dom.addEventListener('click', function(event) {
            var isChecked = document.querySelector('#check_' + gui).checked; // 点击前的状态
            // 是否选择可以自定义钩子
            var res = option.check && option.check(that.cache[gui], gui,isChecked, that)
            if(res==undefined || res==true){

            }else{
                // 阻止
                event.preventDefault()
                return;
            }
 
            // 如果打开了联动功能
            if (option.isLinkage) {
				// 看看这个逻辑总共执行了几次，如果执行太多一定要做边界变量的优化
				console.log("11111")
                
				// 点击label此时input的选中状态是没有变化的，但是要假装他变化了，才容易计算
				// 可以插入钩子，在这里阻止
                isChecked = !isChecked

                var childs = that.cache[gui].child || [];
                var brotherLen = that.cache[faId].child.length;
                
				if (isChecked) {
                    var alreadyCheck = 1;
                } else {
                    var alreadyCheck = -1;
                }

                // 计算兄弟是不是都被选中了
                Array.prototype.slice.call(document.querySelectorAll('.faId_' + faId)).forEach(function(x) {
                    if (x.checked) {
                        alreadyCheck++
                    }
                })

                // 联动的核心代码
                // <!-- 向下传递 -->
                if (that.direction == "down") {
                    childs.forEach(function(x) {
                        if (document.querySelector('#check_' + x._id).checked == isChecked) {

                        } else {
                            document.querySelector('#label_' + x._id).click()
                        }
                    })
                }
                // <!-- 向上传递 -->
                if (that.direction == "up") {
                    if (brotherLen == alreadyCheck) {
                        if (document.querySelector('#check_' + faId).checked) {

                        } else {
                            document.querySelector('#label_' + faId).click()
                        }
                    } else {
                        if (document.querySelector('#check_' + faId).checked) {
                            document.querySelector('#label_' + faId).click()
                        }
                    }
                }

                if (that.direction == "") {
                    // <!-- 向下传递 -->
                    childs.forEach(function(x) {
                        if (document.querySelector('#check_' + x._id).checked == isChecked) {

                        } else {
                            that.direction = 'down'
                            document.querySelector('#label_' + x._id).click()
                        }
                    })
                    // <!-- 向上传递 -->
                    if (brotherLen == alreadyCheck) {
                        that.direction = 'up'
                        if (document.querySelector('#check_' + faId).checked) {

                        } else {

                            document.querySelector('#label_' + faId).click()
                        }
                    } else {
                        that.direction = 'up'
                        if (document.querySelector('#check_' + faId).checked) {
                            document.querySelector('#label_' + faId).click()
                        }
                    }
                    <!-- direction恢复 -->
                    that.direction = "";
                }
            } else {
				// 点击label此时input的选中状态是没有变化的，但是要假装他变化了，才容易计算
				// 可以插入钩子，在这里阻止
                isChecked = !isChecked
				
                var getCheck = that.getCheck()
                var len = getCheck.length
				
                if (isChecked) {
                    if(option.default.includes(obj.id)){
                        if(sameIdHandle){
       //                      if(option.max > 0 && len >= option.max) {
       //                          // 超过最大值
       //                          window.timeMask ? timeMask("不能超过" + option.max) : alert("不能超过" + option.max);
       //                          event.preventDefault()
       //                          return;
       //                      }
                        }else{
                            if(option.max > 0) {
								var raidolis = document.querySelectorAll('[name=treeCheck]:checked');
								var len2 = raidolis.length;
								if(option.max == 1){
									for(var t=0;t<raidolis.length;t++){
									    raidolis[t].click()
									}
								}else{
									if(len2 >= option.max){
										// 超过最大值
										window.timeMask ? timeMask("不能超过" + option.max) : alert("不能超过" + option.max);
										event.preventDefault()
										return;
									}
								}
                            }
                        }
                    }else{
                        if(option.max > 0){
                            if (option.max == 1){
                                option.default = [obj.id]
                                // 如果是单选
                                if(len >= 1){
                                    if(sameIdHandle){
                                        var radioId = getCheck[0]
                                        var raidolis = document.querySelectorAll('#oldId_' + radioId);
                                        for(var t=0;t<raidolis.length;t++){
                                            var radio_gui =  raidolis[t].getAttribute('data-gui');
                                            document.querySelector('#label_'+radio_gui) && document.querySelector('#label_'+radio_gui).click()
                                        }
                                    }else{
                                        var raidolis = document.querySelectorAll('[name=treeCheck]:checked');
                                        for(var t=0;t<raidolis.length;t++){
                                            raidolis[t].click()
                                        }
                                    }
                                }
                            }else{
								// 大于1的情况
								if(option.default.length >= option.max){
									// 超过最大值
									window.timeMask ? timeMask("不能超过" + option.max) : alert("不能超过" + option.max);
									event.preventDefault()
									return;
								}else{
									// if(sameIdHandle){
									//     if(len >= option.max) {
									//         // 超过最大值
									//         window.timeMask ? timeMask("不能超过" + option.max) : alert("不能超过" + option.max);
									//         event.preventDefault()
									//         return;
									//     }
									// }else{
									//     var len2 = document.querySelectorAll('[name=treeCheck]:checked').length;
									//     if(len2 >= option.max) {
									//         // 超过最大值
									//         window.timeMask ? timeMask("不能超过" + option.max) : alert("不能超过" + option.max);
									//         event.preventDefault()
									//         return;
									//     }
									// }
								}
                            }
                        }
                    }
                }
            }
            if (isChecked) {
                // 添加
                if (!option.default.includes(obj.id)) {
                    option.default.push(obj.id)
                }
            } else {
                // 删除
                var index = option.default.indexOf(obj.id)
                if (index != -1) {
                    option.default.splice(index, 1)
                }
            }
            if(sameIdHandle){
                // 同一个ID，（只在手动点击触发实现）
                if ((event.x != 0 && event.y != 0) || bug) {
                    bug = false
                    var lis = document.querySelectorAll('#oldId_' + obj.id)
                    for (var i = 0; i < lis.length; i++) {
                        var li_gui = lis[i].getAttribute('data-gui')
                        if (li_gui != gui) {
                            var li_check = document.querySelector('#check_' + li_gui)
                            if (li_check && li_check.checked != isChecked) {
                                document.querySelector('#label_' + li_gui).click();
                            }
                        }
                    }
                }
            }
        })
    }
    this.drawCheckbox = function(obj, gui, faId) {
        var dom = document.createElement('input')
        dom.setAttribute('type', 'checkbox')
        dom.name = "treeCheck"
        dom.id = "check_" + gui;
        dom.className = 'faId_' + faId;
        document.querySelector('#box_' + gui).appendChild(dom)
    }
    this.drawOpen = function(obj, gui) {
        if (option.isHasOpenSpan) {
            if (option.isHasOpenSpan(obj)) {
                var dom = document.createElement('span')
                dom.id = "open_" + gui;
                dom.className = "openSpan"
                document.querySelector('#box_' + gui).appendChild(dom)
                dom.addEventListener('click', function() {
                    if(option.open){
                        var res = option.open(that.cache[gui], gui, that)
                        if(res == undefined){
                            if (document.querySelector('#fa_' + gui).style.display == "none") {
                                document.querySelector('#fa_' + gui).style.display = "block";
                                dom.className = "closeSpan"
                            } else {
                                document.querySelector('#fa_' + gui).style.display = "none";
                                dom.className = "openSpan"
                            }
                        }
                    }else{
                        if (document.querySelector('#fa_' + gui).style.display == "none") {
                            document.querySelector('#fa_' + gui).style.display = "block";
                            dom.className = "closeSpan"
                        } else {
                            document.querySelector('#fa_' + gui).style.display = "none";
                            dom.className = "openSpan"
                        }
                    }
                })
            } else {
                var dom = document.createElement('span')
                dom.id = "open_" + gui;
                dom.className = "emptySpan"
                document.querySelector('#box_' + gui).appendChild(dom)
            }
        } else {
            var dom = document.createElement('span')
            dom.id = "open_" + gui;
            dom.className = "openSpan"
            document.querySelector('#box_' + gui).appendChild(dom)
            dom.addEventListener('click', function() {
                if(option.open){
                    var res = option.open(that.cache[gui], gui, that)
                    if(res == undefined){
                        if (document.querySelector('#fa_' + gui).style.display == "none") {
                            document.querySelector('#fa_' + gui).style.display = "block";
                            dom.className = "closeSpan"
                        } else {
                            document.querySelector('#fa_' + gui).style.display = "none";
                            dom.className = "openSpan"
                        }
                    }
                }else{
                    if (document.querySelector('#fa_' + gui).style.display == "none") {
                        document.querySelector('#fa_' + gui).style.display = "block";
                        dom.className = "closeSpan"
                    } else {
                        document.querySelector('#fa_' + gui).style.display = "none";
                        dom.className = "openSpan"
                    }
                }
            })
        }
    }
    this.drawClick = function(obj, gui) {
        var dom = document.createElement('span')
        dom.id = "click_" + gui;
        dom.className = "click_span";
        dom.innerHTML = obj.name
        document.querySelector('#box_' + gui).appendChild(dom)
        dom.addEventListener('click', function() {
            option.click && option.click(that.cache[gui], gui, that)
        })
    }
    this.drawOldId = function(obj, gui) {
        var dom = document.createElement('span')
        dom.style.cssText = "display:none";
        dom.id = "oldId_" + obj.id;
        dom.setAttribute('data-gui', gui)
        document.querySelector('#box_' + gui).appendChild(dom)
    }
    this.gui = function() {
        var S4 = function() {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return (S4() + S4() + S4() + S4() + S4() + S4() + S4() + S4());
    }
    this.push = function(id, arr) {
        var oldIdArr = that.drawArr(arr, id, []);
		if (option.isLinkage) {
			if (document.querySelector('#check_' + id) && document.querySelector('#check_' + id).checked) {
				// 如果上一级选中，子节点全部选中
			     that.default(oldIdArr)
			}else{
				// 如果上一级没选中，把与default一样的交集选中
				var jiaoji = oldIdArr.filter(function(id) {
				    if (option.default.includes(id)) {
				        return id;
				    }
				})
				that.default(jiaoji)
			}
		}else{
			var jiaoji = oldIdArr.filter(function(id) {
			    if (option.default.includes(id)) {
			        return id;
			    }
			})
			that.default(jiaoji)
		}
    }
    this.default = function(arr) {
        arr.forEach(function(x) {
            if (document.querySelector('#oldId_' + x)) {
                if(sameIdHandle){
                    var guis = document.querySelectorAll('#oldId_' + x)
                    for (var i = 0; i < guis.length; i++) {
                        var gui = guis[i].getAttribute('data-gui')
                        // 没选中就选中
                        if (document.querySelector('#check_' + gui) && !document.querySelector('#check_' + gui).checked) {
                            document.querySelector('#label_' + gui).click()
                        }
                    }
                }else{
                    var guis = document.querySelectorAll('#oldId_' + x)
					// 这里是 1 
                    for (var i = 0; i < 1; i++) {
                        var gui = guis[i].getAttribute('data-gui')
                        // 没选中就选中
                        if (document.querySelector('#check_' + gui) && !document.querySelector('#check_' + gui).checked) {
                            document.querySelector('#label_' + gui).click()
                        }
                    }
                }
            }
        })
    }
	// api
    this.getCheck = function(flag) {
        var arr = [];
        var obj = {};
		var obj2 = {};
        Array.prototype.slice.call(document.querySelectorAll('[name=treeCheck]:checked')).forEach(function(x) {
            var _id = x.getAttribute('id').split('_')[1]
			var id = that.cache[_id].id
            obj[id] = that.cache2[id]
			if(obj2[id]){
				obj2[id].push(_id)
			}else{
				obj2[id] = [_id]
			}
        })
        for (var k in obj) {
            arr.push(k)
        }
		if(flag){
			return [arr,obj,obj2];
		}else{
			return arr;
		}
    }
	// api
    this.labelClickById = function (id) {
		if(!sameIdHandle && that.cache2[id].guiArr && that.cache2[id].guiArr.length != 1){
			console.log("该id关联"+ that.cache2[id].guiArr.length + "个uuid,且sameIdHandle=false,请使用labelClickByGui方法")
			return;
		}
		if(that.cache2[id]){
			var _id = that.cache2[id]._id;
			bug = true;
			document.querySelector('#label_' + _id) && document.querySelector('#label_' + _id).click()
		}else{
			var idx = option.default.indexOf(id)
			if(idx != -1){
				option.default.splice(idx,1)
			}
		}
    }
	// api
    this.labelClickByGui = function (gui) {
        var _id = gui;
        bug = true;
        document.querySelector('#label_' + _id) && document.querySelector('#label_' + _id).click()
    }
}