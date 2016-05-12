/**
 * Created by Lihu on 2016/5/6.
 */

/**
 * 微信分享：
 * 在body里面先导入：
 * <script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
 * 再导入：
 * <script src='index.js'></script>
 */

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

// 对外暴露的两个方法
//var shareData = { // 一般分享出去的信息，在ajax获取信息，请求成功之后操作
//  shareTitle: '', // 分享标题
//  shareLink: '', // 分享链接
//  shareDesc: '', // 分享描述
//  shareImg: '' // 分享img
//};
//wxConnect(shareData); // 只需在外部调用这两个方法
//wxReady(shareData);

 
    /*
     * html事例：
     *   第1个input 
     *   <div class="file-img-wrap js_file_img_wrap1">
     *     <input type="file" capture="camera" accept="image/*" data-fileId="0" class="js_inp_file1 common-file-inp">
     *   </div>
     *   先导入上传img的库 lrz.bundle.js
     *   <script src="scripts/lrz.bundle.js"></script>
     * js调用：
     *  // 第1个输入框
     *   var jsInpFile1Obj = $('.js_inp_file1'); // 获取input框
     *   var jsFileImgWrap1Obj = $('.js_file_img_wrap1'); // 获取存储img的容器
     *   upLoadImgFile( jsInpFile1Obj , jsFileImgWrap1Obj );
     */
  /**
   * 封装一个方法，用于上传当前input的图片
   */
  function upLoadImgFile( inpObj , imgWrapObj){ // 输入框节点，存放输入框和追加img的父容器(一个容器+一个input框+一张img)
    inpObj.on('change', function(){
      var that = this;
      //lrz(that.files[0] , {width : 143 , fieldName: 'photo'})
      lrz(that.files[0] , {width : 555}) // 设置上传img的宽度
        .then(function (rst) {
          var dataFileId = inpObj.attr('data-fileId'); // 当前点击的input节点的索引值
          var imgsLen = imgWrapObj.find('img').length;
          //console.log('当前容器内img的长度');
          //console.log(imgsLen);
          if( imgsLen >= 1 ){ // 容器内已经存在上一张img
            imgWrapObj.find('img').remove(); // 删除上一张img
          }

          // img应该在ajax请求成功之后追加到节点中
          var img = new Image();
          img.src = rst.base64;
          uploadImgArr[dataFileId] = rst.base64; // uploadImgArr 全局数组，用户存放用户上传的img信息

          img.className = 'js_up_load_new_img_'+ dataFileId;
          img.onload = function () {
            imgWrapObj.append(img); // 将上传的img追加到父容器内
            // 适配用户上传的img，并做定位
            calculateUpLoadImgPosition( dataFileId );
          };
          return rst;
          // todo ajax传递给服务端
        })
        .catch(function (err) {
        })
        .always(function () {
        });
    });

    // 动态计算页面上传的img居中显示
    function calculateUpLoadImgPosition( dataFileId ){
      var BOX_COMTAINER_W = 143; // 存放img容器的宽高，常量
      var BOX_COMTAINER_H = 143;
      var currentNewImgObj = $('.js_up_load_new_img_' + dataFileId); // 当前上传的img对象
      // 当前上传的img宽高
      var currentImgWidth = currentNewImgObj.width();
      var currentImgHeight = currentNewImgObj.height();
      // 求出当前上传的img宽高比
      var percentWidthAndHeight = (currentImgWidth / currentImgHeight).toFixed(2); // 保留两位小数
      /**
       * todo
       * 容器的宽高 143 * 143
       * 1：W>H，则定宽，高度自适应
       * 2: W<H，则定高，宽度自适应
       */
      if( percentWidthAndHeight > 1 ){ // w > h ，定宽 143px
        //var topDistance = (BOX_COMTAINER_H - currentImgHeight) / 2; // 距离顶部高度
        var seeImgW = ((currentImgHeight / currentImgWidth) * BOX_COMTAINER_W).toFixed(4);
        var topDistance = (BOX_COMTAINER_H - seeImgW) / 2;
        currentNewImgObj.css({
          'top' : topDistance +'px',
          'width' : BOX_COMTAINER_W + 'px'
        });
      }else{ // 定高 143px
        var afterScaleW = (BOX_COMTAINER_H * percentWidthAndHeight).toFixed(2);
        var leftDistance = (BOX_COMTAINER_W - afterScaleW) / 2; // 距离左边高度
        currentNewImgObj.css({
          'left' : leftDistance +'px',
          'height' : BOX_COMTAINER_H + 'px',
          'width' : afterScaleW + 'px'
        });
      }
    }
  }


/**
 * jquery ajax请求
 */
 function ajaxServer( userInfoData ){ // userInfoData -> 存储用户提交的数据
    $.ajax({
      url: 'http://yslstaticcontent.6edigital.cn/moetphotoweb/web/index.php?r=card%2Fcreate',
      type: 'post',
      data: { // 需要返还给服务端的数据
        username : userInfoData.username,
        sex : userInfoData.sex, // 0 -> 男，1 -> 女
        imgpath1 : userInfoData.uploadImgArr[0], // 第1张img 的信息 ( 必须保证至少一个不为空，照片未传，则显示"" )
        imgpath2 : userInfoData.uploadImgArr[1], // 第2张img 的信息
        imgpath3 : userInfoData.uploadImgArr[2]  // 第3张img 的信息
      },
      dataType: 'json',
      //timeout: 200000,
      error: function(){
        console.log('请求失败');
      },
      success: function( resData ){
        console.log('请求成功');
        console.log(resData);
        // 请求成功后，页面跳转，并且在url后面带上用户id
        location.href = 'thanksLetter.html?userid=' + resData.data.id;
      }
    });
  }
