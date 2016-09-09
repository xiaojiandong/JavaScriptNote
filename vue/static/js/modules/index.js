/**
 * Created user : xiaojian
 * Created time : 2016/8/11
 * FileName :
 */

require(['SubjUtil','LoginUtil'],
    function(SubjUtil,LoginUtil){
   console.log('首页');
   //console.log('SubjUtil');
   //console.log(SubjUtil);
   //console.log( LoginUtil );

        var loginUtil = new LoginUtil({
            phone_id : 'j_phone',
            input_code_id : 'j_code',
            get_code_id : 'j_get_code',
            submit_id : 'j_submit_btn',
            successCallBack : function(){
              alert('登陆成功的逻辑');
            },
            failCallBack : function(err){
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
           ],
           todo1s : [
               {'text' : '加点什么吧'}
           ],
           message : 'Hello Vue.js !',
           newTodo : '',
           hasSport : true,
           isAclass : true,
           isBclass : false,
           checkedNames : [],
           mon : 20.90786,
           userInput : '测试'
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

   // 指令directive
   SubjUtil.vue.directive('demov',{
     bind : function(){
       console.log('绑定指令 demo bound bindFn');
     },
     update : function(value){
       /**
        * this -> demov这个指令
        * this.el -> demov这个指令所绑的元素
        * this.expression -> 指令中的内容形参
        * value -> 指令中的值
        */
       var ar = '指令的';
       this.el.innerHTML =
         ar + 'name -' + this.name +'<br>'+
         ar + 'expression - '+this.expression+'<br>'+
         ar + 'argument - '+this.arg+'<br>'+
         ar + 'modifiers - '+JSON.stringify(this.modifiers) + '<br>' +
         ar + 'value - '+value;
     }
   });
   SubjUtil.vue.directive('demov1',{
      bind : function(value){
       //console.log(value); // undefined
      },
      update : function(value){
          //console.log('指令v-demov1的值color： '+value.color);
          //console.log('指令v-demov1的值text： '+value.text);
        this.el.innerHTML=value.color;
        this.el.style.background = value.color;
      }
   });
   SubjUtil.vue.directive('example',{
     params : ['a'],
     bind : function(){
       //console.log(this.params.a);
     }
   });
   var demo = new  SubjUtil.vue({
       el : '#demo',
       data : {
           msg1 : '你好吗！'
       }
   });
   SubjUtil.vue.filter('reverse',function(value){
       return value.split('').reverse().join('');
   });
   SubjUtil.vue.filter('wrap',function(value,arg1,arg2){
      return arg1 + ' - ' +value + ' - ' + arg2;
   });

   SubjUtil.vue.filter('currencyDisplay', {
     // model -> view
     // 在更新input元素之前格式化
     read : function(val){
        return '$' + val.toFixed(2);
     }
   });
   SubjUtil.vue.filter('concat',function(val,input){
      //'input' === this.userInput
      return val + input;
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

