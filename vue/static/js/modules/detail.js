/**
 * Created user : xiaojian
 * Created time : 2016/8/11
 * FileName :
 */


require(['jquery','vue','WeixinUtil'],
    function(jquery,vue,WeixinUtil){
   console.log('详情页');
   $('body').css('background','pink');
   console.log(jquery);
   console.log(vue);
   console.log(WeixinUtil);
   var v = new vue({
       el : '#app',
       data : {
           name : '张三啊啊啊'
       }
   });


});

