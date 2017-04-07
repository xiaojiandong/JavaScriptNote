/**
 *
 * 原生js，下拉加载插件
 */

//滚动条在Y轴上的滚动距离
function getScrollTop(){
    var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
    if(document.body){
        bodyScrollTop = document.body.scrollTop;
    }
    if(document.documentElement) {
        documentScrollTop = document.documentElement.scrollTop;
    }
    scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
    return scrollTop;
};
function getScrollHeight(){
    var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
    if(document.body){
        bodyScrollHeight = document.body.scrollHeight;
    }
    if(document.documentElement){
        documentScrollHeight = document.documentElement.scrollHeight;
    }
    scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
    return scrollHeight;
}
//浏览器视口的高度
function getWindowHeight(){
    var windowHeight = 0;
    if(document.compatMode == "CSS1Compat"){
        windowHeight = document.documentElement.clientHeight;
    }else{
        windowHeight = document.body.clientHeight;
    }
    return windowHeight;
}
var fooWrap;
var winH = window.innerHeight || document.body.clientHeight;

// 在父元素后面追加元素
function insertAfter( newElement, targetElement ){ // newElement是要追加的元素 targetElement 是指定元素的位置
    var parent = targetElement.parentNode; // 找到指定元素的父节点
    if( parent.lastChild == targetElement ){ // 判断指定元素的是否是节点中的最后一个位置 如果是的话就直接使用appendChild方法
        parent.appendChild( newElement, targetElement );
    }else{
        parent.insertBefore( newElement, targetElement.nextSibling );
    }
};
// 创建新节点，里面存放加载的状态
var newDiv = document.createElement('div');

var LoadMore = function(args){
    //var args = args;
    this.init(args);
};
LoadMore.prototype = {
    text : '这里是一个小对象',
    idEl : 'js_id_p',
    fn1 : function(){
        //alert(10 + this.idEl);
        return 8;
    },
    fn2 : function(){
        //alert(10 + this.idEl);
        return 21;
    },
    retFooWrapObj : function( ){
        fooWrap = document.getElementById(this.idEl);
        return fooWrap;
    },
    textLoad : function(text){
        text = text || '上拉加载↑'; //↖↗↘↙↓↑←→
        var wrapObj = this.retFooWrapObj();
        newDiv.innerHTML = text;
        newDiv.style.width = '100%';
        newDiv.style.height = '30px';
        newDiv.style.border = '3px solid blue';

        insertAfter(newDiv,wrapObj);
        //console.log(newDiv);
    },
    onScroll : function(successFn){
        var that = this;
        window.addEventListener('scroll',function(){
            //return false;
            var jsTouchWrap = that.retFooWrapObj();
            var bodyScrollTop = document.body.scrollTop;//滚动条距顶部高度(随着滚动而变化)
            var bodyScrollHeight = document.body.scrollHeight;//文档的总高度//(定值)
            var windowHeight = document.documentElement.clientHeight;//窗口可视区高度(定值)
            var touchWrapHeight = jsTouchWrap.clientHeight;//容器可视区高度(定值)
            var documentScrollTop = document.documentElement.scrollTop;
            //console.log('窗口滚动事件：'+bodyScrollTop+'; '+bodyScrollHeight+' ; '+windowHeight);
            var top=jsTouchWrap.offsetTop;
            var height=jsTouchWrap.offsetHeight; // width + padding + border
            //var LONG = top + height;
            var DISTANCE = 50; // 距离底部的长度
           if(getScrollTop() + getWindowHeight() >= getScrollHeight() - DISTANCE){
                console.log("you are in the bottom!");
                //jsTouchWrap.style.height = touchWrapHeight + 600 + 'px';
                successFn && successFn();

            }});
    },
    init : function(args){
        var a = this.fn1();
        var b = this.fn2();
        this.idEl = args.idEl;
        this.onScroll(args.successFn);
        this.textLoad();
        //touchMoveFn.init(args.idEl,args.successFn,args.shortTouchFailFn);
    }
};


