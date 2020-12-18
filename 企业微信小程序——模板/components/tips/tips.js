// components/tips/tips.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    // 这里设置的值，是通过 标签属性传入的，在父页面使用 this.setData 修改会同步变化的值
    // 以前常用于isShow的改动来改变component，现在建议用methods
  },
  data: {
    isShow: false,
    text: "",
    now: 0
  },
  methods: {
    //隐藏弹框
    hide() {
      this.setData({
        isShow: false
      })
    },
    //展示弹框
    show(obj) {
      var now = new Date().getTime();
      this.setData({
        now: now,
        isShow: true,
        text: obj.text || "提示"
      })
      setTimeout(()=>{
        if(now == this.data.now){
          this.hide()
        }
      },obj.time || 2500)
    }
  }
})
