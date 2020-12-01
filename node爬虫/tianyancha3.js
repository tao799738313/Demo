const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })  //{ show: true }
const request = require('request');   //请求接口的插件，类似于$.ajax
const fs = require('fs')   //文件控制插件

async function ceshi(){
	await nightmare.goto("https://www.tianyancha.com/").wait(100000000);
}


       // init(opt)  //正式执行入口
	   ceshi()
		
