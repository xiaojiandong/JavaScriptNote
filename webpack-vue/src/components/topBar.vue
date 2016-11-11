<template id="topBar">
  <div class="top-bar-wrap1">
      <a href="" class="logo-link"></a>

      <div class="login-sign-avatar-wrap">
          <a class="common-a" href="">登录</a>
          <a class="common-a" href="">注册</a>
          <a class="common-a head" href=""></a>
      </div>

  </div>
</template>

<script type="text/ecmascript-6">
//import hello from './hello.vue';
 export default{
   el : '#topBar',
   data(){
     return {}
   }
 }
</script>

<style lang="">
    .top-bar-wrap1{
        position: relative;
        width: 640px;
        height: 60px;
        background-image: url("../static/imgs/hbg1.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .logo-link{
        position: absolute;
        display: block;
        width: 130px;
        height: 50px;
        top: 5px;
        left: 50px;
        background-image: url("../static/imgs/logo.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .login-sign-avatar-wrap{
        position: absolute;
        top: 0;
        right: 0;
        width: 180px;
        height: 60px;
        line-height: 60px;
        text-align: center;
    }
    .common-a{
        display: block;
        float: left;
        width: 52px;
        height: 60px;
        margin-right: 5px;
        font-size: 22px;
        color: #fff;
        font-weight: normal;
        /*border: 1px solid #000;*/
    }
    .head{
        background-image: url("../static/imgs/head.png");
        background-size: 60% 54%;
        background-repeat: no-repeat;
        background-position: 42% 40%;
    }

</style>