


<!--<template lang='jade'>-->
<template id="app11">
   <div class="c1">
      <!-- 头部部分 -->
      <top-bar></top-bar>

      <!-- 对于名字比较长的 .vue文件，文件名字命名用驼峰，在 html中该标签用横杠 -->

      <!-- 导航部分 -->
      <nav-list></nav-list>

      <!--
      <h2>这里pink内的是src/components/app.vue模板中的内容</h2>
      <h1>姓名 ： {{name}}</h1>
      <h1>年龄 ： {{age}}</h1>
      <h1>头像：
      <img width="200" title="头像" v-attr="src : " src="{{avatarUrl}}"/>
      </h1>
      -->
      <!--<a v-bind:href="{ name : 'list' }">v-link查看列表</a>-->
      <!--<a v-link="{ name : 'index' }">返回主页</a>-->

      <!--
      <button @click="goList">$route.router.go查看路由</button>
      <br/>
      <a class="less-class-test" href="javascript:;" @click="goList">list.vue查看列表</a>
      <br/>
      <a href="javascript:;" @click="goIndex">index.vue返回主页</a>
      <br/>
      <a href="javascript:;" @click="goBye">bye.vue再见页面</a>
      <br/>
      <a v-link="{name : 'hello'}">嵌套路由hello111</a>
      <a v-link="{name : 'list'}">嵌套路由list</a>
      <a v-link="{path : '/bye'}">嵌套路由bye</a>
      <br/>
      -->


      <router-view></router-view>
      <!--<hello></hello>-->
       <!--<good-detail :good-list-data="msg">-->


       <!--
       <good-detail v-for="good in goodListData"
                :good-list-data="good"
                :click-data="good"
               >
       </good-detail>
       -->

   </div>
</template>


<script type="text/ecmascript-6">
// 头部部分
import topBar from "./top_components/topBar.vue";
// 导航部分
import navList from './top_components/navList.vue';
// 商品详情
import goodDetail from './goodDetail.vue';


 // es6
 export default {
   //el : '#app11',
   //el : 'body',
   // data : function(){},下面是es6的写法
   components : {
     navList,
     goodDetail,
     topBar
   },
   data (){
     return {
        goodListData : [
         {name : '袜子',price : 30,stock:100},
         {name : '裤子',price : 350,stock:18},
         {name : '棉被',price : 438,stock:560}
        ],
        msg : 'asas',
        name : '张三',
        age : 23,
        avatarUrl : 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png',
        // 父组件的商品数据
        goodData : {
          name : '帽子',
          price : 532,
          stock : 21
        }
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
   // 捕获子组件 $dispatch出来的事件
   events : {
     event1(v){
       alert('event1 - event1 '+v);
     }
   },
   ready (){
     //console.log(this.$data.goodListData);
   }

  // <style lang="less" rel="stylesheet/less" type="text/less">
 }
</script>

<style lang="">
    .c1{
       /*background: pink;*/
    }
    .c1 h1{
        color: red;
    }
    .c1 a{
        cursor: pointer;
    }
</style>