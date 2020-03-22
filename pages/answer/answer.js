const app = getApp()
var that;
Page({
  data: {
    isStart: '', //开始测试是否点击
    go: 'true', //开始回复是否隐藏
    isShowSubmit: "true", //提交按钮显示控制
    isShowModal: false,
    officialImg: app.globalData.imgHead + "official.png",
    userImg: app.globalData.imgHead + "user.png",
    question: [
      //select:0未选择|1待选择|2已选择
      { title: "你很容易迷惑。", characterType: 9, select: 0, conform: "", inconform: "" },
      { title: "你不想成为一个喜欢批评别人的人，但很难做到。", characterType: 1, select: 0, conform: "", inconform: "" },
      { title: "你喜欢研究宇宙的道理、哲理。", characterType: 5, select: 0, conform: "", inconform: "" },
      { title: "你很注意自己是否年轻，因为那是找乐子的本钱。", characterType: 7, select: 0, conform: "", inconform: "" },
      { title: "你喜欢独立自主，一切都靠自己。", characterType: 8, select: 0, conform: "", inconform: "" },
      { title: "当你有困难时，你会试着不让人知道。", characterType: 2, select: 0, conform: "", inconform: "" },
      { title: "被人误解对你而言是一件十分让人痛苦的事。", characterType: 4, select: 0, conform: "", inconform: "" },
      { title: "施比受会给你更大的满足感。", characterType: 2, select: 0, conform: "", inconform: "" },
      { title: "你常常设想最糟的结果而使自己陷入苦恼中。", characterType: 6, select: 0, conform: "", inconform: "" },
      { title: "你常常试探或考验朋友、伴侣的忠诚。", characterType: 6, select: 0, conform: "", inconform: "" },
      { title: "你看不起那些不像你一样坚强的人，有时你会用种种方式羞辱他们。", characterType: 8, select: 0, conform: "", inconform: "" },
      { title: "身体上的舒适对你非常重要。", characterType: 9, select: 0, conform: "", inconform: "" },
      { title: "你能触碰生活中的悲伤和不幸。", characterType: 4, select: 0, conform: "", inconform: "" },
      { title: "别人不能完成他的分内事，会令你失望和愤怒。", characterType: 1, select: 0, conform: "", inconform: "" },
      { title: "你时常拖延问题，不去解决。", characterType: 9, select: 0, conform: "", inconform: "" },
      { title: "你喜欢戏剧性的、多彩多姿的生活。", characterType: 7, select: 0, conform: "", inconform: "" },
      { title: "你认为自己的性格非常的不完善。", characterType: 4, select: 0, conform: "", inconform: "" },
      { title: "你对感官的需求特别强烈，喜欢美食、服装、身体的触觉刺激，并纵情享乐。", characterType: 7, select: 0, conform: "", inconform: "" },
      { title: "当别人请教你一些问题，你会巨细无遗地给他分析得很清楚。", characterType: 5, select: 0, conform: "", inconform: "" },
      { title: "你习惯推销自己，从不觉得难为情。", characterType: 3, select: 0, conform: "", inconform: "" },
      { title: "有时你会放纵自己，或做出偕越职权的事。", characterType: 7, select: 0, conform: "", inconform: "" },
      { title: "帮助不到别人会让你觉得痛苦。", characterType: 2, select: 0, conform: "", inconform: "" },
      { title: "你不喜欢人家问你涉及面广泛而又笼统的问题。", characterType: 5, select: 0, conform: "", inconform: "" },
      { title: "在某方面你有放纵的倾向(例如食物、药物等)。", characterType: 8, select: 0, conform: "", inconform: "" },
      { title: "你宁愿适应别人，包括你的伴侣，也不会反抗他们。", characterType: 9, select: 0, conform: "", inconform: "" },
      { title: "你最不喜欢的一种个性就是虚伪。", characterType: 6, select: 0, conform: "", inconform: "" },
      { title: "你知错能改，但由于执着好强，周围的人还是感觉有压力。", characterType: 8, select: 0, conform: "", inconform: "" },
      { title: "你常觉得很多事情都很好玩，很有趣，人生真是快乐。", characterType: 7, select: 0, conform: "", inconform: "" },
      { title: "你有时很欣赏自己充满权威，有时却又优柔寡断，依赖别人。", characterType: 6, select: 0, conform: "", inconform: "" },
      { title: "你习惯付出多于接受。", characterType: 2, select: 0, conform: "", inconform: "" },
      { title: "面对威胁时，你一边变得焦虑，一边对抗迎面而来的危险。", characterType: 6, select: 0, conform: "", inconform: "" },
      { title: "你通常是等别人来接近你，而不是你去接近他们。", characterType: 5, select: 0, conform: "", inconform: "" },
      { title: "你喜欢当主角，希望得到大家的注意。", characterType: 3, select: 0, conform: "", inconform: "" },
      { title: "别人批评你，你也不会回应和辩解，因为你不想发生任何争执与冲突。", characterType: 9, select: 0, conform: "", inconform: "" },
      { title: "你有时期待别人的指导，有时却忽略别人的忠告径直去做你想做的事。", characterType: 6, select: 0, conform: "", inconform: "" },
      { title: "你经常忘记自己的需要。", characterType: 9, select: 0, conform: "", inconform: "" },
      { title: "在重大危机中，你通常能克服你对自己的质疑和内心的焦虑。", characterType: 6, select: 0, conform: "", inconform: "" },
      { title: "你是一个天生的推销员，说服别人对你来说是一件容易的事。", characterType: 3, select: 0, conform: "", inconform: "" },
      { title: "你不会相信一个你一直都无法了解的人。", characterType: 9, select: 0, conform: "", inconform: "" },
      { title: "你喜欢依惯例行事，不大喜欢改变。", characterType: 8, select: 0, conform: "", inconform: "" },
      { title: "你很在乎家人，在家中表现得忠诚而有包容心。", characterType: 9, select: 0, conform: "", inconform: "" },
      { title: "你被动而优柔寡断。", characterType: 5, select: 0, conform: "", inconform: "" },
      { title: "你很有包容心，彬彬有礼，但跟人的感情互动不深。", characterType: 5, select: 0, conform: "", inconform: "" },
      { title: "你沉默寡言，好像不会关心别人似的。", characterType: 8, select: 0, conform: "", inconform: "" },
      { title: "当沉浸在工作或你擅长的领域时，别人会觉得你冷酷无情。", characterType: 6, select: 0, conform: "", inconform: "" },
      { title: "你常常保持警觉。", characterType: 6, select: 0, conform: "", inconform: "" },
      { title: "你不喜欢要对人尽义务的感觉。", characterType: 5, select: 0, conform: "", inconform: "" },
      { title: "如果不能完美地表达，你宁愿不说。", characterType: 5, select: 0, conform: "", inconform: "" },
      { title: "你的计划比你实际完成的还要多", characterType: 7, select: 0, conform: "", inconform: "" },
      { title: "你野心勃勃，喜欢挑战和登上高峰的经验。", characterType: 8, select: 0, conform: "", inconform: "" },
      { title: "你倾向于独断专行并自己解决问题", characterType: 5, select: 0, conform: "", inconform: "" },
      { title: "你很多时候感到被遗弃。", characterType: 4, select: 0, conform: "", inconform: "" },
      { title: "你常常表现得十分忧郁，充满痛苦而且内向", characterType: 4, select: 0, conform: "", inconform: "" },
      { title: "初见陌生人时，你会表现得很冷漠、高傲。", characterType: 4, select: 0, conform: "", inconform: "" },
      { title: "你的面部表情严肃而生硬", characterType: 1, select: 0, conform: "", inconform: "" },
      { title: "你情绪飘忽不定，常常不知自己下一刻想要做什么。", characterType: 4, select: 0, conform: "", inconform: "" },
      { title: "你常对自己挑剔，期望不断改善自己的缺点，以成为一个完美的人", characterType: 1, select: 0, conform: "", inconform: "" },
      { title: "你感受特别深刻，并怀疑那些总是很快乐的人", characterType: 4, select: 0, conform: "", inconform: "" },
      { title: "你做事有效率，也会找捷径，模仿力特强。", characterType: 3, select: 0, conform: "", inconform: "" },
      { title: "你讲理、重实用", characterType: 1, select: 0, conform: "", inconform: "" },
      { title: "你有很强的创造天分和想象力，喜欢将事情重新整合。", characterType: 4, select: 0, conform: "", inconform: "" },
      { title: "你不要求得到很多的关注", characterType: 9, select: 0, conform: "", inconform: "" },
      { title: "你喜欢每件事都井然有序，但别人会认为你过分执着。", characterType: 1, select: 0, conform: "", inconform: "" },
      { title: "你渴望拥有完美的心灵伴侣", characterType: 4, select: 0, conform: "", inconform: "" },
      { title: "你常夸耀自己，对自己的能力十分有信心", characterType: 3, select: 0, conform: "", inconform: "" },
      { title: "如果周遭的人行为太过分，你准会让他难堪", characterType: 8, select: 0, conform: "", inconform: "" },
      { title: "你外向、精力充沛，喜欢不断追求成就，这使你自你感觉良好。", characterType: 3, select: 0, conform: "", inconform: "" },
      { title: "你是一位忠实的朋友和伙伴。", characterType: 6, select: 0, conform: "", inconform: "" },
      { title: "你知道如何让别人喜欢你", characterType: 2, select: 0, conform: "", inconform: "" },
      { title: "你很少看到别人的功劳和好处", characterType: 3, select: 0, conform: "", inconform: "" },
      { title: "你很容易知道别人的功劳和好处。", characterType: 2, select: 0, conform: "", inconform: "" },
      { title: "你嫉妒心强，喜欢跟别人比较", characterType: 3, select: 0, conform: "", inconform: "" },
      { title: "你对别人做的事总是不放心，批评一番后，自己会动手再做。", characterType: 1, select: 0, conform: "", inconform: "" },
      { title: "别人会说你常戴着面具做人。", characterType: 3, select: 0, conform: "", inconform: "" },
      { title: "有时你会激怒对方，引来莫名其妙的吵架，其实是想试探对方爱不爱你", characterType: 6, select: 0, conform: "", inconform: "" },
      { title: "你会极力保护你所爱的人", characterType: 8, select: 0, conform: "", inconform: "" },
      { title: "你常常刻意保持兴奋的情绪。", characterType: 3, select: 0, conform: "", inconform: "" },
      { title: "你只喜欢与有趣的人为友，对一些闷蛋则懒得交往，即使他们看来很有深度", characterType: 7, select: 0, conform: "", inconform: "" },
      { title: "你常往外跑，四处帮助别人", characterType: 2, select: 0, conform: "", inconform: "" },
      { title: "有时你会讲求效率而牺牲完美和原则", characterType: 3, select: 0, conform: "", inconform: "" },
      { title: "你似乎不太懂得幽默，没有弹性", characterType: 1, select: 0, conform: "", inconform: "" },
      { title: "你待人热情而有耐性", characterType: 2, select: 0, conform: "", inconform: "" },
      { title: "在人群中你时常感到害羞和不安。", characterType: 5, select: 0, conform: "", inconform: "" },
      { title: "你喜欢效率，讨厌拖泥带水。", characterType: 8, select: 0, conform: "", inconform: "" },
      { title: "帮助别人达至快乐和成功是你重要的成就。", characterType: 2, select: 0, conform: "", inconform: "" },
      { title: "付出时，别人若不欣然接纳，你便会有挫折感。", characterType: 2, select: 0, conform: "", inconform: "" },
      { title: "你的肢体硬邦邦的，不习惯别人热情地付出。", characterType: 1, select: 0, conform: "", inconform: "" },
      { title: "你对大部分的社交集会不太有兴趣，除非参加集会的是你熟识的和喜爱的人。", characterType: 5, select: 0, conform: "", inconform: "" },
      { title: "很多时候你会有强烈的寂寞感", characterType: 2, select: 0, conform: "", inconform: "" },
      { title: "人们很乐意向你表白他们所遭遇的问题。", characterType: 2, select: 0, conform: "", inconform: "" },
      { title: "你不但不会说甜言蜜语，而且别人也会觉得你唠叨不停。", characterType: 1, select: 0, conform: "", inconform: "" },
      { title: "你常担心自由被剥夺，因此不爱作承诺。", characterType: 7, select: 0, conform: "", inconform: "" },
      { title: "你喜欢告诉别人你所做的事和所知的一切。", characterType: 3, select: 0, conform: "", inconform: "" },
      { title: "你很容易认同别人所做的事和所知的一切。", characterType: 9, select: 0, conform: "", inconform: "" },
      { title: "你要求光明正大，为此不惜与人发生冲突。", characterType: 8, select: 0, conform: "", inconform: "" },
      { title: "你很有正义感，有时会支持不利的一方。", characterType: 8, select: 0, conform: "", inconform: "" },
      { title: "你因注重小节而效率不高。", characterType: 1, select: 0, conform: "", inconform: "" },
      { title: "你容易感到沮丧和麻木更多于愤怒。", characterType: 9, select: 0, conform: "", inconform: "" },
      { title: "你不喜欢那些有侵略性或过度情绪化的人。", characterType: 5, select: 0, conform: "", inconform: "" },
      { title: "你非常情绪化，喜怒哀乐变化无常。", characterType: 4, select: 0, conform: "", inconform: "" },
      { title: "你不想别人知道你的感受与想法，除非你告诉他们。", characterType: 5, select: 0, conform: "", inconform: "" },
      { title: "你喜欢刺激和紧张的关系，而不是稳定和依赖的关系。", characterType: 1, select: 0, conform: "", inconform: "" },
      { title: "你很少用心去听别人的谈话，只喜欢说俏皮话和笑话。", characterType: 7, select: 0, conform: "", inconform: "" },
      { title: "你是循规蹈矩的人，秩序对你十分有意义。", characterType: 1, select: 0, conform: "", inconform: "" },
      { title: "你很难找到一种能让你真正感到被爱的关系。", characterType: 4, select: 0, conform: "", inconform: "" },
      { title: "假如你想要结束一段关系，你不是直接告诉对方就是激怒他让他离开你。", characterType: 1, select: 0, conform: "", inconform: "" },
      { title: "你温和平静，不自夸，不爱与人竞争。", characterType: 9, select: 0, conform: "", inconform: "" },
      { title: "你有时善良可爱，有时又粗野暴躁，很难捉摸。", characterType: 9, select: 0, conform: "", inconform: "", isLast: 1 },
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
    this.setData({
      question: tempArr,
    })
    //下一个选项设置为待选择
    if (tempArr[param.id + 1] != null && tempArr[param.id + 1].select == 0) {
      tempArr[param.id + 1].select = 1;
      this.setData({
        question: tempArr,
      }, function () {
        //页面下拉
        tt.pageScrollTo({
          scrollTop: param.id * 1000,
          duration: 1,
        });
      })
    }

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
      url: `/pages/result/result?data=` + data,

    });

  },



})
