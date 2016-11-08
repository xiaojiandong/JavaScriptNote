

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

/*** main.js ***/
// es6语法： (可以直接 import Vue from "vue")
// 引入 Vue 及vue-router
import Vue from "../node_modules/vue/dist/vue.min.js";
import VueRouter from "vue-router"; // es6会自动查找
Vue.use(VueRouter);

// 外部引入别的库都可以用这样的方式
// 引入我们编写的 .vue 单文件
import index from "./components/app.vue";
import list from "./components/list.vue";
import hello from "./components/hello.vue";
import bye from "./components/bye.vue";

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
           // 当匹配到/index/hello时，会在index的<router-view>内渲染
            '/hello' : {
              name : 'hello', // 可有可无，主要为了方便使用
              component : hello
          }
        }
    },
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
    '/bye' : {
        name : 'bye', // 在 app.vue 的脚本中，点击某个链接，则改变name的值进行跳转
        component : bye,

    }
});
// 定义全局重定向，重定向未匹配路径到 /index
router.redirect({
   '*' : '/index'
});
// 启动应用，路由器会创建一个App实例，并挂载到id #app
router.start(App , '#app');




/**
 * webpack-dev-server 命令启动后，
 * 在浏览器中输入地址：http://localhost:8080/webpack-dev-server/
 */
