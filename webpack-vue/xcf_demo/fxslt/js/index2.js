


$(function(){

    $('.my-part3 , .my-part4, .my-part5 , .my-part6').css('height','100%');
});

// 处理首页动画
var firstPageAnimateShow = function(){
    $('.js_xcf_logo').show();
    $('.js_page1_title1').show();
    $('.js_page1_title2').show();
    setTimeout(function(){
        $('.js_page1_time').fadeIn(600);
    },400);
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
        //document.body.append(newScript);
//            alert('处理首页动画');
//        firstPageAnimateShow();
    });

    callback && callback();
};

// 隐藏第2页中，论坛议程word和论坛简介word
var ltycAndLtjjHide = function () {
    $('.js_ltyc_words').fadeOut(400);
    $('.js_lt_desc').fadeOut(400);
    $('.js_tip_img').fadeOut(400);
};
// 显示第2页中，论坛议程word和论坛简介word
var ltycAndLtjjShow = function () {
    $('.js_ltyc_words').show();
    $('.js_lt_desc').show();
    $('.js_tip_img').show();
};

// 处理page2 星星页面的呈现/隐藏
var starsPage2View = function(){

    return {
        show : function(){

        },
        hide : function(){

        }
    }
};

// 处理page3 拍照页面的呈现/隐藏
var photoPage3View = function(){
    return {
        show : function(){
            $('.js_page3_wrap').fadeIn(400);
        },
        hide : function(){
            $('.js_page3_wrap').fadeOut(100);
        }
    }
};

// 处理page4  新财富学院的呈现/隐藏
var xueYuanPage4View = function(){
    return {
        show : function(){
            //alert('显示学院！！');
            //$('.js_page4_wrap').fadeIn(200);
            $('.js_page4_wrap').show();
            $('.js_xcf_xinpin').show(); // 新品title
            $('.js_xcf_xueyuan').show(); // 学院title
            $('.js_ting_jiang').show(); // 听讲
            $('.js_xue_yuan_words').show(); // 学院文字
        },
        hide : function(){
            //$('.js_page4_wrap').fadeOut(250);
            $('.js_page4_wrap').hide();
            //$('.js_xcf_xinpin').fadeOut(250);
            //$('.js_xcf_xueyuan').fadeOut(250);
            //$('.js_ting_jiang').fadeOut(250);
            //$('.js_xue_yuan_words').fadeOut(250);
        }
    }
};


// 处理page5  投研圈的呈现/隐藏
var touPage5View = function(){
    return {
        show : function(){
            $('.js_page5_wrap').fadeIn(200);
            $('.js_xcf_xinpin1').fadeIn(200);
        },
        hide : function(){
            $('.js_page5_wrap').fadeOut(250);
        }
    }
};


// 处理page6  二维码的呈现/隐藏
var qrCodePage6View = function(){
    return {
        show : function(){
            $('.js_page6_wrap').fadeIn(0);
        },
        hide : function(){
            $('.js_page6_wrap').fadeOut(0);
        }
    }
};





// 针对第3页，拍照模块，手指左右滑动，呈现不同照片
var bindPagePhotoView = function(){ // index=0.每次进入到该页面，从首张img开始
    var startx, starty;
    var getPageId = function(t){
        var target = t.target;
        //console.log('addAnimateForItem7 target :');
        //console.log(target);
        // http://www.xcf.cn/zhuanti/kuyu_v2/fxslt_test/index.html
        var id = target.getAttribute('attr-id');
        return id;
    };
//获得角度
    function getAngle(angx, angy) {
        return Math.atan2(angy, angx) * 180 / Math.PI;
    };
//根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
    function getDirection(startx, starty, endx, endy) {
        var angx = endx - startx;
        var angy = endy - starty;
        var result = 0;
        //如果滑动距离太短
        if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
            return result;
        }
        var angle = getAngle(angx, angy);
        if (angle >= -135 && angle <= -45) {
            result = 1;
        } else if (angle > 45 && angle < 135) {
            result = 2;
        } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
            result = 3;
        } else if (angle >= -45 && angle <= 45) {
            result = 4;
        }
        return result;
    }

//手指接触屏幕
    document.addEventListener("touchstart", function(e) {
        startx = e.touches[0].pageX;
        starty = e.touches[0].pageY;
    }, false);

    var pageArr = [
        './images/xcf-xueyuan.png',
        './images/notices-tip.png',
        './images/tmt1.png',
        './images/cover_jd.png'
    ]; // 拍照页面数组

    var posLeftArr = [0,-13.4,-27.0,-40.5];
    /*
    // 显示中心的图片
    var showActiveView = function(initIindex,isHorizontal){
        var topPhoto = $('.js_photo_top');
        var topPhoto1 = document.getElementsByClassName('js_photo_top')[0];
        var bottomPhoto = $('.js_photo_bottom');
        topPhoto.attr('src',pageArr[initIindex]);
        if(isHorizontal){
            //topPhoto.addClass('photo-top-leave-animate');
            topPhoto1.style.transition="-webkit-transform 800ms ease-out";
            topPhoto1.style.webkitTransform="translate(0px,"+200+"px) scale(1) translateZ(0px)";
            topPhoto1.style.opacity = 0.2;
        }
    };
    showActiveView(0,false); // 初始化
    */

    //showActiveView(initIindex);
    var photoesWrapObj = $('.js_all_photoes_wrap');// 存放照片的父容器
    var photoesWrapObj1 = document.getElementsByClassName('js_all_photoes_wrap')[0];// 存放照片的父容器
    var wrapPositionFn = function(index,long){

       photoesWrapObj1.style.transition="-webkit-transform 800ms ease-out";
       photoesWrapObj1.style.webkitTransform="translate("+long+"rem,0px) scale(1) translateZ(0px)";

    };
    var activeIndex = 0; // 拍照页面当前索引
    //手指离开屏幕
    document.addEventListener("touchend", function(e) {

        var pageId = getPageId(e);
        if(pageId == 'page-id-3'){ // 只允许在 照片页面进行操作
            //console.log('只允许在照片页面，当前页面pageId : ' + pageId);
            var endx, endy;
            endx = e.changedTouches[0].pageX;
            endy = e.changedTouches[0].pageY;
            var direction = getDirection(startx, starty, endx, endy);
            var LENG = parseInt(endx - startx); // 手指横向滑动的步长
            var isChangePage = false; // 通过步长判断是否切换页面
            Math.abs(LENG) > 30? (isChangePage = true) : (isChangePage = false);
            // 根据手指滑动方向，呈现中间的视图
            //showActiveView(activeIndex);

            switch (direction) {
                case 0:
//                alert("未滑动！");
                    break;
                case 1:
//                alert("向上！");
                    break;
                case 2:
//                alert("向下！");
                    break;
                case 3:
//                alert("向左！");
                    console.log('手指向左滑动的步长LENG : ' + LENG + ' ; 是否切换： ' + isChangePage);
                    if(isChangePage){
                        if(activeIndex >= posLeftArr.length-1){
                            activeIndex = posLeftArr.length-1;
                        }else{
                            activeIndex += 1;
                        }
                        //console.log(activeIndex + ' , 移动：' + posLeftArr[activeIndex]);
                        wrapPositionFn(activeIndex,posLeftArr[activeIndex]);
                        //console.log('横向 - 当前所在索引：' + activeIndex);
                    }
                    //showActiveView(activeIndex,true);
                    break;
                case 4:
//                alert("向右！");
                    console.log('手指向左滑动的步长LENG : ' + LENG + ' ; 是否切换： ' + isChangePage);
                    var long;
                    if(isChangePage){
                        if(activeIndex <= 0){
                            activeIndex = 0;
                            long = 0;
                        }else{
                            activeIndex -= 1;
                        }
                        //console.log(activeIndex + ' , 移动：' + posLeftArr[activeIndex]);
                        wrapPositionFn(activeIndex,posLeftArr[activeIndex]);
                    }

                    //showActiveView(activeIndex,true);
                    //console.log('横向 - 当前所在索引：' + activeIndex);
                    break;
                default:
            }
        }


    }, false);
};

bindPagePhotoView();



