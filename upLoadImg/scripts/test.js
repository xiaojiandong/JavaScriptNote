


require(['jquery','projectCommonUtil','lrzBundle'],function(jquery,projectCommonUtil,lrzBundle){
   //alert('test.js');
   // Util.viePortScale();

    //console.log(Util.a);
    Util.projectInit();
    var a = Util.getValueByKeyFromHref('isShow');

    $('.outer-bg-wrap').css({
        'height' : $(window).height() + 'px'
    });
    var userInfoData = {}; // 用户全部的信息
    userInfoData.sex = 0; // 默认用户为 男

    var uploadImgArr = new Array(3); // 用户上传的img信息，为3个元素的数组
    var sexObj = $('.js_sex_btn');
    sexObj.on('click' , function( e ){
        var currentTarget = $(e.currentTarget);
        var value = currentTarget.attr('data-value'); // 获取性别类型; 0-先生，1-女士
        sexObj.removeClass('active');
        currentTarget.addClass('active');
        userInfoData.sex = value; // 用户性别
    });

    // 第1个输入框
    var jsInpFile1Obj = $('.js_inp_file1'); // 获取input框
    var jsFileImgWrap1Obj = $('.js_file_img_wrap1'); // 获取存储img的容器
    upLoadImgFile( jsInpFile1Obj , jsFileImgWrap1Obj );

    // 第2个输入框
    var jsInpFile2Obj = $('.js_inp_file2'); // 获取input框
    var jsFileImgWrap2Obj = $('.js_file_img_wrap2'); // 获取存储img的容器
    upLoadImgFile( jsInpFile2Obj , jsFileImgWrap2Obj );
    // 第3个输入框
    var jsInpFile3Obj = $('.js_inp_file3'); // 获取input框
    var jsFileImgWrap3Obj = $('.js_file_img_wrap3'); // 获取存储img的容器
    upLoadImgFile( jsInpFile3Obj , jsFileImgWrap3Obj );

    // 点击生成感谢信btn
    $('.js_create_letter_btn').on('click' , function(){
        $.each(uploadImgArr, function(index, value) {
            if(value == null){ // 如果用户未传img，则赋值为""
                uploadImgArr[index] = "";
            }
        });
        userInfoData.username = $('.js_user_name_inp').val(); // 用户名字
        userInfoData.uploadImgArr = uploadImgArr; // 用户上传的img数组

        // todo 判断用户是否已经填写完名字，是否上传了img
        if( hasCheckUserNameAndImg() ){
            // 用户名，性别，img都填写完整，则向服务端发起请求，且页面跳转
            //ajaxServer( userInfoData );
        }
    });

    /**
     * 验证用户名字 / 选择img
     */
    function hasCheckUserNameAndImg (){
        var imgLen = $('.file-img-wrap').find('img').length;
        var userName = $('.js_user_name_inp').val(); // 用户名
        if( imgLen > 0 && userName != ''){ // 已上传img，且有名字
            return true;
        }else if( userName == ''){ // 未上传img
            //alert('请写上你的名字');
            Util.alertMsgShow('请写上你的名字');
            return false;
        }else if(imgLen <= 0 ){
            //alert('请上传至少一张img');
            Util.alertMsgShow('请上传至少一张图片');
            return false;
        }
    }

    /**
     * 封装一个方法，用于上传当前input的图片
     */
    function upLoadImgFile( inpObj , imgWrapObj){
        inpObj.on('change', function(){
            //$('input[name=logo]').on('change', function(){
            var that = this;
            //lrz(that.files[0] , {width : 143 , fieldName: 'photo'})
            lrz(that.files[0] , {width : 555})
                .then(function (rst) {
                    var dataFileId = inpObj.attr('data-fileId'); // 当前点击的input节点的索引值
                    var imgsLen = imgWrapObj.find('img').length;
                    //console.log('当前容器内img的长度');
                    //console.log(imgsLen);
                    if( imgsLen >= 1 ){ // 容器内已经存在上一张img
                        //imgWrapObj.html('');
                        imgWrapObj.find('img').remove(); // 删除上一张img
                    }

                    //var jsCommonImgWrap = $('.js_common_img_wrap');
                    //console.log(imgWrapObj.length);

                    //console.log('上传成功');
                    /*
                     $.ajax({
                     url: site_url + 'api/user/updLogo',
                     type: 'post',
                     data: {img: rst.base64},
                     dataType: 'json',
                     timeout: 200000,
                     error: doAjax.error,
                     success: doAjax.success,
                     });
                     */

                    // img应该在ajax请求成功之后追加到节点中
                    var img = new Image();
                    img.src = rst.base64;
                    uploadImgArr[dataFileId] = rst.base64;

                    //var imgDiv = $("<div class='js_img_wrap'></div>");
                    img.className = 'js_up_load_new_img_'+ dataFileId;
                    img.onload = function () {
                        //that.parentNode.appendChild(div);
                        //img.className = 'new-img';

                        // 追加img到容器成功后
                        imgWrapObj.append(img);
                        // 显示取消的btn
                        var cancleDivBnt = "<div class='cancle-upload-img-btn js_cancle_btn' data-cancleId=" +dataFileId + "></div>";
                        imgWrapObj.append(cancleDivBnt);

                        // 点击删除img的btn，删除已上传的img，并且删除指定的 uploadImgArr元素
                        $('.js_cancle_btn').on('click' , function(e){
                            //var currentCancleBtnId = $(e.currentTarget).attr('data-cancleId');
                            uploadImgArr[dataFileId] = ""; // 清空rst.base64
                            $(this).prev().remove(); // 删除刚才上传的img
                            $(this).remove(); // 删除btn自身
                        });

                        // 适配用户上传的img，并做定位
                        calculateUpLoadImgPosition( dataFileId );
                    };

                    console.log('上传的 rst info ：');
                    //console.log('新创建的对象img :');
                    console.log(rst);
                    //console.log('rst.canvas.width : '+rst.canvas.width + 'rst.canvas.height : ' + rst.canvas.height);

                    //console.log('uploadImgArr : ');
                    //console.log(uploadImgArr);
                    return rst;
                    // todo ajax传递给服务端
                })
                .catch(function (err) {
                })
                .always(function () {
                });
        });

        // 动态计算页面上传的img居中显示
        function calculateUpLoadImgPosition( dataFileId ){
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
                //var topDistance = (BOX_COMTAINER_H - currentImgHeight) / 2; // 距离顶部高度
                //console.log('父容器高 ： ' + BOX_COMTAINER_H);
                //console.log('当前img宽 ： ' + currentImgWidth);
                //console.log('当前img高 ： ' + currentImgHeight);
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

        //function serverAjax( rst ){
        //  $.ajax({
        //    url:'savePhoto.php?act=upload',
        //    type: "POST",
        //    data: ({photo:rst.base64}),
        //    dataType: 'json',
        //    beforeSend:function(){
        //      //$(".upload_info").text("上传中...");
        //      console.log("上传中...");
        //    },
        //    success:function(){
        //      //$(".upload_info").text("上传完成...");
        //      console.log("上传完成...");
        //    },
        //    error : function(){
        //      console.log("上传失败...");
        //    }
        //  });
        //}
    }

    // 点击生成感谢信，发起请求
    function ajaxServer( userInfoData ){
        $.ajax({
            url: 'http://yslstaticcontent.6edigital.cn/moetphotoweb/web/index.php?r=card%2Fcreate',
            type: 'post',
            data: {
                username : userInfoData.username,
                sex : userInfoData.sex, // 0 -> 男，1 -> 女
                imgpath1 : userInfoData.uploadImgArr[0], // 第1张img 的信息 ( 必须保证至少一个不为空，照片未传，则显示"" )
                imgpath2 : userInfoData.uploadImgArr[1], // 第2张img 的信息
                imgpath3 : userInfoData.uploadImgArr[2]  // 第3张img 的信息
            },
            dataType: 'json',
            //timeout: 200000,
            error: function(){
                console.log('请求失败');
            },
            success: function( resData ){
                console.log('请求成功');
                console.log(resData);
                // 请求成功后，页面跳转，并且在url后面带上用户id
                location.href = 'thanksLetter.html?userid=' + resData.data.id;
            }
        });
    }

    /*
     // 点击生成感谢信，向服务器端发起请求
     $.ajax({
     url: 'http://yslstaticcontent.6edigital.cn/moetphotoweb/web/index.php?r=card%2Fcreate',
     type: 'post',
     data: {
     //img: rst.base64,
     username : 'luce',
     sex : 0, // 0 -> 男，1 -> 女
     imgpath1 : uploadImgArr[0], // 第1张img 的信息 ( 必须保证至少一个不为空 )
     imgpath2 : uploadImgArr[1], // 第2张img 的信息
     imgpath3 : uploadImgArr[2]  // 第3张img 的信息
     },
     dataType: 'json',
     //timeout: 200000,
     error: function(){
     console.log('请求失败');
     },
     success: function( resData ){
     console.log('请求成功');
     console.log(resData);
     }
     });
     */
});

/*
$(function(){
});
*/



