/**
 * Created user : xiaojian
 * Created time : 2016/8/11
 * FileName :
 */

require.config({
    baseUrl : '../static/js/libs/',
    waitSeconds : 10,
    urlArgs : 'v=my-requirejs', // js后面的参数
    paths : {
        'zepto' : 'zepto.1.1.7.min',
        'jquery' : 'jquery.2.1.3.min',
        'vue' : 'vue.1.0.24.min',
        'bootstrap' : 'bootstrap3.3.5.min',
        'weixin' : 'weixin-1.0.0',
        'angular':'angular.1.3.20.min',
        'swiper':'swiper.3.3.0.min',
        'jQueryRotate':'jQueryRotate.2.2',
        'jQueryEasing':'jquery.easing.min',
        'underscore' : 'underscore-1.8.0.min',
        'WeixinUtil' : 'common/Weixin.Util',
        'SubjUtil' : 'common/SUBJ.Util',
        'BaseUtil' : 'common/BASE.Util',
        'LoginUtil' : 'common/LoginUtil'
    },
    shim : {
        'jquery' : {
            'exports' : 'jquery'
        },
        'underscore' : {
            'exports' : '_'
        },
        'bootstrap' : {
            'deps' : ['jquery'],
            'exports' : 'bootstrap'
        },
        'swiper' : {
            'deps' : ['jquery'],
            'exports' : 'swiper'
        },
        'jQueryRotate' : {
            'deps' : ['jquery'],
            'exports' : 'jQueryRotate'
        },
        'jQueryEasing' : {
            'deps' : ['jquery'],
            'exports' : 'jQueryEasing'
        },
        'WeixinUtil' : {
            'deps' : ['weixin'],
            'exports' : 'WeixinUtil'
        },
        'SubjUtil' : {
            'deps' : ['jquery'],
            'exports' : 'SubjUtil'
        },
        'BaseUtil' : {
            'deps' : ['jquery'],
            'exports' : 'BaseUtil'
        } ,
        'LoginUtil' : { // 登陆插件
            'deps' : ['jquery'],
            'exports' : 'LoginUtil'
        }
    }
});
