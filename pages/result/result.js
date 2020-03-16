const app = getApp()
var that;
let Charts = require('./../../utils/wxcharts.js');


Page({
  data: {
    charcter:['完美型', '给予型', '实干型', '浪漫型', '观察型', '怀疑型','享乐型','统治型','调停型'],
    info:[]
  },
  onLoad: function (options) {
    that = this;
    var data = JSON.parse(options.data)
    // console.log(data)
    // var data = [
    //   //select:0未选择|1待选择|2已选择
    //   { title: "你很容易迷惑。", characterType: 9, select: 0, conform: "try", inconform: "" },
    //   { title: "你不想成为一个喜欢批评别人的人，但很难做到。", characterType: 1, select: 0, conform: "try", inconform: "" },
    //   { title: "你喜欢研究宇宙的道理、哲理。", characterType: 5, select: 0, conform: "", inconform: "",isLast:1},
    // ];
    //计算对应类型个数和总数
    var result=[0,0,0,0,0,0,0,0,0];
    var max=0;
    for(var i = 0;i<data.length;i++){
      if(data[i].conform!=""){
        result[data[i].characterType-1] += 1;
        max++;
      }
    }
    new Charts({
      animation: true,
      canvasId: 'canvas',
      type: 'radar',
      categories: this.data.charcter,
      series: [{
        name: '性格占比图',
        data: result
      }],
      width: 360,
      height: 200,
      extra: {
        radar: {
          max: max,//雷达数值的最大值
          // labelColor:"#2C2C2C",
        }
      }
    });

    //获取前两个类型
    var img = "../../resources/img/character-";
    var arr = [];
    var oneObj = {},twoObj = {};
    var temp = result.slice();
    var one = this.getMax(temp);
    oneObj.per = temp[one]/max*100;
    oneObj.charcter = this.data.charcter[one];
    oneObj.img = img+(one+1)+".png";
    arr.push(oneObj);
    temp[one]=0;
    var two = this.getMax(temp);
    twoObj.per = temp[two]/max*100;
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
    tt.redirectTo({
      url: `/pages/answer/answer`,
    });
  },

})
