const app = getApp()
var that;
let Charts = require('./../../utils/wxcharts.js');


Page({
  data: {
    charcter:['完美型', '给予型', '实干型', '浪漫型', '观察型', '怀疑型','享乐型','统治型','调停型'],
    numArr:[14,12,12,12,13,11,9,12,13], //题目各自数量
    imgHead:app.globalData.imgHead,
    info:[]
  },
  onLoad: function (options) {
    that = this;
    var data = JSON.parse(options.data)
    //计算对应类型个数和总数
    var result=[0,0,0,0,0,0,0,0,0];
    var max=0;
    for(var i = 0;i<data.length;i++){
      if(data[i].conform!=""){
        result[data[i].characterType-1] += 1;
        max++;
      }
    }
    // var result=[5,6,8,8,6,9,4,5,8];
    //计算性格占比
    var perArr = [];
    for(var j = 0;j<result.length;j++){
      var per = parseInt(result[j]/this.data.numArr[j]*100);
      perArr.push(per);
    }

    new Charts({
      animation: true,
      canvasId: 'canvas',
      type: 'radar',
      categories: this.data.charcter,
      series: [{
        name: '性格占比图',
        data: perArr
      }],
      width: 360,
      height: 200,
      extra: {
        radar: {
          max: 100,//雷达数值的最大值
          // gridColor:"#ffffff", //网格颜色
          // labelColor:"#2C2C2C",
        }
      }
    });

    //获取前两个类型
    var img = app.globalData.imgHead+"character-";
    var arr = [];
    var oneObj = {},twoObj = {};
    var temp = perArr.slice();
    var one = this.getMax(temp);
    oneObj.per = temp[one];
    oneObj.charcter = this.data.charcter[one];
    oneObj.img = img+(one+1)+".png";
    arr.push(oneObj);
    temp[one]=0;
    var two = this.getMax(temp);
    twoObj.per = temp[two];
    twoObj.charcter = this.data.charcter[two];
    twoObj.img = img+(two+1)+".png";
    arr.push(twoObj);

    this.setData({
      info:arr
    })
  },

  //获取最大值
  getMax: function (arr) {
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[max] < arr[i]) {
        max = i;
      }
    }
    return max;
  },

  submit: function (event) {
    app.startTest();
  },

})
