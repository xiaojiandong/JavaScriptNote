

/**
 * main.js是在命令行中编译的文件
 * 可以在其底部require其他文件
 * 开启 webpack -w命令，监听编译器中文件的变化
 * 再安装插件 npm install webpack-dev-server -g，浏览器自动刷新
 * 启动 webpack-dev-server命令
 */


//require('!style!css!./style.css'); // webpack语法规定
//require('less');

require("html?interpolate!../index.html"); // 在入口文件main.js中引入html
//var Style = require('./style.less');
//require('static/css/index.less');
//require('../index.less');

// 在main.js入口内，引入需要加载的.css或.less
//require('../index1.css'); // 有效
//require('../index1.less'); // 有效
// 在webpack.config.js配置里面，都是相对于 ./src的路径
require('./static/css/index1.less'); // 有效

// !style!css!  !style!css!less!

/*** main.js ***/
// es6语法： (可以直接 import Vue from "vue")
// 引入 Vue 及vue-router

import Vue from "../node_modules/vue/dist/vue.min.js";
import VueRouter from "vue-router"; // es6会自动查找,路由
import VueResource from "vue-resource"; // es6会自动查找，ajax请求
import SUBJ from "./static/js/SUBJ.Util.js"; // 公共部分js，里面是es6写法

Vue.use(VueRouter);
Vue.use(VueResource); // 在main.js内部引入并注册 vue-resource

Vue.prototype.SUBJ = SUBJ; // 将全局js挂载到Vue上

// 外部引入别的库都可以用这样的方式
// 引入我们编写的 .vue 单文件
import index from "./components/app.vue";
import login from "./components/top_components/login.vue"; // 登录
import sign from "./components/top_components/sign.vue"; // 注册
import myInfo from "./components/top_components/myInfo.vue"; // 我的主页
import home from "./components/home_components/home.vue"; // 首页
import select from "./components/select_components/select.vue"; // 评选
import topic from "./components/topic_components/topic.vue"; // 话题
import activity from "./components/activity_components/activity.vue"; // 活动

// 首页下面 swiper滑动，每个swiper对应的内容
// import swiperContent from "./components/home_components/swiperContent.vue"; // 每个子swiper点进去的内容




// 商品详情
//import goodDetail from "./components/goodDetail.vue"; // 商品详情


// 开启vue debug模式
Vue.config.debug = true;

new Vue(index); // 将主入口app.vue单页面注入Vue实例

// 路由器需要一个根组件
var App = Vue.extend({});
// 创建一个路由器实例
var router = new VueRouter();
// 每条路由应该映射到一个组件
// 路由嵌套
router.map({ // 定义路由映射
    '/index' : { // 访问地址
        name : 'index', //定义路由的名字，方便使用
        component : index, //引用的组件名称，对应上面import进来的组件
        // component : require('components/app.vue') 也可以
        // 在/index下设置一个子路由
        subRoutes : {
          '/home' : {
             name : 'home',
             component : home
          },
          '/select' : { // 评选
             name : 'select',
             component : select
          },
          '/topic' : { // 话题
             name : 'topic',
             component : topic
          },
          '/activity' : { // 活动
             name : 'activity',
             component : activity
          }
          /*
          // 每个子swiper点进去后对应的内容
          '/swiperContent' : {
                name : 'swiperContent',
                component : swiperContent
          }
          */
        }
    },
    '/login' : { // 登录页面路由
       name : 'login',
       component : login
    },
    '/sign' : { // 注册页面路由
       name : 'sign',
       component : sign
    },
    '/myInfo' : { // 我的主页路由
       name : 'myInfo',
       component : myInfo
    }
    /*
    '/list' : {
        name : 'list',
        component : list,
        subRoutes : {
            '/bye' : {
                name : 'bye',
                component : bye
            }
        }
    },


    */
    // 头部导航部分
    /*
    'navList' : {
        name : 'navList',
        component : navList,
        subRoutes : {
            // 导航下面的嵌套路由
            '/newfortune' : {
                name : 'newfortune',
                component : newfortune
            },
            '/hot' : {
                name : 'hot',
                component : hot
            },
            '/specialties' : {
                name : 'specialties',
                component : specialties
            },
            '/magazine' : {
                name : 'magazine',
                component : magazine
            }
        }
    }
    */
});
// 定义全局重定向，重定向未匹配路径到 /index
router.redirect({
   //'*' : '/index'
   '*' : '/index/home/'
});
// 启动应用，路由器会创建一个App实例，并挂载到id #app
router.start(App , '#app');




/**
 * webpack-dev-server 命令启动后，
 * 在浏览器中输入地址：http://localhost:8080/webpack-dev-server/
 * ajax -
 * vue-resource
 */
