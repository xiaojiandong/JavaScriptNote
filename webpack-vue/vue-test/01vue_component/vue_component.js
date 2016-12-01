

/**
 * 指令只封装DOM操作
 * 组件代表自给自足的独立单元--有自己的视图和数据逻辑
 * @type {Window.Vue}
 */
// 使用vue组件进行布局
var appHeader = Vue.extend({
    template : '<div class="header">vue-header部分</div>'
});
var appSidebar = Vue.extend({
   template : '<div class="sidebar">vue-sidebar部分</div>'
});
var appContent = Vue.extend({
   template : '<div class="content">vue-content部分</div>'
});
var appFooter = Vue.extend({
   template : '<div class="footer">vue-footer部分</div>'
});
Vue.component('app-header',appHeader);
Vue.component('app-sidebar',appSidebar);
Vue.component('app-content',appContent);
Vue.component('app-footer',appFooter);

var app = new Vue({
     el : '#app',
     data : {
         isShow : true,
         msg : '呵呵哒是msgData中的值'
     },
     // 注册各种方法
     methods : function(){

     },
     // 初始化立即执行
     ready : function(){
        console.log('ready方法，初始化执行');
        //console.log(this.$data.msg);
     },
     // watch 是实例方法，监视着 vue data 的变化，data变化则立即启动$watch方法
     watch : {
        // 监听msg的值的变化
        msg : function(newVal,oldVal){ // (newVal,oldVal)
            this.$data.isShow = !this.$data.isShow;
            console.log('msg的值变化了！！！' + this.$data.isShow);
            console.log('msg原始的值：'+oldVal+' ; 新的值：'+newVal);
        },
        // 监听isShow的值的变化
        isShow : function(){
           alert('判断isShow的真假：' + this.$data.isShow);
        }
     },
     // 钩子
     created : function(){
       console.log('created方法isShow 1: ' + this.isShow);
       console.log('created方法isShow 2: ' + this.$data.isShow);
     }
});
//console.log( app.$data );
//console.log( app.$el );
// $watch 是实例方法，监视着 vue data 的变化，data变化则立即启动$watch方法
//app.$watch('msg',function(newVal,oldVal){
//  console.log('msg原始的值：'+oldVal+' ; 新的值：'+newVal);
//});

//注册局部模板片段1：partials->复用模板片段
Vue.partial('my-partial',
    '<p class="my-partial-class">这里的复用模板1. my-partial->{{msg}}</p>');
//注册局部模板片段2：
Vue.partial('my-day',
'<p class="my-day-class">这是第2个复用模板2. my-day</p>');
//自定义过滤器
Vue.filter('discountFilter' , function(val){
    return  '+'+val * 0.5+'+';
});
Vue.filter('wrapFilter',function(val,begin,end){
    return begin + val + end;
});
var app2 = new Vue({
    el : '#app2',
    data : {
        msg : '1. 双向数据绑定',
        msg1 : '2. *单向数据绑定',
        pId : 201,
        imgUrl : '<img width="100" src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png" />',
        partialId : 'my-partial', // partialId 可以为my-partial或my-day
        word : 'abcdef',
        money : 200,
        goods : [
            {name : 'blue',price : 420},
            {name : 'egg',price : 542},
            {name : 'phone',price : 311},
            {name : 'orange',price : 220},
            {name : 'apple',price : 725}
        ],
        isGreet : true, // v-if语句
        aHref : 'https://www.hao123.com/'
    },
    methods : {
        goodClick : function(good,index){
            //alert(index+' - '+good.name);
            if(good.price > 440){
                alert('价格增加过高了');
                //location.href = 'https://www.hao123.com';
                //window.open('https://www.hao123.com');
                return false;
            }else{
                good.price += 10;
                console.log('当前商品的价格：'+good.price);
                this.isGreet = !this.isGreet;
            }
        }
    },
    // watch监听isGreet值的变化
    watch : {
        isGreet : function(){
            if( this.isGreet == true ){
                //alert('打招呼');
            }else{
                //alert('再见了！！！！');
            }
        }
    }
});


// 计算属性
var app3 = new Vue({
    el : '#app3',
    data : {
      a : 12,
      firstName : '张',
      lastName : '小明',
      //fooName : '张小明'
      //bookPrice : '' // 计算属性的用法
      goodsList : { // 商品清单
          'book' : {
             count : 3,
             price : 32
          },
          'phone' : {
             count : 4,
             price : 3400
          },
          'bed' : {
             count : 2,
             price : 1240
          },
         'shoe' : {
            count : 8,
            price : 310
         }
      },
      goodsList1 : [ // 商品清单
          {name : 'book',count:3,price:32},
          {name : 'phone',count:4,price:3400},
          {name : 'bed',count:2,price:1240},
          {name : 'glass',count:20,price:88}, // 想要增加商品种类，复制即可
          {name : 'shoe',count:8,price:310},
          {name : 'food',count:18,price:440}
        ]
    },
    // 计算属性
    computed : {
      // 在data中本来是没有b的，在计算属性中获得b的值
      b : function(){
          return this.a * 5;
      },
      //fooName : function(){
      //   return this.firstName + ' ' + this.lastName;
      //},
      fooName : { // fooName1计算属性
         // getter,Vue取出model数据
         get : function(){
             console.log('fooName的getter方法');
             return this.firstName + ' ' +this.lastName;
         },
         // setter，Vue设置model数据
         set : function(newVal){
          console.log('vue执行setter方法，传入的字符串：'+newVal);
          var names = newVal.split(' ');
          this.firstName = names[0];
          this.lastName = names[names.length-1];
         }
      },
      // 计算商品总价
      totalGoodsPrice : { // 不成熟的做法1，省去（可以借鉴下面的代码）
          get : function(){
              var goodsList = this.$data.goodsList;
              var goodsArr = ['book','phone','bed','shoe'];
              var allPrice = 0;
              for(var i= 0;i<goodsArr.length;i++){
                  var singlePrice = singlePrice + i;
                  singlePrice = goodsList[ goodsArr[i]].count*goodsList[ goodsArr[i]].price; //96+13600+2480=16176
                  allPrice += singlePrice;
              }
              console.log('在computed方法中获取商品总价为：'+allPrice);
              return allPrice;
          }
      },
      totalGoodsPrice1 : { // 科学的做法2
          get : function(){
              var goodsList = this.$data.goodsList1;
              var totalPrice = 0;
              for(var i=0 ; i<goodsList.length ; i++){
                  //console.log(goodsList[i].name); // 单个商品名称
                  totalPrice += goodsList[i].count * goodsList[i].price
              }
              console.log('当前总价：'+totalPrice);
              return                                                                                         totalPrice;
          }
      }
    },
    // 加载成功立即执行
    ready : function(){
      //console.log(this.$data.goodsList1.length);
      //var goodsList = this.$data.goodsList1;
      //var totalPrice = 0;
      //for(var i=0 ; i<goodsList.length ; i++){
      //    console.log(goodsList[i].name); // 单个商品名称
      //    totalPrice += goodsList[i].count * goodsList[i].price
      //}
      //console.log(totalPrice);
    },
    methods : {
       // 减少商品数量
        cutCount : function(good,index){
            if(good.count <= 0){
              alert('你一件没选，不能再减了');
            }else{
                good.count -= 1;
            }
          console.log(good.count);
        },
        // 增加商品数量
        addCount : function(good,index){
            good.count += 1;
        },
        // 清空当前商品数量为0
        removeGoodCount : function(good,index){
            good.count = 0;
        },
        // 删除整条商品
        removeGood : function(good,index){
           console.log(this.goodsList1);
            this.goodsList1.splice(index,1); // 删除当前选中
        },
        // 清空订单
        clearGoodsList: function(){
            this.goodsList1.splice(0,this.goodsList1.length); // 删除当前选中
        },
        // 立即付款
        submitPay : function(){
          alert('跳转去付款页面，你选的商品总价：'+this.totalGoodsPrice1);
        }
    },
    // 监听firstName的变化
    watch : {
      firstName : function(newVal){ // newVal-> firstName
         // alert('姓氏都变了吗？？');
          //this.fooName = newVal + '' + this.lastName;
          //return this.fooName;
      },
      lastName : function(newVal){ // newVal -> lastName
          //alert('改了名字');
          //this.fooName = 'Bill Gide' + newVal;
          //return this.fooName;
      }
    }
});


// style与class
var app4 = new Vue({
    el : '#app4',
    data : {
       className1 : 'big1',
       className2 : 'big2',
       isA : true,
       isB : false,
       classObj : {
           class1 : true,
           class2 : true
       }
    }
});

// 条件渲染
var app5 = new Vue({
    el : '#app5',
    data : {
       isOk : true,
       isA : true,
       isB : true,
       personObj : {
         name : 'Jim',
         age : 20,
         sex : 'man'
       },
       isShowDiv : true
    },
    methods : {
       preClick : function(msg , event){
          alert(msg + '跳转到hao123页面');
          event.preventDefault(); // 取消事件默认行为
          //event.stopPropagation(); // 阻止冒泡
       },
       stopClick : function(){
          alert("调用了click.stop=''");
       }
    }
});





