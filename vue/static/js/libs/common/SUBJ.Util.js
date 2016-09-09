/**
 * Created user : xiaojian
 * Created time : 2016/8/11
 * FileName :
 */

define(['jquery','vue'],function(jquery,vue){
    //console.log(vue);
  var SubjUtil = {
      vue : vue, // 将vue库 赋值给 SubjUtil.vue 属性
      a : 'jsdhjkdh',
      fn1 : function(){
          alert(82828);
      },
      urlPath : function(){
        return {
            jsonPath : location.origin
        }
      },
      /**
       * 设置cookie
       */
      setCookie : function(name,value,hours){
         if(hours){
            var data = new Date();
             data.setTime(date.getTime()+(hours*60*60*10000));
             var expires = '; expires='+date.toGMTString();
         } else {
           var expires = '';
           var _domain = location.host;// 端口号
           document.cookie=name+'='+encodeURI(value)+expires+'; path=/;domain='+_domain;
         }
      },
      /**
       * 读取cookie
       * @param key
       * @param value
       */
      getCookie : function(name){
        var nameEQ = name + '=';
        var ca = document.cookie.split(';');
        for(var i = 0;i<ca.length;i++){
            var c = ca[i];
            while(c.charAt(0)==' '){
                c = c.substring(1, c.length);
            }
            if(c.indexOf(nameEQ) == 0){
                return c.substring(nameEQ.length, c.length);
            }
        }
        return null;
      },
      /**
       * H5本地存储
       * @param key
       * @param value
       * 1. SubjUtil.localStorageData('a',20); // 设置本地存储a
       * 2. var a1 = SubjUtil.localStorageData('a'); // 获取本地存储
       */
      localStorageData : function(key,value){
        // 处理localStorage兼容
        var copylocalStorage = window.localStorage || {
             getItem : function(itemKey){//获取
                 SubjUtil.getCookie(itemKey);
             },
             setItem : function(itemKey,itemValue){ // 设置
                 SubjUtil.setCookie(itemKey,itemValue);
             },
             removeItem : function(itemKey){ // 移除
                 SubjUtil.setCookie(itemKey,itemValue,-1);
             }
            };
        var getItemValue = function(){
            var data = copylocalStorage.getItem(key);
            try{
              data = JSON.parse(data);
            }catch(e){
              console.log(e);
            }
            return data;
        };
        if(key && value == 'undefined'){
            return  getItemValue();
        }
        switch (toString.call(value)){
            case '[object Undefined]' :
                return  getItemValue();
            case '[object Null]' :
                copylocalStorage.removeItem(key);
                break;
            default :
                copylocalStorage.setItem(key,JSON.stringify(value));
                break;
        }
      },
      /**
       * 通过url的key值，返回对应的value
       * @param name
       * @returns {*}
       */
      getValueFromUrlByKey:function(name){
          var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
          var r = window.location.search.substr(1).match(reg);
          if (r!=null) return decodeURI((r[2])); return null;
      },
      /**
       * 判断在一个longStr中是否存在一个specailStr，
       * 返回boolean
       * @param longStr
       * @param specailStr
       * @returns {boolean}
       */
      hasSpecailStrFromLongStr : function(longStr,specailStr){
          if(longStr.indexOf(specailStr) > 0){ // 存在指定的str
              return true;
          }else{ // 不存在
              return false;
          }
      },
      /**
       * 截取指定字符串前后的字符串
       * 原始长longStr;指定str;index - (0:之前，1:之后)
       * @param longStr
       * @param str
       * @param index
       * @returns {*}
       */
     getBeforeOrAfterStr : function(longStr,str,index){
        var str_before = longStr.split(str)[0];
        var str_after = longStr.split(str)[1];
        //alert('前：'+str_before+' - 后：'+str_after);
        if(index == 0){ // 截取str之前的
            return str_before;
        }else{ // 截取str之后的
            return str_after;
        }
     },
      /**
       * 判断访问页面的平台设备
       * 返回type：android,ios,pc
       * 针对当前设备类型，做业务处理
        * @returns {*}
       */
     getUaDeviceType : function(){
      var type;
      var ua = navigator.userAgent.toLowerCase();
          //console.log(ua);
      if(ua.indexOf('android') != -1){//android
          type = 'android';
      }else if(ua.indexOf('iphone os') != -1 || ua.indexOf('ipad') != -1){
          type = 'ios';
      }else{
          type = 'pc';
      };
      return type;
    },
     /**
      * 判断访问浏览器的设备
      * 是否为移动端：返回bollean
      */
     isMobileDevice : function(){
        var dType = SubjUtil.getUaDeviceType();
        if(dType != 'pc'){
           return true;
        }else{
           return false;
        }
     },
     /**
      * 判断当前页面是否被微信访问
      * 返回boolean
      */
     isWeiChatVisited : function(){
       var ua = navigator.userAgent.toLowerCase();
       if(ua.indexOf('micromessenger/')>-1){ // 微信
          return true;
       }else{
          return false;
       }
       //document.body.addEventListener('touchmove', e.preventDefault(), false); // 禁止滚动
     },
      /**
       * 移动端640px适配
       */
      useScaledViewportFn : function(){
          var useScaledViewportMeta = function ( ) {
              var phoneWidth = parseInt(window.screen.width);
              var phoneScale = phoneWidth/640;
              $('head').append('<meta name="viewport" content="width=640, user-scalable=no, target-densitydpi=device-dpi,minimum-scale='+phoneScale+',maximum-scale='+phoneScale+'">');
          };
          var ua = navigator.userAgent;
          if (/Android (\d+\.\d+)/.test(ua)){
              var version = parseFloat(RegExp.$1);
              // andriod 2.3
              if(version>2.3){
                  useScaledViewportMeta();
                  // andriod 2.3以上
              }else{
                  $('head').append('<meta name="viewport" content="width=640, target-densitydpi=device-dpi">');
              }
              // 其他系统
          } else {
              useScaledViewportMeta();
          }
     },
      /**
       * 该方法用于将页面内全部元素包裹在640宽度的div中，
       * 实现viewport缩放
       */
     outerContainerWrapFn : function(){
          SubjUtil.useScaledViewportFn();
          var outerContainerWrap = "<div id='JS_Outer_Container_Wrap_XYZ'></div>";
          $( "body" ).wrapInner( outerContainerWrap);
          $('#JS_Outer_Container_Wrap_XYZ').css({
              'width': '640px',
              'margin': '0 auto',
              'background': 'pink',
              'text-align': 'center',
              'overflow': 'hidden'
          });
          $('html').css({
              'font-family' : '微软雅黑',
              'margin' : 0,
              'padding' : 0,
              'background-color' : 'none'
          });
      },
      /**
       * jquery的ajax请求方法
       */
     jqAjax : function(data,successCallBack,failCallBack){
        $.ajax({
           url : 'http://xurtis.com:3000/test/dzfTest?',
           data : data,
           timeout : 3000,
           type : 'POST',
           // dataType : 'dataType' :http://xurtis:3000/dzfTest?classNo=111&grade=primary
           dataType : 'json',
              success : function(res){ // 请求成功后的处理
                  //alert('成功');
                  if(successCallBack){
                      successCallBack(res);
                  }
                },
               error : function(err){ // 请求失败后的处理
                   //alert('请求失败');
                   failCallBack && failCallBack(err);

                }
          });
      },
      /**
       * jquery的ajax请求方法
       */
      jqAjaxGetLocal : function(jsonFile,successCallBack,failCallBack){
          //jsonFile = jsonFile || 'test_login_data';
         var dataPath =  SubjUtil.urlPath().jsonPath+'/vue/static/js/json_data/'+jsonFile+'.json';
          //console.log('获取本地的json数据 jqAjaxLocal:'+dataPath);
        $.ajax({
           url : dataPath,
           timeout : 3000,
           type : 'GET',
           // dataType : 'dataType' :http://xurtis:3000/dzfTest?classNo=111&grade=primary
           dataType : 'json',
              success : function(res){ // 请求成功后的处理
                  //alert('成功');
                  if(successCallBack){
                      successCallBack(res);
                  }
                },
               error : function(err){ // 请求失败后的处理
                   //alert('请求失败');
                   failCallBack && failCallBack(err);

                }
          });
      },
      /**
       * 检测用户是否已登录，返回boolean
       */
      isLogin : function(){
          var yesLogin;
          SubjUtil.jqAjaxGetLocal('test_login_data',function(res){
              yesLogin = res.hasLogined;
              //return res.hasLogined;
              return yesLogin;

              //yesLogin = res.hasLogined;
          },function(){ // 请求失败
              return false;
          });
      },

      /**
       *vue的ajax请求方法
       */
     vueAjax : function(){

     },
      /**
       * 获取传入函数的参数个数
       */
     howManyArgs : function(){
        console.log('arguments参数长度：' + arguments.length);
        for(var i=0;i<arguments.length;i++){
          alert('arg['+i+'] = '+arguments[i]);
        }
      },
      /**
       * 遍历数组
       */
      forEachArray : function( arr ){
          var arr1 = ['a',10,true]; // 假如传入的数组
          //console.dir(arr); 查字典
          //console.dir(Array);
          //Array.isArray(arr1); -> true ,ES5检测数组的方法
          //console.log( arr1 instanceof Array ); -> true
          var type = 1;
          if(type == 1){ // 使用forEach方法遍历
             arr.forEach(function(value,index,data){
                console.log('index索引：'+index+'; value值:'+value+'; 当前传入的arr数组:'+data);
             });
          }else{ // 使用for方法遍历
             for(var k in arr){
                 console.log('k值:'+k+';value值:'+arr[k]);
             }
          }
      },
      /**
       * 动态创建节点到HTML
       */
      createElementNode : function(){
         var el = document.createElement('div');
          el.id = 'J_d1';
          el.className = 'd-class-1';
          var img1 = "<img src='http:/xxxx.png' />";
          el.innerHTML = img1;
          el.style.width = '200px';
          document.body.appendChild(el);
          //location.href = 'http://www.baidu.com'; // 跳转链接
          /**
           * 原生js获取子节点
           * var d1 = document.getElementById('d1');
           * 1. d1.getElementsByTagName('img')[0].style.borderRight = '10px solid #000';
           * 2. d1.childNodes.items(0).style.borderLeft = '5px solid red';
           * 3. d1.getElementsByTagName('img')[0].cssText += 'border-top:4px solid bule';
           */
          /**
           * 原生点击事件
           * html:
           *   <ul id='J_ul'>
           *      <li attr-id='0'>语文</li>
           *      <li attr-id='1'>数学</li>
           *      <li attr-id='2'>外语</li>
           *   </ul>
           * js:
           * var Jul = document.getElementById('J_ul');
           * var lis = Jul.getElementsByTagName('li');
           * Jul.addEventListener('click',function(e){
           *    var e = e || window.event;
           *    var target = e.target || e.srcElement;
           *    target.style.cssText = 'background:red';
           *    console.log(target.innerText + '; attr-id: ' + target.getAttribute('attr-id') );
           *    console.log( e );
           *    https://www.zhihu.com/question/27427250/answer/117674202
           * });
           */
          /**
           * 打开新窗口
           * setTimeout(function(){
           *   window.open('www.baidu.com');
           * });
           * 关闭当前窗口
           * window.close();
           */
          /**
           * 禁止窗口滚动
           * onmousewheel = function(){
           *    return false;
           * }
           * 解除禁止滚动
           * onmousewheel = function(){
           *    return true;
           * }
           */
      },
      // H5地理定位
      geolocationPostion : function(){
        navigator.geolocation;
      },

      // 排序与求最大最小值
      sortAndNumCount : function(){
         // 求最大值
         var maxNumFn = function(){
           var max = arguments[0]; // 假设最大值为第一个
           for( var i=0;i<arguments.length;i++ ){
               max = max > arguments[i]?max:arguments[i];
           }
           return max;
         };
         // maxNumFn( [20,3,54] );
        // 数组排序
        var numAscSort = function( a , b ){ // 升序
            return a - b;
        };
        var numDescSort = function( a , b ){ // 倒叙
           return b - a;
        };
        var arr = [20,4,54,39]; // 原数组
        arr.sort( numAscSort ); // 排序后的数组
        console.log(arr);
        arr.sort( numDescSort );
      },

      // 原型扩展
      prototypeCommonFn : function(){
          /**
           * 对字符串类型的原型扩展
           * 判断一个字符串是否包含特殊的字符
           * 返回boolean
           */
         String.prototype.hasShortStr = function( shortStr ){
           var _this = this; // 调用hasShortStr方法的对象A
           var originalStr = ''; // 原始的对象A
           for(var i=0;i<_this.length;i++){
               originalStr += _this[i];
           }
           //console.log(originalStr);
           if(originalStr.indexOf(shortStr) > -1){ // 存在特殊字符串，返回true
               return true;
           }else{
               return false;
           }
         };
         //var httpStr = 'http://baidu.com';
          //httpStr.hasShortStr( 'bai' ); // 返回true
          //httpStr.hasShortStr( 'chai' ); // 返回false

          /**
           * 对数组Array原型的扩展
           * 删除一个元素
            */
          Array.prototype.remove = function( index ){
             var _this = this;
             if( !index || isNaN(index) ){
                 throw  Error('请选定删除元素的索引');
                 return false
             }else{
                 var removeStr = _this.splice(index,1);
                 return removeStr[0]; // 返回被删除的元素
             }
          };
          /**
           * var arr = [1,3,'hehe',false];
           * var a = arr.remove(0); // -> 1
           * console,log(arr); // -> [3,'hehe',false]
           *
           * for(var k in arr){
           *   if( !arr.hasOwnProperty(k) ){ // 若arr中不包含k所对应的remove，则跳出循环
           *     continue; //跳出当前循环，执行下面的循环
           *     //break; // 直接跳出了全部循环
           *   }
           *   console.log('k : '+k+'; 值:'+arr[k]);
           * }
           */
          // 返回对象或数组全部的key值
          _.allKeys = function(obj){
            var keys = [];
            var dataType = ['string','boolean','function'];
            // 字符串。布尔值，数字，方法类型的数据，则返回
            for(var i=0;i<dataType.length;i++){
               if(typeof obj == dataType[i] || !isNaN(obj)){
                   throw Error('参数必须是数组或对象类型的数据');
                   return;
               }
            }
            for(var k in obj){
                keys.push(k);
            }
            return keys;//返回该对象(或数组)全部的key值
          };
          // 返回对象或数组全部的value值
          _.allValues = function(){
              var values = [];
              var dataType = ['string','boolean','function'];
              // 字符串。布尔值，数字，方法类型的数据，则返回
              for(var i=0;i<dataType.length;i++){
                  if(typeof obj == dataType[i] || !isNaN(obj)){
                      throw Error('参数必须是数组或对象类型的数据');
                      return;
                  }
              }
              for(var k in obj){
                  values.push(obj[k]);
              }
              return values;//返回该对象(或数组)全部的value值
          };
          /**
           * var obj = {
           *   name : '张三',
           *   age : 20,
           *   sex : '男'
           * }
           * var keys = _.allKeys( obj );
           * console.log( keys ); -> ['name','age','sex']
           * var values = _.allValues( obj );
           * console.log( values ); -> ['张三',20,'男']
           */
          // 检测数据类型
          _.checkObjectType = function( obj ){
             // string/number/boolean/function/array/undefined/object
             return Array.isArray(obj)? 'array' : (typeof obj);
          };
          /**
           * var a = [20,3];
           * var t = _.checkObjectType( a ); // -> array
           */
      },
      // 判断设备类型
      deviceType11 : function(){
          var isAndroid = navigator.userAgent.match(/android/ig);
          var isIos = navigator.userAgent.match(/iphone|ipod/ig);
          var isIpad = navigator.userAgent.match(/ipad/ig);
          var isWechat = navigator.userAgent.match(/MicroMessenger/ig);
          window.isAndroid = isAndroid; // 返回字符串
          window.isIos = isIos || isIpad;
          window.isIpad = isIpad;
          window.isWechat = isWechat;
      },
      // 提示框
      tip : (function(msg,timeout,colorType){
          var _tip = {};
          var _colors = {
              'success' : 'red',
              'success-t' : 'blue',
              'info' : 'green',
              'info-t' : 'yellow',
              'error' : 'pink',
              'error-t' : 'red',
              'warning' : '#999',
              'warning-t' : '#000'
          };
          return (function(){
            var type = colorType || 'info';
            var timeout = timeout || 4000;
            var div = document.getElementById('_tips');
            if(!div){
              var el = document.createElement('div');
              el.id = '_tips';
              el.style.cssText += "z-index:9999;font-size:32px;position:fixed;" +
                  "width:500px;left:50%;margin-left:-250px;top:30px;border-radius:30px;" +
                  "padding:20px;box-sizing:border-box;background:#d9edf7;color:#333" +
                  "box-shadow:0 0 5px 1px rgba(0,0,0,0.3);" +
                  "-webkit-transition:all 0.3s;" +
                  "-webkit-transform:translate3D(0,-200%,0)";
              document.body.appendChild(el);
            }
            div = document.getElementById('_tips');
            div.style.backgroundColor = _colors[type];
            div.style.color = _colors[type+'-t'];
            div.innerHTML = msg;
            // 每次执行该方法前，都先清空定时器
            if(_tip.timmer){
                clearTimeout( _tip.timmer );
                _tip.timmer = null;
            }
            div.style.webkitTransition = 'none';
            // 提示在窗口最顶部
            div.style.webkitTransform = 'translate3D(0,-200%,0)';
            // 300毫秒后，提示框下移
            setTimeout(function(){
                div.style.webkitTransition = 'all 0.3s';
                div.style.webkitTransform = 'translate3D(0,0,0)';
            },300);
            // 4000毫秒后，提示框上移
            setTimeout(function(){
                div.style.webkitTransform = 'translate3D(0,-200%,0)';
            },timeout);
          })();
      }),
      // 重写提示框
      tipMsg : (function(){
         var method = {};
         var type = ['success','info','error','warning'];//提示框颜色类型
         for(var i=0;i<type.length;i++){
             method[type[i]] = (function(){
                 var t = type[i];
                 return function(msg,timeout){
                     SubjUtil.tip(msg,timeout,t);
                 }
             })();
         }
          /**
           * SUBJ.tipMsg -> 返回的是一个闭包，也是一个匿名函数，也是一个对象method；
           * method是一个对象，里面的key值为success,info,error,warning，每个valuie值都是一个函数
           */
          return method;
      })()
  };

  // 640px手机配适，当页面引入 SUBJ.Util.js 时就执行
  SubjUtil.outerContainerWrapFn();
  return SubjUtil;
});