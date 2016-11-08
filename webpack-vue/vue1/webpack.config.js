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

//模块导入
module.exports = {
  // 入口文件地址，不需要写完，会自动查找
  entry : './src/main',
  // 输出
  output : {
     //dist文件夹自动生成
     path : path.join(__dirname , './dist'),
     // 文件地址，使用绝对路径形式
     filename : '[name].js',//[name]是webpack根据入口文件自动生成的名字
     // 公共文件生成的地址
     publicPath : '/dist/'
  },
  // 服务器配置相关，自动刷新
  devServer : {
      historyApiFallback: true,
      hot: false,
      inline: true,
      grogress: true
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
         // .scss文件编译，安装了 css-loader style-loader sass-loader node-sass
          {
            test : /\.css$/,
            //loader : 'style!css!sass?sourceMap'
            loader : 'style-loader!css-loader'
          },
          {
            test : /\.less/,
            loader : 'style-loader!css-loader!less-loader'
          },
          // 图片转化，小于8k自动转化为base64的编码
          {
            test : /\.(png|jpg|gif)$/,
            loader : 'url-loader?limit=8192'
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
          css : 'style!css!autoprefixer'
      }
  },
  // 转化成ES5的语法
  babel : {
     presets : ['es2015'],
     plugins : ['transform-runtime']
  },
  resolve : {
     // require时省去的扩展名，如：require('abc')不需要写成abc.js
     extensions : ['','.js','.vue'],
     // 别名，可以直接使用别名来代表设定的路径及其他
     alias : {
         filter : path.join(__dirname , './src/filters'),
         components : path.join(__dirname , './src/components')
     }
  },
  // 开启source-map，webpack有多种source-map，
  devtool : 'eval-source-map'
};