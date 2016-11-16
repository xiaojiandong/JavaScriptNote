<template id="navList">
  <div class="nav-list-wrap">
   <ul class="nav-list-ul">
     <a v-for="nav in navList"
        v-link="{name : nav.routerLink}"
        class="nav-a active-{{nav.isActive}}"
        @click="navClick(nav,$index)">
        {{nav.name}}
     </a>
   </ul>
   <router-view></router-view>
  </div>
</template>


<script type="text/ecmascript-6">
 export default{
   el : '#navList',
   data(){
     return {
      navList : [
        {name : '首页',routerLink : 'home',isActive : true},
        {name : '评选',routerLink : 'select',isActive : false},
        {name : '活动',routerLink : 'activity',isActive : false},
        {name : '话题',routerLink : 'topic',isActive : false}
      ]
     }
   },
   methods : {
     // 点击导航高亮
     navClick ( nav , index ){
       var navList = this.$data.navList;
       for(var i=0;i<navList.length;i++){
           navList[i].isActive = false;
       }
       nav.isActive = true;
       if(index == 0){
         //window.location.reload()
       }
     }
   },
   components : {
   }
 }
</script>

<style lang="less" scoped="">
    *{
        list-style: none;
    }
    .nav-list-wrap{
        width: 640px;
        height: 70px;
        border-top: 2px solid #000;
        border-bottom: 2px solid #000;
        background: #21598a;
        overflow: hidden;
        text-align: center;
        box-sizing: border-box;
      .nav-list-ul{
        width: 640px;
        height: 70px;
        line-height: 70px;
        box-sizing: border-box;
         .nav-a{
           display: block;
           float: left;
           width: 160px;
           height: 70px;
           color: #fff;
           font-size: 34px;
          }
         .active-true{
            /*background: #fff;*/
            background:linear-gradient(#FFFFFF, #aac0d2);
            color: #21598a;
         }
       }
    }

</style>