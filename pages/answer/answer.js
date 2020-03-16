const app = getApp()
var that;
Page({
  data: {
    isStart: '', //开始测试是否点击
    go: 'true', //开始回复是否隐藏
    isShowSubmit: "true", //提交按钮显示控制
    isShowModal: false,
    officialImg: "../../resources/img/official.png",
    userImg: "../../resources/img/user.png",
    question: [
      //select:0未选择|1待选择|2已选择
      { title: "你很容易迷惑。", characterType: 9, select: 0, conform: "", inconform: "" },
      { title: "你不想成为一个喜欢批评别人的人，但很难做到。", characterType: 1, select: 0, conform: "", inconform: "" },
      { title: "你喜欢研究宇宙的道理、哲理。", characterType: 5, select: 0, conform: "", inconform: "",isLast:1},
    ]
  },
  onLoad: function () {
    that = this;
    console.log('Welcome to Mini Code')
  },

  //开始测试
  start: function (event) {
    if (this.data.isStart == "") {
      //将第一道题设置为待选择
      var tempArr = this.data.question;
      tempArr[0].select = 1;
      this.setData({
        isStart: "selected",
        go: "",
        question: tempArr,
      })
    }
  },

  //选择
  select: function (event) {
    var tempArr = this.data.question;
    var param = event.target.dataset;
    //更新选项状态
    tempArr[param.id].inconform = "";
    tempArr[param.id].conform = "";
    tempArr[param.id].select = 2;
    if (param.status == 1) {
      tempArr[param.id].inconform = "selected";
    } else {
      tempArr[param.id].conform = "selected";
    }
    //下一个选项设置为待选择
    if (tempArr[param.id + 1] != null && tempArr[param.id + 1].select == 0) {
      tempArr[param.id + 1].select = 1;
    }
    this.setData({
      question: tempArr,
    })

    //最后一个弹框
    if (tempArr[param.id + 1] == null && this.data.isShowModal == false) {
      this.setData({
        isShowModal: true,
      })
      tt.showModal({
        content: "已经答完全部测试题啦！",
        confirmText: "查看结果",
        cancelText: "检查一下",
        success(res) {
          if (res.confirm) {
            that.submit();
          } else if (res.cancel) {
            that.setData({
              isShowSubmit: "",
            })
          } else {
            // what happend?
          }
        },
        fail(res) {
          console.log(`showModal调用失败`);
        }
      });
    }
  },

  //提交
  submit: function (event) {
    var data = JSON.stringify(that.data.question);
    tt.redirectTo({
      url: `/pages/result/result?data=`+data,
      success(res) {
        console.log(`${res}`);
      },
      fail(res) {
        console.log(`navigateTo调用失败`);
      }
    });

  },



})
