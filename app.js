var that;
App({
  onLaunch: function () {
    that = this;
  },
  //公共数据
  globalData: {
    imgHead: "https://www.thanksin.com/public/img/",  //图片头路径
    //服务请求路径
    service: {
      payUrl: "https://www.thanksin.com/public/"
    }
  },

  //提交测试
  startTest: function (event) {
    tt.request({
      url: that.globalData.service.payUrl,
      success(res) {
        console.log(res.data);
        console.log(`request调用成功`);
        that.cashier(res.data);
      },
      fail(res) {
        console.log(`request调用失败`);
      }
    });
  },

    //唤起收银台
  cashier: function (orderInfo) {
    tt.pay({
      orderInfo: orderInfo,
      service: 1,
      _debug: 1,
      getOrderStatus(res) {
        console.log("getOrderStatus" + res)
        let { out_order_no } = res;
        return new Promise(function (resolve, reject) {
          // 商户前端根据 out_order_no 请求商户后端查询微信支付订单状态
          tt.request({
            url: "<your-backend-url>",
            success(res) {
              // 商户后端查询的微信支付状态，通知收银台支付结果
              resolve({ code: 0 | 1 | 2 | 3 | 9 });
            },
            fail(err) {
              reject(err);
            }
          });
        });
      },
      success(res) {
        if (res.code == 0) {
          tt.navigateTo({
            url: `/pages/answer/answer`,
          });
          // 支付成功处理逻辑，只有res.code=0时，才表示支付成功
          // 但是最终状态要以商户后端结果为准
        }
        console.log("succ" + res)
        console.log(res)
      },
      fail(res) {
        console.log(res)
        console.log("fail" + res)
        // 调起收银台失败处理逻辑
      }
    });
  },
})
