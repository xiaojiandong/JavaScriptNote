
define(['jquery'],function(jquery){
    return Util = {
        // 初始化工具方法
        projectInit : function(){
            Util.viewPortScale();
        },
        // 移动端全局缩放，定宽640px
        viewPortScale : function(){
            var jsVer=29;
            var useScaledViewportMeta=function(){
                var e=parseInt(window.screen.width),t=e/640;$('head').append('<meta name="viewport" content="width=640, user-scalable=no, target-densitydpi=device-dpi,minimum-scale='+t+",maximum-scale="+t+'">');
            };
            var ua=navigator.userAgent;
            if(/Android (\d+\.\d+)/.test(ua)){
                var version=parseFloat(RegExp.$1);version>2.3?useScaledViewportMeta():$('head').append('<meta name="viewport" content="width=640, target-densitydpi=device-dpi">')
            }else{
                useScaledViewportMeta();
            }
            Util.outerContainerWrapFn();
        },
        // 通过url的参数key，获取value值
        getValueByKeyFromHref:function(name){
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
            var r = window.location.search.substr(1).match(reg);
            if (r!=null) return decodeURI((r[2])); return null;
        },
        // 在body下追加最外层父容器，640px
        outerContainerWrapFn : function(){
            var outerContainerWrap = "<div class='js_outer_container_wrap'></div>";
            $( "body" ).wrapInner( outerContainerWrap);
            $('.js_outer_container_wrap').css({
                'width': '640px',
                'margin': '0 auto',
                //'background': 'pink',
                'text-align': 'center',
                'overflow': 'hidden'
            });
        },
        // 创建弹窗
        alertMsgShow : function(msg){
            if($('#js_sixe_alert_wrap')){ // 存在弹窗，则先关闭
                $('#js_sixe_alert_wrap').remove();
                clearTimeout(timer1);
                clearTimeout(timer2);
            }
            var alertWrap = "<div id='js_sixe_alert_wrap' class='sixe-alert-wrap'>"
                + msg + "</div>";
            $('body').append(alertWrap);
            $('#js_sixe_alert_wrap').css({
                'color':'#fff',
                'background': 'rgba(0,0,0,0.7)',
                'position' : 'fixed',
                'left' : '50%',
                'top' : '50%',
                'z-index' : 10000,
                'width' : '400px',
                'height' : '200px',
                'line-height' : '200px',
                'margin-top' : '-100px',
                'margin-left' : '-200px',
                'text-align' : 'center',
                'font-size':'40px',
                'display' : 'block',
                'border-radius' : '20px'
            });
            var timer1 = setTimeout(function(){
                $('#js_sixe_alert_wrap').fadeOut(600);
            } , 1100);
            var timer2 = setTimeout(function(){
                $('#js_sixe_alert_wrap').remove();
            } , 1500);
        }
    };



    //return Util.viePortScale();

    //alert('cccc');


    //var jsVer = 29;
    /**
     * 一段动态的viewport meta设置，以640像素为基础宽度，动态全局缩放适配不同宽度的浏览器屏幕
     * @isAndroid:boolean  android环境下，不需要user-scalable参数，设置了反而引发了scale的失效
     */
    //var useScaledViewportMeta = function ( ) {
    //    var phoneWidth = parseInt(window.screen.width);
    //    var phoneScale = phoneWidth/640;
    //    document.write('<meta name="viewport" content="width=640, user-scalable=no, target-densitydpi=device-dpi,minimum-scale='+phoneScale+',maximum-scale='+phoneScale+'">');
    //};
    //var ua = navigator.userAgent;
    //if (/Android (\d+\.\d+)/.test(ua)){
    //    var version = parseFloat(RegExp.$1);
    //    // andriod 2.3
    //    if(version>2.3){
    //        useScaledViewportMeta();
    //        // andriod 2.3以上
    //    }else{
    //        document.write('<meta name="viewport" content="width=640, target-densitydpi=device-dpi">');
    //    }
    //    // 其他系统
    //} else {
    //    useScaledViewportMeta();
    //}

    /**
     * @public
     * 从浏览器的地址栏获取参数

    SIXE.Util.getValueFromHrefByKey = function (key) {
        //测试数据，实际情况是用window.location.href得到URL
        var sHref = window.location.href;
        //取出不带＃的URL
        sHref = sHref.split('#')[0];
        var args = sHref.split("?");
        var retval = "";
        // 参数为空
        if(args[0] == sHref){
            return retval; //无需做任何处理
        }
        var str = args[1];
        args = str.split("&");
        for(var i = 0; i < args.length; i++ ) {
            str = args[i];
            var arg = str.split("=");
            if(arg.length <= 1) continue;
            if(arg[0] == key) retval = arg[1];
        }
        //if(!retval){
        //    //alert('url中的' + key + '参数为空');
        //    console.log('url中的' + key + '参数为空');
        //}
        return retval;
    };
*/

    /**
     * 创建弹窗组件
     * @constructor

    SIXE.Alert = function(){
    };
    SIXE.Alert.$alert;
    SIXE.Alert.show = function( msg ){
        if($('#js_sixe_alert_wrap')){ // 存在弹窗，则先关闭
            $('#js_sixe_alert_wrap').remove();
            clearTimeout(timer1);
            clearTimeout(timer2);
        }
        var alertWrap = "<div id='js_sixe_alert_wrap' class='sixe-alert-wrap'>"
            + msg + "</div>";
        $('body').append(alertWrap);
        $('#js_sixe_alert_wrap').css({
            'color':'#fff',
            'background': 'rgba(0,0,0,0.7)',
            'position' : 'fixed',
            'left' : '50%',
            'top' : '50%',
            'z-index' : 10000,
            'width' : '400px',
            'height' : '200px',
            'line-height' : '200px',
            'margin-top' : '-100px',
            'margin-left' : '-200px',
            'text-align' : 'center',
            'font-size':'40px',
            'display' : 'block',
            'border-radius' : '20px'
        });

        var timer1 = setTimeout(function(){
            $('#js_sixe_alert_wrap').fadeOut(600);
        } , 1100);
        var timer2 = setTimeout(function(){
            $('#js_sixe_alert_wrap').remove();
        } , 1500);
    };
     */

    /**
     * @public
     * 从浏览器的地址栏获取参数

    SIXE.Util.getValueFromHrefByKey = function (key) {
        //测试数据，实际情况是用window.location.href得到URL
        var sHref = window.location.href;
        //取出不带＃的URL
        sHref = sHref.split('#')[0];
        var args = sHref.split("?");
        var retval = "";
        if(args[0] == sHref){
            return retval;
        }
        var str = args[1];
        args = str.split("&");
        for(var i = 0; i < args.length; i++ ) {
            str = args[i];
            var arg = str.split("=");
            if(arg.length <= 1) continue;
            if(arg[0] == key) retval = arg[1];
        }

        return retval;
    };
     */

});