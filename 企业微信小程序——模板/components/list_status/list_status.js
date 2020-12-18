// components/list_status/list_status.js

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
    status: "",
    count: 0,
    length: 0,
    statusObj:{
      noData: "暂无数据",
      noMoreData: "没有更多数据",
      getMore: "加载中..."
    }
  },
  ready(){

  },
  methods:{
     set(opt){
       if(opt.noData){
        this.setData({
          ["statusObj.noData"]: opt.noData
        })
       }
       if(opt.noMoreData){
        this.setData({
          ["statusObj.noMoreData"]: opt.noMoreData
        })
       }
       if(opt.getMore){
        this.setData({
          ["statusObj.getMore"]: opt.getMore
        })
       }
     },
     show(opt){
        this.setData({
          count: opt.count || 0,
          length: opt.length || 0
        },()=>{
          if(this.data.length == 0){
            this.setData({
              status: "noData"
            })
          }else{
            if(this.data.count <= this.data.length){
              this.setData({
                status: "noMoreData"
              })
            }else{
              this.setData({
                status: "getMore"
              })
            }
          }
          this.setData({
            isShow: true
          })
        })
     },
     hide(){
        this.setData({
          isShow: false,
          count: 0,
          length: 0,
          status: ""
        })
     }
  }
})