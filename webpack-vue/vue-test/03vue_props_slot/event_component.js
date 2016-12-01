




Vue.component('c1',{
   /*
   template : '<div class="c1">' +
   '<input v-model="a">{{a}}' +
   '<button @click="m('+"home"+')">home</button>' +
   '<button @click="m('+'posts'+')">posts</button>' +
   '<button @click="m('+'archive'+')">archive</button>' +
   '<button @click="m('+'str1'+')">{{str1}}</button>' +
   '</div>',
   */
   template : '#c1',
   props : ['str1'], // 获取属性为str1的值，见实例app1下的components下的home->template->str1
   methods : {
     m : function(str1){
       this.$dispatch('parent-events1',str1,this.a);
     }
   },
   data : function(){
       return {
           a : 10
       }
   }
});

var app1 = new Vue({
    el : '#app1',
    data : {
        // model中currentView改变，则html中component也会改变
        currentView : 'home',//默认
        classN : 'home-class'
    },
    components : {
        /**
         * 1. 相当于 Vue.component('home',{...});
         * 2. 在html中的<component>组件就会变成 <home>
         * 3. 然后每个<home>组件都包含一个<c1>组件,<c1>组件的内容如html所示
         */
        home : {
            template : '<div id="tpl-id-home">1. component is home <c1 str1="home"></c1></div>'
            /*
            activate : function(done){ // 只会执行一次
                console.log('home activate called');
                setTimeout(function(){
                    console.log('home activate done');
                    done(); // 执行了done方法才会渲染html
                },1500);
            }
            */
        },
        posts : {
            template : '<div id="tpl-id-posts">' +
            '2. component is posts <c1 str1="posts"></c1></div>'
        },
        archive : {
            template : '<div id="tpl-id-archive">3. component is archive <c1 str1="archive"></c1></div>'
        }
    },
    events : {
        // 接收子组件派发的 parent-events1 事件
        'parent-events1' : function(str1,a){
            console.log('当前的组件str1 ：' + str1 +' ; '+a);
            this.currentView = str1;
            this.classN = str1+'-class';
        }
    }
});







// 子组件和v-for，父组件传值给子组件的props
Vue.component('my-component',{
   template : '#my-component',
   //props来自html中父组件的tag传值
   props : ['str1','index'],
   data : function(){
       return {
           item : {
               a : '1', // 子组件的作用域和父组件的作用域是独立非联系的
               b : '2',
               c : '3'
           }
       }
   }
});
var app2 = new Vue({
    el : '#app2',
    data : {
        items : {
            'a' : '4',
            'b' : '5',
            'c' : '6',
            'd' : '7'
        }
    }
});





// 编写可复用的组件
Vue.component('my-component1',{ // 普通的组件注册方法1
   template : '#my-component1',
   props : ['foo','bar'],
   data : function(){
       return {
           items : {
               a : 1,
               b : 2,
               c : 3
           }
       }
   },
   ready : function(){
       //console.log('my-component1组件的ready方法');
       //console.log(this.foo);
   }
});



var app3 = new Vue({
   el : '#app3',
   data : {
       items : {
           a : 4,
           b : 5,
           c : 6
       }
   },

   methods : {
       doThis : function(msg){
           console.log(msg);
       },
       onMouseOver : function(msg){
           console.log(msg);
       },
       onMouseOut : function(){
           console.log('鼠标离开了第3个hello');
       }
   }
});


var layery = Vue.extend({
    template : '#lay',
    props : ['str2'],
    data : function(){
        return {
          msg : '三种测试组件的注册方法(这里是子组件中的内容)'
        }
    }
});
// 在Vue全局注册组件layery，组件注册方法2
Vue.component('layery1',layery);
var app4 = new Vue({
    el : '#app4',
    data : {
        msg : '父组件的msg',
        arr : [
            {'name' : '张三(来自父组件)'},
            {'name' : '李四(来自父组件)'}
        ]
    },
    components : { // 在app4这个实例注册组件layery，组件注册方法3
        //layery1 : layery //左侧的key layery1是传到html的组件标签，右侧的value layery是js中的组件
    }
});





// 表单控件绑定
var app5 = new Vue({
   el : '#app5',
   data : {
       checkedNames : [],
       pickedSex : 'man',
       selectedCountry : '中国',
       provinceLists : [
           {name : '湖北省'},
           {name : '湖南省'},
           {name : '山东省'},
           {name : '山西省'}
       ],
       selectedProvince : '湖南省'
   },
   methods : {
       provinceChange : function(province){
           //alert('触发了select标签的@change事件,改变了option的选项 ： '+province);
       window.open('http://www.hao123.com');
       }
   },
   watch : {
       checkedNames : function(){
           //console.log('checkedNames改变了：');
           //console.log(this.checkedNames);
       },
       pickedSex : function(){
           console.log('选中的性别: '+this.pickedSex);
       },
       selectedProvince : function(){
           //alert('监听selectProvince值的变化：'+this.selectedProvince);
       }
   }
});








