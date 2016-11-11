<template id="swiper11">
  <div v-cloak class="swiper-content-wrap">
    <h1>每个swiper的具体内容 - {{currentDataIndex+1}}</h1>
    <p>名称：{{swiperData[currentDataIndex].name}}</p>
    <p>描述：{{swiperData[currentDataIndex].desc}}</p>
    <p>地点：{{swiperData[currentDataIndex].place}}</p>
  </div>
</template>

<script type="text/ecmascript-6">

 export default{
   el : '#swiper11',
   data(){
     return {
       swiperData : [
         {name : '阿里公司',desc : '公司简介做电商业务',place : '杭州'},
         {name : '腾讯',desc : '游戏，社交',place : '深圳'},
         {name : '百度公司',desc : '搜索引擎业务',place : '北京'},
         {name : '京东',desc : '电商业务',place : '北京'},
         {name : '小米公司',desc : '什么业务都做',place : '北京'}
       ],
       currentDataIndex : 0
     }
   },
   methods : {

   },
   props : ['swiperId'],
   events : {
     'event-swiper'  ( id ){
         //alert('这里是swiperContent.vue组件，发送请求，获取当前数据 ' +id);
         console.log('id : ' + id);
         this.$data.currentDataIndex = id-1;
         console.log(this.$data.swiperData[id-1])
     }
   },
   ready(){

   },
   watch:{
     'swiperId' (newVal,oldVal){
      // console.log('这里再感受下值拿到了没 newVal ' + newVal + ' - ' +oldVal);//
     }
   }
 }
</script>

<style lang="less" scoped="">

</style>