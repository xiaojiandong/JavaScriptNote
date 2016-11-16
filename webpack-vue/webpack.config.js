/**
 * Created by xiaojian on 2016/11/1.
 */

/**
 * 在命令行执行webpack命令时，
 * 会自动搜索 webpack.config.js 文件
 * 这个文件是一个 nodejs模块，
 * 返回一个json格式的配置信息对象
 */

/*** webpack.config.js ***/
var Webpack = require('webpack');
var path = require('path'); // node的path对象

// extract-text-webpack-plugin插件用于将css和js分开
var ExtractTextPlugin = require('extract-text-webpack-plugin');
//var extractCSS = new ExtractTextPlugin('./[name].css');
//var extractLESS = new ExtractTextPlugin('stylesheets/[name].less');
//let lessExtractor = new ExtractTextPlugin('stylesheets/[name].less');

//模块导入
module.exports = {
  // 入口文件地址，不需要写完，会自动查找
  entry : './src/main.js', //可以为数组 ['./src/main1','./src/main2']
  //entry : [
     //'webpack/hot/only-dev-server' ,
     //'./src/main.js'
  //],
  // 输出
  output : {
     //dist文件夹自动生成
     path : path.join(__dirname , './dist'),
     // 文件地址，使用绝对路径形式
     //filename : '[name].js',//[name]是webpack根据入口文件自动生成的名字
     filename : '[name].bundle.js',//[name]是webpack根据入口文件自动生成的名字
     // 公共文件生成的地址
     publicPath : '/dist/'
  },
  // 服务器配置相关，自动刷新
  devServer : {
      //contentBase: './src/',
      historyApiFallback: true,
      hot: false,
      inline: true,
      grogress: true
      // webpack设置代理，处理跨域请求,webpack-dev-server
      /*
      proxy: {
          // 本地开发：http://localhost:8080/webpack-dev-server/
          // 正式请求数据的接口地址：http://m.ikuyu.cn/topic/topiclists/2
          '*': {
              // http://localhost:8080/webpack-dev-server/ , localhost:8080
              //target: 'http://m.ikuyu.cn/',
              target: 'http://localhost:8080/webpack-dev-server/',
              //host:'http://m.xxx.cn', // 其他服务器上的资源
              secure: false,
              changeOrigin: true
          }
      }
       */
  },
  // 加载器
  module : {
      loaders : [
        // 解析 .vue文件
          {
            test : /\.vue$/,
            loader : 'vue'
          },
        // babel转化ES6的语法
          {
            test : /\.js$/,
            loader : 'babel',
            exclude : /node_modules/
          },
/*
          {
            test: /\.(less|css)$/,
            loader: ExtractTextPlugin.extract('style', 'css!less')
          },
*/
          {
            test : /\.less$/,
            loader : 'style-loader!css-loader!less-loader?importLoaders=2!autoprefixer!less'
          },


          // .scss文件编译，安装了 css-loader style-loader sass-loader node-sass
          {
              test : /\.css$/,
              //loader : 'style!css!sass?sourceMap'
              //loader : 'style-loader!css-loader'
              loader:  ExtractTextPlugin.extract("style-loader","css-loader") //压缩成独立的.css文件
          },
          // 图片转化，小于8k自动转化为base64的编码
          {
            test : /\.(png|jpg|gif)$/,
            //loader : 'url-loader?limit=8192' //图片大小的限制
            loader : 'url-loader'
          },
          // html模板编译
          {
            test : /\.(html|tpl)$/,
            loader : 'html-loader'
          }
      ]
  },
  // .vue的配置，单独拿出来(推荐使用)
  vue : {
      loaders : {
          css : 'style!css!autoprefixer',
          html : 'html-loader'
      }
  },
  // 转化成ES5的语法
  babel : {
     presets : ['es2015'],
     plugins: ['transform-runtime']
  },
  plugins : [
        //'transform-runtime',
        /**/
        // webpack自带的压缩插件
        new Webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        // 通过require的插件 extract-text-webpack-plugin，单独分离css打包
        new ExtractTextPlugin("main.css"),
       // extractCSS
  ],
  resolve : {
     // require时省去的扩展名，如：require('abc')不需要写成abc.js
     extensions : ['','.js','.vue','.less','.css'],
     // 别名，可以直接使用别名来代表设定的路径及其他
     alias : {
         filter : path.join(__dirname , './src/filters'),
         components : path.join(__dirname , './src/components')
     }
  },
  // 开启source-map，webpack有多种source-map，
  devtool : 'eval-source-map'
  //devtool : 'false' // 开发环境设为false，则压缩出来的 dist/main.bundle.js体积会变小
};