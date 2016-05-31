/**
 * Created by Administrator on 2016/5/31.
 */


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