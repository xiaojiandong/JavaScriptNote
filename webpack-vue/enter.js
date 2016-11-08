

/**
 * enter.js是在命令行中编译的文件
 * 可以在其底部require其他文件
 * 开启 webpack -w命令，监听编译器中文件的变化
 * 再安装插件 npm install webpack-dev-server -g，浏览器自动刷新
 * 启动 webpack-dev-server命令
 */
/*** enter.js ***/
document.getElementById('app').innerHTML="这是我第一个打包成功的程序(from webpack)";

// 添加first.js
require('./first.js');

// 添加style.css
require('!style!css!./style.css'); // webpack语法规定

// 添加index.html
require("html?interpolate!./index.html"); // 要在webpack.config.js中的loaders数组内配置

/**
 * webpack-dev-server 命令启动后，
 * 在浏览器中输入地址：http://localhost:8080/webpack-dev-server/
 */

// 添加vue
var Vue = require('vue'); // 左侧Vue变量，右侧引入vue模块
var app1 = new Vue({
    el : '#app1',
    data : {
        msg : '这是来自enter.js内vue的 hello webpack + vue , 单文件'
    }
});