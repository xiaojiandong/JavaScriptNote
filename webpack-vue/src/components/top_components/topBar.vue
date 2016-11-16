<template id="topBar">
  <div class="top-bar-wrap1">
      <a href="" class="logo-link"></a>

      <div class="login-sign-avatar-wrap">
          <a class="common-a" href="javascript:void(0);" @click="onLoginClick">登录</a>
          <a class="common-a" href="javascript:void(0);" @click="onSignUpClick">注册</a>
          <a class="common-a head" href="javascript:void(0);" @click="onMyInfoClick"></a>
      </div>

  </div>
</template>

<script type="text/ecmascript-6">
//import hello from './hello.vue';
 export default{
   el : '#topBar',
   data(){
     return {}
   },
   methods : {
    // 登录页面
    'onLoginClick' (){
      //this.SUBJ.tip('跳转到登录页面');
      //this.$route.router.go({name : 'swiperContent'});
      this.$route.router.go({name : 'login'});
    },
    // 注册页面
    'onSignUpClick' (){
      //this.SUBJ.tip('跳转到注册页面');
      this.$route.router.go({name : 'sign'});
    },
    // 我的页面
    'onMyInfoClick' (){
      //this.SUBJ.tip('我的主页');
      this.$route.router.go({name : 'myInfo'})
    }
   }
 }
</script>

<style lang="less">
    *{
        font-family: '微软雅黑';
    }
    .top-bar-wrap1{
        position: relative;
        width: 640px;
        height: 90px;
        background-image: url("../../static/imgs/hbg1.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .logo-link{
        position: absolute;
        display: block;
        width: 130px;
        height: 50px;
        top: 20px;
        left: 50px;
        background-image: url("../../static/imgs/logo.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .login-sign-avatar-wrap{
        position: absolute;
        top: 0;
        right: 0;
        width: 250px;
        height: 60px;
        line-height: 90px;
        text-align: center;
    }
    .common-a{
        display: block;
        float: left;
        width: 70px;
        height: 60px;
        margin-right: 5px;
        font-size: 34px;
        color: #fff;
        font-weight: normal;

    }
    .head{
        height: 80px;
        background-image: url("../../static/imgs/head.png");
        background-size: 60% 60%;
        background-repeat: no-repeat;
        background-position: 42% 70%;
    }

</style>