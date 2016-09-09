/**
 * Created user : xiaojian
 * Created time : 2016/9/7
 * FileName :
 */


define(['jquery','SubjUtil'],function(jquery,SubjUtil){
    //console.log(SubjUtil.jqAjax());
    //console.log(SubjUtil);
    /**
     * mobile:
     * 安盈购mobile
     * https://cfb.pingan.com/m/campaigns/weixin-anying-buy.html?WT.mc_id=
     * 安盈两个月首购mobile
     * https://cfb.pingan.com/m/campaigns/mobile-anying-month2-buy.html?WT.mc_id=
     * 平安wifi现金送红包mobile
     * https://cfb.pingan.com/m/campaigns/mobile-pawifi-cash-red.html?WT.mc_id=
     * 宽途汽车大转盘mobile：
     * https://cfb.pingan.com/m/campaigns/mobile-kuantu-auto-disc.html?WT.mc_id=
     *
     * pc:
     * 安盈两个月首购pc：
     * https://cfb.pingan.com/campaigns/pc-anying-buy.html?WT.mc_id=
     *
     * app:
     * 安盈两个月首购app：
     * https://ncfb.pingan.com.cn/ncfb/mobile/dm/app/app-anying-month2-buy.html?WT.mc_id=
     *
     * 本地测试：
     * https://nts-tms-dmzstg1.pingan.com/m/campaigns/mobile-kuantu-auto-disc.html
     */

    // 原生获取节点id
    var returnObjId = function( id ){
       return document.getElementById(id);
    };
    // 原生处理事件兼容
    var addEventCommon = function(obj,fnType ,callBack){
        if( obj.addEventListener ){
            obj.addEventListener(fnType,function(){
                callBack && callBack();
            });
        }else{
            obj.attachEvent('on' + fnType,function(){
                callBack && callBack();
            });
        }
    };
    var loginCommon = function( opt ){
        var options = {};
        this.phone_id = opt.phone_id; // 手机号
        this.input_code_id = opt.input_code_id; // 输入验证码
        this.get_code_id = opt.get_code_id; // 获取验证码
        this.submit_id = opt.submit_id; // 提交
        this.successCallBack = opt.successCallBack; // 请求成功的回调
        this.failCallBack = opt.failCallBack; // 请求失败的回调

        options.phone_id = opt.phone_id;
        options.input_code_id = opt.input_code_id;
        options.get_code_id = opt.get_code_id;
        options.submit_id = opt.submit_id;
        options.successCallBack = opt.successCallBack;
        options.failCallBack = opt.failCallBack;
        //console.log('options : ');
        //console.log(options);
        this.bindEvents(options);
        this.validateParams(options);
    };
    loginCommon.prototype = {
        //  验证
        validateParams : function( options ){
            //  验证手机号码
            if(options.phone_id){
                var phoneObj = returnObjId(options.phone_id);
                //console.log( phoneObj );
                phoneObj.setAttribute('type','tel');
                phoneObj.setAttribute('maxlength','11');
            }else{
              console.warn('请输入手机号输入框1');
            }
            // 验证验证码
            if(options.input_code_id){
                var codeObj = returnObjId(options.input_code_id);
                codeObj.setAttribute('type','tel');
                codeObj.setAttribute('maxlength','4');
            }else{
                console.warn('请输入4位数验证码');
            }
        },

        // 绑定点击事件
        bindEvents : function( options ){
          //alert(options.submit_id);
          var getCodeId = returnObjId(options.get_code_id);
          var submitId = returnObjId(options.submit_id);
          var inputCodeId = returnObjId(options.input_code_id);
          var phoneId = returnObjId(options.phone_id);

            var repCode;
          // 点击获取验证码
          addEventCommon(getCodeId,'click',function(){
              var $code = $('#' + options.get_code_id);
              if(phoneId && phoneId.value != null){
                  var phoneNum = phoneId.value.trim();
                  // 验证手机号
                  if(!(/^1[34587]\d{9}$/.test(phoneNum))){
                      SubjUtil.tipMsg.info('请重新输入正确的11位数字手机号');
                  }else{
                     // alert('phoneId.value : '+phoneId.value);
                      if($code.hasClass('greyClass')){ // 防止重复发送验证码请求
                          SubjUtil.tipMsg.info('验证码已经发送到您的手机，请60s后重试')
                          return false;
                      }else{
                          // todo 发起请求，获取验证码
                          SubjUtil.jqAjax({},function(res){
                              console.log('请求成功res : ');
                              console.log(res);
                              repCode = Math.ceil(Math.random()*10000); // 验证码
                              SubjUtil.tipMsg.success('验证码'+repCode+'已发送至您的手机');
                              console.log('后端返回的验证码：'+repCode);
                              $code.addClass('greyClass');
                              // 60s倒计时后，验证码失效
                              var TIME_DOWN = 60;
                              var timer = setInterval(function(){
                                  TIME_DOWN -- ;
                                 //console.log('倒计时：' + TIME_DOWN);
                                  $code.find('button').eq(0).html(TIME_DOWN + 's后重新获取');
                                 if(TIME_DOWN < 0){
                                     //console.log('倒计时结束');
                                     $code.find('button').eq(0).html('点击获取验证码');
                                     $code.removeClass('greyClass');
                                     clearInterval(timer);
                                 }
                              },1000);
                          },function(err){
                              SubjUtil.tipMsg.info('验证码发送失败，请稍后重试');
                              throw Error('服务端接口异常，请稍后重试');
                          });
                      }
                  }
              }else{
                  console.warn('请输入手机号输入框2');
              }
          });

          // 点击提交
          addEventCommon(submitId,'click',function(){
               //alert('点击提交，你受到的验证码是：'+repCode);
              var phoneValue = phoneId.value.trim();
              var userCodeValue = inputCodeId.value.trim();
              if(phoneValue==null ||
                  phoneValue == ''||
                  !(/^1[34587]\d{9}$/.test(phoneValue))){
                  SubjUtil.tipMsg.info('请重新输入正确的11位数字手机号');
                  return false;
              }
              if(userCodeValue==null ||
                 userCodeValue == '' ||
                  !(/^\d{4}$/).test(userCodeValue)){
                  SubjUtil.tipMsg.warning('请先输入正确格式的4位数验证码');
                  return false;
              }
              // todo 获取用户输入的验证码，并匹配，将验证码发送给后端
              console.log('(或0000)你输入的验证码是：'+userCodeValue+'；后端返回的验证码是：'+repCode);
              // 点击提交，发送请求
              SubjUtil.jqAjaxGetLocal('test_login_data',function(res){
                  console.log('请求成功res : ');
                  console.log(res);
                  if(userCodeValue==repCode || userCodeValue=='0000'){ //用户输入的验证码与后端一致
                      options.successCallBack && options.successCallBack(res);
                      SubjUtil.localStorageData('user_phone',phoneValue);//将用户手机写入本地存储
                  }else{
                      options.failCallBack && options.failCallBack();
                  }
              },function(err){
                  console.log('请求失败err : ');
                  console.log(err);
                  options.failCallBack && options.failCallBack();
              });

          });

        }
    };

    //window.APP.login =  login;
    return loginCommon;
});
