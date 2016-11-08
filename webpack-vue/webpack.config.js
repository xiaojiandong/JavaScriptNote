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
var HtmlWebpackPlugin = require('html-webpack-plugin'); // 压缩html，暂时未用到
module.exports = {
  entry : ['./enter.js'],
  output : {
      path : __dirname,
      filename : 'bundle.js'
  },
  module : {
      loaders : [
          {
           test : /\.css$/,
           loader : 'style!css'
          },
          {
            test : /\.(png|jpg|gif|jpeg)$/,
            loader : 'url-loader?limit=8192'
          },
          {
              test : /\.html$/,
              loader : 'html'
          }
      ]
  },
  plugins : [
      //new HtmlWebpackPlugin(),
      new Webpack.HotModuleReplacementPlugin(), // 自动刷新插件,(只会刷新 loaders 数组下的文件改动)
      new Webpack.BannerPlugin('这里是打包文件头部注释')//注意这里是个数组
  ]
};
