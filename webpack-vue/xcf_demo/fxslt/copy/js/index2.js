


// 处理首页动画
var firstPageAnimateShow = function(){
    $('.js_xcf_logo').show();
    $('.js_page1_title1').show();
    $('.js_page1_title2').show();
    setTimeout(function(){
        $('.js_page1_time').fadeIn(600);
    },800);
    $('.js_my_campus').css('background','#03021f');

    $('.js_page1_bg_img').fadeIn(300);
};
var firstPageAnimateHide = function(){
    //alert('第一个页面隐藏动画');
    //$('.js_xcf_logo').addClass('xcf-animate-hide');
    //$('.js_xcf_logo').hide();
    $('.js_xcf_logo').fadeOut(400);
    $('.js_page1_title1').fadeOut(400);
    $('.js_page1_title2').fadeOut(400);
    $('.js_page1_time').fadeOut(400);
    $('.js_page1_bg_img').fadeOut(400);
    //$('.js_page1_time').hide();

};

// 注意事项函数
var showNoticeTips = function( callback ){
    $('.js_page1_notice_wrap').show();
    $('.js_notices_tip_img_wrap').show();

    // 首页注意事项，关闭弹窗
    $('.js_close_img_btn1').on('touchstart',function( ){
        $('.js_page1_notice_wrap').hide();
        // 往body插入js
        document.body.append(newScript);
//            alert('处理首页动画');
        firstPageAnimateShow();
    });

    callback && callback();
};

// 隐藏第2页中，论坛议程word和论坛简介word
var ltycAndLtjjHide = function () {
    $('.js_ltyc_words').fadeOut(400);
    $('.js_lt_desc').fadeOut(400);
};
// 显示第2页中，论坛议程word和论坛简介word
var ltycAndLtjjShow = function () {
    $('.js_ltyc_words').show();
    $('.js_lt_desc').show();
};


// 第3个页面，显示新财富新品-新财富学院
var part3XcfXueYuanShow = function(){
    //alert('第3个页面，显示新财富新品-新财富学院');
    //$('.js_xcf_xinpin').show();
    $('.js_xcf_xinpin').fadeIn(0);
    $('.js_xcf_xueyuan').show();
    $('.js_ting_jiang').show();
    $('.js_xue_yuan_words').show();
};

// 第3个页面，隐藏新财富新品-新财富学院
var part3XcfXueYuanHide = function(){
    //alert('隐藏隐藏新财富新品-新财富学院');
    $('.js_xcf_xinpin').fadeOut(400);
    $('.js_xcf_xueyuan').fadeOut(400);
    $('.js_ting_jiang').fadeOut(400);
    $('.js_xue_yuan_words').fadeOut(400);
};

// 第4个页面，隐藏投研圈
var part4TouHangHide = function(){
      //alert('第4个页面，隐藏投行圈');
    $('.js_tou_yan_quan').fadeOut(400);
    $('.js_tou_zi_quan_words').fadeOut(400);
    $('.js_xcf_xinpin1').fadeOut(400);
};
// 第4个页面，显示投研圈
var part4TouHangShow = function(){
    //alert('第4个页面，隐藏投行圈');
    $('.js_xcf_xinpin1').show();
    $('.js_tou_yan_quan').show();
    $('.js_tou_zi_quan_words').show();
};

// 第5个页面，显示二维码
var part5RqCodeShow = function(){
    $('.js_qr_coad').show();
};
// 第5个页面，隐藏二维码
var part5RqCodeHide = function(){
    $('.js_qr_coad').fadeOut(400);
};