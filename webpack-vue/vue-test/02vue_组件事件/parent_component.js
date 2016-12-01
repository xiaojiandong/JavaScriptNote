


Vue.component('child' , {
   props : ['msg'],
   template : '<p>第一个组件child {{msg}}</p>'
});
Vue.component('child1' , {
   props : ['myMsgEr'],
   template : '<p>第2个组件child1 {{myMsgEr}}</p>'
});
Vue.component('child2',{
    props : ['myMsgB'],
    template : '<p>第3个组件child2 动态 : {{myMsgB}}</p>'
});
// 组件 props用法
var app1 = new Vue({
    el : '#app1',
    data : {
     msg2 : '小当家'
    }
});



// 父子组件通信
// 最小子组件ccc
Vue.component('ccc',{
    template : '#ccc',
    data : function(){
        return {
            msg_c : '小当家是c组件的值'
        }
    },
    methods : {
        set_parent1 : function(){
          // 设置父组件bbb的值
          alert(this.msg_c);
          this.$parent.$set('msg_b',this.msg_c);
        },
        // 将清空最小组件ccc的值追加到根组件aaa中，并清空自身
        set_root1 : function(){
          alert('将清空最小组件ccc的值追加到根组件aaa中，并清空ccc的值');
          if(this.msg_c.trim() != ''){
              this.$root.message_a.push(this.msg_c);
          }
          this.msg_c = '';
        }
    },
    ready : function(){
        //console.log('最小组件ccc：');
        //console.log(this.$root);
    }
});
// 注册子组件bbb
Vue.component('bbb',{
   template : '#bbb',
   data : function(){
     return {
        msg_b : '大熊是b组件的值'
     }
   },
   methods : {
       set_parent1 : function(){ // 清空根组件a资料
         //alert(1);
         this.$parent.message_a = [];
       }
   },
   ready : function(){
       //console.log('子组件bbb：');
       // 指bbb组件的父级 -> id=aaa的节点
       //console.log(this.$parent);
       // 指bbb组件的子级 -> id=ccc的节点
       //console.log(this.$children);
   }
});
// 初始化父组件aaa
var Parent = new Vue({
    el : '#aaa',
    data : {
        message_a : []
    },
    methods : {
        set_bbb0 : function(){
            /**
             * this.$children指在html中，id=aaa下的<bbb></bbb>组件
             */
            this.$children[0].msg_b = '子组件bbb[0]设值深圳'+this.message_a[0];
        },
        set_bbb1 : function(){
            this.$children[1].msg_b = '子组件bbb[1]设值北京';
        },
        set_bbb2 : function(){
            this.$children[2].msg_b = '子组件bbb[2]设值上海';
        }
    },
    watch : {
        message : function(){
            console.log('this.message : ');
            console.log(this.message_a);
        }
    },
    ready : function(){
        //console.log('根组件aaa:');
        //console.log(this.$children);
    }
});








// 注册组件component3
Vue.component('component3',{
   template : '#component3',
   data : function(){
      return {
          msg : 'c3组件值中华小当家',
          navs : [
              {name : '首页'},
              {name : '导航'},
              {name : '新闻'},
              {name : '图片'}
          ]
      }
   },
   methods : {
       'c3_do1' : function(){
          if(this.msg.trim()){
              // 向上派发至根组件#component1，并追加至根组件的message中
              this.$dispatch('c1_events',this.msg+'c3_do1');
          }
           this.msg = '';
       },
       // component3组件设置父组件c2的资料
       'c3_do2' : function(){
           alert('component3组件设置父组件c2的资料');
           //设置父组件#component2的msg值
           this.$parent.$set('msg','$set设定子组#component2件完成'+'c3_do2');
       },
       'c3_do3' : function(){
           // c3_do1和c3_do3方法作用相同，都是往根组件#component1的message中追加数据
           if(this.msg.trim() != ''){
               this.$root.message.push(this.msg+'c3_do3');
           }
           this.msg = '';
       },
       'c3_do4' : function(){
           this.$dispatch('all_events',this.msg); //派发至父组件#component2
           //this.$root.$dispatch('all_events',this.msg);//派发至根组件#component1
       },
       'c3_do5' : function(){
           this.$dispatch('all_events1',this.msg);
       }
   },
   events : {
      'c3_event_get_foo' : function(msg){
          //alert(msg);
          this.msg = msg;
      },
      'c1_event_childrens' : function(msg){
          alert('c3');
      },
      'c3_event_get_foo_code' : function(msg){
          this.msg = msg;
      },
      // c3_event_emit事件是：在c2的ready中被$refs.list[0].$emit('c3_event_emit')绑定的
      'c3_event_emit' : function(msg){ // 并且component3自身的msg已被修改
        //alert(msg);
        this.c3_do1(); //在component3自身找到c3_do1方法并执行
      }
   }
});

// 注册子组件c2，将当前消息$dispatch向上派发出去
Vue.component('c2',{
   template : '#component2',
   data : function(){
      return {
          msg : 'c2值 感谢 网友协助'
      }
   },
   methods : {
      'c2_do1' : function(){
         if(this.msg.trim()){
             //派发至根组件#component1，触发了他的events.c1_events事件
             this.$dispatch('c1_events',this.msg+'c2_do1');
         }
      },
      'c2_do2' : function(){ // 清空父组件的资料
          this.$parent.message = [];
      },
      'c2_do3' : function(){
          //向下广播，设置#component3的资料
          this.$broadcast('c3_event_get_foo','向下广播设置js');
      },
      // v-on:eventc4:handle 自定义事件
      'c2_do4' : function(){
       /**
        * 1.在html的#component2模板中，执行c2_do4方法
        * 2. 在js的#component2组件中，派发自定义的eventc4
        * 3. 在html的根#component1中，回调执行handle_it2方法
        * 4. 在js的根#component1组件中，回调执行handle_it2方法里的逻辑
        */
        this.$dispatch('eventc4',
            '1. #component2模板中的c2_do4方法被执行；2.js中派发的自定义方法event4被执行');
      }
   },
   events : {
       'all_events' : function(msg){
         console.log('c2组件 all_events : ' +msg);
         this.msg = msg;
         return true; // 从c3冒泡到c2会停止，所以要为true才继续冒泡到c1
       },
       'all_events1' : function(msg){
         console.log('c2组件 all_events1: '+msg);
       },
       'c1_event_childrens' : function(msg){
           //alert(msg);
           this.msg = msg;
           this.$broadcast('c3_event_get_foo_code',msg);
       },
       // 自定义事件
       eventc4 : function(){
          //alert('触发了eventc4自定义事件');
       }
   },
   ready : function(){
       //alert('改变数组的值');
       var navs = this.$children[0].$data.navs;
       console.log(navs.length);
       var newNavs = ['腾讯','爱奇艺','阿里','京东','优酷','高德'];
       var newNavsLen = newNavs.length;
       if(navs.length > newNavsLen){
            //alert(111111);
       }else{
           var bArr = [newNavsLen];
           for(var i=0 ; i<newNavsLen ; i++){
               bArr[i] = {};
               bArr[i].name = newNavs[i];
           }
           this.$children[0].$data.navs = bArr;
       }
       // 获取c2组件下子组件的索引
       console.log('this.$refs.list : ');
       this.$refs.list11[0].msg = '$refs来置子组件索引0';
       this.$refs.list11[1].msg = '$refs来置子组件索引1';
       // 在c2组件内的ready方法找到第一个子组件component3，并触发他的c3_event_emit方法
       this.$refs.list11[0].$emit('c3_event_emit','$emit的方法');
       //console.log(this.$refs.list[0]);
   }
});
// 初始化根组件，component1，将收到消息时，将事件推入一个数组
var Parent2 = new Vue({
  el : '#component1',
  data : {
     message : []
  },
  // 在创建实例时，'events'选项简单地调用 '$on'监听
  events : {
    // 捕获子组件$dispatch出来的事件
    'c1_events' : function(msg){ //被自身的methods.c1_do1方法触发
        // 事件回调内的 'this' 自动绑定到注册他的实例上
        //alert('通过c1_do1方法，触发了c1_events事件 : '+msg);
        this.message.push(msg);
        console.log('通过c1_do1方法，触发了c1_events事件 : '+msg);
    },
    'all_events' : function(msg){
        this.message.push(msg);
       console.log('c1组件 Parent2 all_events : '+msg);
    },
    'all_events1' : function(msg){
       console.log('c1组件 Parent2 all_events1 : ' +msg);
    }
  },
  methods : {
      'c1_do1' : function(){
         // 根组件触发了一个事件 c1_events
         alert('根组件component1,methods.c1_do1方法触发了一个事件 c1_events');
         // 传给上面自己 Parent2.events.c1_events
         this.$emit('c1_events','Parent2点击了c1_do1事件并触发自己的c1_events事件');
         // 子组件c2
         this.$children[0].msg = '组件c2[0]设值';
      },
      'c1_do2' : function(){
         this.$children[1].msg = '组件c2[1]设值';
      },
      'c1_do3' : function(){
         this.$children[2].msg = '组件c2[2]设值';
      },
      'c1_do4' : function(){
         // 统一广播子组件们的事件
         // 先广播给component2,再通过component2广播给component3
         this.$broadcast('c1_event_childrens','统一编码10101010');
      },
      'handle_it2' : function(msg){
          alert(msg + ' ;3. #component1根模板回调方法handle_it2被执行');
          this.message.push('追加回调方法handle_it2');
      }
  },
  ready : function(){
      console.log(this.$children);
  }
});
// 事件
var app2 = new Vue({
   el : '#app2',
   components : {
     'myy-component' : Parent2
   },
   ready : function(){
     // 监听 events3事件
     this.$on('events3',function(msg){
         console.log(msg + ' 乱七八糟 #app2.ready方法');
     });
   },
   events : {
     'events4' : function(msg){
         console.log(msg + ' #app2.events 方法');
     }
   }
});

// $emit('fn1',data); 相当于绑定了一个事件fn1，并传递数据
// $on('fn1',function(data)); 监听了一个事件fn1，并获取数据
app2.$on('events1' , function(msg){
   console.log(msg + ' 立马就执行了events1方法');
});
app2.$once('events-once',function(msg){ // 只执行一次
    //console.log('once : ' + msg);
});
app2.$emit('events1' , 'events1 do 1'); // 事件触发
//app2.$emit('events1' , 'events1 do 2');
//app2.$emit('events1-once' , 'events1-once do1');
//app2.$emit('events1-once' , 'events1-once do2');
//app2.$emit('events3' , 'events3 do 1');
app2.$emit('events3' , 'events3 do 2');
app2.$emit('events4' , 'events4 do 1');
app2.$emit('events4' , 'events4 do 2');
/**
 * $on() 监听事件
 * $emit() 在组价自身上面触发事件
 * $dispatch() 派发事件，事件沿着父链冒泡
 * $broadcast() 事件广播，事件向下导向所有后代
 *
 * vue 要实现单页面应用和ajax请求，需引入vue-router,vue-resource
 * vue + ES6(模块化) + Webpack
 *
 * vue的组件化是通过将html，css，js放入 xx.vue文件中
 *
 */




// slot与作用域
Vue.component('app-header',{
   template : '#app-header',
   data : function(){
     return {
         msg : '1. 这里是app-header标签的内容',
         isHide : !true,
         someChildProperty : !true // 子组件的属性不能被父组件访问
     }
   },
   methods : {
     'appHeaderClick' : function(){
         alert('app-header的点击事件');
         this.isHide = !this.isHide;
         // 派发到父级，回调父级的handle_app方法
         this.$dispatch('event_app','派发到event_app');
     },
     'appHeaderToFooterClick' : function(){
        // $emit到平级的app-footer中
        // this.$on('event_app_footer_emit','从app-header派发出来的event_app_footer_emit事件');
       this.$dispatch('event_app_foo','平级');
     }
   },
   events : {
     //'event_app' : function(msg){
          //alert(msg);
      //}
   }
});
Vue.component('app-footer',{
   template : '#app-footer',
   data : function(){
       return {
         msg : '2. 到了app-footer标签内容'
       }
   },
   events : {
     'event_footer_1' : function(msg){
        alert('app-footer ：' + msg);
     }
   },
   ready : function(){

   }
});
Vue.component('app',{
   template : '#app',
   data : function(){
      return {
          msg : '---app每个id模板的作用域不同---'
      }
   },
   methods : {
     'handle_app' : function(msg){
         alert('id为#app内的方法handle_app被执行 ' + msg);
         //this.msg = msg;
     }
   },
   events : {
      'event_app_foo' : function(msg){
          this.$broadcast('event_footer_1',msg);
      }
   }
});

var vm3 = new Vue({
    el : '#vm3',
    data : []
});









Vue.component('child-component',{
    // 有效，因为在正确的作用域内，使用全局注册 data
    template : '<div v-show="someChildProperty">Child</div>',
    data : function(){
        return {
            someChildProperty : true
        }
    }
});
Vue.component('child-component1',{
   // 无效，因为父组件作用域中无法使用子组件的data
   //template : '<div v-show="someChildProperty">Child-1</div>',
   template : '<div >Child-1</div>',
   data : function(){
       return {
           someChildProperty : true
       }
   }
});
Vue.component('app4',{
   template : '#app4',
   data : function(){
      return {
          msg : '-app父组件-'
      }
   }
});
var vm4 = new Vue({
   el : '#vm4',
   data : {}
});



// 单个slot
Vue.component('my-component',{
  template : '#my-component',
  data : function(){

  }
});
var vm5 = new Vue({
   el : '#vm5',
   data : {
       msg : []
   }
});



// named slot
Vue.component('parent2',{
   template : '#parent2'
});
Vue.component('multi-insertion',{
   template : '#multi-insertion'
});
Vue.component('multi-insertion1',{
    template : '#multi-insertion1'
});
var vm6 = new Vue({
   el : '#vm6',
   data : {}
});

/*
vm3.$on('aa_fn',function(msg){
    alert(msg);
});
setTimeout(function(){
    vm3.$emit('aa_fn',2);
},3000);
*/





