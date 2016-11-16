<template id="newsDetail">
  <!-- v-cloak的作用是取消数据绑定时的闪烁 -->
  <div v-cloak class="news-detail-wrap">
     <h1>新闻详情 - {{newId}}</h1>
     <h1>标题：{{newDetailData.title}}</h1>
     <h1>作者：{{newDetailData.author}}</h1>
     <h1>时间：{{newDetailData.time}}</h1>
     <img src="{{newDetailData.img}}" alt=""/>
     <h1>文章：{{newDetailData.article}}</h1>
  </div>
</template>

<script type="text/ecmascript-6">
// 导入
 export default{
   el : '#newsDetail',
   data(){
     return {
       newId : 0,
       newDetailData : {
        title : '【房地产】携带“长江经济带”与“一带一路”交汇处之利，重庆房地产却温凉如水：会是一次投资好机会吗？（下）',
        author : 'CY_young',
        time : '2016.10.22',
        img : '',
        article : '这里是文章'
       }
     }
   },
   methods : {

   },
   props : [ ],
   events : {
     // 从父组件home.vue广播下来的事件
     'event_news_detail_b' : function( newId ){
       //alert('子组件newsDetail.vue新闻详情，发送请求:' + newId);
       this.$data.newId = newId;
       // todo ： 传入newId，发送请求给后端
     }
   },
   ready(){

   },
   watch:{

   }
 }
</script>

<style lang="less">
  .news-detail-wrap{
      width: 640px;
      padding: 10px;
      box-sizing: border-box;
  }

</style>