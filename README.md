# JavaScriptNote
js note

# 微信分享，jquery ajax请求，上传img插件
### 重要的脚本在 index.js中
##### https://github.com/xiaojiandong/JavaScriptNote/blob/master/wxAndAjax/scripts/index.js

# 结合require.js和lrz.bundle.js上传img
## 效果图：
![image](https://github.com/xiaojiandong/JavaScriptNote/blob/master/upLoadImg/images/view.png)
## 通过脚本控制将上传的img剧中显示，并将img的base64传给后端
## 局部代码：
```js
   // require_config.js 配置脚本
   require.config({
    'baseUrl' : 'app/',
    'paths' : {
        'jquery' : '../scripts/jquery.min',
        'projectCommonUtil' : '../scripts/ProjectCommonUtil', // 一些项目的公共方法
        'lrzBundle' : '../scripts/lrz.bundle', // 上传img的插件
        'lrzAllBundle' : '../scripts/lrz.all.bundle',
        'chunk1' : '../scripts/1.chunk',
        'chunk2' : '../scripts/2.chunk'
    }
});
require(['jquery','projectCommonUtil','lrzBundle','lrzAllBundle','chunk1','chunk2'],
    function(jquery,projectCommonUtil,lrz_bundle,lrz_all_bundle,chunk1,chunk2){
});

// index.js 计算上传img剧中
    function calculateUpLoadImgPosition( dataFileId ){ // 上传img的id
            var BOX_COMTAINER_W = 143; // 存放img容器的宽高，常量
            var BOX_COMTAINER_H = 143;
            var currentNewImgObj = $('.js_up_load_new_img_' + dataFileId); // 当前上传的img对象
            // 当前上传的img宽高
            var currentImgWidth = currentNewImgObj.width();
            var currentImgHeight = currentNewImgObj.height();
            // 求出当前上传的img宽高比
            var percentWidthAndHeight = (currentImgWidth / currentImgHeight).toFixed(2); // 保留两位小数
            /**
             * todo
             * 容器的宽高 143 * 143
             * 1：W>H，则定宽，高度自适应
             * 2: W<H，则定高，宽度自适应
             */
            if( percentWidthAndHeight > 1 ){ // w > h ，定宽 143px
                var seeImgW = ((currentImgHeight / currentImgWidth) * BOX_COMTAINER_W).toFixed(4);
                var topDistance = (BOX_COMTAINER_H - seeImgW) / 2;
                currentNewImgObj.css({
                    'top' : topDistance +'px',
                    'width' : BOX_COMTAINER_W + 'px'
                });
            }else{ // 定高 140px
                var afterScaleW = (BOX_COMTAINER_H * percentWidthAndHeight).toFixed(2);
                var leftDistance = (BOX_COMTAINER_W - afterScaleW) / 2; // 距离左边高度
                currentNewImgObj.css({
                    'left' : leftDistance +'px',
                    'height' : BOX_COMTAINER_H + 'px',
                    'width' : afterScaleW + 'px'
                });
            }
        }
```
```html
  <!-- 在index.html下面引入脚本 -->
  <!-- require.js和脚本配置文件 -->
  <script src="scripts/require.js"></script>
  <script src="scripts/require_config.js"></script>
  <!-- 入口主脚本 -->
  <script src="scripts/index.js"></script>
```
