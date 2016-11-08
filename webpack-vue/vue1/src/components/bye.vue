<template id="bye">
  <div class="bye-wrap">
   <h1>bye.vue</h1>
   <h3>bye.vue - 再见1</h3>
   <h3>bye.vue - 再见2</h3>
   <a href="javascript:;" @click="goIndex">返回主页index.vue</a>
    <!--<hello></hello>-->
  </div>
</template>

<script type="text/ecmascript-6">
import hello from './hello.vue';
 export default{
   el : '#bye',
   data(){
     return {}
   },
   methods : {
    goIndex(){
       //alert('这里是bye.vue页面');
       this.$route.router.go({name : 'index'});
    }
   },
   components : {
     hello
   }
 }
</script>

<style lang="">
    .bye-wrap{
        background: #ccc;
    }
</style>