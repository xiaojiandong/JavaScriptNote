<template id="home">
  <div class="home-wrap">
    <!-- 轮播部分 -->
    <swiper></swiper>
    <!--<router-view></router-view>-->

  </div>
</template>

<script type="text/ecmascript-6">
// 轮播单文件
import swiper from './swiper.vue';

 export default{
   el : '#home',
   data(){
     return {

     }
   },
   components : {
     swiper
   }
 }
</script>

<style lang="">
    *{
        list-style: none;
    }
    .home-wrap{
        background: #fff;
    }
</style>