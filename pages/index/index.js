const app = getApp()
var that;
Page({
  data: {
    title: "爱情性格测试",
    subheading: "你有多大可能在爱情中获得幸福？",
    money: 1,
    originalPrice: 59,
    testNum: 240567,
    imgHead: app.globalData.imgHead,
    // comment: [
    //   { headImg: "head-1.jpg", name: "清清晴天", content: "分析得很好", num: 23 },
    //   { headImg: "head-2.jpg", name: "你找不到我", content: "谢谢，非常准确", num: 3 },
    //   { headImg: "head-3.jpg", name: "阿凡", content: "做题过程蛮新奇的，没想到结果会这么丰富。", num: 0 },
    // ],
  },
  onLoad: function () {
    that = this;
  },

  submit: function (event) {
    app.startTest();
  },

  roll: function (event) {
    tt.pageScrollTo({
      scrollTop: 2437.83,
    });
  },
})
