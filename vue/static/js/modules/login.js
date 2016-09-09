/**
 * Created user : xiaojian
 * Created time : 2016/9/8
 * FileName :
 */

require(['SubjUtil','LoginUtil','jQueryRotate','jQueryEasing'],
    function(SubjUtil,LoginUtil,jQueryRotate,jQueryEasing){
   //console.log('SubjUtil');
   //console.log(SubjUtil);
   //console.log( LoginUtil );
    var isAnimating = false; // 是否正在旋转
        // 抽奖功能闭包
            var rotateFunc = function(awards,angle,callBackFn){  //awards:奖项，angle:奖项对应的角度
                $('#lotteryBtn').stopRotate();
                $("#lotteryBtn").rotate({
                    angle:0,
                    duration: 15000,
                    animateTo: angle+360*12,//旋转12圈
                    callback:function(){
                        //alert(text)
                        callBackFn && callBackFn();
                    }
                });
            };
        // 点击旋转抽奖
            $("#lotteryBtn").rotate({bind: {
                    click: function(){
                        // todo 点击抽奖，向服务端发送请求
                       var user_phone = SubjUtil.localStorageData('user_phone');//获取本地存储数据
                        if(isAnimating){ // 正在旋转，则防止用户重复点击
                            return false;
                        }
                        SubjUtil.jqAjaxGetLocal('test_login_data',
                            function(res){
                                //SubjUtil.tipMsg.info('点击了抽奖，向服务端发送请求');
                                //console.log('res : ');
                                var status = res.data.status;
                                /**
                                 * status :
                                 *   0 - 活动正在进行
                                 *   1 - 获得未开始
                                 *   2 - 活动已结束
                                 * game_available_time ：
                                 *   剩余次数
                                 */
                                // 后端数据已登录，或本地存储存在用户信息。执行转盘
                                if(res.hasLogined || user_phone){
                                   //alert('已登录，执行转盘');
                                    //console.log(res.data);
                                    if(status==1){ // 活动未开始
                                        SubjUtil.tipMsg.info('活动未开始');
                                    }else if(status==2){ // 活动已结束
                                        SubjUtil.tipMsg.info('活动已结束');
                                    }else if(status==0){
                                        $('.js_mask_wrap').hide();
                                        getRotateData(res.data);
                                    }else{
                                        SubjUtil.tipMsg.info(res.data.msgResponse);
                                    }
                                }else{ // 未登陆，先登录
                                    SubjUtil.tipMsg.info('未登陆，先登录');
                                    $('.js_mask_wrap').show();
                                }
                            },function(err){
                                SubjUtil.tipMsg.info('系统繁忙，请稍后再试...');
                            });
                    }
                }
            });
            // 登陆成功后，根据索引值旋转到具体奖品
            var getRotateData = function(data){
                /*
                *   lottoery ：
                 *   1 - 一等奖
                 *   2 - 二等奖
                 *   3 - 三等奖
                 *   0 - 很遗憾
                * */
                //console.log(data);
                var avaiTime = accountLocalTime(data);
                $('.j_time').html(avaiTime-1);
                if(avaiTime <= 0){
                    $('.j_time').html('请明天再来吧');
                    SubjUtil.tipMsg.info('您的抽奖机会已经用完');
                    //localStorage.setItem('goodsStatus',JSON.stringify(1));
                    return false;
                }
                console.log('剩余次数avaiTime：'+avaiTime);
                isAnimating = true; // 只要在旋转，则为true
                switch (data.lottoery){
                    case 1 :
                        rotateFunc(1,157,function(){
                            isAnimating = false;
                            SubjUtil.tipMsg.info('恭喜您抽中的一等奖-iphone8');
                        });
                        break;
                    case 2 :
                        rotateFunc(2,247,function(){
                            isAnimating = false;
                            SubjUtil.tipMsg.info('恭喜您抽中的二等奖-ipad');
                        });
                        break;
                    case 3 :
                        rotateFunc(3,12,function(){
                            isAnimating = false;
                            SubjUtil.tipMsg.info('恭喜您抽中的三等奖-ipod');
                        });
                        break;
                    default : // 0
                        var angle = [67,112,202,292,337]; // 超出边界的角度
                        angle = angle[Math.floor(Math.random()*angle.length)];
                        rotateFunc(0,angle,function(){
                            isAnimating = false;
                            alert('很遗憾，你没有抽到奖');
                        });
                        break;
                }
            };
        //计算本地存储的次数
        var accountLocalTime = function(data){
            //剩余次数写入本地存储
            var time = data.game_available_time; // 累加的次数
            var avai;
            //var available_time11 = localStorage.getItem('goodsStatus');
            if(localStorage.getItem('avai_time') &&
                localStorage.getItem('avai_time') !=null &&
                localStorage.getItem('avai_time') != 'undefined'){
                avai = JSON.parse(localStorage.getItem('avai_time'));
                avai --;
                if(avai<=0){
                    avai=0;
                }
                localStorage.setItem('avai_time',JSON.stringify(avai));//每次更新重写

            }else{ // 初次写入
                localStorage.setItem('avai_time',JSON.stringify(time));
                avai = JSON.parse(localStorage.getItem('avai_time'));
            }
            //console.log('剩余次数avai：'+avai);
            return avai;
        };

        (function(){
            if(localStorage.getItem('avai_time') &&
                localStorage.getItem('avai_time') !=null &&
                localStorage.getItem('avai_time') != 'undefined'){
                var avai = JSON.parse(localStorage.getItem('avai_time'));
                console.log('修改html次数 : '+avai);
                $('.j_time').html(avai);
                if(avai <= 0){
                    $('.j_time').html('请明天再来吧');
                }
            }else{
                $('.j_time').html(2);
            }
        })();

        // 登陆小组件
        var loginUtil = new LoginUtil({
            phone_id : 'j_phone',//手机号输入框
            input_code_id : 'j_code',//验证码输入框
            get_code_id : 'j_get_code',//获取验证码
            submit_id : 'j_submit_btn',//提交
            successCallBack : function(res){ //登陆成功后的回调
              //console.info('登陆成功的逻辑');
                console.log('OTP请求成功');
                $('.js_mask_wrap').hide();
                setTimeout(function(){
                    getRotateData(res.data);
                },600);
                // todo 将用户手机号保存到本地存储
            },
            failCallBack : function(err){//登陆失败后的回调
                alert('登陆失败，请输入正确格式的手机号码和验证码');
            }
        });

    //SubjUtil.tip('ash');
    //SubjUtil.tipMsg.success('信息'); // 提示框组件

    //SubjUtil.howManyArgs('asas',1212,true);
   // 非主流做法
   var v = new SubjUtil.vue({
       el : '#app',
       data : {
           msg : '张三C啊1',
           todos : [
             {'iframe':'Angular','company':'google'},
             {'iframe':'React','company':'facebook'},
             {'iframe':'Vue','company':'nobody'},
             {'iframe':'Java','company':'sun'},
             {'iframe':'JavaScript','company':'网景'}
           ]
       },
       watch: {
          allText: {
         // 监听todos的变化
               handler: function (todos) { // handler
                   console.log('todos : ');
                   console.log(todos);
                  // todoStorage.save(todos);//本地存储todos的值
               },
               deep: true // 深度监听
           }
       },
       // computed properties
       // http://vuejs.org/guide/computed.html
       computed: { // 计算属性
           // 过滤todos
           filteredTodos: function () {
               //console.log('filteredTodos');
               //return filters[this.visibility](this.todos);
           },
           // 剩下下来的全部todos的长度
           remaining: function () {
               //return filters.active(this.todos).length;
           },
           // 全部完成的todos
           allText: {
               get: function (val) {
                   alert(val);
                   return this.remaining === 0;
               },
               set: function (val) {
                   alert(val);
                   alert('当前的checkbox的属性变化了');
               }
           }
       },
       methods : {
           reverseMessage: function () {
               this.message = this.message.split('').reverse().join('');
           },
           // 增加
           addTodo : function(){
               var text = this.newTodo.trim();
               if(text){
                   this.todo1s.push({text:text});
                   this.newTodo = '';
               }
           },
           greet : function(e){
               console.log(e.target.tagName);
           },
           // 删除
           removeTodo : function(index){
               this.todo1s.splice(index,1); // 删除索引元素
           },
           // 切换视图
           toggleClick : function(){
               this.hasSport = !this.hasSport;
           },
           changeSelect : function(selected){
               alert('选中的nation： '+selected);
           }
       },

       // 初始化即执行
       ready : function(){
         var t = 0;
         var self = this;
         setInterval(function(){
            t += 1;
            t%2 == 0?(self.hasSport=true):(self.hasSport=false);
         },1000);
       },
       created : function(){
           //alert('创造这个vue实例的时候执行');
       },
       // 计算属性
       computed : {
         fn1 : function(){
             alert('aaaa');
         }
       },
       // 监听数据变化
       watch : {

       }
   });




        /*
    var data = {
        classNo : 111,
        grade : 'primary'
    };
    SubjUtil.jqAjax(data,function(res){
       console.log('请求成功res : ');
       console.log(res);
    },function(err){
        console.log('请求失败err : ');
        console.log(err);
    });
        */



});

