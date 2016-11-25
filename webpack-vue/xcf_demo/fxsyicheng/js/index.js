



$(document).ready(function() {

    var isInitSwiper = false; // 是否已经初始化了swiper组件

    // 随机分布星星的位置
    var caculateStarsPosition = function(){
        var LEN = 7;
        for(var i=0;i<LEN;i++){
            var top = 'js_top_'+i;
            top = (Math.random() * 10).toFixed(2) * 8;
            var left = 'js_left_'+i;
            left = (Math.random() * 10).toFixed(2) * 2.6;
            //console.log('top : ' + top + '; left : ' + left);
            // 计算流星位置
            $('.js_fly_star_'+i).css({
                'top' : top + 'rem',
                'left' : left + 'rem'
            });
        }
    };
    // 流星和星星呈现
    var starsShow = function(){
        caculateStarsPosition();
        $('.js_stars_wrap').show();
        $('.fly-star').show();
        $('.circle-star').show();
    };
    // 流星和星星隐藏
    var starsHide = function(){
        $('.js_stars_wrap').hide();
        //$('.fly-star').fadeOut(300);
        //$('.circle-star').fadeOut(300);
    };
    // 首页 - 新财富logo显示动画
    var page1AnimateShow = function(){
        $('.js_xcf_logo').show();
        $('.js_page1_title1').show();
        $('.js_page1_title2').show();
        $('.js_page1_title3').show();

        //$('#section0').show();
    };
    // 首页 - 新财富logo隐藏动画
    var page1AnimateHide = function(){
        $('.js_xcf_logo').fadeOut(300);
        $('.js_page1_title1').fadeOut(300);
        $('.js_page1_title2').fadeOut(300);
        $('.js_page1_title3').fadeOut(300);

        //$('#section0').fadeOut();
    };

    // 第2页 - 颁奖典礼显示动画
    var page2AnimateShow = function(){
        var P_LENGTH = 5;
        var LEN = 600;
        var FADE_IN = 600;
        $('.page2-common-p').show();
        $('.js_page2_title1').show();
        $('.js_page2_title3').show();
        starsShow();
    };

    // 第2页 - 颁奖典礼隐藏动画
    var page2AnimateHide = function(){
        $('.page2-common-p').fadeOut(300);
        $('.js_page2_title1').fadeOut(300);
        $('.js_page2_title3').fadeOut(300);
        //$('.js_page2_title1').fadeOut(300);
        //$('.page2-common-p').fadeOut(300);
        //$('.js_page2_title3').fadeOut(300);
    };

    // 第3页 - 颁奖嘉宾显示动画
    var page3AnimateShow = function(){
         //$('.js_page3_title1').show();
    };
    // 第3页 - 颁奖嘉宾隐藏动画
    var page3AnimateHide = function(){
        //$('.js_page3_title1').fadeOut(300);
    };

    // 第4页 - 颁奖典礼议程显示动画
    var page4AnimateShow = function(){
        $('.js_page4_content1').show();
        $('.js_page4_title1').show();
        //alert('颁奖典礼议程显示动画');
    };
    // 第4页 - 颁奖典礼议程隐藏动画
    var page4AnimateHide = function(){
        $('.js_page4_content1').fadeOut(300);
        $('.js_page4_title1').fadeOut(300);
    };

    // 第5页 - 新财富学院显示动画
    var page5AnimateShow = function(){
        $('.js_page5_title1').fadeIn(300);
        $('.js_page5_title2').show();
        $('.js_page5_title3').show();
        $('.js_xue_yuan_words').show();
    };
    // 第5页 - 新财富学院隐藏动画
    var page5AnimateHide = function(){
        $('.js_page5_title1').fadeOut(300);
        $('.js_page5_title2').fadeOut(300);
        $('.js_page5_title3').fadeOut(300);
        $('.js_xue_yuan_words').fadeOut(300);
    };

    // 第5页 - 投研圈显示动画
    var page6AnimateShow = function(){
        $('.js_page6_title1').fadeIn(300);
        $('.js_page6_title2').show();
        $('.js_page6_title3').show();
    };
    // 第5页 - 投研圈隐藏动画
    var page6AnimateHide = function(){
        $('.js_page6_title1').fadeOut(300);
        $('.js_page6_title2').fadeOut(300);
        $('.js_page6_title3').fadeOut(300);
    };

    // 二维码页面显示
    var page7AnimateShow = function(){
        $('.js_page7_title1').show();
    };
    // 二维码页面隐藏
    var page7AnimateHide = function(){
        $('.js_page7_title1').fadeOut(300);
    };

    // 底部三角箭头的呈现/隐藏
    var arrowDownView = function(){
        return {
            show : function(){
               $('.js_arrow_down').show();
            },
            hide : function(){
               $('.js_arrow_down').hide();
            }
        }
    };

    // 初始化轮播图 (此处要做判断，全局只需初始化一次)
    var showInitSwiper = function(){
        // 嘉宾轮播图
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            speed: 700, //动画持续时间
            autoplayDisableOnInteraction:false, //用户操作之后（swipes,arrow以及pagination 点击）autoplay不会被禁掉，用户操作之后每次都会重新启动autoplay
            autoplay: 2500 ,
            coverflow: {
                rotate: 50, // 旋转角度 150
                stretch: 0,
                depth: 100, // 400
                modifier: 1,
                slideShadows : true
            }
        });
    };

    // 初始化全屏滚动
    $('#fullpage').fullpage({
        verticalCentered: false,
        resize: true,
        css3: true,
        easing : 'easeInQuart',
        loopHorizontal : false, // 左右循环滑动
        scrollingSpeed : 1000, // 滚动速度
        // 滚动前的回调函数
        onLeave : function(index, nextIndex, direction){
            console.log("onLeave--" + "index: " + index + " nextIndex: " + nextIndex + " direction: " +  direction);
          if( index == 1 &&  direction == 'down'){ // 离开首页
              page1AnimateHide();
              starsShow();
          }else if(index == 2 &&  direction == 'up'){ // 离开第2页，回到首页
              //alert('离开第2页，回到首页');
              page2AnimateHide();
              starsHide();
          }else if(index == 2 &&  direction == 'down'){ // 离开第2页，到达第3页
              //alert('离开第2页，到达第3页');
              page2AnimateHide();
              // 初始化swiper
              if(!isInitSwiper){
                  showInitSwiper();
              }
              isInitSwiper = true;
          }else if(index == 3 && direction == 'up'){ // 离开第3页，回到第2页
              //alert('离开第3页，到达第2页');
              page3AnimateHide();
          }else if(index == 3 && direction == 'down'){ // 离开第4页，回到第3页
              page3AnimateHide();
          }else if(index == 4 && direction == 'up'){ // 离开颁奖典礼议程，回到重磅嘉宾
              page4AnimateHide();
          }else if(index == 4 && direction == 'down'){ // 离开颁奖典礼议程，到达新财富学院
              page4AnimateHide();
          }else if(index == 5 && direction == 'up'){ // 离开学院，到达颁奖典礼议程
              //alert('离开学院，到达颁奖典礼议程');
              page5AnimateHide();
          }else if(index == 5 && direction == 'down'){ // 离开学院，到达投研圈
              page5AnimateHide();
          }else if(index == 6 && direction == 'down'){ // 离开投研圈，到达二维码页面
              page6AnimateHide();
              arrowDownView().hide(); // 隐藏小三角
          }else if(index == 6 && direction == 'up'){ // 离开投研圈页面，到达学院页面
              page6AnimateHide();
          }else if(index == 7 && direction == 'up'){ // 离开二维码页面，到达投研圈页面
              page7AnimateHide();
              arrowDownView().show(); // 显示小三角
          }
        },
        // 上下滚动到某一屏后的回调
        afterLoad : function(anchorLink, index){
            console.log("afterLoad--" + "anchorLink: " + anchorLink + " index: " + index );
          // todo 处理每一屏的动画
            if( index == 1 ){ // 到达首页page1
                page1AnimateShow();
            }else if( index == 2 ){ // 到达颁奖页page2
                page2AnimateShow();
            }else if(index == 3){ // 到达重磅嘉宾页面
                //alert('重磅嘉宾');
                page3AnimateShow();
                // 初始化swiper轮播
                //showInitSwiper();
            }else if(index == 4){ // 到达颁奖典礼议程
                page4AnimateShow();
            }else if(index == 5){ // 到达新财富学院
                //alert('到达新财富学院');
                page5AnimateShow();
            }else if(index == 6){ // 到达投研圈
                page6AnimateShow();
            }else if(index == 7){ // 到达二维码页面
                page7AnimateShow();
            }
        },
        // 滚动到某一水平滑块后的回调函数 - afterLoad
        afterSlideLoad: function(anchorLink, index, slideIndex, direction){
            console.log("afterSlideLoad--" + "anchorLink: " + anchorLink + " index: " + index + " slideIndex: " + slideIndex + " direction: " + direction);
        },
        // 页面初始化回调函数
        afterRender: function(){
            //alert('初始化完成');
            page1AnimateShow();
            //$('#section0').hide();
            starsHide();
        }
    });





});

