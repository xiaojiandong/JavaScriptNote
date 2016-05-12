//console.log('\'Allo \'Allo!');

$(function(){
  var userInfoData = {}; // 接收用户的信息
  var userUpLoadImgs = []; // 获取上级页面用户上传的img
  var userId = SIXE.Util.getValueFromHrefByKey('userid'); // 获取url参数

  var friendsShow1 = SIXE.Util.getValueFromHrefByKey('friendsShow'); // 获取url参数
  if( friendsShow1 == 1 ){ // 分享出去的页面
    //$('.common-button').show();
    console.log('现在是分享出去的页面 ： &friendsShow=1');
    $('.js_make_again_btn').on('click',function(){ // 跳转到首页
      //location.href = 'http://display.6edigital.com/vcpDomPerinon/';
    });
    $('.js_button_wrap').hide();
    $('.js_user_info_wrap').show();
    //$('.js_user_name_sex').html(userInfoData.username + userInfoData.sex);
  }

  // 初始化获取用户信息
  $.ajax({
     url : 'http://yslstaticcontent.6edigital.cn/moetphotoweb/web/index.php?r=card%2Fone',
     type : 'POST',
     data : {
        id : userId
     },
    dataType : 'json',
    error : function(){
    },
    success : function( resData ){
      console.log('结果页面请求成功：');
      console.log(resData);
      var imgUrl = 'http://yslstaticcontent.6edigital.cn/moetphotoweb/web/';
      //console.log('resData.data.imgpath1 : ');
      //console.log(resData.data.imgpath1);
      //console.log('resData.data.imgpath2 : ');
      //console.log(resData.data.imgpath2);
      //console.log('resData.data.imgpath3 : ');
      //console.log(resData.data.imgpath3);
      var imgPathList = [];
      imgPathList[0] = resData.data.imgpath1;
      imgPathList[1] = resData.data.imgpath2;
      imgPathList[2] = resData.data.imgpath3;
      //console.log('imgPathList');
      //console.log(imgPathList);
      $.each(imgPathList , function(index , value){
        //console.log(index + " : " + value);
        if(value != '' ){
          userUpLoadImgs.push(imgUrl + value);
        }
      });
      //console.log(userUpLoadImgs);
      //console.log('用户上传的长度 ： ' + userUpLoadImgs.length);
      //userUpLoadImgs[0] = imgUrl + resData.data.imgpath1;
      //userUpLoadImgs[1] = imgUrl + resData.data.imgpath2;
      //userUpLoadImgs[2] = imgUrl + resData.data.imgpath3;
      userInfoData.userUpLoadImgs = userUpLoadImgs; // 用户上传的img
      if( resData.data.sex == 0 ){
        userInfoData.sex = '先生';
      }else{
        userInfoData.sex = '女士';
      }
      userInfoData.username = resData.data.username; // 用户名字
      userInfoData.id = resData.data.id; // 用户id

      $('.js_user_name_sex').html(userInfoData.username + userInfoData.sex + ' 亲启');
      // 请求数据成功后，点击预览，跳转到预览页面
      $('.js_preview_btn').on('click' , function(){
        $('.js_user_info_wrap').show();
        $('.js_button_wrap').hide();
        //console.log(userInfoData);
      });
      // 点击翻开信封
      onOpenLetterWrapClick( userInfoData );


      var friendsShow = 1; // 分享给朋友看到的，链接后面加上参数
      // 微信分享
      var shareData = {
        shareTitle: userInfoData.username + userInfoData.sex + '分享的标题',
        shareLink: window.location.href + "&friendsShow=" + friendsShow,
        shareDesc: userInfoData.username + userInfoData.sex + '分享出去的描述',
        shareImg: 'http://yslstaticcontent.6edigital.cn/moetphotoweb/web/card/0afb25a9-3c0d-f636-beac-3fbc4f919c7a_1.jpg'
      };
      wxConnect(shareData);
      wxReady(shareData);

    }
  });


  $('.js_swiper_contanier_wrap_big').hide(); // 初始化大swiper隐藏
  //$('.js_outer_bg_wrap').hide(); // 初始化首页隐藏
  //$('.js_user_upload_imgs').show();

  var winW = $(window).width(); // 窗口的宽高
  var winH = $(window).height();
  calculateContainerWidthAndHeight();
  /**
   * 计算swiper的宽高
   */
  function calculateContainerWidthAndHeight(){
    $('.js_swiper_contanier_wrap_big').css({
      'width' : winW + 'px',
      'height' : winH + 'px'
    });
    $('.swiper-container-big').css({
      'width' : winW + 'px',
      'height' : winH + 'px'
    });
    $('.swiper-wrapper').css({
      'width' : winW + 'px',
      'height' : winH + 'px'
    });
    $('.js_outer_bg_wrap').css({
      'width' : winW + 'px'
      //'height' : winH + 'px'
    });
  }
  $('.js_swiper_contanier_wrap_big').css({
    //"background-image" : "url(../images/dom-perignon-bg.jpg)"
  });

  // 翻盖信封
 function onOpenLetterWrapClick( userInfoData ){
   $('.js_user_info_wrap').on('click' , function(){
     $('.js_letter_top').addClass('letter-top-animate');
     $('.js_user_info_wrap').hide();
     // 信封整天下移
     $('.js_letter_wrap').addClass('letter-wrap-animate'); // 1800毫秒动画

     setTimeout(function(){
       $('.js_outer_bg_wrap').fadeOut(200);
     },1800);

     setTimeout(function(){

       //$('.js_outer_bg_wrap').fadeOut(200);
       //setTimeout(function(){
       //
       //},200);

       $('.js_outer_bg_wrap').remove();

       $('.js_swiper_contanier_wrap_big').show(0); // 显示swiper容器
       // 取服务端的数据：臻致的 xxx 先生/女士
       $('.js_best_user_name').html(userInfoData.username + " " + userInfoData.sex);
       var swiper = new Swiper('.swiper-container-big', { // new 出swiper对象
         pagination: '.swiper-pagination',
         paginationClickable: true,
         direction: 'vertical',
         onInit : function(swiper){
           this.onSlideChangeEnd(swiper);
         },
         // 每次滑动结束后的回调
         onSlideChangeEnd : function(swiper){
           var currentIndex = swiper.activeIndex; // 当前swiper的索引
           //console.log('当前索引： ' + currentIndex);
           changeSwiperPageState( currentIndex );
         }
       });

       // 改变swiper里面的页面的状态
       function changeSwiperPageState( index ){
         if( index == 0 ){
           $('.js_words_animate1').addClass(' words-animate1');
           $('.js_words_animate2').addClass(' words-animate2');
           $('.js_arrow_down').show();
         }else if( index == 1 ){
           $('.js_page2_words').fadeIn(600);
           $('.js_arrow_down').show();
         }else{
           $('.js_arrow_down').hide();
         }
       }
       newSmallSwiper( userInfoData ); // 创建新的小swiper
     } , 2000);

     $('.js_swiper_slide_big').css({
       'width' : winW + 'px',
       'height' : winH + 'px'
     });
   });
 }

  // 点击发送，弹出分享层
  $('.js_send_btn').on('click' , function(){
    $('.js_send_friends_mask').show();
    // todo 微信接口，分享给好友，分享成功后，遮罩层移除
    //SIXE.Alert.show('分享给好友');
  });
  // 点击遮罩层，隐藏
  $('.js_send_friends_mask').on('click',function(){
    $('.js_send_friends_mask').hide();
  });

  function newSmallSwiper( userInfoData ){
    $('.js_user_upload_imgs').show();
    //var imgsLen = $('.js_user_upload_imgs').find('img').length;
    var smallImgsList = [];
    $.each(userInfoData.userUpLoadImgs , function(index , value){
      if( value != '' ){
        smallImgsList.push(value);
      }
    });
    //console.log('新建的 smallImgsList ：');
    //console.log(smallImgsList);
    //console.log( '新建的smallImgsList长度：' + smallImgsList.length);

    if( userInfoData.userUpLoadImgs.length == 1 ){ // 用户只上传了1张img
      $(".js_small_img_common").attr("src",userInfoData.userUpLoadImgs[0]);
      $('.swiper-button-next').hide();
      $('.swiper-button-prev').hide();
    }else{
      if(userInfoData.userUpLoadImgs.length == 2){ // 用户上传了2张img
        $('.js_small_img_0').attr('src' , userInfoData.userUpLoadImgs[0]);
        $('.js_small_img_1').attr('src' , userInfoData.userUpLoadImgs[1]);
        $('.js_swiper_slide_small_2').remove(); // 最后一张站位img删除
      }else if(userInfoData.userUpLoadImgs.length == 3){ // 用户上传了3张img
        $('.js_small_img_0').attr('src' , userInfoData.userUpLoadImgs[0]);
        $('.js_small_img_1').attr('src' , userInfoData.userUpLoadImgs[1]);
        $('.js_small_img_2').attr('src' , userInfoData.userUpLoadImgs[2]);
      }
      var smallSwiper = new Swiper('.js_swiper_container_small', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2000,
        autoplayDisableOnInteraction: false,
        loop: true
      });
    }
    $('.js_imgs_carousel_wrap').append( $('.js_user_upload_imgs') );
  }


  // 分享接口调用
  //var shareData = {
  //  shareTitle: '',
  //  shareLink: '',
  //  shareDesc: '',
  //  shareImg: ''
  //};


  //分享到朋友圈
  //wx.onMenuShareTimeline({
  //  title: share_title, // 分享标题
  //  link: share_url, // 分享链接
  //  imgUrl: share_pic, // 分享图标
  //  success: function() {
  //    //alert('用户确认分享到朋友圈');
  //    // 用户确认分享后执行的回调函数
  //    //submitPhone();
  //  },
  //  cancel: function() {
  //    //alert('用户取消分享到朋友圈');
  //    // 用户取消分享后执行的回调函数
  //  }
  //});
  //
  //
  ////分享给朋友
  //wx.onMenuShareAppMessage({
  //  title: share_friend_title, // 分享标题
  //  desc: share_friend_des, // 分享描述
  //  link: share_url, // 分享链接
  //  imgUrl: share_pic, // 分享图标
  //  type: '', // 分享类型,music、video或link，不填默认为link
  //  dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
  //  success: function() {
  //    //alert('用户确认分享给朋友');
  //    // 用户确认分享后执行的回调函数
  //    //submitPhone();
  //  },
  //  cancel: function() {
  //    //alert('用户取消分享给朋友');
  //    // 用户取消分享后执行的回调函数
  //  }
  //});


});

