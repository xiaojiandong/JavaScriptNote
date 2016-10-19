
// 轮播图小组件
console.log('轮播图小组件');



var Carousel = function( opts ){
    var self = this;
    //this.validateOpts( opts );
    this.opts = opts; // 获取在index中传入的参数
    this.opts.slideItemLen = this.opts.slide_item.length;//slide的个数
    this.opts.slideWrapObj = this.opts.slide_wrap; // 中间层 父容器节点
    this.opts.slideWrapObjLeft = this.opts.slideWrapObj.css('left'); // 中间层父容器节点左坐标
    this.opts.fooWrapW = this.opts.slide_wrap.parent().outerWidth();// 最外层 父容器宽度
    this.opts.fooWrapH = this.opts.slide_wrap.parent().outerHeight();// 最外层 父容器高度
    this.opts.slideWrapObjWidth = this.opts.fooWrapW * this.opts.slideItemLen; // 中间层父容器节点宽度
    //this.speedTime = 10;
    this.opts.click_nav_class = opts.click_nav_class; // 可点击的子导航的类
    this.opts.common_nav_bg = opts.common_nav_bg || 'yellow'; // 通用子导航背景色
    this.opts.active_nav_bg = opts.active_nav_bg || 'blue'; // 高亮子导航背景色

    self.bindSetIntervalMove( ); // 绑定定时器移动动画
    self.bindNavs( ); // 动态创建导航
    self.caulatePostion( ); // 动态计算节点位置
    self.bindActiveNav(0); // 初始化高亮子导航（首个高亮）

};

Carousel.prototype.a1 = '10';

Carousel.prototype = {
    'timer' : null, // 动画移动的定时器
    'isAnimate' : false, // 是否正在移动，防止重复点击
    'activeIndex' : 0, // 当前子导航索引
    testFn : function(){
      alert( '测试方法' );
    },
    validateOpts : function(opts){
       //console.log('验证参数');
       //return false;
    },
    // 计算节点位置
    caulatePostion : function(){
        //var
        //alert(slideItemLen);
        this.opts.slide_item.css({ // 单个item
          'float' : 'left',
          'width' : this.opts.fooWrapW,
          'height' : '100%',
          //'border' : '2px solid #ccc',
          'box-sizing' : 'border-box'
        });

        this.opts.slide_wrap.css({ // 滚动的父容器
            'position' : 'absolute',
            'z-index' : 10,
            'top':0,
            'left' : 0,
            'background' : 'red',
            'width' : this.opts.slideWrapObjWidth,
            'height' : '100%',
            'box-sizing' : 'border-box'
        });
    },

    // 运动
    slideAnimation : function(){
      var self = this;
      //console.log(this.opts);
      //console.log( this.opts.slideWrapObj );
        this.opts.slideWrapObj.animate({
            'left' : '-=' + this.opts.fooWrapW
        },self.opts.slide_speed,function(){
            //self.opts.slideWrapObjLeft = self.opts.slideWrapObj.css('left');
            //console.log('回调成功 : ' + self.opts.slideWrapObjLeft);
        });
    },
    // 动态创建导航
    bindNavs : function(){
       var self = this;
        self.opts.nav_wrap.css({
           'position' : 'absolute',
            'z-index' : 20,
            'width' : '80%',
            'height' : '20px',
            'bottom': '5px',
            'left' : '10%',
            'background' : 'rgba(0,0,0,0.7)'
        });
        var posLeftArr = []; // 存储每个item的left值
        for(var i=0;i<self.opts.slideItemLen;i++){
            // 计算每个item的left值
            posLeftArr.push( -self.opts.fooWrapW*i );
            // 创建子导航
            var span = $("<span class='"+self.opts.click_nav_class+"' attr-id='"+i+"'></span>");
            self.opts.nav_wrap.append(span);
        };

        $('.'+self.opts.click_nav_class).css({ // 通用子导航
           'display' : 'block',
            'float' : 'left',
           'width' : '20px',
           'height' : '20px',
           'margin-left' : 10,
           'background' : self.opts.common_nav_bg,
           'border-radius' : '50%',
           'box-sizing' : 'border-box'
        });
        var itemW = parseInt($('.'+self.opts.click_nav_class).width()); // 单个item的宽度
        var marginLeft = (0.8 * self.opts.fooWrapW) - itemW*(self.opts.slideItemLen+1);
        $('.'+self.opts.click_nav_class).css('margin-left',Math.floor(marginLeft/self.opts.slideItemLen));
        // 在子导航绑定事件
        $('.'+self.opts.click_nav_class).on('click',function(){
        //$('.js_nav_item').on('click',function(){
           clearInterval( self.timer );
           var index = $(this).index(); // 当前导航的索引
           self.activeIndex = index;
           if( self.isAnimate ){ // 正在移动，则点击时退出
               return false;
           }else{
               self.isAnimate = true; // 执行完后，则未在移动
               self.bindActiveNav(self.activeIndex); // 改变高亮子导航的索引
               self.opts.slideWrapObj.animate({
                   'left' : posLeftArr[index]
               },self.opts.slide_speed,function(){
                   //self.opts.slideWrapObjLeft = self.opts.slideWrapObj.css('left');
                   self.isAnimate = false; // 执行完后，则未在移动
                   self.bindSetIntervalMove();
               });
           }
        });
    },
    // 绑定节点事件
    bindSetIntervalMove : function(){
        var self = this;
        // 定时器
        self.timer = setInterval(function(){
            if(self.activeIndex >= 5){
                self.activeIndex = 1;
            }else{
                self.activeIndex += 1;
            }
            self.bindActiveNav(self.activeIndex);
            var nLeft = parseInt(self.opts.slideWrapObj.css('left'));
            if( nLeft < -(self.opts.slideWrapObjWidth - self.opts.fooWrapW*2) ){
                self.opts.slideWrapObj.css({
                    'left' : 0
                });
                self.bindActiveNav(0);
            }else{
                self.slideAnimation();
            }

        } , self.opts.slide_space);
    },
    // 绑定当前高亮导航
    bindActiveNav : function( index ){
        var self = this;
        $('.'+self.opts.click_nav_class).css('background',self.opts.common_nav_bg);
        $('.'+self.opts.click_nav_class).eq(index).css('background',self.opts.active_nav_bg);
    }

};

