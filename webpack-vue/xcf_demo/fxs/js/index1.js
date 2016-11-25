$(function(){
    // 此版本为PC
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
//        spaceBetween: 30,
        autoplay : 3000, // 自动播放间隔时间
        effect : 'fade', // 渐变
        loop : true, // 循环
        autoplayDisableOnInteraction : false
    });


    var companyName = [
        '新财富杂志总编辑薛长青',
        '证券时报社副总编辑成孝海',
        '一汽丰田高级总监田炜',
        '海能达通信股份有限公司董事长陈清洲',
        '第十三届新财富本土最佳研究团队',
        '第十三届新财富最具影响力研究机构',
        '第十三届新财富进步最快研究机构',
        '2015新财富最佳销售服务团队'
    ];
    var slideEndChangeCompanyName = function( index ){
        if(index == 1 || index == 9){
            $('.js_company_title').html(companyName[0]+'致辞');
        }else{
            $('.js_company_title').html(companyName[index-1]+'致辞');
        }
    };
    var showIndex = function(){
        var spans = $('.js_swiper_pagination1').find('span');
        var len = spans.length;
        console.log('轮播btn个数：'+len);
        spans.eq(0).html('aaa');
    };
    var swiper1 = new Swiper('.swiper-container1', {
        pagination: '.swiper-pagination1',
        paginationClickable: true,
//        spaceBetween: 30,
        autoplay : 3000, // 自动播放间隔时间
        //effect : 'cube', //  fade,flip
        loop : true, // 循环
        autoplayDisableOnInteraction : false,
        onInit : function(swiper){ // 初始化
            //showIndex();
        },
        onSlideChangeEnd : function(swiper){ // 滑动结束后的回调
            var index = swiper.activeIndex;
            slideEndChangeCompanyName(index);
        }
    });

    // 根据浏览器适配，若为移动端，则跳转到移动端的链接
    var SUBJ = {
        /**
         * 判断访问页面的平台设备
         * 返回type：android,ios,pc
         * 针对当前设备类型，做业务处理
         * @returns {*}
         */
        getUaDeviceType : function(){
            var type;
            var ua = navigator.userAgent.toLowerCase();
            //console.log(ua);
            if(ua.indexOf('android') != -1){//android
                type = 'android';
            }else if(ua.indexOf('iphone os') != -1 || ua.indexOf('ipad') != -1){
                type = 'ios';
            }else{
                type = 'pc';
            };
            return type;
        },
        /**
         * 判断访问浏览器的设备
         * 是否为移动端：返回bollean
         */
        isMobileDevice : function(){
            var dType = SUBJ.getUaDeviceType();
            if(dType != 'pc'){
                return true;
            }else{
                return false;
            }
        }
    };
    if(SUBJ.isMobileDevice()){ // 移动设备，则跳转链接
        location.href = 'http://www.xcf.cn/zhuanti/ztzz/hdzt1/2016/zjfxs_wap/index.html';
    }

});


// 原生js轮播方法（针对IE中间大图轮播）
var container=document.getElementById("container"); //获取总的父div节点
var list=document.getElementById("list"); //获取包含5张照片的div节点
var buttons=document.getElementById("buttons").getElementsByTagName("span"); //5个span按钮节点
var prev=document.getElementById("prev"); //左箭头a节点
var next=document.getElementById("next"); //右箭头a节点
var index=1; //用于显示第几个小圆点
var animated=false; //开关
var timer; //定时器
//定义方法showButton，显示当前小圆点
function showButton(){
    //遍历5个span小圆点
    for(var i=0;i<buttons.length;i++){
        if(buttons[i].className=="on"){
            buttons[i].className="";  //for循环清空全部小圆点span的class
            break; //退出循环
        }
    }
    //buttons数组的下标取值为[0,4]；而小圆点span的index值[1,5]
    buttons[index-1].className="on";
}

//定义有参方法animate，使包含照片的list左右切换
function animate(offset){  //offset即每张img位移的总长
    animated=true; //开关
    var newLeft=parseInt(list.style.left)+offset; //左边为新的目标left=右边为原始left+位移总长
    //list.style.left=parseInt(list.style.left)-600+"px"; //该方法也可，list.style.left代表一个字符串
    //在切换图片的时候，可能切换一张图是在1秒内分3次
    var time=200; //自定义，位移总的时间(毫秒)
    var interval=10; //自定义，位移间隔(隔10毫秒移动一次，总共时间是300毫秒)
    var speed=offset/(time/interval); //每次位移量
    //go函数用于使img切换产生间隔动画效果
    function go(){
        // 参数offset为负,当前left>目标left(list的div往左)||  参数offset为正,当前left<目标left(list的div往右)
        if(((speed<0) && (parseInt(list.style.left)>newLeft)) || ((speed>0) && (parseInt(list.style.left)<newLeft))){
            list.style.left=parseInt(list.style.left)+speed+"px";
            //每隔interval秒后，调用几次go函数（一个函数不断调用自身，叫做函数递归）
            setTimeout(go,interval); //当前left值未达到目标left值，则继续执行上面代码，否则执行下面代码
        }else{
            /**
             * 1, 判断list.offsetLeft
             * 2, 5张图真正的list.offsetLeft取值范围始终是[-600,-3000]之间（5张实图，每张宽600）
             * 3, 当list.offsetLeft为0或-3600时,是前后两张辅助图
             */
            animated=false; //开关
            list.style.left=newLeft+"px";
            if(newLeft>(-1020)){ //若list跑到第一张辅助图
                list.style.left=-4080+"px"; //则将list复原到最后一张实图 4080
            }
            if(newLeft<(-4080)){ //若list跑到最后一张辅助图
                list.style.left=-1020+"px"; //则将list复原到第一张实图
            }
        }
    } //go函数结束
    go();
}

//定义方法play，开启img的自动播放
function play(){
    timer=setInterval(function(){
        next.onclick();
    },4000); //每隔3秒就next.onclick一次
}

//定义方法stop，关闭img的自动播放
function stop(){
    clearInterval(timer);
}

//当鼠标移入container父容器时，关闭定时器
//container.onmouseover=stop;
//当鼠标移出container父容器时，开启定时器
//container.onmouseout=play;

//为右箭头a添加onclick事件，使照片向右切换
next.onclick=function(){ //每执行一次onclick事件，则index累加
    //console.log(index);
    if(index==4){ //若小圆点的index为5，则使index归位成1
        index=1;
        //list.style.left=-1020+"px"; //则将list复原到第一张实图
    }else{ //否则index一直加,直到为5
        index+=1;  //小圆点span与当前照片img相对应
    }
    showButton(); //将显示小圆点的方法调入到next的onclick事件中
    if(!animated){
        animate(-1020);  //-1020=offset；则list往左，单个图片的宽度
    }
};
//为左箭头a添加onclick事件，使照片向左切换
prev.onclick=function(){ //每执行一次onclick事件，则index累减
    if(index==1){ //若小圆点的index为1，则使index归位成5
        index=4;
       // list.style.left=-4080+"px"; //则将list复原到第一张实图
    }else{  //否则index一直减,直到为1
        index-=1;
    }
    showButton(); //将显示小圆点的方法调入到next的onclick事件中
    if(!animated){
        animate(1020); //600=offset；则list往右
    }
};

//循环遍历5个span按钮
for(var i=0;i<buttons.length;i++){
    //为每个span按钮添加onclick事件
    buttons[i].onclick=function(){
        //若点击的是当前span按钮，则不执行下面的代码
        if(this.className=="on"){
            return; //意思是：不执行下面语句
        }
        //获取当前span按钮的index值；getAttribute("index")为获取自定义的index属性
        var myindex=parseInt(this.getAttribute("index")); //若是DOM自带的id属性，则this.id
        //var offset=-600*(myindex-index); //求出每次点击小圆点的偏移量
        var offset=-1020*(myindex-index); //求出每次点击小圆点的偏移量
        animate(offset); //调用切换img的方法
        index=myindex; //更新index值(很重要)
        showButton(); //调用显示span按钮的方法
    };
}
play();