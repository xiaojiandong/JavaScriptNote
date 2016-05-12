function wxReady(data, func) {
  wx.ready(function() {
    // 分享到朋友圈
    wx.onMenuShareTimeline({
      title: data.shareTitle,
      link: data.shareLink,
      imgUrl: data.shareImg,
      success: function() {
        if (func) {
          func.timeLineSuccess();
        }
      },
      cancel: function() {
        if (func) {
          func.timeLineCancel();
        }
      }
    });
    // 分享给朋友
    wx.onMenuShareAppMessage({
      title: data.shareTitle,
      desc: data.shareDesc,
      link: data.shareLink,
      imgUrl: data.shareImg,
      type: '',
      dataUrl: '',
      success: function() {
        if (func) {
          func.appMessageSuccess();
        }
      },
      cancel: function() {
        if (func) {
          func.appMessageCancel();
        }
      }
    });
  });
}

function wxConnect(data, func) {
  $.ajax({
      url: 'http://display.6edigital.com/vcpcampaign/weixin/wxconfig',
      type: 'GET',
      dataType: 'json',
      data: {
        url: location.href.split('#')[0]
      }
    })
    .done(function(res) {
      wx.config({
        debug: false,
        appId: res.appId,
        timestamp: res.timestamp,
        nonceStr: res.nonceStr,
        signature: res.signature,
        jsApiList: [
          'onMenuShareTimeline',
          'onMenuShareAppMessage'
        ]
      });

      wxReady(data, func);
    });
}
//
//var shareData = {
//  shareTitle: '',
//  shareLink: '',
//  shareDesc: '',
//  shareImg: ''
//};
//wxConnect(shareData);
//wxReady(shareData);
