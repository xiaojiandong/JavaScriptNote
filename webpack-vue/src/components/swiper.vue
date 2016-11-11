<template id="swiper">

  <div class="swiper-wrap" v-show="isShowSwiper">
      <!-- Swiper -->
      <div class="swiper-container" @click="goSwiperContent">
          <div class="swiper-wrapper">
              <img class="swiper-slide" data-id="1" src="../static/imgs/swiper-1.jpg" alt=""/>
              <img class="swiper-slide" data-id="2" src="../static/imgs/swiper-2.jpg" alt=""/>
              <img class="swiper-slide" data-id="3" src="../static/imgs/swiper-3.jpg" alt=""/>
              <img class="swiper-slide" data-id="4" src="../static/imgs/swiper-4.jpg" alt=""/>
              <img class="swiper-slide" data-id="5" src="../static/imgs/swiper-5.jpg" alt=""/>
          </div>
          <!-- 底部小圆点 Add Pagination -->
          <div class="swiper-pagination circle-wrap"></div>
          <!--幻灯片左箭头-->
          <div class="swiper-button-next common-btn">&gt;</div>
          <!--幻灯片右箭头-->
          <div class="swiper-button-prev common-btn">&lt;</div>
      </div>
      <div class="swiper-title">
        <div class="title-text">{{swiperTitleActive}}</div>
      </div>
  </div>


  <!-- 每个子swiper点进去的内容 -->
  <swiper-content
          v-bind:swiper-id="swiperId"
          :event-swiper=""
          v-show="isShowContent">
  </swiper-content>

  <!-- 新闻条款父容器 -->
  <news-wrap v-show="isShowNews">

  </news-wrap>


</template>

<script type="text/ecmascript-6">
// 针对当前 swiper.vue单文件，引入swiper插件
import Swiper from '../static/js/swiper.3.3.0.min.js';
require('../static/css/swiper.3.3.0.min.css');


// 每个子swiper点进去的内容
import swiperContent from "./swiperContent.vue";

// 新闻单文件
import newsWrap from './newsWrap.vue';

 export default{
   el : '#swiper',
   data(){
     return {
       swiperId : 1,
       isShowContent : false, // swiper内容
       isShowNews : true, // 新闻
       isShowSwiper : true, // swiper轮播
       swiperTitleActive : '',
       // 存放轮播图title的数组
       swiperTitleArr : [
         {title : '【方正国防军工韩振国团队】卫星移动通信行业深度报告—天通一号发射开启卫星移动通信产业发展大幕'},
         {title : '【长正通信行业马军团队】运营商转型系类报告1：数字化转型下的业绩改善+改革预期'},
         {title : '【安信有色齐丁团队】2016年度有色金属行业策略报告：与时代共舞'},
         {title : '【全信食品饮料苏铖团队】生活方式系列之奶酪黄油：消费新趋势，乳业新亮点'},
         {title : '【商超】德国超市巨头ALDI：与Walmart大不同的另一种连锁商超范式'},
       ]
     }
   },

   methods : {
     // 跳转到具体子swiper的内容
     goSwiperContent (e){
        var target = e.target;
        if( target.tagName.toUpperCase() == 'IMG' ){
          var dataId = target.getAttribute('data-id');
          //console.log(target.tagName);
          //console.log(dataId);
          this.$data.swiperId = dataId;

          // 广播到子组件 swiperContent.vue中
          this.$broadcast('event-swiper',dataId);
          //this.$route.router.go({name : 'swiperContent'}); //路由跳转，则数据在模板中无法展示

          this.$data.isShowContent = true;
          this.$data.isShowSwiper = false;
          this.$data.isShowNews = false;
        }
     }
   },
   components : {
    swiperContent,newsWrap
   },
   ready(){
      var self = this;
      self.$data.swiperTitleActive = self.$data.swiperTitleArr[0].title;

     // 初始化swiper插件
     var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        loop:true,
        autoplay : 3000, // 自动播放间隔时间
        autoplayDisableOnInteraction : false, // 设为false，用户执行滑动后，插件继续执行
        // 回调函数
        onSlideChangeEnd : function(swiper){ // 自动滑动结束
          var index = swiper.activeIndex; // 当前索引值
          if( index == 6 ){
             index = 1;
          }
          if( index == 0 ){
             index = 5;
          }
          self.$data.swiperTitleActive = self.$data.swiperTitleArr[index-1].title;
        }
    });

   }
 }
</script>

<style lang="less" scoped="">
    /*单行样式出现 ...*/
    .ellipsizeSingleLine(@width){
        text-overflow:ellipsis;
        overflow:hidden;
        white-space:nowrap;
        width:@width;
    }

  .swiper-wrap{
      position: relative;
      border: 2px solid #000;
      width: 640px;
      height: 318px;
      overflow: hidden;
      box-sizing: border-box;
  }

  .swiper-container {
      width: 100%;
      height: 100%;
  }
  .swiper-slide {
      display: block;
      text-align: center;
      font-size: 18px;
      background: #fff;
      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
      img{
          display: block;
          width: 100%;
      }
  }

  /* 底部小圆点 */
  .circle-wrap{
      position: absolute;
      z-index: 1000 !important;
      width: 25% !important;
      bottom: 0 !important;
      left: 80% !important;
      height: 30px !important;
      background: rgba(0,0,0,0.4);
      box-sizing: border-box;
      cursor: pointer;
  }
    /* 左右箭头 */
    .common-btn{
        background: rgba(0,0,0,0.3);
        color: #0000cc;
        font-size: 26px;
    }
    /* 底部title */
   .swiper-title{
       position: absolute;
       z-index: 10;
       width: 80%;
       height: 30px;
       line-height: 30px;
       bottom: 0;
       left: 0;
       background: rgba(0,0,0,0.4);
       color: #fff;

       box-sizing: border-box;
       .title-text{
           width: 460px;
           font-size: 16px;
           margin-left: 30px;
           .ellipsizeSingleLine(460px);

           /*text-overflow:ellipsis;*/
           /*overflow:hidden;*/
           /*white-space:nowrap;*/
       }
   }

</style>