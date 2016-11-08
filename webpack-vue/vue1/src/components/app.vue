


<!--<template lang='jade'>-->
<template id="app11">
   <div class="c1">
      <h1>app.vue</h1>
      <h2>这里pink内的是src/components/app.vue模板中的内容</h2>
      <h1>姓名 ： {{name}}</h1>
      <h1>年龄 ： {{age}}</h1>
      <h1>头像：
      <img width="200" title="头像" v-attr="src : " src="{{avatarUrl}}"/>
      </h1>
      <button @click="goList">$route.router.go查看路由</button>
      <br/>
      <!--<a v-bind:href="{ name : 'list' }">v-link查看列表</a>-->
      <!--<a v-link="{ name : 'index' }">返回主页</a>-->
      <a href="javascript:;" @click="goList">list.vue查看列表</a>
      <br/>
      <a href="javascript:;" @click="goIndex">index.vue返回主页</a>
      <br/>
      <a href="javascript:;" @click="goBye">bye.vue再见页面</a>
      <br/>
      <a v-link="{name : 'hello'}">嵌套路由hello</a>
      <a v-link="{name : 'list'}">嵌套路由list</a>
      <a v-link="{name : 'bye'}">嵌套路由bye</a>
      <br/>
      <router-view></router-view>
      <!--<hello></hello>-->

      <h2>下面要引入商品信息</h2>

   </div>
</template>


<script type="text/ecmascript-6">
import hello from './hello.vue';
import bye from './bye.vue'; // 按需引用不同的 .vue单页面
 // es6
 export default {
   el : '#app11',
   // data : function(){},下面是es6的写法
   data (){
     return {
        msg : 'asas',
        name : '张三',
        age : 23,
        avatarUrl : 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'
       }
   },
   methods : {
     goList(){
       alert('查看列表');
       this.$route.router.go({name : 'list'});
     },
     goIndex(){
       alert('返回主页');
       this.$route.router.go({name : 'index'});
     },
     goBye(){
       this.$route.router.go({name : 'bye'});
     }
   },
   components : {
     hello, // 只需在头部import其他组件进来
     bye
   }

  // <style lang="less" rel="stylesheet/less" type="text/less">
 }
</script>

<style lang="">
    .c1{
       background: pink;
    }
    .c1 h1{
        color: red;
    }
    .c1 a{
        cursor: pointer;
    }
</style>