<template id="home">
  <div class="home-wrap">
    <!-- 轮播部分 -->
    <swiper v-if="isShowSwiper"></swiper>
    <!--<router-view></router-view>-->

    <!-- 新闻列表父容器 -->
    <news-wrap
          v-show="isShowNews"
          :news-data="newsData">
    </news-wrap>

    <!-- 新闻详情 -->
    <news-detail v-show="isShowNewsDetail"></news-detail>

  </div>
</template>

<script type="text/ecmascript-6">
// 轮播单文件
import swiper from './swiper.vue';
// 新闻列表
import newsWrap from './newsWrap.vue';
// 新闻详情
import newsDetail from './newsDetail.vue';

 export default{
   el : '#home',
   data(){
     return {
       isShowSwiper : true, // 显示swiper容器
       isShowNews : true, // 显示新闻列表
       isShowNewsDetail : false, // 显示新闻详情
       newsData : {
         avatar : 'http://s0.hao123img.com/res/img/richanglogo168_24.png',
         title : '【科技】科技行业最新动态：第3届世界互联网大会互联网+在乌镇举办',
         author : 'she',
         time : '2016-11-15'
       }
     }
   },
   components : {
     swiper,
     newsWrap,
     newsDetail
   },
   events : {
     // 点击子swiper后，派发的事件
     'event-swiper1' : function(){
       this.$data.isShowNews = false;
     },
     // 点击子新闻列表后，派发的事件
     'event_show_detail' : function(newId){
         this.$data.isShowSwiper = false; // swiper隐藏
         this.$data.isShowNews = false; // 新闻列表隐藏
         this.$data.isShowNewsDetail = true; // 新闻详情显示
         // 广播到子组件newsDetail.vue
         this.$broadcast('event_news_detail_b',newId);
     }
   }
 }
</script>

<style lang="" scoped="">
    *{
        list-style: none;
        /*font-family: '微软雅黑';*/
    }
    .home-wrap{
        background: #fff;
    }
</style>