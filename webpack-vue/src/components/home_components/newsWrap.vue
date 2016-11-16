<template id="newsWrap">
  <!-- v-cloak的作用是取消数据绑定时的闪烁 -->
  <div v-cloak class="news-wrap-wrap">
    <!-- 单条新闻 -->
    <div class="news-item-wrap" v-for="news in newsDataList" @click="goNewsDetail(news.newsId)">
        <img class="avatar" src="{{news.avatar}}" alt=""/>
        <div class="words-wrap">
           <p class="title">{{news.title}}</p>
           <p class="author">{{news.author}} 发布</p>
           <p class="time">{{news.time}}</p>
        </div>
    </div>
    <h1>结合vue-resource和vue-waterfall做瀑布流</h1>
    <button @click="getDataClick">点击</button>

  </div>
</template>

<script type="text/ecmascript-6">
// 导入
 export default{
   el : '#newsWrap',
   data(){
     return {
       newsDataList : [
        {newsId:'102',avatar : 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png',title : '【房地产】物业管理成为地产行业新王者背后的逻辑',author : 'heibe',time : '2016-11-11'},
        {newsId:'103',avatar : 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png',title : '【政经】实地调研美国十几个州的华人资本:川普会...',author : 'lucky',time : '2016-11-13'},
        {newsId:'104',avatar : 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png',title : '【政经】实地调研美国十几个州的华人资本:川普会...',author : 'lucky',time : '2016-11-13'},
        {newsId:'105',avatar : 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png',title : '【政经】实地调研美国十几个州的华人资本:川普会...',author : 'lucky',time : '2016-11-13'},
        {newsId:'106',avatar : 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png',title : '【非银】中金并购中投:曾经无可匹敌的贵族,如何一...',author : 'heibe',time : '2016-11-11'}
       ]
     }
   },
   methods : {
     getDataClick(){
       alert('发送请求，获取新闻列表的数据');
       //this.SUBJ.tip('今天已经领取过了！！');

       return;
       var that = this;
       that.$http({
            method:'POST',
            url:'/topic/topicLists/2',
            dataType: 'JSON',
            async : true,
            data:{ }
        }).then(function(res){
            //赋值给alllist数组,
           // that.$set('allist',data.data.knowledgeList)
           console.log('请求成功');
           console.log(res);
        },function(err){
           console.log('请求失败');
           console.log(err);
        });
     },
     goNewsDetail ( newId ){
        this.$dispatch('event_show_detail',newId);
     }

   },
   props : [ 'newsData' ],
   events : {

   },
   ready(){
      // 结合 vue-resource 和 vue-waterfall 实现瀑布流效果
      // https://github.com/MopTym/vue-waterfall
      //console.log('结合 vue-resource 和 vue-waterfall 实现瀑布流效果');
      // http://m.ikuyu.cn/topic/topiclists/2 , https://api.douban.com/v2/movie/top250?count=10
      // http://localhost:8080/webpack-dev-server/src/static/js/newsData.json
      //console.log(window.location.origin);
      var href = window.location.href; // href

      //console.log('this.newsData');
      //console.log(this.newsData)

   },
   watch:{

   }
 }
</script>

<style lang="less">
    /* 多行出现... */
    .ellipsizeMultiLines(@line-number){
        display: -webkit-box;
        -webkit-line-clamp: @line-number;
        -webkit-box-orient: vertical;
    }
    /* 单行出现... */
    .ellipsizeSingleLine(@width){
        text-overflow:ellipsis;
        overflow:hidden;
        white-space:nowrap;
        width:@width;
    }
   .news-wrap-wrap{
     width: 640px;
    /* 每条新闻父容器 */
    .news-item-wrap{
       display: block;
       width: 640px;
       height: 120px;
       background: linear-gradient(#FFFFFF, #ebebeb);
       border-bottom: 1px solid #d2d2d2;
       padding : 10px;
       overflow: hidden;
       cursor: pointer;
       box-sizing : border-box;
       .avatar{
           float: left;
           width: 140px;
           height: 100px;
           margin-right: 10px;
       }
       .words-wrap{
          position: relative;
          float: left;
          width : 470px;
          height : 100px;
          /*background:pink;*/
          .title{
              font-weight: bold;
              font-size: 30px;
              height: 75px;
              line-height: 35px;
              /*background:#ccc;*/
              overflow: hidden;
              .ellipsizeMultiLines(2);
          }
          .author{
              position: absolute;
              left: 0;
              bottom: 0;
              font-size: 28px;
          }
          .time{
              position: absolute;
              right: 0;
              bottom: 0;
              font-size: 28px;
          }
       }
    }
   }


</style>