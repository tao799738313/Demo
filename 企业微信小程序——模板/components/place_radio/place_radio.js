// components/place-radio/place-radio.js
const ajax = require("../../utils/ajax");
const util = require("../../utils/util");
const app = getApp();

Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 页面的初始数据
   */
  data: {
    isShow: false,
    list:[]
  },
  ready(){

  },
  methods:{
    show(opt){
      console.log(opt.list)
       this.setData({
        isShow: true,
        list: opt.list || []
       })
    },
    radioChange(x) {
      var val = x.detail.value;
      var list = this.data.list
      list.map(obj=>{
         if(obj.id == val){
           obj.checked = true;
         }else{
           obj.checked = false;
         }
      })
      this.setData({
        list: list
      });
    },
    hide(){
      this.setData({
       isShow: false
      })
    },
    chooseOk(){
      // 循环获取list里的checked == true的值返回
      var list = this.data.list;
      var res = list.filter(obj=>{
         return obj.checked == true
      })
      this.hide()
      this.triggerEvent("returnPlace",{
        rs: res[0],
        list: list
      })
    },
    close(){
      this.hide()
      this.triggerEvent("returnPlace",{})
    }
  }
})