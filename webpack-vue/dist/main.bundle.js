/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _vueMin = __webpack_require__(1);

	var _vueMin2 = _interopRequireDefault(_vueMin);

	var _vueRouter = __webpack_require__(2);

	var _vueRouter2 = _interopRequireDefault(_vueRouter);

	var _app = __webpack_require__(3);

	var _app2 = _interopRequireDefault(_app);

	var _navList = __webpack_require__(17);

	var _navList2 = _interopRequireDefault(_navList);

	var _home = __webpack_require__(28);

	var _home2 = _interopRequireDefault(_home);

	var _select = __webpack_require__(88);

	var _select2 = _interopRequireDefault(_select);

	var _topic = __webpack_require__(93);

	var _topic2 = _interopRequireDefault(_topic);

	var _activity = __webpack_require__(98);

	var _activity2 = _interopRequireDefault(_activity);

	var _swiperContent = __webpack_require__(69);

	var _swiperContent2 = _interopRequireDefault(_swiperContent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * main.js是在命令行中编译的文件
	 * 可以在其底部require其他文件
	 * 开启 webpack -w命令，监听编译器中文件的变化
	 * 再安装插件 npm install webpack-dev-server -g，浏览器自动刷新
	 * 启动 webpack-dev-server命令
	 */

	//require('!style!css!./style.css'); // webpack语法规定
	//require('less');

	__webpack_require__(103); // 在入口文件main.js中引入html
	//var Style = require('./style.less');
	//require('static/css/index.less');
	//require('../index.less');

	// 在main.js入口内，引入需要加载的.css或.less
	__webpack_require__(104); // 有效
	__webpack_require__(106); // 有效

	// !style!css!  !style!css!less!

	/*** main.js ***/
	// es6语法： (可以直接 import Vue from "vue")
	// 引入 Vue 及vue-router
	// es6会自动查找
	_vueMin2.default.use(_vueRouter2.default);

	// 外部引入别的库都可以用这样的方式
	// 引入我们编写的 .vue 单文件


	// 导航部分
	// 导航组件
	// 首页
	// 评选
	// 话题
	// 活动

	// 首页下面 swiper滑动，每个swiper对应的内容
	// 每个子swiper点进去的内容


	// 商品详情
	//import goodDetail from "./components/goodDetail.vue"; // 商品详情


	// 开启vue debug模式
	_vueMin2.default.config.debug = true;

	new _vueMin2.default(_app2.default); // 将主入口app.vue单页面注入Vue实例

	// 路由器需要一个根组件
	var App = _vueMin2.default.extend({});
	// 创建一个路由器实例
	var router = new _vueRouter2.default();
	// 每条路由应该映射到一个组件
	// 路由嵌套
	router.map({ // 定义路由映射
	    '/index': { // 访问地址
	        name: 'index', //定义路由的名字，方便使用
	        component: _app2.default, //引用的组件名称，对应上面import进来的组件
	        // component : require('components/app.vue') 也可以
	        // 在/index下设置一个子路由
	        subRoutes: {
	            '/home': {
	                name: 'home',
	                component: _home2.default
	            },
	            '/select': { // 评选
	                name: 'select',
	                component: _select2.default
	            },
	            '/topic': { // 话题
	                name: 'topic',
	                component: _topic2.default
	            },
	            '/activity': { // 活动
	                name: 'activity',
	                component: _activity2.default
	            },
	            // 每个子swiper点进去后对应的内容
	            '/swiperContent': {
	                name: 'swiperContent',
	                component: _swiperContent2.default
	            }
	        }
	    }
	    /*
	    '/list' : {
	        name : 'list',
	        component : list,
	        subRoutes : {
	            '/bye' : {
	                name : 'bye',
	                component : bye
	            }
	        }
	    },
	        */
	    // 头部导航部分
	    /*
	    'navList' : {
	        name : 'navList',
	        component : navList,
	        subRoutes : {
	            // 导航下面的嵌套路由
	            '/newfortune' : {
	                name : 'newfortune',
	                component : newfortune
	            },
	            '/hot' : {
	                name : 'hot',
	                component : hot
	            },
	            '/specialties' : {
	                name : 'specialties',
	                component : specialties
	            },
	            '/magazine' : {
	                name : 'magazine',
	                component : magazine
	            }
	        }
	    }
	    */
	});
	// 定义全局重定向，重定向未匹配路径到 /index
	router.redirect({
	    //'*' : '/index'
	    '*': '/index/home/'
	});
	// 启动应用，路由器会创建一个App实例，并挂载到id #app
	router.start(App, '#app');

	/**
	 * webpack-dev-server 命令启动后，
	 * 在浏览器中输入地址：http://localhost:8080/webpack-dev-server/
	 * ajax -
	 * vue-resource
	 */

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Vue.js v1.0.28
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define(e):t.Vue=e()}(this,function(){"use strict";function t(e,n,r){if(i(e,n))return void(e[n]=r);if(e._isVue)return void t(e._data,n,r);var s=e.__ob__;if(!s)return void(e[n]=r);if(s.convert(n,r),s.dep.notify(),s.vms)for(var o=s.vms.length;o--;){var a=s.vms[o];a._proxy(n),a._digest()}return r}function e(t,e){if(i(t,e)){delete t[e];var n=t.__ob__;if(!n)return void(t._isVue&&(delete t._data[e],t._digest()));if(n.dep.notify(),n.vms)for(var r=n.vms.length;r--;){var s=n.vms[r];s._unproxy(e),s._digest()}}}function i(t,e){return Mi.call(t,e)}function n(t){return Wi.test(t)}function r(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function s(t){return null==t?"":t.toString()}function o(t){if("string"!=typeof t)return t;var e=Number(t);return isNaN(e)?t:e}function a(t){return"true"===t||"false"!==t&&t}function h(t){var e=t.charCodeAt(0),i=t.charCodeAt(t.length-1);return e!==i||34!==e&&39!==e?t:t.slice(1,-1)}function l(t){return t.replace(Vi,c)}function c(t,e){return e?e.toUpperCase():""}function u(t){return t.replace(Bi,"$1-$2").replace(Bi,"$1-$2").toLowerCase()}function f(t){return t.replace(zi,c)}function p(t,e){return function(i){var n=arguments.length;return n?n>1?t.apply(e,arguments):t.call(e,i):t.call(e)}}function d(t,e){e=e||0;for(var i=t.length-e,n=new Array(i);i--;)n[i]=t[i+e];return n}function v(t,e){for(var i=Object.keys(e),n=i.length;n--;)t[i[n]]=e[i[n]];return t}function m(t){return null!==t&&"object"==typeof t}function g(t){return Ui.call(t)===Ji}function _(t,e,i,n){Object.defineProperty(t,e,{value:i,enumerable:!!n,writable:!0,configurable:!0})}function y(t,e){var i,n,r,s,o,a=function a(){var h=Date.now()-s;h<e&&h>=0?i=setTimeout(a,e-h):(i=null,o=t.apply(r,n),i||(r=n=null))};return function(){return r=this,n=arguments,s=Date.now(),i||(i=setTimeout(a,e)),o}}function b(t,e){for(var i=t.length;i--;)if(t[i]===e)return i;return-1}function w(t){var e=function e(){if(!e.cancelled)return t.apply(this,arguments)};return e.cancel=function(){e.cancelled=!0},e}function C(t,e){return t==e||!(!m(t)||!m(e))&&JSON.stringify(t)===JSON.stringify(e)}function $(t){return/native code/.test(t.toString())}function k(t){this.size=0,this.limit=t,this.head=this.tail=void 0,this._keymap=Object.create(null)}function x(){return fn.charCodeAt(vn+1)}function A(){return fn.charCodeAt(++vn)}function O(){return vn>=dn}function T(){for(;x()===Tn;)A()}function N(t){return t===kn||t===xn}function j(t){return Nn[t]}function E(t,e){return jn[t]===e}function S(){for(var t,e=A();!O();)if(t=A(),t===On)A();else if(t===e)break}function F(t){for(var e=0,i=t;!O();)if(t=x(),N(t))S();else if(i===t&&e++,E(i,t)&&e--,A(),0===e)break}function D(){for(var t=vn;!O();)if(mn=x(),N(mn))S();else if(j(mn))F(mn);else if(mn===An){if(A(),mn=x(),mn!==An){gn!==bn&&gn!==$n||(gn=wn);break}A()}else{if(mn===Tn&&(gn===Cn||gn===$n)){T();break}gn===wn&&(gn=Cn),A()}return fn.slice(t+1,vn)||null}function P(){for(var t=[];!O();)t.push(R());return t}function R(){var t,e={};return gn=wn,e.name=D().trim(),gn=$n,t=L(),t.length&&(e.args=t),e}function L(){for(var t=[];!O()&&gn!==wn;){var e=D();if(!e)break;t.push(H(e))}return t}function H(t){if(yn.test(t))return{value:o(t),dynamic:!1};var e=h(t),i=e===t;return{value:i?t:e,dynamic:i}}function I(t){var e=_n.get(t);if(e)return e;fn=t,pn={},dn=fn.length,vn=-1,mn="",gn=bn;var i;return fn.indexOf("|")<0?pn.expression=fn.trim():(pn.expression=D().trim(),i=P(),i.length&&(pn.filters=i)),_n.put(t,pn),pn}function M(t){return t.replace(Sn,"\\$&")}function W(){var t=M(Mn.delimiters[0]),e=M(Mn.delimiters[1]),i=M(Mn.unsafeDelimiters[0]),n=M(Mn.unsafeDelimiters[1]);Dn=new RegExp(i+"((?:.|\\n)+?)"+n+"|"+t+"((?:.|\\n)+?)"+e,"g"),Pn=new RegExp("^"+i+"((?:.|\\n)+?)"+n+"$"),Fn=new k(1e3)}function V(t){Fn||W();var e=Fn.get(t);if(e)return e;if(!Dn.test(t))return null;for(var i,n,r,s,o,a,h=[],l=Dn.lastIndex=0;i=Dn.exec(t);)n=i.index,n>l&&h.push({value:t.slice(l,n)}),r=Pn.test(i[0]),s=r?i[1]:i[2],o=s.charCodeAt(0),a=42===o,s=a?s.slice(1):s,h.push({tag:!0,value:s.trim(),html:r,oneTime:a}),l=n+i[0].length;return l<t.length&&h.push({value:t.slice(l)}),Fn.put(t,h),h}function B(t,e){return t.length>1?t.map(function(t){return z(t,e)}).join("+"):z(t[0],e,!0)}function z(t,e,i){return t.tag?t.oneTime&&e?'"'+e.$eval(t.value)+'"':U(t.value,i):'"'+t.value+'"'}function U(t,e){if(Rn.test(t)){var i=I(t);return i.filters?"this._applyFilters("+i.expression+",null,"+JSON.stringify(i.filters)+",false)":"("+t+")"}return e?t:"("+t+")"}function J(t,e,i,n){G(t,1,function(){e.appendChild(t)},i,n)}function q(t,e,i,n){G(t,1,function(){et(t,e)},i,n)}function Q(t,e,i){G(t,-1,function(){nt(t)},e,i)}function G(t,e,i,n,r){var s=t.__v_trans;if(!s||!s.hooks&&!rn||!n._isCompiled||n.$parent&&!n.$parent._isCompiled)return i(),void(r&&r());var o=e>0?"enter":"leave";s[o](i,r)}function Z(t){if("string"==typeof t){t=document.querySelector(t)}return t}function X(t){if(!t)return!1;var e=t.ownerDocument.documentElement,i=t.parentNode;return e===t||e===i||!(!i||1!==i.nodeType||!e.contains(i))}function Y(t,e){var i=t.getAttribute(e);return null!==i&&t.removeAttribute(e),i}function K(t,e){var i=Y(t,":"+e);return null===i&&(i=Y(t,"v-bind:"+e)),i}function tt(t,e){return t.hasAttribute(e)||t.hasAttribute(":"+e)||t.hasAttribute("v-bind:"+e)}function et(t,e){e.parentNode.insertBefore(t,e)}function it(t,e){e.nextSibling?et(t,e.nextSibling):e.parentNode.appendChild(t)}function nt(t){t.parentNode.removeChild(t)}function rt(t,e){e.firstChild?et(t,e.firstChild):e.appendChild(t)}function st(t,e){var i=t.parentNode;i&&i.replaceChild(e,t)}function ot(t,e,i,n){t.addEventListener(e,i,n)}function at(t,e,i){t.removeEventListener(e,i)}function ht(t){var e=t.className;return"object"==typeof e&&(e=e.baseVal||""),e}function lt(t,e){Ki&&!/svg$/.test(t.namespaceURI)?t.className=e:t.setAttribute("class",e)}function ct(t,e){if(t.classList)t.classList.add(e);else{var i=" "+ht(t)+" ";i.indexOf(" "+e+" ")<0&&lt(t,(i+e).trim())}}function ut(t,e){if(t.classList)t.classList.remove(e);else{for(var i=" "+ht(t)+" ",n=" "+e+" ";i.indexOf(n)>=0;)i=i.replace(n," ");lt(t,i.trim())}t.className||t.removeAttribute("class")}function ft(t,e){var i,n;if(vt(t)&&bt(t.content)&&(t=t.content),t.hasChildNodes())for(pt(t),n=e?document.createDocumentFragment():document.createElement("div");i=t.firstChild;)n.appendChild(i);return n}function pt(t){for(var e;e=t.firstChild,dt(e);)t.removeChild(e);for(;e=t.lastChild,dt(e);)t.removeChild(e)}function dt(t){return t&&(3===t.nodeType&&!t.data.trim()||8===t.nodeType)}function vt(t){return t.tagName&&"template"===t.tagName.toLowerCase()}function mt(t,e){var i=Mn.debug?document.createComment(t):document.createTextNode(e?" ":"");return i.__v_anchor=!0,i}function gt(t){if(t.hasAttributes())for(var e=t.attributes,i=0,n=e.length;i<n;i++){var r=e[i].name;if(Bn.test(r))return l(r.replace(Bn,""))}}function _t(t,e,i){for(var n;t!==e;)n=t.nextSibling,i(t),t=n;i(e)}function yt(t,e,i,n,r){function s(){if(a++,o&&a>=h.length){for(var t=0;t<h.length;t++)n.appendChild(h[t]);r&&r()}}var o=!1,a=0,h=[];_t(t,e,function(t){t===e&&(o=!0),h.push(t),Q(t,i,s)})}function bt(t){return t&&11===t.nodeType}function wt(t){if(t.outerHTML)return t.outerHTML;var e=document.createElement("div");return e.appendChild(t.cloneNode(!0)),e.innerHTML}function Ct(t,e){var i=t.tagName.toLowerCase(),n=t.hasAttributes();if(zn.test(i)||Un.test(i)){if(n)return $t(t,e)}else{if(jt(e,"components",i))return{id:i};var r=n&&$t(t,e);if(r)return r}}function $t(t,e){var i=t.getAttribute("is");if(null!=i){if(jt(e,"components",i))return t.removeAttribute("is"),{id:i}}else if(i=K(t,"is"),null!=i)return{id:i,dynamic:!0}}function kt(e,n){var r,s,o;for(r in n)s=e[r],o=n[r],i(e,r)?m(s)&&m(o)&&kt(s,o):t(e,r,o);return e}function xt(t,e){var i=Object.create(t||null);return e?v(i,Tt(e)):i}function At(t){if(t.components)for(var e,i=t.components=Tt(t.components),n=Object.keys(i),r=0,s=n.length;r<s;r++){var o=n[r];zn.test(o)||Un.test(o)||(e=i[o],g(e)&&(i[o]=Di.extend(e)))}}function Ot(t){var e,i,n=t.props;if(qi(n))for(t.props={},e=n.length;e--;)i=n[e],"string"==typeof i?t.props[i]=null:i.name&&(t.props[i.name]=i);else if(g(n)){var r=Object.keys(n);for(e=r.length;e--;)i=n[r[e]],"function"==typeof i&&(n[r[e]]={type:i})}}function Tt(t){if(qi(t)){for(var e,i={},n=t.length;n--;){e=t[n];var r="function"==typeof e?e.options&&e.options.name||e.id:e.name||e.id;r&&(i[r]=e)}return i}return t}function Nt(t,e,n){function r(i){var r=Jn[i]||qn;o[i]=r(t[i],e[i],n,i)}At(e),Ot(e);var s,o={};if(e.extends&&(t="function"==typeof e.extends?Nt(t,e.extends.options,n):Nt(t,e.extends,n)),e.mixins)for(var a=0,h=e.mixins.length;a<h;a++){var l=e.mixins[a],c=l.prototype instanceof Di?l.options:l;t=Nt(t,c,n)}for(s in t)r(s);for(s in e)i(t,s)||r(s);return o}function jt(t,e,i,n){if("string"==typeof i){var r,s=t[e],o=s[i]||s[r=l(i)]||s[r.charAt(0).toUpperCase()+r.slice(1)];return o}}function Et(){this.id=Qn++,this.subs=[]}function St(t){Yn=!1,t(),Yn=!0}function Ft(t){if(this.value=t,this.dep=new Et,_(t,"__ob__",this),qi(t)){var e=Qi?Dt:Pt;e(t,Zn,Xn),this.observeArray(t)}else this.walk(t)}function Dt(t,e){t.__proto__=e}function Pt(t,e,i){for(var n=0,r=i.length;n<r;n++){var s=i[n];_(t,s,e[s])}}function Rt(t,e){if(t&&"object"==typeof t){var n;return i(t,"__ob__")&&t.__ob__ instanceof Ft?n=t.__ob__:Yn&&(qi(t)||g(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new Ft(t)),n&&e&&n.addVm(e),n}}function Lt(t,e,i){var n=new Et,r=Object.getOwnPropertyDescriptor(t,e);if(!r||r.configurable!==!1){var s=r&&r.get,o=r&&r.set,a=Rt(i);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):i;if(Et.target&&(n.depend(),a&&a.dep.depend(),qi(e)))for(var r,o=0,h=e.length;o<h;o++)r=e[o],r&&r.__ob__&&r.__ob__.dep.depend();return e},set:function(e){var r=s?s.call(t):i;e!==r&&(o?o.call(t,e):i=e,a=Rt(e),n.notify())}})}}function Ht(t){t.prototype._init=function(t){t=t||{},this.$el=null,this.$parent=t.parent,this.$root=this.$parent?this.$parent.$root:this,this.$children=[],this.$refs={},this.$els={},this._watchers=[],this._directives=[],this._uid=tr++,this._isVue=!0,this._events={},this._eventsCount={},this._isFragment=!1,this._fragment=this._fragmentStart=this._fragmentEnd=null,this._isCompiled=this._isDestroyed=this._isReady=this._isAttached=this._isBeingDestroyed=this._vForRemoving=!1,this._unlinkFn=null,this._context=t._context||this.$parent,this._scope=t._scope,this._frag=t._frag,this._frag&&this._frag.children.push(this),this.$parent&&this.$parent.$children.push(this),t=this.$options=Nt(this.constructor.options,t,this),this._updateRef(),this._data={},this._callHook("init"),this._initState(),this._initEvents(),this._callHook("created"),t.el&&this.$mount(t.el)}}function It(t){if(void 0===t)return"eof";var e=t.charCodeAt(0);switch(e){case 91:case 93:case 46:case 34:case 39:case 48:return t;case 95:case 36:return"ident";case 32:case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"ws"}return e>=97&&e<=122||e>=65&&e<=90?"ident":e>=49&&e<=57?"number":"else"}function Mt(t){var e=t.trim();return("0"!==t.charAt(0)||!isNaN(t))&&(n(e)?h(e):"*"+e)}function Wt(t){function e(){var e=t[c+1];if(u===ur&&"'"===e||u===fr&&'"'===e)return c++,n="\\"+e,p[ir](),!0}var i,n,r,s,o,a,h,l=[],c=-1,u=or,f=0,p=[];for(p[nr]=function(){void 0!==r&&(l.push(r),r=void 0)},p[ir]=function(){void 0===r?r=n:r+=n},p[rr]=function(){p[ir](),f++},p[sr]=function(){if(f>0)f--,u=cr,p[ir]();else{if(f=0,r=Mt(r),r===!1)return!1;p[nr]()}};null!=u;)if(c++,i=t[c],"\\"!==i||!e()){if(s=It(i),h=vr[u],o=h[s]||h.else||dr,o===dr)return;if(u=o[0],a=p[o[1]],a&&(n=o[2],n=void 0===n?i:n,a()===!1))return;if(u===pr)return l.raw=t,l}}function Vt(t){var e=er.get(t);return e||(e=Wt(t),e&&er.put(t,e)),e}function Bt(t,e){return Yt(e).get(t)}function zt(e,i,n){var r=e;if("string"==typeof i&&(i=Wt(i)),!i||!m(e))return!1;for(var s,o,a=0,h=i.length;a<h;a++)s=e,o=i[a],"*"===o.charAt(0)&&(o=Yt(o.slice(1)).get.call(r,r)),a<h-1?(e=e[o],m(e)||(e={},t(s,o,e))):qi(e)?e.$set(o,n):o in e?e[o]=n:t(e,o,n);return!0}function Ut(){}function Jt(t,e){var i=Nr.length;return Nr[i]=e?t.replace($r,"\\n"):t,'"'+i+'"'}function qt(t){var e=t.charAt(0),i=t.slice(1);return yr.test(i)?t:(i=i.indexOf('"')>-1?i.replace(xr,Qt):i,e+"scope."+i)}function Qt(t,e){return Nr[e]}function Gt(t){wr.test(t),Nr.length=0;var e=t.replace(kr,Jt).replace(Cr,"");return e=(" "+e).replace(Or,qt).replace(xr,Qt),Zt(e)}function Zt(t){try{return new Function("scope","return "+t+";")}catch(t){return Ut}}function Xt(t){var e=Vt(t);if(e)return function(t,i){zt(t,e,i)}}function Yt(t,e){t=t.trim();var i=gr.get(t);if(i)return e&&!i.set&&(i.set=Xt(i.exp)),i;var n={exp:t};return n.get=Kt(t)&&t.indexOf("[")<0?Zt("scope."+t):Gt(t),e&&(n.set=Xt(t)),gr.put(t,n),n}function Kt(t){return Ar.test(t)&&!Tr.test(t)&&"Math."!==t.slice(0,5)}function te(){Er.length=0,Sr.length=0,Fr={},Dr={},Pr=!1}function ee(){for(var t=!0;t;)t=!1,ie(Er),ie(Sr),Er.length?t=!0:(Zi&&Mn.devtools&&Zi.emit("flush"),te())}function ie(t){for(var e=0;e<t.length;e++){var i=t[e],n=i.id;Fr[n]=null,i.run()}t.length=0}function ne(t){var e=t.id;if(null==Fr[e]){var i=t.user?Sr:Er;Fr[e]=i.length,i.push(t),Pr||(Pr=!0,ln(ee))}}function re(t,e,i,n){n&&v(this,n);var r="function"==typeof e;if(this.vm=t,t._watchers.push(this),this.expression=e,this.cb=i,this.id=++Rr,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new cn,this.newDepIds=new cn,this.prevError=null,r)this.getter=e,this.setter=void 0;else{var s=Yt(e,this.twoWay);this.getter=s.get,this.setter=s.set}this.value=this.lazy?void 0:this.get(),this.queued=this.shallow=!1}function se(t,e){var i=void 0,n=void 0;e||(e=Lr,e.clear());var r=qi(t),s=m(t);if((r||s)&&Object.isExtensible(t)){if(t.__ob__){var o=t.__ob__.dep.id;if(e.has(o))return;e.add(o)}if(r)for(i=t.length;i--;)se(t[i],e);else if(s)for(n=Object.keys(t),i=n.length;i--;)se(t[n[i]],e)}}function oe(t){return vt(t)&&bt(t.content)}function ae(t,e){var i=e?t:t.trim(),n=Ir.get(i);if(n)return n;var r=document.createDocumentFragment(),s=t.match(Vr),o=Br.test(t),a=zr.test(t);if(s||o||a){var h=s&&s[1],l=Wr[h]||Wr.efault,c=l[0],u=l[1],f=l[2],p=document.createElement("div");for(p.innerHTML=u+t+f;c--;)p=p.lastChild;for(var d;d=p.firstChild;)r.appendChild(d)}else r.appendChild(document.createTextNode(t));return e||pt(r),Ir.put(i,r),r}function he(t){if(oe(t))return ae(t.innerHTML);if("SCRIPT"===t.tagName)return ae(t.textContent);for(var e,i=le(t),n=document.createDocumentFragment();e=i.firstChild;)n.appendChild(e);return pt(n),n}function le(t){if(!t.querySelectorAll)return t.cloneNode();var e,i,n,r=t.cloneNode(!0);if(Ur){var s=r;if(oe(t)&&(t=t.content,s=r.content),i=t.querySelectorAll("template"),i.length)for(n=s.querySelectorAll("template"),e=n.length;e--;)n[e].parentNode.replaceChild(le(i[e]),n[e])}if(Jr)if("TEXTAREA"===t.tagName)r.value=t.value;else if(i=t.querySelectorAll("textarea"),i.length)for(n=r.querySelectorAll("textarea"),e=n.length;e--;)n[e].value=i[e].value;return r}function ce(t,e,i){var n,r;return bt(t)?(pt(t),e?le(t):t):("string"==typeof t?i||"#"!==t.charAt(0)?r=ae(t,i):(r=Mr.get(t),r||(n=document.getElementById(t.slice(1)),n&&(r=he(n),Mr.put(t,r)))):t.nodeType&&(r=he(t)),r&&e?le(r):r)}function ue(t,e,i,n,r,s){this.children=[],this.childFrags=[],this.vm=e,this.scope=r,this.inserted=!1,this.parentFrag=s,s&&s.childFrags.push(this),this.unlink=t(e,i,n,r,this);var o=this.single=1===i.childNodes.length&&!i.childNodes[0].__v_anchor;o?(this.node=i.childNodes[0],this.before=fe,this.remove=pe):(this.node=mt("fragment-start"),this.end=mt("fragment-end"),this.frag=i,rt(this.node,i),i.appendChild(this.end),this.before=de,this.remove=ve),this.node.__v_frag=this}function fe(t,e){this.inserted=!0;var i=e!==!1?q:et;i(this.node,t,this.vm),X(this.node)&&this.callHook(me)}function pe(){this.inserted=!1;var t=X(this.node),e=this;this.beforeRemove(),Q(this.node,this.vm,function(){t&&e.callHook(ge),e.destroy()})}function de(t,e){this.inserted=!0;var i=this.vm,n=e!==!1?q:et;_t(this.node,this.end,function(e){n(e,t,i)}),X(this.node)&&this.callHook(me)}function ve(){this.inserted=!1;var t=this,e=X(this.node);this.beforeRemove(),yt(this.node,this.end,this.vm,this.frag,function(){e&&t.callHook(ge),t.destroy()})}function me(t){!t._isAttached&&X(t.$el)&&t._callHook("attached")}function ge(t){t._isAttached&&!X(t.$el)&&t._callHook("detached")}function _e(t,e){this.vm=t;var i,n="string"==typeof e;n||vt(e)&&!e.hasAttribute("v-if")?i=ce(e,!0):(i=document.createDocumentFragment(),i.appendChild(e)),this.template=i;var r,s=t.constructor.cid;if(s>0){var o=s+(n?e:wt(e));r=Gr.get(o),r||(r=qe(i,t.$options,!0),Gr.put(o,r))}else r=qe(i,t.$options,!0);this.linker=r}function ye(t,e,i){var n=t.node.previousSibling;if(n){for(t=n.__v_frag;!(t&&t.forId===i&&t.inserted||n===e);){if(n=n.previousSibling,!n)return;t=n.__v_frag}return t}}function be(t){for(var e=-1,i=new Array(Math.floor(t));++e<t;)i[e]=e;return i}function we(t,e,i,n){return n?"$index"===n?t:n.charAt(0).match(/\w/)?Bt(i,n):i[n]:e||i}function Ce(t){var e=t.node;if(t.end)for(;!e.__vue__&&e!==t.end&&e.nextSibling;)e=e.nextSibling;return e.__vue__}function $e(t,e,i){for(var n,r,s,o=e?[]:null,a=0,h=t.options.length;a<h;a++)if(n=t.options[a],s=i?n.hasAttribute("selected"):n.selected){if(r=n.hasOwnProperty("_value")?n._value:n.value,!e)return r;o.push(r)}return o}function ke(t,e){for(var i=t.length;i--;)if(C(t[i],e))return i;return-1}function xe(t,e){var i=e.map(function(t){var e=t.charCodeAt(0);return e>47&&e<58?parseInt(t,10):1===t.length&&(e=t.toUpperCase().charCodeAt(0),e>64&&e<91)?e:ms[t]});return i=[].concat.apply([],i),function(e){if(i.indexOf(e.keyCode)>-1)return t.call(this,e)}}function Ae(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function Oe(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Te(t){return function(e){if(e.target===e.currentTarget)return t.call(this,e)}}function Ne(t){if(ws[t])return ws[t];var e=je(t);return ws[t]=ws[e]=e,e}function je(t){t=u(t);var e=l(t),i=e.charAt(0).toUpperCase()+e.slice(1);Cs||(Cs=document.createElement("div"));var n,r=_s.length;if("filter"!==e&&e in Cs.style)return{kebab:t,camel:e};for(;r--;)if(n=ys[r]+i,n in Cs.style)return{kebab:_s[r]+t,camel:n}}function Ee(t){var e=[];if(qi(t))for(var i=0,n=t.length;i<n;i++){var r=t[i];if(r)if("string"==typeof r)e.push(r);else for(var s in r)r[s]&&e.push(s)}else if(m(t))for(var o in t)t[o]&&e.push(o);return e}function Se(t,e,i){if(e=e.trim(),e.indexOf(" ")===-1)return void i(t,e);for(var n=e.split(/\s+/),r=0,s=n.length;r<s;r++)i(t,n[r])}function Fe(t,e,i){function n(){++s>=r?i():t[s].call(e,n)}var r=t.length,s=0;t[0].call(e,n)}function De(t,e,i){for(var r,s,o,a,h,c,f,p=[],d=i.$options.propsData,v=Object.keys(e),m=v.length;m--;)s=v[m],r=e[s]||Hs,h=l(s),Is.test(h)&&(f={name:s,path:h,options:r,mode:Ls.ONE_WAY,raw:null},o=u(s),null===(a=K(t,o))&&(null!==(a=K(t,o+".sync"))?f.mode=Ls.TWO_WAY:null!==(a=K(t,o+".once"))&&(f.mode=Ls.ONE_TIME)),null!==a?(f.raw=a,c=I(a),a=c.expression,f.filters=c.filters,n(a)&&!c.filters?f.optimizedLiteral=!0:f.dynamic=!0,f.parentPath=a):null!==(a=Y(t,o))?f.raw=a:d&&null!==(a=d[s]||d[h])&&(f.raw=a),p.push(f));return Pe(p)}function Pe(t){return function(e,n){e._props={};for(var r,s,l,c,f,p=e.$options.propsData,d=t.length;d--;)if(r=t[d],f=r.raw,s=r.path,l=r.options,e._props[s]=r,p&&i(p,s)&&Le(e,r,p[s]),null===f)Le(e,r,void 0);else if(r.dynamic)r.mode===Ls.ONE_TIME?(c=(n||e._context||e).$get(r.parentPath),Le(e,r,c)):e._context?e._bindDir({name:"prop",def:Ws,prop:r},null,null,n):Le(e,r,e.$get(r.parentPath));else if(r.optimizedLiteral){var v=h(f);c=v===f?a(o(f)):v,Le(e,r,c)}else c=l.type===Boolean&&(""===f||f===u(r.name))||f,Le(e,r,c)}}function Re(t,e,i,n){var r=e.dynamic&&Kt(e.parentPath),s=i;void 0===s&&(s=Ie(t,e)),s=We(e,s,t);var o=s!==i;Me(e,s,t)||(s=void 0),r&&!o?St(function(){n(s)}):n(s)}function Le(t,e,i){Re(t,e,i,function(i){Lt(t,e.path,i)})}function He(t,e,i){Re(t,e,i,function(i){t[e.path]=i})}function Ie(t,e){var n=e.options;if(!i(n,"default"))return n.type!==Boolean&&void 0;var r=n.default;return m(r),"function"==typeof r&&n.type!==Function?r.call(t):r}function Me(t,e,i){if(!t.options.required&&(null===t.raw||null==e))return!0;var n=t.options,r=n.type,s=!r,o=[];if(r){qi(r)||(r=[r]);for(var a=0;a<r.length&&!s;a++){var h=Ve(e,r[a]);o.push(h.expectedType),s=h.valid}}if(!s)return!1;var l=n.validator;return!(l&&!l(e))}function We(t,e,i){var n=t.options.coerce;return n&&"function"==typeof n?n(e):e}function Ve(t,e){var i,n;return e===String?(n="string",i=typeof t===n):e===Number?(n="number",i=typeof t===n):e===Boolean?(n="boolean",i=typeof t===n):e===Function?(n="function",i=typeof t===n):e===Object?(n="object",i=g(t)):e===Array?(n="array",i=qi(t)):i=t instanceof e,{valid:i,expectedType:n}}function Be(t){Vs.push(t),Bs||(Bs=!0,ln(ze))}function ze(){for(var t=document.documentElement.offsetHeight,e=0;e<Vs.length;e++)Vs[e]();return Vs=[],Bs=!1,t}function Ue(t,e,i,n){this.id=e,this.el=t,this.enterClass=i&&i.enterClass||e+"-enter",this.leaveClass=i&&i.leaveClass||e+"-leave",this.hooks=i,this.vm=n,this.pendingCssEvent=this.pendingCssCb=this.cancel=this.pendingJsCb=this.op=this.cb=null,this.justEntered=!1,this.entered=this.left=!1,this.typeCache={},this.type=i&&i.type;var r=this;["enterNextTick","enterDone","leaveNextTick","leaveDone"].forEach(function(t){r[t]=p(r[t],r)})}function Je(t){if(/svg$/.test(t.namespaceURI)){var e=t.getBoundingClientRect();return!(e.width||e.height)}return!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)}function qe(t,e,i){var n=i||!e._asComponent?ti(t,e):null,r=n&&n.terminal||gi(t)||!t.hasChildNodes()?null:oi(t.childNodes,e);return function(t,e,i,s,o){var a=d(e.childNodes),h=Qe(function(){n&&n(t,e,i,s,o),r&&r(t,a,i,s,o)},t);return Ze(t,h)}}function Qe(t,e){e._directives=[];var i=e._directives.length;t();var n=e._directives.slice(i);Ge(n);for(var r=0,s=n.length;r<s;r++)n[r]._bind();return n}function Ge(t){if(0!==t.length){var e,i,n,r,s={},o=0,a=[];for(e=0,i=t.length;e<i;e++){var h=t[e],l=h.descriptor.def.priority||ro,c=s[l];c||(c=s[l]=[],a.push(l)),c.push(h)}for(a.sort(function(t,e){return t>e?-1:t===e?0:1}),e=0,i=a.length;e<i;e++){var u=s[a[e]];for(n=0,r=u.length;n<r;n++)t[o++]=u[n]}}}function Ze(t,e,i,n){function r(r){Xe(t,e,r),i&&n&&Xe(i,n)}return r.dirs=e,r}function Xe(t,e,i){for(var n=e.length;n--;)e[n]._teardown()}function Ye(t,e,i,n){var r=De(e,i,t),s=Qe(function(){r(t,n)},t);return Ze(t,s)}function Ke(t,e,i){var n,r,s=e._containerAttrs,o=e._replacerAttrs;return 11!==t.nodeType&&(e._asComponent?(s&&i&&(n=pi(s,i)),o&&(r=pi(o,e))):r=pi(t.attributes,e)),e._containerAttrs=e._replacerAttrs=null,function(t,e,i){var s,o=t._context;o&&n&&(s=Qe(function(){n(o,e,null,i)},o));var a=Qe(function(){r&&r(t,e)},t);return Ze(t,a,o,s)}}function ti(t,e){var i=t.nodeType;return 1!==i||gi(t)?3===i&&t.data.trim()?ii(t,e):null:ei(t,e)}function ei(t,e){if("TEXTAREA"===t.tagName){if(null!==Y(t,"v-pre"))return ui;var i=V(t.value);i&&(t.setAttribute(":value",B(i)),t.value="")}var n,r=t.hasAttributes(),s=r&&d(t.attributes);return r&&(n=ci(t,s,e)),n||(n=hi(t,e)),n||(n=li(t,e)),!n&&r&&(n=pi(s,e)),n}function ii(t,e){if(t._skip)return ni;var i=V(t.wholeText);if(!i)return null;for(var n=t.nextSibling;n&&3===n.nodeType;)n._skip=!0,n=n.nextSibling;for(var r,s,o=document.createDocumentFragment(),a=0,h=i.length;a<h;a++)s=i[a],r=s.tag?ri(s,e):document.createTextNode(s.value),o.appendChild(r);return si(i,o,e)}function ni(t,e){nt(e)}function ri(t,e){function i(e){if(!t.descriptor){var i=I(t.value);t.descriptor={name:e,def:Ds[e],expression:i.expression,filters:i.filters}}}var n;return t.oneTime?n=document.createTextNode(t.value):t.html?(n=document.createComment("v-html"),i("html")):(n=document.createTextNode(" "),i("text")),n}function si(t,e){return function(i,n,r,o){for(var a,h,l,c=e.cloneNode(!0),u=d(c.childNodes),f=0,p=t.length;f<p;f++)a=t[f],h=a.value,a.tag&&(l=u[f],a.oneTime?(h=(o||i).$eval(h),a.html?st(l,ce(h,!0)):l.data=s(h)):i._bindDir(a.descriptor,l,r,o));st(n,c)}}function oi(t,e){for(var i,n,r,s=[],o=0,a=t.length;o<a;o++)r=t[o],i=ti(r,e),n=i&&i.terminal||"SCRIPT"===r.tagName||!r.hasChildNodes()?null:oi(r.childNodes,e),s.push(i,n);return s.length?ai(s):null}function ai(t){return function(e,i,n,r,s){for(var o,a,h,l=0,c=0,u=t.length;l<u;c++){o=i[c],a=t[l++],h=t[l++];var f=d(o.childNodes);a&&a(e,o,n,r,s),h&&h(e,f,n,r,s)}}}function hi(t,e){var i=t.tagName.toLowerCase();if(!zn.test(i)){var n=jt(e,"elementDirectives",i);return n?fi(t,i,"",e,n):void 0}}function li(t,e){var i=Ct(t,e);if(i){var n=gt(t),r={name:"component",ref:n,expression:i.id,def:Ys.component,modifiers:{literal:!i.dynamic}},s=function(t,e,i,s,o){n&&Lt((s||t).$refs,n,null),t._bindDir(r,e,i,s,o)};return s.terminal=!0,s}}function ci(t,e,i){if(null!==Y(t,"v-pre"))return ui;if(t.hasAttribute("v-else")){var n=t.previousElementSibling;if(n&&n.hasAttribute("v-if"))return ui}for(var r,s,o,a,h,l,c,u,f,p,d=0,v=e.length;d<v;d++)r=e[d],s=r.name.replace(io,""),(h=s.match(eo))&&(f=jt(i,"directives",h[1]),f&&f.terminal&&(!p||(f.priority||so)>p.priority)&&(p=f,c=r.name,a=di(r.name),o=r.value,l=h[1],u=h[2]));return p?fi(t,l,o,i,p,c,u,a):void 0}function ui(){}function fi(t,e,i,n,r,s,o,a){var h=I(i),l={name:e,arg:o,expression:h.expression,filters:h.filters,raw:i,attr:s,modifiers:a,def:r};"for"!==e&&"router-view"!==e||(l.ref=gt(t));var c=function(t,e,i,n,r){l.ref&&Lt((n||t).$refs,l.ref,null),t._bindDir(l,e,i,n,r)};return c.terminal=!0,c}function pi(t,e){function i(t,e,i){var n=i&&mi(i),r=!n&&I(s);v.push({name:t,attr:o,raw:a,def:e,arg:l,modifiers:c,expression:r&&r.expression,filters:r&&r.filters,interp:i,hasOneTime:n})}for(var n,r,s,o,a,h,l,c,u,f,p,d=t.length,v=[];d--;)if(n=t[d],r=o=n.name,s=a=n.value,f=V(s),l=null,c=di(r),r=r.replace(io,""),f)s=B(f),l=r,i("bind",Ds.bind,f);else if(no.test(r))c.literal=!Ks.test(r),i("transition",Ys.transition);else if(to.test(r))l=r.replace(to,""),i("on",Ds.on);else if(Ks.test(r))h=r.replace(Ks,""),"style"===h||"class"===h?i(h,Ys[h]):(l=h,i("bind",Ds.bind));else if(p=r.match(eo)){if(h=p[1],l=p[2],"else"===h)continue;u=jt(e,"directives",h,!0),u&&i(h,u)}if(v.length)return vi(v)}function di(t){var e=Object.create(null),i=t.match(io);if(i)for(var n=i.length;n--;)e[i[n].slice(1)]=!0;return e}function vi(t){return function(e,i,n,r,s){for(var o=t.length;o--;)e._bindDir(t[o],i,n,r,s)}}function mi(t){for(var e=t.length;e--;)if(t[e].oneTime)return!0}function gi(t){return"SCRIPT"===t.tagName&&(!t.hasAttribute("type")||"text/javascript"===t.getAttribute("type"))}function _i(t,e){return e&&(e._containerAttrs=bi(t)),vt(t)&&(t=ce(t)),e&&(e._asComponent&&!e.template&&(e.template="<slot></slot>"),e.template&&(e._content=ft(t),t=yi(t,e))),bt(t)&&(rt(mt("v-start",!0),t),t.appendChild(mt("v-end",!0))),t}function yi(t,e){var i=e.template,n=ce(i,!0);if(n){var r=n.firstChild;if(!r)return n;var s=r.tagName&&r.tagName.toLowerCase();return e.replace?(t===document.body,n.childNodes.length>1||1!==r.nodeType||"component"===s||jt(e,"components",s)||tt(r,"is")||jt(e,"elementDirectives",s)||r.hasAttribute("v-for")||r.hasAttribute("v-if")?n:(e._replacerAttrs=bi(r),wi(t,r),r)):(t.appendChild(n),t)}}function bi(t){if(1===t.nodeType&&t.hasAttributes())return d(t.attributes)}function wi(t,e){for(var i,n,r=t.attributes,s=r.length;s--;)i=r[s].name,n=r[s].value,e.hasAttribute(i)||oo.test(i)?"class"===i&&!V(n)&&(n=n.trim())&&n.split(/\s+/).forEach(function(t){ct(e,t)}):e.setAttribute(i,n)}function Ci(t,e){if(e){for(var i,n,r=t._slotContents=Object.create(null),s=0,o=e.children.length;s<o;s++)i=e.children[s],(n=i.getAttribute("slot"))&&(r[n]||(r[n]=[])).push(i);for(n in r)r[n]=$i(r[n],e);if(e.hasChildNodes()){var a=e.childNodes;if(1===a.length&&3===a[0].nodeType&&!a[0].data.trim())return;r.default=$i(e.childNodes,e)}}}function $i(t,e){var i=document.createDocumentFragment();t=d(t);for(var n=0,r=t.length;n<r;n++){var s=t[n];!vt(s)||s.hasAttribute("v-if")||s.hasAttribute("v-for")||(e.removeChild(s),s=ce(s,!0)),i.appendChild(s)}return i}function ki(t){function e(){}function n(t,e){var i=new re(e,t,null,{lazy:!0});return function(){return i.dirty&&i.evaluate(),Et.target&&i.depend(),i.value}}Object.defineProperty(t.prototype,"$data",{get:function(){return this._data},set:function(t){t!==this._data&&this._setData(t)}}),t.prototype._initState=function(){this._initProps(),this._initMeta(),this._initMethods(),this._initData(),this._initComputed()},t.prototype._initProps=function(){var t=this.$options,e=t.el,i=t.props;e=t.el=Z(e),this._propsUnlinkFn=e&&1===e.nodeType&&i?Ye(this,e,i,this._scope):null},t.prototype._initData=function(){var t=this.$options.data,e=this._data=t?t():{};g(e)||(e={});var n,r,s=this._props,o=Object.keys(e);for(n=o.length;n--;)r=o[n],s&&i(s,r)||this._proxy(r);Rt(e,this)},t.prototype._setData=function(t){t=t||{};var e=this._data;this._data=t;var n,r,s;for(n=Object.keys(e),s=n.length;s--;)r=n[s],r in t||this._unproxy(r);for(n=Object.keys(t),s=n.length;s--;)r=n[s],i(this,r)||this._proxy(r);e.__ob__.removeVm(this),Rt(t,this),this._digest()},t.prototype._proxy=function(t){if(!r(t)){var e=this;Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return e._data[t]},set:function(i){e._data[t]=i}})}},t.prototype._unproxy=function(t){r(t)||delete this[t]},t.prototype._digest=function(){for(var t=0,e=this._watchers.length;t<e;t++)this._watchers[t].update(!0)},t.prototype._initComputed=function(){var t=this.$options.computed;if(t)for(var i in t){var r=t[i],s={enumerable:!0,configurable:!0};"function"==typeof r?(s.get=n(r,this),s.set=e):(s.get=r.get?r.cache!==!1?n(r.get,this):p(r.get,this):e,s.set=r.set?p(r.set,this):e),Object.defineProperty(this,i,s)}},t.prototype._initMethods=function(){var t=this.$options.methods;if(t)for(var e in t)this[e]=p(t[e],this)},t.prototype._initMeta=function(){var t=this.$options._meta;if(t)for(var e in t)Lt(this,e,t[e])}}function xi(t){function e(t,e){for(var i,n,r,s=e.attributes,o=0,a=s.length;o<a;o++)i=s[o].name,ho.test(i)&&(i=i.replace(ho,""),n=s[o].value,Kt(n)&&(n+=".apply(this, $arguments)"),r=(t._scope||t._context).$eval(n,!0),r._fromParent=!0,t.$on(i.replace(ho),r))}function i(t,e,i){if(i){var r,s,o,a;for(s in i)if(r=i[s],qi(r))for(o=0,a=r.length;o<a;o++)n(t,e,s,r[o]);else n(t,e,s,r)}}function n(t,e,i,r,s){var o=typeof r;if("function"===o)t[e](i,r,s);else if("string"===o){var a=t.$options.methods,h=a&&a[r];h&&t[e](i,h,s)}else r&&"object"===o&&n(t,e,i,r.handler,r)}function r(){this._isAttached||(this._isAttached=!0,this.$children.forEach(s))}function s(t){!t._isAttached&&X(t.$el)&&t._callHook("attached")}function o(){this._isAttached&&(this._isAttached=!1,this.$children.forEach(a))}function a(t){t._isAttached&&!X(t.$el)&&t._callHook("detached")}t.prototype._initEvents=function(){var t=this.$options;t._asComponent&&e(this,t.el),i(this,"$on",t.events),i(this,"$watch",t.watch)},t.prototype._initDOMHooks=function(){this.$on("hook:attached",r),this.$on("hook:detached",o)},t.prototype._callHook=function(t){this.$emit("pre-hook:"+t);var e=this.$options[t];if(e)for(var i=0,n=e.length;i<n;i++)e[i].call(this);this.$emit("hook:"+t)}}function Ai(){}function Oi(t,e,i,n,r,s){this.vm=e,this.el=i,this.descriptor=t,this.name=t.name,this.expression=t.expression,this.arg=t.arg,this.modifiers=t.modifiers,this.filters=t.filters,this.literal=this.modifiers&&this.modifiers.literal,this._locked=!1,this._bound=!1,this._listeners=null,this._host=n,this._scope=r,this._frag=s}function Ti(t){t.prototype._updateRef=function(t){var e=this.$options._ref;if(e){var i=(this._scope||this._context).$refs;t?i[e]===this&&(i[e]=null):i[e]=this}},t.prototype._compile=function(t){var e=this.$options,i=t;if(t=_i(t,e),this._initElement(t),1!==t.nodeType||null===Y(t,"v-pre")){var n=this._context&&this._context.$options,r=Ke(t,e,n);Ci(this,e._content);var s,o=this.constructor;e._linkerCachable&&(s=o.linker,s||(s=o.linker=qe(t,e)));var a=r(this,t,this._scope),h=s?s(this,t):qe(t,e)(this,t);
	this._unlinkFn=function(){a(),h(!0)},e.replace&&st(i,t),this._isCompiled=!0,this._callHook("compiled")}},t.prototype._initElement=function(t){bt(t)?(this._isFragment=!0,this.$el=this._fragmentStart=t.firstChild,this._fragmentEnd=t.lastChild,3===this._fragmentStart.nodeType&&(this._fragmentStart.data=this._fragmentEnd.data=""),this._fragment=t):this.$el=t,this.$el.__vue__=this,this._callHook("beforeCompile")},t.prototype._bindDir=function(t,e,i,n,r){this._directives.push(new Oi(t,this,e,i,n,r))},t.prototype._destroy=function(t,e){if(this._isBeingDestroyed)return void(e||this._cleanup());var i,n,r=this,s=function(){!i||n||e||r._cleanup()};t&&this.$el&&(n=!0,this.$remove(function(){n=!1,s()})),this._callHook("beforeDestroy"),this._isBeingDestroyed=!0;var o,a=this.$parent;for(a&&!a._isBeingDestroyed&&(a.$children.$remove(this),this._updateRef(!0)),o=this.$children.length;o--;)this.$children[o].$destroy();for(this._propsUnlinkFn&&this._propsUnlinkFn(),this._unlinkFn&&this._unlinkFn(),o=this._watchers.length;o--;)this._watchers[o].teardown();this.$el&&(this.$el.__vue__=null),i=!0,s()},t.prototype._cleanup=function(){this._isDestroyed||(this._frag&&this._frag.children.$remove(this),this._data&&this._data.__ob__&&this._data.__ob__.removeVm(this),this.$el=this.$parent=this.$root=this.$children=this._watchers=this._context=this._scope=this._directives=null,this._isDestroyed=!0,this._callHook("destroyed"),this.$off())}}function Ni(t){t.prototype._applyFilters=function(t,e,i,n){var r,s,o,a,h,l,c,u,f;for(l=0,c=i.length;l<c;l++)if(r=i[n?c-l-1:l],s=jt(this.$options,"filters",r.name,!0),s&&(s=n?s.write:s.read||s,"function"==typeof s)){if(o=n?[t,e]:[t],h=n?2:1,r.args)for(u=0,f=r.args.length;u<f;u++)a=r.args[u],o[u+h]=a.dynamic?this.$get(a.value):a.value;t=s.apply(this,o)}return t},t.prototype._resolveComponent=function(e,i){var n;if(n="function"==typeof e?e:jt(this.$options,"components",e,!0))if(n.options)i(n);else if(n.resolved)i(n.resolved);else if(n.requested)n.pendingCallbacks.push(i);else{n.requested=!0;var r=n.pendingCallbacks=[i];n.call(this,function(e){g(e)&&(e=t.extend(e)),n.resolved=e;for(var i=0,s=r.length;i<s;i++)r[i](e)},function(t){})}}}function ji(t){function i(t){return JSON.parse(JSON.stringify(t))}t.prototype.$get=function(t,e){var i=Yt(t);if(i){if(e){var n=this;return function(){n.$arguments=d(arguments);var t=i.get.call(n,n);return n.$arguments=null,t}}try{return i.get.call(this,this)}catch(t){}}},t.prototype.$set=function(t,e){var i=Yt(t,!0);i&&i.set&&i.set.call(this,this,e)},t.prototype.$delete=function(t){e(this._data,t)},t.prototype.$watch=function(t,e,i){var n,r=this;"string"==typeof t&&(n=I(t),t=n.expression);var s=new re(r,t,e,{deep:i&&i.deep,sync:i&&i.sync,filters:n&&n.filters,user:!i||i.user!==!1});return i&&i.immediate&&e.call(r,s.value),function(){s.teardown()}},t.prototype.$eval=function(t,e){if(lo.test(t)){var i=I(t),n=this.$get(i.expression,e);return i.filters?this._applyFilters(n,null,i.filters):n}return this.$get(t,e)},t.prototype.$interpolate=function(t){var e=V(t),i=this;return e?1===e.length?i.$eval(e[0].value)+"":e.map(function(t){return t.tag?i.$eval(t.value):t.value}).join(""):t},t.prototype.$log=function(t){var e=t?Bt(this._data,t):this._data;if(e&&(e=i(e)),!t){var n;for(n in this.$options.computed)e[n]=i(this[n]);if(this._props)for(n in this._props)e[n]=i(this[n])}console.log(e)}}function Ei(t){function e(t,e,n,r,s,o){e=i(e);var a=!X(e),h=r===!1||a?s:o,l=!a&&!t._isAttached&&!X(t.$el);return t._isFragment?(_t(t._fragmentStart,t._fragmentEnd,function(i){h(i,e,t)}),n&&n()):h(t.$el,e,t,n),l&&t._callHook("attached"),t}function i(t){return"string"==typeof t?document.querySelector(t):t}function n(t,e,i,n){e.appendChild(t),n&&n()}function r(t,e,i,n){et(t,e),n&&n()}function s(t,e,i){nt(t),i&&i()}t.prototype.$nextTick=function(t){ln(t,this)},t.prototype.$appendTo=function(t,i,r){return e(this,t,i,r,n,J)},t.prototype.$prependTo=function(t,e,n){return t=i(t),t.hasChildNodes()?this.$before(t.firstChild,e,n):this.$appendTo(t,e,n),this},t.prototype.$before=function(t,i,n){return e(this,t,i,n,r,q)},t.prototype.$after=function(t,e,n){return t=i(t),t.nextSibling?this.$before(t.nextSibling,e,n):this.$appendTo(t.parentNode,e,n),this},t.prototype.$remove=function(t,e){if(!this.$el.parentNode)return t&&t();var i=this._isAttached&&X(this.$el);i||(e=!1);var n=this,r=function(){i&&n._callHook("detached"),t&&t()};if(this._isFragment)yt(this._fragmentStart,this._fragmentEnd,this,this._fragment,r);else{var o=e===!1?s:Q;o(this.$el,this,r)}return this}}function Si(t){function e(t,e,n){var r=t.$parent;if(r&&n&&!i.test(e))for(;r;)r._eventsCount[e]=(r._eventsCount[e]||0)+n,r=r.$parent}t.prototype.$on=function(t,i){return(this._events[t]||(this._events[t]=[])).push(i),e(this,t,1),this},t.prototype.$once=function(t,e){function i(){n.$off(t,i),e.apply(this,arguments)}var n=this;return i.fn=e,this.$on(t,i),this},t.prototype.$off=function(t,i){var n;if(!arguments.length){if(this.$parent)for(t in this._events)n=this._events[t],n&&e(this,t,-n.length);return this._events={},this}if(n=this._events[t],!n)return this;if(1===arguments.length)return e(this,t,-n.length),this._events[t]=null,this;for(var r,s=n.length;s--;)if(r=n[s],r===i||r.fn===i){e(this,t,-1),n.splice(s,1);break}return this},t.prototype.$emit=function(t){var e="string"==typeof t;t=e?t:t.name;var i=this._events[t],n=e||!i;if(i){i=i.length>1?d(i):i;var r=e&&i.some(function(t){return t._fromParent});r&&(n=!1);for(var s=d(arguments,1),o=0,a=i.length;o<a;o++){var h=i[o],l=h.apply(this,s);l!==!0||r&&!h._fromParent||(n=!0)}}return n},t.prototype.$broadcast=function(t){var e="string"==typeof t;if(t=e?t:t.name,this._eventsCount[t]){var i=this.$children,n=d(arguments);e&&(n[0]={name:t,source:this});for(var r=0,s=i.length;r<s;r++){var o=i[r],a=o.$emit.apply(o,n);a&&o.$broadcast.apply(o,n)}return this}},t.prototype.$dispatch=function(t){var e=this.$emit.apply(this,arguments);if(e){var i=this.$parent,n=d(arguments);for(n[0]={name:t,source:this};i;)e=i.$emit.apply(i,n),i=e?i.$parent:null;return this}};var i=/^hook:/}function Fi(t){function e(){this._isAttached=!0,this._isReady=!0,this._callHook("ready")}t.prototype.$mount=function(t){if(!this._isCompiled)return t=Z(t),t||(t=document.createElement("div")),this._compile(t),this._initDOMHooks(),X(this.$el)?(this._callHook("attached"),e.call(this)):this.$once("hook:attached",e),this},t.prototype.$destroy=function(t,e){this._destroy(t,e)},t.prototype.$compile=function(t,e,i,n){return qe(t,this.$options,!0)(this,t,e,i,n)}}function Di(t){this._init(t)}function Pi(t,e,i){return i=i?parseInt(i,10):0,e=o(e),"number"==typeof e?t.slice(i,i+e):t}function Ri(t,e,i){if(t=po(t),null==e)return t;if("function"==typeof e)return t.filter(e);e=(""+e).toLowerCase();for(var n,r,s,o,a="in"===i?3:2,h=Array.prototype.concat.apply([],d(arguments,a)),l=[],c=0,u=t.length;c<u;c++)if(n=t[c],s=n&&n.$value||n,o=h.length){for(;o--;)if(r=h[o],"$key"===r&&Hi(n.$key,e)||Hi(Bt(s,r),e)){l.push(n);break}}else Hi(n,e)&&l.push(n);return l}function Li(t){function e(t,e,i){var r=n[i];return r&&("$key"!==r&&(m(t)&&"$value"in t&&(t=t.$value),m(e)&&"$value"in e&&(e=e.$value)),t=m(t)?Bt(t,r):t,e=m(e)?Bt(e,r):e),t===e?0:t>e?s:-s}var i=null,n=void 0;t=po(t);var r=d(arguments,1),s=r[r.length-1];"number"==typeof s?(s=s<0?-1:1,r=r.length>1?r.slice(0,-1):r):s=1;var o=r[0];return o?("function"==typeof o?i=function(t,e){return o(t,e)*s}:(n=Array.prototype.concat.apply([],r),i=function(t,r,s){return s=s||0,s>=n.length-1?e(t,r,s):e(t,r,s)||i(t,r,s+1)}),t.slice().sort(i)):t}function Hi(t,e){var i;if(g(t)){var n=Object.keys(t);for(i=n.length;i--;)if(Hi(t[n[i]],e))return!0}else if(qi(t)){for(i=t.length;i--;)if(Hi(t[i],e))return!0}else if(null!=t)return t.toString().toLowerCase().indexOf(e)>-1}function Ii(i){function n(t){return new Function("return function "+f(t)+" (options) { this._init(options) }")()}i.options={directives:Ds,elementDirectives:fo,filters:mo,transitions:{},components:{},partials:{},replace:!0},i.util=Kn,i.config=Mn,i.set=t,i.delete=e,i.nextTick=ln,i.compiler=ao,i.FragmentFactory=_e,i.internalDirectives=Ys,i.parsers={path:mr,text:Ln,template:qr,directive:En,expression:jr},i.cid=0;var r=1;i.extend=function(t){t=t||{};var e=this,i=0===e.cid;if(i&&t._Ctor)return t._Ctor;var s=t.name||e.options.name,o=n(s||"VueComponent");return o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.cid=r++,o.options=Nt(e.options,t),o.super=e,o.extend=e.extend,Mn._assetTypes.forEach(function(t){o[t]=e[t]}),s&&(o.options.components[s]=o),i&&(t._Ctor=o),o},i.use=function(t){if(!t.installed){var e=d(arguments,1);return e.unshift(this),"function"==typeof t.install?t.install.apply(t,e):t.apply(null,e),t.installed=!0,this}},i.mixin=function(t){i.options=Nt(i.options,t)},Mn._assetTypes.forEach(function(t){i[t]=function(e,n){return n?("component"===t&&g(n)&&(n.name||(n.name=e),n=i.extend(n)),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}}),v(i.transition,Vn)}var Mi=Object.prototype.hasOwnProperty,Wi=/^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/,Vi=/-(\w)/g,Bi=/([^-])([A-Z])/g,zi=/(?:^|[-_\/])(\w)/g,Ui=Object.prototype.toString,Ji="[object Object]",qi=Array.isArray,Qi="__proto__"in{},Gi="undefined"!=typeof window&&"[object Object]"!==Object.prototype.toString.call(window),Zi=Gi&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,Xi=Gi&&window.navigator.userAgent.toLowerCase(),Yi=Xi&&Xi.indexOf("trident")>0,Ki=Xi&&Xi.indexOf("msie 9.0")>0,tn=Xi&&Xi.indexOf("android")>0,en=Xi&&/iphone|ipad|ipod|ios/.test(Xi),nn=void 0,rn=void 0,sn=void 0,on=void 0;if(Gi&&!Ki){var an=void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend,hn=void 0===window.onanimationend&&void 0!==window.onwebkitanimationend;nn=an?"WebkitTransition":"transition",rn=an?"webkitTransitionEnd":"transitionend",sn=hn?"WebkitAnimation":"animation",on=hn?"webkitAnimationEnd":"animationend"}var ln=function(){function t(){i=!1;var t=e.slice(0);e.length=0;for(var n=0;n<t.length;n++)t[n]()}var e=[],i=!1,n=void 0;if("undefined"!=typeof Promise&&$(Promise)){var r=Promise.resolve(),s=function(){};n=function(){r.then(t),en&&setTimeout(s)}}else if("undefined"!=typeof MutationObserver){var o=1,a=new MutationObserver(t),h=document.createTextNode(String(o));a.observe(h,{characterData:!0}),n=function(){o=(o+1)%2,h.data=String(o)}}else n=setTimeout;return function(r,s){var o=s?function(){r.call(s)}:r;e.push(o),i||(i=!0,n(t,0))}}(),cn=void 0;"undefined"!=typeof Set&&$(Set)?cn=Set:(cn=function(){this.set=Object.create(null)},cn.prototype.has=function(t){return void 0!==this.set[t]},cn.prototype.add=function(t){this.set[t]=1},cn.prototype.clear=function(){this.set=Object.create(null)});var un=k.prototype;un.put=function(t,e){var i,n=this.get(t,!0);return n||(this.size===this.limit&&(i=this.shift()),n={key:t},this._keymap[t]=n,this.tail?(this.tail.newer=n,n.older=this.tail):this.head=n,this.tail=n,this.size++),n.value=e,i},un.shift=function(){var t=this.head;return t&&(this.head=this.head.newer,this.head.older=void 0,t.newer=t.older=void 0,this._keymap[t.key]=void 0,this.size--),t},un.get=function(t,e){var i=this._keymap[t];if(void 0!==i)return i===this.tail?e?i:i.value:(i.newer&&(i===this.head&&(this.head=i.newer),i.newer.older=i.older),i.older&&(i.older.newer=i.newer),i.newer=void 0,i.older=this.tail,this.tail&&(this.tail.newer=i),this.tail=i,e?i:i.value)};var fn,pn,dn,vn,mn,gn,_n=new k(1e3),yn=/^in$|^-?\d+/,bn=0,wn=1,Cn=2,$n=3,kn=34,xn=39,An=124,On=92,Tn=32,Nn={91:1,123:1,40:1},jn={91:93,123:125,40:41},En=Object.freeze({parseDirective:I}),Sn=/[-.*+?^${}()|[\]\/\\]/g,Fn=void 0,Dn=void 0,Pn=void 0,Rn=/[^|]\|[^|]/,Ln=Object.freeze({compileRegex:W,parseText:V,tokensToExp:B}),Hn=["{{","}}"],In=["{{{","}}}"],Mn=Object.defineProperties({debug:!1,silent:!1,async:!0,warnExpressionErrors:!0,devtools:!1,_delimitersChanged:!0,_assetTypes:["component","directive","elementDirective","filter","transition","partial"],_propBindingModes:{ONE_WAY:0,TWO_WAY:1,ONE_TIME:2},_maxUpdateCount:100},{delimiters:{get:function(){return Hn},set:function(t){Hn=t,W()},configurable:!0,enumerable:!0},unsafeDelimiters:{get:function(){return In},set:function(t){In=t,W()},configurable:!0,enumerable:!0}}),Wn=void 0,Vn=Object.freeze({appendWithTransition:J,beforeWithTransition:q,removeWithTransition:Q,applyTransition:G}),Bn=/^v-ref:/,zn=/^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i,Un=/^(slot|partial|component)$/i,Jn=Mn.optionMergeStrategies=Object.create(null);Jn.data=function(t,e,i){return i?t||e?function(){var n="function"==typeof e?e.call(i):e,r="function"==typeof t?t.call(i):void 0;return n?kt(n,r):r}:void 0:e?"function"!=typeof e?t:t?function(){return kt(e.call(this),t.call(this))}:e:t},Jn.el=function(t,e,i){if(i||!e||"function"==typeof e){var n=e||t;return i&&"function"==typeof n?n.call(i):n}},Jn.init=Jn.created=Jn.ready=Jn.attached=Jn.detached=Jn.beforeCompile=Jn.compiled=Jn.beforeDestroy=Jn.destroyed=Jn.activate=function(t,e){return e?t?t.concat(e):qi(e)?e:[e]:t},Mn._assetTypes.forEach(function(t){Jn[t+"s"]=xt}),Jn.watch=Jn.events=function(t,e){if(!e)return t;if(!t)return e;var i={};v(i,t);for(var n in e){var r=i[n],s=e[n];r&&!qi(r)&&(r=[r]),i[n]=r?r.concat(s):[s]}return i},Jn.props=Jn.methods=Jn.computed=function(t,e){if(!e)return t;if(!t)return e;var i=Object.create(null);return v(i,t),v(i,e),i};var qn=function(t,e){return void 0===e?t:e},Qn=0;Et.target=null,Et.prototype.addSub=function(t){this.subs.push(t)},Et.prototype.removeSub=function(t){this.subs.$remove(t)},Et.prototype.depend=function(){Et.target.addDep(this)},Et.prototype.notify=function(){for(var t=d(this.subs),e=0,i=t.length;e<i;e++)t[e].update()};var Gn=Array.prototype,Zn=Object.create(Gn);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(t){var e=Gn[t];_(Zn,t,function(){for(var i=arguments.length,n=new Array(i);i--;)n[i]=arguments[i];var r,s=e.apply(this,n),o=this.__ob__;switch(t){case"push":r=n;break;case"unshift":r=n;break;case"splice":r=n.slice(2)}return r&&o.observeArray(r),o.dep.notify(),s})}),_(Gn,"$set",function(t,e){return t>=this.length&&(this.length=Number(t)+1),this.splice(t,1,e)[0]}),_(Gn,"$remove",function(t){if(this.length){var e=b(this,t);return e>-1?this.splice(e,1):void 0}});var Xn=Object.getOwnPropertyNames(Zn),Yn=!0;Ft.prototype.walk=function(t){for(var e=Object.keys(t),i=0,n=e.length;i<n;i++)this.convert(e[i],t[e[i]])},Ft.prototype.observeArray=function(t){for(var e=0,i=t.length;e<i;e++)Rt(t[e])},Ft.prototype.convert=function(t,e){Lt(this.value,t,e)},Ft.prototype.addVm=function(t){(this.vms||(this.vms=[])).push(t)},Ft.prototype.removeVm=function(t){this.vms.$remove(t)};var Kn=Object.freeze({defineReactive:Lt,set:t,del:e,hasOwn:i,isLiteral:n,isReserved:r,_toString:s,toNumber:o,toBoolean:a,stripQuotes:h,camelize:l,hyphenate:u,classify:f,bind:p,toArray:d,extend:v,isObject:m,isPlainObject:g,def:_,debounce:y,indexOf:b,cancellable:w,looseEqual:C,isArray:qi,hasProto:Qi,inBrowser:Gi,devtools:Zi,isIE:Yi,isIE9:Ki,isAndroid:tn,isIOS:en,get transitionProp(){return nn},get transitionEndEvent(){return rn},get animationProp(){return sn},get animationEndEvent(){return on},nextTick:ln,get _Set(){return cn},query:Z,inDoc:X,getAttr:Y,getBindAttr:K,hasBindAttr:tt,before:et,after:it,remove:nt,prepend:rt,replace:st,on:ot,off:at,setClass:lt,addClass:ct,removeClass:ut,extractContent:ft,trimNode:pt,isTemplate:vt,createAnchor:mt,findRef:gt,mapNodeRange:_t,removeNodeRange:yt,isFragment:bt,getOuterHTML:wt,mergeOptions:Nt,resolveAsset:jt,checkComponentAttr:Ct,commonTagRE:zn,reservedTagRE:Un,warn:Wn}),tr=0,er=new k(1e3),ir=0,nr=1,rr=2,sr=3,or=0,ar=1,hr=2,lr=3,cr=4,ur=5,fr=6,pr=7,dr=8,vr=[];vr[or]={ws:[or],ident:[lr,ir],"[":[cr],eof:[pr]},vr[ar]={ws:[ar],".":[hr],"[":[cr],eof:[pr]},vr[hr]={ws:[hr],ident:[lr,ir]},vr[lr]={ident:[lr,ir],0:[lr,ir],number:[lr,ir],ws:[ar,nr],".":[hr,nr],"[":[cr,nr],eof:[pr,nr]},vr[cr]={"'":[ur,ir],'"':[fr,ir],"[":[cr,rr],"]":[ar,sr],eof:dr,else:[cr,ir]},vr[ur]={"'":[cr,ir],eof:dr,else:[ur,ir]},vr[fr]={'"':[cr,ir],eof:dr,else:[fr,ir]};var mr=Object.freeze({parsePath:Vt,getPath:Bt,setPath:zt}),gr=new k(1e3),_r="Math,Date,this,true,false,null,undefined,Infinity,NaN,isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,parseInt,parseFloat",yr=new RegExp("^("+_r.replace(/,/g,"\\b|")+"\\b)"),br="break,case,class,catch,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,in,instanceof,let,return,super,switch,throw,try,var,while,with,yield,enum,await,implements,package,protected,static,interface,private,public",wr=new RegExp("^("+br.replace(/,/g,"\\b|")+"\\b)"),Cr=/\s/g,$r=/\n/g,kr=/[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\"']|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g,xr=/"(\d+)"/g,Ar=/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/,Or=/[^\w$\.](?:[A-Za-z_$][\w$]*)/g,Tr=/^(?:true|false|null|undefined|Infinity|NaN)$/,Nr=[],jr=Object.freeze({parseExpression:Yt,isSimplePath:Kt}),Er=[],Sr=[],Fr={},Dr={},Pr=!1,Rr=0;re.prototype.get=function(){this.beforeGet();var t,e=this.scope||this.vm;try{t=this.getter.call(e,e)}catch(t){}return this.deep&&se(t),this.preProcess&&(t=this.preProcess(t)),this.filters&&(t=e._applyFilters(t,null,this.filters,!1)),this.postProcess&&(t=this.postProcess(t)),this.afterGet(),t},re.prototype.set=function(t){var e=this.scope||this.vm;this.filters&&(t=e._applyFilters(t,this.value,this.filters,!0));try{this.setter.call(e,e,t)}catch(t){}var i=e.$forContext;if(i&&i.alias===this.expression){if(i.filters)return;i._withLock(function(){e.$key?i.rawValue[e.$key]=t:i.rawValue.$set(e.$index,t)})}},re.prototype.beforeGet=function(){Et.target=this},re.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},re.prototype.afterGet=function(){Et.target=null;for(var t=this.deps.length;t--;){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var i=this.depIds;this.depIds=this.newDepIds,this.newDepIds=i,this.newDepIds.clear(),i=this.deps,this.deps=this.newDeps,this.newDeps=i,this.newDeps.length=0},re.prototype.update=function(t){this.lazy?this.dirty=!0:this.sync||!Mn.async?this.run():(this.shallow=this.queued?!!t&&this.shallow:!!t,this.queued=!0,ne(this))},re.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||(m(t)||this.deep)&&!this.shallow){var e=this.value;this.value=t;this.prevError;this.cb.call(this.vm,t,e)}this.queued=this.shallow=!1}},re.prototype.evaluate=function(){var t=Et.target;this.value=this.get(),this.dirty=!1,Et.target=t},re.prototype.depend=function(){for(var t=this.deps.length;t--;)this.deps[t].depend()},re.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||this.vm._vForRemoving||this.vm._watchers.$remove(this);for(var t=this.deps.length;t--;)this.deps[t].removeSub(this);this.active=!1,this.vm=this.cb=this.value=null}};var Lr=new cn,Hr={bind:function(){this.attr=3===this.el.nodeType?"data":"textContent"},update:function(t){this.el[this.attr]=s(t)}},Ir=new k(1e3),Mr=new k(1e3),Wr={efault:[0,"",""],legend:[1,"<fieldset>","</fieldset>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]};Wr.td=Wr.th=[3,"<table><tbody><tr>","</tr></tbody></table>"],Wr.option=Wr.optgroup=[1,'<select multiple="multiple">',"</select>"],Wr.thead=Wr.tbody=Wr.colgroup=Wr.caption=Wr.tfoot=[1,"<table>","</table>"],Wr.g=Wr.defs=Wr.symbol=Wr.use=Wr.image=Wr.text=Wr.circle=Wr.ellipse=Wr.line=Wr.path=Wr.polygon=Wr.polyline=Wr.rect=[1,'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ev="http://www.w3.org/2001/xml-events"version="1.1">',"</svg>"];var Vr=/<([\w:-]+)/,Br=/&#?\w+?;/,zr=/<!--/,Ur=function(){if(Gi){var t=document.createElement("div");return t.innerHTML="<template>1</template>",!t.cloneNode(!0).firstChild.innerHTML}return!1}(),Jr=function(){if(Gi){var t=document.createElement("textarea");return t.placeholder="t","t"===t.cloneNode(!0).value}return!1}(),qr=Object.freeze({cloneNode:le,parseTemplate:ce}),Qr={bind:function(){8===this.el.nodeType&&(this.nodes=[],this.anchor=mt("v-html"),st(this.el,this.anchor))},update:function(t){t=s(t),this.nodes?this.swap(t):this.el.innerHTML=t},swap:function(t){for(var e=this.nodes.length;e--;)nt(this.nodes[e]);var i=ce(t,!0,!0);this.nodes=d(i.childNodes),et(i,this.anchor)}};ue.prototype.callHook=function(t){var e,i;for(e=0,i=this.childFrags.length;e<i;e++)this.childFrags[e].callHook(t);for(e=0,i=this.children.length;e<i;e++)t(this.children[e])},ue.prototype.beforeRemove=function(){var t,e;for(t=0,e=this.childFrags.length;t<e;t++)this.childFrags[t].beforeRemove(!1);for(t=0,e=this.children.length;t<e;t++)this.children[t].$destroy(!1,!0);var i=this.unlink.dirs;for(t=0,e=i.length;t<e;t++)i[t]._watcher&&i[t]._watcher.teardown()},ue.prototype.destroy=function(){this.parentFrag&&this.parentFrag.childFrags.$remove(this),this.node.__v_frag=null,this.unlink()};var Gr=new k(5e3);_e.prototype.create=function(t,e,i){var n=le(this.template);return new ue(this.linker,this.vm,n,t,e,i)};var Zr=700,Xr=800,Yr=850,Kr=1100,ts=1500,es=1500,is=1750,ns=2100,rs=2200,ss=2300,os=0,as={priority:rs,terminal:!0,params:["track-by","stagger","enter-stagger","leave-stagger"],bind:function(){var t=this.expression.match(/(.*) (?:in|of) (.*)/);if(t){var e=t[1].match(/\((.*),(.*)\)/);e?(this.iterator=e[1].trim(),this.alias=e[2].trim()):this.alias=t[1].trim(),this.expression=t[2]}if(this.alias){this.id="__v-for__"+ ++os;var i=this.el.tagName;this.isOption=("OPTION"===i||"OPTGROUP"===i)&&"SELECT"===this.el.parentNode.tagName,this.start=mt("v-for-start"),this.end=mt("v-for-end"),st(this.el,this.end),et(this.start,this.end),this.cache=Object.create(null),this.factory=new _e(this.vm,this.el)}},update:function(t){this.diff(t),this.updateRef(),this.updateModel()},diff:function(t){var e,n,r,s,o,a,h=t[0],l=this.fromObject=m(h)&&i(h,"$key")&&i(h,"$value"),c=this.params.trackBy,u=this.frags,f=this.frags=new Array(t.length),p=this.alias,d=this.iterator,v=this.start,g=this.end,_=X(v),y=!u;for(e=0,n=t.length;e<n;e++)h=t[e],s=l?h.$key:null,o=l?h.$value:h,a=!m(o),r=!y&&this.getCachedFrag(o,e,s),r?(r.reused=!0,r.scope.$index=e,s&&(r.scope.$key=s),d&&(r.scope[d]=null!==s?s:e),(c||l||a)&&St(function(){r.scope[p]=o})):(r=this.create(o,p,e,s),r.fresh=!y),f[e]=r,y&&r.before(g);if(!y){var b=0,w=u.length-f.length;for(this.vm._vForRemoving=!0,e=0,n=u.length;e<n;e++)r=u[e],r.reused||(this.deleteCachedFrag(r),this.remove(r,b++,w,_));this.vm._vForRemoving=!1,b&&(this.vm._watchers=this.vm._watchers.filter(function(t){return t.active}));var C,$,k,x=0;for(e=0,n=f.length;e<n;e++)r=f[e],C=f[e-1],$=C?C.staggerCb?C.staggerAnchor:C.end||C.node:v,r.reused&&!r.staggerCb?(k=ye(r,v,this.id),k===C||k&&ye(k,v,this.id)===C||this.move(r,$)):this.insert(r,x++,$,_),r.reused=r.fresh=!1}},create:function(t,e,i,n){var r=this._host,s=this._scope||this.vm,o=Object.create(s);o.$refs=Object.create(s.$refs),o.$els=Object.create(s.$els),o.$parent=s,o.$forContext=this,St(function(){Lt(o,e,t)}),Lt(o,"$index",i),n?Lt(o,"$key",n):o.$key&&_(o,"$key",null),this.iterator&&Lt(o,this.iterator,null!==n?n:i);var a=this.factory.create(r,o,this._frag);return a.forId=this.id,this.cacheFrag(t,a,i,n),a},updateRef:function(){var t=this.descriptor.ref;if(t){var e,i=(this._scope||this.vm).$refs;this.fromObject?(e={},this.frags.forEach(function(t){e[t.scope.$key]=Ce(t)})):e=this.frags.map(Ce),i[t]=e}},updateModel:function(){if(this.isOption){var t=this.start.parentNode,e=t&&t.__v_model;e&&e.forceUpdate()}},insert:function(t,e,i,n){t.staggerCb&&(t.staggerCb.cancel(),t.staggerCb=null);var r=this.getStagger(t,e,null,"enter");if(n&&r){var s=t.staggerAnchor;s||(s=t.staggerAnchor=mt("stagger-anchor"),s.__v_frag=t),it(s,i);var o=t.staggerCb=w(function(){t.staggerCb=null,t.before(s),nt(s)});setTimeout(o,r)}else{var a=i.nextSibling;a||(it(this.end,i),a=this.end),t.before(a)}},remove:function(t,e,i,n){if(t.staggerCb)return t.staggerCb.cancel(),void(t.staggerCb=null);var r=this.getStagger(t,e,i,"leave");if(n&&r){var s=t.staggerCb=w(function(){t.staggerCb=null,t.remove()});setTimeout(s,r)}else t.remove()},move:function(t,e){e.nextSibling||this.end.parentNode.appendChild(this.end),t.before(e.nextSibling,!1)},cacheFrag:function(t,e,n,r){var s,o=this.params.trackBy,a=this.cache,h=!m(t);r||o||h?(s=we(n,r,t,o),a[s]||(a[s]=e)):(s=this.id,i(t,s)?null===t[s]&&(t[s]=e):Object.isExtensible(t)&&_(t,s,e)),e.raw=t},getCachedFrag:function(t,e,i){var n,r=this.params.trackBy,s=!m(t);if(i||r||s){var o=we(e,i,t,r);n=this.cache[o]}else n=t[this.id];return n&&(n.reused||n.fresh),n},deleteCachedFrag:function(t){var e=t.raw,n=this.params.trackBy,r=t.scope,s=r.$index,o=i(r,"$key")&&r.$key,a=!m(e);if(n||o||a){var h=we(s,o,e,n);this.cache[h]=null}else e[this.id]=null,t.raw=null},getStagger:function(t,e,i,n){n+="Stagger";var r=t.node.__v_trans,s=r&&r.hooks,o=s&&(s[n]||s.stagger);return o?o.call(t,e,i):e*parseInt(this.params[n]||this.params.stagger,10)},_preProcess:function(t){return this.rawValue=t,t},_postProcess:function(t){if(qi(t))return t;if(g(t)){for(var e,i=Object.keys(t),n=i.length,r=new Array(n);n--;)e=i[n],r[n]={$key:e,$value:t[e]};return r}return"number"!=typeof t||isNaN(t)||(t=be(t)),t||[]},unbind:function(){if(this.descriptor.ref&&((this._scope||this.vm).$refs[this.descriptor.ref]=null),this.frags)for(var t,e=this.frags.length;e--;)t=this.frags[e],this.deleteCachedFrag(t),t.destroy()}},hs={priority:ns,terminal:!0,bind:function(){var t=this.el;if(t.__vue__)this.invalid=!0;else{var e=t.nextElementSibling;e&&null!==Y(e,"v-else")&&(nt(e),this.elseEl=e),this.anchor=mt("v-if"),st(t,this.anchor)}},update:function(t){this.invalid||(t?this.frag||this.insert():this.remove())},insert:function(){this.elseFrag&&(this.elseFrag.remove(),this.elseFrag=null),this.factory||(this.factory=new _e(this.vm,this.el)),this.frag=this.factory.create(this._host,this._scope,this._frag),this.frag.before(this.anchor)},remove:function(){this.frag&&(this.frag.remove(),this.frag=null),this.elseEl&&!this.elseFrag&&(this.elseFactory||(this.elseFactory=new _e(this.elseEl._context||this.vm,this.elseEl)),this.elseFrag=this.elseFactory.create(this._host,this._scope,this._frag),this.elseFrag.before(this.anchor))},unbind:function(){this.frag&&this.frag.destroy(),this.elseFrag&&this.elseFrag.destroy()}},ls={bind:function(){var t=this.el.nextElementSibling;t&&null!==Y(t,"v-else")&&(this.elseEl=t)},update:function(t){this.apply(this.el,t),this.elseEl&&this.apply(this.elseEl,!t)},apply:function(t,e){function i(){t.style.display=e?"":"none"}X(t)?G(t,e?1:-1,i,this.vm):i()}},cs={bind:function(){var t=this,e=this.el,i="range"===e.type,n=this.params.lazy,r=this.params.number,s=this.params.debounce,a=!1;if(tn||i||(this.on("compositionstart",function(){a=!0}),this.on("compositionend",function(){a=!1,n||t.listener()})),this.focused=!1,i||n||(this.on("focus",function(){t.focused=!0}),this.on("blur",function(){t.focused=!1,t._frag&&!t._frag.inserted||t.rawListener()})),this.listener=this.rawListener=function(){if(!a&&t._bound){var n=r||i?o(e.value):e.value;t.set(n),ln(function(){t._bound&&!t.focused&&t.update(t._watcher.value)})}},s&&(this.listener=y(this.listener,s)),this.hasjQuery="function"==typeof jQuery,this.hasjQuery){var h=jQuery.fn.on?"on":"bind";jQuery(e)[h]("change",this.rawListener),n||jQuery(e)[h]("input",this.listener)}else this.on("change",this.rawListener),n||this.on("input",this.listener);!n&&Ki&&(this.on("cut",function(){ln(t.listener)}),this.on("keyup",function(e){46!==e.keyCode&&8!==e.keyCode||t.listener()})),(e.hasAttribute("value")||"TEXTAREA"===e.tagName&&e.value.trim())&&(this.afterBind=this.listener)},update:function(t){t=s(t),t!==this.el.value&&(this.el.value=t)},unbind:function(){var t=this.el;if(this.hasjQuery){var e=jQuery.fn.off?"off":"unbind";jQuery(t)[e]("change",this.listener),jQuery(t)[e]("input",this.listener)}}},us={bind:function(){var t=this,e=this.el;this.getValue=function(){if(e.hasOwnProperty("_value"))return e._value;var i=e.value;return t.params.number&&(i=o(i)),i},this.listener=function(){t.set(t.getValue())},this.on("change",this.listener),e.hasAttribute("checked")&&(this.afterBind=this.listener)},update:function(t){this.el.checked=C(t,this.getValue())}},fs={bind:function(){var t=this,e=this,i=this.el;this.forceUpdate=function(){e._watcher&&e.update(e._watcher.get())};var n=this.multiple=i.hasAttribute("multiple");this.listener=function(){var t=$e(i,n);t=e.params.number?qi(t)?t.map(o):o(t):t,e.set(t)},this.on("change",this.listener);var r=$e(i,n,!0);(n&&r.length||!n&&null!==r)&&(this.afterBind=this.listener),this.vm.$on("hook:attached",function(){ln(t.forceUpdate)}),X(i)||ln(this.forceUpdate)},update:function(t){var e=this.el;e.selectedIndex=-1;for(var i,n,r=this.multiple&&qi(t),s=e.options,o=s.length;o--;)i=s[o],n=i.hasOwnProperty("_value")?i._value:i.value,i.selected=r?ke(t,n)>-1:C(t,n)},unbind:function(){this.vm.$off("hook:attached",this.forceUpdate)}},ps={bind:function(){function t(){var t=i.checked;return t&&i.hasOwnProperty("_trueValue")?i._trueValue:!t&&i.hasOwnProperty("_falseValue")?i._falseValue:t}var e=this,i=this.el;this.getValue=function(){return i.hasOwnProperty("_value")?i._value:e.params.number?o(i.value):i.value},this.listener=function(){var n=e._watcher.get();if(qi(n)){var r=e.getValue(),s=b(n,r);i.checked?s<0&&e.set(n.concat(r)):s>-1&&e.set(n.slice(0,s).concat(n.slice(s+1)))}else e.set(t())},this.on("change",this.listener),i.hasAttribute("checked")&&(this.afterBind=this.listener)},update:function(t){var e=this.el;qi(t)?e.checked=b(t,this.getValue())>-1:e.hasOwnProperty("_trueValue")?e.checked=C(t,e._trueValue):e.checked=!!t}},ds={text:cs,radio:us,select:fs,checkbox:ps},vs={priority:Xr,twoWay:!0,handlers:ds,params:["lazy","number","debounce"],bind:function(){this.checkFilters(),this.hasRead&&!this.hasWrite;var t,e=this.el,i=e.tagName;if("INPUT"===i)t=ds[e.type]||ds.text;else if("SELECT"===i)t=ds.select;else{if("TEXTAREA"!==i)return;t=ds.text}e.__v_model=this,t.bind.call(this),this.update=t.update,this._unbind=t.unbind},checkFilters:function(){var t=this.filters;if(t)for(var e=t.length;e--;){var i=jt(this.vm.$options,"filters",t[e].name);("function"==typeof i||i.read)&&(this.hasRead=!0),i.write&&(this.hasWrite=!0)}},unbind:function(){this.el.__v_model=null,this._unbind&&this._unbind()}},ms={esc:27,tab:9,enter:13,space:32,delete:[8,46],up:38,left:37,right:39,down:40},gs={priority:Zr,acceptStatement:!0,keyCodes:ms,bind:function(){if("IFRAME"===this.el.tagName&&"load"!==this.arg){var t=this;this.iframeBind=function(){ot(t.el.contentWindow,t.arg,t.handler,t.modifiers.capture)},this.on("load",this.iframeBind)}},update:function(t){if(this.descriptor.raw||(t=function(){}),"function"==typeof t){this.modifiers.stop&&(t=Ae(t)),this.modifiers.prevent&&(t=Oe(t)),this.modifiers.self&&(t=Te(t));var e=Object.keys(this.modifiers).filter(function(t){return"stop"!==t&&"prevent"!==t&&"self"!==t&&"capture"!==t});e.length&&(t=xe(t,e)),this.reset(),this.handler=t,this.iframeBind?this.iframeBind():ot(this.el,this.arg,this.handler,this.modifiers.capture)}},reset:function(){var t=this.iframeBind?this.el.contentWindow:this.el;this.handler&&at(t,this.arg,this.handler)},unbind:function(){this.reset()}},_s=["-webkit-","-moz-","-ms-"],ys=["Webkit","Moz","ms"],bs=/!important;?$/,ws=Object.create(null),Cs=null,$s={deep:!0,update:function(t){"string"==typeof t?this.el.style.cssText=t:qi(t)?this.handleObject(t.reduce(v,{})):this.handleObject(t||{})},handleObject:function(t){var e,i,n=this.cache||(this.cache={});for(e in n)e in t||(this.handleSingle(e,null),delete n[e]);for(e in t)i=t[e],i!==n[e]&&(n[e]=i,this.handleSingle(e,i))},handleSingle:function(t,e){if(t=Ne(t))if(null!=e&&(e+=""),e){var i=bs.test(e)?"important":"";i?(e=e.replace(bs,"").trim(),this.el.style.setProperty(t.kebab,e,i)):this.el.style[t.camel]=e;
	}else this.el.style[t.camel]=""}},ks="http://www.w3.org/1999/xlink",xs=/^xlink:/,As=/^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/,Os=/^(?:value|checked|selected|muted)$/,Ts=/^(?:draggable|contenteditable|spellcheck)$/,Ns={value:"_value","true-value":"_trueValue","false-value":"_falseValue"},js={priority:Yr,bind:function(){var t=this.arg,e=this.el.tagName;t||(this.deep=!0);var i=this.descriptor,n=i.interp;n&&(i.hasOneTime&&(this.expression=B(n,this._scope||this.vm)),(As.test(t)||"name"===t&&("PARTIAL"===e||"SLOT"===e))&&(this.el.removeAttribute(t),this.invalid=!0))},update:function(t){if(!this.invalid){var e=this.arg;this.arg?this.handleSingle(e,t):this.handleObject(t||{})}},handleObject:$s.handleObject,handleSingle:function(t,e){var i=this.el,n=this.descriptor.interp;if(this.modifiers.camel&&(t=l(t)),!n&&Os.test(t)&&t in i){var r="value"===t&&null==e?"":e;i[t]!==r&&(i[t]=r)}var s=Ns[t];if(!n&&s){i[s]=e;var o=i.__v_model;o&&o.listener()}return"value"===t&&"TEXTAREA"===i.tagName?void i.removeAttribute(t):void(Ts.test(t)?i.setAttribute(t,e?"true":"false"):null!=e&&e!==!1?"class"===t?(i.__v_trans&&(e+=" "+i.__v_trans.id+"-transition"),lt(i,e)):xs.test(t)?i.setAttributeNS(ks,t,e===!0?"":e):i.setAttribute(t,e===!0?"":e):i.removeAttribute(t))}},Es={priority:ts,bind:function(){if(this.arg){var t=this.id=l(this.arg),e=(this._scope||this.vm).$els;i(e,t)?e[t]=this.el:Lt(e,t,this.el)}},unbind:function(){var t=(this._scope||this.vm).$els;t[this.id]===this.el&&(t[this.id]=null)}},Ss={bind:function(){}},Fs={bind:function(){var t=this.el;this.vm.$once("pre-hook:compiled",function(){t.removeAttribute("v-cloak")})}},Ds={text:Hr,html:Qr,for:as,if:hs,show:ls,model:vs,on:gs,bind:js,el:Es,ref:Ss,cloak:Fs},Ps={deep:!0,update:function(t){t?"string"==typeof t?this.setClass(t.trim().split(/\s+/)):this.setClass(Ee(t)):this.cleanup()},setClass:function(t){this.cleanup(t);for(var e=0,i=t.length;e<i;e++){var n=t[e];n&&Se(this.el,n,ct)}this.prevKeys=t},cleanup:function(t){var e=this.prevKeys;if(e)for(var i=e.length;i--;){var n=e[i];(!t||t.indexOf(n)<0)&&Se(this.el,n,ut)}}},Rs={priority:es,params:["keep-alive","transition-mode","inline-template"],bind:function(){this.el.__vue__||(this.keepAlive=this.params.keepAlive,this.keepAlive&&(this.cache={}),this.params.inlineTemplate&&(this.inlineTemplate=ft(this.el,!0)),this.pendingComponentCb=this.Component=null,this.pendingRemovals=0,this.pendingRemovalCb=null,this.anchor=mt("v-component"),st(this.el,this.anchor),this.el.removeAttribute("is"),this.el.removeAttribute(":is"),this.descriptor.ref&&this.el.removeAttribute("v-ref:"+u(this.descriptor.ref)),this.literal&&this.setComponent(this.expression))},update:function(t){this.literal||this.setComponent(t)},setComponent:function(t,e){if(this.invalidatePending(),t){var i=this;this.resolveComponent(t,function(){i.mountComponent(e)})}else this.unbuild(!0),this.remove(this.childVM,e),this.childVM=null},resolveComponent:function(t,e){var i=this;this.pendingComponentCb=w(function(n){i.ComponentName=n.options.name||("string"==typeof t?t:null),i.Component=n,e()}),this.vm._resolveComponent(t,this.pendingComponentCb)},mountComponent:function(t){this.unbuild(!0);var e=this,i=this.Component.options.activate,n=this.getCached(),r=this.build();i&&!n?(this.waitingFor=r,Fe(i,r,function(){e.waitingFor===r&&(e.waitingFor=null,e.transition(r,t))})):(n&&r._updateRef(),this.transition(r,t))},invalidatePending:function(){this.pendingComponentCb&&(this.pendingComponentCb.cancel(),this.pendingComponentCb=null)},build:function(t){var e=this.getCached();if(e)return e;if(this.Component){var i={name:this.ComponentName,el:le(this.el),template:this.inlineTemplate,parent:this._host||this.vm,_linkerCachable:!this.inlineTemplate,_ref:this.descriptor.ref,_asComponent:!0,_isRouterView:this._isRouterView,_context:this.vm,_scope:this._scope,_frag:this._frag};t&&v(i,t);var n=new this.Component(i);return this.keepAlive&&(this.cache[this.Component.cid]=n),n}},getCached:function(){return this.keepAlive&&this.cache[this.Component.cid]},unbuild:function(t){this.waitingFor&&(this.keepAlive||this.waitingFor.$destroy(),this.waitingFor=null);var e=this.childVM;return!e||this.keepAlive?void(e&&(e._inactive=!0,e._updateRef(!0))):void e.$destroy(!1,t)},remove:function(t,e){var i=this.keepAlive;if(t){this.pendingRemovals++,this.pendingRemovalCb=e;var n=this;t.$remove(function(){n.pendingRemovals--,i||t._cleanup(),!n.pendingRemovals&&n.pendingRemovalCb&&(n.pendingRemovalCb(),n.pendingRemovalCb=null)})}else e&&e()},transition:function(t,e){var i=this,n=this.childVM;switch(n&&(n._inactive=!0),t._inactive=!1,this.childVM=t,i.params.transitionMode){case"in-out":t.$before(i.anchor,function(){i.remove(n,e)});break;case"out-in":i.remove(n,function(){t.$before(i.anchor,e)});break;default:i.remove(n),t.$before(i.anchor,e)}},unbind:function(){if(this.invalidatePending(),this.unbuild(),this.cache){for(var t in this.cache)this.cache[t].$destroy();this.cache=null}}},Ls=Mn._propBindingModes,Hs={},Is=/^[$_a-zA-Z]+[\w$]*$/,Ms=Mn._propBindingModes,Ws={bind:function(){var t=this.vm,e=t._context,i=this.descriptor.prop,n=i.path,r=i.parentPath,s=i.mode===Ms.TWO_WAY,o=this.parentWatcher=new re(e,r,function(e){He(t,i,e)},{twoWay:s,filters:i.filters,scope:this._scope});if(Le(t,i,o.value),s){var a=this;t.$once("pre-hook:created",function(){a.childWatcher=new re(t,n,function(t){o.set(t)},{sync:!0})})}},unbind:function(){this.parentWatcher.teardown(),this.childWatcher&&this.childWatcher.teardown()}},Vs=[],Bs=!1,zs="transition",Us="animation",Js=nn+"Duration",qs=sn+"Duration",Qs=Gi&&window.requestAnimationFrame,Gs=Qs?function(t){Qs(function(){Qs(t)})}:function(t){setTimeout(t,50)},Zs=Ue.prototype;Zs.enter=function(t,e){this.cancelPending(),this.callHook("beforeEnter"),this.cb=e,ct(this.el,this.enterClass),t(),this.entered=!1,this.callHookWithCb("enter"),this.entered||(this.cancel=this.hooks&&this.hooks.enterCancelled,Be(this.enterNextTick))},Zs.enterNextTick=function(){var t=this;this.justEntered=!0,Gs(function(){t.justEntered=!1});var e=this.enterDone,i=this.getCssTransitionType(this.enterClass);this.pendingJsCb?i===zs&&ut(this.el,this.enterClass):i===zs?(ut(this.el,this.enterClass),this.setupCssCb(rn,e)):i===Us?this.setupCssCb(on,e):e()},Zs.enterDone=function(){this.entered=!0,this.cancel=this.pendingJsCb=null,ut(this.el,this.enterClass),this.callHook("afterEnter"),this.cb&&this.cb()},Zs.leave=function(t,e){this.cancelPending(),this.callHook("beforeLeave"),this.op=t,this.cb=e,ct(this.el,this.leaveClass),this.left=!1,this.callHookWithCb("leave"),this.left||(this.cancel=this.hooks&&this.hooks.leaveCancelled,this.op&&!this.pendingJsCb&&(this.justEntered?this.leaveDone():Be(this.leaveNextTick)))},Zs.leaveNextTick=function(){var t=this.getCssTransitionType(this.leaveClass);if(t){var e=t===zs?rn:on;this.setupCssCb(e,this.leaveDone)}else this.leaveDone()},Zs.leaveDone=function(){this.left=!0,this.cancel=this.pendingJsCb=null,this.op(),ut(this.el,this.leaveClass),this.callHook("afterLeave"),this.cb&&this.cb(),this.op=null},Zs.cancelPending=function(){this.op=this.cb=null;var t=!1;this.pendingCssCb&&(t=!0,at(this.el,this.pendingCssEvent,this.pendingCssCb),this.pendingCssEvent=this.pendingCssCb=null),this.pendingJsCb&&(t=!0,this.pendingJsCb.cancel(),this.pendingJsCb=null),t&&(ut(this.el,this.enterClass),ut(this.el,this.leaveClass)),this.cancel&&(this.cancel.call(this.vm,this.el),this.cancel=null)},Zs.callHook=function(t){this.hooks&&this.hooks[t]&&this.hooks[t].call(this.vm,this.el)},Zs.callHookWithCb=function(t){var e=this.hooks&&this.hooks[t];e&&(e.length>1&&(this.pendingJsCb=w(this[t+"Done"])),e.call(this.vm,this.el,this.pendingJsCb))},Zs.getCssTransitionType=function(t){if(!(!rn||document.hidden||this.hooks&&this.hooks.css===!1||Je(this.el))){var e=this.type||this.typeCache[t];if(e)return e;var i=this.el.style,n=window.getComputedStyle(this.el),r=i[Js]||n[Js];if(r&&"0s"!==r)e=zs;else{var s=i[qs]||n[qs];s&&"0s"!==s&&(e=Us)}return e&&(this.typeCache[t]=e),e}},Zs.setupCssCb=function(t,e){this.pendingCssEvent=t;var i=this,n=this.el,r=this.pendingCssCb=function(s){s.target===n&&(at(n,t,r),i.pendingCssEvent=i.pendingCssCb=null,!i.pendingJsCb&&e&&e())};ot(n,t,r)};var Xs={priority:Kr,update:function(t,e){var i=this.el,n=jt(this.vm.$options,"transitions",t);t=t||"v",e=e||"v",i.__v_trans=new Ue(i,t,n,this.vm),ut(i,e+"-transition"),ct(i,t+"-transition")}},Ys={style:$s,class:Ps,component:Rs,prop:Ws,transition:Xs},Ks=/^v-bind:|^:/,to=/^v-on:|^@/,eo=/^v-([^:]+)(?:$|:(.*)$)/,io=/\.[^\.]+/g,no=/^(v-bind:|:)?transition$/,ro=1e3,so=2e3;ui.terminal=!0;var oo=/[^\w\-:\.]/,ao=Object.freeze({compile:qe,compileAndLinkProps:Ye,compileRoot:Ke,transclude:_i,resolveSlots:Ci}),ho=/^v-on:|^@/;Oi.prototype._bind=function(){var t=this.name,e=this.descriptor;if(("cloak"!==t||this.vm._isCompiled)&&this.el&&this.el.removeAttribute){var i=e.attr||"v-"+t;this.el.removeAttribute(i)}var n=e.def;if("function"==typeof n?this.update=n:v(this,n),this._setupParams(),this.bind&&this.bind(),this._bound=!0,this.literal)this.update&&this.update(e.raw);else if((this.expression||this.modifiers)&&(this.update||this.twoWay)&&!this._checkStatement()){var r=this;this.update?this._update=function(t,e){r._locked||r.update(t,e)}:this._update=Ai;var s=this._preProcess?p(this._preProcess,this):null,o=this._postProcess?p(this._postProcess,this):null,a=this._watcher=new re(this.vm,this.expression,this._update,{filters:this.filters,twoWay:this.twoWay,deep:this.deep,preProcess:s,postProcess:o,scope:this._scope});this.afterBind?this.afterBind():this.update&&this.update(a.value)}},Oi.prototype._setupParams=function(){if(this.params){var t=this.params;this.params=Object.create(null);for(var e,i,n,r=t.length;r--;)e=u(t[r]),n=l(e),i=K(this.el,e),null!=i?this._setupParamWatcher(n,i):(i=Y(this.el,e),null!=i&&(this.params[n]=""===i||i))}},Oi.prototype._setupParamWatcher=function(t,e){var i=this,n=!1,r=(this._scope||this.vm).$watch(e,function(e,r){if(i.params[t]=e,n){var s=i.paramWatchers&&i.paramWatchers[t];s&&s.call(i,e,r)}else n=!0},{immediate:!0,user:!1});(this._paramUnwatchFns||(this._paramUnwatchFns=[])).push(r)},Oi.prototype._checkStatement=function(){var t=this.expression;if(t&&this.acceptStatement&&!Kt(t)){var e=Yt(t).get,i=this._scope||this.vm,n=function(t){i.$event=t,e.call(i,i),i.$event=null};return this.filters&&(n=i._applyFilters(n,null,this.filters)),this.update(n),!0}},Oi.prototype.set=function(t){this.twoWay&&this._withLock(function(){this._watcher.set(t)})},Oi.prototype._withLock=function(t){var e=this;e._locked=!0,t.call(e),ln(function(){e._locked=!1})},Oi.prototype.on=function(t,e,i){ot(this.el,t,e,i),(this._listeners||(this._listeners=[])).push([t,e])},Oi.prototype._teardown=function(){if(this._bound){this._bound=!1,this.unbind&&this.unbind(),this._watcher&&this._watcher.teardown();var t,e=this._listeners;if(e)for(t=e.length;t--;)at(this.el,e[t][0],e[t][1]);var i=this._paramUnwatchFns;if(i)for(t=i.length;t--;)i[t]();this.vm=this.el=this._watcher=this._listeners=null}};var lo=/[^|]\|[^|]/;Ht(Di),ki(Di),xi(Di),Ti(Di),Ni(Di),ji(Di),Ei(Di),Si(Di),Fi(Di);var co={priority:ss,params:["name"],bind:function(){var t=this.params.name||"default",e=this.vm._slotContents&&this.vm._slotContents[t];e&&e.hasChildNodes()?this.compile(e.cloneNode(!0),this.vm._context,this.vm):this.fallback()},compile:function(t,e,i){if(t&&e){if(this.el.hasChildNodes()&&1===t.childNodes.length&&1===t.childNodes[0].nodeType&&t.childNodes[0].hasAttribute("v-if")){var n=document.createElement("template");n.setAttribute("v-else",""),n.innerHTML=this.el.innerHTML,n._context=this.vm,t.appendChild(n)}var r=i?i._scope:this._scope;this.unlink=e.$compile(t,i,r,this._frag)}t?st(this.el,t):nt(this.el)},fallback:function(){this.compile(ft(this.el,!0),this.vm)},unbind:function(){this.unlink&&this.unlink()}},uo={priority:is,params:["name"],paramWatchers:{name:function(t){hs.remove.call(this),t&&this.insert(t)}},bind:function(){this.anchor=mt("v-partial"),st(this.el,this.anchor),this.insert(this.params.name)},insert:function(t){var e=jt(this.vm.$options,"partials",t,!0);e&&(this.factory=new _e(this.vm,e),hs.insert.call(this))},unbind:function(){this.frag&&this.frag.destroy()}},fo={slot:co,partial:uo},po=as._postProcess,vo=/(\d{3})(?=\d)/g,mo={orderBy:Li,filterBy:Ri,limitBy:Pi,json:{read:function(t,e){return"string"==typeof t?t:JSON.stringify(t,null,arguments.length>1?e:2)},write:function(t){try{return JSON.parse(t)}catch(e){return t}}},capitalize:function(t){return t||0===t?(t=t.toString(),t.charAt(0).toUpperCase()+t.slice(1)):""},uppercase:function(t){return t||0===t?t.toString().toUpperCase():""},lowercase:function(t){return t||0===t?t.toString().toLowerCase():""},currency:function(t,e,i){if(t=parseFloat(t),!isFinite(t)||!t&&0!==t)return"";e=null!=e?e:"$",i=null!=i?i:2;var n=Math.abs(t).toFixed(i),r=i?n.slice(0,-1-i):n,s=r.length%3,o=s>0?r.slice(0,s)+(r.length>3?",":""):"",a=i?n.slice(-1-i):"",h=t<0?"-":"";return h+e+o+r.slice(s).replace(vo,"$1,")+a},pluralize:function(t){var e=d(arguments,1),i=e.length;if(i>1){var n=t%10-1;return n in e?e[n]:e[i-1]}return e[0]+(1===t?"":"s")},debounce:function(t,e){if(t)return e||(e=300),y(t,e)}};return Ii(Di),Di.version="1.0.28",setTimeout(function(){Mn.devtools&&Zi&&Zi.emit("init",Di)},0),Di});
	//# sourceMappingURL=vue.min.js.map

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * vue-router v0.7.13
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  global.VueRouter = factory();
	}(this, function () { 'use strict';

	  var babelHelpers = {};

	  babelHelpers.classCallCheck = function (instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  };
	  function Target(path, matcher, delegate) {
	    this.path = path;
	    this.matcher = matcher;
	    this.delegate = delegate;
	  }

	  Target.prototype = {
	    to: function to(target, callback) {
	      var delegate = this.delegate;

	      if (delegate && delegate.willAddRoute) {
	        target = delegate.willAddRoute(this.matcher.target, target);
	      }

	      this.matcher.add(this.path, target);

	      if (callback) {
	        if (callback.length === 0) {
	          throw new Error("You must have an argument in the function passed to `to`");
	        }
	        this.matcher.addChild(this.path, target, callback, this.delegate);
	      }
	      return this;
	    }
	  };

	  function Matcher(target) {
	    this.routes = {};
	    this.children = {};
	    this.target = target;
	  }

	  Matcher.prototype = {
	    add: function add(path, handler) {
	      this.routes[path] = handler;
	    },

	    addChild: function addChild(path, target, callback, delegate) {
	      var matcher = new Matcher(target);
	      this.children[path] = matcher;

	      var match = generateMatch(path, matcher, delegate);

	      if (delegate && delegate.contextEntered) {
	        delegate.contextEntered(target, match);
	      }

	      callback(match);
	    }
	  };

	  function generateMatch(startingPath, matcher, delegate) {
	    return function (path, nestedCallback) {
	      var fullPath = startingPath + path;

	      if (nestedCallback) {
	        nestedCallback(generateMatch(fullPath, matcher, delegate));
	      } else {
	        return new Target(startingPath + path, matcher, delegate);
	      }
	    };
	  }

	  function addRoute(routeArray, path, handler) {
	    var len = 0;
	    for (var i = 0, l = routeArray.length; i < l; i++) {
	      len += routeArray[i].path.length;
	    }

	    path = path.substr(len);
	    var route = { path: path, handler: handler };
	    routeArray.push(route);
	  }

	  function eachRoute(baseRoute, matcher, callback, binding) {
	    var routes = matcher.routes;

	    for (var path in routes) {
	      if (routes.hasOwnProperty(path)) {
	        var routeArray = baseRoute.slice();
	        addRoute(routeArray, path, routes[path]);

	        if (matcher.children[path]) {
	          eachRoute(routeArray, matcher.children[path], callback, binding);
	        } else {
	          callback.call(binding, routeArray);
	        }
	      }
	    }
	  }

	  function map (callback, addRouteCallback) {
	    var matcher = new Matcher();

	    callback(generateMatch("", matcher, this.delegate));

	    eachRoute([], matcher, function (route) {
	      if (addRouteCallback) {
	        addRouteCallback(this, route);
	      } else {
	        this.add(route);
	      }
	    }, this);
	  }

	  var specials = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];

	  var escapeRegex = new RegExp('(\\' + specials.join('|\\') + ')', 'g');

	  var noWarning = false;
	  function warn(msg) {
	    if (!noWarning && typeof console !== 'undefined') {
	      console.error('[vue-router] ' + msg);
	    }
	  }

	  function tryDecode(uri, asComponent) {
	    try {
	      return asComponent ? decodeURIComponent(uri) : decodeURI(uri);
	    } catch (e) {
	      warn('malformed URI' + (asComponent ? ' component: ' : ': ') + uri);
	    }
	  }

	  function isArray(test) {
	    return Object.prototype.toString.call(test) === "[object Array]";
	  }

	  // A Segment represents a segment in the original route description.
	  // Each Segment type provides an `eachChar` and `regex` method.
	  //
	  // The `eachChar` method invokes the callback with one or more character
	  // specifications. A character specification consumes one or more input
	  // characters.
	  //
	  // The `regex` method returns a regex fragment for the segment. If the
	  // segment is a dynamic of star segment, the regex fragment also includes
	  // a capture.
	  //
	  // A character specification contains:
	  //
	  // * `validChars`: a String with a list of all valid characters, or
	  // * `invalidChars`: a String with a list of all invalid characters
	  // * `repeat`: true if the character specification can repeat

	  function StaticSegment(string) {
	    this.string = string;
	  }
	  StaticSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      var string = this.string,
	          ch;

	      for (var i = 0, l = string.length; i < l; i++) {
	        ch = string.charAt(i);
	        callback({ validChars: ch });
	      }
	    },

	    regex: function regex() {
	      return this.string.replace(escapeRegex, '\\$1');
	    },

	    generate: function generate() {
	      return this.string;
	    }
	  };

	  function DynamicSegment(name) {
	    this.name = name;
	  }
	  DynamicSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "/", repeat: true });
	    },

	    regex: function regex() {
	      return "([^/]+)";
	    },

	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };

	  function StarSegment(name) {
	    this.name = name;
	  }
	  StarSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "", repeat: true });
	    },

	    regex: function regex() {
	      return "(.+)";
	    },

	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };

	  function EpsilonSegment() {}
	  EpsilonSegment.prototype = {
	    eachChar: function eachChar() {},
	    regex: function regex() {
	      return "";
	    },
	    generate: function generate() {
	      return "";
	    }
	  };

	  function parse(route, names, specificity) {
	    // normalize route as not starting with a "/". Recognition will
	    // also normalize.
	    if (route.charAt(0) === "/") {
	      route = route.substr(1);
	    }

	    var segments = route.split("/"),
	        results = [];

	    // A routes has specificity determined by the order that its different segments
	    // appear in. This system mirrors how the magnitude of numbers written as strings
	    // works.
	    // Consider a number written as: "abc". An example would be "200". Any other number written
	    // "xyz" will be smaller than "abc" so long as `a > z`. For instance, "199" is smaller
	    // then "200", even though "y" and "z" (which are both 9) are larger than "0" (the value
	    // of (`b` and `c`). This is because the leading symbol, "2", is larger than the other
	    // leading symbol, "1".
	    // The rule is that symbols to the left carry more weight than symbols to the right
	    // when a number is written out as a string. In the above strings, the leading digit
	    // represents how many 100's are in the number, and it carries more weight than the middle
	    // number which represents how many 10's are in the number.
	    // This system of number magnitude works well for route specificity, too. A route written as
	    // `a/b/c` will be more specific than `x/y/z` as long as `a` is more specific than
	    // `x`, irrespective of the other parts.
	    // Because of this similarity, we assign each type of segment a number value written as a
	    // string. We can find the specificity of compound routes by concatenating these strings
	    // together, from left to right. After we have looped through all of the segments,
	    // we convert the string to a number.
	    specificity.val = '';

	    for (var i = 0, l = segments.length; i < l; i++) {
	      var segment = segments[i],
	          match;

	      if (match = segment.match(/^:([^\/]+)$/)) {
	        results.push(new DynamicSegment(match[1]));
	        names.push(match[1]);
	        specificity.val += '3';
	      } else if (match = segment.match(/^\*([^\/]+)$/)) {
	        results.push(new StarSegment(match[1]));
	        specificity.val += '2';
	        names.push(match[1]);
	      } else if (segment === "") {
	        results.push(new EpsilonSegment());
	        specificity.val += '1';
	      } else {
	        results.push(new StaticSegment(segment));
	        specificity.val += '4';
	      }
	    }

	    specificity.val = +specificity.val;

	    return results;
	  }

	  // A State has a character specification and (`charSpec`) and a list of possible
	  // subsequent states (`nextStates`).
	  //
	  // If a State is an accepting state, it will also have several additional
	  // properties:
	  //
	  // * `regex`: A regular expression that is used to extract parameters from paths
	  //   that reached this accepting state.
	  // * `handlers`: Information on how to convert the list of captures into calls
	  //   to registered handlers with the specified parameters
	  // * `types`: How many static, dynamic or star segments in this route. Used to
	  //   decide which route to use if multiple registered routes match a path.
	  //
	  // Currently, State is implemented naively by looping over `nextStates` and
	  // comparing a character specification against a character. A more efficient
	  // implementation would use a hash of keys pointing at one or more next states.

	  function State(charSpec) {
	    this.charSpec = charSpec;
	    this.nextStates = [];
	  }

	  State.prototype = {
	    get: function get(charSpec) {
	      var nextStates = this.nextStates;

	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        var child = nextStates[i];

	        var isEqual = child.charSpec.validChars === charSpec.validChars;
	        isEqual = isEqual && child.charSpec.invalidChars === charSpec.invalidChars;

	        if (isEqual) {
	          return child;
	        }
	      }
	    },

	    put: function put(charSpec) {
	      var state;

	      // If the character specification already exists in a child of the current
	      // state, just return that state.
	      if (state = this.get(charSpec)) {
	        return state;
	      }

	      // Make a new state for the character spec
	      state = new State(charSpec);

	      // Insert the new state as a child of the current state
	      this.nextStates.push(state);

	      // If this character specification repeats, insert the new state as a child
	      // of itself. Note that this will not trigger an infinite loop because each
	      // transition during recognition consumes a character.
	      if (charSpec.repeat) {
	        state.nextStates.push(state);
	      }

	      // Return the new state
	      return state;
	    },

	    // Find a list of child states matching the next character
	    match: function match(ch) {
	      // DEBUG "Processing `" + ch + "`:"
	      var nextStates = this.nextStates,
	          child,
	          charSpec,
	          chars;

	      // DEBUG "  " + debugState(this)
	      var returned = [];

	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        child = nextStates[i];

	        charSpec = child.charSpec;

	        if (typeof (chars = charSpec.validChars) !== 'undefined') {
	          if (chars.indexOf(ch) !== -1) {
	            returned.push(child);
	          }
	        } else if (typeof (chars = charSpec.invalidChars) !== 'undefined') {
	          if (chars.indexOf(ch) === -1) {
	            returned.push(child);
	          }
	        }
	      }

	      return returned;
	    }

	    /** IF DEBUG
	    , debug: function() {
	      var charSpec = this.charSpec,
	          debug = "[",
	          chars = charSpec.validChars || charSpec.invalidChars;
	       if (charSpec.invalidChars) { debug += "^"; }
	      debug += chars;
	      debug += "]";
	       if (charSpec.repeat) { debug += "+"; }
	       return debug;
	    }
	    END IF **/
	  };

	  /** IF DEBUG
	  function debug(log) {
	    console.log(log);
	  }

	  function debugState(state) {
	    return state.nextStates.map(function(n) {
	      if (n.nextStates.length === 0) { return "( " + n.debug() + " [accepting] )"; }
	      return "( " + n.debug() + " <then> " + n.nextStates.map(function(s) { return s.debug() }).join(" or ") + " )";
	    }).join(", ")
	  }
	  END IF **/

	  // Sort the routes by specificity
	  function sortSolutions(states) {
	    return states.sort(function (a, b) {
	      return b.specificity.val - a.specificity.val;
	    });
	  }

	  function recognizeChar(states, ch) {
	    var nextStates = [];

	    for (var i = 0, l = states.length; i < l; i++) {
	      var state = states[i];

	      nextStates = nextStates.concat(state.match(ch));
	    }

	    return nextStates;
	  }

	  var oCreate = Object.create || function (proto) {
	    function F() {}
	    F.prototype = proto;
	    return new F();
	  };

	  function RecognizeResults(queryParams) {
	    this.queryParams = queryParams || {};
	  }
	  RecognizeResults.prototype = oCreate({
	    splice: Array.prototype.splice,
	    slice: Array.prototype.slice,
	    push: Array.prototype.push,
	    length: 0,
	    queryParams: null
	  });

	  function findHandler(state, path, queryParams) {
	    var handlers = state.handlers,
	        regex = state.regex;
	    var captures = path.match(regex),
	        currentCapture = 1;
	    var result = new RecognizeResults(queryParams);

	    for (var i = 0, l = handlers.length; i < l; i++) {
	      var handler = handlers[i],
	          names = handler.names,
	          params = {};

	      for (var j = 0, m = names.length; j < m; j++) {
	        params[names[j]] = captures[currentCapture++];
	      }

	      result.push({ handler: handler.handler, params: params, isDynamic: !!names.length });
	    }

	    return result;
	  }

	  function addSegment(currentState, segment) {
	    segment.eachChar(function (ch) {
	      var state;

	      currentState = currentState.put(ch);
	    });

	    return currentState;
	  }

	  function decodeQueryParamPart(part) {
	    // http://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1
	    part = part.replace(/\+/gm, '%20');
	    return tryDecode(part, true);
	  }

	  // The main interface

	  var RouteRecognizer = function RouteRecognizer() {
	    this.rootState = new State();
	    this.names = {};
	  };

	  RouteRecognizer.prototype = {
	    add: function add(routes, options) {
	      var currentState = this.rootState,
	          regex = "^",
	          specificity = {},
	          handlers = [],
	          allSegments = [],
	          name;

	      var isEmpty = true;

	      for (var i = 0, l = routes.length; i < l; i++) {
	        var route = routes[i],
	            names = [];

	        var segments = parse(route.path, names, specificity);

	        allSegments = allSegments.concat(segments);

	        for (var j = 0, m = segments.length; j < m; j++) {
	          var segment = segments[j];

	          if (segment instanceof EpsilonSegment) {
	            continue;
	          }

	          isEmpty = false;

	          // Add a "/" for the new segment
	          currentState = currentState.put({ validChars: "/" });
	          regex += "/";

	          // Add a representation of the segment to the NFA and regex
	          currentState = addSegment(currentState, segment);
	          regex += segment.regex();
	        }

	        var handler = { handler: route.handler, names: names };
	        handlers.push(handler);
	      }

	      if (isEmpty) {
	        currentState = currentState.put({ validChars: "/" });
	        regex += "/";
	      }

	      currentState.handlers = handlers;
	      currentState.regex = new RegExp(regex + "$");
	      currentState.specificity = specificity;

	      if (name = options && options.as) {
	        this.names[name] = {
	          segments: allSegments,
	          handlers: handlers
	        };
	      }
	    },

	    handlersFor: function handlersFor(name) {
	      var route = this.names[name],
	          result = [];
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }

	      for (var i = 0, l = route.handlers.length; i < l; i++) {
	        result.push(route.handlers[i]);
	      }

	      return result;
	    },

	    hasRoute: function hasRoute(name) {
	      return !!this.names[name];
	    },

	    generate: function generate(name, params) {
	      var route = this.names[name],
	          output = "";
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }

	      var segments = route.segments;

	      for (var i = 0, l = segments.length; i < l; i++) {
	        var segment = segments[i];

	        if (segment instanceof EpsilonSegment) {
	          continue;
	        }

	        output += "/";
	        output += segment.generate(params);
	      }

	      if (output.charAt(0) !== '/') {
	        output = '/' + output;
	      }

	      if (params && params.queryParams) {
	        output += this.generateQueryString(params.queryParams);
	      }

	      return output;
	    },

	    generateQueryString: function generateQueryString(params) {
	      var pairs = [];
	      var keys = [];
	      for (var key in params) {
	        if (params.hasOwnProperty(key)) {
	          keys.push(key);
	        }
	      }
	      keys.sort();
	      for (var i = 0, len = keys.length; i < len; i++) {
	        key = keys[i];
	        var value = params[key];
	        if (value == null) {
	          continue;
	        }
	        var pair = encodeURIComponent(key);
	        if (isArray(value)) {
	          for (var j = 0, l = value.length; j < l; j++) {
	            var arrayPair = key + '[]' + '=' + encodeURIComponent(value[j]);
	            pairs.push(arrayPair);
	          }
	        } else {
	          pair += "=" + encodeURIComponent(value);
	          pairs.push(pair);
	        }
	      }

	      if (pairs.length === 0) {
	        return '';
	      }

	      return "?" + pairs.join("&");
	    },

	    parseQueryString: function parseQueryString(queryString) {
	      var pairs = queryString.split("&"),
	          queryParams = {};
	      for (var i = 0; i < pairs.length; i++) {
	        var pair = pairs[i].split('='),
	            key = decodeQueryParamPart(pair[0]),
	            keyLength = key.length,
	            isArray = false,
	            value;
	        if (pair.length === 1) {
	          value = 'true';
	        } else {
	          //Handle arrays
	          if (keyLength > 2 && key.slice(keyLength - 2) === '[]') {
	            isArray = true;
	            key = key.slice(0, keyLength - 2);
	            if (!queryParams[key]) {
	              queryParams[key] = [];
	            }
	          }
	          value = pair[1] ? decodeQueryParamPart(pair[1]) : '';
	        }
	        if (isArray) {
	          queryParams[key].push(value);
	        } else {
	          queryParams[key] = value;
	        }
	      }
	      return queryParams;
	    },

	    recognize: function recognize(path, silent) {
	      noWarning = silent;
	      var states = [this.rootState],
	          pathLen,
	          i,
	          l,
	          queryStart,
	          queryParams = {},
	          isSlashDropped = false;

	      queryStart = path.indexOf('?');
	      if (queryStart !== -1) {
	        var queryString = path.substr(queryStart + 1, path.length);
	        path = path.substr(0, queryStart);
	        if (queryString) {
	          queryParams = this.parseQueryString(queryString);
	        }
	      }

	      path = tryDecode(path);
	      if (!path) return;

	      // DEBUG GROUP path

	      if (path.charAt(0) !== "/") {
	        path = "/" + path;
	      }

	      pathLen = path.length;
	      if (pathLen > 1 && path.charAt(pathLen - 1) === "/") {
	        path = path.substr(0, pathLen - 1);
	        isSlashDropped = true;
	      }

	      for (i = 0, l = path.length; i < l; i++) {
	        states = recognizeChar(states, path.charAt(i));
	        if (!states.length) {
	          break;
	        }
	      }

	      // END DEBUG GROUP

	      var solutions = [];
	      for (i = 0, l = states.length; i < l; i++) {
	        if (states[i].handlers) {
	          solutions.push(states[i]);
	        }
	      }

	      states = sortSolutions(solutions);

	      var state = solutions[0];

	      if (state && state.handlers) {
	        // if a trailing slash was dropped and a star segment is the last segment
	        // specified, put the trailing slash back
	        if (isSlashDropped && state.regex.source.slice(-5) === "(.+)$") {
	          path = path + "/";
	        }
	        return findHandler(state, path, queryParams);
	      }
	    }
	  };

	  RouteRecognizer.prototype.map = map;

	  var genQuery = RouteRecognizer.prototype.generateQueryString;

	  // export default for holding the Vue reference
	  var exports$1 = {};
	  /**
	   * Warn stuff.
	   *
	   * @param {String} msg
	   */

	  function warn$1(msg) {
	    /* istanbul ignore next */
	    if (typeof console !== 'undefined') {
	      console.error('[vue-router] ' + msg);
	    }
	  }

	  /**
	   * Resolve a relative path.
	   *
	   * @param {String} base
	   * @param {String} relative
	   * @param {Boolean} append
	   * @return {String}
	   */

	  function resolvePath(base, relative, append) {
	    var query = base.match(/(\?.*)$/);
	    if (query) {
	      query = query[1];
	      base = base.slice(0, -query.length);
	    }
	    // a query!
	    if (relative.charAt(0) === '?') {
	      return base + relative;
	    }
	    var stack = base.split('/');
	    // remove trailing segment if:
	    // - not appending
	    // - appending to trailing slash (last segment is empty)
	    if (!append || !stack[stack.length - 1]) {
	      stack.pop();
	    }
	    // resolve relative path
	    var segments = relative.replace(/^\//, '').split('/');
	    for (var i = 0; i < segments.length; i++) {
	      var segment = segments[i];
	      if (segment === '.') {
	        continue;
	      } else if (segment === '..') {
	        stack.pop();
	      } else {
	        stack.push(segment);
	      }
	    }
	    // ensure leading slash
	    if (stack[0] !== '') {
	      stack.unshift('');
	    }
	    return stack.join('/');
	  }

	  /**
	   * Forgiving check for a promise
	   *
	   * @param {Object} p
	   * @return {Boolean}
	   */

	  function isPromise(p) {
	    return p && typeof p.then === 'function';
	  }

	  /**
	   * Retrive a route config field from a component instance
	   * OR a component contructor.
	   *
	   * @param {Function|Vue} component
	   * @param {String} name
	   * @return {*}
	   */

	  function getRouteConfig(component, name) {
	    var options = component && (component.$options || component.options);
	    return options && options.route && options.route[name];
	  }

	  /**
	   * Resolve an async component factory. Have to do a dirty
	   * mock here because of Vue core's internal API depends on
	   * an ID check.
	   *
	   * @param {Object} handler
	   * @param {Function} cb
	   */

	  var resolver = undefined;

	  function resolveAsyncComponent(handler, cb) {
	    if (!resolver) {
	      resolver = {
	        resolve: exports$1.Vue.prototype._resolveComponent,
	        $options: {
	          components: {
	            _: handler.component
	          }
	        }
	      };
	    } else {
	      resolver.$options.components._ = handler.component;
	    }
	    resolver.resolve('_', function (Component) {
	      handler.component = Component;
	      cb(Component);
	    });
	  }

	  /**
	   * Map the dynamic segments in a path to params.
	   *
	   * @param {String} path
	   * @param {Object} params
	   * @param {Object} query
	   */

	  function mapParams(path, params, query) {
	    if (params === undefined) params = {};

	    path = path.replace(/:([^\/]+)/g, function (_, key) {
	      var val = params[key];
	      /* istanbul ignore if */
	      if (!val) {
	        warn$1('param "' + key + '" not found when generating ' + 'path for "' + path + '" with params ' + JSON.stringify(params));
	      }
	      return val || '';
	    });
	    if (query) {
	      path += genQuery(query);
	    }
	    return path;
	  }

	  var hashRE = /#.*$/;

	  var HTML5History = (function () {
	    function HTML5History(_ref) {
	      var root = _ref.root;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HTML5History);

	      if (root && root !== '/') {
	        // make sure there's the starting slash
	        if (root.charAt(0) !== '/') {
	          root = '/' + root;
	        }
	        // remove trailing slash
	        this.root = root.replace(/\/$/, '');
	        this.rootRE = new RegExp('^\\' + this.root);
	      } else {
	        this.root = null;
	      }
	      this.onChange = onChange;
	      // check base tag
	      var baseEl = document.querySelector('base');
	      this.base = baseEl && baseEl.getAttribute('href');
	    }

	    HTML5History.prototype.start = function start() {
	      var _this = this;

	      this.listener = function (e) {
	        var url = location.pathname + location.search;
	        if (_this.root) {
	          url = url.replace(_this.rootRE, '');
	        }
	        _this.onChange(url, e && e.state, location.hash);
	      };
	      window.addEventListener('popstate', this.listener);
	      this.listener();
	    };

	    HTML5History.prototype.stop = function stop() {
	      window.removeEventListener('popstate', this.listener);
	    };

	    HTML5History.prototype.go = function go(path, replace, append) {
	      var url = this.formatPath(path, append);
	      if (replace) {
	        history.replaceState({}, '', url);
	      } else {
	        // record scroll position by replacing current state
	        history.replaceState({
	          pos: {
	            x: window.pageXOffset,
	            y: window.pageYOffset
	          }
	        }, '', location.href);
	        // then push new state
	        history.pushState({}, '', url);
	      }
	      var hashMatch = path.match(hashRE);
	      var hash = hashMatch && hashMatch[0];
	      path = url
	      // strip hash so it doesn't mess up params
	      .replace(hashRE, '')
	      // remove root before matching
	      .replace(this.rootRE, '');
	      this.onChange(path, null, hash);
	    };

	    HTML5History.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/'
	      // absolute path
	      ? this.root ? this.root + '/' + path.replace(/^\//, '') : path : resolvePath(this.base || location.pathname, path, append);
	    };

	    return HTML5History;
	  })();

	  var HashHistory = (function () {
	    function HashHistory(_ref) {
	      var hashbang = _ref.hashbang;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HashHistory);

	      this.hashbang = hashbang;
	      this.onChange = onChange;
	    }

	    HashHistory.prototype.start = function start() {
	      var self = this;
	      this.listener = function () {
	        var path = location.hash;
	        var raw = path.replace(/^#!?/, '');
	        // always
	        if (raw.charAt(0) !== '/') {
	          raw = '/' + raw;
	        }
	        var formattedPath = self.formatPath(raw);
	        if (formattedPath !== path) {
	          location.replace(formattedPath);
	          return;
	        }
	        // determine query
	        // note it's possible to have queries in both the actual URL
	        // and the hash fragment itself.
	        var query = location.search && path.indexOf('?') > -1 ? '&' + location.search.slice(1) : location.search;
	        self.onChange(path.replace(/^#!?/, '') + query);
	      };
	      window.addEventListener('hashchange', this.listener);
	      this.listener();
	    };

	    HashHistory.prototype.stop = function stop() {
	      window.removeEventListener('hashchange', this.listener);
	    };

	    HashHistory.prototype.go = function go(path, replace, append) {
	      path = this.formatPath(path, append);
	      if (replace) {
	        location.replace(path);
	      } else {
	        location.hash = path;
	      }
	    };

	    HashHistory.prototype.formatPath = function formatPath(path, append) {
	      var isAbsoloute = path.charAt(0) === '/';
	      var prefix = '#' + (this.hashbang ? '!' : '');
	      return isAbsoloute ? prefix + path : prefix + resolvePath(location.hash.replace(/^#!?/, ''), path, append);
	    };

	    return HashHistory;
	  })();

	  var AbstractHistory = (function () {
	    function AbstractHistory(_ref) {
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, AbstractHistory);

	      this.onChange = onChange;
	      this.currentPath = '/';
	    }

	    AbstractHistory.prototype.start = function start() {
	      this.onChange('/');
	    };

	    AbstractHistory.prototype.stop = function stop() {
	      // noop
	    };

	    AbstractHistory.prototype.go = function go(path, replace, append) {
	      path = this.currentPath = this.formatPath(path, append);
	      this.onChange(path);
	    };

	    AbstractHistory.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/' ? path : resolvePath(this.currentPath, path, append);
	    };

	    return AbstractHistory;
	  })();

	  /**
	   * Determine the reusability of an existing router view.
	   *
	   * @param {Directive} view
	   * @param {Object} handler
	   * @param {Transition} transition
	   */

	  function canReuse(view, handler, transition) {
	    var component = view.childVM;
	    if (!component || !handler) {
	      return false;
	    }
	    // important: check view.Component here because it may
	    // have been changed in activate hook
	    if (view.Component !== handler.component) {
	      return false;
	    }
	    var canReuseFn = getRouteConfig(component, 'canReuse');
	    return typeof canReuseFn === 'boolean' ? canReuseFn : canReuseFn ? canReuseFn.call(component, {
	      to: transition.to,
	      from: transition.from
	    }) : true; // defaults to true
	  }

	  /**
	   * Check if a component can deactivate.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */

	  function canDeactivate(view, transition, next) {
	    var fromComponent = view.childVM;
	    var hook = getRouteConfig(fromComponent, 'canDeactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHook(hook, fromComponent, next, {
	        expectBoolean: true
	      });
	    }
	  }

	  /**
	   * Check if a component can activate.
	   *
	   * @param {Object} handler
	   * @param {Transition} transition
	   * @param {Function} next
	   */

	  function canActivate(handler, transition, next) {
	    resolveAsyncComponent(handler, function (Component) {
	      // have to check due to async-ness
	      if (transition.aborted) {
	        return;
	      }
	      // determine if this component can be activated
	      var hook = getRouteConfig(Component, 'canActivate');
	      if (!hook) {
	        next();
	      } else {
	        transition.callHook(hook, null, next, {
	          expectBoolean: true
	        });
	      }
	    });
	  }

	  /**
	   * Call deactivate hooks for existing router-views.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */

	  function deactivate(view, transition, next) {
	    var component = view.childVM;
	    var hook = getRouteConfig(component, 'deactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHooks(hook, component, next);
	    }
	  }

	  /**
	   * Activate / switch component for a router-view.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Number} depth
	   * @param {Function} [cb]
	   */

	  function activate(view, transition, depth, cb, reuse) {
	    var handler = transition.activateQueue[depth];
	    if (!handler) {
	      saveChildView(view);
	      if (view._bound) {
	        view.setComponent(null);
	      }
	      cb && cb();
	      return;
	    }

	    var Component = view.Component = handler.component;
	    var activateHook = getRouteConfig(Component, 'activate');
	    var dataHook = getRouteConfig(Component, 'data');
	    var waitForData = getRouteConfig(Component, 'waitForData');

	    view.depth = depth;
	    view.activated = false;

	    var component = undefined;
	    var loading = !!(dataHook && !waitForData);

	    // "reuse" is a flag passed down when the parent view is
	    // either reused via keep-alive or as a child of a kept-alive view.
	    // of course we can only reuse if the current kept-alive instance
	    // is of the correct type.
	    reuse = reuse && view.childVM && view.childVM.constructor === Component;

	    if (reuse) {
	      // just reuse
	      component = view.childVM;
	      component.$loadingRouteData = loading;
	    } else {
	      saveChildView(view);

	      // unbuild current component. this step also destroys
	      // and removes all nested child views.
	      view.unbuild(true);

	      // build the new component. this will also create the
	      // direct child view of the current one. it will register
	      // itself as view.childView.
	      component = view.build({
	        _meta: {
	          $loadingRouteData: loading
	        },
	        created: function created() {
	          this._routerView = view;
	        }
	      });

	      // handle keep-alive.
	      // when a kept-alive child vm is restored, we need to
	      // add its cached child views into the router's view list,
	      // and also properly update current view's child view.
	      if (view.keepAlive) {
	        component.$loadingRouteData = loading;
	        var cachedChildView = component._keepAliveRouterView;
	        if (cachedChildView) {
	          view.childView = cachedChildView;
	          component._keepAliveRouterView = null;
	        }
	      }
	    }

	    // cleanup the component in case the transition is aborted
	    // before the component is ever inserted.
	    var cleanup = function cleanup() {
	      component.$destroy();
	    };

	    // actually insert the component and trigger transition
	    var insert = function insert() {
	      if (reuse) {
	        cb && cb();
	        return;
	      }
	      var router = transition.router;
	      if (router._rendered || router._transitionOnLoad) {
	        view.transition(component);
	      } else {
	        // no transition on first render, manual transition
	        /* istanbul ignore if */
	        if (view.setCurrent) {
	          // 0.12 compat
	          view.setCurrent(component);
	        } else {
	          // 1.0
	          view.childVM = component;
	        }
	        component.$before(view.anchor, null, false);
	      }
	      cb && cb();
	    };

	    var afterData = function afterData() {
	      // activate the child view
	      if (view.childView) {
	        activate(view.childView, transition, depth + 1, null, reuse || view.keepAlive);
	      }
	      insert();
	    };

	    // called after activation hook is resolved
	    var afterActivate = function afterActivate() {
	      view.activated = true;
	      if (dataHook && waitForData) {
	        // wait until data loaded to insert
	        loadData(component, transition, dataHook, afterData, cleanup);
	      } else {
	        // load data and insert at the same time
	        if (dataHook) {
	          loadData(component, transition, dataHook);
	        }
	        afterData();
	      }
	    };

	    if (activateHook) {
	      transition.callHooks(activateHook, component, afterActivate, {
	        cleanup: cleanup,
	        postActivate: true
	      });
	    } else {
	      afterActivate();
	    }
	  }

	  /**
	   * Reuse a view, just reload data if necessary.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   */

	  function reuse(view, transition) {
	    var component = view.childVM;
	    var dataHook = getRouteConfig(component, 'data');
	    if (dataHook) {
	      loadData(component, transition, dataHook);
	    }
	  }

	  /**
	   * Asynchronously load and apply data to component.
	   *
	   * @param {Vue} component
	   * @param {Transition} transition
	   * @param {Function} hook
	   * @param {Function} cb
	   * @param {Function} cleanup
	   */

	  function loadData(component, transition, hook, cb, cleanup) {
	    component.$loadingRouteData = true;
	    transition.callHooks(hook, component, function () {
	      component.$loadingRouteData = false;
	      component.$emit('route-data-loaded', component);
	      cb && cb();
	    }, {
	      cleanup: cleanup,
	      postActivate: true,
	      processData: function processData(data) {
	        // handle promise sugar syntax
	        var promises = [];
	        if (isPlainObject(data)) {
	          Object.keys(data).forEach(function (key) {
	            var val = data[key];
	            if (isPromise(val)) {
	              promises.push(val.then(function (resolvedVal) {
	                component.$set(key, resolvedVal);
	              }));
	            } else {
	              component.$set(key, val);
	            }
	          });
	        }
	        if (promises.length) {
	          return promises[0].constructor.all(promises);
	        }
	      }
	    });
	  }

	  /**
	   * Save the child view for a kept-alive view so that
	   * we can restore it when it is switched back to.
	   *
	   * @param {Directive} view
	   */

	  function saveChildView(view) {
	    if (view.keepAlive && view.childVM && view.childView) {
	      view.childVM._keepAliveRouterView = view.childView;
	    }
	    view.childView = null;
	  }

	  /**
	   * Check plain object.
	   *
	   * @param {*} val
	   */

	  function isPlainObject(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }

	  /**
	   * A RouteTransition object manages the pipeline of a
	   * router-view switching process. This is also the object
	   * passed into user route hooks.
	   *
	   * @param {Router} router
	   * @param {Route} to
	   * @param {Route} from
	   */

	  var RouteTransition = (function () {
	    function RouteTransition(router, to, from) {
	      babelHelpers.classCallCheck(this, RouteTransition);

	      this.router = router;
	      this.to = to;
	      this.from = from;
	      this.next = null;
	      this.aborted = false;
	      this.done = false;
	    }

	    /**
	     * Abort current transition and return to previous location.
	     */

	    RouteTransition.prototype.abort = function abort() {
	      if (!this.aborted) {
	        this.aborted = true;
	        // if the root path throws an error during validation
	        // on initial load, it gets caught in an infinite loop.
	        var abortingOnLoad = !this.from.path && this.to.path === '/';
	        if (!abortingOnLoad) {
	          this.router.replace(this.from.path || '/');
	        }
	      }
	    };

	    /**
	     * Abort current transition and redirect to a new location.
	     *
	     * @param {String} path
	     */

	    RouteTransition.prototype.redirect = function redirect(path) {
	      if (!this.aborted) {
	        this.aborted = true;
	        if (typeof path === 'string') {
	          path = mapParams(path, this.to.params, this.to.query);
	        } else {
	          path.params = path.params || this.to.params;
	          path.query = path.query || this.to.query;
	        }
	        this.router.replace(path);
	      }
	    };

	    /**
	     * A router view transition's pipeline can be described as
	     * follows, assuming we are transitioning from an existing
	     * <router-view> chain [Component A, Component B] to a new
	     * chain [Component A, Component C]:
	     *
	     *  A    A
	     *  | => |
	     *  B    C
	     *
	     * 1. Reusablity phase:
	     *   -> canReuse(A, A)
	     *   -> canReuse(B, C)
	     *   -> determine new queues:
	     *      - deactivation: [B]
	     *      - activation: [C]
	     *
	     * 2. Validation phase:
	     *   -> canDeactivate(B)
	     *   -> canActivate(C)
	     *
	     * 3. Activation phase:
	     *   -> deactivate(B)
	     *   -> activate(C)
	     *
	     * Each of these steps can be asynchronous, and any
	     * step can potentially abort the transition.
	     *
	     * @param {Function} cb
	     */

	    RouteTransition.prototype.start = function start(cb) {
	      var transition = this;

	      // determine the queue of views to deactivate
	      var deactivateQueue = [];
	      var view = this.router._rootView;
	      while (view) {
	        deactivateQueue.unshift(view);
	        view = view.childView;
	      }
	      var reverseDeactivateQueue = deactivateQueue.slice().reverse();

	      // determine the queue of route handlers to activate
	      var activateQueue = this.activateQueue = toArray(this.to.matched).map(function (match) {
	        return match.handler;
	      });

	      // 1. Reusability phase
	      var i = undefined,
	          reuseQueue = undefined;
	      for (i = 0; i < reverseDeactivateQueue.length; i++) {
	        if (!canReuse(reverseDeactivateQueue[i], activateQueue[i], transition)) {
	          break;
	        }
	      }
	      if (i > 0) {
	        reuseQueue = reverseDeactivateQueue.slice(0, i);
	        deactivateQueue = reverseDeactivateQueue.slice(i).reverse();
	        activateQueue = activateQueue.slice(i);
	      }

	      // 2. Validation phase
	      transition.runQueue(deactivateQueue, canDeactivate, function () {
	        transition.runQueue(activateQueue, canActivate, function () {
	          transition.runQueue(deactivateQueue, deactivate, function () {
	            // 3. Activation phase

	            // Update router current route
	            transition.router._onTransitionValidated(transition);

	            // trigger reuse for all reused views
	            reuseQueue && reuseQueue.forEach(function (view) {
	              return reuse(view, transition);
	            });

	            // the root of the chain that needs to be replaced
	            // is the top-most non-reusable view.
	            if (deactivateQueue.length) {
	              var _view = deactivateQueue[deactivateQueue.length - 1];
	              var depth = reuseQueue ? reuseQueue.length : 0;
	              activate(_view, transition, depth, cb);
	            } else {
	              cb();
	            }
	          });
	        });
	      });
	    };

	    /**
	     * Asynchronously and sequentially apply a function to a
	     * queue.
	     *
	     * @param {Array} queue
	     * @param {Function} fn
	     * @param {Function} cb
	     */

	    RouteTransition.prototype.runQueue = function runQueue(queue, fn, cb) {
	      var transition = this;
	      step(0);
	      function step(index) {
	        if (index >= queue.length) {
	          cb();
	        } else {
	          fn(queue[index], transition, function () {
	            step(index + 1);
	          });
	        }
	      }
	    };

	    /**
	     * Call a user provided route transition hook and handle
	     * the response (e.g. if the user returns a promise).
	     *
	     * If the user neither expects an argument nor returns a
	     * promise, the hook is assumed to be synchronous.
	     *
	     * @param {Function} hook
	     * @param {*} [context]
	     * @param {Function} [cb]
	     * @param {Object} [options]
	     *                 - {Boolean} expectBoolean
	     *                 - {Boolean} postActive
	     *                 - {Function} processData
	     *                 - {Function} cleanup
	     */

	    RouteTransition.prototype.callHook = function callHook(hook, context, cb) {
	      var _ref = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	      var _ref$expectBoolean = _ref.expectBoolean;
	      var expectBoolean = _ref$expectBoolean === undefined ? false : _ref$expectBoolean;
	      var _ref$postActivate = _ref.postActivate;
	      var postActivate = _ref$postActivate === undefined ? false : _ref$postActivate;
	      var processData = _ref.processData;
	      var cleanup = _ref.cleanup;

	      var transition = this;
	      var nextCalled = false;

	      // abort the transition
	      var abort = function abort() {
	        cleanup && cleanup();
	        transition.abort();
	      };

	      // handle errors
	      var onError = function onError(err) {
	        postActivate ? next() : abort();
	        if (err && !transition.router._suppress) {
	          warn$1('Uncaught error during transition: ');
	          throw err instanceof Error ? err : new Error(err);
	        }
	      };

	      // since promise swallows errors, we have to
	      // throw it in the next tick...
	      var onPromiseError = function onPromiseError(err) {
	        try {
	          onError(err);
	        } catch (e) {
	          setTimeout(function () {
	            throw e;
	          }, 0);
	        }
	      };

	      // advance the transition to the next step
	      var next = function next() {
	        if (nextCalled) {
	          warn$1('transition.next() should be called only once.');
	          return;
	        }
	        nextCalled = true;
	        if (transition.aborted) {
	          cleanup && cleanup();
	          return;
	        }
	        cb && cb();
	      };

	      var nextWithBoolean = function nextWithBoolean(res) {
	        if (typeof res === 'boolean') {
	          res ? next() : abort();
	        } else if (isPromise(res)) {
	          res.then(function (ok) {
	            ok ? next() : abort();
	          }, onPromiseError);
	        } else if (!hook.length) {
	          next();
	        }
	      };

	      var nextWithData = function nextWithData(data) {
	        var res = undefined;
	        try {
	          res = processData(data);
	        } catch (err) {
	          return onError(err);
	        }
	        if (isPromise(res)) {
	          res.then(next, onPromiseError);
	        } else {
	          next();
	        }
	      };

	      // expose a clone of the transition object, so that each
	      // hook gets a clean copy and prevent the user from
	      // messing with the internals.
	      var exposed = {
	        to: transition.to,
	        from: transition.from,
	        abort: abort,
	        next: processData ? nextWithData : next,
	        redirect: function redirect() {
	          transition.redirect.apply(transition, arguments);
	        }
	      };

	      // actually call the hook
	      var res = undefined;
	      try {
	        res = hook.call(context, exposed);
	      } catch (err) {
	        return onError(err);
	      }

	      if (expectBoolean) {
	        // boolean hooks
	        nextWithBoolean(res);
	      } else if (isPromise(res)) {
	        // promise
	        if (processData) {
	          res.then(nextWithData, onPromiseError);
	        } else {
	          res.then(next, onPromiseError);
	        }
	      } else if (processData && isPlainOjbect(res)) {
	        // data promise sugar
	        nextWithData(res);
	      } else if (!hook.length) {
	        next();
	      }
	    };

	    /**
	     * Call a single hook or an array of async hooks in series.
	     *
	     * @param {Array} hooks
	     * @param {*} context
	     * @param {Function} cb
	     * @param {Object} [options]
	     */

	    RouteTransition.prototype.callHooks = function callHooks(hooks, context, cb, options) {
	      var _this = this;

	      if (Array.isArray(hooks)) {
	        this.runQueue(hooks, function (hook, _, next) {
	          if (!_this.aborted) {
	            _this.callHook(hook, context, next, options);
	          }
	        }, cb);
	      } else {
	        this.callHook(hooks, context, cb, options);
	      }
	    };

	    return RouteTransition;
	  })();

	  function isPlainOjbect(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }

	  function toArray(val) {
	    return val ? Array.prototype.slice.call(val) : [];
	  }

	  var internalKeysRE = /^(component|subRoutes|fullPath)$/;

	  /**
	   * Route Context Object
	   *
	   * @param {String} path
	   * @param {Router} router
	   */

	  var Route = function Route(path, router) {
	    var _this = this;

	    babelHelpers.classCallCheck(this, Route);

	    var matched = router._recognizer.recognize(path);
	    if (matched) {
	      // copy all custom fields from route configs
	      [].forEach.call(matched, function (match) {
	        for (var key in match.handler) {
	          if (!internalKeysRE.test(key)) {
	            _this[key] = match.handler[key];
	          }
	        }
	      });
	      // set query and params
	      this.query = matched.queryParams;
	      this.params = [].reduce.call(matched, function (prev, cur) {
	        if (cur.params) {
	          for (var key in cur.params) {
	            prev[key] = cur.params[key];
	          }
	        }
	        return prev;
	      }, {});
	    }
	    // expose path and router
	    this.path = path;
	    // for internal use
	    this.matched = matched || router._notFoundHandler;
	    // internal reference to router
	    Object.defineProperty(this, 'router', {
	      enumerable: false,
	      value: router
	    });
	    // Important: freeze self to prevent observation
	    Object.freeze(this);
	  };

	  function applyOverride (Vue) {
	    var _Vue$util = Vue.util;
	    var extend = _Vue$util.extend;
	    var isArray = _Vue$util.isArray;
	    var defineReactive = _Vue$util.defineReactive;

	    // override Vue's init and destroy process to keep track of router instances
	    var init = Vue.prototype._init;
	    Vue.prototype._init = function (options) {
	      options = options || {};
	      var root = options._parent || options.parent || this;
	      var router = root.$router;
	      var route = root.$route;
	      if (router) {
	        // expose router
	        this.$router = router;
	        router._children.push(this);
	        /* istanbul ignore if */
	        if (this._defineMeta) {
	          // 0.12
	          this._defineMeta('$route', route);
	        } else {
	          // 1.0
	          defineReactive(this, '$route', route);
	        }
	      }
	      init.call(this, options);
	    };

	    var destroy = Vue.prototype._destroy;
	    Vue.prototype._destroy = function () {
	      if (!this._isBeingDestroyed && this.$router) {
	        this.$router._children.$remove(this);
	      }
	      destroy.apply(this, arguments);
	    };

	    // 1.0 only: enable route mixins
	    var strats = Vue.config.optionMergeStrategies;
	    var hooksToMergeRE = /^(data|activate|deactivate)$/;

	    if (strats) {
	      strats.route = function (parentVal, childVal) {
	        if (!childVal) return parentVal;
	        if (!parentVal) return childVal;
	        var ret = {};
	        extend(ret, parentVal);
	        for (var key in childVal) {
	          var a = ret[key];
	          var b = childVal[key];
	          // for data, activate and deactivate, we need to merge them into
	          // arrays similar to lifecycle hooks.
	          if (a && hooksToMergeRE.test(key)) {
	            ret[key] = (isArray(a) ? a : [a]).concat(b);
	          } else {
	            ret[key] = b;
	          }
	        }
	        return ret;
	      };
	    }
	  }

	  function View (Vue) {

	    var _ = Vue.util;
	    var componentDef =
	    // 0.12
	    Vue.directive('_component') ||
	    // 1.0
	    Vue.internalDirectives.component;
	    // <router-view> extends the internal component directive
	    var viewDef = _.extend({}, componentDef);

	    // with some overrides
	    _.extend(viewDef, {

	      _isRouterView: true,

	      bind: function bind() {
	        var route = this.vm.$route;
	        /* istanbul ignore if */
	        if (!route) {
	          warn$1('<router-view> can only be used inside a ' + 'router-enabled app.');
	          return;
	        }
	        // force dynamic directive so v-component doesn't
	        // attempt to build right now
	        this._isDynamicLiteral = true;
	        // finally, init by delegating to v-component
	        componentDef.bind.call(this);

	        // locate the parent view
	        var parentView = undefined;
	        var parent = this.vm;
	        while (parent) {
	          if (parent._routerView) {
	            parentView = parent._routerView;
	            break;
	          }
	          parent = parent.$parent;
	        }
	        if (parentView) {
	          // register self as a child of the parent view,
	          // instead of activating now. This is so that the
	          // child's activate hook is called after the
	          // parent's has resolved.
	          this.parentView = parentView;
	          parentView.childView = this;
	        } else {
	          // this is the root view!
	          var router = route.router;
	          router._rootView = this;
	        }

	        // handle late-rendered view
	        // two possibilities:
	        // 1. root view rendered after transition has been
	        //    validated;
	        // 2. child view rendered after parent view has been
	        //    activated.
	        var transition = route.router._currentTransition;
	        if (!parentView && transition.done || parentView && parentView.activated) {
	          var depth = parentView ? parentView.depth + 1 : 0;
	          activate(this, transition, depth);
	        }
	      },

	      unbind: function unbind() {
	        if (this.parentView) {
	          this.parentView.childView = null;
	        }
	        componentDef.unbind.call(this);
	      }
	    });

	    Vue.elementDirective('router-view', viewDef);
	  }

	  var trailingSlashRE = /\/$/;
	  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	  var queryStringRE = /\?.*$/;

	  // install v-link, which provides navigation support for
	  // HTML5 history mode
	  function Link (Vue) {
	    var _Vue$util = Vue.util;
	    var _bind = _Vue$util.bind;
	    var isObject = _Vue$util.isObject;
	    var addClass = _Vue$util.addClass;
	    var removeClass = _Vue$util.removeClass;

	    var onPriority = Vue.directive('on').priority;
	    var LINK_UPDATE = '__vue-router-link-update__';

	    var activeId = 0;

	    Vue.directive('link-active', {
	      priority: 9999,
	      bind: function bind() {
	        var _this = this;

	        var id = String(activeId++);
	        // collect v-links contained within this element.
	        // we need do this here before the parent-child relationship
	        // gets messed up by terminal directives (if, for, components)
	        var childLinks = this.el.querySelectorAll('[v-link]');
	        for (var i = 0, l = childLinks.length; i < l; i++) {
	          var link = childLinks[i];
	          var existingId = link.getAttribute(LINK_UPDATE);
	          var value = existingId ? existingId + ',' + id : id;
	          // leave a mark on the link element which can be persisted
	          // through fragment clones.
	          link.setAttribute(LINK_UPDATE, value);
	        }
	        this.vm.$on(LINK_UPDATE, this.cb = function (link, path) {
	          if (link.activeIds.indexOf(id) > -1) {
	            link.updateClasses(path, _this.el);
	          }
	        });
	      },
	      unbind: function unbind() {
	        this.vm.$off(LINK_UPDATE, this.cb);
	      }
	    });

	    Vue.directive('link', {
	      priority: onPriority - 2,

	      bind: function bind() {
	        var vm = this.vm;
	        /* istanbul ignore if */
	        if (!vm.$route) {
	          warn$1('v-link can only be used inside a router-enabled app.');
	          return;
	        }
	        this.router = vm.$route.router;
	        // update things when the route changes
	        this.unwatch = vm.$watch('$route', _bind(this.onRouteUpdate, this));
	        // check v-link-active ids
	        var activeIds = this.el.getAttribute(LINK_UPDATE);
	        if (activeIds) {
	          this.el.removeAttribute(LINK_UPDATE);
	          this.activeIds = activeIds.split(',');
	        }
	        // no need to handle click if link expects to be opened
	        // in a new window/tab.
	        /* istanbul ignore if */
	        if (this.el.tagName === 'A' && this.el.getAttribute('target') === '_blank') {
	          return;
	        }
	        // handle click
	        this.handler = _bind(this.onClick, this);
	        this.el.addEventListener('click', this.handler);
	      },

	      update: function update(target) {
	        this.target = target;
	        if (isObject(target)) {
	          this.append = target.append;
	          this.exact = target.exact;
	          this.prevActiveClass = this.activeClass;
	          this.activeClass = target.activeClass;
	        }
	        this.onRouteUpdate(this.vm.$route);
	      },

	      onClick: function onClick(e) {
	        // don't redirect with control keys
	        /* istanbul ignore if */
	        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
	        // don't redirect when preventDefault called
	        /* istanbul ignore if */
	        if (e.defaultPrevented) return;
	        // don't redirect on right click
	        /* istanbul ignore if */
	        if (e.button !== 0) return;

	        var target = this.target;
	        if (target) {
	          // v-link with expression, just go
	          e.preventDefault();
	          this.router.go(target);
	        } else {
	          // no expression, delegate for an <a> inside
	          var el = e.target;
	          while (el.tagName !== 'A' && el !== this.el) {
	            el = el.parentNode;
	          }
	          if (el.tagName === 'A' && sameOrigin(el)) {
	            e.preventDefault();
	            var path = el.pathname;
	            if (this.router.history.root) {
	              path = path.replace(this.router.history.rootRE, '');
	            }
	            this.router.go({
	              path: path,
	              replace: target && target.replace,
	              append: target && target.append
	            });
	          }
	        }
	      },

	      onRouteUpdate: function onRouteUpdate(route) {
	        // router.stringifyPath is dependent on current route
	        // and needs to be called again whenver route changes.
	        var newPath = this.router.stringifyPath(this.target);
	        if (this.path !== newPath) {
	          this.path = newPath;
	          this.updateActiveMatch();
	          this.updateHref();
	        }
	        if (this.activeIds) {
	          this.vm.$emit(LINK_UPDATE, this, route.path);
	        } else {
	          this.updateClasses(route.path, this.el);
	        }
	      },

	      updateActiveMatch: function updateActiveMatch() {
	        this.activeRE = this.path && !this.exact ? new RegExp('^' + this.path.replace(/\/$/, '').replace(queryStringRE, '').replace(regexEscapeRE, '\\$&') + '(\\/|$)') : null;
	      },

	      updateHref: function updateHref() {
	        if (this.el.tagName !== 'A') {
	          return;
	        }
	        var path = this.path;
	        var router = this.router;
	        var isAbsolute = path.charAt(0) === '/';
	        // do not format non-hash relative paths
	        var href = path && (router.mode === 'hash' || isAbsolute) ? router.history.formatPath(path, this.append) : path;
	        if (href) {
	          this.el.href = href;
	        } else {
	          this.el.removeAttribute('href');
	        }
	      },

	      updateClasses: function updateClasses(path, el) {
	        var activeClass = this.activeClass || this.router._linkActiveClass;
	        // clear old class
	        if (this.prevActiveClass && this.prevActiveClass !== activeClass) {
	          toggleClasses(el, this.prevActiveClass, removeClass);
	        }
	        // remove query string before matching
	        var dest = this.path.replace(queryStringRE, '');
	        path = path.replace(queryStringRE, '');
	        // add new class
	        if (this.exact) {
	          if (dest === path ||
	          // also allow additional trailing slash
	          dest.charAt(dest.length - 1) !== '/' && dest === path.replace(trailingSlashRE, '')) {
	            toggleClasses(el, activeClass, addClass);
	          } else {
	            toggleClasses(el, activeClass, removeClass);
	          }
	        } else {
	          if (this.activeRE && this.activeRE.test(path)) {
	            toggleClasses(el, activeClass, addClass);
	          } else {
	            toggleClasses(el, activeClass, removeClass);
	          }
	        }
	      },

	      unbind: function unbind() {
	        this.el.removeEventListener('click', this.handler);
	        this.unwatch && this.unwatch();
	      }
	    });

	    function sameOrigin(link) {
	      return link.protocol === location.protocol && link.hostname === location.hostname && link.port === location.port;
	    }

	    // this function is copied from v-bind:class implementation until
	    // we properly expose it...
	    function toggleClasses(el, key, fn) {
	      key = key.trim();
	      if (key.indexOf(' ') === -1) {
	        fn(el, key);
	        return;
	      }
	      var keys = key.split(/\s+/);
	      for (var i = 0, l = keys.length; i < l; i++) {
	        fn(el, keys[i]);
	      }
	    }
	  }

	  var historyBackends = {
	    abstract: AbstractHistory,
	    hash: HashHistory,
	    html5: HTML5History
	  };

	  // late bind during install
	  var Vue = undefined;

	  /**
	   * Router constructor
	   *
	   * @param {Object} [options]
	   */

	  var Router = (function () {
	    function Router() {
	      var _this = this;

	      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	      var _ref$hashbang = _ref.hashbang;
	      var hashbang = _ref$hashbang === undefined ? true : _ref$hashbang;
	      var _ref$abstract = _ref.abstract;
	      var abstract = _ref$abstract === undefined ? false : _ref$abstract;
	      var _ref$history = _ref.history;
	      var history = _ref$history === undefined ? false : _ref$history;
	      var _ref$saveScrollPosition = _ref.saveScrollPosition;
	      var saveScrollPosition = _ref$saveScrollPosition === undefined ? false : _ref$saveScrollPosition;
	      var _ref$transitionOnLoad = _ref.transitionOnLoad;
	      var transitionOnLoad = _ref$transitionOnLoad === undefined ? false : _ref$transitionOnLoad;
	      var _ref$suppressTransitionError = _ref.suppressTransitionError;
	      var suppressTransitionError = _ref$suppressTransitionError === undefined ? false : _ref$suppressTransitionError;
	      var _ref$root = _ref.root;
	      var root = _ref$root === undefined ? null : _ref$root;
	      var _ref$linkActiveClass = _ref.linkActiveClass;
	      var linkActiveClass = _ref$linkActiveClass === undefined ? 'v-link-active' : _ref$linkActiveClass;
	      babelHelpers.classCallCheck(this, Router);

	      /* istanbul ignore if */
	      if (!Router.installed) {
	        throw new Error('Please install the Router with Vue.use() before ' + 'creating an instance.');
	      }

	      // Vue instances
	      this.app = null;
	      this._children = [];

	      // route recognizer
	      this._recognizer = new RouteRecognizer();
	      this._guardRecognizer = new RouteRecognizer();

	      // state
	      this._started = false;
	      this._startCb = null;
	      this._currentRoute = {};
	      this._currentTransition = null;
	      this._previousTransition = null;
	      this._notFoundHandler = null;
	      this._notFoundRedirect = null;
	      this._beforeEachHooks = [];
	      this._afterEachHooks = [];

	      // trigger transition on initial render?
	      this._rendered = false;
	      this._transitionOnLoad = transitionOnLoad;

	      // history mode
	      this._root = root;
	      this._abstract = abstract;
	      this._hashbang = hashbang;

	      // check if HTML5 history is available
	      var hasPushState = typeof window !== 'undefined' && window.history && window.history.pushState;
	      this._history = history && hasPushState;
	      this._historyFallback = history && !hasPushState;

	      // create history object
	      var inBrowser = Vue.util.inBrowser;
	      this.mode = !inBrowser || this._abstract ? 'abstract' : this._history ? 'html5' : 'hash';

	      var History = historyBackends[this.mode];
	      this.history = new History({
	        root: root,
	        hashbang: this._hashbang,
	        onChange: function onChange(path, state, anchor) {
	          _this._match(path, state, anchor);
	        }
	      });

	      // other options
	      this._saveScrollPosition = saveScrollPosition;
	      this._linkActiveClass = linkActiveClass;
	      this._suppress = suppressTransitionError;
	    }

	    /**
	     * Allow directly passing components to a route
	     * definition.
	     *
	     * @param {String} path
	     * @param {Object} handler
	     */

	    // API ===================================================

	    /**
	    * Register a map of top-level paths.
	    *
	    * @param {Object} map
	    */

	    Router.prototype.map = function map(_map) {
	      for (var route in _map) {
	        this.on(route, _map[route]);
	      }
	      return this;
	    };

	    /**
	     * Register a single root-level path
	     *
	     * @param {String} rootPath
	     * @param {Object} handler
	     *                 - {String} component
	     *                 - {Object} [subRoutes]
	     *                 - {Boolean} [forceRefresh]
	     *                 - {Function} [before]
	     *                 - {Function} [after]
	     */

	    Router.prototype.on = function on(rootPath, handler) {
	      if (rootPath === '*') {
	        this._notFound(handler);
	      } else {
	        this._addRoute(rootPath, handler, []);
	      }
	      return this;
	    };

	    /**
	     * Set redirects.
	     *
	     * @param {Object} map
	     */

	    Router.prototype.redirect = function redirect(map) {
	      for (var path in map) {
	        this._addRedirect(path, map[path]);
	      }
	      return this;
	    };

	    /**
	     * Set aliases.
	     *
	     * @param {Object} map
	     */

	    Router.prototype.alias = function alias(map) {
	      for (var path in map) {
	        this._addAlias(path, map[path]);
	      }
	      return this;
	    };

	    /**
	     * Set global before hook.
	     *
	     * @param {Function} fn
	     */

	    Router.prototype.beforeEach = function beforeEach(fn) {
	      this._beforeEachHooks.push(fn);
	      return this;
	    };

	    /**
	     * Set global after hook.
	     *
	     * @param {Function} fn
	     */

	    Router.prototype.afterEach = function afterEach(fn) {
	      this._afterEachHooks.push(fn);
	      return this;
	    };

	    /**
	     * Navigate to a given path.
	     * The path can be an object describing a named path in
	     * the format of { name: '...', params: {}, query: {}}
	     * The path is assumed to be already decoded, and will
	     * be resolved against root (if provided)
	     *
	     * @param {String|Object} path
	     * @param {Boolean} [replace]
	     */

	    Router.prototype.go = function go(path) {
	      var replace = false;
	      var append = false;
	      if (Vue.util.isObject(path)) {
	        replace = path.replace;
	        append = path.append;
	      }
	      path = this.stringifyPath(path);
	      if (path) {
	        this.history.go(path, replace, append);
	      }
	    };

	    /**
	     * Short hand for replacing current path
	     *
	     * @param {String} path
	     */

	    Router.prototype.replace = function replace(path) {
	      if (typeof path === 'string') {
	        path = { path: path };
	      }
	      path.replace = true;
	      this.go(path);
	    };

	    /**
	     * Start the router.
	     *
	     * @param {VueConstructor} App
	     * @param {String|Element} container
	     * @param {Function} [cb]
	     */

	    Router.prototype.start = function start(App, container, cb) {
	      /* istanbul ignore if */
	      if (this._started) {
	        warn$1('already started.');
	        return;
	      }
	      this._started = true;
	      this._startCb = cb;
	      if (!this.app) {
	        /* istanbul ignore if */
	        if (!App || !container) {
	          throw new Error('Must start vue-router with a component and a ' + 'root container.');
	        }
	        /* istanbul ignore if */
	        if (App instanceof Vue) {
	          throw new Error('Must start vue-router with a component, not a ' + 'Vue instance.');
	        }
	        this._appContainer = container;
	        var Ctor = this._appConstructor = typeof App === 'function' ? App : Vue.extend(App);
	        // give it a name for better debugging
	        Ctor.options.name = Ctor.options.name || 'RouterApp';
	      }

	      // handle history fallback in browsers that do not
	      // support HTML5 history API
	      if (this._historyFallback) {
	        var _location = window.location;
	        var _history = new HTML5History({ root: this._root });
	        var path = _history.root ? _location.pathname.replace(_history.rootRE, '') : _location.pathname;
	        if (path && path !== '/') {
	          _location.assign((_history.root || '') + '/' + this.history.formatPath(path) + _location.search);
	          return;
	        }
	      }

	      this.history.start();
	    };

	    /**
	     * Stop listening to route changes.
	     */

	    Router.prototype.stop = function stop() {
	      this.history.stop();
	      this._started = false;
	    };

	    /**
	     * Normalize named route object / string paths into
	     * a string.
	     *
	     * @param {Object|String|Number} path
	     * @return {String}
	     */

	    Router.prototype.stringifyPath = function stringifyPath(path) {
	      var generatedPath = '';
	      if (path && typeof path === 'object') {
	        if (path.name) {
	          var extend = Vue.util.extend;
	          var currentParams = this._currentTransition && this._currentTransition.to.params;
	          var targetParams = path.params || {};
	          var params = currentParams ? extend(extend({}, currentParams), targetParams) : targetParams;
	          generatedPath = encodeURI(this._recognizer.generate(path.name, params));
	        } else if (path.path) {
	          generatedPath = encodeURI(path.path);
	        }
	        if (path.query) {
	          // note: the generated query string is pre-URL-encoded by the recognizer
	          var query = this._recognizer.generateQueryString(path.query);
	          if (generatedPath.indexOf('?') > -1) {
	            generatedPath += '&' + query.slice(1);
	          } else {
	            generatedPath += query;
	          }
	        }
	      } else {
	        generatedPath = encodeURI(path ? path + '' : '');
	      }
	      return generatedPath;
	    };

	    // Internal methods ======================================

	    /**
	    * Add a route containing a list of segments to the internal
	    * route recognizer. Will be called recursively to add all
	    * possible sub-routes.
	    *
	    * @param {String} path
	    * @param {Object} handler
	    * @param {Array} segments
	    */

	    Router.prototype._addRoute = function _addRoute(path, handler, segments) {
	      guardComponent(path, handler);
	      handler.path = path;
	      handler.fullPath = (segments.reduce(function (path, segment) {
	        return path + segment.path;
	      }, '') + path).replace('//', '/');
	      segments.push({
	        path: path,
	        handler: handler
	      });
	      this._recognizer.add(segments, {
	        as: handler.name
	      });
	      // add sub routes
	      if (handler.subRoutes) {
	        for (var subPath in handler.subRoutes) {
	          // recursively walk all sub routes
	          this._addRoute(subPath, handler.subRoutes[subPath],
	          // pass a copy in recursion to avoid mutating
	          // across branches
	          segments.slice());
	        }
	      }
	    };

	    /**
	     * Set the notFound route handler.
	     *
	     * @param {Object} handler
	     */

	    Router.prototype._notFound = function _notFound(handler) {
	      guardComponent('*', handler);
	      this._notFoundHandler = [{ handler: handler }];
	    };

	    /**
	     * Add a redirect record.
	     *
	     * @param {String} path
	     * @param {String} redirectPath
	     */

	    Router.prototype._addRedirect = function _addRedirect(path, redirectPath) {
	      if (path === '*') {
	        this._notFoundRedirect = redirectPath;
	      } else {
	        this._addGuard(path, redirectPath, this.replace);
	      }
	    };

	    /**
	     * Add an alias record.
	     *
	     * @param {String} path
	     * @param {String} aliasPath
	     */

	    Router.prototype._addAlias = function _addAlias(path, aliasPath) {
	      this._addGuard(path, aliasPath, this._match);
	    };

	    /**
	     * Add a path guard.
	     *
	     * @param {String} path
	     * @param {String} mappedPath
	     * @param {Function} handler
	     */

	    Router.prototype._addGuard = function _addGuard(path, mappedPath, _handler) {
	      var _this2 = this;

	      this._guardRecognizer.add([{
	        path: path,
	        handler: function handler(match, query) {
	          var realPath = mapParams(mappedPath, match.params, query);
	          _handler.call(_this2, realPath);
	        }
	      }]);
	    };

	    /**
	     * Check if a path matches any redirect records.
	     *
	     * @param {String} path
	     * @return {Boolean} - if true, will skip normal match.
	     */

	    Router.prototype._checkGuard = function _checkGuard(path) {
	      var matched = this._guardRecognizer.recognize(path, true);
	      if (matched) {
	        matched[0].handler(matched[0], matched.queryParams);
	        return true;
	      } else if (this._notFoundRedirect) {
	        matched = this._recognizer.recognize(path);
	        if (!matched) {
	          this.replace(this._notFoundRedirect);
	          return true;
	        }
	      }
	    };

	    /**
	     * Match a URL path and set the route context on vm,
	     * triggering view updates.
	     *
	     * @param {String} path
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */

	    Router.prototype._match = function _match(path, state, anchor) {
	      var _this3 = this;

	      if (this._checkGuard(path)) {
	        return;
	      }

	      var currentRoute = this._currentRoute;
	      var currentTransition = this._currentTransition;

	      if (currentTransition) {
	        if (currentTransition.to.path === path) {
	          // do nothing if we have an active transition going to the same path
	          return;
	        } else if (currentRoute.path === path) {
	          // We are going to the same path, but we also have an ongoing but
	          // not-yet-validated transition. Abort that transition and reset to
	          // prev transition.
	          currentTransition.aborted = true;
	          this._currentTransition = this._prevTransition;
	          return;
	        } else {
	          // going to a totally different path. abort ongoing transition.
	          currentTransition.aborted = true;
	        }
	      }

	      // construct new route and transition context
	      var route = new Route(path, this);
	      var transition = new RouteTransition(this, route, currentRoute);

	      // current transition is updated right now.
	      // however, current route will only be updated after the transition has
	      // been validated.
	      this._prevTransition = currentTransition;
	      this._currentTransition = transition;

	      if (!this.app) {
	        (function () {
	          // initial render
	          var router = _this3;
	          _this3.app = new _this3._appConstructor({
	            el: _this3._appContainer,
	            created: function created() {
	              this.$router = router;
	            },
	            _meta: {
	              $route: route
	            }
	          });
	        })();
	      }

	      // check global before hook
	      var beforeHooks = this._beforeEachHooks;
	      var startTransition = function startTransition() {
	        transition.start(function () {
	          _this3._postTransition(route, state, anchor);
	        });
	      };

	      if (beforeHooks.length) {
	        transition.runQueue(beforeHooks, function (hook, _, next) {
	          if (transition === _this3._currentTransition) {
	            transition.callHook(hook, null, next, {
	              expectBoolean: true
	            });
	          }
	        }, startTransition);
	      } else {
	        startTransition();
	      }

	      if (!this._rendered && this._startCb) {
	        this._startCb.call(null);
	      }

	      // HACK:
	      // set rendered to true after the transition start, so
	      // that components that are acitvated synchronously know
	      // whether it is the initial render.
	      this._rendered = true;
	    };

	    /**
	     * Set current to the new transition.
	     * This is called by the transition object when the
	     * validation of a route has succeeded.
	     *
	     * @param {Transition} transition
	     */

	    Router.prototype._onTransitionValidated = function _onTransitionValidated(transition) {
	      // set current route
	      var route = this._currentRoute = transition.to;
	      // update route context for all children
	      if (this.app.$route !== route) {
	        this.app.$route = route;
	        this._children.forEach(function (child) {
	          child.$route = route;
	        });
	      }
	      // call global after hook
	      if (this._afterEachHooks.length) {
	        this._afterEachHooks.forEach(function (hook) {
	          return hook.call(null, {
	            to: transition.to,
	            from: transition.from
	          });
	        });
	      }
	      this._currentTransition.done = true;
	    };

	    /**
	     * Handle stuff after the transition.
	     *
	     * @param {Route} route
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */

	    Router.prototype._postTransition = function _postTransition(route, state, anchor) {
	      // handle scroll positions
	      // saved scroll positions take priority
	      // then we check if the path has an anchor
	      var pos = state && state.pos;
	      if (pos && this._saveScrollPosition) {
	        Vue.nextTick(function () {
	          window.scrollTo(pos.x, pos.y);
	        });
	      } else if (anchor) {
	        Vue.nextTick(function () {
	          var el = document.getElementById(anchor.slice(1));
	          if (el) {
	            window.scrollTo(window.scrollX, el.offsetTop);
	          }
	        });
	      }
	    };

	    return Router;
	  })();

	  function guardComponent(path, handler) {
	    var comp = handler.component;
	    if (Vue.util.isPlainObject(comp)) {
	      comp = handler.component = Vue.extend(comp);
	    }
	    /* istanbul ignore if */
	    if (typeof comp !== 'function') {
	      handler.component = null;
	      warn$1('invalid component for route "' + path + '".');
	    }
	  }

	  /* Installation */

	  Router.installed = false;

	  /**
	   * Installation interface.
	   * Install the necessary directives.
	   */

	  Router.install = function (externalVue) {
	    /* istanbul ignore if */
	    if (Router.installed) {
	      warn$1('already installed.');
	      return;
	    }
	    Vue = externalVue;
	    applyOverride(Vue);
	    View(Vue);
	    Link(Vue);
	    exports$1.Vue = Vue;
	    Router.installed = true;
	  };

	  // auto install
	  /* istanbul ignore if */
	  if (typeof window !== 'undefined' && window.Vue) {
	    window.Vue.use(Router);
	  }

	  return Router;

	}));

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(4)
	__vue_script__ = __webpack_require__(8)
	__vue_template__ = __webpack_require__(27)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\WorkSpace\\Demo\\webpack-vue\\vue1\\src\\components\\app.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-81a80ef8&file=app.vue!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./app.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-81a80ef8&file=app.vue!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./app.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "\r\n    .c1{\r\n       background: pink;\r\n    }\r\n    .c1 h1{\r\n        color: red;\r\n    }\r\n    .c1 a{\r\n        cursor: pointer;\r\n    }\r\n", ""]);

	// exports


/***/ },
/* 6 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _topBar = __webpack_require__(9);

	var _topBar2 = _interopRequireDefault(_topBar);

	var _navList = __webpack_require__(17);

	var _navList2 = _interopRequireDefault(_navList);

	var _goodDetail = __webpack_require__(22);

	var _goodDetail2 = _interopRequireDefault(_goodDetail);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// es6

	// 导航部分
	exports.default = {
	  el: '#app11',
	  //el : 'body',
	  // data : function(){},下面是es6的写法
	  components: {
	    navList: _navList2.default,
	    goodDetail: _goodDetail2.default,
	    topBar: _topBar2.default
	  },
	  data: function data() {
	    return {
	      goodListData: [{ name: '袜子', price: 30, stock: 100 }, { name: '裤子', price: 350, stock: 18 }, { name: '棉被', price: 438, stock: 560 }],
	      msg: 'asas',
	      name: '张三',
	      age: 23,
	      avatarUrl: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png',
	      // 父组件的商品数据
	      goodData: {
	        name: '帽子',
	        price: 532,
	        stock: 21
	      }
	    };
	  },

	  methods: {
	    goList: function goList() {
	      alert('查看列表');
	      this.$route.router.go({ name: 'list' });
	    },
	    goIndex: function goIndex() {
	      alert('返回主页');
	      this.$route.router.go({ name: 'index' });
	    },
	    goBye: function goBye() {
	      this.$route.router.go({ name: 'bye' });
	    }
	  },
	  // 捕获子组件 $dispatch出来的事件
	  events: {
	    event1: function event1(v) {
	      alert('event1 - event1 ' + v);
	    }
	  },
	  ready: function ready() {}
	  //console.log(this.$data.goodListData);


	  // <style lang="less" rel="stylesheet/less" type="text/less">

	};
	// </script>
	//
	// <style lang="">
	//     .c1{
	//        background: pink;
	//     }
	//     .c1 h1{
	//         color: red;
	//     }
	//     .c1 a{
	//         cursor: pointer;
	//     }
	// </style>

	// 商品详情
	//
	//
	//
	// <!--<template lang='jade'>-->
	// <template id="app11">
	//    <div class="c1">
	//
	//       <!-- 头部部分 -->
	//       <top-bar></top-bar>
	//
	//       <!-- 对于名字比较长的 .vue文件，文件名字命名用驼峰，在 html中该标签用横杠 -->
	//
	//       <!-- 导航部分 -->
	//       <nav-list></nav-list>
	//
	//       <!--
	//       <h2>这里pink内的是src/components/app.vue模板中的内容</h2>
	//       <h1>姓名 ： {{name}}</h1>
	//       <h1>年龄 ： {{age}}</h1>
	//       <h1>头像：
	//       <img width="200" title="头像" v-attr="src : " src="{{avatarUrl}}"/>
	//       </h1>
	//       -->
	//       <!--<a v-bind:href="{ name : 'list' }">v-link查看列表</a>-->
	//       <!--<a v-link="{ name : 'index' }">返回主页</a>-->
	//
	//       <!--
	//       <button @click="goList">$route.router.go查看路由</button>
	//       <br/>
	//       <a class="less-class-test" href="javascript:;" @click="goList">list.vue查看列表</a>
	//       <br/>
	//       <a href="javascript:;" @click="goIndex">index.vue返回主页</a>
	//       <br/>
	//       <a href="javascript:;" @click="goBye">bye.vue再见页面</a>
	//       <br/>
	//       <a v-link="{name : 'hello'}">嵌套路由hello111</a>
	//       <a v-link="{name : 'list'}">嵌套路由list</a>
	//       <a v-link="{path : '/bye'}">嵌套路由bye</a>
	//       <br/>
	//       -->
	//
	//
	//       <router-view></router-view>
	//       <!--<hello></hello>-->
	//        <!--<good-detail :good-list-data="msg">-->
	//
	//
	//        <!--
	//        <good-detail v-for="good in goodListData"
	//                 :good-list-data="good"
	//                 :click-data="good"
	//                >
	//        </good-detail>
	//        -->
	//
	//    </div>
	// </template>
	//
	//
	// <script type="text/ecmascript-6">
	// 头部部分

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(10)
	__vue_script__ = __webpack_require__(15)
	__vue_template__ = __webpack_require__(16)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\WorkSpace\\Demo\\webpack-vue\\vue1\\src\\components\\topBar.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-69015deb&file=topBar.vue!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./topBar.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-69015deb&file=topBar.vue!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./topBar.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "\r\n    .top-bar-wrap1{\r\n        position: relative;\r\n        width: 640px;\r\n        height: 60px;\r\n        background-image: url(" + __webpack_require__(12) + ");\r\n        background-repeat: no-repeat;\r\n        background-size: 100% 100%;\r\n    }\r\n    .logo-link{\r\n        position: absolute;\r\n        display: block;\r\n        width: 130px;\r\n        height: 50px;\r\n        top: 5px;\r\n        left: 50px;\r\n        background-image: url(" + __webpack_require__(13) + ");\r\n        background-repeat: no-repeat;\r\n        background-size: 100% 100%;\r\n    }\r\n    .login-sign-avatar-wrap{\r\n        position: absolute;\r\n        top: 0;\r\n        right: 0;\r\n        width: 180px;\r\n        height: 60px;\r\n        line-height: 60px;\r\n        text-align: center;\r\n    }\r\n    .common-a{\r\n        display: block;\r\n        float: left;\r\n        width: 52px;\r\n        height: 60px;\r\n        margin-right: 5px;\r\n        font-size: 22px;\r\n        color: #fff;\r\n        font-weight: normal;\r\n        /*border: 1px solid #000;*/\r\n    }\r\n    .head{\r\n        background-image: url(" + __webpack_require__(14) + ");\r\n        background-size: 60% 54%;\r\n        background-repeat: no-repeat;\r\n        background-position: 42% 40%;\r\n    }\r\n\r\n", ""]);

	// exports


/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAABYCAIAAADqXdEfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA/RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjVCMjA4OTI0OTNCRkRCMTE5MTRBODU5MEQzMTUwOEM4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjRCRjI4NkM2OUE5QzExRTNCODY4OUQ5QUMyNUNEQ0U0IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjRCRjI4NkM1OUE5QzExRTNCODY4OUQ5QUMyNUNEQ0U0IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzQgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk4QUVEOUE4MTI5QUUzMTFBQUZDQkZFOEY5M0M4RjNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkE5QUE4RTVCMjk5QUUzMTFCNDMzOEFFMzJENjY2NUFFIi8+IDxkYzp0aXRsZT4gPHJkZjpBbHQ+IDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+5oiR55qE57KJ5LidICvlhbPms6g8L3JkZjpsaT4gPC9yZGY6QWx0PiA8L2RjOnRpdGxlPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Phhh0nQAAEVKSURBVHja7H3tjmw7z1ScnqsACbgc/iAhgbgNhEBcHbfFv1kp9vRK7Cona3XP/jjnPCLR8+53zkz3+kgcxy6XbfuP/+f/lj322GOPPfbY468ddU/BHnvssccee+wDeI899thjjz32AbzHHnvssccee+wDeI899thjjz32AbzHHnvssccee+wDeI899thjjz32AbzHHnvssccee+wDeI899thjjz32AbzHHnvssccee+wDeI899thjjz32AbzHHnvsscce+wDeY4899thjjz32AbzHHnvsscce+wDeY4899thjjz32AbzHHnvsscce+wDeY4899thjjz32AbzHHnvsscce+wDeY4899thjjz32AbzHHnvsscce+wDeY4899thjj30A77HHHnvsscce+wDeY4899thjj30A77HHHnvsscce+wDeY4899thjj30A77HHHnvsscce+wDeY4899thjj30A77HHHnvsscce+wDeY4899thjj79xfOwp2GOPPfb4FxpmP/9dYM/f9oD32GOPPfb4/tH7K6cvX+EXr7PHb/KAt0G0xx577PH/1QD9u8ffeABjL8Iee+yxxz/V5Z3Pzd9x3eelnhffoPT2gPfYY4899piO3j+vn/2I3yfxXz92DHiPPfbYY489/h4PeJs9e+yxxx7/er7vm0SqN3W8bT/4rz+A92zvsccee/xTzt3bk/cnQ8L2nfPYvnds77E94D322GOPPd4b+K0f2+OXDuA99thjjz3+Ge7vdz/wEoTGjau9j9i//QCGL0L7VUrW8gJIIjJ/6L374g1R+5XP/+Q1+eGfP9+87/0jLf96NTf9w28vGS726p+Ypd8lQPiVB24F9Y1Pfkfmv269XOLvPl77S7iPr+5yPqr/W35NEvDeSWB/96zcPMb7e+p9IfyVV/qJvXm1ZS4/j9sv4sW7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"

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAA6CAYAAABS36B3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA/RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjVCMjA4OTI0OTNCRkRCMTE5MTRBODU5MEQzMTUwOEM4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjIwMTdEMUM1OUE5RDExRTNCRjYyOURGMzc5NkJERDRFIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjIwMTdEMUM0OUE5RDExRTNCRjYyOURGMzc5NkJERDRFIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzQgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk4QUVEOUE4MTI5QUUzMTFBQUZDQkZFOEY5M0M4RjNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkE5QUE4RTVCMjk5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"

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAqCAYAAAA0yJLWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA/RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjVCMjA4OTI0OTNCRkRCMTE5MTRBODU5MEQzMTUwOEM4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkVDRjI2ODUzOUFBNDExRTM5Nzc1QjhEMkI3QjZDRTMyIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkVDRjI2ODUyOUFBNDExRTM5Nzc1QjhEMkI3QjZDRTMyIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzQgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk4QUVEOUE4MTI5QUUzMTFBQUZDQkZFOEY5M0M4RjNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkE5QUE4RTVCMjk5QUUzMTFCNDMzOEFFMzJENjY2NUFFIi8+IDxkYzp0aXRsZT4gPHJkZjpBbHQ+IDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+5oiR55qE57KJ5LidICvlhbPms6g8L3JkZjpsaT4gPC9yZGY6QWx0PiA8L2RjOnRpdGxlPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvaxxK4AAAIsSURBVHjazJj9dcIgEMAxCyQbxA3IBrqBbpBukBHsBtYJdAO7QdwgbpA6QXSCFPqOviuPAEdAe+/d4w/x+HHAfWQxjiMLkFLoVugatEC/3YVehX6C3sjWJRRBS6HHkSZH+J/3OhSgWuiAFmuFNkK5No/D3BbNHWBuVKg9WqATuiJ4ttW8FgVqh4zuicettKGAuYytkLE6EAgfv5LNHKie4naC1+Udy0OglMt7m4EAVRvdhUD1kY5t6hgHKhT3cXMEbxlfcTYRU9cwXoQ+WHy5aOv8kSkolTauLI0ouxUFSu3gKzFUQYFiiaGskjl2sk60bhECdYdxmQiq0i68F9Qlsae21uthiSWDLZbM0BLlwJwSpxhUjVLeI3vpA8bTZAz03FGsVLNBNsvQKgFndT4TiKMrsZ9b5LURwDBQ58qnPgZzMDS6Sg5LCeQNRKnRpaEzAuthsdIyv0bVgGo0vCqOBbHvq+H1FFr0v2vRutICsXzBh1R9Xw7HNxD6vh217/P1VAm7fTOkoysaK/DU0pCiTmDjFsNTumc6x33CcU5vSr0eCuXVtTNSDtfgupDgiePK4OrTiBF9cMU9n0DHIydkfAJGMNsfukSdjAkst0GdE7dWU2DtFBTO4DwxkOmq1CaoPjC3zdVGPx1TK50/GQo7pMFQ7Yu8pDulV2mmRAX8MujD6XzJgeEnmWfad4NXADGo1X87qMzVgz1R/jVUIe8UhyM8sNdLI+/WtwADAE71HpgqtRryAAAAAElFTkSuQmCC"

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template id="topBar">
	//   <div class="top-bar-wrap1">
	//       <a href="" class="logo-link"></a>
	//
	//       <div class="login-sign-avatar-wrap">
	//           <a class="common-a" href="">登录</a>
	//           <a class="common-a" href="">注册</a>
	//           <a class="common-a head" href=""></a>
	//       </div>
	//
	//   </div>
	// </template>
	//
	// <script type="text/ecmascript-6">
	//import hello from './hello.vue';
	exports.default = {
	  el: '#topBar',
	  data: function data() {
	    return {};
	  }
	};
	// </script>
	//
	// <style lang="">
	//     .top-bar-wrap1{
	//         position: relative;
	//         width: 640px;
	//         height: 60px;
	//         background-image: url("../static/imgs/hbg1.png");
	//         background-repeat: no-repeat;
	//         background-size: 100% 100%;
	//     }
	//     .logo-link{
	//         position: absolute;
	//         display: block;
	//         width: 130px;
	//         height: 50px;
	//         top: 5px;
	//         left: 50px;
	//         background-image: url("../static/imgs/logo.png");
	//         background-repeat: no-repeat;
	//         background-size: 100% 100%;
	//     }
	//     .login-sign-avatar-wrap{
	//         position: absolute;
	//         top: 0;
	//         right: 0;
	//         width: 180px;
	//         height: 60px;
	//         line-height: 60px;
	//         text-align: center;
	//     }
	//     .common-a{
	//         display: block;
	//         float: left;
	//         width: 52px;
	//         height: 60px;
	//         margin-right: 5px;
	//         font-size: 22px;
	//         color: #fff;
	//         font-weight: normal;
	//         /*border: 1px solid #000;*/
	//     }
	//     .head{
	//         background-image: url("../static/imgs/head.png");
	//         background-size: 60% 54%;
	//         background-repeat: no-repeat;
	//         background-position: 42% 40%;
	//     }
	//
	// </style>

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "\r\n  <div class=\"top-bar-wrap1\">\r\n      <a href=\"\" class=\"logo-link\"></a>\r\n\r\n      <div class=\"login-sign-avatar-wrap\">\r\n          <a class=\"common-a\" href=\"\">登录</a>\r\n          <a class=\"common-a\" href=\"\">注册</a>\r\n          <a class=\"common-a head\" href=\"\"></a>\r\n      </div>\r\n\r\n  </div>\r\n";

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(18)
	__vue_script__ = __webpack_require__(20)
	__vue_template__ = __webpack_require__(21)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\WorkSpace\\Demo\\webpack-vue\\vue1\\src\\components\\navList.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(19);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-12d0c544&file=navList.vue&scoped=true!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./navList.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-12d0c544&file=navList.vue&scoped=true!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./navList.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "*[_v-12d0c544] {\n  list-style: none;\n}\n.nav-list-wrap[_v-12d0c544] {\n  width: 640px;\n  height: 50px;\n  border-top: 2px solid #000;\n  border-bottom: 2px solid #000;\n  background: #21598a;\n  overflow: hidden;\n  text-align: center;\n  box-sizing: border-box;\n}\n.nav-list-wrap .nav-list-ul[_v-12d0c544] {\n  width: 640px;\n  height: 48px;\n  line-height: 48px;\n  box-sizing: border-box;\n}\n.nav-list-wrap .nav-list-ul .nav-a[_v-12d0c544] {\n  display: block;\n  float: left;\n  width: 160px;\n  height: 46px;\n  color: #fff;\n}\n.nav-list-wrap .nav-list-ul .active-true[_v-12d0c544] {\n  /*background: #fff;*/\n  background: -webkit-linear-gradient(#FFFFFF, #aac0d2);\n  background: linear-gradient(#FFFFFF, #aac0d2);\n  color: #21598a;\n}\n", ""]);

	// exports


/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template id="navList">
	//   <div class="nav-list-wrap">
	//    <ul class="nav-list-ul">
	//      <a v-for="nav in navList"
	//         v-link="{name : nav.routerLink}"
	//         class="nav-a active-{{nav.isActive}}"
	//         @click="navClick(nav)">
	//         {{nav.name}}
	//      </a>
	//    </ul>
	//    <router-view></router-view>
	//   </div>
	// </template>
	//
	//
	// <script type="text/ecmascript-6">
	exports.default = {
	  el: '#navList',
	  data: function data() {
	    return {
	      navList: [{ name: '首页', routerLink: 'home', isActive: true }, { name: '评选', routerLink: 'select', isActive: false }, { name: '活动', routerLink: 'activity', isActive: false }, { name: '话题', routerLink: 'topic', isActive: false }]
	    };
	  },

	  methods: {
	    // 点击导航高亮
	    navClick: function navClick(nav) {
	      var navList = this.$data.navList;
	      for (var i = 0; i < navList.length; i++) {
	        navList[i].isActive = false;
	      }
	      nav.isActive = true;
	    }
	  },
	  components: {}
	};
	// </script>
	//
	// <style lang="less" scoped="">
	//     *{
	//         list-style: none;
	//     }
	//     .nav-list-wrap{
	//         width: 640px;
	//         height: 50px;
	//         border-top: 2px solid #000;
	//         border-bottom: 2px solid #000;
	//         background: #21598a;
	//         overflow: hidden;
	//         text-align: center;
	//         box-sizing: border-box;
	//       .nav-list-ul{
	//         width: 640px;
	//         height: 48px;
	//         line-height: 48px;
	//         box-sizing: border-box;
	//          .nav-a{
	//            display: block;
	//            float: left;
	//            width: 160px;
	//            height: 46px;
	//            color: #fff;
	//           }
	//          .active-true{
	//             /*background: #fff;*/
	//             background:linear-gradient(#FFFFFF, #aac0d2);
	//             color: #21598a;
	//          }
	//        }
	//     }
	//
	// </style>

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"nav-list-wrap\" _v-12d0c544=\"\">\n   <ul class=\"nav-list-ul\" _v-12d0c544=\"\">\n     <a v-for=\"nav in navList\" v-link=\"{name : nav.routerLink}\" class=\"nav-a active-{{nav.isActive}}\" @click=\"navClick(nav)\" _v-12d0c544=\"\">\n        {{nav.name}}\n     </a>\n   </ul>\n   <router-view _v-12d0c544=\"\"></router-view>\n  </div>\n";

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(23)
	__vue_script__ = __webpack_require__(25)
	__vue_template__ = __webpack_require__(26)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\WorkSpace\\Demo\\webpack-vue\\vue1\\src\\components\\goodDetail.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(24);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-3b48705b&file=goodDetail.vue&scoped=true!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./goodDetail.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-3b48705b&file=goodDetail.vue&scoped=true!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./goodDetail.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "\r\n\r\n", ""]);

	// exports


/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template id="goodDetail000">
	//   <div class="bye-wrap">
	//     <p>商品名称：{{goodListData.name}}</p>
	//     <p>商品价格：{{goodListData.price}}</p>
	//     <p>商品库存：{{goodListData.stock}}</p>
	//     <!--<hello></hello>-->
	//      <!--<p>名字：{{goodData1.name}}</p>-->
	//     <!--<p slot=""></p>  -->
	//      <!--<p>{{goodListData.name}}</p>-->
	//      <button v-if="clickData" @click="goodClick(clickData)">点击</button>
	//   </div>
	// </template>
	//
	// <script type="text/ecmascript-6">
	exports.default = {
	  //name : 'goodDetail000',
	  data: function data() {
	    return {
	      name: '鞋子',
	      price: 210,
	      stock: 30
	    };
	  },

	  methods: {
	    goodClick: function goodClick(clickData) {
	      console.log(clickData);
	      this.$dispatch('event1', 10);
	    }
	  },
	  props: ['goodListData', 'clickData'],
	  ready: function ready() {
	    //console.log(this.goodListData);
	  }
	};
	// </script>
	//
	// <style scoped>
	//
	// </style>

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bye-wrap\" _v-3b48705b=\"\">\n    <p _v-3b48705b=\"\">商品名称：{{goodListData.name}}</p>\n    <p _v-3b48705b=\"\">商品价格：{{goodListData.price}}</p>\n    <p _v-3b48705b=\"\">商品库存：{{goodListData.stock}}</p>\n    <!--<hello></hello>-->\n     <!--<p>名字：{{goodData1.name}}</p>-->\n    <!--<p slot=\"\"></p>  -->\n     <!--<p>{{goodListData.name}}</p>-->\n     <button v-if=\"clickData\" @click=\"goodClick(clickData)\" _v-3b48705b=\"\">点击</button>\n  </div>\n";

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "\r\n   <div class=\"c1\">\r\n\r\n      <!-- 头部部分 -->\r\n      <top-bar></top-bar>\r\n\r\n      <!-- 对于名字比较长的 .vue文件，文件名字命名用驼峰，在 html中该标签用横杠 -->\r\n\r\n      <!-- 导航部分 -->\r\n      <nav-list></nav-list>\r\n\r\n      <!--\r\n      <h2>这里pink内的是src/components/app.vue模板中的内容</h2>\r\n      <h1>姓名 ： {{name}}</h1>\r\n      <h1>年龄 ： {{age}}</h1>\r\n      <h1>头像：\r\n      <img width=\"200\" title=\"头像\" v-attr=\"src : \" src=\"{{avatarUrl}}\"/>\r\n      </h1>\r\n      -->\r\n      <!--<a v-bind:href=\"{ name : 'list' }\">v-link查看列表</a>-->\r\n      <!--<a v-link=\"{ name : 'index' }\">返回主页</a>-->\r\n\r\n      <!--\r\n      <button @click=\"goList\">$route.router.go查看路由</button>\r\n      <br/>\r\n      <a class=\"less-class-test\" href=\"javascript:;\" @click=\"goList\">list.vue查看列表</a>\r\n      <br/>\r\n      <a href=\"javascript:;\" @click=\"goIndex\">index.vue返回主页</a>\r\n      <br/>\r\n      <a href=\"javascript:;\" @click=\"goBye\">bye.vue再见页面</a>\r\n      <br/>\r\n      <a v-link=\"{name : 'hello'}\">嵌套路由hello111</a>\r\n      <a v-link=\"{name : 'list'}\">嵌套路由list</a>\r\n      <a v-link=\"{path : '/bye'}\">嵌套路由bye</a>\r\n      <br/>\r\n      -->\r\n\r\n\r\n      <router-view></router-view>\r\n      <!--<hello></hello>-->\r\n       <!--<good-detail :good-list-data=\"msg\">-->\r\n\r\n\r\n       <!--\r\n       <good-detail v-for=\"good in goodListData\"\r\n                :good-list-data=\"good\"\r\n                :click-data=\"good\"\r\n               >\r\n       </good-detail>\r\n       -->\r\n\r\n   </div>\r\n";

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(29)
	__vue_script__ = __webpack_require__(31)
	__vue_template__ = __webpack_require__(87)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\WorkSpace\\Demo\\webpack-vue\\vue1\\src\\components\\home.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(30);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-734635e8&file=home.vue!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./home.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-734635e8&file=home.vue!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./home.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "\r\n    *{\r\n        list-style: none;\r\n    }\r\n    .home-wrap{\r\n        background: #fff;\r\n    }\r\n", ""]);

	// exports


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _swiper = __webpack_require__(32);

	var _swiper2 = _interopRequireDefault(_swiper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  el: '#home',
	  data: function data() {
	    return {};
	  },

	  components: {
	    swiper: _swiper2.default
	  }
	};
	// </script>
	//
	// <style lang="">
	//     *{
	//         list-style: none;
	//     }
	//     .home-wrap{
	//         background: #fff;
	//     }
	// </style>
	// <template id="home">
	//   <div class="home-wrap">
	//     <!-- 轮播部分 -->
	//     <swiper></swiper>
	//     <!--<router-view></router-view>-->
	//
	//   </div>
	// </template>
	//
	// <script type="text/ecmascript-6">
	// 轮播单文件

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(33)
	__vue_script__ = __webpack_require__(35)
	__vue_template__ = __webpack_require__(81)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\WorkSpace\\Demo\\webpack-vue\\vue1\\src\\components\\swiper.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(34);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-70359a36&file=swiper.vue&scoped=true!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./swiper.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-70359a36&file=swiper.vue&scoped=true!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./swiper.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "/*单行样式出现 ...*/\n.swiper-wrap[_v-70359a36] {\n  position: relative;\n  border: 2px solid #000;\n  width: 640px;\n  height: 318px;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n.swiper-container[_v-70359a36] {\n  width: 100%;\n  height: 100%;\n}\n.swiper-slide[_v-70359a36] {\n  display: block;\n  text-align: center;\n  font-size: 18px;\n  background: #fff;\n  /* Center slide text vertically */\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.swiper-slide img[_v-70359a36] {\n  display: block;\n  width: 100%;\n}\n/* 底部小圆点 */\n.circle-wrap[_v-70359a36] {\n  position: absolute;\n  z-index: 1000 !important;\n  width: 25% !important;\n  bottom: 0 !important;\n  left: 80% !important;\n  height: 30px !important;\n  background: rgba(0, 0, 0, 0.4);\n  box-sizing: border-box;\n  cursor: pointer;\n}\n/* 左右箭头 */\n.common-btn[_v-70359a36] {\n  background: rgba(0, 0, 0, 0.3);\n  color: #0000cc;\n  font-size: 26px;\n}\n/* 底部title */\n.swiper-title[_v-70359a36] {\n  position: absolute;\n  z-index: 10;\n  width: 80%;\n  height: 30px;\n  line-height: 30px;\n  bottom: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.4);\n  color: #fff;\n  box-sizing: border-box;\n}\n.swiper-title .title-text[_v-70359a36] {\n  font-size: 16px;\n  margin-left: 30px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  width: 460px;\n  /*text-overflow:ellipsis;*/\n  /*overflow:hidden;*/\n  /*white-space:nowrap;*/\n}\n", ""]);

	// exports


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _swiper330Min = __webpack_require__(36);

	var _swiper330Min2 = _interopRequireDefault(_swiper330Min);

	var _swiperContent = __webpack_require__(69);

	var _swiperContent2 = _interopRequireDefault(_swiperContent);

	var _newsWrap = __webpack_require__(74);

	var _newsWrap2 = _interopRequireDefault(_newsWrap);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(79);

	// 每个子swiper点进去的内容
	// <template id="swiper">
	//
	//   <div class="swiper-wrap" v-show="isShowSwiper">
	//       <!-- Swiper -->
	//       <div class="swiper-container" @click="goSwiperContent">
	//           <div class="swiper-wrapper">
	//               <img class="swiper-slide" data-id="1" src="../static/imgs/swiper-1.jpg" alt=""/>
	//               <img class="swiper-slide" data-id="2" src="../static/imgs/swiper-2.jpg" alt=""/>
	//               <img class="swiper-slide" data-id="3" src="../static/imgs/swiper-3.jpg" alt=""/>
	//               <img class="swiper-slide" data-id="4" src="../static/imgs/swiper-4.jpg" alt=""/>
	//               <img class="swiper-slide" data-id="5" src="../static/imgs/swiper-5.jpg" alt=""/>
	//           </div>
	//           <!-- 底部小圆点 Add Pagination -->
	//           <div class="swiper-pagination circle-wrap"></div>
	//           <!--幻灯片左箭头-->
	//           <div class="swiper-button-next common-btn">&gt;</div>
	//           <!--幻灯片右箭头-->
	//           <div class="swiper-button-prev common-btn">&lt;</div>
	//       </div>
	//       <div class="swiper-title">
	//         <div class="title-text">{{swiperTitleActive}}</div>
	//       </div>
	//   </div>
	//
	//
	//   <!-- 每个子swiper点进去的内容 -->
	//   <swiper-content
	//           v-bind:swiper-id="swiperId"
	//           :event-swiper=""
	//           v-show="isShowContent">
	//   </swiper-content>
	//
	//   <!-- 新闻条款父容器 -->
	//   <news-wrap v-show="isShowNews">
	//
	//   </news-wrap>
	//
	//
	// </template>
	//
	// <script type="text/ecmascript-6">
	// 针对当前 swiper.vue单文件，引入swiper插件


	// 新闻单文件
	exports.default = {
	  el: '#swiper',
	  data: function data() {
	    return {
	      swiperId: 1,
	      isShowContent: false, // swiper内容
	      isShowNews: true, // 新闻
	      isShowSwiper: true, // swiper轮播
	      swiperTitleActive: '',
	      // 存放轮播图title的数组
	      swiperTitleArr: [{ title: '【方正国防军工韩振国团队】卫星移动通信行业深度报告—天通一号发射开启卫星移动通信产业发展大幕' }, { title: '【长正通信行业马军团队】运营商转型系类报告1：数字化转型下的业绩改善+改革预期' }, { title: '【安信有色齐丁团队】2016年度有色金属行业策略报告：与时代共舞' }, { title: '【全信食品饮料苏铖团队】生活方式系列之奶酪黄油：消费新趋势，乳业新亮点' }, { title: '【商超】德国超市巨头ALDI：与Walmart大不同的另一种连锁商超范式' }]
	    };
	  },


	  methods: {
	    // 跳转到具体子swiper的内容
	    goSwiperContent: function goSwiperContent(e) {
	      var target = e.target;
	      if (target.tagName.toUpperCase() == 'IMG') {
	        var dataId = target.getAttribute('data-id');
	        //console.log(target.tagName);
	        //console.log(dataId);
	        this.$data.swiperId = dataId;

	        // 广播到子组件 swiperContent.vue中
	        this.$broadcast('event-swiper', dataId);
	        //this.$route.router.go({name : 'swiperContent'}); //路由跳转，则数据在模板中无法展示

	        this.$data.isShowContent = true;
	        this.$data.isShowSwiper = false;
	        this.$data.isShowNews = false;
	      }
	    }
	  },
	  components: {
	    swiperContent: _swiperContent2.default, newsWrap: _newsWrap2.default
	  },
	  ready: function ready() {
	    var self = this;
	    self.$data.swiperTitleActive = self.$data.swiperTitleArr[0].title;

	    // 初始化swiper插件
	    var swiper = new _swiper330Min2.default('.swiper-container', {
	      pagination: '.swiper-pagination',
	      paginationClickable: '.swiper-pagination',
	      nextButton: '.swiper-button-next',
	      prevButton: '.swiper-button-prev',
	      spaceBetween: 30,
	      loop: true,
	      autoplay: 3000, // 自动播放间隔时间
	      autoplayDisableOnInteraction: false, // 设为false，用户执行滑动后，插件继续执行
	      // 回调函数
	      onSlideChangeEnd: function onSlideChangeEnd(swiper) {
	        // 自动滑动结束
	        var index = swiper.activeIndex; // 当前索引值
	        if (index == 6) {
	          index = 1;
	        }
	        if (index == 0) {
	          index = 5;
	        }
	        self.$data.swiperTitleActive = self.$data.swiperTitleArr[index - 1].title;
	      }
	    });
	  }
	};
	// </script>
	//
	// <style lang="less" scoped="">
	//     /*单行样式出现 ...*/
	//     .ellipsizeSingleLine(@width){
	//         text-overflow:ellipsis;
	//         overflow:hidden;
	//         white-space:nowrap;
	//         width:@width;
	//     }
	//
	//   .swiper-wrap{
	//       position: relative;
	//       border: 2px solid #000;
	//       width: 640px;
	//       height: 318px;
	//       overflow: hidden;
	//       box-sizing: border-box;
	//   }
	//
	//   .swiper-container {
	//       width: 100%;
	//       height: 100%;
	//   }
	//   .swiper-slide {
	//       display: block;
	//       text-align: center;
	//       font-size: 18px;
	//       background: #fff;
	//       /* Center slide text vertically */
	//       display: -webkit-box;
	//       display: -ms-flexbox;
	//       display: -webkit-flex;
	//       display: flex;
	//       -webkit-box-pack: center;
	//       -ms-flex-pack: center;
	//       -webkit-justify-content: center;
	//       justify-content: center;
	//       -webkit-box-align: center;
	//       -ms-flex-align: center;
	//       -webkit-align-items: center;
	//       align-items: center;
	//       img{
	//           display: block;
	//           width: 100%;
	//       }
	//   }
	//
	//   /* 底部小圆点 */
	//   .circle-wrap{
	//       position: absolute;
	//       z-index: 1000 !important;
	//       width: 25% !important;
	//       bottom: 0 !important;
	//       left: 80% !important;
	//       height: 30px !important;
	//       background: rgba(0,0,0,0.4);
	//       box-sizing: border-box;
	//       cursor: pointer;
	//   }
	//     /* 左右箭头 */
	//     .common-btn{
	//         background: rgba(0,0,0,0.3);
	//         color: #0000cc;
	//         font-size: 26px;
	//     }
	//     /* 底部title */
	//    .swiper-title{
	//        position: absolute;
	//        z-index: 10;
	//        width: 80%;
	//        height: 30px;
	//        line-height: 30px;
	//        bottom: 0;
	//        left: 0;
	//        background: rgba(0,0,0,0.4);
	//        color: #fff;
	//
	//        box-sizing: border-box;
	//        .title-text{
	//            width: 460px;
	//            font-size: 16px;
	//            margin-left: 30px;
	//            .ellipsizeSingleLine(460px);
	//
	//            /*text-overflow:ellipsis;*/
	//            /*overflow:hidden;*/
	//            /*white-space:nowrap;*/
	//        }
	//    }
	//
	// </style>

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof2 = __webpack_require__(37);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Swiper 3.3.0
	 * Most modern mobile touch slider and framework with hardware accelerated transitions
	 * 
	 * http://www.idangero.us/swiper/
	 * 
	 * Copyright 2016, Vladimir Kharlampidi
	 * The iDangero.us
	 * http://www.idangero.us/
	 * 
	 * Licensed under MIT
	 * 
	 * Released on: January 10, 2016
	 */
	!function () {
	  "use strict";
	  function e(e) {
	    e.fn.swiper = function (a) {
	      var i;return e(this).each(function () {
	        var e = new t(this, a);i || (i = e);
	      }), i;
	    };
	  }var a,
	      t = function t(e, r) {
	    function s(e) {
	      return Math.floor(e);
	    }function n() {
	      b.autoplayTimeoutId = setTimeout(function () {
	        b.params.loop ? (b.fixLoop(), b._slideNext(), b.emit("onAutoplay", b)) : b.isEnd ? r.autoplayStopOnLast ? b.stopAutoplay() : (b._slideTo(0), b.emit("onAutoplay", b)) : (b._slideNext(), b.emit("onAutoplay", b));
	      }, b.params.autoplay);
	    }function o(e, t) {
	      var i = a(e.target);if (!i.is(t)) if ("string" == typeof t) i = i.parents(t);else if (t.nodeType) {
	        var r;return i.parents().each(function (e, a) {
	          a === t && (r = t);
	        }), r ? t : void 0;
	      }if (0 !== i.length) return i[0];
	    }function l(e, a) {
	      a = a || {};var t = window.MutationObserver || window.WebkitMutationObserver,
	          i = new t(function (e) {
	        e.forEach(function (e) {
	          b.onResize(!0), b.emit("onObserverUpdate", b, e);
	        });
	      });i.observe(e, { attributes: "undefined" == typeof a.attributes ? !0 : a.attributes, childList: "undefined" == typeof a.childList ? !0 : a.childList, characterData: "undefined" == typeof a.characterData ? !0 : a.characterData }), b.observers.push(i);
	    }function p(e) {
	      e.originalEvent && (e = e.originalEvent);var a = e.keyCode || e.charCode;if (!b.params.allowSwipeToNext && (b.isHorizontal() && 39 === a || !b.isHorizontal() && 40 === a)) return !1;if (!b.params.allowSwipeToPrev && (b.isHorizontal() && 37 === a || !b.isHorizontal() && 38 === a)) return !1;if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
	        if (37 === a || 39 === a || 38 === a || 40 === a) {
	          var t = !1;if (b.container.parents(".swiper-slide").length > 0 && 0 === b.container.parents(".swiper-slide-active").length) return;var i = { left: window.pageXOffset, top: window.pageYOffset },
	              r = window.innerWidth,
	              s = window.innerHeight,
	              n = b.container.offset();b.rtl && (n.left = n.left - b.container[0].scrollLeft);for (var o = [[n.left, n.top], [n.left + b.width, n.top], [n.left, n.top + b.height], [n.left + b.width, n.top + b.height]], l = 0; l < o.length; l++) {
	            var p = o[l];p[0] >= i.left && p[0] <= i.left + r && p[1] >= i.top && p[1] <= i.top + s && (t = !0);
	          }if (!t) return;
	        }b.isHorizontal() ? ((37 === a || 39 === a) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), (39 === a && !b.rtl || 37 === a && b.rtl) && b.slideNext(), (37 === a && !b.rtl || 39 === a && b.rtl) && b.slidePrev()) : ((38 === a || 40 === a) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === a && b.slideNext(), 38 === a && b.slidePrev());
	      }
	    }function d(e) {
	      e.originalEvent && (e = e.originalEvent);var a = b.mousewheel.event,
	          t = 0,
	          i = b.rtl ? -1 : 1;if (e.detail) t = -e.detail;else if ("mousewheel" === a) {
	        if (b.params.mousewheelForceToAxis) {
	          if (b.isHorizontal()) {
	            if (!(Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY))) return;t = e.wheelDeltaX * i;
	          } else {
	            if (!(Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX))) return;t = e.wheelDeltaY;
	          }
	        } else t = Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY) ? -e.wheelDeltaX * i : -e.wheelDeltaY;
	      } else if ("DOMMouseScroll" === a) t = -e.detail;else if ("wheel" === a) if (b.params.mousewheelForceToAxis) {
	        if (b.isHorizontal()) {
	          if (!(Math.abs(e.deltaX) > Math.abs(e.deltaY))) return;t = -e.deltaX * i;
	        } else {
	          if (!(Math.abs(e.deltaY) > Math.abs(e.deltaX))) return;t = -e.deltaY;
	        }
	      } else t = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? -e.deltaX * i : -e.deltaY;if (0 !== t) {
	        if (b.params.mousewheelInvert && (t = -t), b.params.freeMode) {
	          var r = b.getWrapperTranslate() + t * b.params.mousewheelSensitivity,
	              s = b.isBeginning,
	              n = b.isEnd;if (r >= b.minTranslate() && (r = b.minTranslate()), r <= b.maxTranslate() && (r = b.maxTranslate()), b.setWrapperTransition(0), b.setWrapperTranslate(r), b.updateProgress(), b.updateActiveIndex(), (!s && b.isBeginning || !n && b.isEnd) && b.updateClasses(), b.params.freeModeSticky ? (clearTimeout(b.mousewheel.timeout), b.mousewheel.timeout = setTimeout(function () {
	            b.slideReset();
	          }, 300)) : b.params.lazyLoading && b.lazy && b.lazy.load(), 0 === r || r === b.maxTranslate()) return;
	        } else {
	          if (new window.Date().getTime() - b.mousewheel.lastScrollTime > 60) if (0 > t) {
	            if (b.isEnd && !b.params.loop || b.animating) {
	              if (b.params.mousewheelReleaseOnEdges) return !0;
	            } else b.slideNext();
	          } else if (b.isBeginning && !b.params.loop || b.animating) {
	            if (b.params.mousewheelReleaseOnEdges) return !0;
	          } else b.slidePrev();b.mousewheel.lastScrollTime = new window.Date().getTime();
	        }return b.params.autoplay && b.stopAutoplay(), e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1;
	      }
	    }function u(e, t) {
	      e = a(e);var i,
	          r,
	          s,
	          n = b.rtl ? -1 : 1;i = e.attr("data-swiper-parallax") || "0", r = e.attr("data-swiper-parallax-x"), s = e.attr("data-swiper-parallax-y"), r || s ? (r = r || "0", s = s || "0") : b.isHorizontal() ? (r = i, s = "0") : (s = i, r = "0"), r = r.indexOf("%") >= 0 ? parseInt(r, 10) * t * n + "%" : r * t * n + "px", s = s.indexOf("%") >= 0 ? parseInt(s, 10) * t + "%" : s * t + "px", e.transform("translate3d(" + r + ", " + s + ",0px)");
	    }function c(e) {
	      return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e), e;
	    }if (!(this instanceof t)) return new t(e, r);var m = { direction: "horizontal", touchEventsTarget: "container", initialSlide: 0, speed: 300, autoplay: !1, autoplayDisableOnInteraction: !0, autoplayStopOnLast: !1, iOSEdgeSwipeDetection: !1, iOSEdgeSwipeThreshold: 20, freeMode: !1, freeModeMomentum: !0, freeModeMomentumRatio: 1, freeModeMomentumBounce: !0, freeModeMomentumBounceRatio: 1, freeModeSticky: !1, freeModeMinimumVelocity: .02, autoHeight: !1, setWrapperSize: !1, virtualTranslate: !1, effect: "slide", coverflow: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0 }, flip: { slideShadows: !0, limitRotation: !0 }, cube: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94 }, fade: { crossFade: !1 }, parallax: !1, scrollbar: null, scrollbarHide: !0, scrollbarDraggable: !1, scrollbarSnapOnRelease: !1, keyboardControl: !1, mousewheelControl: !1, mousewheelReleaseOnEdges: !1, mousewheelInvert: !1, mousewheelForceToAxis: !1, mousewheelSensitivity: 1, hashnav: !1, breakpoints: void 0, spaceBetween: 0, slidesPerView: 1, slidesPerColumn: 1, slidesPerColumnFill: "column", slidesPerGroup: 1, centeredSlides: !1, slidesOffsetBefore: 0, slidesOffsetAfter: 0, roundLengths: !1, touchRatio: 1, touchAngle: 45, simulateTouch: !0, shortSwipes: !0, longSwipes: !0, longSwipesRatio: .5, longSwipesMs: 300, followFinger: !0, onlyExternal: !1, threshold: 0, touchMoveStopPropagation: !0, pagination: null, paginationElement: "span", paginationClickable: !1, paginationHide: !1, paginationBulletRender: null, paginationProgressRender: null, paginationFractionRender: null, paginationCustomRender: null, paginationType: "bullets", resistance: !0, resistanceRatio: .85, nextButton: null, prevButton: null, watchSlidesProgress: !1, watchSlidesVisibility: !1, grabCursor: !1, preventClicks: !0, preventClicksPropagation: !0, slideToClickedSlide: !1, lazyLoading: !1, lazyLoadingInPrevNext: !1, lazyLoadingInPrevNextAmount: 1, lazyLoadingOnTransitionStart: !1, preloadImages: !0, updateOnImagesReady: !0, loop: !1, loopAdditionalSlides: 0, loopedSlides: null, control: void 0, controlInverse: !1, controlBy: "slide", allowSwipeToPrev: !0, allowSwipeToNext: !0, swipeHandler: null, noSwiping: !0, noSwipingClass: "swiper-no-swiping", slideClass: "swiper-slide", slideActiveClass: "swiper-slide-active", slideVisibleClass: "swiper-slide-visible", slideDuplicateClass: "swiper-slide-duplicate", slideNextClass: "swiper-slide-next", slidePrevClass: "swiper-slide-prev", wrapperClass: "swiper-wrapper", bulletClass: "swiper-pagination-bullet", bulletActiveClass: "swiper-pagination-bullet-active", buttonDisabledClass: "swiper-button-disabled", paginationCurrentClass: "swiper-pagination-current", paginationTotalClass: "swiper-pagination-total", paginationHiddenClass: "swiper-pagination-hidden", paginationProgressbarClass: "swiper-pagination-progressbar", observer: !1, observeParents: !1, a11y: !1, prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide", firstSlideMessage: "This is the first slide", lastSlideMessage: "This is the last slide", paginationBulletMessage: "Go to slide {{index}}", runCallbacksOnInit: !0 },
	        f = r && r.virtualTranslate;r = r || {};var h = {};for (var g in r) {
	      if ("object" != (0, _typeof3.default)(r[g]) || null === r[g] || r[g].nodeType || r[g] === window || r[g] === document || "undefined" != typeof i && r[g] instanceof i || "undefined" != typeof jQuery && r[g] instanceof jQuery) h[g] = r[g];else {
	        h[g] = {};for (var v in r[g]) {
	          h[g][v] = r[g][v];
	        }
	      }
	    }for (var w in m) {
	      if ("undefined" == typeof r[w]) r[w] = m[w];else if ("object" == (0, _typeof3.default)(r[w])) for (var y in m[w]) {
	        "undefined" == typeof r[w][y] && (r[w][y] = m[w][y]);
	      }
	    }var b = this;if (b.params = r, b.originalParams = h, b.classNames = [], "undefined" != typeof a && "undefined" != typeof i && (a = i), ("undefined" != typeof a || (a = "undefined" == typeof i ? window.Dom7 || window.Zepto || window.jQuery : i)) && (b.$ = a, b.currentBreakpoint = void 0, b.getActiveBreakpoint = function () {
	      if (!b.params.breakpoints) return !1;var e,
	          a = !1,
	          t = [];for (e in b.params.breakpoints) {
	        b.params.breakpoints.hasOwnProperty(e) && t.push(e);
	      }t.sort(function (e, a) {
	        return parseInt(e, 10) > parseInt(a, 10);
	      });for (var i = 0; i < t.length; i++) {
	        e = t[i], e >= window.innerWidth && !a && (a = e);
	      }return a || "max";
	    }, b.setBreakpoint = function () {
	      var e = b.getActiveBreakpoint();if (e && b.currentBreakpoint !== e) {
	        var a = e in b.params.breakpoints ? b.params.breakpoints[e] : b.originalParams;for (var t in a) {
	          b.params[t] = a[t];
	        }b.currentBreakpoint = e;
	      }
	    }, b.params.breakpoints && b.setBreakpoint(), b.container = a(e), 0 !== b.container.length)) {
	      if (b.container.length > 1) return void b.container.each(function () {
	        new t(this, r);
	      });b.container[0].swiper = b, b.container.data("swiper", b), b.classNames.push("swiper-container-" + b.params.direction), b.params.freeMode && b.classNames.push("swiper-container-free-mode"), b.support.flexbox || (b.classNames.push("swiper-container-no-flexbox"), b.params.slidesPerColumn = 1), b.params.autoHeight && b.classNames.push("swiper-container-autoheight"), (b.params.parallax || b.params.watchSlidesVisibility) && (b.params.watchSlidesProgress = !0), ["cube", "coverflow", "flip"].indexOf(b.params.effect) >= 0 && (b.support.transforms3d ? (b.params.watchSlidesProgress = !0, b.classNames.push("swiper-container-3d")) : b.params.effect = "slide"), "slide" !== b.params.effect && b.classNames.push("swiper-container-" + b.params.effect), "cube" === b.params.effect && (b.params.resistanceRatio = 0, b.params.slidesPerView = 1, b.params.slidesPerColumn = 1, b.params.slidesPerGroup = 1, b.params.centeredSlides = !1, b.params.spaceBetween = 0, b.params.virtualTranslate = !0, b.params.setWrapperSize = !1), ("fade" === b.params.effect || "flip" === b.params.effect) && (b.params.slidesPerView = 1, b.params.slidesPerColumn = 1, b.params.slidesPerGroup = 1, b.params.watchSlidesProgress = !0, b.params.spaceBetween = 0, b.params.setWrapperSize = !1, "undefined" == typeof f && (b.params.virtualTranslate = !0)), b.params.grabCursor && b.support.touch && (b.params.grabCursor = !1), b.wrapper = b.container.children("." + b.params.wrapperClass), b.params.pagination && (b.paginationContainer = a(b.params.pagination), "bullets" === b.params.paginationType && b.params.paginationClickable ? b.paginationContainer.addClass("swiper-pagination-clickable") : b.params.paginationClickable = !1, b.paginationContainer.addClass("swiper-pagination-" + b.params.paginationType)), b.isHorizontal = function () {
	        return "horizontal" === b.params.direction;
	      }, b.rtl = b.isHorizontal() && ("rtl" === b.container[0].dir.toLowerCase() || "rtl" === b.container.css("direction")), b.rtl && b.classNames.push("swiper-container-rtl"), b.rtl && (b.wrongRTL = "-webkit-box" === b.wrapper.css("display")), b.params.slidesPerColumn > 1 && b.classNames.push("swiper-container-multirow"), b.device.android && b.classNames.push("swiper-container-android"), b.container.addClass(b.classNames.join(" ")), b.translate = 0, b.progress = 0, b.velocity = 0, b.lockSwipeToNext = function () {
	        b.params.allowSwipeToNext = !1;
	      }, b.lockSwipeToPrev = function () {
	        b.params.allowSwipeToPrev = !1;
	      }, b.lockSwipes = function () {
	        b.params.allowSwipeToNext = b.params.allowSwipeToPrev = !1;
	      }, b.unlockSwipeToNext = function () {
	        b.params.allowSwipeToNext = !0;
	      }, b.unlockSwipeToPrev = function () {
	        b.params.allowSwipeToPrev = !0;
	      }, b.unlockSwipes = function () {
	        b.params.allowSwipeToNext = b.params.allowSwipeToPrev = !0;
	      }, b.params.grabCursor && (b.container[0].style.cursor = "move", b.container[0].style.cursor = "-webkit-grab", b.container[0].style.cursor = "-moz-grab", b.container[0].style.cursor = "grab"), b.imagesToLoad = [], b.imagesLoaded = 0, b.loadImage = function (e, a, t, i, r) {
	        function s() {
	          r && r();
	        }var n;e.complete && i ? s() : a ? (n = new window.Image(), n.onload = s, n.onerror = s, t && (n.srcset = t), a && (n.src = a)) : s();
	      }, b.preloadImages = function () {
	        function e() {
	          "undefined" != typeof b && null !== b && (void 0 !== b.imagesLoaded && b.imagesLoaded++, b.imagesLoaded === b.imagesToLoad.length && (b.params.updateOnImagesReady && b.update(), b.emit("onImagesReady", b)));
	        }b.imagesToLoad = b.container.find("img");for (var a = 0; a < b.imagesToLoad.length; a++) {
	          b.loadImage(b.imagesToLoad[a], b.imagesToLoad[a].currentSrc || b.imagesToLoad[a].getAttribute("src"), b.imagesToLoad[a].srcset || b.imagesToLoad[a].getAttribute("srcset"), !0, e);
	        }
	      }, b.autoplayTimeoutId = void 0, b.autoplaying = !1, b.autoplayPaused = !1, b.startAutoplay = function () {
	        return "undefined" != typeof b.autoplayTimeoutId ? !1 : b.params.autoplay ? b.autoplaying ? !1 : (b.autoplaying = !0, b.emit("onAutoplayStart", b), void n()) : !1;
	      }, b.stopAutoplay = function (e) {
	        b.autoplayTimeoutId && (b.autoplayTimeoutId && clearTimeout(b.autoplayTimeoutId), b.autoplaying = !1, b.autoplayTimeoutId = void 0, b.emit("onAutoplayStop", b));
	      }, b.pauseAutoplay = function (e) {
	        b.autoplayPaused || (b.autoplayTimeoutId && clearTimeout(b.autoplayTimeoutId), b.autoplayPaused = !0, 0 === e ? (b.autoplayPaused = !1, n()) : b.wrapper.transitionEnd(function () {
	          b && (b.autoplayPaused = !1, b.autoplaying ? n() : b.stopAutoplay());
	        }));
	      }, b.minTranslate = function () {
	        return -b.snapGrid[0];
	      }, b.maxTranslate = function () {
	        return -b.snapGrid[b.snapGrid.length - 1];
	      }, b.updateAutoHeight = function () {
	        var e = b.slides.eq(b.activeIndex)[0];if ("undefined" != typeof e) {
	          var a = e.offsetHeight;a && b.wrapper.css("height", a + "px");
	        }
	      }, b.updateContainerSize = function () {
	        var e, a;e = "undefined" != typeof b.params.width ? b.params.width : b.container[0].clientWidth, a = "undefined" != typeof b.params.height ? b.params.height : b.container[0].clientHeight, 0 === e && b.isHorizontal() || 0 === a && !b.isHorizontal() || (e = e - parseInt(b.container.css("padding-left"), 10) - parseInt(b.container.css("padding-right"), 10), a = a - parseInt(b.container.css("padding-top"), 10) - parseInt(b.container.css("padding-bottom"), 10), b.width = e, b.height = a, b.size = b.isHorizontal() ? b.width : b.height);
	      }, b.updateSlidesSize = function () {
	        b.slides = b.wrapper.children("." + b.params.slideClass), b.snapGrid = [], b.slidesGrid = [], b.slidesSizesGrid = [];var e,
	            a = b.params.spaceBetween,
	            t = -b.params.slidesOffsetBefore,
	            i = 0,
	            r = 0;"string" == typeof a && a.indexOf("%") >= 0 && (a = parseFloat(a.replace("%", "")) / 100 * b.size), b.virtualSize = -a, b.rtl ? b.slides.css({ marginLeft: "", marginTop: "" }) : b.slides.css({ marginRight: "", marginBottom: "" });var n;b.params.slidesPerColumn > 1 && (n = Math.floor(b.slides.length / b.params.slidesPerColumn) === b.slides.length / b.params.slidesPerColumn ? b.slides.length : Math.ceil(b.slides.length / b.params.slidesPerColumn) * b.params.slidesPerColumn, "auto" !== b.params.slidesPerView && "row" === b.params.slidesPerColumnFill && (n = Math.max(n, b.params.slidesPerView * b.params.slidesPerColumn)));var o,
	            l = b.params.slidesPerColumn,
	            p = n / l,
	            d = p - (b.params.slidesPerColumn * p - b.slides.length);for (e = 0; e < b.slides.length; e++) {
	          o = 0;var u = b.slides.eq(e);if (b.params.slidesPerColumn > 1) {
	            var c, m, f;"column" === b.params.slidesPerColumnFill ? (m = Math.floor(e / l), f = e - m * l, (m > d || m === d && f === l - 1) && ++f >= l && (f = 0, m++), c = m + f * n / l, u.css({ "-webkit-box-ordinal-group": c, "-moz-box-ordinal-group": c, "-ms-flex-order": c, "-webkit-order": c, order: c })) : (f = Math.floor(e / p), m = e - f * p), u.css({ "margin-top": 0 !== f && b.params.spaceBetween && b.params.spaceBetween + "px" }).attr("data-swiper-column", m).attr("data-swiper-row", f);
	          }"none" !== u.css("display") && ("auto" === b.params.slidesPerView ? (o = b.isHorizontal() ? u.outerWidth(!0) : u.outerHeight(!0), b.params.roundLengths && (o = s(o))) : (o = (b.size - (b.params.slidesPerView - 1) * a) / b.params.slidesPerView, b.params.roundLengths && (o = s(o)), b.isHorizontal() ? b.slides[e].style.width = o + "px" : b.slides[e].style.height = o + "px"), b.slides[e].swiperSlideSize = o, b.slidesSizesGrid.push(o), b.params.centeredSlides ? (t = t + o / 2 + i / 2 + a, 0 === e && (t = t - b.size / 2 - a), Math.abs(t) < .001 && (t = 0), r % b.params.slidesPerGroup === 0 && b.snapGrid.push(t), b.slidesGrid.push(t)) : (r % b.params.slidesPerGroup === 0 && b.snapGrid.push(t), b.slidesGrid.push(t), t = t + o + a), b.virtualSize += o + a, i = o, r++);
	        }b.virtualSize = Math.max(b.virtualSize, b.size) + b.params.slidesOffsetAfter;var h;if (b.rtl && b.wrongRTL && ("slide" === b.params.effect || "coverflow" === b.params.effect) && b.wrapper.css({ width: b.virtualSize + b.params.spaceBetween + "px" }), (!b.support.flexbox || b.params.setWrapperSize) && (b.isHorizontal() ? b.wrapper.css({ width: b.virtualSize + b.params.spaceBetween + "px" }) : b.wrapper.css({ height: b.virtualSize + b.params.spaceBetween + "px" })), b.params.slidesPerColumn > 1 && (b.virtualSize = (o + b.params.spaceBetween) * n, b.virtualSize = Math.ceil(b.virtualSize / b.params.slidesPerColumn) - b.params.spaceBetween, b.wrapper.css({ width: b.virtualSize + b.params.spaceBetween + "px" }), b.params.centeredSlides)) {
	          for (h = [], e = 0; e < b.snapGrid.length; e++) {
	            b.snapGrid[e] < b.virtualSize + b.snapGrid[0] && h.push(b.snapGrid[e]);
	          }b.snapGrid = h;
	        }if (!b.params.centeredSlides) {
	          for (h = [], e = 0; e < b.snapGrid.length; e++) {
	            b.snapGrid[e] <= b.virtualSize - b.size && h.push(b.snapGrid[e]);
	          }b.snapGrid = h, Math.floor(b.virtualSize - b.size) > Math.floor(b.snapGrid[b.snapGrid.length - 1]) && b.snapGrid.push(b.virtualSize - b.size);
	        }0 === b.snapGrid.length && (b.snapGrid = [0]), 0 !== b.params.spaceBetween && (b.isHorizontal() ? b.rtl ? b.slides.css({ marginLeft: a + "px" }) : b.slides.css({ marginRight: a + "px" }) : b.slides.css({ marginBottom: a + "px" })), b.params.watchSlidesProgress && b.updateSlidesOffset();
	      }, b.updateSlidesOffset = function () {
	        for (var e = 0; e < b.slides.length; e++) {
	          b.slides[e].swiperSlideOffset = b.isHorizontal() ? b.slides[e].offsetLeft : b.slides[e].offsetTop;
	        }
	      }, b.updateSlidesProgress = function (e) {
	        if ("undefined" == typeof e && (e = b.translate || 0), 0 !== b.slides.length) {
	          "undefined" == typeof b.slides[0].swiperSlideOffset && b.updateSlidesOffset();var a = -e;b.rtl && (a = e), b.slides.removeClass(b.params.slideVisibleClass);for (var t = 0; t < b.slides.length; t++) {
	            var i = b.slides[t],
	                r = (a - i.swiperSlideOffset) / (i.swiperSlideSize + b.params.spaceBetween);if (b.params.watchSlidesVisibility) {
	              var s = -(a - i.swiperSlideOffset),
	                  n = s + b.slidesSizesGrid[t],
	                  o = s >= 0 && s < b.size || n > 0 && n <= b.size || 0 >= s && n >= b.size;o && b.slides.eq(t).addClass(b.params.slideVisibleClass);
	            }i.progress = b.rtl ? -r : r;
	          }
	        }
	      }, b.updateProgress = function (e) {
	        "undefined" == typeof e && (e = b.translate || 0);var a = b.maxTranslate() - b.minTranslate(),
	            t = b.isBeginning,
	            i = b.isEnd;0 === a ? (b.progress = 0, b.isBeginning = b.isEnd = !0) : (b.progress = (e - b.minTranslate()) / a, b.isBeginning = b.progress <= 0, b.isEnd = b.progress >= 1), b.isBeginning && !t && b.emit("onReachBeginning", b), b.isEnd && !i && b.emit("onReachEnd", b), b.params.watchSlidesProgress && b.updateSlidesProgress(e), b.emit("onProgress", b, b.progress);
	      }, b.updateActiveIndex = function () {
	        var e,
	            a,
	            t,
	            i = b.rtl ? b.translate : -b.translate;for (a = 0; a < b.slidesGrid.length; a++) {
	          "undefined" != typeof b.slidesGrid[a + 1] ? i >= b.slidesGrid[a] && i < b.slidesGrid[a + 1] - (b.slidesGrid[a + 1] - b.slidesGrid[a]) / 2 ? e = a : i >= b.slidesGrid[a] && i < b.slidesGrid[a + 1] && (e = a + 1) : i >= b.slidesGrid[a] && (e = a);
	        }(0 > e || "undefined" == typeof e) && (e = 0), t = Math.floor(e / b.params.slidesPerGroup), t >= b.snapGrid.length && (t = b.snapGrid.length - 1), e !== b.activeIndex && (b.snapIndex = t, b.previousIndex = b.activeIndex, b.activeIndex = e, b.updateClasses());
	      }, b.updateClasses = function () {
	        b.slides.removeClass(b.params.slideActiveClass + " " + b.params.slideNextClass + " " + b.params.slidePrevClass);var e = b.slides.eq(b.activeIndex);if (e.addClass(b.params.slideActiveClass), e.next("." + b.params.slideClass).addClass(b.params.slideNextClass), e.prev("." + b.params.slideClass).addClass(b.params.slidePrevClass), b.paginationContainer && b.paginationContainer.length > 0) {
	          var t,
	              i = b.params.loop ? Math.ceil((b.slides.length - 2 * b.loopedSlides) / b.params.slidesPerGroup) : b.snapGrid.length;if (b.params.loop ? (t = Math.ceil(b.activeIndex - b.loopedSlides) / b.params.slidesPerGroup, t > b.slides.length - 1 - 2 * b.loopedSlides && (t -= b.slides.length - 2 * b.loopedSlides), t > i - 1 && (t -= i), 0 > t && "bullets" !== b.params.paginationType && (t = i + t)) : t = "undefined" != typeof b.snapIndex ? b.snapIndex : b.activeIndex || 0, "bullets" === b.params.paginationType && b.bullets && b.bullets.length > 0 && (b.bullets.removeClass(b.params.bulletActiveClass), b.paginationContainer.length > 1 ? b.bullets.each(function () {
	            a(this).index() === t && a(this).addClass(b.params.bulletActiveClass);
	          }) : b.bullets.eq(t).addClass(b.params.bulletActiveClass)), "fraction" === b.params.paginationType && (b.paginationContainer.find("." + b.params.paginationCurrentClass).text(t + 1), b.paginationContainer.find("." + b.params.paginationTotalClass).text(i)), "progress" === b.params.paginationType) {
	            var r = (t + 1) / i,
	                s = r,
	                n = 1;b.isHorizontal() || (n = r, s = 1), b.paginationContainer.find("." + b.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + s + ") scaleY(" + n + ")").transition(b.params.speed);
	          }"custom" === b.params.paginationType && b.params.paginationCustomRender && b.paginationContainer.html(b.params.paginationCustomRender(b, t + 1, i));
	        }b.params.loop || (b.params.prevButton && (b.isBeginning ? (a(b.params.prevButton).addClass(b.params.buttonDisabledClass), b.params.a11y && b.a11y && b.a11y.disable(a(b.params.prevButton))) : (a(b.params.prevButton).removeClass(b.params.buttonDisabledClass), b.params.a11y && b.a11y && b.a11y.enable(a(b.params.prevButton)))), b.params.nextButton && (b.isEnd ? (a(b.params.nextButton).addClass(b.params.buttonDisabledClass), b.params.a11y && b.a11y && b.a11y.disable(a(b.params.nextButton))) : (a(b.params.nextButton).removeClass(b.params.buttonDisabledClass), b.params.a11y && b.a11y && b.a11y.enable(a(b.params.nextButton)))));
	      }, b.updatePagination = function () {
	        if (b.params.pagination && b.paginationContainer && b.paginationContainer.length > 0) {
	          var e = "";if ("bullets" === b.params.paginationType) {
	            for (var a = b.params.loop ? Math.ceil((b.slides.length - 2 * b.loopedSlides) / b.params.slidesPerGroup) : b.snapGrid.length, t = 0; a > t; t++) {
	              e += b.params.paginationBulletRender ? b.params.paginationBulletRender(t, b.params.bulletClass) : "<" + b.params.paginationElement + ' class="' + b.params.bulletClass + '"></' + b.params.paginationElement + ">";
	            }b.paginationContainer.html(e), b.bullets = b.paginationContainer.find("." + b.params.bulletClass), b.params.paginationClickable && b.params.a11y && b.a11y && b.a11y.initPagination();
	          }"fraction" === b.params.paginationType && (e = b.params.paginationFractionRender ? b.params.paginationFractionRender(b, b.params.paginationCurrentClass, b.params.paginationTotalClass) : '<span class="' + b.params.paginationCurrentClass + '"></span> / <span class="' + b.params.paginationTotalClass + '"></span>', b.paginationContainer.html(e)), "progress" === b.params.paginationType && (e = b.params.paginationProgressRender ? b.params.paginationProgressRender(b, b.params.paginationProgressbarClass) : '<span class="' + b.params.paginationProgressbarClass + '"></span>', b.paginationContainer.html(e));
	        }
	      }, b.update = function (e) {
	        function a() {
	          i = Math.min(Math.max(b.translate, b.maxTranslate()), b.minTranslate()), b.setWrapperTranslate(i), b.updateActiveIndex(), b.updateClasses();
	        }if (b.updateContainerSize(), b.updateSlidesSize(), b.updateProgress(), b.updatePagination(), b.updateClasses(), b.params.scrollbar && b.scrollbar && b.scrollbar.set(), e) {
	          var t, i;b.controller && b.controller.spline && (b.controller.spline = void 0), b.params.freeMode ? (a(), b.params.autoHeight && b.updateAutoHeight()) : (t = ("auto" === b.params.slidesPerView || b.params.slidesPerView > 1) && b.isEnd && !b.params.centeredSlides ? b.slideTo(b.slides.length - 1, 0, !1, !0) : b.slideTo(b.activeIndex, 0, !1, !0), t || a());
	        } else b.params.autoHeight && b.updateAutoHeight();
	      }, b.onResize = function (e) {
	        b.params.breakpoints && b.setBreakpoint();var a = b.params.allowSwipeToPrev,
	            t = b.params.allowSwipeToNext;if (b.params.allowSwipeToPrev = b.params.allowSwipeToNext = !0, b.updateContainerSize(), b.updateSlidesSize(), ("auto" === b.params.slidesPerView || b.params.freeMode || e) && b.updatePagination(), b.params.scrollbar && b.scrollbar && b.scrollbar.set(), b.controller && b.controller.spline && (b.controller.spline = void 0), b.params.freeMode) {
	          var i = Math.min(Math.max(b.translate, b.maxTranslate()), b.minTranslate());b.setWrapperTranslate(i), b.updateActiveIndex(), b.updateClasses(), b.params.autoHeight && b.updateAutoHeight();
	        } else b.updateClasses(), ("auto" === b.params.slidesPerView || b.params.slidesPerView > 1) && b.isEnd && !b.params.centeredSlides ? b.slideTo(b.slides.length - 1, 0, !1, !0) : b.slideTo(b.activeIndex, 0, !1, !0);b.params.allowSwipeToPrev = a, b.params.allowSwipeToNext = t;
	      };var T = ["mousedown", "mousemove", "mouseup"];window.navigator.pointerEnabled ? T = ["pointerdown", "pointermove", "pointerup"] : window.navigator.msPointerEnabled && (T = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), b.touchEvents = { start: b.support.touch || !b.params.simulateTouch ? "touchstart" : T[0], move: b.support.touch || !b.params.simulateTouch ? "touchmove" : T[1], end: b.support.touch || !b.params.simulateTouch ? "touchend" : T[2] }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === b.params.touchEventsTarget ? b.container : b.wrapper).addClass("swiper-wp8-" + b.params.direction), b.initEvents = function (e) {
	        var t = e ? "off" : "on",
	            i = e ? "removeEventListener" : "addEventListener",
	            s = "container" === b.params.touchEventsTarget ? b.container[0] : b.wrapper[0],
	            n = b.support.touch ? s : document,
	            o = b.params.nested ? !0 : !1;b.browser.ie ? (s[i](b.touchEvents.start, b.onTouchStart, !1), n[i](b.touchEvents.move, b.onTouchMove, o), n[i](b.touchEvents.end, b.onTouchEnd, !1)) : (b.support.touch && (s[i](b.touchEvents.start, b.onTouchStart, !1), s[i](b.touchEvents.move, b.onTouchMove, o), s[i](b.touchEvents.end, b.onTouchEnd, !1)), !r.simulateTouch || b.device.ios || b.device.android || (s[i]("mousedown", b.onTouchStart, !1), document[i]("mousemove", b.onTouchMove, o), document[i]("mouseup", b.onTouchEnd, !1))), window[i]("resize", b.onResize), b.params.nextButton && (a(b.params.nextButton)[t]("click", b.onClickNext), b.params.a11y && b.a11y && a(b.params.nextButton)[t]("keydown", b.a11y.onEnterKey)), b.params.prevButton && (a(b.params.prevButton)[t]("click", b.onClickPrev), b.params.a11y && b.a11y && a(b.params.prevButton)[t]("keydown", b.a11y.onEnterKey)), b.params.pagination && b.params.paginationClickable && (a(b.paginationContainer)[t]("click", "." + b.params.bulletClass, b.onClickIndex), b.params.a11y && b.a11y && a(b.paginationContainer)[t]("keydown", "." + b.params.bulletClass, b.a11y.onEnterKey)), (b.params.preventClicks || b.params.preventClicksPropagation) && s[i]("click", b.preventClicks, !0);
	      }, b.attachEvents = function (e) {
	        b.initEvents();
	      }, b.detachEvents = function () {
	        b.initEvents(!0);
	      }, b.allowClick = !0, b.preventClicks = function (e) {
	        b.allowClick || (b.params.preventClicks && e.preventDefault(), b.params.preventClicksPropagation && b.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
	      }, b.onClickNext = function (e) {
	        e.preventDefault(), (!b.isEnd || b.params.loop) && b.slideNext();
	      }, b.onClickPrev = function (e) {
	        e.preventDefault(), (!b.isBeginning || b.params.loop) && b.slidePrev();
	      }, b.onClickIndex = function (e) {
	        e.preventDefault();var t = a(this).index() * b.params.slidesPerGroup;b.params.loop && (t += b.loopedSlides), b.slideTo(t);
	      }, b.updateClickedSlide = function (e) {
	        var t = o(e, "." + b.params.slideClass),
	            i = !1;if (t) for (var r = 0; r < b.slides.length; r++) {
	          b.slides[r] === t && (i = !0);
	        }if (!t || !i) return b.clickedSlide = void 0, void (b.clickedIndex = void 0);if (b.clickedSlide = t, b.clickedIndex = a(t).index(), b.params.slideToClickedSlide && void 0 !== b.clickedIndex && b.clickedIndex !== b.activeIndex) {
	          var s,
	              n = b.clickedIndex;if (b.params.loop) {
	            if (b.animating) return;s = a(b.clickedSlide).attr("data-swiper-slide-index"), b.params.centeredSlides ? n < b.loopedSlides - b.params.slidesPerView / 2 || n > b.slides.length - b.loopedSlides + b.params.slidesPerView / 2 ? (b.fixLoop(), n = b.wrapper.children("." + b.params.slideClass + '[data-swiper-slide-index="' + s + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function () {
	              b.slideTo(n);
	            }, 0)) : b.slideTo(n) : n > b.slides.length - b.params.slidesPerView ? (b.fixLoop(), n = b.wrapper.children("." + b.params.slideClass + '[data-swiper-slide-index="' + s + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function () {
	              b.slideTo(n);
	            }, 0)) : b.slideTo(n);
	          } else b.slideTo(n);
	        }
	      };var x,
	          S,
	          C,
	          z,
	          M,
	          P,
	          E,
	          k,
	          I,
	          L,
	          D = "input, select, textarea, button",
	          H = Date.now(),
	          B = [];b.animating = !1, b.touches = { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 };var A, G;if (b.onTouchStart = function (e) {
	        if (e.originalEvent && (e = e.originalEvent), A = "touchstart" === e.type, A || !("which" in e) || 3 !== e.which) {
	          if (b.params.noSwiping && o(e, "." + b.params.noSwipingClass)) return void (b.allowClick = !0);if (!b.params.swipeHandler || o(e, b.params.swipeHandler)) {
	            var t = b.touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
	                i = b.touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY;if (!(b.device.ios && b.params.iOSEdgeSwipeDetection && t <= b.params.iOSEdgeSwipeThreshold)) {
	              if (x = !0, S = !1, C = !0, M = void 0, G = void 0, b.touches.startX = t, b.touches.startY = i, z = Date.now(), b.allowClick = !0, b.updateContainerSize(), b.swipeDirection = void 0, b.params.threshold > 0 && (k = !1), "touchstart" !== e.type) {
	                var r = !0;a(e.target).is(D) && (r = !1), document.activeElement && a(document.activeElement).is(D) && document.activeElement.blur(), r && e.preventDefault();
	              }b.emit("onTouchStart", b, e);
	            }
	          }
	        }
	      }, b.onTouchMove = function (e) {
	        if (e.originalEvent && (e = e.originalEvent), !(A && "mousemove" === e.type || e.preventedByNestedSwiper)) {
	          if (b.params.onlyExternal) return b.allowClick = !1, void (x && (b.touches.startX = b.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, b.touches.startY = b.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, z = Date.now()));if (A && document.activeElement && e.target === document.activeElement && a(e.target).is(D)) return S = !0, void (b.allowClick = !1);if (C && b.emit("onTouchMove", b, e), !(e.targetTouches && e.targetTouches.length > 1)) {
	            if (b.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, b.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, "undefined" == typeof M) {
	              var t = 180 * Math.atan2(Math.abs(b.touches.currentY - b.touches.startY), Math.abs(b.touches.currentX - b.touches.startX)) / Math.PI;M = b.isHorizontal() ? t > b.params.touchAngle : 90 - t > b.params.touchAngle;
	            }if (M && b.emit("onTouchMoveOpposite", b, e), "undefined" == typeof G && b.browser.ieTouch && (b.touches.currentX !== b.touches.startX || b.touches.currentY !== b.touches.startY) && (G = !0), x) {
	              if (M) return void (x = !1);if (G || !b.browser.ieTouch) {
	                b.allowClick = !1, b.emit("onSliderMove", b, e), e.preventDefault(), b.params.touchMoveStopPropagation && !b.params.nested && e.stopPropagation(), S || (r.loop && b.fixLoop(), E = b.getWrapperTranslate(), b.setWrapperTransition(0), b.animating && b.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), b.params.autoplay && b.autoplaying && (b.params.autoplayDisableOnInteraction ? b.stopAutoplay() : b.pauseAutoplay()), L = !1, b.params.grabCursor && (b.container[0].style.cursor = "move", b.container[0].style.cursor = "-webkit-grabbing", b.container[0].style.cursor = "-moz-grabbin", b.container[0].style.cursor = "grabbing")), S = !0;var i = b.touches.diff = b.isHorizontal() ? b.touches.currentX - b.touches.startX : b.touches.currentY - b.touches.startY;i *= b.params.touchRatio, b.rtl && (i = -i), b.swipeDirection = i > 0 ? "prev" : "next", P = i + E;var s = !0;if (i > 0 && P > b.minTranslate() ? (s = !1, b.params.resistance && (P = b.minTranslate() - 1 + Math.pow(-b.minTranslate() + E + i, b.params.resistanceRatio))) : 0 > i && P < b.maxTranslate() && (s = !1, b.params.resistance && (P = b.maxTranslate() + 1 - Math.pow(b.maxTranslate() - E - i, b.params.resistanceRatio))), s && (e.preventedByNestedSwiper = !0), !b.params.allowSwipeToNext && "next" === b.swipeDirection && E > P && (P = E), !b.params.allowSwipeToPrev && "prev" === b.swipeDirection && P > E && (P = E), b.params.followFinger) {
	                  if (b.params.threshold > 0) {
	                    if (!(Math.abs(i) > b.params.threshold || k)) return void (P = E);if (!k) return k = !0, b.touches.startX = b.touches.currentX, b.touches.startY = b.touches.currentY, P = E, void (b.touches.diff = b.isHorizontal() ? b.touches.currentX - b.touches.startX : b.touches.currentY - b.touches.startY);
	                  }(b.params.freeMode || b.params.watchSlidesProgress) && b.updateActiveIndex(), b.params.freeMode && (0 === B.length && B.push({ position: b.touches[b.isHorizontal() ? "startX" : "startY"], time: z }), B.push({ position: b.touches[b.isHorizontal() ? "currentX" : "currentY"], time: new window.Date().getTime() })), b.updateProgress(P), b.setWrapperTranslate(P);
	                }
	              }
	            }
	          }
	        }
	      }, b.onTouchEnd = function (e) {
	        if (e.originalEvent && (e = e.originalEvent), C && b.emit("onTouchEnd", b, e), C = !1, x) {
	          b.params.grabCursor && S && x && (b.container[0].style.cursor = "move", b.container[0].style.cursor = "-webkit-grab", b.container[0].style.cursor = "-moz-grab", b.container[0].style.cursor = "grab");var t = Date.now(),
	              i = t - z;if (b.allowClick && (b.updateClickedSlide(e), b.emit("onTap", b, e), 300 > i && t - H > 300 && (I && clearTimeout(I), I = setTimeout(function () {
	            b && (b.params.paginationHide && b.paginationContainer.length > 0 && !a(e.target).hasClass(b.params.bulletClass) && b.paginationContainer.toggleClass(b.params.paginationHiddenClass), b.emit("onClick", b, e));
	          }, 300)), 300 > i && 300 > t - H && (I && clearTimeout(I), b.emit("onDoubleTap", b, e))), H = Date.now(), setTimeout(function () {
	            b && (b.allowClick = !0);
	          }, 0), !x || !S || !b.swipeDirection || 0 === b.touches.diff || P === E) return void (x = S = !1);x = S = !1;var r;if (r = b.params.followFinger ? b.rtl ? b.translate : -b.translate : -P, b.params.freeMode) {
	            if (r < -b.minTranslate()) return void b.slideTo(b.activeIndex);if (r > -b.maxTranslate()) return void (b.slides.length < b.snapGrid.length ? b.slideTo(b.snapGrid.length - 1) : b.slideTo(b.slides.length - 1));if (b.params.freeModeMomentum) {
	              if (B.length > 1) {
	                var s = B.pop(),
	                    n = B.pop(),
	                    o = s.position - n.position,
	                    l = s.time - n.time;b.velocity = o / l, b.velocity = b.velocity / 2, Math.abs(b.velocity) < b.params.freeModeMinimumVelocity && (b.velocity = 0), (l > 150 || new window.Date().getTime() - s.time > 300) && (b.velocity = 0);
	              } else b.velocity = 0;B.length = 0;var p = 1e3 * b.params.freeModeMomentumRatio,
	                  d = b.velocity * p,
	                  u = b.translate + d;b.rtl && (u = -u);var c,
	                  m = !1,
	                  f = 20 * Math.abs(b.velocity) * b.params.freeModeMomentumBounceRatio;if (u < b.maxTranslate()) b.params.freeModeMomentumBounce ? (u + b.maxTranslate() < -f && (u = b.maxTranslate() - f), c = b.maxTranslate(), m = !0, L = !0) : u = b.maxTranslate();else if (u > b.minTranslate()) b.params.freeModeMomentumBounce ? (u - b.minTranslate() > f && (u = b.minTranslate() + f), c = b.minTranslate(), m = !0, L = !0) : u = b.minTranslate();else if (b.params.freeModeSticky) {
	                var h,
	                    g = 0;for (g = 0; g < b.snapGrid.length; g += 1) {
	                  if (b.snapGrid[g] > -u) {
	                    h = g;break;
	                  }
	                }u = Math.abs(b.snapGrid[h] - u) < Math.abs(b.snapGrid[h - 1] - u) || "next" === b.swipeDirection ? b.snapGrid[h] : b.snapGrid[h - 1], b.rtl || (u = -u);
	              }if (0 !== b.velocity) p = b.rtl ? Math.abs((-u - b.translate) / b.velocity) : Math.abs((u - b.translate) / b.velocity);else if (b.params.freeModeSticky) return void b.slideReset();b.params.freeModeMomentumBounce && m ? (b.updateProgress(c), b.setWrapperTransition(p), b.setWrapperTranslate(u), b.onTransitionStart(), b.animating = !0, b.wrapper.transitionEnd(function () {
	                b && L && (b.emit("onMomentumBounce", b), b.setWrapperTransition(b.params.speed), b.setWrapperTranslate(c), b.wrapper.transitionEnd(function () {
	                  b && b.onTransitionEnd();
	                }));
	              })) : b.velocity ? (b.updateProgress(u), b.setWrapperTransition(p), b.setWrapperTranslate(u), b.onTransitionStart(), b.animating || (b.animating = !0, b.wrapper.transitionEnd(function () {
	                b && b.onTransitionEnd();
	              }))) : b.updateProgress(u), b.updateActiveIndex();
	            }return void ((!b.params.freeModeMomentum || i >= b.params.longSwipesMs) && (b.updateProgress(), b.updateActiveIndex()));
	          }var v,
	              w = 0,
	              y = b.slidesSizesGrid[0];for (v = 0; v < b.slidesGrid.length; v += b.params.slidesPerGroup) {
	            "undefined" != typeof b.slidesGrid[v + b.params.slidesPerGroup] ? r >= b.slidesGrid[v] && r < b.slidesGrid[v + b.params.slidesPerGroup] && (w = v, y = b.slidesGrid[v + b.params.slidesPerGroup] - b.slidesGrid[v]) : r >= b.slidesGrid[v] && (w = v, y = b.slidesGrid[b.slidesGrid.length - 1] - b.slidesGrid[b.slidesGrid.length - 2]);
	          }var T = (r - b.slidesGrid[w]) / y;if (i > b.params.longSwipesMs) {
	            if (!b.params.longSwipes) return void b.slideTo(b.activeIndex);"next" === b.swipeDirection && (T >= b.params.longSwipesRatio ? b.slideTo(w + b.params.slidesPerGroup) : b.slideTo(w)), "prev" === b.swipeDirection && (T > 1 - b.params.longSwipesRatio ? b.slideTo(w + b.params.slidesPerGroup) : b.slideTo(w));
	          } else {
	            if (!b.params.shortSwipes) return void b.slideTo(b.activeIndex);"next" === b.swipeDirection && b.slideTo(w + b.params.slidesPerGroup), "prev" === b.swipeDirection && b.slideTo(w);
	          }
	        }
	      }, b._slideTo = function (e, a) {
	        return b.slideTo(e, a, !0, !0);
	      }, b.slideTo = function (e, a, t, i) {
	        "undefined" == typeof t && (t = !0), "undefined" == typeof e && (e = 0), 0 > e && (e = 0), b.snapIndex = Math.floor(e / b.params.slidesPerGroup), b.snapIndex >= b.snapGrid.length && (b.snapIndex = b.snapGrid.length - 1);var r = -b.snapGrid[b.snapIndex];b.params.autoplay && b.autoplaying && (i || !b.params.autoplayDisableOnInteraction ? b.pauseAutoplay(a) : b.stopAutoplay()), b.updateProgress(r);for (var s = 0; s < b.slidesGrid.length; s++) {
	          -Math.floor(100 * r) >= Math.floor(100 * b.slidesGrid[s]) && (e = s);
	        }return !b.params.allowSwipeToNext && r < b.translate && r < b.minTranslate() ? !1 : !b.params.allowSwipeToPrev && r > b.translate && r > b.maxTranslate() && (b.activeIndex || 0) !== e ? !1 : ("undefined" == typeof a && (a = b.params.speed), b.previousIndex = b.activeIndex || 0, b.activeIndex = e, b.rtl && -r === b.translate || !b.rtl && r === b.translate ? (b.params.autoHeight && b.updateAutoHeight(), b.updateClasses(), "slide" !== b.params.effect && b.setWrapperTranslate(r), !1) : (b.updateClasses(), b.onTransitionStart(t), 0 === a ? (b.setWrapperTranslate(r), b.setWrapperTransition(0), b.onTransitionEnd(t)) : (b.setWrapperTranslate(r), b.setWrapperTransition(a), b.animating || (b.animating = !0, b.wrapper.transitionEnd(function () {
	          b && b.onTransitionEnd(t);
	        }))), !0));
	      }, b.onTransitionStart = function (e) {
	        "undefined" == typeof e && (e = !0), b.params.autoHeight && b.updateAutoHeight(), b.lazy && b.lazy.onTransitionStart(), e && (b.emit("onTransitionStart", b), b.activeIndex !== b.previousIndex && (b.emit("onSlideChangeStart", b), b.activeIndex > b.previousIndex ? b.emit("onSlideNextStart", b) : b.emit("onSlidePrevStart", b)));
	      }, b.onTransitionEnd = function (e) {
	        b.animating = !1, b.setWrapperTransition(0), "undefined" == typeof e && (e = !0), b.lazy && b.lazy.onTransitionEnd(), e && (b.emit("onTransitionEnd", b), b.activeIndex !== b.previousIndex && (b.emit("onSlideChangeEnd", b), b.activeIndex > b.previousIndex ? b.emit("onSlideNextEnd", b) : b.emit("onSlidePrevEnd", b))), b.params.hashnav && b.hashnav && b.hashnav.setHash();
	      }, b.slideNext = function (e, a, t) {
	        if (b.params.loop) {
	          if (b.animating) return !1;b.fixLoop();b.container[0].clientLeft;return b.slideTo(b.activeIndex + b.params.slidesPerGroup, a, e, t);
	        }return b.slideTo(b.activeIndex + b.params.slidesPerGroup, a, e, t);
	      }, b._slideNext = function (e) {
	        return b.slideNext(!0, e, !0);
	      }, b.slidePrev = function (e, a, t) {
	        if (b.params.loop) {
	          if (b.animating) return !1;b.fixLoop();b.container[0].clientLeft;return b.slideTo(b.activeIndex - 1, a, e, t);
	        }return b.slideTo(b.activeIndex - 1, a, e, t);
	      }, b._slidePrev = function (e) {
	        return b.slidePrev(!0, e, !0);
	      }, b.slideReset = function (e, a, t) {
	        return b.slideTo(b.activeIndex, a, e);
	      }, b.setWrapperTransition = function (e, a) {
	        b.wrapper.transition(e), "slide" !== b.params.effect && b.effects[b.params.effect] && b.effects[b.params.effect].setTransition(e), b.params.parallax && b.parallax && b.parallax.setTransition(e), b.params.scrollbar && b.scrollbar && b.scrollbar.setTransition(e), b.params.control && b.controller && b.controller.setTransition(e, a), b.emit("onSetTransition", b, e);
	      }, b.setWrapperTranslate = function (e, a, t) {
	        var i = 0,
	            r = 0,
	            n = 0;b.isHorizontal() ? i = b.rtl ? -e : e : r = e, b.params.roundLengths && (i = s(i), r = s(r)), b.params.virtualTranslate || (b.support.transforms3d ? b.wrapper.transform("translate3d(" + i + "px, " + r + "px, " + n + "px)") : b.wrapper.transform("translate(" + i + "px, " + r + "px)")), b.translate = b.isHorizontal() ? i : r;var o,
	            l = b.maxTranslate() - b.minTranslate();o = 0 === l ? 0 : (e - b.minTranslate()) / l, o !== b.progress && b.updateProgress(e), a && b.updateActiveIndex(), "slide" !== b.params.effect && b.effects[b.params.effect] && b.effects[b.params.effect].setTranslate(b.translate), b.params.parallax && b.parallax && b.parallax.setTranslate(b.translate), b.params.scrollbar && b.scrollbar && b.scrollbar.setTranslate(b.translate), b.params.control && b.controller && b.controller.setTranslate(b.translate, t), b.emit("onSetTranslate", b, b.translate);
	      }, b.getTranslate = function (e, a) {
	        var t, i, r, s;return "undefined" == typeof a && (a = "x"), b.params.virtualTranslate ? b.rtl ? -b.translate : b.translate : (r = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? (i = r.transform || r.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map(function (e) {
	          return e.replace(",", ".");
	        }).join(", ")), s = new window.WebKitCSSMatrix("none" === i ? "" : i)) : (s = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), t = s.toString().split(",")), "x" === a && (i = window.WebKitCSSMatrix ? s.m41 : 16 === t.length ? parseFloat(t[12]) : parseFloat(t[4])), "y" === a && (i = window.WebKitCSSMatrix ? s.m42 : 16 === t.length ? parseFloat(t[13]) : parseFloat(t[5])), b.rtl && i && (i = -i), i || 0);
	      }, b.getWrapperTranslate = function (e) {
	        return "undefined" == typeof e && (e = b.isHorizontal() ? "x" : "y"), b.getTranslate(b.wrapper[0], e);
	      }, b.observers = [], b.initObservers = function () {
	        if (b.params.observeParents) for (var e = b.container.parents(), a = 0; a < e.length; a++) {
	          l(e[a]);
	        }l(b.container[0], { childList: !1 }), l(b.wrapper[0], { attributes: !1 });
	      }, b.disconnectObservers = function () {
	        for (var e = 0; e < b.observers.length; e++) {
	          b.observers[e].disconnect();
	        }b.observers = [];
	      }, b.createLoop = function () {
	        b.wrapper.children("." + b.params.slideClass + "." + b.params.slideDuplicateClass).remove();var e = b.wrapper.children("." + b.params.slideClass);"auto" !== b.params.slidesPerView || b.params.loopedSlides || (b.params.loopedSlides = e.length), b.loopedSlides = parseInt(b.params.loopedSlides || b.params.slidesPerView, 10), b.loopedSlides = b.loopedSlides + b.params.loopAdditionalSlides, b.loopedSlides > e.length && (b.loopedSlides = e.length);var t,
	            i = [],
	            r = [];for (e.each(function (t, s) {
	          var n = a(this);t < b.loopedSlides && r.push(s), t < e.length && t >= e.length - b.loopedSlides && i.push(s), n.attr("data-swiper-slide-index", t);
	        }), t = 0; t < r.length; t++) {
	          b.wrapper.append(a(r[t].cloneNode(!0)).addClass(b.params.slideDuplicateClass));
	        }for (t = i.length - 1; t >= 0; t--) {
	          b.wrapper.prepend(a(i[t].cloneNode(!0)).addClass(b.params.slideDuplicateClass));
	        }
	      }, b.destroyLoop = function () {
	        b.wrapper.children("." + b.params.slideClass + "." + b.params.slideDuplicateClass).remove(), b.slides.removeAttr("data-swiper-slide-index");
	      }, b.fixLoop = function () {
	        var e;b.activeIndex < b.loopedSlides ? (e = b.slides.length - 3 * b.loopedSlides + b.activeIndex, e += b.loopedSlides, b.slideTo(e, 0, !1, !0)) : ("auto" === b.params.slidesPerView && b.activeIndex >= 2 * b.loopedSlides || b.activeIndex > b.slides.length - 2 * b.params.slidesPerView) && (e = -b.slides.length + b.activeIndex + b.loopedSlides, e += b.loopedSlides, b.slideTo(e, 0, !1, !0));
	      }, b.appendSlide = function (e) {
	        if (b.params.loop && b.destroyLoop(), "object" == (typeof e === "undefined" ? "undefined" : (0, _typeof3.default)(e)) && e.length) for (var a = 0; a < e.length; a++) {
	          e[a] && b.wrapper.append(e[a]);
	        } else b.wrapper.append(e);b.params.loop && b.createLoop(), b.params.observer && b.support.observer || b.update(!0);
	      }, b.prependSlide = function (e) {
	        b.params.loop && b.destroyLoop();var a = b.activeIndex + 1;if ("object" == (typeof e === "undefined" ? "undefined" : (0, _typeof3.default)(e)) && e.length) {
	          for (var t = 0; t < e.length; t++) {
	            e[t] && b.wrapper.prepend(e[t]);
	          }a = b.activeIndex + e.length;
	        } else b.wrapper.prepend(e);b.params.loop && b.createLoop(), b.params.observer && b.support.observer || b.update(!0), b.slideTo(a, 0, !1);
	      }, b.removeSlide = function (e) {
	        b.params.loop && (b.destroyLoop(), b.slides = b.wrapper.children("." + b.params.slideClass));var a,
	            t = b.activeIndex;if ("object" == (typeof e === "undefined" ? "undefined" : (0, _typeof3.default)(e)) && e.length) {
	          for (var i = 0; i < e.length; i++) {
	            a = e[i], b.slides[a] && b.slides.eq(a).remove(), t > a && t--;
	          }t = Math.max(t, 0);
	        } else a = e, b.slides[a] && b.slides.eq(a).remove(), t > a && t--, t = Math.max(t, 0);b.params.loop && b.createLoop(), b.params.observer && b.support.observer || b.update(!0), b.params.loop ? b.slideTo(t + b.loopedSlides, 0, !1) : b.slideTo(t, 0, !1);
	      }, b.removeAllSlides = function () {
	        for (var e = [], a = 0; a < b.slides.length; a++) {
	          e.push(a);
	        }b.removeSlide(e);
	      }, b.effects = { fade: { setTranslate: function setTranslate() {
	            for (var e = 0; e < b.slides.length; e++) {
	              var a = b.slides.eq(e),
	                  t = a[0].swiperSlideOffset,
	                  i = -t;b.params.virtualTranslate || (i -= b.translate);var r = 0;b.isHorizontal() || (r = i, i = 0);var s = b.params.fade.crossFade ? Math.max(1 - Math.abs(a[0].progress), 0) : 1 + Math.min(Math.max(a[0].progress, -1), 0);a.css({ opacity: s }).transform("translate3d(" + i + "px, " + r + "px, 0px)");
	            }
	          }, setTransition: function setTransition(e) {
	            if (b.slides.transition(e), b.params.virtualTranslate && 0 !== e) {
	              var a = !1;b.slides.transitionEnd(function () {
	                if (!a && b) {
	                  a = !0, b.animating = !1;for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], t = 0; t < e.length; t++) {
	                    b.wrapper.trigger(e[t]);
	                  }
	                }
	              });
	            }
	          } }, flip: { setTranslate: function setTranslate() {
	            for (var e = 0; e < b.slides.length; e++) {
	              var t = b.slides.eq(e),
	                  i = t[0].progress;b.params.flip.limitRotation && (i = Math.max(Math.min(t[0].progress, 1), -1));var r = t[0].swiperSlideOffset,
	                  s = -180 * i,
	                  n = s,
	                  o = 0,
	                  l = -r,
	                  p = 0;if (b.isHorizontal() ? b.rtl && (n = -n) : (p = l, l = 0, o = -n, n = 0), t[0].style.zIndex = -Math.abs(Math.round(i)) + b.slides.length, b.params.flip.slideShadows) {
	                var d = b.isHorizontal() ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
	                    u = b.isHorizontal() ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");0 === d.length && (d = a('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "left" : "top") + '"></div>'), t.append(d)), 0 === u.length && (u = a('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "right" : "bottom") + '"></div>'), t.append(u)), d.length && (d[0].style.opacity = Math.max(-i, 0)), u.length && (u[0].style.opacity = Math.max(i, 0));
	              }t.transform("translate3d(" + l + "px, " + p + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)");
	            }
	          }, setTransition: function setTransition(e) {
	            if (b.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), b.params.virtualTranslate && 0 !== e) {
	              var t = !1;b.slides.eq(b.activeIndex).transitionEnd(function () {
	                if (!t && b && a(this).hasClass(b.params.slideActiveClass)) {
	                  t = !0, b.animating = !1;for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], i = 0; i < e.length; i++) {
	                    b.wrapper.trigger(e[i]);
	                  }
	                }
	              });
	            }
	          } }, cube: { setTranslate: function setTranslate() {
	            var e,
	                t = 0;b.params.cube.shadow && (b.isHorizontal() ? (e = b.wrapper.find(".swiper-cube-shadow"), 0 === e.length && (e = a('<div class="swiper-cube-shadow"></div>'), b.wrapper.append(e)), e.css({ height: b.width + "px" })) : (e = b.container.find(".swiper-cube-shadow"), 0 === e.length && (e = a('<div class="swiper-cube-shadow"></div>'), b.container.append(e))));for (var i = 0; i < b.slides.length; i++) {
	              var r = b.slides.eq(i),
	                  s = 90 * i,
	                  n = Math.floor(s / 360);b.rtl && (s = -s, n = Math.floor(-s / 360));var o = Math.max(Math.min(r[0].progress, 1), -1),
	                  l = 0,
	                  p = 0,
	                  d = 0;i % 4 === 0 ? (l = 4 * -n * b.size, d = 0) : (i - 1) % 4 === 0 ? (l = 0, d = 4 * -n * b.size) : (i - 2) % 4 === 0 ? (l = b.size + 4 * n * b.size, d = b.size) : (i - 3) % 4 === 0 && (l = -b.size, d = 3 * b.size + 4 * b.size * n), b.rtl && (l = -l), b.isHorizontal() || (p = l, l = 0);var u = "rotateX(" + (b.isHorizontal() ? 0 : -s) + "deg) rotateY(" + (b.isHorizontal() ? s : 0) + "deg) translate3d(" + l + "px, " + p + "px, " + d + "px)";if (1 >= o && o > -1 && (t = 90 * i + 90 * o, b.rtl && (t = 90 * -i - 90 * o)), r.transform(u), b.params.cube.slideShadows) {
	                var c = b.isHorizontal() ? r.find(".swiper-slide-shadow-left") : r.find(".swiper-slide-shadow-top"),
	                    m = b.isHorizontal() ? r.find(".swiper-slide-shadow-right") : r.find(".swiper-slide-shadow-bottom");0 === c.length && (c = a('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "left" : "top") + '"></div>'), r.append(c)), 0 === m.length && (m = a('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "right" : "bottom") + '"></div>'), r.append(m)), c.length && (c[0].style.opacity = Math.max(-o, 0)), m.length && (m[0].style.opacity = Math.max(o, 0));
	              }
	            }if (b.wrapper.css({ "-webkit-transform-origin": "50% 50% -" + b.size / 2 + "px", "-moz-transform-origin": "50% 50% -" + b.size / 2 + "px", "-ms-transform-origin": "50% 50% -" + b.size / 2 + "px", "transform-origin": "50% 50% -" + b.size / 2 + "px" }), b.params.cube.shadow) if (b.isHorizontal()) e.transform("translate3d(0px, " + (b.width / 2 + b.params.cube.shadowOffset) + "px, " + -b.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + b.params.cube.shadowScale + ")");else {
	              var f = Math.abs(t) - 90 * Math.floor(Math.abs(t) / 90),
	                  h = 1.5 - (Math.sin(2 * f * Math.PI / 360) / 2 + Math.cos(2 * f * Math.PI / 360) / 2),
	                  g = b.params.cube.shadowScale,
	                  v = b.params.cube.shadowScale / h,
	                  w = b.params.cube.shadowOffset;e.transform("scale3d(" + g + ", 1, " + v + ") translate3d(0px, " + (b.height / 2 + w) + "px, " + -b.height / 2 / v + "px) rotateX(-90deg)");
	            }var y = b.isSafari || b.isUiWebView ? -b.size / 2 : 0;b.wrapper.transform("translate3d(0px,0," + y + "px) rotateX(" + (b.isHorizontal() ? 0 : t) + "deg) rotateY(" + (b.isHorizontal() ? -t : 0) + "deg)");
	          }, setTransition: function setTransition(e) {
	            b.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), b.params.cube.shadow && !b.isHorizontal() && b.container.find(".swiper-cube-shadow").transition(e);
	          } }, coverflow: { setTranslate: function setTranslate() {
	            for (var e = b.translate, t = b.isHorizontal() ? -e + b.width / 2 : -e + b.height / 2, i = b.isHorizontal() ? b.params.coverflow.rotate : -b.params.coverflow.rotate, r = b.params.coverflow.depth, s = 0, n = b.slides.length; n > s; s++) {
	              var o = b.slides.eq(s),
	                  l = b.slidesSizesGrid[s],
	                  p = o[0].swiperSlideOffset,
	                  d = (t - p - l / 2) / l * b.params.coverflow.modifier,
	                  u = b.isHorizontal() ? i * d : 0,
	                  c = b.isHorizontal() ? 0 : i * d,
	                  m = -r * Math.abs(d),
	                  f = b.isHorizontal() ? 0 : b.params.coverflow.stretch * d,
	                  h = b.isHorizontal() ? b.params.coverflow.stretch * d : 0;Math.abs(h) < .001 && (h = 0), Math.abs(f) < .001 && (f = 0), Math.abs(m) < .001 && (m = 0), Math.abs(u) < .001 && (u = 0), Math.abs(c) < .001 && (c = 0);var g = "translate3d(" + h + "px," + f + "px," + m + "px)  rotateX(" + c + "deg) rotateY(" + u + "deg)";if (o.transform(g), o[0].style.zIndex = -Math.abs(Math.round(d)) + 1, b.params.coverflow.slideShadows) {
	                var v = b.isHorizontal() ? o.find(".swiper-slide-shadow-left") : o.find(".swiper-slide-shadow-top"),
	                    w = b.isHorizontal() ? o.find(".swiper-slide-shadow-right") : o.find(".swiper-slide-shadow-bottom");0 === v.length && (v = a('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "left" : "top") + '"></div>'), o.append(v)), 0 === w.length && (w = a('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "right" : "bottom") + '"></div>'), o.append(w)), v.length && (v[0].style.opacity = d > 0 ? d : 0), w.length && (w[0].style.opacity = -d > 0 ? -d : 0);
	              }
	            }if (b.browser.ie) {
	              var y = b.wrapper[0].style;y.perspectiveOrigin = t + "px 50%";
	            }
	          }, setTransition: function setTransition(e) {
	            b.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
	          } } }, b.lazy = { initialImageLoaded: !1, loadImageInSlide: function loadImageInSlide(e, t) {
	          if ("undefined" != typeof e && ("undefined" == typeof t && (t = !0), 0 !== b.slides.length)) {
	            var i = b.slides.eq(e),
	                r = i.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");!i.hasClass("swiper-lazy") || i.hasClass("swiper-lazy-loaded") || i.hasClass("swiper-lazy-loading") || (r = r.add(i[0])), 0 !== r.length && r.each(function () {
	              var e = a(this);e.addClass("swiper-lazy-loading");var r = e.attr("data-background"),
	                  s = e.attr("data-src"),
	                  n = e.attr("data-srcset");b.loadImage(e[0], s || r, n, !1, function () {
	                if (r ? (e.css("background-image", "url(" + r + ")"), e.removeAttr("data-background")) : (n && (e.attr("srcset", n), e.removeAttr("data-srcset")), s && (e.attr("src", s), e.removeAttr("data-src"))), e.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"), i.find(".swiper-lazy-preloader, .preloader").remove(), b.params.loop && t) {
	                  var a = i.attr("data-swiper-slide-index");if (i.hasClass(b.params.slideDuplicateClass)) {
	                    var o = b.wrapper.children('[data-swiper-slide-index="' + a + '"]:not(.' + b.params.slideDuplicateClass + ")");b.lazy.loadImageInSlide(o.index(), !1);
	                  } else {
	                    var l = b.wrapper.children("." + b.params.slideDuplicateClass + '[data-swiper-slide-index="' + a + '"]');b.lazy.loadImageInSlide(l.index(), !1);
	                  }
	                }b.emit("onLazyImageReady", b, i[0], e[0]);
	              }), b.emit("onLazyImageLoad", b, i[0], e[0]);
	            });
	          }
	        }, load: function load() {
	          var e;if (b.params.watchSlidesVisibility) b.wrapper.children("." + b.params.slideVisibleClass).each(function () {
	            b.lazy.loadImageInSlide(a(this).index());
	          });else if (b.params.slidesPerView > 1) for (e = b.activeIndex; e < b.activeIndex + b.params.slidesPerView; e++) {
	            b.slides[e] && b.lazy.loadImageInSlide(e);
	          } else b.lazy.loadImageInSlide(b.activeIndex);if (b.params.lazyLoadingInPrevNext) if (b.params.slidesPerView > 1 || b.params.lazyLoadingInPrevNextAmount && b.params.lazyLoadingInPrevNextAmount > 1) {
	            var t = b.params.lazyLoadingInPrevNextAmount,
	                i = b.params.slidesPerView,
	                r = Math.min(b.activeIndex + i + Math.max(t, i), b.slides.length),
	                s = Math.max(b.activeIndex - Math.max(i, t), 0);for (e = b.activeIndex + b.params.slidesPerView; r > e; e++) {
	              b.slides[e] && b.lazy.loadImageInSlide(e);
	            }for (e = s; e < b.activeIndex; e++) {
	              b.slides[e] && b.lazy.loadImageInSlide(e);
	            }
	          } else {
	            var n = b.wrapper.children("." + b.params.slideNextClass);n.length > 0 && b.lazy.loadImageInSlide(n.index());var o = b.wrapper.children("." + b.params.slidePrevClass);o.length > 0 && b.lazy.loadImageInSlide(o.index());
	          }
	        }, onTransitionStart: function onTransitionStart() {
	          b.params.lazyLoading && (b.params.lazyLoadingOnTransitionStart || !b.params.lazyLoadingOnTransitionStart && !b.lazy.initialImageLoaded) && b.lazy.load();
	        }, onTransitionEnd: function onTransitionEnd() {
	          b.params.lazyLoading && !b.params.lazyLoadingOnTransitionStart && b.lazy.load();
	        } }, b.scrollbar = { isTouched: !1, setDragPosition: function setDragPosition(e) {
	          var a = b.scrollbar,
	              t = b.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY,
	              i = t - a.track.offset()[b.isHorizontal() ? "left" : "top"] - a.dragSize / 2,
	              r = -b.minTranslate() * a.moveDivider,
	              s = -b.maxTranslate() * a.moveDivider;r > i ? i = r : i > s && (i = s), i = -i / a.moveDivider, b.updateProgress(i), b.setWrapperTranslate(i, !0);
	        }, dragStart: function dragStart(e) {
	          var a = b.scrollbar;a.isTouched = !0, e.preventDefault(), e.stopPropagation(), a.setDragPosition(e), clearTimeout(a.dragTimeout), a.track.transition(0), b.params.scrollbarHide && a.track.css("opacity", 1), b.wrapper.transition(100), a.drag.transition(100), b.emit("onScrollbarDragStart", b);
	        }, dragMove: function dragMove(e) {
	          var a = b.scrollbar;a.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, a.setDragPosition(e), b.wrapper.transition(0), a.track.transition(0), a.drag.transition(0), b.emit("onScrollbarDragMove", b));
	        }, dragEnd: function dragEnd(e) {
	          var a = b.scrollbar;a.isTouched && (a.isTouched = !1, b.params.scrollbarHide && (clearTimeout(a.dragTimeout), a.dragTimeout = setTimeout(function () {
	            a.track.css("opacity", 0), a.track.transition(400);
	          }, 1e3)), b.emit("onScrollbarDragEnd", b), b.params.scrollbarSnapOnRelease && b.slideReset());
	        }, enableDraggable: function enableDraggable() {
	          var e = b.scrollbar,
	              t = b.support.touch ? e.track : document;a(e.track).on(b.touchEvents.start, e.dragStart), a(t).on(b.touchEvents.move, e.dragMove), a(t).on(b.touchEvents.end, e.dragEnd);
	        }, disableDraggable: function disableDraggable() {
	          var e = b.scrollbar,
	              t = b.support.touch ? e.track : document;a(e.track).off(b.touchEvents.start, e.dragStart), a(t).off(b.touchEvents.move, e.dragMove), a(t).off(b.touchEvents.end, e.dragEnd);
	        }, set: function set() {
	          if (b.params.scrollbar) {
	            var e = b.scrollbar;e.track = a(b.params.scrollbar), e.drag = e.track.find(".swiper-scrollbar-drag"), 0 === e.drag.length && (e.drag = a('<div class="swiper-scrollbar-drag"></div>'), e.track.append(e.drag)), e.drag[0].style.width = "", e.drag[0].style.height = "", e.trackSize = b.isHorizontal() ? e.track[0].offsetWidth : e.track[0].offsetHeight, e.divider = b.size / b.virtualSize, e.moveDivider = e.divider * (e.trackSize / b.size), e.dragSize = e.trackSize * e.divider, b.isHorizontal() ? e.drag[0].style.width = e.dragSize + "px" : e.drag[0].style.height = e.dragSize + "px", e.divider >= 1 ? e.track[0].style.display = "none" : e.track[0].style.display = "", b.params.scrollbarHide && (e.track[0].style.opacity = 0);
	          }
	        }, setTranslate: function setTranslate() {
	          if (b.params.scrollbar) {
	            var e,
	                a = b.scrollbar,
	                t = (b.translate || 0, a.dragSize);e = (a.trackSize - a.dragSize) * b.progress, b.rtl && b.isHorizontal() ? (e = -e, e > 0 ? (t = a.dragSize - e, e = 0) : -e + a.dragSize > a.trackSize && (t = a.trackSize + e)) : 0 > e ? (t = a.dragSize + e, e = 0) : e + a.dragSize > a.trackSize && (t = a.trackSize - e), b.isHorizontal() ? (b.support.transforms3d ? a.drag.transform("translate3d(" + e + "px, 0, 0)") : a.drag.transform("translateX(" + e + "px)"), a.drag[0].style.width = t + "px") : (b.support.transforms3d ? a.drag.transform("translate3d(0px, " + e + "px, 0)") : a.drag.transform("translateY(" + e + "px)"), a.drag[0].style.height = t + "px"), b.params.scrollbarHide && (clearTimeout(a.timeout), a.track[0].style.opacity = 1, a.timeout = setTimeout(function () {
	              a.track[0].style.opacity = 0, a.track.transition(400);
	            }, 1e3));
	          }
	        }, setTransition: function setTransition(e) {
	          b.params.scrollbar && b.scrollbar.drag.transition(e);
	        } }, b.controller = { LinearSpline: function LinearSpline(e, a) {
	          this.x = e, this.y = a, this.lastIndex = e.length - 1;var t, i;this.x.length;this.interpolate = function (e) {
	            return e ? (i = r(this.x, e), t = i - 1, (e - this.x[t]) * (this.y[i] - this.y[t]) / (this.x[i] - this.x[t]) + this.y[t]) : 0;
	          };var r = function () {
	            var e, a, t;return function (i, r) {
	              for (a = -1, e = i.length; e - a > 1;) {
	                i[t = e + a >> 1] <= r ? a = t : e = t;
	              }return e;
	            };
	          }();
	        }, getInterpolateFunction: function getInterpolateFunction(e) {
	          b.controller.spline || (b.controller.spline = b.params.loop ? new b.controller.LinearSpline(b.slidesGrid, e.slidesGrid) : new b.controller.LinearSpline(b.snapGrid, e.snapGrid));
	        }, setTranslate: function setTranslate(e, a) {
	          function i(a) {
	            e = a.rtl && "horizontal" === a.params.direction ? -b.translate : b.translate, "slide" === b.params.controlBy && (b.controller.getInterpolateFunction(a), s = -b.controller.spline.interpolate(-e)), s && "container" !== b.params.controlBy || (r = (a.maxTranslate() - a.minTranslate()) / (b.maxTranslate() - b.minTranslate()), s = (e - b.minTranslate()) * r + a.minTranslate()), b.params.controlInverse && (s = a.maxTranslate() - s), a.updateProgress(s), a.setWrapperTranslate(s, !1, b), a.updateActiveIndex();
	          }var r,
	              s,
	              n = b.params.control;if (b.isArray(n)) for (var o = 0; o < n.length; o++) {
	            n[o] !== a && n[o] instanceof t && i(n[o]);
	          } else n instanceof t && a !== n && i(n);
	        }, setTransition: function setTransition(e, a) {
	          function i(a) {
	            a.setWrapperTransition(e, b), 0 !== e && (a.onTransitionStart(), a.wrapper.transitionEnd(function () {
	              s && (a.params.loop && "slide" === b.params.controlBy && a.fixLoop(), a.onTransitionEnd());
	            }));
	          }var r,
	              s = b.params.control;if (b.isArray(s)) for (r = 0; r < s.length; r++) {
	            s[r] !== a && s[r] instanceof t && i(s[r]);
	          } else s instanceof t && a !== s && i(s);
	        } }, b.hashnav = { init: function init() {
	          if (b.params.hashnav) {
	            b.hashnav.initialized = !0;var e = document.location.hash.replace("#", "");if (e) for (var a = 0, t = 0, i = b.slides.length; i > t; t++) {
	              var r = b.slides.eq(t),
	                  s = r.attr("data-hash");if (s === e && !r.hasClass(b.params.slideDuplicateClass)) {
	                var n = r.index();b.slideTo(n, a, b.params.runCallbacksOnInit, !0);
	              }
	            }
	          }
	        }, setHash: function setHash() {
	          b.hashnav.initialized && b.params.hashnav && (document.location.hash = b.slides.eq(b.activeIndex).attr("data-hash") || "");
	        } }, b.disableKeyboardControl = function () {
	        b.params.keyboardControl = !1, a(document).off("keydown", p);
	      }, b.enableKeyboardControl = function () {
	        b.params.keyboardControl = !0, a(document).on("keydown", p);
	      }, b.mousewheel = { event: !1, lastScrollTime: new window.Date().getTime() }, b.params.mousewheelControl) {
	        try {
	          new window.WheelEvent("wheel"), b.mousewheel.event = "wheel";
	        } catch (O) {}b.mousewheel.event || void 0 === document.onmousewheel || (b.mousewheel.event = "mousewheel"), b.mousewheel.event || (b.mousewheel.event = "DOMMouseScroll");
	      }b.disableMousewheelControl = function () {
	        return b.mousewheel.event ? (b.container.off(b.mousewheel.event, d), !0) : !1;
	      }, b.enableMousewheelControl = function () {
	        return b.mousewheel.event ? (b.container.on(b.mousewheel.event, d), !0) : !1;
	      }, b.parallax = { setTranslate: function setTranslate() {
	          b.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
	            u(this, b.progress);
	          }), b.slides.each(function () {
	            var e = a(this);e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
	              var a = Math.min(Math.max(e[0].progress, -1), 1);u(this, a);
	            });
	          });
	        }, setTransition: function setTransition(e) {
	          "undefined" == typeof e && (e = b.params.speed), b.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
	            var t = a(this),
	                i = parseInt(t.attr("data-swiper-parallax-duration"), 10) || e;0 === e && (i = 0), t.transition(i);
	          });
	        } }, b._plugins = [];for (var N in b.plugins) {
	        var R = b.plugins[N](b, b.params[N]);R && b._plugins.push(R);
	      }return b.callPlugins = function (e) {
	        for (var a = 0; a < b._plugins.length; a++) {
	          e in b._plugins[a] && b._plugins[a][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
	        }
	      }, b.emitterEventListeners = {}, b.emit = function (e) {
	        b.params[e] && b.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);var a;if (b.emitterEventListeners[e]) for (a = 0; a < b.emitterEventListeners[e].length; a++) {
	          b.emitterEventListeners[e][a](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
	        }b.callPlugins && b.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
	      }, b.on = function (e, a) {
	        return e = c(e), b.emitterEventListeners[e] || (b.emitterEventListeners[e] = []), b.emitterEventListeners[e].push(a), b;
	      }, b.off = function (e, a) {
	        var t;if (e = c(e), "undefined" == typeof a) return b.emitterEventListeners[e] = [], b;if (b.emitterEventListeners[e] && 0 !== b.emitterEventListeners[e].length) {
	          for (t = 0; t < b.emitterEventListeners[e].length; t++) {
	            b.emitterEventListeners[e][t] === a && b.emitterEventListeners[e].splice(t, 1);
	          }return b;
	        }
	      }, b.once = function (e, a) {
	        e = c(e);var t = function t() {
	          a(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), b.off(e, t);
	        };return b.on(e, t), b;
	      }, b.a11y = { makeFocusable: function makeFocusable(e) {
	          return e.attr("tabIndex", "0"), e;
	        }, addRole: function addRole(e, a) {
	          return e.attr("role", a), e;
	        }, addLabel: function addLabel(e, a) {
	          return e.attr("aria-label", a), e;
	        }, disable: function disable(e) {
	          return e.attr("aria-disabled", !0), e;
	        }, enable: function enable(e) {
	          return e.attr("aria-disabled", !1), e;
	        }, onEnterKey: function onEnterKey(e) {
	          13 === e.keyCode && (a(e.target).is(b.params.nextButton) ? (b.onClickNext(e), b.isEnd ? b.a11y.notify(b.params.lastSlideMessage) : b.a11y.notify(b.params.nextSlideMessage)) : a(e.target).is(b.params.prevButton) && (b.onClickPrev(e), b.isBeginning ? b.a11y.notify(b.params.firstSlideMessage) : b.a11y.notify(b.params.prevSlideMessage)), a(e.target).is("." + b.params.bulletClass) && a(e.target)[0].click());
	        }, liveRegion: a('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'), notify: function notify(e) {
	          var a = b.a11y.liveRegion;0 !== a.length && (a.html(""), a.html(e));
	        }, init: function init() {
	          if (b.params.nextButton) {
	            var e = a(b.params.nextButton);b.a11y.makeFocusable(e), b.a11y.addRole(e, "button"), b.a11y.addLabel(e, b.params.nextSlideMessage);
	          }if (b.params.prevButton) {
	            var t = a(b.params.prevButton);b.a11y.makeFocusable(t), b.a11y.addRole(t, "button"), b.a11y.addLabel(t, b.params.prevSlideMessage);
	          }a(b.container).append(b.a11y.liveRegion);
	        }, initPagination: function initPagination() {
	          b.params.pagination && b.params.paginationClickable && b.bullets && b.bullets.length && b.bullets.each(function () {
	            var e = a(this);b.a11y.makeFocusable(e), b.a11y.addRole(e, "button"), b.a11y.addLabel(e, b.params.paginationBulletMessage.replace(/{{index}}/, e.index() + 1));
	          });
	        }, destroy: function destroy() {
	          b.a11y.liveRegion && b.a11y.liveRegion.length > 0 && b.a11y.liveRegion.remove();
	        } }, b.init = function () {
	        b.params.loop && b.createLoop(), b.updateContainerSize(), b.updateSlidesSize(), b.updatePagination(), b.params.scrollbar && b.scrollbar && (b.scrollbar.set(), b.params.scrollbarDraggable && b.scrollbar.enableDraggable()), "slide" !== b.params.effect && b.effects[b.params.effect] && (b.params.loop || b.updateProgress(), b.effects[b.params.effect].setTranslate()), b.params.loop ? b.slideTo(b.params.initialSlide + b.loopedSlides, 0, b.params.runCallbacksOnInit) : (b.slideTo(b.params.initialSlide, 0, b.params.runCallbacksOnInit), 0 === b.params.initialSlide && (b.parallax && b.params.parallax && b.parallax.setTranslate(), b.lazy && b.params.lazyLoading && (b.lazy.load(), b.lazy.initialImageLoaded = !0))), b.attachEvents(), b.params.observer && b.support.observer && b.initObservers(), b.params.preloadImages && !b.params.lazyLoading && b.preloadImages(), b.params.autoplay && b.startAutoplay(), b.params.keyboardControl && b.enableKeyboardControl && b.enableKeyboardControl(), b.params.mousewheelControl && b.enableMousewheelControl && b.enableMousewheelControl(), b.params.hashnav && b.hashnav && b.hashnav.init(), b.params.a11y && b.a11y && b.a11y.init(), b.emit("onInit", b);
	      }, b.cleanupStyles = function () {
	        b.container.removeClass(b.classNames.join(" ")).removeAttr("style"), b.wrapper.removeAttr("style"), b.slides && b.slides.length && b.slides.removeClass([b.params.slideVisibleClass, b.params.slideActiveClass, b.params.slideNextClass, b.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), b.paginationContainer && b.paginationContainer.length && b.paginationContainer.removeClass(b.params.paginationHiddenClass), b.bullets && b.bullets.length && b.bullets.removeClass(b.params.bulletActiveClass), b.params.prevButton && a(b.params.prevButton).removeClass(b.params.buttonDisabledClass), b.params.nextButton && a(b.params.nextButton).removeClass(b.params.buttonDisabledClass), b.params.scrollbar && b.scrollbar && (b.scrollbar.track && b.scrollbar.track.length && b.scrollbar.track.removeAttr("style"), b.scrollbar.drag && b.scrollbar.drag.length && b.scrollbar.drag.removeAttr("style"));
	      }, b.destroy = function (e, a) {
	        b.detachEvents(), b.stopAutoplay(), b.params.scrollbar && b.scrollbar && b.params.scrollbarDraggable && b.scrollbar.disableDraggable(), b.params.loop && b.destroyLoop(), a && b.cleanupStyles(), b.disconnectObservers(), b.params.keyboardControl && b.disableKeyboardControl && b.disableKeyboardControl(), b.params.mousewheelControl && b.disableMousewheelControl && b.disableMousewheelControl(), b.params.a11y && b.a11y && b.a11y.destroy(), b.emit("onDestroy"), e !== !1 && (b = null);
	      }, b.init(), b;
	    }
	  };t.prototype = { isSafari: function () {
	      var e = navigator.userAgent.toLowerCase();return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0;
	    }(), isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent), isArray: function isArray(e) {
	      return "[object Array]" === Object.prototype.toString.apply(e);
	    }, browser: { ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
	      ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1 }, device: function () {
	      var e = navigator.userAgent,
	          a = e.match(/(Android);?[\s\/]+([\d.]+)?/),
	          t = e.match(/(iPad).*OS\s([\d_]+)/),
	          i = e.match(/(iPod)(.*OS\s([\d_]+))?/),
	          r = !t && e.match(/(iPhone\sOS)\s([\d_]+)/);return { ios: t || r || i, android: a };
	    }(), support: { touch: window.Modernizr && Modernizr.touch === !0 || function () {
	        return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
	      }(), transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function () {
	        var e = document.createElement("div").style;return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e;
	      }(), flexbox: function () {
	        for (var e = document.createElement("div").style, a = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), t = 0; t < a.length; t++) {
	          if (a[t] in e) return !0;
	        }
	      }(), observer: function () {
	        return "MutationObserver" in window || "WebkitMutationObserver" in window;
	      }() }, plugins: {} };for (var i = function () {
	    var e = function e(_e) {
	      var a = this,
	          t = 0;for (t = 0; t < _e.length; t++) {
	        a[t] = _e[t];
	      }return a.length = _e.length, this;
	    },
	        a = function a(_a, t) {
	      var i = [],
	          r = 0;if (_a && !t && _a instanceof e) return _a;if (_a) if ("string" == typeof _a) {
	        var s,
	            n,
	            o = _a.trim();if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
	          var l = "div";for (0 === o.indexOf("<li") && (l = "ul"), 0 === o.indexOf("<tr") && (l = "tbody"), (0 === o.indexOf("<td") || 0 === o.indexOf("<th")) && (l = "tr"), 0 === o.indexOf("<tbody") && (l = "table"), 0 === o.indexOf("<option") && (l = "select"), n = document.createElement(l), n.innerHTML = _a, r = 0; r < n.childNodes.length; r++) {
	            i.push(n.childNodes[r]);
	          }
	        } else for (s = t || "#" !== _a[0] || _a.match(/[ .<>:~]/) ? (t || document).querySelectorAll(_a) : [document.getElementById(_a.split("#")[1])], r = 0; r < s.length; r++) {
	          s[r] && i.push(s[r]);
	        }
	      } else if (_a.nodeType || _a === window || _a === document) i.push(_a);else if (_a.length > 0 && _a[0].nodeType) for (r = 0; r < _a.length; r++) {
	        i.push(_a[r]);
	      }return new e(i);
	    };return e.prototype = { addClass: function addClass(e) {
	        if ("undefined" == typeof e) return this;for (var a = e.split(" "), t = 0; t < a.length; t++) {
	          for (var i = 0; i < this.length; i++) {
	            this[i].classList.add(a[t]);
	          }
	        }return this;
	      }, removeClass: function removeClass(e) {
	        for (var a = e.split(" "), t = 0; t < a.length; t++) {
	          for (var i = 0; i < this.length; i++) {
	            this[i].classList.remove(a[t]);
	          }
	        }return this;
	      }, hasClass: function hasClass(e) {
	        return this[0] ? this[0].classList.contains(e) : !1;
	      }, toggleClass: function toggleClass(e) {
	        for (var a = e.split(" "), t = 0; t < a.length; t++) {
	          for (var i = 0; i < this.length; i++) {
	            this[i].classList.toggle(a[t]);
	          }
	        }return this;
	      }, attr: function attr(e, a) {
	        if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;for (var t = 0; t < this.length; t++) {
	          if (2 === arguments.length) this[t].setAttribute(e, a);else for (var i in e) {
	            this[t][i] = e[i], this[t].setAttribute(i, e[i]);
	          }
	        }return this;
	      }, removeAttr: function removeAttr(e) {
	        for (var a = 0; a < this.length; a++) {
	          this[a].removeAttribute(e);
	        }return this;
	      }, data: function data(e, a) {
	        if ("undefined" != typeof a) {
	          for (var t = 0; t < this.length; t++) {
	            var i = this[t];i.dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = a;
	          }return this;
	        }if (this[0]) {
	          var r = this[0].getAttribute("data-" + e);return r ? r : this[0].dom7ElementDataStorage && (e in this[0].dom7ElementDataStorage) ? this[0].dom7ElementDataStorage[e] : void 0;
	        }
	      }, transform: function transform(e) {
	        for (var a = 0; a < this.length; a++) {
	          var t = this[a].style;t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e;
	        }return this;
	      }, transition: function transition(e) {
	        "string" != typeof e && (e += "ms");for (var a = 0; a < this.length; a++) {
	          var t = this[a].style;t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e;
	        }return this;
	      }, on: function on(e, t, i, r) {
	        function s(e) {
	          var r = e.target;if (a(r).is(t)) i.call(r, e);else for (var s = a(r).parents(), n = 0; n < s.length; n++) {
	            a(s[n]).is(t) && i.call(s[n], e);
	          }
	        }var n,
	            o,
	            l = e.split(" ");for (n = 0; n < this.length; n++) {
	          if ("function" == typeof t || t === !1) for ("function" == typeof t && (i = arguments[1], r = arguments[2] || !1), o = 0; o < l.length; o++) {
	            this[n].addEventListener(l[o], i, r);
	          } else for (o = 0; o < l.length; o++) {
	            this[n].dom7LiveListeners || (this[n].dom7LiveListeners = []), this[n].dom7LiveListeners.push({ listener: i, liveListener: s }), this[n].addEventListener(l[o], s, r);
	          }
	        }return this;
	      }, off: function off(e, a, t, i) {
	        for (var r = e.split(" "), s = 0; s < r.length; s++) {
	          for (var n = 0; n < this.length; n++) {
	            if ("function" == typeof a || a === !1) "function" == typeof a && (t = arguments[1], i = arguments[2] || !1), this[n].removeEventListener(r[s], t, i);else if (this[n].dom7LiveListeners) for (var o = 0; o < this[n].dom7LiveListeners.length; o++) {
	              this[n].dom7LiveListeners[o].listener === t && this[n].removeEventListener(r[s], this[n].dom7LiveListeners[o].liveListener, i);
	            }
	          }
	        }return this;
	      }, once: function once(e, a, t, i) {
	        function r(n) {
	          t(n), s.off(e, a, r, i);
	        }var s = this;"function" == typeof a && (a = !1, t = arguments[1], i = arguments[2]), s.on(e, a, r, i);
	      }, trigger: function trigger(e, a) {
	        for (var t = 0; t < this.length; t++) {
	          var i;try {
	            i = new window.CustomEvent(e, { detail: a, bubbles: !0, cancelable: !0 });
	          } catch (r) {
	            i = document.createEvent("Event"), i.initEvent(e, !0, !0), i.detail = a;
	          }this[t].dispatchEvent(i);
	        }return this;
	      }, transitionEnd: function transitionEnd(e) {
	        function a(s) {
	          if (s.target === this) for (e.call(this, s), t = 0; t < i.length; t++) {
	            r.off(i[t], a);
	          }
	        }var t,
	            i = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
	            r = this;if (e) for (t = 0; t < i.length; t++) {
	          r.on(i[t], a);
	        }return this;
	      }, width: function width() {
	        return this[0] === window ? window.innerWidth : this.length > 0 ? parseFloat(this.css("width")) : null;
	      }, outerWidth: function outerWidth(e) {
	        return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null;
	      }, height: function height() {
	        return this[0] === window ? window.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null;
	      }, outerHeight: function outerHeight(e) {
	        return this.length > 0 ? e ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight : null;
	      }, offset: function offset() {
	        if (this.length > 0) {
	          var e = this[0],
	              a = e.getBoundingClientRect(),
	              t = document.body,
	              i = e.clientTop || t.clientTop || 0,
	              r = e.clientLeft || t.clientLeft || 0,
	              s = window.pageYOffset || e.scrollTop,
	              n = window.pageXOffset || e.scrollLeft;return { top: a.top + s - i, left: a.left + n - r };
	        }return null;
	      }, css: function css(e, a) {
	        var t;if (1 === arguments.length) {
	          if ("string" != typeof e) {
	            for (t = 0; t < this.length; t++) {
	              for (var i in e) {
	                this[t].style[i] = e[i];
	              }
	            }return this;
	          }if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(e);
	        }if (2 === arguments.length && "string" == typeof e) {
	          for (t = 0; t < this.length; t++) {
	            this[t].style[e] = a;
	          }return this;
	        }return this;
	      }, each: function each(e) {
	        for (var a = 0; a < this.length; a++) {
	          e.call(this[a], a, this[a]);
	        }return this;
	      }, html: function html(e) {
	        if ("undefined" == typeof e) return this[0] ? this[0].innerHTML : void 0;for (var a = 0; a < this.length; a++) {
	          this[a].innerHTML = e;
	        }return this;
	      }, text: function text(e) {
	        if ("undefined" == typeof e) return this[0] ? this[0].textContent.trim() : null;for (var a = 0; a < this.length; a++) {
	          this[a].textContent = e;
	        }return this;
	      }, is: function is(t) {
	        if (!this[0]) return !1;var i, r;if ("string" == typeof t) {
	          var s = this[0];if (s === document) return t === document;if (s === window) return t === window;if (s.matches) return s.matches(t);if (s.webkitMatchesSelector) return s.webkitMatchesSelector(t);if (s.mozMatchesSelector) return s.mozMatchesSelector(t);if (s.msMatchesSelector) return s.msMatchesSelector(t);for (i = a(t), r = 0; r < i.length; r++) {
	            if (i[r] === this[0]) return !0;
	          }return !1;
	        }if (t === document) return this[0] === document;if (t === window) return this[0] === window;if (t.nodeType || t instanceof e) {
	          for (i = t.nodeType ? [t] : t, r = 0; r < i.length; r++) {
	            if (i[r] === this[0]) return !0;
	          }return !1;
	        }return !1;
	      }, index: function index() {
	        if (this[0]) {
	          for (var e = this[0], a = 0; null !== (e = e.previousSibling);) {
	            1 === e.nodeType && a++;
	          }return a;
	        }
	      }, eq: function eq(a) {
	        if ("undefined" == typeof a) return this;var t,
	            i = this.length;return a > i - 1 ? new e([]) : 0 > a ? (t = i + a, new e(0 > t ? [] : [this[t]])) : new e([this[a]]);
	      }, append: function append(a) {
	        var t, i;for (t = 0; t < this.length; t++) {
	          if ("string" == typeof a) {
	            var r = document.createElement("div");for (r.innerHTML = a; r.firstChild;) {
	              this[t].appendChild(r.firstChild);
	            }
	          } else if (a instanceof e) for (i = 0; i < a.length; i++) {
	            this[t].appendChild(a[i]);
	          } else this[t].appendChild(a);
	        }return this;
	      }, prepend: function prepend(a) {
	        var t, i;for (t = 0; t < this.length; t++) {
	          if ("string" == typeof a) {
	            var r = document.createElement("div");for (r.innerHTML = a, i = r.childNodes.length - 1; i >= 0; i--) {
	              this[t].insertBefore(r.childNodes[i], this[t].childNodes[0]);
	            }
	          } else if (a instanceof e) for (i = 0; i < a.length; i++) {
	            this[t].insertBefore(a[i], this[t].childNodes[0]);
	          } else this[t].insertBefore(a, this[t].childNodes[0]);
	        }return this;
	      }, insertBefore: function insertBefore(e) {
	        for (var t = a(e), i = 0; i < this.length; i++) {
	          if (1 === t.length) t[0].parentNode.insertBefore(this[i], t[0]);else if (t.length > 1) for (var r = 0; r < t.length; r++) {
	            t[r].parentNode.insertBefore(this[i].cloneNode(!0), t[r]);
	          }
	        }
	      }, insertAfter: function insertAfter(e) {
	        for (var t = a(e), i = 0; i < this.length; i++) {
	          if (1 === t.length) t[0].parentNode.insertBefore(this[i], t[0].nextSibling);else if (t.length > 1) for (var r = 0; r < t.length; r++) {
	            t[r].parentNode.insertBefore(this[i].cloneNode(!0), t[r].nextSibling);
	          }
	        }
	      }, next: function next(t) {
	        return new e(this.length > 0 ? t ? this[0].nextElementSibling && a(this[0].nextElementSibling).is(t) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : []);
	      }, nextAll: function nextAll(t) {
	        var i = [],
	            r = this[0];if (!r) return new e([]);for (; r.nextElementSibling;) {
	          var s = r.nextElementSibling;t ? a(s).is(t) && i.push(s) : i.push(s), r = s;
	        }return new e(i);
	      }, prev: function prev(t) {
	        return new e(this.length > 0 ? t ? this[0].previousElementSibling && a(this[0].previousElementSibling).is(t) ? [this[0].previousElementSibling] : [] : this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : []);
	      }, prevAll: function prevAll(t) {
	        var i = [],
	            r = this[0];if (!r) return new e([]);for (; r.previousElementSibling;) {
	          var s = r.previousElementSibling;t ? a(s).is(t) && i.push(s) : i.push(s), r = s;
	        }return new e(i);
	      }, parent: function parent(e) {
	        for (var t = [], i = 0; i < this.length; i++) {
	          e ? a(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode);
	        }return a(a.unique(t));
	      }, parents: function parents(e) {
	        for (var t = [], i = 0; i < this.length; i++) {
	          for (var r = this[i].parentNode; r;) {
	            e ? a(r).is(e) && t.push(r) : t.push(r), r = r.parentNode;
	          }
	        }return a(a.unique(t));
	      }, find: function find(a) {
	        for (var t = [], i = 0; i < this.length; i++) {
	          for (var r = this[i].querySelectorAll(a), s = 0; s < r.length; s++) {
	            t.push(r[s]);
	          }
	        }return new e(t);
	      }, children: function children(t) {
	        for (var i = [], r = 0; r < this.length; r++) {
	          for (var s = this[r].childNodes, n = 0; n < s.length; n++) {
	            t ? 1 === s[n].nodeType && a(s[n]).is(t) && i.push(s[n]) : 1 === s[n].nodeType && i.push(s[n]);
	          }
	        }return new e(a.unique(i));
	      }, remove: function remove() {
	        for (var e = 0; e < this.length; e++) {
	          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
	        }return this;
	      }, add: function add() {
	        var e,
	            t,
	            i = this;for (e = 0; e < arguments.length; e++) {
	          var r = a(arguments[e]);for (t = 0; t < r.length; t++) {
	            i[i.length] = r[t], i.length++;
	          }
	        }return i;
	      } }, a.fn = e.prototype, a.unique = function (e) {
	      for (var a = [], t = 0; t < e.length; t++) {
	        -1 === a.indexOf(e[t]) && a.push(e[t]);
	      }return a;
	    }, a;
	  }(), r = ["jQuery", "Zepto", "Dom7"], s = 0; s < r.length; s++) {
	    window[r[s]] && e(window[r[s]]);
	  }var n;n = "undefined" == typeof i ? window.Dom7 || window.Zepto || window.jQuery : i, n && ("transitionEnd" in n.fn || (n.fn.transitionEnd = function (e) {
	    function a(s) {
	      if (s.target === this) for (e.call(this, s), t = 0; t < i.length; t++) {
	        r.off(i[t], a);
	      }
	    }var t,
	        i = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
	        r = this;if (e) for (t = 0; t < i.length; t++) {
	      r.on(i[t], a);
	    }return this;
	  }), "transform" in n.fn || (n.fn.transform = function (e) {
	    for (var a = 0; a < this.length; a++) {
	      var t = this[a].style;t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e;
	    }return this;
	  }), "transition" in n.fn || (n.fn.transition = function (e) {
	    "string" != typeof e && (e += "ms");for (var a = 0; a < this.length; a++) {
	      var t = this[a].style;t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e;
	    }return this;
	  })), window.Swiper = t;
	}(),  true ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function () {
	  "use strict";
	  return window.Swiper;
	});
	//# sourceMappingURL=maps/swiper.min.js.map

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Symbol = __webpack_require__(38)["default"];

	exports["default"] = function (obj) {
	  return obj && obj.constructor === _Symbol ? "symbol" : typeof obj;
	};

	exports.__esModule = true;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(39), __esModule: true };

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(40);
	__webpack_require__(68);
	module.exports = __webpack_require__(47).Symbol;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(41)
	  , global         = __webpack_require__(42)
	  , has            = __webpack_require__(43)
	  , DESCRIPTORS    = __webpack_require__(44)
	  , $export        = __webpack_require__(46)
	  , redefine       = __webpack_require__(50)
	  , $fails         = __webpack_require__(45)
	  , shared         = __webpack_require__(53)
	  , setToStringTag = __webpack_require__(54)
	  , uid            = __webpack_require__(56)
	  , wks            = __webpack_require__(55)
	  , keyOf          = __webpack_require__(57)
	  , $names         = __webpack_require__(62)
	  , enumKeys       = __webpack_require__(63)
	  , isArray        = __webpack_require__(64)
	  , anObject       = __webpack_require__(65)
	  , toIObject      = __webpack_require__(58)
	  , createDesc     = __webpack_require__(52)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};

	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});

	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });

	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };

	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(67)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}

	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});

	setter = true;

	$export($export.G + $export.W, {Symbol: $Symbol});

	$export($export.S, 'Symbol', symbolStatics);

	$export($export.S + $export.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});

	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 41 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 42 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 43 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(45)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(42)
	  , core      = __webpack_require__(47)
	  , ctx       = __webpack_require__(48)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 47 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(49);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(51);

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(41)
	  , createDesc = __webpack_require__(52);
	module.exports = __webpack_require__(44) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(42)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(41).setDesc
	  , has = __webpack_require__(43)
	  , TAG = __webpack_require__(55)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(53)('wks')
	  , uid    = __webpack_require__(56)
	  , Symbol = __webpack_require__(42).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 56 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(41)
	  , toIObject = __webpack_require__(58);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(59)
	  , defined = __webpack_require__(61);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(60);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 60 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 61 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(58)
	  , getNames  = __webpack_require__(41).getNames
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(41);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(60);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(66);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 67 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 68 */
/***/ function(module, exports) {

	

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(70)
	__vue_script__ = __webpack_require__(72)
	__vue_template__ = __webpack_require__(73)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\WorkSpace\\Demo\\webpack-vue\\vue1\\src\\components\\swiperContent.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(71);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-d47aacf8&file=swiperContent.vue&scoped=true!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./swiperContent.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-d47aacf8&file=swiperContent.vue&scoped=true!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./swiperContent.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 72 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template id="swiper11">
	//   <div v-cloak class="swiper-content-wrap">
	//     <h1>每个swiper的具体内容 - {{currentDataIndex+1}}</h1>
	//     <p>名称：{{swiperData[currentDataIndex].name}}</p>
	//     <p>描述：{{swiperData[currentDataIndex].desc}}</p>
	//     <p>地点：{{swiperData[currentDataIndex].place}}</p>
	//   </div>
	// </template>
	//
	// <script type="text/ecmascript-6">

	exports.default = {
	  el: '#swiper11',
	  data: function data() {
	    return {
	      swiperData: [{ name: '阿里公司', desc: '公司简介做电商业务', place: '杭州' }, { name: '腾讯', desc: '游戏，社交', place: '深圳' }, { name: '百度公司', desc: '搜索引擎业务', place: '北京' }, { name: '京东', desc: '电商业务', place: '北京' }, { name: '小米公司', desc: '什么业务都做', place: '北京' }],
	      currentDataIndex: 0
	    };
	  },

	  methods: {},
	  props: ['swiperId'],
	  events: {
	    'event-swiper': function eventSwiper(id) {
	      //alert('这里是swiperContent.vue组件，发送请求，获取当前数据 ' +id);
	      console.log('id : ' + id);
	      this.$data.currentDataIndex = id - 1;
	      console.log(this.$data.swiperData[id - 1]);
	    }
	  },
	  ready: function ready() {},

	  watch: {
	    'swiperId': function swiperId(newVal, oldVal) {
	      // console.log('这里再感受下值拿到了没 newVal ' + newVal + ' - ' +oldVal);//
	    }
	  }
	};
	// </script>
	//
	// <style lang="less" scoped="">
	//
	// </style>

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = "\n  <div v-cloak=\"\" class=\"swiper-content-wrap\" _v-d47aacf8=\"\">\n    <h1 _v-d47aacf8=\"\">每个swiper的具体内容 - {{currentDataIndex+1}}</h1>\n    <p _v-d47aacf8=\"\">名称：{{swiperData[currentDataIndex].name}}</p>\n    <p _v-d47aacf8=\"\">描述：{{swiperData[currentDataIndex].desc}}</p>\n    <p _v-d47aacf8=\"\">地点：{{swiperData[currentDataIndex].place}}</p>\n  </div>\n";

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(75)
	__vue_script__ = __webpack_require__(77)
	__vue_template__ = __webpack_require__(78)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\WorkSpace\\Demo\\webpack-vue\\vue1\\src\\components\\newsWrap.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(76);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-f42a272c&file=newsWrap.vue&scoped=true!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./newsWrap.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-f42a272c&file=newsWrap.vue&scoped=true!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./newsWrap.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 77 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template id="news-wrap">
	//   <div v-cloak class="news-wrap-wrap">
	//     <h1>新闻父容器</h1>
	//     <h1>新闻父容器</h1>
	//     <h1>新闻父容器</h1>
	//   </div>
	// </template>
	//
	// <script type="text/ecmascript-6">

	exports.default = {
	  el: '#news-wrap',
	  data: function data() {
	    return {};
	  },

	  methods: {},
	  props: [],
	  events: {},
	  ready: function ready() {},

	  watch: {}
	};
	// </script>
	//
	// <style lang="less" scoped="">
	//
	// </style>

/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = "\n  <div v-cloak=\"\" class=\"news-wrap-wrap\" _v-f42a272c=\"\">\n    <h1 _v-f42a272c=\"\">新闻父容器</h1>\n    <h1 _v-f42a272c=\"\">新闻父容器</h1>\n    <h1 _v-f42a272c=\"\">新闻父容器</h1>\n  </div>\n";

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(80);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./swiper.3.3.0.min.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./swiper.3.3.0.min.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "/**\r\n * Swiper 3.3.0\r\n * Most modern mobile touch slider and framework with hardware accelerated transitions\r\n * \r\n * http://www.idangero.us/swiper/\r\n * \r\n * Copyright 2016, Vladimir Kharlampidi\r\n * The iDangero.us\r\n * http://www.idangero.us/\r\n * \r\n * Licensed under MIT\r\n * \r\n * Released on: January 10, 2016\r\n */\r\n.swiper-container{margin:0 auto;position:relative;overflow:hidden;z-index:1}.swiper-container-no-flexbox .swiper-slide{float:left}.swiper-container-vertical>.swiper-wrapper{-webkit-box-orient:vertical;-moz-box-orient:vertical;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-transition-property:-webkit-transform;-moz-transition-property:-moz-transform;-o-transition-property:-o-transform;-ms-transition-property:-ms-transform;transition-property:transform;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-o-transform:translate(0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.swiper-container-multirow>.swiper-wrapper{-webkit-box-lines:multiple;-moz-box-lines:multiple;-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap}.swiper-container-free-mode>.swiper-wrapper{-webkit-transition-timing-function:ease-out;-moz-transition-timing-function:ease-out;-ms-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out;margin:0 auto}.swiper-slide{-webkit-flex-shrink:0;-ms-flex:0 0 auto;flex-shrink:0;width:100%;height:100%;position:relative}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{-webkit-box-align:start;-ms-flex-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-transition-property:-webkit-transform,height;-moz-transition-property:-moz-transform;-o-transition-property:-o-transform;-ms-transition-property:-ms-transform;transition-property:transform,height}.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-wp8-horizontal{-ms-touch-action:pan-y;touch-action:pan-y}.swiper-wp8-vertical{-ms-touch-action:pan-x;touch-action:pan-x}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:27px;height:44px;margin-top:-22px;z-index:10;cursor:pointer;-moz-background-size:27px 44px;-webkit-background-size:27px 44px;background-size:27px 44px;background-position:center;background-repeat:no-repeat}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");left:10px;right:auto}.swiper-button-prev.swiper-button-black,.swiper-container-rtl .swiper-button-next.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-prev.swiper-button-white,.swiper-container-rtl .swiper-button-next.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");right:10px;left:auto}.swiper-button-next.swiper-button-black,.swiper-container-rtl .swiper-button-prev.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-next.swiper-button-white,.swiper-container-rtl .swiper-button-prev.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")}.swiper-pagination{position:absolute;text-align:center;-webkit-transition:.3s;-moz-transition:.3s;-o-transition:.3s;transition:.3s;-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-o-transform:translate3d(0,0,0);transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-moz-appearance:none;-ms-appearance:none;-webkit-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-white .swiper-pagination-bullet{background:#fff}.swiper-pagination-bullet-active{opacity:1;background:#007aff}.swiper-pagination-white .swiper-pagination-bullet-active{background:#fff}.swiper-pagination-black .swiper-pagination-bullet-active{background:#000}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;-webkit-transform:translate3d(0,-50%,0);-moz-transform:translate3d(0,-50%,0);-o-transform:translate(0,-50%);-ms-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:5px 0;display:block}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 5px}.swiper-pagination-progress{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progress .swiper-pagination-progressbar{background:#007aff;position:absolute;left:0;top:0;width:100%;height:100%;-webkit-transform:scale(0);-ms-transform:scale(0);-o-transform:scale(0);transform:scale(0);-webkit-transform-origin:left top;-moz-transform-origin:left top;-ms-transform-origin:left top;-o-transform-origin:left top;transform-origin:left top}.swiper-container-rtl .swiper-pagination-progress .swiper-pagination-progressbar{-webkit-transform-origin:right top;-moz-transform-origin:right top;-ms-transform-origin:right top;-o-transform-origin:right top;transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progress{width:100%;height:4px;left:0;top:0}.swiper-container-vertical>.swiper-pagination-progress{width:4px;height:100%;left:0;top:0}.swiper-pagination-progress.swiper-pagination-white{background:rgba(255,255,255,.5)}.swiper-pagination-progress.swiper-pagination-white .swiper-pagination-progressbar{background:#fff}.swiper-pagination-progress.swiper-pagination-black .swiper-pagination-progressbar{background:#000}.swiper-container-3d{-webkit-perspective:1200px;-moz-perspective:1200px;-o-perspective:1200px;perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(right,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-moz-linear-gradient(right,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-o-linear-gradient(right,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-right{background-image:-webkit-gradient(linear,right top,left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(left,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-moz-linear-gradient(left,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-o-linear-gradient(left,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-top{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(bottom,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-moz-linear-gradient(bottom,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-o-linear-gradient(bottom,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:-webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(top,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-moz-linear-gradient(top,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-o-linear-gradient(top,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-coverflow .swiper-wrapper,.swiper-container-flip .swiper-wrapper{-ms-perspective:1200px}.swiper-container-cube,.swiper-container-flip{overflow:visible}.swiper-container-cube .swiper-slide,.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-ms-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-cube .swiper-slide .swiper-slide,.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active,.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top,.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-ms-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-slide{visibility:hidden;-webkit-transform-origin:0 0;-moz-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube.swiper-container-rtl .swiper-slide{-webkit-transform-origin:100% 0;-moz-transform-origin:100% 0;-ms-transform-origin:100% 0;transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;background:#000;opacity:.6;-webkit-filter:blur(50px);filter:blur(50px);z-index:0}.swiper-container-fade.swiper-container-free-mode .swiper-slide{-webkit-transition-timing-function:ease-out;-moz-transition-timing-function:ease-out;-ms-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;-webkit-transition-property:opacity;-moz-transition-property:opacity;-o-transition-property:opacity;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;-webkit-transform-origin:50%;-moz-transform-origin:50%;transform-origin:50%;-webkit-animation:swiper-preloader-spin 1s steps(12,end) infinite;-moz-animation:swiper-preloader-spin 1s steps(12,end) infinite;animation:swiper-preloader-spin 1s steps(12,end) infinite}.swiper-lazy-preloader:after{display:block;content:\"\";width:100%;height:100%;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");background-position:50%;-webkit-background-size:100%;background-size:100%;background-repeat:no-repeat}.swiper-lazy-preloader-white:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\")}@-webkit-keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg)}}@keyframes swiper-preloader-spin{100%{transform:rotate(360deg)}}", ""]);

	// exports


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n\n  <div class=\"swiper-wrap\" v-show=\"isShowSwiper\" _v-70359a36=\"\">\n      <!-- Swiper -->\n      <div class=\"swiper-container\" @click=\"goSwiperContent\" _v-70359a36=\"\">\n          <div class=\"swiper-wrapper\" _v-70359a36=\"\">\n              <img class=\"swiper-slide\" data-id=\"1\" src=\"" + __webpack_require__(82) + "\" alt=\"\" _v-70359a36=\"\">\n              <img class=\"swiper-slide\" data-id=\"2\" src=\"" + __webpack_require__(83) + "\" alt=\"\" _v-70359a36=\"\">\n              <img class=\"swiper-slide\" data-id=\"3\" src=\"" + __webpack_require__(84) + "\" alt=\"\" _v-70359a36=\"\">\n              <img class=\"swiper-slide\" data-id=\"4\" src=\"" + __webpack_require__(85) + "\" alt=\"\" _v-70359a36=\"\">\n              <img class=\"swiper-slide\" data-id=\"5\" src=\"" + __webpack_require__(86) + "\" alt=\"\" _v-70359a36=\"\">\n          </div>\n          <!-- 底部小圆点 Add Pagination -->\n          <div class=\"swiper-pagination circle-wrap\" _v-70359a36=\"\"></div>\n          <!--幻灯片左箭头-->\n          <div class=\"swiper-button-next common-btn\" _v-70359a36=\"\">&gt;</div>\n          <!--幻灯片右箭头-->\n          <div class=\"swiper-button-prev common-btn\" _v-70359a36=\"\">&lt;</div>\n      </div>\n      <div class=\"swiper-title\" _v-70359a36=\"\">\n        <div class=\"title-text\" _v-70359a36=\"\">{{swiperTitleActive}}</div>\n      </div>\n  </div>\n\n\n  <!-- 每个子swiper点进去的内容 -->\n  <swiper-content v-bind:swiper-id=\"swiperId\" :event-swiper=\"\" v-show=\"isShowContent\" _v-70359a36=\"\">\n  </swiper-content>\n\n  <!-- 新闻条款父容器 -->\n  <news-wrap v-show=\"isShowNews\" _v-70359a36=\"\">\n\n  </news-wrap>\n\n\n";

/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,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"

/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAGQAyADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwBmor/xMrv/AK7P29zVXYM9K0NQT/iY3P8A12f+Zqts9q/QacvcR8fJe8yuUo21PsA70mz0rTmJINnqKTHoOKn2nHtQUPcU+YCuRikxU+0jqKTbz0xT5gIcUYFS7KTZ70XAj2im7RUpTIpNpp3FYj2jFJt5qTGDRincLEW32pMce9Squ47VBY+gGam+xOBvmZIU/wBo8/lQ5pbkuyKZAHtTo4ZZciNGb19Ksb7SA/u4zOw/ic4H5VHLc3Eq7S5VOyp8op8zeyJu3sI9rHEf9InVW/uJ8xphmjTIgtwD/fk5P+FRhNvSl2+9O3d3Fy33Y13klOZGLH3NMx7VKVz/APro2+1VctK2xGF9qNoqULRtouBHtFG36/hUmw+9LtPvRcCLb7Ubf9mpNvtxS7aLgRYHpQVH92pNoxRt+tFwIwoPYUu0elSbaMUXAj2+1G3vipMUu2lcCLaPT9KNo9P0qXbRt/zii4EQX/Z/SgL7VLtHTFLsHWjmGR7aTB/z/n61Ls9qNlLmCzItpx70uCM44qTbRsouFiPHtRtqXbRs9qOYLEO32FGzPUCpsfSjHtRzBYi2fSgKPTHFS7R6Uu0elHMFiHYPSjb6VNto28dKOYLEO0elG3PYVNj2H5UYo5gsNWWVeN25f7rjIp4eE8MjxH1Q5H5GjFGKl2J9muhKsO//AFbLJ7KcH8jQYsNtIIPoRioSo9M1Kk8yAANuX+6/zD9alp9B+8vMcIeOlL5PtTlnT+KNoz6ocj8j/jVhNjjCFG9MHafyP+NZuTW4+ZddCr5PbFHk+xq75a7sZ2sezfKf1p7QbSMjGfap9oWlfYz/ACv9n9aXyh6frV3yfajys9M0e0DlKflccAUeV7foatmH1pfJPaj2g+UqeV+NAiHp+lW/KNHl+1HtA5Sr5dKY/rVny+aPKPoaXOHKVvLFKI6s+X/nNL5XtRzhylbYKAg9P0q15f0pfL/zilzj5Srs9qds9jVny6Xyx70ucOUqiM+gFL5fQ1aEY9KUR+wpc4cpV8v3pfL9jVoIeBilEee1LnHylURe2aURZ7VaEZ64pfLNLnHylbyz6UvlfSrIi7UvlgH3pc4+VFbyx70ojGa0I9OuJRlIJCvqRgfmeKkGmhRma4gj9g28/pWbrRXULGZ5Y9KNg9P0rW8nT4+vnzEH0CL/AFp4uUi/1FnBH7sC5/Wp9q3sgsZcdpNMcRQs59lq2ujXAAMxigBH/LVwD+VTyXl3IMNcOB02qdo/Sq+zJ9Se55pc832X4j5R4s9OjwZbuSU8fLCmB+Zpwlsof9Rp4Y9mmbcai2Uu36UrX3bf9eQcpM2pXZG1JFiXsIlC1Vbc5y7Ek+pzUuyjZihKMdkHKiHaMUu3IqbZS7KfMOxBtNGyp9lGyjmHYh2UbMVPsFGylzBYg2/SjZU+yjbRzBYpahp90L25bymZTKxyvPes9o2U4KsD7itq7MiX9wVkYfvW6H3pBdz9H8uUf7a5zWkKklFdTOUXzMxdtNK+oraL2kgxLZYOOsZ5prWNhJylxJEf9tc/rWnt7bpk2MYr14NJt5rYbRZW/wBRNDKO2Gwaqzaddw8vbSADuBkfpVRrQeiYrFDb7UbPapiuCQevpSbc9K15hWICn4fWk2EdamIp8VtLO2IYmcjk7RwPr6Uc1tWBVK4603GK0nsYbdc3t0iEdI4/mY/j0qJtSt4MiztQG/56Sncf8/40lUcvhVyHJdNSCKwuZlLCLZGP43OBSvHZW/8ArZjO/dUGBVae7uLo/vpWYf3c4A/CoQuB04rRQk/if3C95lh75tu2BFiT/ZHNVGJdtznJ9TT9tLtrSKjHYFEjx9aMGpMc9KNp9Kq47DMUbT60/b7Ubf8A9dK47DMc9aXGacAfel2mi4WGbfrRtNP2Gl2mi4WGbT60bTT9vvS7DSuFiPbmjbT9po2+9Fx2G7aTbUm36/lS7KLgR4o21JspQvPJP50rgRYoxUuz3o2e+fwo5gIsE0u0/wD66l2jscUbaOYCLH+c0bfSpdntRtouBFtPpRtNTBaNvp/OlzARFTRtNS7KUJz0xRzARbT+NG2pdn0o2deKXMBFt+v5UBM1Ns+lLs4o5gIdlG36VNs+tG3/AD70cwEO3FGzNTbQBS7PTNHMBBs56ZpduO1S7B6/rS7PSjmAhwPT9KUKPepdntRt9qXMBEFxRt/Kptp96NoJ7UcwEOzH1o2VPj/OaNv40cwDUmmRdockH+FxuH5Gp47vZ2aP/cOR/wB8motlKF6cVDUXuhci3RejnWQDAV/9w7T+RqZRExwr4P8Adf5TWUUB7k1KkkqcByV/utyP1rJ0+zGnJeZomFl6g/XtTfKPWoYb3ZgEMg7+Wcj/AL5P+NXIrmKXGdjH2+Q/keP1rKXPHdFqouuhD5ZzSeWfSrvlrnG7afR/l/8ArGhoGXG4EZqfaGis9UUthFJsPTH6Vb8o0eWR6+1PnCxV2GjYasmP2pRGc96OcLFbyzSiMVZ8vIpRFS5wsVvKp3l4/wD1VYEYFTRWks3+qidv90ZqXUS3GkUhHkdDSiP2rS/s90/10kUWOzPk/kKPJtExukllPoi4H5n/AAqfbLoPlM7Z7U5YWfhVLH0AzV/zIU/1VqgOODISx/pQ1zOwx5hUeiYUfpU+0l0QcpXFhPjLqIx6ucUfZ4F+/cbj6Rrn9adtycnn3pdlLml1Y+VCAW6/cgLe7sf5Cni5lTiLZEP9hAD+dN2UuzjvS06hYjcvIcySMxPcnNJtqXZShPenzDsQ7aNoqYJS7DRzBYh20uP85qXbS7f8ilzAQ7aNtTbMUbcdqOYdiLaaNtTbD6UbD6UuYLEO3+VLtqbyzS7Go5h2ZBtpdtTiM9zSiL1NLmCzIAhHNGztU/lil8sUcwcpX20bferOwetGzmlzBylS8j/0yf8A66N/OoPL9q0LuPF5OSP+WjdveoNnFXGfuoUo6lQx0nl1bKj0phA61opk8pW8sZ7VKk9xF9yaTGOmSRUsUMs8gjgiaRz0CjJrcsvBt/dYN0y2yHt1b8qzq16VNfvGioUZVPhVzCa/Zl/0iGGUf7aDNWrPRY9WYCDTJ4wT/rEYhR+ddzYeFdMscN5XnSj+OXn9K2lQKu0AADoAMV5dXM4rSivnt+B3Ussb1qM8/bwDJDF5kHlXE3XZMxCj06Dn8a57U9G8VQgo1g6wDotrgr+Qr2OisaWa14O8kpeprUyqjLZtHzpNBNAxE8Ukbd96kH9aZgdRX0RPawXClZoI5AeodAaxLvwToF5kvYJGx/iiJU16dPP4PSpBr01/yOWeUzXwSueJbDS7fYV6defC+zfLWl/NEeyyLvFYV18ONagB8h4LkDn5W2n9a76ebYWp9u3rocs8DiIfZv6HHbPajbmtS78P6vY5Nzp1wgH8QTI/MVnkbSQQQfcYruhVjNXi7nLKMo6SVhu2jbTsD0FFVcQzaP8AIpQKeB7UuO9FwGbRSbRUmPYUuPwpXAjxzRtHpUmPalx60XAj2+1G0D1BqXH0/CkC0rgR7fajb7VMBQB7/pRcLEO32pQv4VMBRijmCxDtpdlS4owPSi4WIwo70bRUoHoKXH1pXHYhC+1KFHpUuP8AOaTb9D+NFwsR7AKNuB/OpQpo298UuYLEWOeefxpdtS7T6UbfajmCxFt/yMUBe3Spdv0pQtHMFiLbRtqXbRtpcwWI9vqaNozUm2l24o5h2IsUbal20uylzBYiK96NvNS7TS7eKOYdiHb6Uuw+9S7fYUbaOYLEWyjbUoXjOKXbS5gsQ7OelO2VJtx2x9aXaff8qOYLEJQemaXYKl20oT/9VLmCxDt9xRtqbZQEIPAo5h2ItlG0f5FTBOKXZ15o5gsQbB0pdg9KmC9eBS7B7UuYLDI5pYhiN2C/3Scj8qtw35TgoVHU+Wcfp0quIyx+UE+wGatxaRfSgMtsyr13P8o/Ws6jp/asLkV7osxXVvN3TPp9w/4VMYgejYz2cY/+tVX+yY0x9ovoU/2Y/nP6VYhNjaAeWLmb1DvtX8hXLLl+xcpOa8wMDggFDz0xzUyafcuM+SVHq+F/nUkWseWCEj+zg9fKwQfqDTw0V03Em8n0Y5/I/wBKylKot1Y2TiMFlEn+uu4x7Rguf8KALJB/q5pj6s20fkOf1pxt2BwCCfQjB/I0mwg4YEH3FJO/UqwouNv+qghjA5BCZP5nNRyzSzf62V3HuxxT9g/+vS7QOwo0XQdivs9qXZz0qfHv3qOeWK3geWZwkajJJ6Cm52V2ONNyajFXbIZpI7eJpZmCRqMsx6VyV34nu5Lhvsu1IewKgk+5rX8geJ7czNPJFAkhVIxjnHc+9R/8Ibb/APPzL+QrxcZPGYhL6tpHvezf/APsMpp5Rl7ksx1q7cri2o/hZv8ApGL/AMJJqfXzE/74FH/CR6mM/vE4/wCmY4ra/wCENtx1uZvyFcncxCC6miUkhHZQT7HFeRiHj8Ok6k2r+Z9Xl6yPMJSjh6UW1v7lvzR3ujTy3mlQXExBd92SOOjEf0qpfa/DY3UkD20zbCAXGMHirXhoE+H7XH+3/wChNUXilQNFckfxrn8696dWqsFGpCVmop976Hw1HD4WWczw1WneEpuKSdre95dl0Me88SzzbDYROgGd+5Q2emP61Zt/EpW3QXFpO8uPmZVABqjoEurJbzDTrSGZN3zFyMg4/wB4VfvtX17Tolku7G1jRm2g/e5/BvrXmUsVXcfbzqSV/wC7df5H0mJy7Bqp9SpUKbs9P3iU31105uu1+xp6bqaaksxW3lj8oD7/AHzn/Cs//hIbv/oBz/mf/ia19DvJdT01bmZUVixB2DA4+pqpN4igh1U2Bt5C4kEe7cMZP/669GdZ+xhN1rX68q1vtprY+epYWDxdajHCc/L0537ttHrdXuzOk8WPE/lyaY6P/daXB/8AQam/4SO8J/5Alx/303/xNZPibEfiRyei7CfyFdGvinS2IUSSEk9PLPWuOliqrqThUr8vK7LSOv4HsYnLcLHDUa+HwXPzxu7SnpovPzLV7PPBprT29sZJgF2xbSSckccc96z/AO09U+wRTDTWaV2YNHtYFQOh5qTxbZF9M+1rMyfZ/wCEfxbmUc1V0jURp3hUXkkbTYlKkbsHrXTXxE1iHTlJxSje+n32t8jzMFgaUsvhiIU1Uk6nLZ3W60je602fztchuPE1/abRcaaIt2cbmIzV7TNW1C+uYVk04x28gJ83JwBgkVh+I75dStdPuljMYYSDaTnoQK3fD2uWlxFaaasU3nLEFJIG3gc965aGKk8T7OVV8ulttb202PTx2XU4ZYq8MKlP3lKzfu2ur79LeZHqviWLT7jyIYhNIpIkBJXb0x2571n3ni6dbgi0SFosDl1bOcc9xVm/OqJNcTPoenPErM3myRKSVHcnd6Vzama7u5byOziKxYleNExGoGO3p/8AXrDF47EqbSk1d7Wtp+p25Tk2XTpKc6alZavnTu3bdLbstvO50svi2Bb9Y40DW2RmU5Bx34xW/Y3dvqNv59s5aMHbkjHP41yFlfXeou6WmhaVKyDLAQAHH4tXXaFHdCyZbuygtH8w4jhUKpGBzwTzmu7A4utVm+aV0/Jr8Tw88yzC4WivZw5Zxsrc6bfm1vf0svIt+XS+X3P8qnCk0BMnivVcz5TlIPLHpml8oelT7PrR5Z96XOPlKV5/x9Tcf8tG/nVViAfc9K6yPwnLPcyS3VwERnJ2x8nGfWtyy0SwsMGG3Xd3d+W/OsJY+lBWWrNo4KpN3eiOGstB1K/IMduY4z/FLwK6Ky8GWsWGvJGnb+6PlX/GunAxS1w1cfWnotF5HbTwNKGr1ZBb2cFrHst4liX0QYqcUUVxNt6s60ktEFFFeV/EvxD4o8M6/p19azAaOGBWNFwHcD5kkPfIzjoPbIzWtGk6suVMG7HqlFcJr3jDV5/CGma14U0+S7e7kw8X2d5TGMHIIX0YYz0rkv8AhOvib/0LUv8A4LJv8a0hhZyV7pfMTkj2iivJNH8Z/EO61uwt73w9LFaS3MaTyHTpV2IWAY5JwMDPJruPGOpeIdM06CXw7p0d9ctLtkSRCwVMHnhh3xUyw8oyUW1r5judHRXhni3xb8Qf7GX+0dO/siDzVxc2nmROTg4XdvPB549qt6P4t+I//CP2/wBm0WO8tvK+W7mSR5HHPzFvM5PvWv1KfLzXX3i50ez4qpc6Tp96D9psreXPd4wT+deEeDPFvjnzbz+y0m1o7V8xbySSYRdcEfOMZ5/KvTfB+ueMtT1aWHxFokFjZrAXSSONlJk3KAOXPYsenalUws6LbUlp56i92Ss0Xbv4f6Dc5McEtuf+mUhx+RzWFd/DFwCbLUQT2WaPH6j/AAqvf/FfULLUbq1XwhdSrDK8YkE7AOASM/6vvisLxF8S9d1nSHs7LQNS0ydmBFzDO+4AdRwg6j3rso1MfFq0tPNpnNUwuHnvH9Cxd+BdeteRarMo7xOD+hwaxLiwvLPIubSaHH/PSMir3hj4ja/oWltaX+h6lqsplLi4nnk3BSB8vKN0we/ethvi7qDjDeCblh6Gdj/7SrvjjsXF2lBSXk7fqckstpP4ZNficlwc4xTttd18QdV8N6PpxhudMxqV3au9s0cYwj4wNxyOhxXmfh3V9Dj06Ya1d6iLsyfu/JjV1CYHXJHOc110cxVSHO4tfic08tqR2aZpbRS4qPXbmy0u1t2gu5ZDeWn2mDdDtIUllGeeDlTXO6XrYgEpvZZpCcbR1x610RxMJWsY/UqvK21sdNtpdvtUFleRX8JmiDBA20llxzx/iKwLrU9XtpxG5Vd5+QbVORmrlVSVyKeGnOTjs13OnxRj8a5abVNZt7hIJcLK+Nq7V5zwP5Votqt3aSWdvcQqZZsbyT0y2O3HpSVZMuWDmrWadzZ2UbaxEvbk+KDaeafIJPyYH9zP86v6rd3dmImtbbzixIYbSSPTp+NNVFZvsZuhJSUe6uXQPb9aXb6VzU3iDUYAPNsliz03ow/rT4NX1q7TfBZRsufvBD/U1Hto7Gn1Oold2t6nRbR6dKXb7Vz4n8RSOEEMaMeQPlBx+J962U+1x6SXlXdeJGx2gA5YA44H4cU1Uv0InQcLap+jJyvqKXGegrlZtf1a3wJ7ZIt3TfEVz+ZqUatr3X7A/wD34ep9tE1+pVN7r7zpdp6EUbfb9Kq22q29xfNZBZBMoIbK8cde9ZWg3dzca1cxSzu6KjEKzZA+YVTqK6RmsPKzb0tqdBt9qNvtWbr98kGnypDcqlyCvyq4DDp269Kq2+qMvhkyi5R71FLEMwZh8+MkfTFJ1EnYccPOUVLu7G7tNGw1y9tf+IbuHzbdQ8ecZCrUd3quu2JT7TtjLZ25RTnH0qfbLexp9SlflUlf1OsKetKEPocUsBL28bE8lQT+Vctd+IZY9bYRzEWiMFYBQ2QOpFVKajuZUqEqjaj0OpCdsUbPb9a5DWdd+1NCbGe4iCg7wCVz0x0NasXimwWJFcTlgoBO0Hn86n2sb2NHhKiinbc2tvt+VLt4/wAaq6bqlvqnm/Zw48vGd4x1zj+VX9vvVKSexhKDi7SRC+1Budgo9SeKFCuoZSGXsQciuZ1CR9c15NPjbFvEfnP06n+grqo4UijWOMBVUYVRxgUlO7NKlLkirvVjdnPSjZxzU3l1heINZGnRCC3dTdMcnjOwe/1oc0lcmnSc5csTY2j0o21DpUj3Wl288py7rkkcZq75eR0o5iZRs7Mrb4g+zem/+7kZp+z2rE8U6YxgXUoAVmgI3EdSueD+BxWpol7/AGppsc3/AC0HyyAdmHX/AB/Gp9prY1dFezU0WNh445pQhxV1LGeQZWFsevQVKLFV4lniT2B3H9KTqxXUysZoj96UpgVpCKyTOTNKfqFFO+0xp/qbWFPcjcf1qfavoh2M+O2klOI4nf8A3VJqyukz/wDLUxwj/ppIAfyGTUsl7cSDDSvj0U4FVySaXNN+QWJhY2cf+tumkPpEn9TTleyiP7uyDkdGmcn9Biq2e1FJq/xP+vkFi2dQnUYiKQj0jQL+tVpJXlbdI7Of9o5pme1FCjFbIdgzxSZFJ2op8wWDNOBph6jrSjp0o5g5S1FdzRDaHJX+63zD8jVuPUlIxLHx/sH+h/pWYDzSis5QhLdDSaNtHtZfuuAfQ/Kf14/UU9rcrzng9M/49P1rDDGp4rqWH/VyMvbrwaydJr4WUpM0zGV4Zccd+K4HxPqM1xqUloTtghbAUdz6mu2i1JhxJGpz1K8E157rzrJrl26ghS+QD9K8PO5VIUEu7Ps+CqdOpjpSlG7jG68ndI6zweudFz/01b+Qrf8ALHpWJ4MTdoR/67MP0FdDg114GX+zQ9DyM9X/AApV/wDEyLyxjGK8r1H/AJCd3/12f/0I161trzm30WfWNevET5IUnfzJMcKNx4Hqa4M4hKqqcIq7bPe4Pr08M69Wq7RSV382dV4XXPhy0P8Av/8AobVneNblY7GC0B+d33n6D/65/SuotLKGytY7aBMRxjAGfesiTw0LvXZdQvZfMhBHlRD0A7+2c8e9b16VX6rGhDeyT8u55uCxeGWaVMdWdopykl1bb0X43+Q3wvYtZ6JGXXDzHzCMdAen6fzqn43GNMtz/wBNv6GupmjZoJEjOxypCtj7pxwf5Vy114U1e+VUutWWRFOQGU8e+KWJhKOG+r04t6W6GmWYmlVzL+0MTUULSvbXrfay6FrwgudATr/rG6VzF+P+KzI/6ek/mK7u00ttN0ZrOzkAlCNskYfxkHBPXvj8q5eTwhrct79se7szcbw+/J6jvjbiuXFUqvsKVNRbcbXsenleNwv17FYmdRRjO6V731d77bGf4nH/ABVDg/8ATP8AkK74WVuMEQRZ9kFcldeEdcvbo3VxeWbzHHzZI6dOAmK0v7P8Xn/mK2f/AHwP/jdPDSnSqVJypt8zutF5+ZGZRoYnDYejSxME6cbPWWui2svIseKkA8NXf/AP/Q1rm8f8W/z/ANPH9a7SbTpL/QzY30oaZ4wJJEHG/rkcDvXMN4Q1gaeLJL22MPmFypZgD0x/D7GqxlOpKo6kYt3jb5kZLicNSw6oVaii41VPrZpK2n3GBfD/AIkWlH/rt/6FXf6Fbx/2NYyCJN5gXLbRnpXMt4I1mSGOJruzMcedi+Y3GeT/AA1saPoev2N3bi41CF7OLgxK7HjHAA2isMHGrSq80oPVJfdZHbndbC4rCezpV43UpS663bdtt9TK8QQ61e291PcmO10+BjtQtgyc4BwOpPHXFUPDdvq17HcQWFzHBEuDJvQEMTxjoc9DXU634avNa1BWe+EVkoG2MZY7u5xwPxzWvp2kQaXZG2s129TuJyS3qav6nOeJc22kut9X6W2RzvOqNDLVQgoubs0lH3Y7b33l+voeXeTe6Xrf2eCULdpIEDRngk9ue31r0fRZtRuLVxqlsIZ0fbx0YY69f5Vj2Hgu9bVlv9TvInZZBIRFklyORzgY5rs9gq8vw86TlJ3SvojLiPMqGKjCnDlnJJXkk9H2T00K4Wl2Y6YqxtxS4r1OY+T5Svsb0pRG1WAvtS7CTS5h8p2FFFFeKewFFFFABRRRQAV5J4m+KelNfX2i6j4b+2w2t00ZEk42s0bkBsbfbp74r1uvFvjfZWtrLo0tvbQxSTNcNK8cYUyH93yxHU8nr6114KMJVVGS3JlexteJvHHinSdRht9D0CKawa2ikRvskr7dy525RgOPpXNWvxh8XX0pitNI0+4kA3FIraVzj1wHrofH/jQ6H4TsdGsywv72yQtIAQI4iuCQfU4I9uT6Vzfw+8U+FfCWkTyXb3Ump3XEpih/1adlUkj6k/T0rrp04+y5nTu+nn5kt67l/wD4WZ8QCSB4ZhyOv+gT/wDxddH4/wBU1H/hVlpqBeWzvphbvKIS0ZRmGWXrkc8YNefeCvGv/CP+NJzLe3FxpV9Lsllufv8AX5ZG5PI789M+1fQcgiaImXYYwNxLYxj1rLE2o1IvkVt/UcdUfOCPFLaQ/wBo+O76Cd0WRoGhmkCbhkchsHgipVmsUUKvxFvwo6AW1xj/ANCrf8S6Rqv/AAsm617SbLSb61+TykubqAxP+5CHKFweDn8QDU327xV/0KHg784P/j1dfOmk09/OOn4EWObtY7Fp0ht/iFerJKwQBbWdcknA/irs/gpqN9qH9ufbb24udn2fZ50rPtz5mcZPHQflXNX+keItZ1rTru40fQ7BLaRdwsbmCMEbgSSPMOTXvFsbV4/MtTCyN/FFgg49xWGLqpU+Xe/pp9yKitTyrxb478SW/ji88M6Va2dwjbI445IzuffGrEE7gO5rm9Fi+IPhzXRHbwM93PExFpc3KvuQHqFL549fr707xd/aP/C67n+ySg1APEYN4GN/kLjrx+fFY9uPEWmfELEtomqeII23hJnZ/n2b8/Ky5IHbOOPpW9OEVTSSWsbib1NvxHJ8RNf1C1sryAW1yqF4rW2uEiZxnltu/J6Yz9fer+keNfFeh+IdH8MahY2lsjzwwshUs+x3AJ3bzyck5rmvFU2v6x4psBrGlwaVqlw0aRyxiRCwLbVJy7Ywe4wakkt9ctPihoUHiGYTX6XdqpfcGJQSAKSR14555555p8kXBRkls3YV9TufjbJYxaHYq0ETX8022OQqN6xqMtg9uSv51h+HLe1tvG+n+DtQ0DSJkECmeeS3LTlzb+aQWJxwxx06Cuz+Inga48XTWE0OoQWi2qupMoPJYjGMfSvH5tCltvHbaRP4gt4pF+9qbzEIP3W77xP/AAHr14rHDcs6PJza2fyHLR3Om+JOu2ka3Ph+Lwtb2v2d1gg1AqM+Wp3bU+QYGSejdz61n+Gtfs9I0OG2uPAEeqy5Lm7mQEuCcjGYm4xjvW14t8Ma3rugeHINHI1m2tLeRWuoZVKu5bB5Y8/dx+BoufEPxK8N6MslzYW1rY2yLGGZI8KBhVH3sntVx5HTUFa9+7X/AAfkGt7nU+ENah12w1SCDwfBpQto/Nji8sFZXII6bF5+UCvIddm1jUtft7a60eO11FSFW2hgZGYnkZUk17N8MvEut+J9OvrvVlTy0kVIHSPYG4O7644rk5joHhH4pX2p65ql1d3C/vYU8gkqzj+I9CApwMfpjmKE3Tqzilr21YpRTszzzVbfWYtato7/AE+W3vmCeTC0ZUsNx24B5OTkVtzeFPFV5eadcTaJdhiwDBYWAQB++enrV/4geJ9E13V7LXdHvrj7faiONIZLfC4Vmfdkn1I4xVjVPGth4p8H6ba6rq9xaazBO0ss8VqSCMuABtI7FPyrs9vXcYu2++5n7KH3HOPaT23j97aWJhMjMGTqR+7rZ1H7StjKbM4uAOBgZ6+/tWv8LtN8PN4tNxDq1zf6gkTvGHtjEq5+VmJLHJw2PxNdx8RYL2Hw00+jabDc3hlVGH2bzXCHIyo7nO3se9H9oclT2TW/XY5qmC57ST2/Q8DlsdTjk+13cKtjvcSLg/mefpUsOt6vO4htsMegEcQOP04q9F4V8U31yZbnQNRuDz8ssbR4P44x9OKdp8mvPqp0Sx0uBb5GZWt1XacqOcktjjFdMasNbSLnTk1rFN/gR6VppudQaa61DN1GQTGj5YexPT8BXV4Fc1e+DPFenSXGoyaYIWtx5sogmjcoPXarE46/rWwkd9qOgFpraa1lmjO1ipAbI4I9jWtGtCS913OPF0Z3Um9PyOU1S4l1bWGNpE0qwjCBVzkA9cfU1MNZ1mK8iguCY2dl+VogCQTj0qc6Xf6RpK3VtMqyj95Oo6gdhnuBzkVHpPna54iF5MoCxYdsdBjoB+PP50Xd/Nm3uOGycUvn/TJdNGfGNyP9qSmeGxnxDd/7j/8AoYqXTB/xW10P9qSm+FxnxFef9c3/APQxQnt6kz+GX+FEviXSIlin1LzH8wlRt7dh6VSg0uKPwzLqIkbzJIypU4xjfj+lWPEyaoZrokyHTlK46Beg/E81UttKkTw9cam0wKPEUWPHT5wP6UnbmehVO6pRvLqv+GJLK6tW8PC1a+FtcCQsDhuOfb2qFLSxlnV7zWhKg64VyT7ZPSoYI7WG2s5rq0LwSuwklDkHjsAPTr71Y1mysBfW1npSb5HxkhywOcYH9fxpX0LslJpNq9+x0+qXcUGjG4DyCKRQEeIDdhuhGfauS0u80uzST7XavcuzcEqMAfietd9FYxJZQ2sirKkaKoDqCDgYrkrvV2h1O4s7fSLOXy5GUAQZYgfSrk9bnLh2mnBL8bGVq13Y3bxGytfICghvlAz0x0rSi1fQliRX0rLBQCdi8n86X+077/oXrf8A8BWpsmsXUKb5dBtEUfxNbECov1OlxulG23maujavps96LWzsjA8oyTtABwCecH61t3cn2ayuJxjMcbP+QzVbQDDfadFe/ZLeGViw/dRgYwSKvapaSTaNeIkbkmB8cexq+ayOCooupbY5bwXb7xd3TDLEhAf1P9K6wIa5/wAB7HsLtDKqlZQSDnuP/rGus/cJ1Z3+mFqVOysVibuqzG1e3vJdNkSwJWdiApDbcDPPP0zXIav4ebStKS6nn824kmCtt+6OGPXv0Fej+ei52RIPc/Mf1rmPHM7y6LCrMcfaVOO33WqXJsvDTlGSitjS8PQE6BZNlQDGOSfetQRRD70hJ/2V/wAayNAb/iQ2X/XMVo5NF33Mai99+o+dLWa3lgaIssiFCXbsRiuP8DXk1rc31kGK5AfHoQcH+Y/KusJwCSa4vwlmXW725A+TY36sCP5UnY2pL91NPyJprjXpPE/zNftafah1DlNm78sYrr93bAptHTrQnYzqS57abC5ozTaOtPmIsLmjIpv4UGlzBYXPvSE0mKPejmCwZ9xScUZozn0pcw7MOKbxS8Yo/AUXHYSjiiii47Ds0obPakGPalo5hco7NOBpnFKP880cwuUfk1xmr/8AIVuP94ck+wrsQazptFtLiZpX37mOTg4rys1w1TFU4xp7pn0nDOZ0MtxE6le9mraeqOetNXv7BNlrcvEuc4GKtf8ACT6znP25/wDvlf8ACtT/AIR+x/6af99Uv/CPWP8A00/76ryFlmPSspaerPqZ8Q5DUk5zpXb6uCuRaRqWu6pdCP8AtFooc/vJWRcD26da7q0hgtYAkS4TOS3B3MepJHc1zlvDHawLFCu1V/zmrEczRnKsVPtxXs4XBOlD35Ny8/0PjM2zOOLrP2EFCmtkklfzduv5fi+kABGRyPWsJ9Xuf7eubBVhWOAx8tE7FgVyeRwPxxTo9QkBBYBj6j5T+lS2s1tDdXFyg2zXG3zfMyQdowORwPyqq1Go7cr66+ln+py4WvRpqbrRu2tPW61+6/T/ADVKDX7tobK8khh+y3krRoqZ3oQTjJzg9PSlXxDcNaabL5MW66huJGHOAY1JGOfar1tpulQyxyLC4EbFo0MjPGhPUhc4H5VLbeHtKVt8UbMAjIg85mCBhhgoJ4zk1xezxS3l/Wnl6/eeu8VlUm2qb6208pWXxdLx162+/Kg8TvOsUZtxFc+VJJLG4PG1NykexqNPE14kCSTwQHz7R7iLYTwVzwwP0ro30axk8otCMxRGFWzg7CNpGe/FV4vDWmRRugikYNEYQXlZtqHqFyePwqXDFfzf1p5epccTlVtaT9N+/W+23yVvMyTr96uirflLcl2jUL5UigbuvJ649q0dF1C41LT7i5eFDskdYjHkLKB0IzyMnjmrC+H7EW4gb7Q8KlSqSTuyrt6YBPH4VattOtrOOeOBGRJnZ2UMcAt1x6fhV0411JOT0t+Jjia2BlSlGlC0r3Tt0000f9ficyniS7WwvZp1t47mBAwtGjdXX5gOcnkc9qsvrd6sNpGkdu9zdzeVGWjkjVMAZJDYJ6jpWkfDWnyCXzknnaVPLZ5pmdtud2ASeOakbQLKSAQyPcSBWDoz3Dlo2HQqSePwrNQxPWX9X/yN5YjLG7qD37Lsrddk9fPZtlNNRvYdaXTrhbdv9EacvGrAEhiAMEnsBWPL4vvY0hPk2ys9os+GVvmYtjaMHj15rpm8OWk/lki7aRFKCUTybypOSC2eRUjeEbGYENZYUwC3wXIAQEEDr1yAc1NSNfZSt8x0MRlsWnUpt7X0t31363WnkZE+tX6nVvKggQ2EcUhWQMSQ0ZZhx3BAFLFrd8DpwmigY3ltJcfIG4wgZR168810H/CNWm28WQgG8jVJyXZiwVdo/HHen/8ACO6Yfs24SN9mhMEYBIwhXaR78Cm/a3vzf1f/ACIVbBWt7Pp/7Zbv/Pr6fcctba/qdzost/FaxzuqKRDHDICCTjOTwwAGfl/StjQr46nZNM1xbyur7W8lGTbwOCG5zV2Pw3p0EHkwvfJGF2qBeyAIPYZ4q3punWmkwvHZxbfMcySO5Ls7HqSTk0qTrJpyfQWLqYKdOaoxs27rTp2f6W+dxqRM/wB1WP0FTfZJT1QKP9o4qw0rsOWJ9s1HnJrp5pM8rlQ37KP4pUH05pRHCvVnb6DFJmkPT8KWr6jskdJRXBN42vbe6lSSCJ1RyBxg4zV2Dx5bnia0df8AdbNYPBVl0ubLGUnvodhRWBB4v0mbrM0Z/wBta0odX0+4/wBXeQn/AIFj+dYyo1I7xZtGtTltJF2imq6OMowYeoOaXIrM0FrwXx0fEvjXxjd6Vb6YzJpG/wAuKPHCHB3ljjJYBSB+AHWveqjSGKOWSRI0WSUgyMFALkDAye/AxW9Ct7GTla7E1c8EHjfSb62s7Hxn4akurnTl8qOSORomAwBhkyOeB3x14FXYfGXw4gXCeDpCP9uNH/mxr26W3gnGJoY5BjHzqDx+NV/7I03/AKB1p/35X/Cuj61Tf2WvRsnlZ4hrHiv4f6r9mP8AwitxB5MhYrbLHAJAR0YryR09PrXrl3KJvh/cyrbNbK+mOVgY5MY8o4U+4Faf9kab/wBA60/78r/hViaCKe3kt5UDRSIUZD0KkYI/KsqteMuVRT087jSZ8v8Ahv8A4RTy7j/hJP7S35Xyfse3GOc5z+Fbv/Fr/wDqYf8AyHXuem+G9G0dZF0/TbeASEFwq9cdOv1q99ktv+feL/vgV0Tx0XK6T+//AIBKgfNuuf8ACC/2VJ/Yf9sfb8rs+07NmM85x7Zr2H4S/wDJPLH/AK6S/wDoZrqL7RdM1O0a1vLGCaBiCUZODg5HSpdO02z0mySzsLdLe3QkrGnQZOT+tZVsUqlLks7366jUbM8b1P8A5OGT/r4g/wDRCVb17wD4p1P4k3epaeXsLaV8x6gk6qUHlgdFbfyQV6d/SvUn0DSJNVGqPpts1+CG+0GMb8gYBz9BitGh4xq3ItlbUfKeD+IPDN74X1nR9U8S+Ipr0CcFHKvKQEYMVyxyM54/GoJNWXxr8YdMvtMt5vJS4gYBx82yMhmYgZx0P6V7pf6Xp+qIiahY212iNuVZ4g4B6ZwRSWWk6bpm77Bp9pabuD5EKx5/IVSxq5bte9ZryFyHK+Ovh/8A8Jpd2Uw1EWf2dHVj5PmFskEfxD0P515TB4GtF+Ka+Eri7mktv4p4wEc/ufM4zkDnjvX0ZWb/AMI/pP8Abf8AbX2CL+0v+fnHzfd2/wDoPFRRxc6cXFvSzt6jcbnD+JfhzqbaPplp4b1eSGPS1YwwSNsZnYkl/MXHzc4HA78jJrzLxNqniW4urHSvGEl3FDbMCR5Y3MucFx0VyBkA5/Hk19L1VvtNsdThWK+tIbmNWDqsqBgCOhGadHGOD99X/MTj2KelfYNN8LW8lhbSQWMVt5kcTLtcLt3cg/xHvnvXleo/EHwHq1695f8Ahe5uLhwA0jqmTgYH8Ve0kBlKsAQeCD3qp/ZGm/8AQOtP+/K/4VlSqwi25J39bDaZ89+Ktf8ACGp6QsGh6BJYXYlVjKwA+XByOGPt+VWPDviPwTYaFbW2r+G5Ly/Td5s6quHyxI6sOgIH4V75/ZGm/wDQOtP+/K/4Uf2Rpv8A0DrT/vyv+FdP12HLy2f3k8rPI9M+IvgbRbs3WneGbm2nKlC6KmcHqPvewrrPiN4v1fw5Db2mk6dI8158kd3jeqt/dVRnLdxnj2POOw/sjTf+gdaf9+V/wq2VDYyAcHIyOhrCVam5qXLf1dyrOx4x4euL34dzDV/Fl1qO/VgzC2jAkyy4+aUk5DfNwB+J7VneBb5NZ+MsupW8cghne4mAccqpU4zj6iva9S0fTdYSNNSsbe7WMkoJkDbT7ZpNO0PStILnTtOtbRn4ZoYlUsPcjrWjxcXGTa95q3kLlPMPF3gvxBoGtT+KvDV7czu7GSeIndIoPUY/jT27YHXt3nhTV7zX/DEOoappRtZmXIjxkSjHDKDyAewP69a6KisJ13OCjJarqPlPnvxFqt/4+8Rro2i6ObREkKtGybXyDgtL/dA9Ox9TivRtK+F9jpelxwJeSfacZml2gh2+nYV20FhaW1zcXMFtFHPcMGmkVAGkIGBk96sVtPHTVlS0SM3QhJWkj588QT6f4W8T3lo9m73cRGZlAG/cobPX3rM8E2d3f6xe3UFrJJGsR8wopIUswIz+R/KvoW88P6LqFwbi90iwuZyADJNbI7EDpyRmrNpY2mnweRZWsFtFnOyGMIufoK6v7UaitLsyeEjZpdT568XalFFbTaW8cq3B2t8y4GM5piIy/Ds7hj5SefeSvfNQ8PaNqlyt1qGmWl1OqhQ80QYgAkgc9uT+dUNR8MeHLu2aCa2jWNgAVjYgcdOBWkM0jJ6xZlLC8kVGL2dz51XU/wDiQJpS2nmPI5YOR78bR69qdareeGdQiurqxzuX5Q59fQjoa9rXwVo1uy/YnMYTOzdGDjPXB7VXu/DU8kTRrbWt1E3BDPnP4HFdSxVJ9TKUpJtKOj31Oe0+4/tCyiuRDJGJBkK45x+FcFLevpfi+7uVgMrJNJ8mcdc16hNb6hbLtkt5YUAxhY8AflWUtjaLdm6FvELgkkybfmJPXmtVV5jnpNU27rc5f/hNrjvpn/j5/wAKqav4ofU9MktG08xbiDv8wnGDnpgV3fpxUU9vFcxGKeNZIzyUYZBo5yoypppqH4mb4QuHi8OQKm0fM/OOfvGth5pJPvuzZ65NQQW8VvEIoI1jjHRVGBUuKm5lNKUnK25xVkf+Ec8UPbOdtrccKx6YJ+U/geK7TJqlqWk2uqwrHcq3yHKspwR/9arNvALeBIQ7uEGAznJI96fMaVGp2fUkrnvGMUkukRLGjO3ng4UZ/hauhopcxEHyyUjO0NSmh2YYEERjINaFLRS5hS1dzI8Raiun6TJg4mmBSMd+ep/AVB4X042Gl+ZIpWa4O8g9QOw/r+NXLrRbW9v47u5aSRo8bYyw2D8MVoY560+ZWNOZKHKuu5yL6VrH/CR/aAkn2X7UH/1wxs3Z6Z9O1db2607FJilzinNytfoJSc07FJRzEWE59aPxoo/GlzBYSjiiijmHYQ0YpaKOYLCGko4oo5h2EpaKKOYLBjFO5pM0tLmCwdKXp2pM0mfejmFYdn2p2abn3o/GjmCw/NLTMn2pc464o5hWHDIpcmmrlj8qsx9AKmW1nbpEw/3uP50c47EYJpc+lWBYvn55I1/HP8qlSyi/imdvZU/qaXtEPlZUV3XlGwfY1YS9kU5YK3v0P5irK21sv/LJn/3n/wAKlXYv3IYV/wCA5/nUOouw+QW31OQnALH2cZ/UVqQSSSkBreRCec9RVASSnH7wgeg4H6UqqwIYM2fXPNYyaexcYtdTcitPN6TRfg2amFlGv3pXP+6MVirPIDlsN7nr+Y5q7FfkcFiP975h+fWueSn3N4uPU0BBbr/yzZv95qepVfuxov0FQR3Sv1H4oc/p1qZSr/dYE+lZO/U1Vug4yORjd+XFNPqc0pUijBoVhjaKXFFADaPwpcUhHpTFYQ/iaaafik20xDCOOKQ96kxTce1O4jh7yLN5PnP+sb+dVzCPTitW6iJu5uf+WjfzqDyfavRUtDia1M8wj2o8kjoTWh5PPQUhh9qOYOUpxy3UJzHPIpHoTV+HxBrEGNt47D0fmmeR7U37P/s1MuWW6uNXWxqw+NdUjx5scUo9xj+VaEPjtT/r7Jh7o3+Nc15GecdaQwD+6Kwlh6MvsmyrVF9o7aDxnpUgG9pYz/tLx+daMOvaXPjy76HJ7FsGvL3ls45vJe5hWXIGxnAPOMcZ9/1qY2w7ispYOn0bRqsVUW56wk0cn3JEb/dYGn14695b2Mwia/it5cZCmYIceuM5/wD1VrQatqkIBivZCO247sisZYJ9GarF90emUVwkPirU4/8AWCOUe64zWhD4xHAmtCPUq1YvC1F5mixMHudXRWCPF2lqm6eXyB6yEAVds9d0y/j8y1vreVCcBkcEZ+tZypTjujVVIPZmjRTVkRxlXVh7HNLmsy7i0UVHDPDcxLLBKksbdHjYMD+IoAkoqlc6xpdnMYbrUrOCUDJSWdVYfgTV0EEAg5B6EU2mtwCiiobq7trG2e5u7iK3gTG6WZwirk4GSeByQKW4E1FQWl9aX8bSWd1BcIp2loZA4B9Mip6GrAFFZzeINFS++wtq9gt3vEfkG5QSbycBduc5z2rRptNbgFFFGcUgCionuIk+86/nUD6jEPuhm/SqUZPZEucVuy5RWTNqxTGTHHnpubrURupZQD5xIPTb0rRUJdTN1o9DYaVE+8wH1NQPqFun8eT7VkkbjknP15oxVqgurIdZ9C++p/3Ij+Jqu9/cP0YL9BUG3jrRt960VOC6GbqSfURnkf78jH8aZjmpNtJitNiRmKAPWoob2zuZGjguoJXUkFY5FJBHUcGrO2gBFd16OwFRywQXA/f20Ev+8nP50kdzbzSvDFcRPJGcOiuCVPuM8VNj3o2EZkug6ZL92OWEnvG+R+RqjL4XB5t75T7SqR+tdDtpCMAnOBVqrNbMl04voclN4d1KMZEAlHrGwNZ8tvNAcSxSRn0ZSK7pJInbCSozf7JGae10i5jknQ+quQf0NaLETW6IdGPQ89yKOO9d3Np9jcf62zhJ9VBU/pVGXw3YP/q5J4fxDj+lWsSuqIdF9Dku9JWxe6Gtm8atqVopkJEazOIyxHYZ4JqvNouoQDLWrsvqnzD9K0VWL6kunJdDPopLh0tFL3LrCo6mQ7QPzpkE8N0he3mjlQHBaNgwB9OPqKsmxJSZp2Px70YNK4WG/Wk/HmnY9utI7pFGXd1VFGSzHAH40XCw3rQSccGkjkimXfG6Op7qcin8UXHYYSfSg9cU+kYqoJJAA6k9KLhyjPfNJz/kUsM0NwnmQyrImSNyNkfpSTTRW0XmTSJHGvBZzgDsKLhyh26Ckwc8CnKyuoZGDKeQQetKcUcwcpHg0Yp+M9OT7CpFtpm5WJseuP8AGjmCxBzRg1ZFnLxnaPxzThZHqXzxzgUuYLFTmiross+pqRbIL2P5Uc6HyszsE9BTxFIeQp+tagtcHgYpwtuQevfmlzj5GZotn6Myj8c1Itqvd2P0FX2SOGJpZGWONRlmY4AHuadD5Vwu6GRJF9UII9e1LnY+QprbRDkxlj/tNUyRbfuxICOPu59KuLBx0p4g9cVLmHIiqBIRt3n8KURk9cmpp5ILVA1xNHEpOAZGCg/n3qWExzxiSGSOSNs4ZCGB/EUrlctiusXPAqQRHjP61LM0VvGZJ5I44x1Z2AH5mlt5YLpDJbzRzIDtLRsGAPpx9aXMHKMEQHpTwvP+FTCP2pwSpuOxDtP504J+NTbfypdpxz+tFwsRBPQ08KB9KkC+1Lt9qVwGDjkdfWpkmcHBO4e4qGWWKBQ00qRgnALsF/nT0aNoxIrqyYyGByCPrQ7D1Lsd2w65H15qylyjdR+VZENzb3BIhnikI6hHB/lVhcis3BFqTRpqUbkEUpT86z1YgdTU8dww6k4rNwaLUyxsoK4oWZW9Kf8AKf8A69TdlaERFGKm280hXNFwsQ4oxUmwUbadxWObuIR9plPfef51F5IH/wCutKaMefJx/Ef50zyx6V2KWhyOOpn+QvpSeQOa0fLFJs9qOYOUzvJFJ5NaPl0GP26Ucw7Gd5HvXDeM5rq31eyax1SJXRgGt2nRPLbqGYEjgg9/616T5XbA/CvLPGw8N/2pdzme8n1JyFeKFlWNGUBeSVPp0GfwrSk7yNKS94x9Wuo5fG6XJmgZPNgZ5IpA0YIVN2G9Ac/lW7pct/qHjx3bUrdIh0SC5V1kQZwqjPPcnjjk8VxH2f7PeRxXscsa5RpFAw2w4PGe+Dmuhsrrw9p9lLqVjLfxarGjJFBM6suWBXcCFGcAk9uRXRKOmhu46WRS1m/t77xbLcXBJtVnCnaM5ReOPrj9a7X/AIT7Q/S6/wC/Y/xrmPAek6brOrXFrqMHmgQ70Xey8ggHoR60k+j2L/ERdKt4MWX2hEMW9jwANwyefWlJRb5X0QpRi9H0O28S6rNpGhRahapG7O6gCVSRggnsRXGf8LB1X/n2sf8Av2//AMVXfeLtAudW8Px2OnxrvSVSA7YAUAjr+Vc2sl74D8NQJdWVvNPNcvwzZAGBjn8KypuLjtdkQUbbanH614hutd8k3UNujRZ2tEpBIPY5J9Kl0fxTf6JavbW6QPGz7/3qsSDjHGCPSt3/AIWRN/0B7T8zR/wsib/oD2f5mtfetbl/E0s7WsQJ8StcjOUjtAR/sv8A/FV6L4V8T6tqmiQ300ih2ZgVUHbwSO5PpXGXEGoePvDsVxZ2dtDJBdsjKGwCNinr+Ndf4U0i40Xw7Fa3uxJIy7OQ2VAJJzn6VhWVNx1SuRKyWmjLPizxteaR4buTuVbiZTDCR1DEckfQc1yPwhjazvrvVZWm+zqvkoisQrOcEkjvgfzrlfGXiD+3dYPkt/odvlIf9r1b8f5AV6Z4Gt1/4Q7TyqgblYnA6nceamVKNOi1a1y+aUY76nA/E+5S78d3k0eQrRxdf9wV76db06w0UXl1dRxwQwhnYnoAPTufavnr4hrt8ZXQ/wBiP/0EVDrfiC+8VXlvZW0MggUhIbZOS7dMnHU/yp1MMqsIK9kkaRnLc+gfDHjLSPFls0lhMVmT/WW8uBInvjPI9xXmXxP8fPejUfCy6f5YinUNcedneF5+7t45x37Vs+CvA6eG4vtl1OrajIvJjGREO6g+vqf8nkfie0d54pstOtIlNxtG9goDPI5AAJHJ4A6+tYUKFNV7x1X5B7W+gngz4mp4Q0I6ami/aWaZpXl+1bMkgDpsPYDvXZ3vxg+x6Jpepf2Fv+3+b+7+148vY23rs5z9BXO6Jqw/4TiLwxNpWlPZQPJb7xaL5rCNGwSx6klRk1Y8YeMtO0me/wBAh0SPzIoikUvyhULoGyF28fe/StJ0YTqaw1eu4Ko9kcDaeIvJ8aDxFcWvnt9ra6MHmbcsSWA3YPQkdu1em2PxtN7qFtaDw/s8+VI932zO3cQM42c9a828Ja/Z+Hr+e6u9OF7vi8tUYgBeQSeQfQV16/FHSUcOvhmNWByCGQEH/vmtq9GM3rC9vMOZrY73xzZ6t4g0JbPTJ1gmE6uW8wp8oBzyPqK8UsLTXtT159Gh1GX7UjOpL3D7crnPP4GvUPF/iLXLHR9KvtFtnb7UnmSjyTJsBVSM8cdTXk+kanq8XiB9U02Fpr4l5GCQl8bup2jtzUYWDjTdrEpt7k13Y63ZeJF0KW/f7W0scQKzsUy4BHP/AAIdq6vxDeeIvBfh3RLIagY7l2uDMyESBvmUryw7BjXHXuqavceKl1K5hZdVE0TiMwkHeoXYNv4Lx3rd8SS+I/Eei6bPf6fctcxXFwm1LVlwm2EgkY9d3Pt7VvJNuPNa3X7gNH4nTSXGi+Fp5W3ySW7uzepKxEmu60bzx8N7Y22/zxpuYtgy27Zxj3zXB/EpGj0Hwojqyuts4ZWGCDti616R4R/5E/SP+vWP+VctR2ox9WS9jyH7R8Qf7viD/v1L/hUNzqfjiygM93NrcEK4zJKsiqPTkivfq5D4m/8AIjXn+/H/AOhinDEKUlHlQ7+R5XZa54x1EuLG91a6KYLCAu+3PTOOnSrf2j4g/wB3xB/36l/wp3gfxPa+F7bV7mZTJPIkawQjje2W6nsB3r1Hwt4007xPCERhBfKMvbOefqp/iH6+ta1ZODdoaDenQ43wRL4vfxTbLqw1cWZV9/2mOQJnacZyMdcV13ibxtp3hq4NncJO108Hmx7EBU5LAZOfVa6mvFvi7/yNdr/14p/6HJWEGq1TVWJsmzB8I6tY6V4mj1TVBK6Rh3HlqGJcjGSDj1J/KvYrHxrpWpaJqGqW4mEFkpMglUKScZAHJ69Pxri/EfgbRdM8CyatbJOLpYoWBaTIyzKDx+Jrj7M6rL4QvbeztJZLI3KyXUsYzjC8Agc4756cCt5RhW95ehTSY7w/q1qnjGLWNYkfYJWuHKLks5yRx9Tn8K9Uh+JvhyeeOFJLnfIwVcwnqTiuc8M/DCx1LQba91S4vIricbwkLKAqn7ucqecc/jXH6rpUOi+OTpts0jxQ3MSoZCCxztPOAPX0okqVWTXVCaTPfby+tdOgM95cxW8I6vI4UfrVOS/tdU8N3F7ZTCa3lt5CjgEZwCD19wazPH+ijWfClyqKDcWw8+I45yo5H4jP6Vxnw31vfoer6JK3KQSTw/Tbhh/I/ia5YU04c63RPKrXMz4Uf8je/wD16v8AzWqnxM48c3n+5F/6AKt/Cf8A5HB/+vV/5rVX4m/8jzef7kf/AKAK7V/vHyL+0e33t5bafatc3k6QQKQGkc4AyQB+pqWGWOeJZYZUkjblXRgwI9iK8y+LushYrPRYm5Y/aJgD0HIUf+hH8BW14W0i80P4cym1G3UriB7lQwzhivyjHrgD8a4XStTUm9WRbQ5LxnLN4v8AH8Gi2Z3R258jcOQrdZG/DGP+A112o6lJLoUFh4I1K2+1WcohdC6ZWJVKnhxzyF5HWvJtI1++0H7XLbQxefdxGP7RKrF0B6lDkDPTk56CtTR7bSNJ0ZrrxDBekanGyWptlTciKw3N8x4JOAOOmfWuydKyS7befcto0fE8njh9Dm/ty7glscrvCmAtnIx90Z61l+G7DxLd6bI+jvCtsJiG3vGDv2jP3uemPaqmp/8ACJfYX/sr+2/tmRs+1eV5eM85289Kj0j/AIRj7I/9tf2v9p3nb9i8rZswMZ3c5zn9K0StDRfh+gWuj0Pwz4d8TT30v9s3ES2vlHYymN/3mRgfLz0JrJ8VWHiqx11oNNgvLi3CKRJa2zSKSevO081s+AfEXhy2nTw/pEWqlrqV5Q92sfBCZPKnphPTrXc3+r6bpciJqF9b2ruNyiaQJuHtmuSVWcKmqM+RJ3seEXt/4r01Ua/S9tVY4U3FtsB9hlea1L7UpW8DRyzSlp7j92Se/wAxz09ga2/inrOm6npenpY6jbXTJMxZIZQ5Ubepx0riNX1oXui6PpkYAjsYW3nGCzsxJ+uBj9a6abc4p2sU4J2diz4Z1mx0iGc3IlMkjD7i54A/+ua3T4z0vH3bkn/cH+NddoXww8Kal4WsNUmku8y2qyyuJsAHblu3Y5rzrwT4dt/FPiw2JVltAkkpUtyFHAyR7kVCrUp80tfd3HKim7s6jUZ7wacJtMh86diCqbc8GudvrbxXq1obebR3KEg5WIgj8c16j4oe28MaGqXztDBMpto5Ik3EEqefXoP0ryndoh/5mjVP/Adv/iqVGpzq6RnGm47orxr4g8LWzPLZtDBK4X98uRuwenPXAP5Us3/CQeJrNHjs2lt0c8wrgFvfn/OaraudO+yL9j1i8vZN4zHPEVAGDznceeg/Gl0n+zRZn7VrV7Zy7z+7hhLLjjnO4f5FdHTm6+hpbr1NPTLLxRpduYbfRiys24l0JJP/AH1XdaBDez6WsupWMcFyXIK7O3Y8k+tcBnRP+hn1T/wHP/xVep+HtRstZ0sS2LySRQnySzrtJYKD/UVz1pNK9vwM5wv0FED47ge3FH2TPVTmtTyRml8oelc3tCFA53Ub7T9IWNr+4WBZCQmVPOPpV6OJZI1kQZVhuB9Qa4/4rIEtdLx/fk/ktd3p8Q/sy0/64p/IVctIKXcbhpcg8jjOMUC3xj/GtDygO350vlj0rPnFynmfiufxNb620elR3rWojUgw25dc9+dprnbrXfFtiqtdyXlurHAMtvsBP4rXsN9qmm6Y6JfXsFuzglRI4XIrz/4katpuo6dZJY3sFwySsWEThsDFdVKd2o8ppHtYk1TVZm+GMNxcS77m8/dbjgE/Mc/oprF8GeItL0C2uvtizGaZhjy0BG0D6+pNY2p6v9s0jStOTIjs4m3e7sxJ/TH616Do3gPw7feH7O/l84mS3WSRvNwAcfN+RzVy5YQtLqyrJKzD/hYug5+5d/8Afof41e8Ty67/AGdZz+H0kLync+2NWO0rkZBBrzzwhotr4g8T/ZZUcWgR5CobDBR05+pFe5w26wQpEgO1FCr34AxWNXlpyViZRSeh4d4jl8UyWcQ15JRB5nyb4kX5sH+6M9M1a0SfxqmkQLpKTGxG7yisMbD7xzyRnrmuy8ZrpfiXTbe2tfEGkRPFN5hMt0uCMEdj71xF/baj4f0xDZ+LreaJX2rb2N+xK5ySdoPTP862hJSilZX9C1qrD9dn8ZvpMq6wkwsiV3loY1Gc8cgZ61F4cm8WR6dINBSU2vmneUiRhvwM8sPTFOsLXUPEOmM154tt4Yy+029/fMCcYIO0npz+ld54KOl+HNIlsbjX9JmkkuDKDFdLjBVRjk9flonJRjayv6A9FYf4eXxHd+HtQXVhIl8d62+5VjPKcY247nrXIR+H/HkpcR39y5Rir7dSztb0PzcHkV6xqN1Bp+nXF1cyNFDEhZnUZKj1A9a8JudRfSL67/sXWZp7e7VlkcqyswOc7gR973H6dKzouUrtJfcTFX2NLw5qGuzeL7KxfU724C3AEqi5Z0Kqfm74IwPpVybQPH1vBJPJfXixxqXY/wBodABkn71Wfh5qXh/Rxuubljql24iVRExCKSAFzjHJ5J+lZF5qHiTV/Ed9o1lfXcxlnmiW3M+0FQWyOSBjaDWrb52krJdyupBo0nizX7iSHTtS1CV413tm8ZQBnHUtXa+E9F8W2WuLNrNxcvaeWwIku/MG7txk1y1r4T8b6NHNNa289qpXMjRXUYyBk84b61u/DPWNT1PWryK9v57hFttwWWQsAdyjNKq7xbjawpbaGZ8StT1CXVpdMliAsYJEeKTyyCzGME/N0PU1SsvFviK10RLGCzRrRYigfyGPy+uc12HxaXGgWRx/y9f+yNXM6ff+OE8PRx2dtIdNEJCMIUI2YOeevrSg06a0QLYoeAtRvbHxHDFaxB47l0inJQttTPX2qtoyeJNeuXg06+u5JY03sDdFcDIHc+9dN8IxnVdS/wCuC/8AoVcn4b8SXPhm9lubaGKVpY/LIlzgDIPY+1aPWUrLXQrqzV0qXXNN8c2Gmahe3XmJcxLJGbgspBwcdcHgivbcV4ZpurS678RrDUbiNI5JrqHcsecDG1eM/SvdwgrmxOjVzOaGU9ZHXgHj0NOERPIUn6U/yXHbH1OK5G11JsKs/AyMH1X/AAqZZFc8EH9DUGxR1dBj3z/Km/uu8hP0WocU9ilJot8dxj60u04qqJ0QfLvPsTxThec/6sAexqeWQ+dFaVP3r9fvGmeWK0ZLKbex2ZBPaomt5B1jb8q0VRdyXB9in5a+lJsHt+VWjHj+H9KNvsPyqucnlKvlik8oVb2ew/Kk8v2p84cpV8oV5V4h1Hw9pXi/UbiXT7i41FMeWG2+SJNgw2Op7V6/5fvXm3xM8O6ne+Xd2FjbtaxKXmePAlZvVvUAYxgnvW1CacrNlRjZnA6dq9rLrp1TXjdXMoKOph2qSy4xn2wMcV1Nqnhbxnq89taadcWd5NA+2Q7QisMENtB6/wA+frWJD4wt4PDZ01NCsBdBBGt3sBPuxBGd3vnr+VdR8LdO063t7nVZ761N0VK+UZBugjHVmz0z/IdeTXVU91OW3Y0a6nPoieA/H6rKXe0RQC2OXRl5P4H+VWPh9bya142uNUmH+qEk7HqNznAH/jx/Kq3xE8Qadr2rQjT0LrbKY2uDx5nOcAeg5575Nbvws1zSLSObTLgiC9uJdyyufll4wFz2I5475/ClPm9lzW1sFtDttb17T/DsMMuoF1WViq7E3c4rAm+IPhScATCWQDoHt84/Our8QeEbLxLbww3/AJypCxdfLcLyeOeDWD/wqLw4Os19+Eo/+JrjhUo295u5Kgupgar478Opp0raXZRS3nRFmtsL16muFs5rHVNUa51++kiizkrBDlm9gBwo/wA4ruPG3w/0Pw74Zmv7SS6+0K6KgllBByeeAB2zWd8PfBel+KLC9mv3uA8MoRfKcDgjvwa6oTpxpuavYtJI6DTvHPg7SbRbWxWaGFedqwHk+pPUn3NdBDc2XjPwrqR06R/LdZLcb1KnfsB/9mFUf+FR+HP799/3+H/xNdJ4e8N2XhmweysTKYnlMpMrBjuIAPYdhXLUqUrXg3cXKjwPV/Dtxo2i6Ve3WUmv/MYREfcRdm0n3O4nH0rvNM8eaf4Y8EaZarbm41EwswjIIVQXbBJP8hn8KPjQMf2H/wBt/wD2nV/RfBmneKfBGgSXZkjeBW+eLALoXbKk/Xn8/WuiVSM6UZVNr/5j3Wp5TrOr3eu6pLqF6yGeXGQi7VAAwAB9K9u8HeC7Hw5ZpOMT30qAvOw6A/wr6D+f6V5T4/0200nxbPZWMCw28cce1F7fKO/Un617ZLrFhbeGjfi7h8tbXerCQfMduQB75xSxE24RUNmEi1ZX1lqMPm2V1Bcx/wB6KQMB+VeS+JPCvimbxne6np9jKw8/fDMrp2AAIyfaqHwst2n8cQOM4ghkkOPTG3/2auh8S+KfGkHiS+sdKilMEUm2Mw2fmHBAxztPrSjCVKo4xa26iSscLax6+fFjR2/m/wBueZIDhl378Hfz06ZrqvFy6ja+AdOTWIMapPdMZpXClyq5wCR7FfyrlbU+IL3xWTbfaF1ySRycARSB8Hd6Y4z6V3tzqWu+E/BUf9s2L3upS3bFWvT9oSOPC9WBIGegGR3NbVG1KO1/6/ApnLeGfGdl4e0s2kugRXsjSGRpnlAJyAMYKHjj1rZ/4Whp/wD0Kdt/3+X/AON1ct/iXob6TO9xoMEeoIn7uNYlaORunXGQO+PTuazvAfhebxVrMmu6ogNnHJu27cLLJ2UD+6OP0HrUy5dZ1I2+YrLqei+J4NUvPCNxBowRZpoguwtt+QjkL2zjjnFc78MtB/sSwn1C+Mcd1dYVY3IykY9fQk9vYV6Dd2xuLKeBcAyRMgJ6DIxXkv8AwpnUf+grbf8Aftq5aU4uDhJ2ElpYqeOre60rx0viXyopLT7TA8QWUfOURSQQMkfdPNdedeu/FXw/urzTs2OpF8QpHOM/KwJ5OOoyK888WeArrwnYQXc97DOssvlhUUgg4Jzz9Kn8M/Di88TaMuow38EKM7JsdCTxXTKNN04yctuo7Cy+F/GPiK6hXU5QVT5RLdXSbYwepwCT+Qr2rS9L/szSrSwjbetvEsW7+9gYzXln/CmNR/6C1r/37avYdn0rmxNVSSUXp6A0RFGHVT+Vcd8Tf+RGvP8ArpH/AOhiu4G4dCa474oknwHeZx/rIv8A0MVjRl+8j6iscD8MdIsdaTWrO/gWWFo4uvVTluQexrN8U+DNR8IXa3tpLLJZB8xXKHDxHsGx0Pv0Pt0rpPguqm71jcuf3cXf3avWZrS2uYXhmTfHIpV0cBlYHsR6V11cQ6VZroVrc4r4e+ItT8Q6TK+owD9ywRbocCY4549RxkjjmuH+Lv8AyNlr/wBeKf8Aocle0WemWun2kVpZokUES7UQDAArxn4woU8XWoJB/wBBQ8H/AKaSVGGnGVa8dBLcxdSm8YtobLqI1D+y9qbvMQiPbkbeceuMfhXR/D+31G68Ga9FpNx5F6ZFMbDGSQv3eehI4z2zU3iXxzomp+BZNItXnN00UKgNHhcqyk8/RTV/4Ogf2RqeTj9+v/oNbzk/ZNtW1Doc78PfFs2jaw2l6lIwtLmQgmUnMMvqc9ieD+frVfxF/wAlbb/r+g/9kr1VfBuhnX5dca3EtzJhxuOUVsffA6ZPXJ+teS3zxX3xZUwyCSOXVIlV1OQfnUcUqc4zm5RXTUNz3fGeK8A1S1ufCvjm5htI3YI7mNFGd0LqeP8AvkkfUV77eXNnpgjbUb20sxJkIbmdY92OuMnnrWRqGq+GmsL2Rdd0Y3D2zplLqMu3BwM5yeT0rloVuRvS6YJM8r+E/wDyOD/9ej/zWqnxN/5Hm7/65x/+gCrPwqu7Cz8XvLqN3BawfZXHmTSiNScrxk/jVX4l3Nnd+OLuawuYbm3KRhZIZA6n5Bnkcda7k/8AafkVbqSabaXXjT4is19C6KZTNPG4wUjXGEI/75X8a9yuJBbWk1y6v5cKM7bVJOAMnApV8ReEkmMy6zoglK7TILqLcR1xnPSrUmv6LJpN5fJf211Z2yE3DW7iYKMcghc9q8ytiJTa92yRXs79T521XxDB4n8Vre6u8sWmo2FijGWWMfwj3Pc+/sK7fVPFmmav4P1G70jT1RtK8iOP7XbRsArsVwo5wMLWLLqPwwsCRb6LqepOOQ0sxjQ/kwP5ircN/B4o8Ga/p3h3wwtkyNbP5Vu7TPL8/fgdAD+dd82mk+VpK29rbi5UZGnzeLtVsfttlotnPbbivmrp8O3I6jp71YkHjW3tZrp9AshBChklf+z4CFUDJJ49OasXerf2B8Jj4bukaLVbq5bfbuMPFGGDbmHbOABn1PpUPgvxVpOmeC9e0K7aSK8v45hDKV/dktFtVSRyOc84xz1obk05KK37dO4WR2Xwj1A66uo3V5Z2AntXQQyQ2kcTLuDZ5UD0rC+OX/Ia0n/r3b/0Kul+EGg3ujadqMt0YGiunjaGSCdJVYANnlSfUVzXxy/5DWlf9e7/APoVc1Nx+u+7t/wC38JY034LW9/pVneHXJUNxAkpUW4O3coOPve9TeJPhDa2fh2S7sbmSS7s7RiyhABOytu3Y9dm4YHUhffNO7+MJsdCsdN0OzzPDbRxPc3A4DBQDtUdfqfyNdqnju10TwRp1/r8rHUprcH7Ns2yyt0ztwMA4znGPTtSnLFxab77AuU8v0fx9/Z/w01Lw+5f7WxMdqccCKT7/PbHzf8AfQ9K6v4I6K0drqGtypjziLeEkdQOWP0ztH/ATXkF7ILy8uruC1FvA8pYRx5KxBiSFz/npXvXw18ZaJqOiWeixKlje20YjFuzcSerIe5PJI65J69a3xkHClLkXxPUUdXqXPiJr+jaJaWK6zo66nFNIxRGCkIVA55/3q8K8S6pp2p60bvSbAWNrtXbb+WgCkdeg5B68+pr6neKOXHmRq+Om4Zr540bxh441/U49O069gkuZASqm1t1GAMnkp6CsMDL3W0tt7v/AIA5lHxH4k0LWNBtbaw8PQadqCSK808KqFcBSCBjnBJB/CotH17Q9O8Oz2tzocd3qbMxiuJFUquQMZBGTggnFd3/AGd8W/W1/wC/dp/8TR/Z3xb9bX/v3af/ABNdCqQUeW6/8Cf+RLVzzXw7qWn6bqDTanYi9gKkeSUQ5Prlhx+Fex+BdQ0/W9Oum0nSvsMMMuHRQMFiOvH0FcDf+MPGuja8dK1K9gS4jdBIgtbdhhgCOQnoRX0IkUcQIjRUB67RissZVcUm1v2f/AQKCkYLW5XgqR9RXCeJfAurazrk17aax9mhcKFiy/GAAeletlVYcgGo2tom6oB9K4qeKlB3QeytsfNfjHwtqHhyK0e+1L7WJ2YKMsduMZ6/Wuhtfhvrs9pDKmv7VeNWC5fgEZx1rqPiz4Z1LVrXS10mymujG8hkEYB25C4/rXbWGmyRaZaxsoDrCgZe4OBkV3Sxj9nFp6u5LjI57w3o1xo2iRWV1cfaZkZiZcnnJyOvNa3le1X2tXXqp/KozCRXK6nM7mbizxr4uLt1TTR/0wb/ANCqzYfCiG9061ujq0iGaFJCvkA43AHH3veo/jEu3V9M/wCuDf8AoVF18UjaaPaafo9rmaK3SNriccAhQDtXv9T+VejH2jpR9mVrbQsa78MILXQ3ubSd3ubW2YsoUDzmDbs47HbkY78fjz2meMfsXgK+0Zi32pjstzjjy3+99Mc/99D0r0dPGNvpHg+wvtbkY380AP2fbtkkbpnb2B656V4fdyC6uri5ithDE0hYRx5KxgngZp0eaaaqdGCV9z074SaOy217q0qkCQiCI+oHLH88D8DXpnlDFcd8P/FOkahpNrpMQSzu4E2CBm4f1ZT3z1I69frWh4y8Xf8ACIw2kn2D7V9oZhjzvL24x/snPWuWrzzqtW1JabZ4joMekSamq63LNFZbDloR827t2NaviGDwfHpobQru8lu/MGVmB27MHP8ACParn/CXeGf+hHtv/As//EVm63r2jalYCCw8Nw6dNvDeck5c454xtHt+Vd/vOSdmvuLJvD1v4Pk00trt5eRXnmEBYQSNmBj+E89az9VTSI9ejXRJZZbLKYaYYbd36gVa0TXtG02wMF/4bh1GYuW855yhA44xtPp+taa+MPDSMGXwRbBgcg/azx/45Q+ZSbs39wHsmpaZDqmmz2NxuEM67X2HBx7V4r4/8M2Phm+s4bEzFZoi7eawY5Bx6CvUfBvjBfFkN25sTafZ2UYEvmbs5/2RjpXEfGEj+19Nxn/UN1/3q5MO5xq8jIjo7GdHoNnp/jHwrDaGUm4it7uXewPzEk8cdPl6UeGCB8XCScAXV0Sc/wCzJXoWleGLK6n0XxA8k4uoLKJEjDjy8eXjkbc/xHvXAeJNPh8Ja9cajFq0c9/O0xW1SPmISKw3Mc8Y3ZHrWsainePWw730IvAc0tzrmqt5jsg0+dsM3bK/41d+EIz4hvhjP+i/+zrWD4P1+30C7uvtcL+VewGAyr1jB74/iH+Feh+AvCUWjzSapb6rDfW9zDsQxx7ccg+p9OlVWfKpX67BLS5D8Xhjw9Y/9fQ/9AauW0/RfGkvh2O4tNQdNOMJZYxckYTuMfnVnx74Tv7e7v8AWp7+zSzklzFE0r72OOFA24z171jR+E7ttBOrLr2mCwUYJ8+QEH+7t2Z3e1FOyppJ/gC2N34RMiapqbPnaLdScf71YfgTxNZeF9Vubq+hnlSWDy1EIBIO4HnJHHFGk+Hru30pvEltqdg9vajfIiSOHDdlI29SSO/etP4Z+HLDXLjUJNStVnhhVAoYsMMSfQ+g/WqnyWnJ7aDdtSqNYg134q2mp2kTxwzXcG1JAARhVU5AJHUHvXuHmyY4OPoAK8VudPtNL+L1vZ2MQit4ruDYikkDKoT19ya9rwK5cRb3bdiJ9BpZm6ufxNJt9cU/FLg+1c9yLEe3A7UFfpUmPYUY9qLhYj2+2aNntUmKXFFwsb1FFFecegIQD1ANNMMTDBjX8qfTWkRerAU1foJ26kRs4D/Bj6VG1hEehYU9ryJehJPtULXzfwx/nVpTM24A2nj+GT8xXmXiv4XavrviSW5g1KJLCQK2J5GYo3QhV6Y79R1r0hrmZv4sfSojubksT9TXRSnVpu6Zm3HojitM+E/h+ztXhvC17M4w0ruV2/7oU8fjn+lZuofB+1i0a9GmXk8l6zb4N+ACoH+rbscnnOByB716Nso246Vr7ere/MTc4XwZ8MrfRGW+1hY7q+/gixmOL8/vH36D9agvPhNZS+KIL23kVNLZ/MntCCMd9q/7JPbt29vQwzjo5/OnCSQfxZ+ope3q8zlfcfMKsaoioqgKowABgAVj+K9Im1vwze2NvxcSKDEd23DAgjn8K2POb+6tKJQOqYHsayTlFpoaaPC5Phf4vnCiYwuF4G+5zivTfA3hN/CmivbzzLLczyeZKUztXgAAev1966jzE/2hTg6H+L861qYmpUjyvYegzafSjbUo2noyn8aUL9Pzrn5gsjzr4m+FdW8S/wBl/wBlwLL9n83zN0gXG7Zjr/umuk8H6ZdaR4UsLC8jCXEKMHUMDj5ieo+tdDgjtRitHWk4KHRBY898d/Dx/E91HqFhcRw3ioI3WXOxwOnIyQfwriR8IPEpIBksBnqTK3H/AI7XvFJxWkMXUhHlQzifA3gJfCYmuZ7hbi+mXYWQYVFyDgZ5OTjn2HFdltNSgZ7UY9qxnUlOXNIVjyvTPCOuW/xYfW5bHbpxuJ3E3moflZGAO3dnqR2r05olkRkcKykYIIyCKn2mjbTqVnUab6aDseeeI/hTpOqq8+mY0+7PICDMTH3Xt+H5Gl+HXhHWfDv2w6pdOI87IbZJd0Z7mTHqeg6HrntXoWDRtqniajhyN3QWOI8eeD9R8U/2f9gvYrb7N5m/zGYbt23HQf7J/OuO/wCFReIv+gzbf99yf4V7TtNJspwxVSEeVBY8Uk+D+vyDEmrWjgdmZz/SlT4P6/Gu1NXtFX0VpAP5V7XsFKI89BV/XqvcfKeK/wDCovEX/QZtv++5P8K7zwN4YvvDGl3Frf3UdxJJN5ishY4G0DHP0rsBCT2/OlEH0rOpi5zjyyDlZW2Guc8d6Le654TudP0+MSXMjIVUsFBwwJ5PsK68Qgd6URKO1YRq8slJdCuRnl/wy8I6x4auNRfVLdYlnWMJtkDZwWz0PvXooiYjhTV0KB0ApadWvKpLmYKBTFu57AfWvM/iN8P9c8SeIbe801IGhS0WJi8u07gzn+RFesUUqWInTlzRHyI8v1X4QaY/hpk0u3EesbI9ry3D7A2V3+vbd2rW+G/g6/8ACunX1vqn2d2nlV08piwwBjnIFd1RVSxVWUHCTumPlR4JqHwe8Qyaxd/Yks1s2mcwlpsYTJ25GMjjFdH4I+E91o2tw6rrNzA7W53wwQEsC3YsSB06gD2+lesUVpLHVpR5QUEcj468D/8ACaw2Uf8AaP2P7KztnyPM3bsf7Qx0ri/+FE/9TJ/5I/8A2yvYqKzp4qtTjyxenyBxTPHf+FE/9TJ/5I//AGyj/hRP/Uyf+SP/ANsr2Kir+vYj+b8F/kHIjx3/AIUT/wBTJ/5I/wD2yux8JeAYvDWi6lpdxffbob/Ik/c+XhSpUj7x7GuxoqJ4utNcsnp8gUUjk7H4aeEbAgppEczgctcO0mfwJx+lcr428E+IpNXiHhMvbadPEFmgt5lgjjYcdARkEHpg969WopQxNSMuZu/rqDijyLw58FliuEuvEN4k+DuNtbk7W/3nOD+AA+tdV4i+GHh3Xoy0Vsun3WPlmtVCj/gSdD+h967OinLFVpS5uYOVHlvgL4d6x4Y8U3FzeXp+wxx4j8iUhbhjkDcv+yOcHuRgnBq58Qvh3eeLdZsL2zvFjCr5MyynKxoCTuUDqeSMfSvRqKHiqntPadQ5Vaxyfhn4eaD4ZCSxW4ub1eftVwNzA/7I6L+HPvXG658I77V/Glxcrf7NMnPmtNK5klUnqgB5PsSeAR1xXr1FEMVVjJyvqw5UYem+D9D0vQn0aGwjezlGJhKNzSn1Y9z/AC7YrzbUPgtKviK3bTrzGkySgy7mxLAvU4/vegPXkZHevZaKVPE1abbT3G4pjIolghSJN21FCjcxY4HHJPJ+prwLQPhf4yj1eJm83RwA3+mRXCFk46YR93PT8a+gKKKOInSTUeoOKZ5h/wAK48W/9D/qP/fyX/45R/wrjxb/AND/AKj/AN/Jf/jlen0VX1ur5fchcqPAdV+GPjE+Iml2yaqgdCb6S4QNIAB1Dvu46c+le/UUVNbETrJKXQajYKKKKwGFFFFABTSit1UH8KdRQB5v8QPhxdeKtYsb2xu0iAXyZ1lOVRck7lHc8kY+nStbw/8ADfRPDqpJDELm7X/l4nGWz/sjov4c+9dlRW/1mryKF9ETyI8c1v4SahqXi+e4W8I02b960ruZJFJ6oAeT7E9iOuK7Sy8LaJpWjPpMen7rWUYlEq5Mp9WPr6enbFdfSYHpVSxdSSSlsiXTvszw2++E7jXYG0+6I0x5Mybm/eQjrwe/oD/+uvT5bOzngihns4J0hGE8+PzCOMdWzz71vvbQv1jFQNp8R+6WX9a0livaW5uhm6cjnzoulH/mF2P4Wyf4VzHjrwmdR0BYdF0u3N2J1Y+WqRnbg55OPUV6C2nyD7rg/WoWtZk6oT9OaqFezumRyyW5wngbwn/Z+gPDrek232szsw8xI5DtwMcjPvxXS/2DpH/QKsv/AAHT/CtIqQeQR9aMVUqspO4upnS6XBFp13Bp8MdpJPEyh4FEZDEEA5GORnrXkp+HPi7Vb1X1KZc8KZ7i580hfbkn8K9rox7VdOtKF7AtDNm0rfoJ0uG5mt8QCFJomKumBgEH8K820P4U3k188+vXCrCsh/dxPuebnqW7A9fX6V65tNG00oVpQTSe4LQ5/WPB+kaxpKae9tHCsK7YHiUBovp7eo71zvgfwVq/h3VrqS6vytop2pDE2Vn4+8QemPzyPTr6FtNLt9aSrSUXG+jA898Z+BtS8Sa5a3MWoD7Jwjxyf8sB3Kgdc4+ucdunUReGdKi8PHQ1tlNkybWUjlj/AHif72ec1tbeehoC89KTrSaS7AeSD4T6iltqEMWrKqM48iLnbMByDJ6Hn0PetGPwHqNv8Pl0+1cR6s9wLmTbLtGfu7dw7BT+del7R6Uu0Z6VbxU3uO7PJvDXw11ez8Q22papc2+yCQSkJIXd2HIzxjr1Oa9UxUoA9qMe1RUqyqO8gepGVNJg+lS7TRt96zuKxHtPpRtPpUmPel20XCxFtPpRtNTiNz0U04W0p/gNLmQ+UuNcgHAUmoWuJW6cfSpCgyaaU9awXKjZ3IGMjdWY03Z7GrOwUhSr5ieUg2+xpNn1qwVo20cwuUr7RRtHpVjYaTafSjmDlINoo2D0qfbRto5gsQbaNtTFfUUhUU+YLEW2jbUu0Zo20cwWIsUuPapNtBUUXCxFtHpS4FSbfpRtHPSi4WGAsO5/OlEj+ufrTto9qNmeAD+VK6Cwea2eQDS+bnqv604QMf4acLZiOSBU3iNJjPMX0NKHTjmpRbAdWP5U8QRjtn61LlEpRkQhlPRhShSegJqcIo6KPyp1TzFKPcgEbHtThEe5FS0UuZlcqIxEO5NO8tfSnUUXYWQgAHQCloopDCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKaXRerKPqaAHUVC11AvWVf51G2oQDoxP0FUoSfQlziupaoqidST+GNj9eKY2ov/DGPxNUqU+xPtYmjRWUb6c/3R9BUZuZ26yt+FV7GRPtl2NnpTTIi9XUfU1ilnPV2P40Bc9qfse7F7V9EbImjbo4P40/OaxApzxT1Z16MR+NDo9mCqvqjYorMW5mX+LP1qRbyQdVBqHTkWqqL9FVRejuh/Cni7jPqPwqeSXYrniT0UwTRt0cU4EHoamw7oWiiigYUUUUAFFFFABRRRQAUUUUAFFFFABRRQSB1NACFVbqoP1FQtaQt/Bg+1SmRB1YD8aYbiIdXFNX6Euz3ITYL/C5H15qFrKUdCrVZN5CO5P0FRm/QdEY1onUIcYFZoZE6oQKbjmrDai38MX5moHvZHP8Aq4/xGa0Tl1Rm1HoxMUYpi3DKeY0P4VYS/UfehA+gpttbISt3Iwp7A04QyHojflVpL6A98fUVOssb/ddT+NZuo+xahF9SiLaU/wAOPqacLOQ9cfnV+ip9qy/ZIpiyPdx+VOFmO7mrVFLnkPkiVxaRjrk08W0Q/hzUtFTzPuPlXYYIox0QU7ao6KPypaKVyrBRRRQBRLAMfrQHx0JqNvvH60ldFjC5MJWz940eafQflUOaXNHKg5ibzfYUeaP7v61Dk0maOVBzE/mr6Gl8xPX9Kr5pN1HKLmLO9P7wpQynowqmXxRv9qOQOcu8e1GKobz2FG9+3H40cjDn8i9ijb7VRMkx/jP50omnXo7fnRyMOfui8ImP8NOEB9QKpC6uB/EPxFPF7MOoU1LhMfPEti3Hc04QoO2frVUX7d4/yNPF+vdGqXGZSnAshFHRRTqrC9iPZvyp4uoT/Fj6ipcZdi+aJNRUYniPR1/OnB1PRgfxqbMd0OooooGFFFFABRRRQAUUUUAFFFFABRRRQAUUUhZR3FAC0UwyLSGUdgadmK6JKKi830FIZGPoKOVhzImoqsWc/wARppz6mnyk85ZZ1XqQKja7hXq9QYNG09wPyqlFdSXOXQcb+IdAx/CmHUDjKx/maQxg/wAI/Kk8pf7uPxq1GHYlymNa+nJ4VR6cVG1zcN1cj6VIYR70hix3/SqXL2I95kDGRvvSMfxpnln0zVnyj6Zo8v2q+ZC5Sv5eKXZU+wjsaMCjmCxDs460bPap9tGPWlzDsQhPagIfQVNt9qXb7UcwcpFto2+1S7Tml20rhyke2jbUuyjZzS5h8pHtFGKl2fWl8v2NHMOxDilxUuwd6Aq9yKXMFiLFOBI6E0/Kev6Um5R2JouOw4TSD+In608XL91FQl/Rfzpu9j6D8KmyfQLtFsXIPVTTxOh74rPJk/vfpUZDnqx/OlyIfOzW8xB1YD8aPMT+8PzrHMWevNAjI6ZFHs13H7R9jWM0Y/iFIbhO2T+FZgMi9GNPEsnQgGjkQc7LxuR2Ummm5PZKqiXoCn5U4SIfUfUU+VC5mSm5k9h+FMM8h/i/KgbSOoo25p2QrsaXcnljTTk9Sak2e1Gw+lO6FYix27Um3jipdlL5dO6CxBs+lGyrAiPoaXyG9D+VLmQ7Mq7KTZVv7M57U77K3+TRzoOVlLZSbDmr/wBkP94Uv2Qd2P5UvaIfIzO2c9KTy8HjIrUFqncml+zRehP40vaIPZszVeWP7sjCplvZl+9hhV77PEP4BSiKMfwL+VS5xfQag11KyX6n7yEfSrCzo/Q/mKeFUdAKWobXQtJhRRRSKCiiigAooooAaUU9VFNMUXdFqBmkyfmNNPvn8atRfczcl2Jmjtx1wPxqJlt+xb8KbgDtRgVaXmTfyGlEz8u6goP/ANdPop3JauRmIn+IflXFeJD4o0/xZpd1pqSX2mTfuZbSMABD3JP05BJwCCO/Pc15nrd14j0j4jaVDJq7Np2o3Y8u3Q/dQFQQcjvmt6F3J7bdQ5UZfiPW/E2g6zHBN4oiW1nZsTRWcbpDycK2AWzjrx+dUoPEfjDUtUNlpPiSC7jT/WXT20UMS/iy5P4D6ZrDnjt3vvFDSx6UzrPNsN3O6Sg5f/VAHDH698Vmzx248I20gj0oTmQ5dJ3N0RlvvJnaB07dMV6UacbLRX9EKx794g1E6J4XvNRkYGSGDKsOjORhfzYiuH0DxT4qsdCtGm0G91o3CGZbgSbdqkkBeEOeF3Zz/FS/Fy7vF0HSbCBHNvMpmmZf9gLgH2+fP1xVXV9LXUPCXhRm0W71HZYgZgu1h2cLwcq2c1y0oR9mnJbv8vuHYTTNe8cWGtXl3caBql5aT52WspI8rnIw23sOOnNdnpHia9urHULzWNButJhs0DjeTIZB82cDaDxgfnXl/wDwjUX/AEJuqf8Ag1j/APjVel+FXtfDvgOa5urCewtrcySPDJIJ3x9QBnP0p11C10tf683+QWMLw/r/AIg8Y+K0vbJvsGh25KlHAbz/AFHu3Tpwvvnme9vfiWt9cLaaNZNbCRhCzPHkpk7Sf3npiub8LXg8a/ES0LJ9h0/T42ltLS3+RUUEYHHqTk+vSty98N/EGxsLi7fxXEyQRNKyqWyQozgfL7U5qMZ8rstNmFjX8N3PjmfV1TX9Mtbex2MS8bITu7dHP8q1P+Ei0/UDrFlYXDG7sIm80bSu1sMOM9cEfTpXGeAk8YeIfs2ryeIM2EV1smgkJ3OFwSOBjofWo/G4PhH4gRaxGCLTVbZ4pwP72Nrfl8jfnUOmpVHDS/kHKJoviDV7n4Ua1qc1/M97DclY5ifmUYj4H/fR/Oum0DxLb2XgTStV129INwfLMzgksxZsdB6D9K4rw6v/ABY/xE3peH+UNUtDVvGV34Y8NoGNlp8TTXfHX5yT+m1c+rGtZ04y5r6JP8LBY9wj2TRJJGQyOoZSD1B71y/jmTWbLTYbvS9XtdMiiY/aJbhdwIOAuPkbvn867MQEDAXAHpXIfEnR9S1fwobPTLVrid50JRSBhRk55PriuGjNOor7D5TnLC1+JOo2UV5ZeKNMkt5RlHEQG4dO8NQ+H/EXjBfiPH4e1bWEuI4txnEMSBW/dlhg7AepHpU2kX3xC0fSbXToPCtu0dvGI1ZpBk47n565q5uPFnhfxHceLtR0SKNrgmIiR8opYDgYbPRa7VFS5o2j5bCtY9L8eal4isNAim0CUrc/aFEjBEb93tbP3wR12+9ee6v4t8eaPcWVvJ4msZ5rsAqlvFExTJAG7MYA5Pv0NelX32HXvh8l9rVuWtZLFL2eKFiDwgkIXnPb1rxfwxF4Pmk1C68Qz/Z1JItLJBK2O+SyjkDgDJ9c9qjDRhyvmje3lcrVHeb/AIjf9DnoX5x//Gq2vBms+Jbjw/rE+uz+ZcQ7vs8gSMAYQn+EYPOOtebeF5PAV1YzP4khSzuRJiNIDcEFMDk4Lc5z3r1Hw/a+HYPB2oS+GSzWMyysWYvy4XB+/wA9hSrxjFcrj8+W34gm+5xvhvV/iL4n0x7+18TafBEkxhxcxRqxYBScYiPHzCn6zq3xA0KSzS88XaWTdyeXH5UKvzx1xDx1FYvhez8LzeAJLvxLK6rbX83kRxSYdy0cWQB3+6PpWBdeHWT+zNSktWtLDU7rZb27MS4iBX5iT6549evTFbqnBzaaSX+FfmF2ek+HPEPi6H4kQ+Htc1eC8j8pncQRIEb92WXDBFPpTNf8R+LJPiBrGkaVrUVjaWVsLn97AjBUEaM3JQk8sTVXT7GDTPjfb2NsGEFvaCNAxycCDjmotR006x8WfE+nLcfZ3uNOCLJnofLiOD7HGD7ZrHlhz3srct9vPew7ux0Xg/Xtf1b4davquqXjPMEnNvKI1jIVY+o2gfxZ59qtfCvU7/VfCL3F/dzXMwunXfK5Y4AXjmuY0bxJGvwV1WCSNIpLON7Eqp4cycA/U7zn6E1Z+C2oMun6lpMuUkjkW5RW4JV1AyPbhT/wIVFWl7lRpW1BM9UIPpSYNLvPtRv9hXnlCYNGKduHcflRuB7UxDcUlPyppePWlcZHRipMKe4/Ol2jsKLgRUVJtPoaNh9DRcLEeKMVJ5ZpfK96OZBykWPak2j0qfyh60eWPejmDlINoo2irHlr6Uu1fQUcwchV2DtShD71ZwB0ApaOcORFXyif4R+VL5BP8P61Zopc7DkRX+z56nFAtsfxfpViijmY+VFfyMds0eWR/BViijmYciKpGB90D8KMkdOPwq1SYB7CjmFylU59aTBPerWxT2pDEv0p8wcrKxSkKZ9KsGNf71NMYH8Qp8wuVkBT2o2D2qYJnqwpwjB/jFPmFysgMYxweabsHrVsRD1JpfLWlzlcpT2D1o2exq75a+lLsX0FHOHIUTESOlJ5belX8D0FLRzsOQoeS5/hNO+zOe351dopc7DkRTFo3tS/ZD/eFW6KXOx8qKosx/e/SnC0UfxNViijmYcqIxCo7k/U0ojQfw0+ildjshNqjsKXAHaiikMKKKTcB3FAC0U0uo/iFHmL607MV0Oopnmr60eavvRZhdD6KaHU9xTsg9DSGFFFFABRRRQAUUUUAFFFFABRRRQBWI5pMU443H60fjWhnYbijAp4x3NGAe9FwsiPb70bRUoTPel8s0cwcpFt968i8b6rf3Hj61ltNGup4/DxWacqM7wxU5GM4GOnfrxwa9j8ukEEaszBQGb7xA5P1rSlWVOV2rhynz9p2r+FfsniNtQEcl1qZka0aWz3tbMwfGTg4ILA/Ke1Y0kmlS6TZ6adQsY44zumuE08+cx3Mfv4yRgjgkdK+lJNMsJn3y2cEjerxgmmf2Ppv/QPtf8Av0v+FdSx0U72f3/8AXIzj/Gk1tffC27vYEby3tYzE0iYfYXT8s4B/KuA8ZCEeFvAH2lXe3+zt5ix/eK4iyB74r3W4sra6tWtbi2hmtmAUwyRhkIHQEEY7D8qrvo2lyrarJplm62n/HsGgUiHp9zj5eg6egrKjiVTtps2/wALDcTwS/bwH/Z119j0fX47ryn8l5QuxXwdpb5umcZr0X4V2cV98Ofs1xGskE0s0ciN0ZTwR+tegzQx3ELwzRpJFIpR0dQVZTwQQeoxUVnY2mnW4gsrSC2hByI4Ywi5PfA4oq4rnhy2d797go6nlvhy2itvjjq9vDGscUdrtREXAUBYsACt3xh480HTbfWNGuHuBfiBohGIjhi6cYPTHzCu0Sws47xrxLSBbpxhphGA7dOrdfSmy6Zp89w1xLY2skzABpHiUsRx1J5qXXjKalJbJfgOxxXwet5IvAoeWMqJbmR0JH3lwBkfiDWfrXxN0iZbq0fQb+SeMSRRyNChCtgrkHORXp6gIqqgCqBgADgClz9Kn20XUc5RvfzC2lj5y0rxEth8OdV8NyafeNc3k/mpIqfIo/d9e/8AAe3eum8J/EPTNA0Cxs59DvpLy3iaJp44V5UsWwCTnHI4r2Y+2KUfStp4qE004bu+4uXzK9lcre2NvdIjIs8SyBW6gMAcH35rjfEnww0zxNrcuqXN7dxSyqoKRldowAO49q7rijiuWFWVN80NCrHinib4d+FfClnDdajf6w0UsnlgwrG2GxnnIHofyrl9VuvD0Ph9tF8NyajeTXl1FK5uIgMbVYBVA5JJf9K+jLqytL6IR3ltDcRg7gs0YcA+uD35P51HbaVp1md1pYWsB9YoVX+QrrhjWl792/wJcTltQtfEth4P0fT9DsrS5njto4LqO6AK7RGARyQDyCK5SbS/HIhkL+FPDSqFOSIIsgf99V6/ikKbhggEHrmsIYlx6IfKfPXgWz8R3Ol3LaNouk38Imw73saMyttHAyRxjFel6FF4lg0XV4dd03T7K3W2YwLZKqgsQ27IBPtXZ2mn2tjGY7S1gt0Y7isMYQE+uBUzxLIhRwrIwwysMgj0NXVxftG9F+olE+dfCOreDrPSkTxDZXE93DdvNEYowVKlEADcjPKk4/8Ar0kGvWF7rNhd+Ide1G/t7GTzI4RagZ5Bx97ABwM9eBivoSy0yx02Ew2Fnb2kRbeUgiWNS3AzgAc4A59qtbRWrxsbtqL18/y00DkZ4poOt2niP41xalYiQQSQsF81drcRYPGT6VJf+HrTxN8ZNd0y9MixPaxvviIDKQkJyCQR6jp3Nev/ANn2X237Z9kg+1Yx5/ljfjGPvdelImmWCag9+ljbLeuu17gRKJGHAwWxkjgfkKz+tpO8VbSw+Q8Rt/D8niHxB/wiml2NzYaHp1wZL15jmSR+m5j0yQMKBxjJre8b6dfeD/Etn4u0S3zAVW3uoFGFI4UA47EBR7FR616wsaIzsqKrOcsQMFjjGT68AD8KUgMMEAj3pPGNyTtp279w5ClaSyXFnDPLA9vJIgZoXI3ISOVOO46VNj3FWKTAPauXmHykFJU+xfSkMa0+YXKQ0VN5a+ppDGv96jmQcpFRmnlB/eFJgetO4rDenQmjc3940uB60EAUBYA7jvS+Y/saTI/u0ZHpRoGo7zW9BTvN9qjyPQUA+wpWQ7sl81fQ0vmKe9RZOKSjlQ7sn3A96Mj1qGlpWC5NSZFRA+lO3GlYdx+6k3H0pu80bj65/CiwXHZPtSZOetG4+1AfPY0AGW9aTB/vGn5z2NHHrRcBu2jafancY60Zx2P5UXCw3bRtpd3+yabvP92jUQu32o2+1N3t6Cje9PUNB2KXB96j3P60mX9TRYCTB9TS8jrUWGPUmk2n1osFybdj0/Ol3r6ioMUBaOULk29fUUb19ai24pdue1FkF2SF8fwmm+b7UgU9gaXa34UWQXYnmn0FJ5rHoBTsD0ox/u0aBqM3v60bn/vVJsWjaP8AIouhWZFlv7x/Okx7mpSPYH60EHsgxTuFiLFGKk+b+6KTc1O4rDMGjFP+f3pCG96LgJg0YNLhvejaaAEwRRg+1LtPpS7fUii47Bkj+L9aUOe5H5Um3PejbiloA8P9PwFLvFNC+1G32paDux272/WkLN6UbDRtPrS0DUCzD0pNzH/9VOCkd6XbQGpHuft/KkJY96k2D3o2indBZieWPWjy196fRSuyrDdi+lLgUtFIAooooAKKMj1pM/X8qAFopM8dDSbj/doAdRTct2FNZyq5YgCnYCSjAqo94B90Z96ge7lPOQPwzSA0cCk49ay2kfj943PvTDMFzmZc56lun1oEa/y+tHBPWstbjIz5pYDqUOak+0yLhicqenc/pTA0ce9GBVNLv+9kVYSZX6EUASYFGBRuB70ZHrSGLiiiigAooooAKKKKACiiigAooooAKKKOlABSYPr+lLUEt3FFkZ3N6CgCXDetJtb1qi9/I3C7UPow5rJ1HxNpunEre6tBA/8Add8Ej6U7i3Oj2n3o2VwkvxH8Kxgv/bSMBwQFckfhiltPiN4Yu32R62it/tpIg/8AHgKLsR3Oz2o2H0rItdWju499rcxXIz/yzcMPxNXUvm/iX/6/0FHMOxa2e1JspEuo3781MCD0NFwsRbPajZ7VLgelG0elO4rEOyjbUuwUu0UXCxFt9eKNq+5qTaBSbfxouFhnHvS8e9O2j3o2cd6LhYb8tHy/5FLs+tLs9qAE49RS8dv0NGz2/Wl2D0pXCwnX1FGOKUKBS4ouMbg56Zo59DUd1d29lA01zKscajJLHtXkviP45W1ncS22i6abgoSv2i4bCEg9lHJH4igD1/B9KQ/SvlfV/i54z1KRkTVDaRn+C2VUx+IG79a51/F3iNnLTa9qUpzyXvZG/QmgLH2Vk+n60oJ9a+NI/FOs78prGpITx/x8v/jW7p/xA8XWGGi8QXbAdriTzc/g4NAH1djPvRgf3a8F0f436vbOqavZW95EerwZSQfUfdP6V6r4f8daL4iRPstwUlYZ8mUYYf0P4GgDpdo9KNo9KRZFboQafwaVwE2j0FGB6ClooCwmKMUtFAWExRilooCwmKMUtJtFABijFG0UbfegBMCjApdtJimAce9BxRgjHFB+UZPAHegAoz9arTXsUQ7n+Vcl4j+Iml+H2VLq5Cu3zBFUscUAdtx6Ck49BXzdr3xt1W4uHTTZDFCD8pK8n/PFcldfEnxRcu7HVHGegVQP6UBY+vsr/k0uR6V8gQfE3xdAysmuXQI7Z4/LpXS6R8dfEtlsW+NvernkyRBWx9VxQFj6b+X0/SjI9q818PfGXw9rCqtzI1lNgZWRSVyffFeg217BdRLLBKkkbcqyNkH8aALVFMzmiiwXH0U3JoyaQx1FJk+lGfagLi0Umfajd7UALRTdx9KCx9KLCuOooooGFFFFABRRRQAUUUUAFFFVrm52fIn3u59KAHT3KxfKOX9PSqDytIQzMWB6Gmnk5NV7m8hsbaa5mdYo413OW6Ee1AE5YLkswAA556VyWt/EXQ9HMkSTm5uk48uFSefr0/WvOfGPxJvdTaSx0qR7S26GVcBmA7ZP+NcFFKZpDGpldieS3OT9etG2rCzeiO28QfFDXNTMkFiRaWxJ4RAXx7k5I/CuLk1PVNrBr65Geo8wmtnT/DF9fOpSLylPUnvXa6b4CtoFUzRLI2By2Sc8VnKskdEMO3uea2HibXNMffbXtwWGMZDNj8CMV3GkfGvVISsWowQTqDh2CbG9+4HrXUr4WsIhlbSPjttrA1vwXY3UZ8m2jR8EqyA5DY4z+P4VCrplPDeZ6LpHjjRdVigc3UduZwWjWWRc/jgnb0P3sfrXRRyK43RvjjIP976etfIt/bXmi3bwM8keBkN14r2T4WePDqaRaJqEpa6XLQSufvDBO3P0B61ummjllFxZ6/FflWCScE9PSr6urjINYzIsiYYZB5J9TUUN7JZTiGYko33W9aAOgoqOKUSqCCKkoAKKKKACiiigAooooAKKKKACmSSpEm5zgfzpJpkgjLv+A9ayJZnncu/4DsKAJZ715eFO1Dxj/GsDWvEdno8EhlkQMg+6SMms3xz4lXw3oMswV3mcbUVGwRnjP4ZzXznfa1qeuXzCWaedix2B3JZc/wCcUbCSud74q+LGoaiRDpLyWiD5WcAEnHoTyK82ur2+vZPMubqWaTrulYsf16fhXU6b4C1O7RZZdq7ugzkj3rcg+F0quPOlQ/iazdWJ0LDyPNtzCTOP+Ank0u8sMFjleck/pXp8/wAMXAJWSPA7c1gX3w91CAM8bJwMjtmhVYsHh5ox9G8TaxosomsNQnhIP3SQVP8AwE8fpXo/h/4y3SSpHrECzKeGnjwHX8BgV5jceHtQt3Ikhyy85BqlIGt22TqY2/vYzVqSexlKElufWej6/p2u26TWNykm5d20cMPr71qrcyQnqWTGfpXyhoPiW90DUobqzunDDj5ScMCMYIr6O8K+JLbxLo8V1ECjdHjHZu5/pTJsdhBdJOAVIqeudmElqTPDkqPvoP5itOx1GO6QEMDmgC/RRRQAUUUUAFFFFABRRRQAUUUUAFVZ7wICI8EjvTLi43Eoh+XufWud8Ua1FoOg3N9KV3KvyqTySeB/jQB5t8VvFkk11/Y1tMVCkNcPntj7v5kflXk0yhInLHGDhR7djUt1eSXV3JLKd8ssjSNnnqT/AI1XYmaRY41LueMVV7BYgt418ieaQZbbwKpScytjpnP+f89q9A0TwTqF3A7GNgkigcj1rJ1XwXfaVMFdW2kZRiPvH0/l+dK6LUXY5hV55zk9KuQ7kxu6HpURjdOHXaQcYNWIlJHJ/wAaEQT7Rjirmm6nc6XdJcWzkSI27aO/HWqaAoMHoKHUg+anVRzjr+H8qqwj6d8LeIF17RIb2FgJSoEq9g/cfmDXR218HYo/DjqDXzt8OvEZ0bXAsjgWt4AvPY5H/wBeve5Y1mjBVtrD7rDsaloDcBDDINLWFY6myTG3n+V19e/vW2rB1yKQx1FFFABRRRQAUUUUAFFFFABRRUNxOIVwOXPQUALNcJABu5J6AVlXl+qK8twxSFMmiR+d8hJ57dc/4V4v8XvGkiyjQLSVlZDmdkbAPYrxz/8AqoAi8bfFp54zZ6EzrkFZJXUD8uvvXkV7dXN/MZbiaSVz3dixrY0bw7fawTKinycYBOa6UfDaYj/WqG9Cp/nUOcUbKlJq6R5xsPSjYexr0VfhjdljmSPHsD/hV23+GMuQGkjI+hpe0RSoSZ5eIpOoQ0ogkI+6a9oi+GluI8Erx9atQ+AbCH78COR/nrSdRDWHkzwza6HPQjvmu48EfEW/8N3YjmlkltJCoZCc7cdxmur1H4f2MiMY4VVv4SB0rzPXNAuNHunjkA2E4U4x0qozTdiJ0ZRVz600jxDb6hbJcQyb4W6OB7f/AF63Y5VkXIIr5s+DviWWDUm0e6lLwS48lXOAGHb+X5V7kt09hICSTCTjP932qzG50tFV7a5WeMEEHNWKACiiigAooooAKKKKACiiigAooooAKKKKACiiigCG5n8mPI+8eBWXuyc5P1qS4l82Yt2HSosiiwmxdxryf4ueJmtli0i2lZUaMPNg44yfl/T9a9WxXzt8VLSd/HFykZLBwjZJ6UbDW9jlEjlvbqO3jBkVzwo6jjrXrHhTwLaWcaT3arNORkjBwPzrO8EeFY7GJLu5VDOwJGVB46d/8K9JtztRRnC44PXmuWpVu7I76VFRV2TwabBBGoSKNV9AuKnSBV6YA+lOjDEBg2f0p+1j1UZqbGpDNAhXt+ArFuoVDHI+Uela00ixjDsF9Pesu6uogy4IOTScQ0OG8W+HYtQszKY13p1IH868us5rrQ9WjuI5GSaBwylSR7Eflmvepo4poWUPlW+82ev1ryfxVpKxXErgBdhBO0Y44Oa1oy6GGIhdXR9FaLeNe6JY3b5LzW6OT77RmrNzAl1A0TjryD3B9RWJ4HYt4H0gsSSYDnJ6YYgfoK6DI9K6jgKOkak8M7WlwcSxnB9/f8a6dHDqCDXFeII2gEWoxcGM7Zcd1Pf8D/Ot/RL8XMC5Pb1pFGxRRRSAKKKKACiiigApCQASTgDrS1R1KfYgiHVuT9KAKVzcG4mz/AOFFRZyu/scimgUu3KNg8UCPB/jPqf2rxFDpw4WGPBI6knml+HnhmLy1v50VnI+QEZxzVLxrbHUPidfMQQquo6Z/gFeg+Fbf7Pp6oB0HU9+axrSsjqw0OrN6CBQvQdKsrAAOmOKSILtQ7h8w/KpAG7dK5UdtyMQqNwwOfUVBLbBs5xzVk7up5pJEYrkHHpkUwuYd5psTKdyAj0IrmdY8MwXdrKoijViD0QZrtZ/MVfmZcd+aoTKJdyrgsUJXpyc8/5/lTUmhNKR4DrOkyaRcmM5Mf0616n8DNVzPe6cWbIjMwGe25R/WsLx3ZhrdSFO7OSMdOcVH8F2MfjoqAf+PZw30yv/ANauym7o4Kq5HofRlY85bSb5ZkOLeU8jsrf4H/GtjFQ3dql5aSW78BxjPoexqjA1LK6W4iVgc5q3XD+H9Rkhna0n4ljYqw9xXaxuHQGgY+iiigAooooAKKKKACqt1NtHlr1PWrDsEQsegrLclyWPU8mgAPBArx741auUW1sEbO394/PPoB+tevs2F3HtXzR8T9R+2eL9QO75RIqIPooB/UU0COVtyfnkPJHf15xXb+B/Df264ju5RgZDDP51ydra+d9mtF5djlvxr6C8MaVDZ6dAqg7gij8cVEmb04p6s3rGzSGCNABgADpVTXPD8WrWLQyKc9UYDo2OK2IFHTpjirQ3MuV7VEUa3PmXxToUljqDeYpV+/HDc9RWAsRTGDX0l4u8JW+u2bgLifadjg4wa8H1fSbnRb1oLiIo69D/AHh61rEwqR6oyl6HNNc4OMU6Vv4xwo61XMwcYB5rRmKLFu/lthW+5gqfTmvo7wRrLa34egnlYecBsYD1FfM8cnzFSTnFetfCXVzFqF5YOw2OgeP8Cc/zFSB6rqVq08Xmw8Tx8p/te1T6JqguI1Un5h1qaucvy2la0k6ZENzycdn7/n1/OpA7wHIzRVLT7oXEKnPartAwooooAKKKKACiiigBksgijLnt29aymcyOWY8mp72XfLsHRf51WoEyG8nW2tJZzxsQkn0FfLN08mveIrm4kwDdXTyYznblif619J+K5TD4Xv3X7wj/AEyK+dvD9vv1IseMdPqTQ9Ey4K7SPWNE0+3sNPhgjTARRnA68f5/Oty2iTfkj8xWdZYdiOwIwPw/+v8A/rrWhXgY7158m2z1Y2SLSxKfT8qDbjIIx+VSJG2PSnYYCrsyboQQjbjC1BNCig+voKsEOR0xUEnygg0WYXKE6qEIGc9ya4Lx1ZJdaWN2BImfmx14r0C4ZQnXvXFeKY2l0/j17fT/AD+VOndSFU1hqeO2FzNpeqRXETMkkb7lbpg/5FfWdlOmoaZFKwDLKgz78V8pXtmyz7u3b619OeD3aTwhpbt95oASfxrrPLkrFqzu5NNvzaSsSh5jY9x/jXWQTLNGGFclrNq1xYmSMHzocunv6j8v1xVvw5qguYFG7JxTA6eigHIzRQAUUUUAFFFFABRRRQAUUUUAFFFFABUF3J5dux7ngVPVDUW5RM+poEUuCc0Ae9NzzQDVCYua8g8f2Qk8ewkg/PAjkY+9yw6/hXr9cH4wtc+LtOumBAMAhzjg/M5/qKiexpTV5ISPNrbgRgk4BVc9T/8Aqq7Y2t3KGLTEOTklV6D86b5J+zCTb8yn5SOoNZElrrl6jmG4WB/M3LtGQV965I2uem0dbCJbY5kud4weM56Gr/2keWTgYx1BrmNI0+9srd2nui8hUg/L71rBGNquXHIDc+4puWtieUjvXtRGJrwoEGcZ6jp+dY9xrWis3lRXNsW7AEZrXWzivdrSN+8jPy4IyPXj8BWYPCFja+aEUkOuGOeT1OPpzVJ3QuUijjjZRsHy5z6g/jXLeLdPBt3nfB+Xaw9fT+ldtY2YsYWjAby+wIrG12MS20qZ+UgkBRkilHRhUV0dP4IbPgrSsD/lmwOPZ2FdAvPWsDwzd20Gi2Fikv7xY87Twck5x9ea3s4rrTujzZKzGTwpcW8kL/ckUq30IrmvDN69tcvaSnDxOUYe4OP6V0+a4jUG+w+L5gOFlCyAZx1HP6g0CR6nE4eMGn1naVMJbZTz0rRpDCiiigAooooAKwrmUy3Lv2zgfStmd9kEjdwpxWDTEKBnFAOFIpKUgiMAdSMGgDxbV7YH4h6oO7yj/wBAXmuysk+x6eucEKM4J61zPi0nS/Gt5dGN3EuJEUA/MwQAfXkVe0Jby733GoiWVZiGEW3aI+MADj0rlqq7O+g/dNI6lclxJDblgRgKASRU1vqWrgL5kQAx3Bqy/wBitwAYQ3+xhif0NUk1LT7i8MNqrpOqtk8gJggY5+tNQ0L5jo7e5Mse6RRx0NJdXYiUEDkdM1RIa3iW4tbpvMlbKiVlK89sAA1lTSai+oiGd7EeYCC6BsH82pWY07lPULzWnuWNuqug7BSazTqN6J1N3E6kfKRsI9a6TUL1NPifdNGsfIUMhyzY7etZF7eRzytb74icDcrA5HGfrQ4W3Dm1sZutwi801goyOtZnwmsnh8fXB6BbNz9PnStmeKa009pI0SWIDlUyG5PqT71d+GNgE8Q6heKrYaEqCWGOSpx+hq6TsYYhKx6rRRSGtjjOR19Tp3iGC6ThbkAH/eXA/kRXaaRdC4tlOc5Fcr41h3aKk46wTK2fY5X+ZFW/Cd55luoJ/rQB2VFIDkUtAwooooAKKKKAKl6+FVPU5NUs8Gpbtt1w3txUIoEQ30vkWc8h4CIW/IV8n+KJvP1y4lznfM7Z9csa+ovEkvl+HdRfoRbyf+gmvlDVn3XCMe/JNNDNvQwJNctABz1LegxX0HYXEFvBuaQKowBk4Jr598LAHWYzk5EfBHrxXtdnpxld59SnDRLwsSnCqPUnism9TqprQ6ePWtMDhPtcW70Lc1pw31tIP3cin6c1xFxrng62mFs5iD4+Y+UzbQehJA6f4Vt23kIoaFWVR/DzkUwszoJJQF3FcoOSTXEeMdLt9dtGjNmZrjGI2U7SP5V1js32XczZGPu1mTSNGm+JFMjcKW6Ci4JPqfPuueFNX0P95NbN5JYfNkfL2wcGuTkl2sdoO33r2y51PXNY1a40u8jVbaMt5itEu3jJUhiM8/L3rjtR8DXF0JJLeAxNu4jxgH3FNSIlTvscGs/8VdX4U1U6drlhdbsDeocdsZrlbu0lsZpIJkKuuVOe2DV+xfCZUZxjqfu4zVLUxas7M+tbZxJChB7Vn+IrX7Xok20fvIh5qfUdf0yKh8M3ovNJgmzyVyQK2iFKlSMqRjHtQSYvhTUvNgVSfzrtAcgGvJ/D0pstWmtSQDFKyH14OK9StXDwqc9qBk9FFFABRRRQAU2R/LjZz2GadVa9bEGP7xxQBmliTknrQDSHiim9ib2MnxNH5vhu/Tg7o8dPcV4R4WtGmvlCqflAJyOhr6B1cb9JuEIJBWvF/BNsRc3DOv8Asj65/wD11FR+6dFFXaOtW5W1QSZYueqnpn1+vFO/t29iZStk7ntsB/WmSeRG5klKrEB0Y7T+tOTxfo9uAg3AMDh2XAOMdCRjvXIlqd7Nmx1yaY4mtfKwOhBFa63AYFto6Vz9lq9vfSeWkToSMr5iFT+vUe/1rYtxujOSMDOTmrvYnluQ3upXKIRBDGx9wayEutYnZvNttiH+NTVrVrsWCB9ud2MYrCl8YfY51t5LNmlbG1ectnmmp30BwtqaEk9xGNsvOeM1T1G1+02ojOc47HmnprtvqMzxGFoZY2wyMD19j3/Crs8JSMEkYNQ9yrXR5Bq1kscjqBwrHtjnpX0F4ehEHh6xiA4WIDFeK6ra+fq72yKxkkcYG09ya92sk8uyRcY2oDj8P/rV0xasedVi7k2eK5SylOleIJ7UZEe7cn+6eR/PH4V1ZII/XFcf4pH2bV7G6H8aFCfTaQf/AGatDO56TaSiWBT7VYrC0C5861TB7Vu0gCiiigAooooAYTz0NGTTS2DSbhVWJuPyaMn/ACabuo3CiwXH5PtRk0zdRuosFx+feszUD/pA56LWhuFZl8f9Iz/sihKwJkGaM4pmaM8Uxj84rl/EktrcldpPnW83GeOqj/GukyawNatEWXzwg3S5OR7Dr+lZVNjaglzakNr+9Xafu4q9EmxgEGcCs61OIwRxmtqJligLDAOOprkS1PRehVvG2FPNO0noB3pi7mHGeKq3rXODOAAzH5FfkVFFJq6QklYpWPdOFH4E5NLluw6E0d0sMxEx2Ln747VqLCGjEsL7lYfeJ61zUem3azNJd3LuWOSuBtX6Dr+db1kfJQBWyp7elWok3GXL7VKmue1BdwYH5VYEbvXit+/BY8VgagCrn0C5oe4ibQNNQapaTx+ZvxkljxwpHSu4HCAk5Jx/KuT8OEyyJjOUTOa6gN8wTPyiumnscWIl71h+a4jxdhPEFlIehhAP4Mf8a7MGuH8auDrdioHSLOce5/wqznR3nhuXfaJk9RXQVyfhRi1sv0rq88dvzoGLRzSZpc+4pAHNGT6UmaM0wK982LR/fH86xxWvfc2rYz2/nWQOKYC+lKz7ASQTjk7e/FJnpStnYeQv94DuKT2Bbnn/AIptVvtY0zUkiBMTMshPTGCBn862LNFKqigfLzlehz/9ajV0RIljVPl3HeO3+c0zSpBtAA27SMiuKerPUpxtEvtZeYQWA+pFQ/2Xb+cW2LuOckDHXrWqnzLnjNMciME9TjsKpXS3EZ9zZI1xAwY/IegrK1O3DalAy8Kjg/rW6jb58HABGee1Y+qBWvQI5R0/Olre5Sii49nDcRhmVWIzgnmsu60RXcyhAXJA/DjvWrpj/aYAVyfmwfap7nCrg8AelU5NqwuVJnJ31mTbvFuwd2OOwxR4Kvx4esJknTO+dmVyOduSAP5flUupS7ZDt5OfzpmmRfa32uhLbiFHbrmiEiZ01Lc9MDb1BH8QzQDkD6c0AYAA7DAoHQfSuk80yPFSh/DN+D2jz+RBrB8G3PQZ47VveKSB4Yv8n/ln/UVyvg3Pmr6YHb/PvTQHqsZ+QZNP69zUcAPljmpce9AtQyc4oyaXAowPSgYmT60ZNLj2oPSkBlS/65/qajJ4PvxT5T++f/eP86ZnPH5fWmCOc8czi28Kag7NtBjIB+uB/Wvl/UVBCEdQOa+ivird+R4OnQ9ZtgH4Oua+dbs5wB0oGdb8P7X7Tq+SMoY9vHXPH/169nutIkv4fIWULHnLbcjcPQ15N8OXjtdVUP8Axwkj65Fe6WLLsQ46r81Yy3Ounsc5L4Ls571bxwwkVFR4ohtjlVf4WAIBHsRjmuljtTDmRjy/UMOvvWnGq4zjmq164AGOKbGhVUfZWU8n19jVeOJJV2YGV6cZqeIE27YqrC/lzYPrQhsebBWYZRCAMHKA5PrioLmyjCqGAJA+9jkcGtfeGTIxWffvsB64xQCPE/ihokISO+ijQOGIbaMZyM5PvxXnumZELD+/7f59a9S+J84/sZAP4pQv/jpryuxyIVPvitInPWVpH0P8OrnzvDNqxOfLXGf71dseSWAxnnHpXmnwpuhJocsTH/Vzn/vnAr0st8xxTMjzqdzb+Mb1Rj/XbuvqAf616fpMm+2X6V5TqDh/Gd6wBwJQOfYYr0/RSPsi9elAjYz7UZpuP85pOnb9KLCuP3UZpm760bqLBcfn3qlqJx5Y+tWtxqjfnPlnnvRYdymTSjtTc0buW/Cn5CMzXNUfT4I40QMZm2nI6DB6/pXnHhmza2ur5XX70pOPTmu58RAvLGp6MMfpXPQosF9Igx8xzgfX/wCvXLVlrynpUaaSTNGTSY9RQGUKcdAc/wCTTT4btJLdUmtY5FGSCWI2/QZ/nWnp7g1osgOW9qzijdvUxDYQWe1oxmTGFLEnAqe3YMso3AKOoA71Fqc6GfaZkjVVyzMcD/PFGn3lnPaOyTr8nBIwQfxptagSpBFdZjkXfjpk9KYNHijcvwcnOWUE8eh61XhvYXaS5t7mNxGcEJg4+orZtpkuFUkYJ5xQtGTcojSbfJkZQzH+LGD+nFVL6HYnyHIHY9K6CXakZHpWHqbgo2PShocWcbHpgu/EKTYYCGNWzuOT1Pr7V3HhyS6VHhnbI/hJ54rA0tsXpfGMKAefXNdPpq/6c+3oOBVQbuZVYrlubJxyO+K5TxwALSyk/iExA/FT/hXVDpz1rlfHb402zTPW5Bx64B/xrqR5zNrwjMXt1Ge1dkOlcH4OP7len+ea7pTx1oEPopmeetGR70WC4+io9xoy3pRYLkZPJozTCTk/NSZ5rSxncfRTNxoLe1FguPopm4+tG4nvRYLj+tUNQ+WRWOemKt5PqaqXykxbvShrQE9Spnik3UwNgdaQHmszQeTg1R1hC1i77f8AVg49sirbNk02UGSNlYAhgV/SiSTiOm7SOasWJhA681rBtkG7ggetYltutb57NzyrZB+vNbUbDy2U5OR0FcT0Z6id0jNudUt4JD50q5OcA8/pSR6s0keYbeVowOWCgZP44qtf6BBcz+aVCyqc5zUwE6RBPPlK9NoYgU46sprQq3uvSWriOe1kXP3jjOPTNXdG1KO/RWi3BS2CGUiqxsDcnfLJIwJ5O85OOgNaVvDFbRgqqhR0wcHNW3YmyLV5g8Ada5vVnUE56kYP44FbV3dhSCT2rk7+dru/WIdJCqD25Bqd2Te0bnX+HbQw2aTHALpj9a2T6g4NVrZBBaxRAfcjUfjipt3tXVFWR51R80rsfnFed+Kp/tHioxj/AJYxrHx9Cf8A2au+aZUQsxwqgkk9hXlkczanrc10cnzZSw9hnj9P5VSRGx6j4XG21U4rqfMwK57QYfLtVzW2AavlRDkybzM9qdvHvUGKdSsguyXePWjd71HRSsO4lyN1u4znisethhlT9KyGXa5HoaGUmJTxyDnuKZT+1K1x9Tn9aUJb3CkcuowfxzWZpo+YgegP6AV0eq2zXNuwUZwpJ/Kub0z5Gw/UKVx75rjqRsz0aNS6sdDBJ8gpsv7wscuBgdOlQxkH8qr3lyICWZXIB+4neouatalaazzceaZphheCGPH4dDWPdaMfOW5+0Skkdd5H6DirrX+ozkvDbKsY6B+1ULi51Qv5jpEIR/Dk5/lVLYq2ht6SYrZFAYiMdcdzT9QnJUj1rGtbuS5iLCNoXU49mq9cMfLXcAO5xUisYl6DvLnGBzg1v+GIGmu1cDiNNxH5f41z1587hQMlmHBHU+9d/oOnzWFiY5tnmNzleuK1pxuYVqnKjXopM0V0HnHOeObjyPDEqZwZpEjHPvu/kprD8God6HjtTPiJfh7yz05G+4plcZ7nhf5H860PB8QUKxB9c1SQXseiwnEYyafvHqarLJ8opd57YquUnmLG4D1pdw9arb/pS7/pRyhzFjI9RRkY6iq+8/8A6qN/uaOUOYqXAC3D/WosjGeOBke1SXPMmahPQj1/SptYpanmHxkuf+JfZwjpuJxXhl6cRow7817B8YZB9tso+MeWWz+Yrx+9+WFT+FIs6TwncuJI7hVJ8r5Sc+vrXvGl3RYJg9FByG4Oa+ZdG1q40O5NzbbCxBUq4yMH/wDVXufgrWf7b0aKceX5i4WRVPRsfp3rKUTppTWx6RHcDZ97P41Uu3kZDIib+wBqCAkI2TwByaqza5a204gmlVT0CuQC309am5o1dk8eo31vCUktOo4O7P58UyNbx58ylArHOF7U6LUZJYnaPT7nAGf9UwyPy5qO4mv0tnm8gRoq7vmODjPpTWw7amkJynAOfaqV9O0gC4xngn8KpaNcXV1mW4gMCliE3HO4etWr8hFJOAB79aa3C1nc8f8Aivc7LeyjB275C2PYDH9RXB2GDbAnrurX+I+rJqPiSSKJg0VsxRSDkHPX9RWFaSBIQv45rVHFN3Z6v8JrsJd31szZBRSo7dD/APWr2YHPPrzXz38OLry/FtrGejkL1xk17hrl+NN0C7us4ZYyE/3jwP1NMhnnkE/2zxFc3CkESTsyn2JOP6V67ouBaLyOleO+HIzJdLjJx1xXsGnKy26DaelNIls18j1FGR3xVbDn1/Ol2t/ep2FcsACjFQYPdjTunc0rBclxVK/X92pHY1ZyfU1DcgtAwosO5mZFAGM+9NpaSKMbX87rd8Z+bHH0Ncisj/b235346+3+cV3GpwPPHHtjL7W3YHXoa5K+tpobuGSWBo967st6fn64rkqRfM3Y9KhOPJa5pWcpRgM8VsGbch5wMc1iwBRtyetaFwHWEbRkEdazizaW5kapY297uVjuVhtZSNyke49KrWuiWNtGiII4kYkMkRKqR7gYrMfVLue/Fqp+zpuwWZscd62E0oxQpI/iFF55Hk+o6fe5rWKbHYbb6PZ2twWtVhhi/jWJAm73OMZ7da6CAICpjODjFcpeNfWLkWt2lygJJG3bk/r/AJBrV0a9u71AJoih5B59KTVnqTJNI2rl2KkdfesW8JMZLe9bMoCwkkn8axr8gQn25pMXQytNjYyS45J4P4f5Ndjo6Hy3l/i3YJP0rF0bTZ2s/OVUfdjljg/yNdHZ2721tsZgWLZ+nGK0hFp6nPWqRcbJln1rh/H1xm50+1B5G6Rhn1IA/ka7ivLvEl3/AGh4rn2nKQkQr/wHr/48TXQjhZ2Xg4sIV5ruFc49K5TwvbhLdTXUgcdqqxm2Sb/ejdTQAKOKLBdjtxoyaTPbNGaB3GlTuPFJtpS7ZPzGm72zwTVak6DguTTgh9KZ5jdz+dJ5h9BRZhoP2euKXb7imeaPSk8wHv8ApSswuiTaPUUyWNXjIJ7Unme4NHmHH/1qLMLow5FKFlPUGowRjNWdQjIYPnAPU1SUjPBU++cVLVjRO6JQ2aTccyA8jgimMwDe1BO3g8gcg57UgRzniWIwXMN4hwGIBH4f/WpLXUw+184DDn+VZ1xqY8QXmo+VIF0/T1XEmMiVyyqcfTcR1P3arwqbcqrj5clcZz3zn8q5asbM9DDy5o+h1cFzFN0OTVoInB2iuWSItzDMFarUd1qIG3ETbeM7sZ/SojoatnQkxgc4UDrWFqOsRRbtvOOD9Ko3D6lMpUmJUHU78/0rNeBEYuzGVgOWIwB79aptMSuPuNReVTuPzEZFO8LR/wBoa2ZUAaO3Xc4PqcgfriqD2kkysNp3dl7ms/Vbmbws2k6mkjLI9w26Mf8ALSPGD+IO78qqnG7M60tD10H5cD8frSBueKoadqMWo2MN5Ed0U6hlIPT1z75zViWaKCN5HlQKgLMc/dA6kiuk4DG8Xal9j0gwI3765+RcHkL/ABH8uPxrnvDVi0twpxx1rO1G+l1zV2nwRH9yNfRR/nNd74U0sxxq+zrTRLZ19hCYoFUjt6VcpqIyqBT8N/eqiAopce4/Klwv/wCqi4WEooAUdj+dOwp7UihtZt0m2XPrWpj0IqteRM8RxjIpMaM7ilzTAc0tCZRIuDn8647Vo20/VnkxiOf5x6Djp9etdb6ZPGazPENqt1os4A+dfmU+nOMVjON0a0ZWlYzbe5DAEEEd8VeQow68nrXD219NZybZM9+1b9jq0bjORnHc1ypHpbGrNbNKuFkZQD/CetUns3U4MpK91PSpP7XiUkHjHqOv+cVTn1eJm+Uj6VViOdilBHkh8D07VmX1+I1YHBI7evtVfUNchiRuVzj1rlptSlvJisQJVicnHTj9e1FiubQ7HwvbNquvRuRmCEMz+xxwP1FekryNuACQWJxWB4Os0tvDNmNu2SQMZTnqdxxn8MVugk+46ZHNdMVZaHm1ZOUgzTJZ0t4XmkYLHGCzMegA5NPrg/H/AIgCR/2NbP8AO2DcEH7o6hfx6n/69aWuZHKXN5JrWu3F62f3r/KD2Xoo/LFel+G7bybZTjHHpXBeG9PaWdWwTz716lZRCGFRjGBW0ImMmXt5FHm1GSP/ANdITxWliLkvmilEnoagJ96TIzRyi5iyJKXzPequ7HQml3kdDRyBzsfO3y59Kg34U9+OKVpDggkfjVVJgGaMkZAyvuKzqQ0ua053djxn4szibxBBGCD5cQHHrk8V5nqIPkZweo/lXcfEWcTeMbpV/hxt/IZrjdRH+jAfhWKR0GL0z+Vdb4C8UHw7quyZh9knI357Hsa5RULPtqeKNs4XBPYGptcadnc+p9Ovba8iDwyKySAMCDkGpb6zhvI2TYC3UZIrw/wD4ourG6XT53aSAYI55HNe1afqsV9GpONxHQcVjLQ66cr6leG6uLYGMPJGADtAGcfn1psxnvnGTKSeGJXgjP0rdEMLgb1XI7d6VhDEMYUD1pmrn5FOACCMAnkfLz0FcN4+8WLpVi0cbq00hAC9SOvOPTjrXTa5q8VpDsiw0p+6B6eteE+MpZ7vUT5rljz+HNOO5hUelzlZmeSVpXbLuxLH3q5ar8uM9qrzrh4wPQE/XFXLUc59q1OW50HhSf7H4p0uYttVLgEk+5Fer+OtVErWulRNnaBLNg9yPlH5ZP4ivG7CORr+MJ1Rt+T0x3Ndzb+dqF80srF3dssx9aqKIk7HYeErRi6sQDzxxXpkDFIwBjpXJ+HbP7PAp7da6QSECtlAxcy753tR5vtVPzDR5hp8gucueYPejzAe9VPMNHmH1o5A5i1uB70jHcCMiq3mGlDntmlyBzlWQFXYU3PvTrpWH7zHA61EGyARjnpWUo2ZtBqSH78A8D1znmuf8WRn+zoJ15MMgYknnGDxW7mq9/ALyxmgOPnQis2ro1jJpo5ayuxLEpFa4kEsKoduGOd2a4a1upLKby2HzAHIPb8K27PVUIAOAelcT0Z6m8Ux19o8k0xlik2ODj5e9OjjvwQoAZRwSTzWxDPHNGpJB+hqcSbR8qjFVFNg5ozLfSTI4kmRy3+1yK0kQQgbNg/3RxUwnUJyoxWfd38acZGB70OLJ5rkk84yAzZwc4rB1G6Nw4hj/wCWhwP8/jTL3UgW2ryScYB6+1Hhy3+26ujuuQg8xj/eXI5/z604q5M3yq53lrCtvbxRjpGu0/5/Cng4A+lG7rSFq7LHmXKGt6oulaRPdEjeFxGPVj0/x/CvNtFtvtN4GbcxLZP1q54t1v8AtfU1trdt1rbnCkdHbuf6D6e9bPhPTTvVyOfWmkJs7zRrRIrVRyOK1Ci9maq8GI4wKk8yqsyLof5Y/vH8qTZ6MKaZPejzPenZiuhdjdmH50Yf2/Om+Z9aPM9zRZi0I3b5zz3pN1ROTvbjuaZvPqK1UTNyLBak3VB5nqRRvX+9T5Q5ifdRuxUG8f3v0o8xPc/jRyi5ictSbqh8xfTP40eaP7q0crDmHXC+ZGVPeuL8Sa1ceHrQ3H2RrhQcFl/hHqa7LzuP4fyqjqFul3CyOAQRg5HBHpScLlRnY8Ru/iNrt1IRE8NsnQbEO7165rKuPFmszxtHLqU7pIpDAnqD2re8V+CJLKaS505MxnJMXp9P8K4SXKsQwII6gjn8qycbG6aZ6j8NIxN4Q1yNVDTh9y89vlrZ03bdW0e4ASlQJB13c1k/Bm4CT6nFImYjFk++WUY/WurvtGOk6i7RK32eQ7kb69v5/lXNXg7XOzC1Em0VP7MBGVXB+tPFi6jq3HvW1aEPEMgZqYwL3HWuZJrc6XK5zUmnyNznp68n8KVdJMg+cEf7xrqBaoF3bfx9KikQu4CLvOcACqsK5iPYksiRKWmkIUccj6+3vXm3xZvI/wDhIbbTYDhLGEBiORvYbs5+jCva5vI0LTbjUp8F44mcMx4AA+7/AD/OvmK+uZ9d1e5unBaW4csOO3QfkBiuynDlRw1anM7G74V8Y3nh1GSKMS27nc8WeSc9j2712GqeKbjXbOKBLeS0hOC8bSbyT2BOBx/WuO0zR1hZZZMPN6Z4X/E+9dpoujPcyKSmQParaMLlvw7pLTSqzKea9U063W3hUY5ArL0nTFtIxlcGtkOAMCqUCHMtb/ajd7VX3+9J5n1p8ocxZ30b6r+YPU0eYPejlFzFjdRvqv5nvSeZ70cocxZ3ikLAgjFQeZ70eZRyhzGfeqbeQyqMqfvAUiOrqGUgqehq9KA6EHFYM/nabM0kQ8yE8tH/AFFS4di1M0hzVbUpE/s+ZWxggfzrnNU+IOh6TKIbh5BIeQhgkxj/AHsbT+BrHvPFN1qXhxNWjjdYJ7vYq4+4gYrz9cZ59aiS91msfiReksVnVWC/LjINZj6QSMwyMDn8a6iBYpbNWjOUOPx4qBotjZC4B7V5+zPVTONn0/VUHILjtxWbJFqIODG4/CvTCIjES4AI6cVgzxec52gYPAqriscTHpktxKpm3P8A4f5NbEWleRGHYHg/d7nPX8e9dJa6VxuYd+lWvsW+ZE6KCWZvRRyf61UU5MUpKKYnhbxI39sy+HL1o0lgjV7Z848xSgcqfcZ/TpXZAKSGBI3LkqPWvm/xdrjf8J5c3WnSBVt2VYmU4HCAGvQNN+JV7L4eiEtnt1PGwyN90j+9j1/Ln8q7OXQ8pv3rnX+KfE0WhWhjiKvfSA+XH2Uf3j7fzrzG1gn1C8MsrF3kbczMeWJ5zSxwXOp3bzzs8kshyzE8k13fh7w9GgVnQ9BVxRnJl7w/pq28KscZx1xXSA4Hr9BTorSONMAkfUU8xDsw/Kt00jB3ZEWOOhppduwH4mpjCfY/SkMXqKpNE2ZCSTRk9c1Ls9jRs5zTuFiHnuT+dGD35qbbRii4WINp6YqvdW7Ou5eGHQ1fxSFcjFF7j1R89+PNOu7PxIbm4QmOblJe2cYwfeuR1BQ0DnGec19K67ocGqWckM0QkRh9014d4r8JXejrM8StPbAZDAZZR7/41zSp8ux1Qqcy1OS0e3W5vJRLyqRFsdO4/wAaiQgPnpu6Uy3me3d2jONy7SfbIpYhvjXsVGKyRoaOkE2+qqV+XGMete2WURMCXEDbWJ52/wAq8b0iBru6JjGSoDN7D1r2/wANASWKIwAOc4NYVEzqovQuJd3yr03HJGelI82oyD58J+tbUUCjcp6+tSm2AU4AbI7ioWxo9zkJdOZ45JJBub1NeO+LR5eruvJxkA/jX0VPaJ9kfI47k9u1eC/EKwe01ETyKAsjHaB15NaQWpnUehxG0tuY9RjFaNhG0lz5SKWOQAKgsrC4vZ3igjyBwzn7q/jXbaXpENqPkBaRvvP3P+ArZI5G7CafYCIALy7ck+v+cV33hvRmcqx/PHNQaDonmSK5T36V6Vp1ulrCAAB9BW0UYyYWtpLGgCrVgQ3DHhCKsed70eaK05mZWRD5Ew6jH4UoiYHkn8ql87FHne9F5ByojCr7mnYUcYp/m564pN6nsv5UXYWEyPT9KXNISn90fhSZj7Aj6GgAf5gQRWRI5tJdr8RHo3Zf/rVrfL6tVe6t0njIPOfUUnFNFKVmV9wxuJ46DHXNQXt1FY2UtxK6qkSFmJ4H1rPkuJ9KYhlMsQ+638S+3PUV5R8QPHMuqr/ZVpFcWtujbpBMuGdun5c+1YONnqbqV9joLhJtSjt9cSLbb3o81FA6f7P15/SmJCxUZzuPpxWn8MdTttY8NSaXdOHa1KLjoQp3c/pV2/017CYxyJ7A54b6VzVaLXvI9ChXuuVmNHe3lrgABgfY1cTW5SMSKR9FqVYc4AHXg5+g9ak+wl+PfoBWHMb8qKM+tXLfKi8e4qqHuJjuc/L2GK1zp2znGD+FNWx8wkE5wecHp/n+tO41Ez47dp3CgfQ1Zvmn0bQ7jVLYlfsZV9rc7l5JU/8AfIrXitkhVQqlpH4UDnJqp8QwdL8BLbP81xcShXx1clTkV0YWCmzkxM7KyOk0XWrLXtPS8s5kZCPmXPzIfRh2P+Fc54w8TiFG0uxfMzDbcSL/AAf7I9/X0/l5b4aj1LSN863UkDSptMaHsR39+fwrpNO02W5mBKk9ya6ErnC2WdF017iZPlOO9eq6NZi1gUd6yNC0dbeNWKjOOa6ZMKMVqoGUpFoSHvS+b64/Kq+4ev6Uhenyk3LG8egpNy+h/OodxPTmgue5xRyhcmyv+1Rgf3j+VQeYvr+lJ5q+5z6mnysXMilLP+9cc8Me9M88elZ9xOBcy+u4/wA6j+0+/wBOa7VT0OR1Hc1fP+tHn/Wsr7T7mj7T9aPZh7Q1PP8Aal8+sv7UPek+1+5o9mHtDV8+jz/asr7UeeTSG6+tL2Y+dmt54x1FBnFZBuj7037Uc0ezDnLV7DHcRkEZrgfEPhK3u2LmIq/99eD/APXrszdEjvUcrrIDkD8al0ky41Wjj/h6YPC+r3Q1KbbbzRbVfYThtwPOM+lerXL2Gt6f/ot5DPt+YGKQNg+/pXB3mnRTfwr7dKwLnRmRi0eVYcj2+lc88O+h0Qrq9z0e3DwMRgq3Rge4rQBXGAOB0zXj5fWLYny7+8AB42ysR+X4VE2qa+h/5Ct0OccyMK5JYWR3QxkUtj2h3xGcDJqjJrGlaUN95f28L9dhcFh/wEc/pXjc9xq13xcahcSj0eZmFRRaaz4ySQenGKdPDNEVMUpbHWeOfG1tr2mPpOmiYQuw8yZht3AHOAP8a4qx01Yhsgi2g9cd/rW9aaDJJjETnPGFUnNdNp3hm54IspPXpj+ddKpPqcjqoxNL0RnYFlJBI/Gu502zS0QYwD9alttCvo8YhVB7sKvJo9zj55ol+mTVqMF1M3KT6EyXpQcPj8akGoN32n6io10hR9+6P/AVqVdNtV6u7fjij3A94Bfr3jH4HFKL2I9mH408W1mnSLP1Jp4MK/diQfhU6dEPXuRi5jb7rN+KmpRuYZXkUvnYHGB9OKQz4/8A10WYX8x3ly4ztwPrRtOeXA/OmebjocUvnsOjmlZjuhwCnq5P0FLlff8AE4qP7T6hT+FHnp3QfgcUWYXRJuXH3fzNRyqJFKkDB9qTzYjzhh+OaUSRn+P8xRyhdHJ6/wCGbfUImWWJZFOOGA/zmsSzWDR9Ak0O5sXe0yxWRTllJYtyD15/SvRiEcY3ofxqhd6THcg5UH6VEoplxqNM4zRdUihiFo86/KMKW4OB/WulbEgLAZzWPqHhZWOVTGfasSTRb+0/49pp4up+Ryv8q5Z4W+x3U8ZbdHUSQs64PFJDZncPk71yDjW0/wCX2644++ars+uP8j313j0EhA/nWf1aRr9dj2O8uJYbQAySJGp4yzBQPzrA1vxJYwadPbWVyJ7qZCvmRjKpn34BGPTNc4NFupmDP5jnoS3Jq9beGJXIJTtmt6dHlOariHM4200WJZjKUM0xOS7jPPsK6XT9DlnZfl4PTiuu0/wuqEFl7966a00yK3UYQVsoM53MxtG8PpCFZk5HNdTFEkSgAYApVAXAAp241oo2M3K47f8AWl3/AFpm40m6iwXH7qN9IAx6A/lTGdI+XkRR/tOBRoK5Ju+v50bz6mqj6nZRffu4uOykt/Kqr6/Yp91pXP8Asp/iapQb6C50a2/2B/Cjcp/gH8qwH8TQjPl2zn3Zx/Sq7+JLgnCQwr+Bb+dV7GXYXtInT/u+m1vwNARG6bh+FcfJr2oSA/v9vuqAVWk1C6l+/czHPHLmqWHl3J9qjt5EiUHfKij/AGjisHVLXTrgFWuoN3+9mueMm7kjJ96C+QQOc/8A16f1d9WL2y6HHeJPAOnXLPNaP5Up/ihXKt74/wAMVwVx4b1LTpGBi82Mchoz/SvZ5YklH3f0rJutKV87Rhj6VlLCdjWOJ7nPfCzSJX8RtNNADbgBWVh97J+6R+FevNoq6TIHhy9s/GcdK8sk025gk8yGSRX7Mjc+tO/tXxHAhRdXvQD2aZz/ADrCWHkdMMSkeuxN8qjOe4Y9cVY3fLn9T0rxFtY18nBv7s54yJjx096gkl1G8G26uriVDziWUt+hNYrDM2eKVj2K81/QtODtfalDxybeE+YzH3A6fjXlHjS+s/FmrRTRwyR20AKojYG73IH+NVIdOZyuQ2Tjt/n3rWs9KX5S3twR7Ct44d9jnniDJstPyBHFGETsFFddo+hAspkFWbK0t4ueCcdCa2YbqKNQAR7Y/H/69bxw76mDrI1LK1jto1GMGtATKO9YYvl9aeL0Yzn9av2diOc2vPFL5w9axhdjPB/Wnfax/eo5GHMbHnD+9S+b15FZAus9KUXPuKXIHMa3m0olHrWWLk+tOFx/nNHIHMafmDPWl81azRcfWlFx7/pRyhzGj5i+tHmCqAn6cinCY9iKXKHMSXMMc6EED8q4fxJ4PtNRQ+bCGI6ED5h+Ndr5v0pjkOMGk4XKU7HknhjTrnwf4gabz3eykXY6kcjkYPv3/OvVLnVNE1Sxw17CWPC7eXH4dQapXmlRT5O0c+1c7eeGRklV/wDrVDps0jU1vc1pdNmgbzEPnRHo4GMD3/xqWCNyOMZx0rkjZ6taDZBeXUad1WVgPxHSq7NriMdt7cjv98iuSph7yukdtPFpRSZ3LW2QSwAqpPc2liMzzRxhRkBmA3VxrprVzhZby6f2aRsflnFNi8OXUh5Bz6n/AD71Cw/dlvGdkdCPGGnWDmeGBry6/wCWZOVjT8+T+X41zup6tqniGUNeSlkViVjUYVSeuBWvZ+EncguuO9dPp/hSCHllzj1reMbaI5JTbd2cZpfh2SaQFh+Yx/nvXe6T4d8hQwUFv5Vt2lhDbKAqAY6VdDADA6VorrYyepXjtZEXAUDHvTvLYHkOf+A1Pvo8zHfFVzMnlRVJwPuN+NJvI4GBVvzv9qk8xT1Cn8Kal5C5fMqbie5IpKt7kP8AAv5UmIj/AAj8DT5vIXKVSCaMGrJSL0P50hjj7Mw/AGnzBY4y6Mgu5gB/G3T6moDMy9Qat3BY3cwUE/vD0Ge5pq287gbYXwfavWVrK55bbu9Sr9pGetAuuc5H51c/s24kxm3UfUgUh0Jz1ZU9w2f0ocqfcFzdimbjvmkNyBVsaAxOGulUdjtNSr4eiHW6Lf7vH86lzp9yve7GabkDufSk+1e/61rjRrKP76yt9TjNTJZacnS2Un3JNS6kehSUjANyOmc0omkcnajt9Aa6VPssf3LeJf8AgNSrdBR8qqv+6uKh1OyKUe7OaSG+kPyW0p/4DVlNK1SXGLUr/vECt77af7xppu6lzn2KUY9WZKeH9RcfO0KfVs1Mvhd2/wBbexj2VM1fN0fWj7V/nFQ3UZa5EUh4SscfvLuRv91QKcPCmkDlllfH95sfoKtfaj6n8qT7X71DhN9SlOK2I4vDmjxHK2aHHqc1cjsrGE5jtYV+i1W+1e/60n2o+v60vYt7j9sjTWVEGFUAewp5uSO/61jG5HqPzpDc/SmsOg9ua5uvf9aYbn3rKNx7037QfWqVEn2xq/afekNx/tVlG4PrTTce5/On7En2xreeOuTSef8AWso3HqfzNN+0jHBH51XsRe2Nbz/SkM9ZP2oeopDcjPUU/Yi9sa32geo/Ojz/AKVkfahnrTftX1p+wYe2Nf7R7ik+0f7QrJ+1fX9Kabv3/Wn7Bi9sbH2j3pPtHvWQbvuD+tIboev60ewF7Y1/tPv+lH2n3NZAuGYcAn6D/PtQZyo+Yqv+8wFP2IvbGt9qYcb2/OmNPv67W+ozWQb2FetxF+GT/KmHUrdejOx9lo+rX6C+sW6mqfJYfNCh/Gm+TZZ5hx9MGsk6qmeImP8AvNj+lMOqv/DFGPrk0/qd+g/rTXU6GNLDONxH1WrkUdueUeM/pXI/2lcMOJcf7qgVG15K33ppD/wI0vqL7j+ts7kbEBO+MAdywqCTUrKE/vLtAfRea4oSU8XLj+Mn260fUe7D62+iOqk8Qaev3Xlk/wB1MVXk8TRf8s7Rz/vv/hXPefn7yofqtHmRHrEB/unFV9TihfWpGw/iW5P3IIE/At/Oqz67qL5/0goPRFAqj+5P99fyNGyM9JR+INNYeK6C9u31JJL66l/1lxK31c1BuJ6mneSccOh+jUhhkH8LfhzVKnbYn2l+omaMmmkYPOaT0p8jDnHZNGcf/qpnPrRk9qORj5h+enrSbv8APpTCT7/5zRk+1LkHzDsnsKXJzUef8ik3Ucgcw/JNISfYCm7iaM0uQOYRkVuoFRG3Q9BipsmkzQ6Y+cqmxiP8CflSrZRKchUH0WrOaM0vZj9oyMW6inhFXoKXNIDRyC5xeMdjS4GaTNGafIHOOBI6Ej8acJZF6MaZn2oyKXIw5iYXMmP4fyp4vG7qPwJFQZ9qBn0o9mPnLa3q9MOPoalW9Qj/AFhH1FUcHrg/lQB7UvZoOdmmt2p/5aofrxUyzFuhRv8AdNZGCeMZp628jfdjP5YpOkh+0ZsCVx/Cfw5pwlPfI/Cs6KxujjaSo+pq5FYXIAJuGHtms3BLqNTfYnEvvTxJT47QqPnl3/VRVuLyo8Dykb3NZPTY0i2yqm5vuq35VOkEzfwkfXirqXUQ/wCWIH0apBdxY/jX8qzcpdjRJdyullKfvECpBYIfvtk1MJYT/wAtMfUGnbkI+WRD+OKzbkWlErHTbbuoP1qJtLtTnES/lV7aT0wfoc0FWHVSPwqdyyh/ZcGfuD8qkWxhQcKM1ZpMnpRyoXMxFijT7qgU8HHSmZGM0hPrVcqFzMk3UFz3JqLdxTS3NPlFzE2/3pN49ah3U3cfWnyi5ixvo8z61XzxSFqfKHMWPNpPMHrVff3pvmU+QXOWvMFHm5qp5opDL7UcgucnlcCR8YHzGojKPWq1xOBPJk87iKhNwM9fyrWNPQzlNXLZkOc5qMyAd6qmceuaYZ19ffrVqDM3MsmSoyxzUBuF9RTDcA9yfarUGS5os72HRiKY0rEc4P1FVjOD70hmFWoMhyJ947jH0NRtJj+Ij2IqMyj3phfgck1SgTclMx9jn0NJ557hvrUBIz1FM3DHDYP1q+REuTLH2ke1H2jp0/wqsZT3Ctn+8KZvjzzER7q3+NP2aE5sufaO2M/jQZznnGaokxn7szKf9tf8KTbIfuNG/srDP5U/ZoXtC8bg98UhnPr+lZ7tLHy8br9RUX2jNWqVw9oaZuOfvU03HXk1mmf/ADmmG496r2IvaGmbjnr+tNNwMVQV5H+4jH6Cg+aPvbUHq7AU/ZIl1UXjcD0ppuPpWc1xEv37uEfRt38qia/tV/5bSOf9lD/WqVFvoL2qNVrnHcUhuT2NYx1OH+CF292bH8qY2ptn5YI1+vJq1h32JdU2TdZ/io89j0DfkawjqNwRxIFH+yoqNrmVz80rH8atYZi9qzoDcMvU7fqcVE16gHMq+vrWFu7kk+lGcVX1ZdRe0ZsnUIv7zH6Cm/2iO0bH6tWUHI780Bz35p+wiLnZp/2jJ2RB+tIdQuT/AMtNv+6AKzhJS+YfXNP2Mewcxca5lc/NKzfU00N3qt5nvR5g70/ZoOYt7z2FHmGqglHrThKPWjkHzlrzTS+bVTzPel836UuQOYtiWl86qfm/Sl832FLkDmLYmGfal872NU/MpfN70cg+Yuedj2oE3eqYk9qPM9MfnS5A5i95wHQ0om/2hVHzKBJS9mHMXxP7g0ouOc7qz/MpfM7Z/Cl7ND5jSF04HDH86X7SO6qfwrM83nr+NKJOOCaXsUHMaYlQ9V/I0u+Ej+MfkazPNPrR5p7k0vYj5zT/AHR6Sj8Vp3k5xtdD9G/xrMEpz1oExpOiw5zSMEnZCR6jn+VMKMpwVI+oxVITsBkFh+NSLfTAYErY9M5peykPnJsDHUUmKaNRlJ+ZY2/3kpft0RHz2w/4C2Kn2cuw+cU0YoFzat1WZPpg07dat925x/voRS5PIOcZSVN5Qb7k0T+wcCg2s2M+Wx+gzStHuPnITRzUiwSuflRj9B0qZbGc/eAT/eIFJqK3YcxWpcE/Sry2KAjfcL/wEZqZba1Xr5j/AI4qXKJV2ZoWnrGW+6pP0Ga00MCfdgUehPNSC4IHHH0GKhy7IepnpY3DjIjIHqeKnXTJD9+RF/WrJnyeTn3NHnCocpMpIammw/xSs30HFTraWygfID/vGovOwKXzfxzUPmZSsWlSJRwiinghQMAD6VT84Y60olyetTyMpSSLvmGlEpqj5vHXNL52e/5UuQfOXvN9qUS+3NUfO96US+/60uQfOXvNHvSiUetURNz6/jS+bS9mPnLwkHY07zfUiqHm5pRN/nNLkHzmh5pp63Mi9GYfjWb5o9aUTYwAal0xqoagvZQPvk/Xmni8PcIfqtZXncfepfOPrUuiuxSqs1hdIeqL+BIo8+Fhkhh9CKyvPPrQJ/cUvYoftTWLRf3yPqKT5D0kXPvxWX9o+n50onPv+dL2TH7VGlsOOCD9DTdrelURcH3p32o+p/Cj2bDnTLLZ9D+VRsx71H9sb+8aX7X64P1FPlkuguZAWJpC2BTvtEZHMafgMU1nt25KkfRqevYTfmMMgFNMvpTytu3R3H1FMMSH7s6/iDVKxLbP/9k="

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,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"

/***/ },
/* 85 */
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAGQAyADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD208E/WkNOZeT9aCKgsaOex6UuPrTsEdDSc560AMoHWlI5pMc0DEOMde9BwRSjpSY4xQAgzxQ2cYHp3pduKTGCOlADhnrnilB9abjC0ueOhoAcWAb1FMbn86UDnPvSYIHFAAeScA9KOcUvQ45/OmjoOe9AARyPWmhafg5/+tSYxQBHtPqOvpSEe3apPunGaTaDwT2NAERHGc9aNv7w8fhS7dpIp3G8ECkAxFOOnTvUvbOOaVPuH03UFiBgD2/CmDGH7o60pJAOBkUpJKqvHWnBeKQDFy3b0708Z9s0ALxnB4p2PQcelACd8ng+tMYkJ+IqXGVxikkT5OlNgGMHA6UhHQZ96djilCYOfagQ3b82Md6eqnngf4UBeR0/OnAD1oAaRxnFH8XIpcDnmk+nNACA+ozRn5847UuPrS9/woGBPSgHvSgZzSe1AhG4PFOHWmnrzRQA/wB/akI9McUc9DR0/OgBpOR1po/HripccdajTkfjQAuOKBml5NGT60AHOB3xS/3aTPAwaXPAz1oAXv0oxjP1o5pT/WgBMe1LxzQOuDQOlMBQRQAPekB56UvQfWgQ44P5Uzv1p2Ofwpp4HSgBe1GKQ8Cl/ix70ALx79aU0g5paADkd6SjmgdaAAD0pRQOtVtQv4tNsZLqbPlp2HUn0pNpK7BK7sitrWsLpNorgB53O2KPOPxrz25uJLiZ5pn3SSEsx6ZP9Km1DUptUvGuZgF42og6KvpVFq8PE4h1ZabHrYeh7OOu4u6pFbFQCpY1zXMdDNGFrWOwaR2L3TttjQdEA/iPvTC5fljnsM1Eg9OvSr+laa+qXfkI21VGZHA+6P8AGtUnNqMUYtqKbZf8O6Wt9dG5mXMMJwARwzV2o9PwqG2t47S2jghXCRgBc0s2+SJ44mAfoc9VzXtUKSowt1PLq1HUlfoOV0kzscNtOGx2NPz7VFbwpbxLHGMKP19zUma3V7ambEXfuYMoUZ+X6U7FJ3PpS4piCjtRRnFAB2qO4uorWBppmCqBn61FfX9vp9u09w2ABwO7H0ArjLvV31KUPKQFB+RB0H/164cXjqdD3X8TOihh5VdehZ1HUZdQmOSUgH3Ix0+pqn9aTcCMZFP4PQ15Dqe0fM3c9BR5VZIT8adijb7UuOKYCdKXrTT1pRTASloPWlFIBuMmkOAKcaac0wEBFIaQilFIY0mm/jSkGm4pgNeoTU7DioXpDK8g4pbEf8TG2/66r/6EKV+aSzP/ABMrb/rqv/oQpL4kV0Z6Qc5NAPFKR8zUcYPrX0Z4oZ5o4zSnGKbxnNABwc57UZ56UACkwM0AGeKRicnB704jjiqN9qdrYsBPJtZugAyamdSFNc03ZFwhKbtFXZbOeeaGGexrK/4SPT/+ej/98Uv/AAkenf8APR/++aw+u4b+dfea/Va/8j+41dx54FL0I/lUFrcxXluJ4SShzyRirA5P4966IyUkpLYxaadmNGelDj5etLjB6frVcX9nJdvZLd27XaDLwCQF1HqV69x+YpkljjNIMcHFLgc9KMgLnoPegBOvalOO9VLLVdP1O2a5sLyC5gQkNJFIGUEdckUtjqVjqtubjT7yC6hDbS8LhhnuMj8KALO0H8qTyxnvTztUEs2ABnJ6VUttV029tWurXULWe3U7WmimVkB9CwOKAJzGpOcUbRk44FV/7T0/tfWv/f5f8afDeW1w7JDcwysBuIjcMQPXAoAlxtHrzQy8cZpHkSMKXkVQx43HGfzqCXULOC7htJry3juZ+YoXlUPJ67VJyfwoAmA5zmncBaYkiFyqupZeoz0p3fB5oGOAA4PvTgOODTQcDkUoOBQA7GeKbJ93FLuJb05pMjvxQAdzS4+SgAdcn8qXI6daAAHBGf5UqmlUjIxgYpCMUCF7Hmk4x0Bo49OaPwoABS8k/hRmjPP4UAAGMc9qUcmk7CnUAMx81A7Uv8VL2oATJz+NKOf/ANVJR0BoAdnmmr0OOOTSngZpARyPegBaQ0vOKXHJoATj9KOnvSHPXFGDmgByk0CkC0qj1oAUCl59KOh4oP1pgAHNGDxmlox15oEHakNL3oPSgBBRSA5oHWgYvSlFN6n8KUcd6BC9PWkJ2qTgnAzgd6bJNFCm6aVY1yFyxwMnoKTdKs53hFtlXO8nnd3/AApXQ7DWuUiszdTqYVVdzB+q153rGuXGsT5JMdqp/dxj+Z9TWj4n11dQkFnayE26cuwP+sP+Fc8FrycZiOd8kXp+Z6WFocq55b/kKASBQy81Mg4HFDgDmuE6iACp41qLoakWQCkNly2t5LqdIIVzI/AA/nXf6dp0Wm2ghjwzdXfHLGsnwtpzQ27XtxGVlk4jz1C+tdEAMYr2cHQ5Y873Z5WJq8z5VsgpoUBiwUAnqfWl7UtdpzCB0YkKwJBwcHoaWmARRkhQqs5zjoWP9afQmAuPaiik7UxB2/nWH4h8Rw6JCI1Aku3Hypnp/tGpde16DQLDzH+ed+IYs8sfU+1eUTXM13cyXFxIXlkYlmNeXmOO9hHkh8T/AAPSwOC9s+efw/mac+p3F3L5tzK0snYk8D2ApEmGc1mBqlVzXyU5yvds9z2SSsjUWZv71SpdyDrWarE96mVzWftWiHTRrxXgP3qspMrDrWOrZ7VNGSDnPFbQx0onPKimam0etOCYIqkkrjvmrC3PSu2njYS3MJUmtiQijHNIJg2DTwVPeuuNSEtmZtNbjTTScCpNuc1GwrQRGTSbs0rLnpSYxSKEJpKcRkUgHNADe1RMvrUx4pj4IpjKklNswP7Rtuf+Wq/+hCnzYxxS2I/4mFt/11X/ANCFJfEiujPRSPmJpQBnn0oJ+Y/WjnNfRHjC4NNx7Up4o3c0CE6HgVh6/wCK9L8NPAuotKDMGK+Wm7pj/GtwnPevKPjHnztK5/hk/mtdOEpRq1lCWzMMVVlSpOcdzr9N8b6dr8r2mkCSW6VC4EqbBgEDr+NVptC1W4maWVQ0jHJJeuF+Ev8AyNU+ef8ARW/9CWva8Vy5tllKdXkbdl5/8A3yzMKipcySu/67nF/8I7qP/PNf++qz7q2ls5zDMMOADgHNeh4FcV4i/wCQzLjgbV/kK+bzHL6OHpKcL3v1PdwWNqV6jjO2x0Xh7P8AY0Xfluv1rU/Csvw9/wAgeL6t/OtTJr3cH/u8PRfkeTif40/VnkqQ+J/FnxD8SWa+JtR0my05o1gFsoCsCD9B26+9c14Z8L3Pirxxqt5p3iTV82H7g6z8uZT02gDk8Z5z2HqK2viz4LtNP0HUNfsE1Sa+mnDPtuXMcQY8tt9O1c9Y6X8MbPwQuqHWr6e5jjAktoroxySTEdBH9fwwOvFdRznS61a+KPBvirwx5finU9Vgv75YbiOdcqqFlBzj/ePX0rqfit4o/wCEZ8EXZh3fbLxfIhK5O3PDNntgfqRXI/Dj4Y/atJg1rX5tQiuZJhPbW4uHXy0ByA49+vPauw+LeP8AhVutk8ny4/8A0YlIDzbT7e88JaNp9nZeJddjhubZbvbp+lLNEC4yfnIyefX2qnozv4ehlh0nXvFtrFNIZJETRMgtxzyeOlXry/tmtfDun2934skvv7Ht3a00Qgqq7eCVwTn/AOtVaT7VBC80sXxQjijUs7sgCqB1JO3gUxHsPhi6ubXwYNQvr2+1Nij3G6e2Ec2zH3Ng4zwfzrg/BGn+EtdfxWYFv7bRyyyX2m36LFHC3J3Aqcrja2enB9q7/wAC6hZ6p4M026sbm7uYNm0S3uDKWBOd5HBOc15zppPl/GTPZZvfH7ubFIZl/EHwb4T0+78IPollELXUdQWOV4pWdZYyycZJPqa9a0HwN4c8M3r3mj6cltPIhiZw7Nlcgkcn2FeNa5A9z4A+GNukzQNLchFkj+9GSyjcPcV7J4Y8M3+gzXEl54k1HWBMqqou2BEeM8j65H5UMEcb8VItQ15H0W306xmhiKSpdtqMcMsUnf5TzjB/WuD03XfEmq+PINQa0sru90G1Np+9vUVGc7l8wsThjySceldV8TdMsdW1abT9C8JSX+v3eBPqLROI4QABneTtLYH0H14ritG0VluZ/CR8B2eo6xbxM1zcnUDuTPfcPlUjI49u9MGdp8PU1rw7rNw15YWMsmp3O+8v31SJ5FHso6/Mc17I3Havmv4cQ6XY67caR4j8LtdPbXOwX0UTSG2kB4V9vGOOtfSvDcg8UmNClcjr0o284zzSY60/09qQCCkbgetAHalY/LxjtQMM5PcUKpyBmlOQT60AeoxQId0H40uCR1pn496cT+tACheaKQNRkZoAKTPzE+1OyKTp2oAAeaUEGkPHal9BigABGT9KO9JS9DQAnOaOtGaXpQAc0DrR2pMfLQAZAXp1pc0AfKKME5/pQAY560d+vWgjgUduvNADxSd6Bx+dL36UwDHNN6DjinfjSHkUAA5xxSk9aTAz0pcH0oABzS4INA7etJ360CDFHf8AGl6ikxQAnSnUgGQM0oFAFW5sbe8eNrlQ6RcqjH5QfU+49a5DxH4iW/JsbJz9mBxLIP8Alp7D2qbxN4nVRLp1gwYn5ZpuuAf4RXKQ9AMe34V5WLxKu4Q+Z6OGoOynP5EoAAoFO4pK847SZDxS7d7baiaRY48k81DDcZfcTXJicR7NWjuaU6TlqW57R4RuGSK0vDmiy6hfpcSJi0ibLE/xHsBTba5jlTZJg56V3OnRxwWMNuhUGNOVB6V2ZXKOJl73Q48VUlTjZbstHn+dL0pM8DNL/SvpjyAooFHfHNAxnkxtKJCoLjoT2+lPpvmKGClgGPQZ5NRSXlvFcxW8kqrPNkxxk8tjrS0QJNk4Haqmo6naaVZtc3kojjX16k+gHrTNV1e00axe7vJNqDhR/Ex9AK8l17Xp/EF+J5AUgTiGHP3Pc+9cmLxcaEdNztweCliJXekRuq6pcazqEl5cMTkkRr/cX0FVlqJRUy18nWnKbcpbs+njGMUorZD1FSrUa1KtccgZIoqdVqJRVhBxWMmZsegNTqKYgqwoFYSZjJipkVKOe1CrUirmojNp6GTYBfwp+1scU4R1IqYrrhUaMmyEGVafuY9RU4XIp4QEdK7qWImupnK3YqgbulNIq+kIGakNqrDpXfTrOW6Mm0jKJ9KQ8CrV5a+QoIqjv9a6QTTFbpULNT85NRvSKI25FOsv+Qhbf9dV/wDQhTG6U+y/5CFv/wBdV/8AQhRHdDezPRMfMaBSE/MfxpQ3b2r6I8cT9aTHenbuOtH8qAG4ryn4x/67Sv8Adk/mter9q8o+Mf8ArtK/3ZP5rXdl3+8R+f5HFj/4Evl+ZmfCPnxXcf8AXq//AKEte14461816B4hvfDd815YiIzNGYz5q7hjIPT8BXR/8LX8SY/5cv8Avyf8a7sbgqtarzxtY4sJjKdGlyyvc9w71x+tW0t14gaGFCzsF4/DrXAf8LY8Sell/wB+T/jXpPgfU5tc0H+1rtIhdSu6u0a7RheBXh5nlNWdKKm0ldfkz2MBmdNVHyJ3t/kbenWn2CySDcWKjJb3PWrdGM0u2phBQiox2RcpOUnJ7s5DxNe+NWElv4d0fTwPui6uroHj2QD8eT+FcJbfAtry3nvtW1sprk0nmh7SJRFE3X7vGefTHtXU6Zq2uah428Q2yy3bW1lMYoMLF9njJiyvmH/WH5sfd455xWZbat4tn8Kahbpd3UniGxuYzfwNFHvSLBJ8g42tkcjOelWQa3h0/EPSbgWetQ2GrWgIVbyOfypcdiQRhvp1962PHmi3fiTwRqWkWJiFzcoixmVtq5DhuT9BXM6d4k1DWPFOmQaff6ld6Y9hDctJDFCpYlypaXcBgcc7eeKow+Ptagt2tdSISe61IJp92qfLLELkJJGe24DJ+h9RmgZDH4E8YaH4g0vWtFOlz3MOlR2U0d1IwCsqgHGBkjgc1q36fFXUdNubKSz8OqlzC0TETSZ2sCMgevNXdA1DWdfsb3X5dZe3SCaeNdOjiTZGE3ABywJ3cbs5q78OdQ1PVfDqX2qS3sklxGjqbgRBD15jCc46feoEWvh/4buPCng2y0m7ljkuItzSGPO0FmJwCfTNcTd+CfGlvrXiuPTH0ptL8QO4lknZt8asrDgY4I3nv2pdQ8T+ItI0nxJFqGoTx67bGOWCJYY/J8h51QSRHHPytg7j1rcfUtauNa0bw59uvNNa4tZrqW6ukhNw+1wBGu3MYODngHgUAcVN8P8A4izaboFgyaL5WhSiW2YTOCxBBG449u2K9D8Ov8QG1hf+Ejg0ZbDY25rVmMm7GB17Zqrca1qem6h4nsZdSaY6dosdzBJJGqsZCJMvgAd1QVza+NPEB8W2Fkl9IFmksU2PCggYSRFn3N1DcEgA8mgDtfF8ni+aD7H4YtLNDJw9/cTDMXY7Ux1HXJ/I1iad4Q1rwTogfw4lnqms3UgfULm+ZlMmQfukHIAJ6fjWdLrfiC50LRNRXXLmGW91s6bIqRxEeX50igjKn5gFA9OOlLq3iPX7S/u9Ngv7qYxavbWSvFHF5zxtFubG4BdxPPOKANv4deFdX8Pvrmoa2bdbvVboTtFAxZU6nqev3v0ruO/4dK4HUNT1rS/EmiNfXt3b6LPHHAWEcTObkn7s+AcBhxlMDNd8OcUDQoI2npQvvScAnHNLgdeenrSGKByeaR+FNAHOc0pOV7UCF5NGOME800Zz+NO9aAEx0pxHTrTTnH404c96AE29aUcflSZpfegAz16UHGetJ3oA+brigBwHGc0vHzc9KaAD3p2Bg89aAG9zQOc5FHAbr2o6E9KAAUDHXNKBSE4GetAC8YFICP50vFNyM8YHJoAUHtkYz6U4jrzTc9frSZA70AOPX8aVeucUgGKXgDrQAoIziimg8Gl7UAO4z1o6jrTVbJoDe3NMB3ejPNAOTzS+tACdwKOpox/Ol7daBCDrQDg0DtQBx70AAZSWwc7Tg+xrm/FfiH+zYvsVqQbuVeSP+WS/41o65rMOiWDStgzvkQp/eb1rzEtNdXElxcOXmlYs7Hua4cXieRckd2duEw/O+eWyGpHwABx71ZjXFCJipQMCvHPSbGt1pCQqlj0FP9zWbe3OWKL0rOpPlXmVTg5MbcXBkcjsKakmKrA5NPAxXFKCe52aLRGhDclCOe9bujatJDex7Ztm9gGJ+auWU1paVcw296k04dliO5VUgFiOmfas4U+WopJ21MqsFKD0uevH2GSOnvRz+J61l6PqqalYieR445M4ZM/dq891BHCJmlXZ6g5zX2sK9OcFUT03PmpU5Rlytak461m6hrVrY2+/zFlc8JGjdTWLrHiGZ4/ItUaJW4Zz1x6A9q50KFBOO2a5K2PW1LXzOilhb6zJ9R8U6hHci5R40kAKqu3IUGpPD2u29va3et6pefaLwfIdwAaNR/Ao9+9chqtxuuCueKzs/Nnv615kMVUjLmbuezHBwnDl2v8Al2NHV9Wuta1GS7uHbBJ8uPPEa9gP61VWohn8e9SrXJVk5O73PRjFRSitkSrUq8VCtSrXLMGSjrUq1EKkWuWRJOlTqagTpUymsJGbLSVYSqqdKsoawmjGRYWp0FV0qwh6VnHcxkToKlCio0qZeRXXAwkKFFPC0CpFArrgjNsVV5qxGmaiUVbiAr1cMtTCbMXXJgihe9YHmlm61p+Ism4VRWPCjE81vJ6m9Je6WkbuaCaVU4pdmDQURlPepLFf9Pt/+uq/zFIeBT7L/j+t/wDrqv8AMU47oT2Z3p6nigfpSHqTRnivoTyBxGOMUh6UdTyaMnFAB3/CuW8X+C18WvaM18bb7OGHEQfdnHuPSuqHSgVdOpKnLmi9SKlONSPLLY8u/wCFNxf9Bx//AAFH/wAVS/8ACmov+g4//gN/9lXqOM/lScdc11f2hif5vwRzfUcP/L+LPLv+FNRf9Bx//Ab/AOyruPDPh8eGtFTTluftAV2fzNmzOTnpk1tUnPrWVXFVaseWbujSnhqVN80FZinOMZowM9aTrR3rnOgxZvCmhSajLqD6bC11MT5khz8+V28jODxxUI8FeHFsXsl0mAQSSiVgM5LgFQc5zwDj/OK3zyB9aX/GgRhv4Q0Bp7ab+y4FktkWOJlBXYoOQBg9AfWrL6DpT2sVs9hC0EU32iNCudsm4tuHodxJrTyaKAMZvCegy6odTbS7cXhJYyqMEkjBJA4JIPU81PpPh7SdDSRdMsktlkADKpOMDpwTx1P51qCk5xigDBXwX4cSC7hXSLcR3YUTqQfnCtuUdeADg4HpTpvCOgT6fHYy6ZC9tG5kRGzlGPUhs5H51u8c0hFAGDc+DPDl4tstxpFtILWMRRZU8IOgPqPY5qzP4d0i5klkn0+B2leN3OOWaP7h/wCA9sVqd6CP50AZn/CP6Stvb2wsYhBb3JuoUx9yXJbf9ckn8ajvPC+iagZjdafFKZplnkLZyzqNobg9QOK1iOhyKKAMVfCegrd211/ZkJmttvksxJ2bc7TjOCRngnketbOecdqQjmgfjQADJJzS9utBzkmhclSOBgZoGLjjrR+WM0hztFBBORmgB3fPvQTSYIz+tKBQAHI7g0o4pGHT60uKBBgY6UnHTFKelJjmgBTxwDg0c5OaQHqe9Ln3oABzzSjBFN4AyCeaAwoAVsbuMdBS5GRTepz7UnY0AO4oPtSYpRwKADdxSZPejnNJjJ60AGRxS8EUY+btS9M8UAKAQDRknntijHB70E8fjigA9eO1HcUoPBzSd6ADp+dJjFL3/Wg0AOXr060D6mgDnr2zR3oAXPNGeKKOxFMBGfB2hgGYfKPWq91ex6bp7XN5INsY+Ygfeb0FSzvDbxNPKVRY1yXPVR9a841vWpdYnAAZLWP/AFcWevufeubEYhUl5s3oUXVfkZ9/fXGqX8l1cMSzE7Vzwi9gPpUkMWRmqa8v/OtOAfJXiNtu73PXdkrINoHSgj0p5XrVe5uVt4if4j0qJNRV2KKcnZFe+uREmxTyetY2d75p8sjSyEk8mkVQK5m7vmZ2xShGyHqMU8CkFO7dazYhOlIJgpAyBiql3diLKqcmsx7kseTWsKDmtTaEG9zrba+K4Ib8jV6PVGyBu4FcXbXbIwPOPStqJyec1y1cJyMmpSS3Oshv4549koyPeor21cW7Pa/vAByvesJJiDxWpZ3rq4547VMKk6WhySpW1RyU7Fpm3AhvQ1HkZ4rvrzQbbXFG3EN0ejjjP1rjdT0m90a7NvexFT1R+zj2NdtOXPG6OuhWhN8vXsV1qVaiXkVMtRI6WPFSL1qMU8dawkQydelOHFRr0qQDmueSJJkPFTKaripVNc8kQy2h4qdDVVDVhTWEkZSLaHip0PSqiGrCdRWSWpjJFxDUyGqsZqwp4renIwkicEYoZ6aKkCg9a7IaoyY6NjV6DJ61WjRRVuIgV6mFi09TCbMHWY99yOOlZnlBTWvqfFxzWacZ611y3NYfCIq0rAClBApjsKRZE3enWf8Ax/wf9dV/mKax5p1l/wAf9v8A9dV/9CFC+JD6HfMRuP1oxjHoaGHJor6I8cTtSkcdaSlPSgBT0oHSg9DXKav47s9I10aU9pNNJhRuiIPzN0GKTko7jUW9jrPWk7DpXGeO/FN/4b/s/wCxJEftAk3+Yufu7f8A4o10uiXcuoaFY3kwHmXECO20cZZaSmnLlBxaXMXqM80fga4Wf4iRWfiibT72zkhtEYIJWBDhv7xH92iUlHcIxctjuv8APNFcRrHxHtNJ1F7RbJ51VQyypIu1gQCCOPes1/i1F/BpDn6zj/4mpdaCdmylSm9bHo/8PUfnTq87034k3Oo6ra2g0gRxzSKhcylto9fuiu6utTsLFgl5e21uzDKiaVUJH4mqjOMldClBx0Zbo4rLbxDo2xtusacGwQublD/WuG0b4kXs/iKG01E2cNmzsjSIcAcHB3ZxjOOaUqkY2BQk72PTun5UVlnxDov/AEGNP/8AApP8auW13bXsZltJ4Z4wcF4nDgH6irumTYnJpCewyfwoFY/ijVJ9I8O3V9ahDNEFIDjI+8O340N2VwSu7I2MkDpS9+lcDpvjbVLjwfeau1klxPBL5e2IbVVdo+Zh3610PhXxGviXSftPkmKVDtlHVd3+ye4qI1FJ2RUoNG0/b60vvXFap8SLHTNRuLGaxuTLBIVPIAOPqaot8WbHHGmXGfeRQKXtYLqNUpPoehN096BnPSvOW+LUH/LPSJCe2Zh/hUul/Ew6nq1rZtpawxTSCMy+buxnpxtxR7aD6h7KfVHoeDg+3WjGPT8q5Pxb41Pha7t7caeLjzY9+4y7CPb7prnv+FuvjH9iLj/r5/8AsaHVgnZsFTk1dI9MxnGO1HrmuL8O/EOHWri4W7tY7GGCLzDK8+4ckADlR3NWvFfis6d4ei1LR5re4DXAiLEbx0OR+gp+0i1zIXJK9jq8mlzWL4V1SfWfDdpqFyEE0u7cEGAMOw/kBW1+NUmmrolqzsxGPT607Oa858YeNdY0DXzZxR23kFVkjYqSzKeDzn2NehW8yXFtFPGdyyIHU+oIzSjNSbS6DcWkmx+PfvSHpjvTu1cP4z8V6jomt2FjYeSRMmWWRM8lsCiUlFXYRi5OyO1/iwaUCsrxBrsfh3STfzwvKA6oVjYDk/WuS/4W1Ycf8S25/wC+1pSqRi7NjVOUtUj0MAgjmm4Pp3rjdF+I1prWrW+nxWM0bzEgOzKQOM/0qTxL43fw7qZsxpclwojEhkV9o+n3TR7WNr3Dklex1x9qDxjmvNh8V9xXGiOSw+XE/XnH932Naep+O3h8Hx6pHB9nvLiQpDDId2MHBY5xnikqsH1H7OR29KBmvPdE+JdkNOH9syt9rLE7YICAq9q6uDxHYT6BLrUZlNpEGZsphsDrwacakZbMUoSW6Ncc9qAAPXqa871r4n2Z08jRhJ9s3j/XxfLjv3pdG+J9iNNT+1xL9sydxgi+XGeO9L20L2uP2U7XsehgevSlxkdeteVQ/E6ceID523+yfMbGIf3mznHf6V2uheL9L8Q3cltY+f5iR7z5iYGM49feiNWMtEwlTlHVnQ4IGR60hzjgZ5rh9W+IY0fxQdPuLGQWkYxJKQQ5P95R3Wuygv7W5t45oZ0McihlOcZB9jVKcW7IlxktWT4IB/nS4rz/AFXxpqVn47i0mF7c2TSRKWKZOGAzzn3Nd59ohz/ro/8AvoURmpXsDi1a4/GT+FL/AA8gUooA5IyOKskQYx+FKKXp27UmQoLE4AoAO2aR2SKN3kIWNQSWPTA602U87d5jwAxfsB71xnibXhe/6JaOPsvIdlP3z6fSsK1aNKN2a0aTqysir4i1/wDtaQW1sSLNDnPQyH/CsPbnrS49Kf2968OpUlUlzSPYhBQjyxIQnz9K04lGyqH8dXYWAXmpCQszrEhZj0rm7u5a4lJ7DpVzVLwSN5aH5R+tZijJzXNOXM/JHTRhyRu9x6LUgFIKcKzKbuKKiupvJjJHU9KnUdzWPqE3mSnngVVKHNIunG7KM8u4nNV8kHrTnJJpqglgAMk9AO9enFWR1IuWqGWZEHcgn6V0CgKoA9KpWFp9njy3+sbk+1XwMnFebXmpS02Rz1J8zsSICeK0rRCrgAZb1ptjal1LkZPatK2ttsmTkD1rjkznnPoXYZCMA/pVydbbVbP7HfLvQj5W7ofUGs/yyhO05FPExQcHOaxVWVN3RzuF9Vucbqukz6PdmKU7oyf3cg7iqq5rvru0i1aya3l4cD5D6GuFuLeWyuWgmUh0PT1HrXXCsqquj0KFbnVpbgtPFRqaeOtJmzJV61YUZWqqmp0f5etZtIhkmKep5pi8ilGa5ZrUksK1TxtkVWTjrUqHFYyRLRcVulTo1VENToeKwaMWi3GxzVlXAqkjVL5gFOmZSRcEhzUyyjAqjCJZz8inaDjd2rcstJVlDTEuf0r2MJhK1bWK07nLVnCG5WSYE8ZqxHcD/IrQ+yxAlQgHoRUyJHs2vGmfWvbpYGUd5HJKsn0OQvjPc3J8qF2wOwqobO+P/Lq5+lduIVSTcox9KUIAxIOCa3+q92NYmyskcG8dzF9+CQY6/LVZ7kK2GyCex4r0RgHkwBhh2Peq9xptlqKmO6tkJ9QMH86l4W+zKWJXVHBiUYznipLKQHUbf/rqv8xXTt4Q04Z2NN9N1RweF7OK5ikDyqyOGHNZrDVFJXNfrNNo6EnlqReKG6tRXuHmBR2opexoAqalqEGlabPfXLhYoU3E+v8AnpXiFnY614r1m7vrCIvch/OZg4XZk8YJ/D8q92uLaG7haG4iSWJuqMuQa8hh8Tap4cur2z0vSLdIDcOR+5diecDnPSueutVfY2ovR23MfxNY+IbI2v8Ab0k0hff5PmTiTpjOOTjqK1tO0bx1Pp1tJYz3ItXjVogt4ANvbjd6VkeJvEep6+bU6lbxwmEPs2oVzu256/7orX07x54hsdNtrS3sYXhhiCIxgY5UAAZOf1rBcvM97Gz5uVbXO18F2HiKwN62vyTOGVTH5kwkx1zwCaxJde8MeJ/EyQalZmLyJNsE7nAm7bXGOBnp/Suo8Hazf65pMlzqECwyrMyKqoVGNo7H61keItN8KQ+KLO51SYW9xIN7R4+SXB4LY6c/nXQ17i5dvMxT95338jK1Px9Z2uqXFu/hy2mMEpiEjMuTtOBglTjp61xt5riXPitNYWzWJFmil+zA8fLt46d8enevQfEPjuHRdYksk0qG4VVBEm8DduAPofWvPrzXRd+Kl1sWioFmjl+zg8Hbjjp0OPTvWNR67/ga015HYp8VdmNuiKp45E2Dn/vmug8ReEE8Wy2l6921uUhC7RGG689cisTS/iJFqOqWtn/YsKedIE3Bwdufwr0jhVIAxgdPStoWmmm7oxm3BppWPBfFHh5fDuspYJcGcNGr7ioXGf8A9VdfH8K7d41c6uwLAEjyhx7daw/HbDVPHrWsLAsPLtxj+96fm1af/Cp7/wD6Cdt0H8DViormdo3NnJ8qu7F0fCe3Jx/bD5PQeUOf1q/P4P1PTfCw0zQ9Qf7QbnzmlDmI428jIJPXFefxaU+keOLXTHkWR4ruJSyDg5Knv9a9j8TWF9qegXFpp0vlXTldrlyuMMCefpmtKcYtO0bMibkmru5wX/CKePf+gxN/4MJKpav4Z8ZQaTczX+pyTWkSFpEa9dwQPY8GsrXrfxB4duore+1KUySJ5i+XcMwxnHrXV6X4V8RW8N8+o3nn20tjKir57PhmXg9KhJN2s/vKbas7o5bwzo/iHVra4Gj3rwRKwEqC4aMMT7D6V3Xgzw34i0TUs6jdFrERFViFwzKrHGCFPHrWR8JrgLc6nak8siSAfQkH+Yr0yK4gmkkSKZHeM7XCkEqfQjtV0YRaUupFWbu4nAePNVsNGuxGNBs57u4TzBczxqeenTGT279687tJ7B75rjVIpnQ8+TahYwfy6D6CvQvGvjJtO1R9OTS4JJ4RlJ7gB8AjOVH+elef/wBox396bjWTcTqDkJDtXn+S/gKyqtOW5pST5dUdRN4xgmtY9P8ADvh6KGZhjc0ayOB7cc/U5rsvBOna7aWTtrXlFX+aIN80qk+rDjHt1rgrjxZpK6JNpulaRJYmUY86OYbyR2Jxkj2rS8CeNX0+WPSNUc/ZnO2GRusZPYn+7VwmuZXf+RM4vldl/md14vurHTdAuL26ghklEflw+ZGCdx6AEj3rxrw/ra6Fcyztp0F4ZE2gTjIAznI/Ku++IGiazrWt2NvbAyWRQkBRwjfxFu3I6VzMvimfT9FvvD8ulxwHaYoiVw6A8HdnqSM8+poqv377WCkvdtvc0LjxBH4g8Fa8f7LtLNoPs4BgXBbdIMg/lVGf/klFr/2EW4/4C1TWOmNa/CrVr6QYa7liK+6q6jP57qhnH/FqLX/sIn/0Fql3e/YpWW3c7/wKhk+H9ko4Zo5QD7mRsVxY+HPignAu4v8Av+3+Fdx8Psf8INpp7fvP/RjV0c91bWkby3E0cUcY3MzMAAPWt1CMoK5hzuMnY8gk+GfiKVgZJ7dyOMtMT/McVz+s6fe6Bci0nv0eUAbkhlY7Pr6fSuz8T/EeS6c2Hh8P8x2G52/Mx9EH9etO8KfDqR5F1HXgSSdy25PJPq5/p+tYOEW7UzZTkleZofC61vk068ubtZfKnZfJaQ/eAzkjPbpXDX3h2+fxn/Yv2pHunfh9zFVB+YcnkYFe7KixoFRQqgAKAMYFeQW2q29l8S9T1HUyYfL84xhwfvAYUf8AfNaVIJRjFkQm25NCeC7MT6trFpfFbuO2t5BiTLJuVsBsGq/gOLThFrF5qdpDcwWtuJAJUDAHnpmtDwGrR6P4l1aUHHklA3qdrE/+y0vw20tNU03XLeZnSK4RImaM4bHPQ1nFax+Zcn8XyM/wE+njxDNquo3VtarDlo0Zgg3NnoPQDPFdR8QNdv0lj0Sygjnjv7c54+Y8npz6CuO8Z+GbTw5qlpa2cs8qzR72MzAn7xHYCug8cST2/irRmtY/MnFrtjQH+I5A5ppuMXFg0nJSOPtLrU4JtMu4rVW+wxNNFkcMgYkseemSa19ftNf8Q2yeILhY2tFt/NCrwqDOCACTk5GeO1Xda0LVNF8PWN3HBG0a6c1vdBjzHvYseP8AgWPwrEn06OOx0mbUtSnjsLmEtHGimQqQcMAMgDOeuahpq6ZV09ULe6lYaxZ2Wn6bo1ta3shCzSjgFs8Yz0GeTXpMuk32g+BYtO0i3hv5xgPHIoZHDHLcEgYrz+8TwPJZpHazapDOg/1rRht568rn+WK9G+H+mpYeG43W5adbljKrnI+U4AGDnHT9a1pJuTRnUdkmcFqOkeJ9RtTbN4ZsLfkHfbwRxtx2yDWa15qPhmNLG90XTTJjeGurZZJCCf72faqe6zfxBdLqVzdRW3nSfNDy2cnAAOOKr6uNNW5T+zLi6nh2DLXCgMDntjtWLfVGqXRm5D4b8Srqn9oJoMDksX8kohi57bN2MCuu8ML4kh1yAXPh6wsrWTcJpYLdEOMEgZB9QK4K/Xw+lgzWGoanJdADakyKF688ivR/hWzHw1MWJP8ApLf+grWlJLmsjOpfluVNQ8R+Ftf8Rrp+qWuEt5NsV0/AZu6njIU/5xXKatpbax8RrrTYZhCss+1WC5VRtz0Fdr4r0jwq3iCxuNVuRazSEl1A+WdR/eI4HPfuK4bVJbyH4iXMuioHuRNmAIoORtxwPpTqX69whb7PYp6h4aksPFqaG12Hd3jTzgpAG8DBxntmpdb0Cbwx4htLJ7vzy+yTeoKgAsRjGfaotQudek8VpPdxMNW3oVTZg5AG3ipNbudaufEVm+uxmO6GwAFQvy7qyfLZ2XU010ue88hMjsK8n0Hxrr974ttbKe83W8lxsZTGo4+uK9aXhRmoks7VXDpbRBweGEYBB9en1rtnFyas7HHGSSd0Tkcn+ZrjtT8TJJrAjhO60gOBtOAz+p9QKk8VeINgk020b5+k8i9h/dHvXIJwMLwOmPSuDF4rXkh03O3DYa655nWNqCapE0lxcFdLtj85zhrqT0x/drlpGEkryLGsYYkhF6AelJjOM846DPAoPUGuGpVc7XOynTUNhOnSl7Zo+tO25UisjQYPv0l5ciC3wD8zVEWCnJPArLuZzPKc1nUeljWnDmd3sR53sSalVcUirgAVIMVg2bSdwAp2KAMUuaRA4DMZHqK526SRJCrqQc+ldDuxTSN3UA/WqpVOR7FwlynNx2k87fJGcep4Fatlp6W/zt88nqe1XwPy9KUDtirqYiUlbZFOo2AHpU0SbmGeKakeelX7WEIfMfAUHvXJJ9DNuxtWqxRWqAJyKkLjrWJcavGHxH0xTI9X3HBHFYzcuxiqMnqdAG9KkihLLvNVLWUTAEd62lixGoHpWS98ym+XQpqCjZHUVT1rTF1O082MYuYxwf71arxe1RkFDkURTpyvEUZtPmW55yQY22OCrKcEGnA5rqta0dLxTcQALMvJA71yu0oxVhhh2NdqkpK6PSp1FNXJBTl61GCaevWokjRlmJuOamA4qmGOeKsq3yisH5mckSjpUimogwp6mueSJLKNxUoaqoapQ1YtEtFoPgVXu70QRjo0jHCrSM+O9Zsam4vJZDk84Fb4WipSvLoZtW3Ol0zxE9rCkN3GJIc54GCDXYWGqWeoJm0mViBynQj8K8qS+U3JgeNkPZj0q3G7wSrLC7Ryqch1ODXu0MbUo2i9UcdbCRnrsz1M4LdaYdwPIGPpXN6V4uilCQal+7mPHnAfK31rqOHQOrqynkEHINe1SqwrK8GeZUpypu0kNVs96dkN0xmm7Fpm0ZyCQa01RA9gAMPyO3rTYldF+dtwzx61IAFGScmkOcZot1EmKeRxSR8sNw5zTSWHTFORgHXJ6ng0XVx2EYcn60lObqfrSdq6yAxS+1FJ3oAq6pqMGkadNfXW/wAmEAvsGTyQOn41y/8Aws7w9zn7Vz/0x/8Ar11d7ZW2o2clpdxiSCTG5CevOf51if8ACCeG/wDoGJ/323+NRNTv7pUeS3vHnXj3xNp3iJrA2Hm4gEm/zE2/e2478/dNdLofxB0HT9DsbSf7T50MKo22LPIGOufWug/4QTw3/wBAxf8Avtv8aP8AhBPDQP8AyDEx/vt/jWSp1FLm0NHOm4qOomj+N9H1rUEsbMXAmcFhviwvAyf0rgvETHxJ8So7FTmFJEg46YXl/wBS1ekaf4V0TSrxbuysUhnUEBwxyARg96jt/Cuk2Ot/2tbW7R3JDZw3BLdTj1qpQnJJMUZRi20eZ+Mpo7P4hmd1PlxNCxVQPugDiusPxN0D/nzu/wDv0v8AjWvqXgfStW1r+07prhpiykoCuw47EFTmtE+GtD76Lp3/AICp/hUqnNNtWG5waVzyUalBq/xFtb62R1iluYyocc9h05HWvR/F3i228OWpjT95fyKTFHj7vbcaX/hA9FXWU1OGN4ZUkEixxFVjBHTgCtLW/Duna/bJFfQ5MZBSROGHqM+h6U4wmk+7FKcG12PNPh/olxrGutrN0GaCBjJvb/lpL2/L+ldrP8QfD1vPJDLPMskTFHXyWOCDg10lrZ29haR2trEsUMYwqqOn+e9YN34F8P3t7NeT2jPNMxdz5rAZPXjNNQlCNog5xlK8jzbTbn+3viXBeRRsEku/OCkchVPGfyr1TxL4hi8N6et5LbyTKzhMRkDBIJ5/KpNK8N6TohZrCzSJ2GC/VsemT2q7dWdrfQ+Td28U8Wc7JUDLkdDg8U4U5Ri9dWKc1JrseIeLfEi+KNRhuIrVoRHHs2792ec5rr9G8d6xqurWdp/ZaJbyOsbyBGYhe5z0rvodNsrcfubK3j9kiUfyFWBxwAAPSpjSknfmG6kWrWPGLW4bwR4/nM6P9mV3VgoyTG33SP0/KtPwPJJqvjnUdW/eLAFklIz03HAGB14+vSu713wtpfiBUN7EfMjGFljO1gPT3qfRNAsNAtTBYRFA53OzHLMcY5NKNKSl5DdROPmedeJ/FkWt3pstE01JZ3AjNy0IaQ+gUY4+v8qL6+tIPh7c6be3Fi2rApGI4kAkUB14Y4+8ADzXpVro2n2V3Pd21rElxO26SQLyfx7evFYl78PdD1DUJr2YXIkmcu6rIAuT+FDpz33bBTjojk/CFtqtx4G1JdIMa3TXRGX4bbtXO09jVbSPEsdvrVvF4p03zbq3PlxztHh09Ny9G9j1+tep6dpVnpFgLOyhEUK84HOT6k9zRcaTYXd3BeXFrFJcQHMchX5l/Hvg9PSmqTSVmJ1E27ooeIfFOn+HrNZrkl5ZBmGFB8zcfp+NeYWNlqfxB8StdXA2W4wJHUfLGg/hHqa9Y1zQbHxBZi2voyQrBldeGX6GrNlp9tplolrZwpDCg4VR19ye5/nVTg5y1egozUVpuZ2uWOkQ+FpbS/V49MjRA3l5yoVgR09MCvNvE2qeHB4Vg0jQppZAtz5pDowxwQeSB6163fWcOoWU1pcKTDKhRgDg4P8AKuZj+G/htCN1vO59GmOD+WKVSEn8I6corcz9I1mXQPhTaX0UBlkG5UB6KTI2Cfbp+ded6hBrWpWra9eRzywSybfPPIz7DsPpXus+lWNxpT6a8AFoyCPy14AA/wDr81Mlrbpai0ECfZwm0Rlfl2+mKUqLkrX0sEaqV3Y8q8I+IvCuh26ST2VyNRx80zKJPwXniur/AOFn+HsYzdf9+f8A69X5vA/hueRnbS4lLckISo/IECof+FfeGs/8eLf9/m/xojCpFWVhuVOTu7j9J8d6TreppYWkd15rgkM8YCgAZyec1wvjjUrXxNr1vYaRaGe6jYxtMowzn0x6A9zXoukeFNH0W7NzY2vlzFShYux4P1NW7bQ9Os9Sn1CC1RLqc/PIO/09Pem4TlG0mSpRjK6PGhr19pHhu98NT2flSPJguQQwHVgfXt+Fdx4TuLHwb4Ttp9VmMD6hIZQdhbsMDgccYP411OreH9O1tYhewKxikEgYDBJGOCe4OOn0pdY0Kw16zS0vo2MUbB12NtIIGO31NKNKUXdP0KlUjJWfzPKfGWs2niLxVZPp7tLEipCG2ldxL9gea1PiWkDeKNLS5maKDyQJJF5KjceR15FdppvgnQNKu47u2sz56HKtI7Ng9iMmpdX8Kabrup219e+az24AEYIKMM/xAjmk6UmnfdgqkU1bZHk+pWfhiLT5nsdeu7m6wPLheFlDHIznjjjJqTxAUHhrwqW+75Eu4evzivUr7wboF5aS239nQQbwB5kEaq68jocGqd74C0u9stPtHnuhHZKyx/MuWBOfm455qXRlqUqsdDgfE+p+E7zSEi0XT/Iuw6sX8nbwM55yfavSPCdzDa+CdMluJkhjWEZeVgoHJHU1HqfgbQtRsxAtlFakMG823jVX+mcGtCPQLRPDn9htue1ERiy2N2OefrzmtIQlGTZnOUXFI8hmim0XV7jULPXdMSVncr5bmU4Y5xjYRVm30DXvG0H9pm/s5vLJiJdthUDJ5AX3Nd/YfDrw7ZYLWz3LDvO5P6DA/SultLK1soDDbW8MEWfuRoFHTHaojQb+LYt1ux4Zca7qurQSadea1bCDdtw0eA2PRlSvRfh0ttYaRJY/2lZXFw8pkCwS7jjA7EA9vSugvfC+h6kCLnS7ZmP8axhWP4iquieDNJ0C/lvLFZQ7psCyNuCDPO3uPzqoUpRlfcmVSMo22PO/FrnxH8R4tPjJZI3S1wO2Dlj+GT+VV7/UYtD+J9zeyRs0UE5JSMc424wK9Ui8KaPBrK6tDaCO7Usdyk4JPU46ZqjJ4D0qbxE+szmWWRnMjQyBWjJxjoRSdGV79blKrHbpY8u1TxJbX3jeLXEhkWBJI32HG75QB/Sn+JfEEHiXxPZ3tvFJGqqkZWTrw3Xg+9ey/wBg6N20mw/8Bk/wrn/EHhDwz58epXZez8tQEjttqK5BJGBt5PPWpnSkottjjUi2lY60jMXB5YYH1rw2LTta0XxJHPLE0TpMWG5wcD1Iya9Al8T6nqVx9m0yIRtINqDGW2/3iegrm5A/nyeY5eXcd7k5LEd8+lc2JxUZL3PvN8Ph3F+/9xFgliWJYk5JPc+tSLxSY5p6ivNPQAc0p6c0AUpXIxSEIBmpAM5pqrg5NRXNwIIS2eSOKUnZXY0m3ZGfqEu07B1PWqCjq3bNKzNLKWbqalVRWDfVnXpFWCI7l3CpVFJjgDFPqDNsQnim0tLigBuDQTjjNNJZjhATTvJx/rJFFKxSQbhmpkXPeq5eFeDItXLFBLNhSGGM8Gs53SuN6I0rGxLrvYYWoNS3YwOFHatqEDydq8ACs3VUAjJrlcndIxhK87s5mRvmNSQHkVDIcsakiODXoSXunadZopzF9DXWqmUXHpXG6A28TL3Cg4rsrM+ZAvqBXDRj71jysXpIQx1DLEcZxV/ZU/kxi3Zm613Qwznc5facpy8rmNs1lajp8V6hkjwsw/WtbUBhjisZ52ifINcEm6bujvpX3W5z0kbwyFJBtI9aQNXRTwQ6lF0CyeornZ7eS1l2SAj39a3hNTR3U5qWj3JY+Tmpd2KgTipM96zkhvcmDcVIrVXDVIrVzyiKxZU1IDxVdWqUHismiWOJ+dR71DZKNrt1yxxSu5ByKS04gHrzXZhtIsyqbEz28b4Mmd570u0AYBzjvUUpEybCSpPQg09SwRQx3EDlvWumJjqIVB4I47571r6N4mk0eD7NMsksIORg9B6Vkk55FNOCODkDqK1p1JU5c0NyZQjNcsloenWF/a6nbCezkDr3HdfqKmcEngfWvLbW4udOuRcWkhRwefRh6EV2+keK7TUSsNyBb3OOh+6foa9fD4yNT3Z6M86vhZQ96GqN3BHvTgKQggZHJpc57813WOMCnHSoZZVtxCAoZnYBR6c9am81UyXOFUZB9ay490l2JWOSzg/QZrlxVf2aSju/wLpxvuaJ6mjoKG60MBivUMgyOeaU8jPek/OjPUUCDjj3o4xWL4p8Uab4S0WXU9Sl2oOEjH3pX/uqO9Z/gzx9o/jWy8yyk8q6RR51pK3zp/8AFA+opgdV75oHWuV1z4i+GvD2tW2k39+q3UzBWCjIhz0Mh/hpfHfi9vB3hY61DaLegyogj8wop3d9wBoA6njGeaTjI+lea/Dv4qy+O9audOfSEsxFbGbes/mbvmVcY2j+9XSeIfHvh/wvqdlp+p3gjnumxhRu8of3nx0H+exwBc6fFGDjjikjdJUV42V0dQyspyGB6EHuK5yT4h+EY3aOTxDYK6kggy9CKQHSUp6GvOfF3xh0PQtKjudIuLPV7hpQht47jaQvPzcA1W8HfGfSfEEd2+sm00YwsojElzu8zOc9VGOgphc9O96O1eJap+0AtnrdzaWujQXVrHMUS5F2QJFz97ASvRI/iN4PaNWPiHTwxXkCXOKLBc6ikrN0jxFo+viU6TqNveeVjf5Lbtuen8q0WmiRtrSIrehbBpAP/l60Y4+leVeOvjDJ4N8QSaUmhpd4jWRLj7XtDA57BT6Eda6/wP4ui8XeFrbV3SK2mlZ0eESZ2FSQOvsAfxp2C50vUUelUr7WNM0uFJ7/AFG0tYmOFeeZUDH0BJ5rDuviR4Ns1/e+IbI+yPv/AJZpAdTg9qWvObj42+C4pkihu7m5ZmC7o7dgBk45LYr0ZWV0DKQVIBB9aAAk4PHagcj8PWuU+IfjJ/A/h2PVI7JbxnuFh8symMcqxzkA91qr8N/H8nj3T726k09bM20yxhVmMgbK5zyBimB23Wg8fn3qnqep22kaXdajeSCO2t4zJI3XAFeR+GvjzJrOt2umT6BFD9olCect5tVBnqQVxwPeiwNnsxFLtqh/buj5x/atjn/r5T/Gr4IIBByD0pDDFB5P4VT1e+OmaLf6gEEhtbaSYITjdsUtjPbOK828B/GGbxp4oj0h9FW0DxPIZVuN5G0Z6bRTFc9U/hxSgf5NHp6Zrx7xF8b5dC8WXmiJoUcy20/k+b9qK7vfGz+tFguew444paajb1VumRnFKQM9aQxemaTOD+FLTT1oAXNA6mmjNZ2u69p3hzTW1HVJ/ItVYIZNhbBPTgAn/wDXQBpcZz7UtcAfjP4FXIOsOcDtay8/+O1Wk+OHglB8t3dyH0W1b+uKYrno9O9ema8tT47eFZ7yG2ih1BvNkCb2hVQMnGfvZxTfGfxmj8H+JrnRW0N7kwqhMgudgbcoP3dvv60WC56qPrQpx+dZ+haoNb0Ow1QRGL7VAkvlltxUEZxnvV/Ax+NIB/NH1ODSelc5438Xw+CPD41ae0kuY/OWHy432nkEg5/CgDphyO9Gc+vfNefeAfinZ+PNUurC30ye1aCHzmaSRWDcgYx+NVPGfxisfBfiKTR59JuLmRI0k8yORVB3DPSmK56WpAPWuX8RadBEVvPsst5cTP5YaWT5EJ6cf4Vf8J+IIvFPhuz1qGB4I7gMRE53FcEjr+FWtZubez0uWefHyKTEDz8/bFY1oKUHc1ozcZqxyt29t4csZNOt2E2ozp+/m7KvoK51RgY9B+VRtKcl5JMu53FmbkmuX8UeMj4blt0SyFyJlJDedswRjttPrXj2lWkoxXoequWlFuT9TrG4xQrcVzHhbxV/wklrPLLDHbPFIFCB9wII61vS3Vvbwmaa4ijjU4Lu4UD8TWU6coS5ZLU0jOMo8yeheQ5qQiuebxboMH39VtfwkB/lVC6+JHh2HhLqSY+kUR/mcCmqFSW0WTKrBbtHWFgoJbgCsa8uPPlbH3R0FNl1m3uNMiu0lVIJUEm9zjAPrWamsaWOupWX/f8AX/GuaalJ6LY6qfLFcze5fRO9Shenv0qius6Vj/kJ2X/f9f8AGuY1b4gLp9/LawWcVyiYxKtyCrZHsP60U8NVqu0Y/wBfMipiKcFeTO3yRig1gaJ4qsdT01bi5ntrSXLBo2mAxjp1rQ/tvSv+gnZf9/1/xqJUakW4tbDjUhJXTL4GaCCwIPCjvVWHVNPndYoL+1kkfoqTKSfyNJeT9Y14A6+9RySvY1haWws175eVi4x3qg0jO3JyaRuelY+v6y2iWkU6wiXe+zBbHYn+lddKjdqMVqy5zjSi5S2RtqPXrWno8iQ36tI4RNuCTXGeH/FMeqvMtykFqIwpUmXr+ddCuoafjm+tcf8AXZf8aVejOLcJIiNenVheL0Z6HDxGaz9acJAwK9RwfSiDWtINjb7tWsd+zLD7QnH607WEE1iskbBlIyGU5BHrXjulKD95GFOSc9DkWYbqFkANJIpOR6d6gzg16iV0d50vh++jt75fNOI5BsJ9K76zkEUgTIx2PrXktvKQwrsdI1VjHHDIdxXgN7elcNb91K5yYqi5+8juWI61DNMfL254qC2uRJHgnmllPFb+2uro8tRs7MyL3kmuevCVY10V1zmsC7hLGuSep30CraTMsy4Na9xbQ3kOHwD2NZkEAj+c8Gpjc471nFW1NZ3bvEybm2e1lKMPl7GmgjFbErx3kRjfGex9KxZEaCUqelbL3kdEJ82j3JBTgeaiDZpwY1nKJZODTw/FRKeKMlmCjrWPI27CHO+c89qktR+4HtSxwpKrc5QdX9TUFrOAu3Nd0aLpx16nNOSnt0JLwSfZ2MPDVBpt5Lcwuk4AnjOD/tD1q8H9Kijjg88sE2v3PrWitaxF9LMk/SgKgJcfeNMYlT60bqdhD6a6Bu2D7GnLThUsE7G3o3ia4sNkF4DNa/3urLXb288F3EJreRXjI6jtXmKKCa6XQkZI3EblFbhgOhrrw2PnB8k9UceKw8GuaOjNyeQyzEBv3SEhcd80+FR5i/7wqNF+UADirESjep9xVxcqlTnkcr0VkTMvJ+tB+7mnEcn6009K+lOQMHJ5pcc0UUAch498A6f450yOK4laC8gz9nnB4QnGQR3Bx9f5V4j4V+Gfi21+ISWO6bTjZsJJL6Inb5eeqH+Itzx9c16d8XviBfeErCHT9LjljvrxSRd7PkiXPO3sX/lWf8O/jNBrMkOk+IilvfsQsVz0jmPTDf3WJ/A/zetiTn/i98MJobxvEWhW7zpcP/pUEa5KyE8OoHYnqB0P1qHxDpPiXR/gV9m8RSqf9MhNrCfmkhTB+Vj/ACHOK5X4k65qtt8Rdbih1O9jiS4wqJcMAPlHvWZNofjzUrUCbS/Ed3bvhxvgnkRh2PIx3piOq+BaXMviXWY7GZIrp9LkEMki7lV96YJHf6VQs/hv4s8TeO7vT9WWVJkk33t9Llht7MD3yOAP5Vg2nhXxxYSNJZ6D4gt3YYLQ2syEj0yB7VTvNV8T6bdPaX1/q9tcRkb4pppEZe4ypORxzQB9g6JpFr4f0S20qz8z7PbrtUyNuY+pJ/X+VfPviLwf8OtJ8Q3tnqXinUorxJC0sa2u4KWG7qB7ivdfBUsk3gXQJpXZ5H06BmZjkkmMZJPfNfKfjG+i1H4gavdTEtC984O3Gdgbbx26Dikhss+JtN8F2enxyeHtcvb+7MgDRT2/lqFx1zge1Q+FdP8ACd7BcnxLrN3p8isohEEHmbxznPBx2qx4on8CS6fCvhe01eG8EmZHvShQpg8ABjznFReFJ/BUMN1/wldrqs0hZfINiVwBg7t2WHPSqEYWoxWMWrXEVjcPNYrLtimdcMyZ4JHriui8RaZ4LttISXQddvb2/LqGhmtyihccnOK57Um059XuH05J008ykwpNjzBHngHtnFd4l58INi79N8Tb8fNho8e/8dAjr/2dBmPX89zD/wCz1n/HXQNRbxCutebDHYG1SJS84Uu4LZVV6k4NdP8ACXWvBP8Aa97pfhWz1eGaeHz5WvdhXCEDghjg5eud+LPxIiurnV/CN1oSSpBIBFdfaCGVwAQwXb2zjHep6ldDzzw54C8ReL7KS80iGK4jify5N06qyHryCaoal4f1LRdbfRb+WC2uo8Fg042DIGASOM4rW8CeOv8AhBru6u4LB7q4nj8vDXGyMDryu05IPfNYMeref4hGrarD9vLz+fcRs+3zeckE4OB+FUI7/wAaaNe6J8IPDFpfhfON5NICjhwVYEqQR1yCKwvBPwy1fxzZ3F3YXNpBDBL5TmcsDnGeMA+tdB8QvGZ8b+ANLvjpyWIg1B4FjSTeMCMH0AHXsO1Uvh18UY/Amk3dk2lNd/aJxNvEoTHygY6e1IDp7X9nW6bBvPEMK+oiti36kj+Vek+LbnUPCHwpuXsr1nvdPtoYkuSoy2HVSSOeSM1wP/DRUOM/8I4//gT/APY11118WrDT/BeleI73TrgJqLvGsMTKxQqT1Jx6UtR6Hz/r/j/xL4o05bDVr83FusglCCNV+YAgdB7mofDnjfxB4Vt5oNHvvs0c7h5BsVtxA9wa7n4l/FbSvG3hmLTLKxvIJUulmLzbcEBWHYn+8Kp/C74l6b4E02/tr6zup3uZhIrQbeABjByR39KoQz4ifEDW9b0LR9Iuo5YYXs4bm4lbg3TsoO7j+EHt61FpfwX8SajoUOrSTWNnBJGZdl1IysierAKccc/Stf4neILvxtbeHdZ0awvvs22Yqpi3lXV8ZOMjnFcre698Q9SspbO9m1ya2lXbJG0T4Yeh4pAczY6bcX2tQ6fYr9qnkmEcXl5+c56jPbvX2zbo0VtFG33lRVP9a+LLa41nwxqEdzD9q0+7CnY7IUbB4OMivqL4Uapfaz8PrK91G6kubl3kDSSHJOHIFDGjyDxn4N+ITaxrmoJBenSvNmnyL5dvlcknbvzjb7V5/wCG9L1rWNXS00BJGvyjMojlEZ2jr8xIH610+r3PxHu5dQhml8QXFpCZRK2yTy9i5DEkDGMVzHhzQtU8R6wmnaOm+8kRiF8zZkAc85piPWdZ8E+Or7wR4es4Irg6hbNP9qBvF3DLfKC27B4HavHb2wvrbWZrG7Vvt6TeU6s24784xn1zXe+LvC3jHwl4V0U3s1vb2dk7GJba4+dZWYnd2ySMdM9K4nSNRjh8T2eqan5txHHdJcT4ILyYYMevc0AzS8R6P4r8JTQQazNc20k6lo1F1uyAcfwsa+kPhPNJP8MNFklkZ3Ik3M7EniV+ufpXjfxl8Raf4qbQdX0uR3tXhljO9CrKwYEg5+vari+NtZ8L+AfA9vol0kUlwtyZY2QOrfvyBkH3J6YpMa0Z9GZoNNiLGJC/LYGaecVJQ0fSuV+JVrYXvw/1S31K9WytnVM3Dxs4jIcFTheTyB+ddZWT4qtbO88Jatb6g2y0e1k8xsZ2gKfmA74wDQJnzfoPw50fxBY6pd2Hih5006LzJUSwKswwT8oLjPQ9cVF4I8FeHfGmuzaXb6tqEDpCZVaW3QbwCAQMMfWtT4baj4a8HarLf3/imGVJ4GhltobSVlcHGPmIHQj0pvhlvBvhfWn1iz8aSfakWQQR/wBnybBuVgN57gZB/CqJIJvDfw903xbc6Bf6prnm283lC4hSNkL8ZGApbO7jgVR+Mo2fEq+QszbYohubqfkFWPhvBo4+J1vNquqx3ZEvmW7RxuRPOxwucgYwSTz3xUPxq/5KfqP+5F/6AKAPozwJ/wAiHoP/AF4xf+giuhz0471z3gT/AJELQf8Aryi/9BFdD6fWpKR5zqXxu8LWGrxadB9quXMwiklWMokXzYYndgnHpiq/x7Ib4bqQcg30RB/Bq8g+Mnh8aF8Qbt40229+ouo/q33x/wB9A/nXXeK/EH/CR/s86XcyPuuILuK2m9dyBhk/UYP41RJS/Z1/5G/Vf+vD/wBqLWP8df8Akptx/wBe0P8A6DWx+zr/AMjfqn/Xh/7UWsf47f8AJTrj/r2h/wDQaOodD2v4Tzx2vwl0u4mcJFHFK7MegAdiT+lcTp/xF07xzrkVvc3ZsJ5X8u3hmQsmc4UAjPPucVUuvEX9h/s36dbxvtudR320frt3sXP/AHyMfjXO/Arw9/a/jn+0ZEzBpkXnDI4Mh+VR+pP4VnUpRqK0jSnUlTd4l34q6Hfs1qDsiWzMgmaRwo52Yxn72cHpXmuk6HqGuySR2OyR4xkq0gU49Rmvfvi18Q7bRL9/Dl74eg1K2uLXeXkm2Fd2Rx8p6YznP8q8C0PV10XVVvkgkkZM7UEu3g9icHIqIU5U6bjHXsXKpGpUTl8xNU0O/wBEuYre+2QySjcBvzgZxk4roo9PubL4c6m87RtHPNE0bJIGBAYA/rXNarqsusarNfXA+aQ/cHAUeg/CuouvEiav4KvrGKwW0itBCFCvu3fN34HPH60qntLRuuqv944cl5WfR2+45zQfD914guZYbaSKMxqGYyEgYzjsK6lfhfcIge41OFT/AHUjLfqcVz/hfxEvh27nmNuZ/NQLgNtxzmukl+JiykZ01gB/01H+FY4mWL5rUVp8v1NcMsNy3qvX5mw3h+VPCkujxXIldgQjuNoHIPvXIXHgTULSMSXF7YxISAGeQgZ9Old14b1oa9ZyXIgMQR9mCc+n+NZXxH58P2//AF9L/wCgNXnYetWhX9i3a71O3EU6M6XtVsloch/wirf9BjSv+/8A/wDWo/4RRv8AoMaX/wB//wD61UNJg0qYy/2peS22MeX5ce7d61pfYPCX/QZvf/Af/wCtXqSlUi7cz/8AATzoxg1ey+8b/wAIo566zpX/AIEf/WpU8Is7BV1nSSTxjz+/5Uv2Dwl/0Gb3/wAB/wD61YkAQalGIyWQTDaT3GetOLqTv7z+cbCkoRt7v3M7vQvA+p6TrdvfTy2xjgJZgjHJ4I449cV1LnLe5NbMqloJCo5C8iuV8QTy22hXc8LlJETIYduRXhe2niZpy32Peo04YenJx9TQUA+lcr4/XGkW3vP/AOymuTHibWs8ajL+n+FV73WdQ1GJYru6eZFbcA2ODXqUMBUp1FNtWRwYjMKdWm4JPUTT9IvtVaQWNu0xQAsAQMZ+taKeCvEUhwmlysfZ1/xrNsNVvtLLmyuXhL43bcc46Vox+M/EUZymqzg/h/hXbU+sc3uWt53POh7Hl969/Kxai+HXi2aPzI9GlZc4yJE6/wDfVfQmm6bJH4XsLWdNkkdrGkiHswQAj+dea/CLxPrOseJru0v9Qlnt1s2lEb4wH3xjPT0Jr22KEOp4rwM0qVZyVKpbTsdWHUYe/E83vdPeKVuPlzWXNbsDkCvTtT06IWsZC5LZDVyk2nfORivPU5U9GezSrqauc3ArbxmtzT9yuuB3pp0/B6Vp2FpsO4jgVnXmqisaTqKxu20+xcHirwuA69axi+2mtclfeuVNx2OJ0+bU0ZhuzyKyrl4kJyQSKhmvGwTurJubskEk9a0SbNYUmS3N1ycHAqm9znvVGa5yxGag+0Zrpjh29zpUbGmlyQc5qw7Lcx/N17GsYS89aswz7cUSo21Q2uqHkMjbW/OnA5p7MsqcnmolwG5rNq5SldE6nJ5NXbNNqGQxhi3Az6etUI08yVUXnc1bN5HHG9qzkoVHUdCPQ+9b4al73OznxE7e73InIKYDhVHG0VF9nhxkjlv51ZYK25QoBAycVBAd4KKGAXgA812yV9zkjK2xAyvCThi8fqO1TRSqykdqnysSgAZJqB4FYlh8reorCVK2qL577isM1ETh1GOtRySyQvtcZB71JHJkg5qCrEinEm09alx60J6cYqUANyCCKiSBMWNOQK6zSItsC8da5y2j3OBjOa7C0j2QquOcdqihG9S5z4iXu2LK+gqVOGX6io2QwyYY5JFWIYizqzcEHha9SlCTnypao8+TVrinqfrSUHqfrR619Ac4UUnagdKAM7XNB07xJpcunapbLPbydj1Q+qnsfcfrXmXgf4PabpHiibV57+DU7S3YGxRMHDer4yMrjH616P4q1ZdB8K6pqZIBtrd3XP8Ae5C/qQPxr5a+G66le+P9KtbO9uYDNcK87QyFSyL8zZx14B/OmiWJ8Uf+Sl69/wBfH/soq/b/ABb8d21tFbw6mBFEgSMfY4jhQAByVz0Aqh8Uf+Sma9/18f8AsorsLL47T2ljb2w8NWL+TEsYcyHLYAGT8vfFMRhf8Lj+IH/QUH/gFF/8TXH61rN/r+rz6lqcvnXkxHmOEC5wMdAABwK9S/4X9cf9Ctp//fw//E15t4q15/E/iK61d7VLUzlf3KElVwoHGfpmmDPqnwpfW+m/C/RL26Zlt7fSoJJGVS5CiNcnAyTXk+q+KfhBE0klt4dmv53JbKo0YYn1LMD+leweCFWT4feHldQynTIAVbkYMa5rw74s/DnRPBek2t7psly0t1dsrLK6lVXaWAUADp05zUjPPfEOq2Wsaj52m6PbaXbAYSCFix+rMep/KvW/Afhr4fWfhpD4ovtGuNSmcysr3QzEpAAThvbJ+tcZ8OPhqvj23v5W1I2n2R0XAi37t2eeo9KZ4w8F6D4K1hdLv9X1CeVoVmDW9ohXBJAzmQHPHpTEVNe8LI/ie8fSptKGmNcEwAalAP3eeMAvnpXQ+MLfRVkudO8P6P4dkt3iTy79NQUSKcAn5WkxnOR0q74X+DFl4s8Pwazaa5cwwTlgqz2ihuGK84cjqp715x4q0MeG/E9/o4nNwLWTZ5m3G7gHp+NAHt3wV+H+seHNSutZ1WKOEXFqIYEWRZCysysW+UkY+Ud6b8QNW+HmieLbi31zwxLeX8qrNJPH0bPT+IeleqeHgf8AhHNL9BaRd/8AYFeT/Gmz8J6fq9hqer2l5d312PLaKC5Ee2JP4sEHnmkM8q8b6v4V1WazPhfRpNNjjVhMr/xnIx3PvWt4T8ReANO0GO28QeGp7/UBIzNMuMEE8D7wqn440TQbHS9C1PQLe+gt9SikcpesGb5SBnjt1qGGDwzp/g6xu9Q0vUbrU7tpNrpOI4Aqtj0JJ/xFMR0/xCn8P3fw10K98OaadPs7i/mJhbqWVQpPU+lU/AvgTR/EngPX9avWuhc2HmeUIpAq8R7hkYOefpR8Q59Fj8C+ELXQHkNm4uLgpK+90clQyk+zbhXY/Cy2MPwS8SzEH9+1wVPqBCo/nmgDy74c+HbHxX43s9I1AyrbTJIzGJgrfKhYc49QK948YeCfDGmfDiK1v/7RfTNGJmRYZV8xixweSMH71eOfBP8A5Klpv/XOf/0U1e6fGCcQ/CzWiTjcsaDHvKgoYLY8jsfDHgDxD4Z8Qahoqa3Hc6XZPcAXUibS21iOg56Vznww8L6Z4v8AFUmnatJNHbLavKDFIEO4FcDJB9TWt8M7+1j8J+OrCRwLmbSJZIwf4gqNnHvyK4rw94f1bxLqLWOjQGa6EZkKiQJ8oxk5JHcigD3Hxvq9z8IvDmiab4WkU200k5ZroCVuqt1GO7GuD/4Xv40/vaf/AOA3/wBeumufGd38NdB0Pw7q/h22vLpLVpW8+RW8stI4xwD2A796z/8AheVp/wBCXpv/AH0P/iaBnn/ivxlq3jO8t7rVjCZLeMxp5Me0bc5r6K+Co/4thp//AF0l/wDQzXz9448YxeMb+1uo9It9OEERjKQnIbnOTgD6V9BfBXj4X6f/ANdJevH8ZoYLc86+Jd78QV8T6zpNidXudFnxtWC2Z0KMoLKGCnIySOtT/BLwPrVj4ll1zUrGaztooGijE6bGkZscAHnGM81H8T4vHb+Pr9tE/t02G2Ly/sjSiMfu1zjHHXNcVcn4lWVs9zcy+JYYY1Jd3kmUKPrnpQI1/iyk2oeMl2eJYNTtpHKRxtKqC0bOCrDoMf3sc9676x+BGiTeFYY7i9kGquPMN9CSVGRnAQnkD8DXz7HHdX96scSyXF1O+ABlmdj/ADJrsVt/ieoCqPFACjAAeYY/WgD1X4i/Cx73wZpFp4diDz6SpQREgNMpA3HJ/iLDP4mvP/A/w08T6l4o07+1bC6tdOsZBJI1z8oAU7tqg9cn0965zUtU8eaMIzqeoa/ZiTIj8+eVN2OuMn3r1r4Carqurrrcmo6jd3ixmIJ9omaTaTu6bs46UBuz2eg4waUivnH43a5q2n+PxBZapeWsX2SNikNwyDOWzwD7UkU3Y+jwOD9Ko6zp39r6Jfad5nlG7geHzNu4LlcA474/CvJfgBqmoanba8dQvbm68t4AhuJWfbkPnGTxniul+MHiTV/C3ha3vdHuRBK1ysTsUD5XaeOQaLCucS37OIVSx8WAKOpOn9P/ACLXlfirRNE0O++x6V4gOsSIcSPHa+XGp9A287vwGPetO4+K3ja7jeOTXJdjqVZViQZBGCPu1x8XmmdPJBMm75QoySfpVCPTvhX8Odb1XW9P1+aI2mm20yzLJKpzMVOcKPT3PFZvxq/5KhqP+5F/6AKy4NS8bXs8cbXuvyKxAwHlIA+lanxr/wCSoaj/ALkX/oApdQ6H0R4Nurey+HWiXN1MkMEdhGzyOcKo2jkmt20v7PUIlms7qG4ibkPFIGBH1FedanMIf2eN3rpEaY9yAP615v8As/xNJ45unBbZHYuSM8EllFIdzuvj7oH2/wAKW2sRpmXT5sMQOkT8H/x4L+teE2uuPD4N1HQpCdk9zDcxDsGQMG/MEflX2Frukw69oN9pVwcRXcDRFsZ25HUe4PP4V4N8RPhZongfwGL62mubm/a6jiaaVsDBDZAUY44HXNNCZH+zt/yN+q/9eH/tRax/jr/yU24/69of/Qa2P2dx/wAVdqn/AF4f+zrWP8df+Sm3H/XtD/6DR1DocjrOvyalo2i6YCwg02BkA7F3csT+W0fhX0f8FPDn9h+AYLmVCtzqLm5fPXbjCD8ufxrj/Bvwi8O+LvAGkanM1za3zhjJJC+4SAO3BU5x07Yr3SGGOCFIYUVY41CKoH3VHQD8qTYHlHxhvfCejz2s2t6D9v1C7iZIZuyKhGc8j+9Xheu6j4eu7FI9J0x7acSAs7dxg5HX6V7d8erXSv7O0y/1CKeSSIvHCscgQNuILDp7V4nqdjo7+G01PTYLyJjcCFhOwYH5STggfSsm486bv28jaKlyNK36lfw/f6HZxTDVtPe6diChX+Ed+4roL640S88F6nPpNg1piSJH3fxfNkdzXPaZFpaaPc3mo211O6yrHF5MgVQSCfmP4VrXMumL8Pn/ALPDxzXF2qzxO+4qVBIP06VnUiudNX3XoXTk+RrTZ+pR8I6LZ63d3MV0ZQscYZdjY5zWTaW0U2twWb7vKe5WJiOuC2K6z4cRHzr+XthFz+f+Fc1p43eK7UDqb5B/4+KSqS9rUV9El+RTpxVKm7bt/men2NlaeGdGu5LVJJEQNKwdhkkD1xx0rk9S8b6fq9ukF9o0ksaPvA+0leeR2A9a73UbN7jR7u1hAMkkLKueOSCK4XQ/Al9Bq0Ump28ElqAd6+ZntxxXlYWVFqVWs/e6a2Z6GJVVNU6K930Mcap4ZH/MuS/+Br80n9qeGP8AoXJf/A1v8K1tevdF0fWbiwXw9bSiHbhzIRnKg9PxrN/4SDR/+hYtP+/rV6UbyipKMrP+9/8AbHBL3W05R0/u/wDAGDVPDP8A0Lkv/ga3+FTwa14VidXPhiZmUgg/b36jv0qP/hIdGB/5Fi1/7+mu1Tw1pOr+FTc2elW8N5cQbovmPyt9ayrVIUre0jJJ/wB5/wDyRVOEql+Rp28v+AXvC3juDxJriaaNNeDzEY72mDYwM9NtJ450u4sPD19vQmPZkOOn3h1rJ+H3hLU9J8SwalP9me2COu6KYPnI9q9F8aot14Nv7Rri3gadQkbTyBFDZ45PrXlVJUaWLjGh8OnW/U7KdWt7GXtOtz5/8NTWtv4gtpbwxrbru3lxkfdOP1xXoqa74WHWez/GP/61c3b/AAs1+5j8yCfT5Y+u5LkMMfgKq3Pw41u1mEbvZEt02zg54z9a9TEPC15XdSz8mcuHqVqUeWMLnbJ4g8JAc3Fl/wB+v/rVh+NNW8P3nh7ydOltWuPOU4jjwdvOe30rn38BarEMyzWUf+/OB/SrFv8ADjXLqPzIXs2ixnzPP+XH1xisqdHC05qftdvMurVxE4uLp/gbXwSOPGl4PXT3/wDRkdfRVuw2YzXgXw00weHvGUguNS0+WWW0eJI7efzGzuVuwx0U17ZFeDbgnFeXmlZfWrrayFQg/Z2L963mIF9KwZYlMg46VptcIR96qMskY5A5rz6k+bU6qScdCq9qA3PApCQvAHFLJLuHOTVd5Bis+puk2Od+1U5ZuwP40ksvfNUZ58A4q4xubRiFxP71k3Vxk4zS3Fx15rNnmyx5ruo0urNUrA8mab5mKgLGk3128g7ltZKkExHeqQbAo8ylyBc0luSOhqZJ93WspZDUyyntWUqSBHRaMS17uPO0cfWuhO26ilhkXKj7zEcBu2P8a5fQSJROzdioGTgV1cTsYjGMDZwM9xTprl0OLFO8rlFLeWORIy/mbs4I4xSXcbxRhIuGPU1qBcIEXCvg4OOBVRBJAALqMDJOXB3b89h71u4qxyqV2ZcUjgctjscipwQRhOp6CtRdLW5Csq7hnJJOQPp60Po7MwWLJDdMVDgyueJiybP9XyzHr7VSeGWA5T5h6d6220i7jkJI+Y9h3FQTW8sfLoRj2rOUejNYztsUYbsE4cYrRgKkfIazpbRrmMlGEbH+IdRTreO4tlBkJZQeXUcEeuKwnTdtDW6Z0mnrvu0j2nnnIrtbGEFyx6KK5XQxvlXBR+PlIPJrqrWFyHLNg+natcvpyVS8l1/I87FyvoSunmSq2MqnQ+pqQuI3UDlyaGkCr8n3h37CqIgl+1iUtls84OK9icnB3irts4kr7lg/eP1pDxTj94/Wm16BADlcd6B0pcYpBQB5P8fta+xeD7bSkYCTUJwWUH+CPBP67a5D9nvRvtHiLUdXdCUtIPKQ44Duc5+uFP517P4m8FaD4uWL+2LMzPEpWKRXZGQE54wR1/pSeD/BumeC9OnstNMrRzTGZmmILZwABnHQY/U076E21PmP4o/8lM17/r5/9lFfQWj/AAy8GXGiWE83h+1eSS3jZ3y3JKgnvWV4j+COl+I/EN7q8+r3kMt0+9kRFIU4A4r0uytlsrG3tVYssMaxBj1IUYouCR4Xres/CrQNavNJvPBk/wBotZSj7FBU+4PmdDxXkPiK907UNeu7rSbD7DYOw8m3znYoAHPucZ/GvpvxJ8IPDvijxBPrF9NfJPOAHWGRVXgAA8qewqHSvgn4N0q/juvIurt42DKl1KGQEeqgDP45p3Bo6Hwsz6X8OtGaaCV5LbTId8Ua5fKxjKgHHPFeW+M/iV8PvGFjBa6lBrjLBIZEWGNEOcEcktXuv3RgcADoK8rv/gR4dv8AWbq+e9vY47iQyeRDsVUyckDg8Uhs820j4naR4Ktb238IaNdbroqWl1GcNtIzghVHue9cmlp4l+IXiG4uYoJ9Qv5stIyrhVx2J6KK+idO+DHgnT2V206S6df4rmZmz+AwP0rtrDTrHTLYW9hZwWsIGBHBGqL+QFO4rHynHqvxC8AqtsH1XToI/uxyxkxdc8BgVPU9Kqf8JhZ6hqc1/r/hqx1S5nbdNL580LucY/hbaP8Avmvr2WJJkKSIro3BVhkH6jvXI6z8LvB+ubmn0eGCVv8Alpa/um+vHB/EUXCxj/D/AOKem+K7uHRLTR7u0lig+XDCSONF4ALZB9O1eZ/FjQ/FOpeNrnUb/SrsaWi7YZIF8xVgQZLEjgE8tzjrXsngn4daV4GkvpbGaaeS6IG+YDciD+HIHOT/AE9K6m8tYb+yuLKdd0NxG0cg9QRg/oTSuB8q/EXxhpHieLRbTRbO4trTTLbyFE+ASOAMYJ7Cu+8LeBF8bfBLT7QutvdR3kkttO4zgbyrDjsQD+IFdBB8BPCcU6vJPqMqA5KNMoDexIUH9a9LsbG10ywhsrKFIbaBNkcaDAUf/r5ouCR8Z+I7K30zW7nTLO7kure0cxCVxt3MPvFR2Gc/XGa+ktF0VtB+CD2Ui7Zv7MlllUjozqWIP5/pWrr/AMN/DfiPVLbU7uyEd3DKJHeLC+dg52uOjA+vXtmulvrGHUdNuLGcHybiNonCnB2kEHB/GhsEj5c+Cg/4ulpv/XOf/wBFNXqXx/1T7L4NtNNUNuvbkFjjjagz1+pH610Phz4U+G/C2tQ6tpouzdQqyr5s24YYFTxj0Jrpdf8AD+n+J9Hm0zU4BLbyDj+8h7Mp7Gi+oW0PkJ/D2s2Xh628QLbyjT7nfEJ484XqpDY6A5I5681pfDvxhD4J8TnVZ7SS6RrdodiOARkg55+n619W6RoVno/h+10SOJZLS3hEW2RQd/qSOnJ5Nc3qXwj8FapI0kuipDIxzm2kaLH4A4/SncLHmut/E34d+JbqO71rwtfXVykYjVy4GFBJx8rjPU/nWZ/wlfwi/wChKvf+/p/+OV6X/wAKL8E/8+15/wCBLUn/AAozwT/z7Xn/AIEtQFmeZv4s+Ewxs8D3beuZiP8A2evUvhb4s0XXLO503w/ok+nWNiN2HcMCzknAOSex71Xf4E+C2xiK+T/duf8AEGur8J+DdJ8GWFxaaSsoSeTzHaZ9zZwABn0GP1NLQEjitc+O+g6VPNa2+m6jPdQkoySIIgGHBBySevtXkfjL4oa/42X7CyLa6ezZFpb5O8jpubq2Pwr2/wATfB/QvFXiQ6zcz3FuZFAmit8L5jDjcSc844/Ct3w/8P8Awx4ZIfTdKiWcD/Xy/PJ+DHp+GKEFmeYfCD4YXtjex+J9btmheJS1nav8r7jxvYduOgP1rUf9oPRY5mil0XUVZWKsAUzkV7D/AD7mvNLv4G+E77UJ72aTUd88rSuizKFyxJwBt4HNAWZ498UfiLB48urAWlnNbW9mHx5rAsxbGeB0+6K9K/Z6sZrfwzql68ZCXF0FRv7wReSPxOK2rb4HeCreZZHt7y4CnPly3B2n8sV6DZ2dtp9pHa2cEcFvGu1I412qo9hQ2CROSea83+Keg+D00W+8Qa5ZJLqK25ht3Nw6Mz87AFDAEgnPTsa9IJ4/GvOvGPwsTxl4rttRvdXuV02OPD2QJPzD+4eiAjGeCePyBswP2edMntfD2rajIpWK7nRIif4hGDkj8WP5V61f6dZanb+Tf2cF1EG3BJow659cGl0+xtdLsILGyt0htYV2xxoMBRVjNAJHhWrfF7wzY2+oada+EvIulV4B+7iVVbp25615j8OYJJ/iLoIjQsftasRjsOT+le/an8FPCuq6xd6ncNqAmuZWmdI5wqhmJJx8uevvW34X+Hfhvwhcm50uyIumG3z5n3uB3Az0/DFO4rHVYAPbAr5X+N0EsPxMvHkUqssMToT3G0D+YP5V9UZ7YrB8S+DdB8WwxprFiszRDEcisUdR6Ajt7Ukxs+c9R+K17qHw5i8IHTYo1SNImuhKSWRSCAFxx0HOa7H9nbTpFuNa1Fo2CbY4EcjgnksP/Qa7FPgd4IRwTZ3bAfwm5au50nR9P0LTo7DTLWO2tY+VjQY5PUk9z70NisfOU/x18ZxzyRiSw2q7Af6N/wDXrC8UfFDxF4v0j+zNUa1Nv5gl/dQ7TuGcc59zX0ifh14OZizeHbAk8k+XQPhx4N/6Fyw/79U7hZny14T8Y6r4Mv5r3STCJpovKbzY9425B6fhVfxL4l1DxXrD6pqZiNyyKh8pNq4HTivq/wD4Vv4N/wChcsP+/VJ/wrfwZ/0Llh/36ouKx866B8XfFHhvRbfSdPazFrACE8yDceSSec+9dJoHxs8X6j4h02yuHsjDcXMcThbfBwWAOOfevZ/+Fb+DP+hdsP8Av1Utv8P/AAjbXEdxB4esY5o2Do6x8gg5zRcdmeWfHXSvFOs6paNbaXPNo1rH8kkPzgu2NzMByoGAMnivLNU1uwl8KWWi2kEySwSB5XcAAtg56E9z+lfWfiWDUbvSJobJUIKkyZyXYei//XrwS5+HOkyXcskr3kbu5ZoiwXbk5x0rkrV4QmlNPTVHTRozlBuHXcwfBOkpq3hbWbabhJHUI+PuuASD+o/OuV1rT00m6+wrcNK6gGQ7cLu9vX617DFaWmk2CWNjGIohzwckk9ye9ZWp6BY6zHi4jAcDiVOGH4964YY9Ks5P4Wd8sA5UUl8RR8BWJttBMzDDXDl+fTgD+v51wemj/irrTp/x/J/6GK9jtYEt4I4YhsjjUKo9gMViQ+CdIt76O9T7R50colH7zjIOR2rGjjYKdSU/tbfiVWwsnGnGP2TeurmOytZLibd5UY3NtUsR+VclffEfT4YmWxt5Z5OzOAqj+tdmVDAhgCDnOa5Fvh3pT3skzSzCJm3LCuAF9s1y4V4dXde5riFWdvZWPPG+3+ItYdwhmubh8naOn/1hXr9r4d0uCxt4HsbaR441RnMYO4gcn8am07SNP0mPZZWqRZ6t1Y/U1e9K1xeOdW0aekURh8J7O8p6tnjnjW0jtPE08UMKxR7VKqq7R09K6DTfH1jY+G4rIwXJuo4fLGFGwnsc5z+ldlqfh3Tda2SXtsHZflDqSpHtwagtfhp4dk+Z7abb6ec1ayxuGqUowrJ6GTw1anUlOm1qcJ8Norm48Y2ojkkWGMNJMFY4IAOM9upHWui+LuumWW00WJydn7+YA55P3Rx7ZP4132k6Bpego66baJCX+8+SWP4kk1l634D0XXriS6nSaK7kxuljkPOBgZByO3oK5nmNCpjVWmnypaevdk/VakaDgnqznfhn4f8AO8L6vdyqc38bW0RPHygHJ/M/+O1wPhK+Ok+MNNuX4CXASQH0Pyn+Zr3/AEmwh0nS7bT4MmOCMICe/v8AjXND4aeGzcvcSRXLs7lyPNwAc54AAp0c0p89Z1b2nt+X5Cng58sOTdHL/GPSo4NQsNShjCrOjRSYGBuU5H6H9K0vhrPDrngvUdAuSCELLjjhH5z+Bya7XWdE07X7OK21GIyQxOJFVWKnIGOoNN0rQNK0TcdOso7dmGGZckkdep5rF4+MsGqLT5lszT6tJVnPoz5/iku/DXiNW27bqxuOR7qeR9D/AFr6QsNRh1CwgvIGzFOgdTn1Fc9feCNC1LWZNUvLdpZpANyF8JkDGcDua3beKCytkt7aJIoUGERBgKM57UsxxdLFRg0veW48Lh50nJN6F3zCRUbyHFRb8DrTHevNSOuw9pOKrSS8U15Peqzyepp2NIobNLxWdPN1qWaXrWbPL15rqo07s0SsV55eTVJ25zT5XzmqxNenCNkMcTSbuabnik59a0sK4/caUNUeaXNKwXJg2Kfv96g3Uu6lYpHQ+G5cyTxkj5ioAPrXXL8vJbD5C4PeuJ8NkNLPj7ykMDXWxus/mDf85QYXHQetYS0kzlrr3jVsyzea7Sb13YQ+lE4LAI6g5OQT6+tZkF49rdpDLdIw2kumzGD2x9a0luVXzHmAwmORzuzW0ZJo4pQadyTzPKtzHCVjfsdh249D/wDWqzp93OFUXqBcceYg+Vs9Bn+FR+dZ9vqEc9s00jDAbGFU8H2q+l15TqV2uGHQnqK0WuqZnJNXTRuxPbXWwoRIGBxgdR647D3OKnOnWwQ7lByM+uawLW90+aXcgw/G8ISCcdM+v0q1qGpSxokkUok3HiIrwwrXniouUlcw5JcySHzaDYO27YoDHoKYmj6fkZjfngYP6Yp/2qZQAFDP5e7ZkAyP6AdlqI6vDa3DR3CyAqmRxwWPU/4VnKVJatWNEqj0TNGx06xsCZYIlQgHLtyfer3nhmwBgE/nWPH4h025jCF2jAwuGXp70RalA90q+aDvm9OAKtYikklCSM5Upt3kjYMinp1PaiEs8vUfKQeO4qlbb52iaRw5LvkoeNvbNXTEuEhR9mMEAcEjP8q2g3L3uhlJW0Ht94/WgcCkbljS5r0TIO2KSjIozxQAlLSUUALS03tSg80CFzzRke1HbPvSYoGLgZowMikxx70vcmgBcDODQMetJ3pRgigQ3IpD1xTmIz26UnWgYg6UbaUUuBQA09aB0pT1pDQAo6Ud6KOlAABxzzSjj1o9aM4zQIX+Kk9+aXNJnigA+lJ1HSjn0oAIHSgYoBxzQRxijDY570pB9O1ACdBRilxkUUCE70UvagdaBjcmjpS0mKAA0lL2ooABS0lBPSgBaT0oozzQAdzS+tJRzQAHqaTqMUvANLnkUAIAO1LzR2FFAC0opOKXNAgxS/xdKTIpcflimAnI7frVW+0uy1OPZeWyyDOd2MN+dXO1Lj3pSipKzGm07o8/1L4dNNdBtPvAsTElxPzs+lc1deGdV0+7kge0kmCYxJChIOa9jGSen4kUu5gMdsVxVMvpT20O2nmFWOktTw9keI4ljeM/7akUZAOCRXtdxaW15HsuYI5VPZ1zVJPD2kQ2kluljGI5M7+559DXDLKZX92R0LMotaxPJe1JXozeB9FjCu7yrHHu37pMbvTJ9q4c6ZJI95JbuslrbE/v2O0MO2PU+1cdbB1aVubqdNLE06t+XoUaeiliAOta9t4bvbkRRqyi6kXzDbtwUTszHtn0qS/0N9LmitnuElldd0iqP9X9fWsJ0akY8zWhqq0G+VPUowQeYQAMKv61fC7VCjtSgCJNoxTc81wTlcL3DFOHFNzS5OOKzSGKTzTS3pTS1JnAqkhj9/FBbNMzyKTnNVYLDi3FNz70hPNMY0JAOzkVGzYoLVC7Y71VhoHkqpK/WnyPVKaXrzWkI3ZaRFPKOazZnqaeTrVCR816NKFiiN2yxqImh24PrTM5rrSEOzSZpM0UxC5yeaOM0zNGaLASZoJ4qPNIzUFo3vC7H7bMvH3e9deg8qZpCpCquDgVw/hqdY9TdW6SJXewsCNvcdyeo9a5aq985q+jKt5bW8226MhLhkwFPQfSmLKklobNEkjkYkIc5L496eY90hkhVSwfB/2sU63aUBECoF2liH4YEHmsb2ZHQljjMbRxpD5cbJ8wzyzDqM9qBOkfmbQCccHd+g9Ka0c1xuUs/llcY6ZPYj0qqPs6K6OwhJOPmOQfUYrRT7Ecqe5YEYYmeCSRZO65wR/jSx3F+tzDiRjsydz8ZzTGMIuUMW6R1C7FU8e5zU098n2bMZVmLbT3xV3FrtYv6ffLFdNcyssqMcKw4x9e9adzqCSPuQqB/tciuGKTSX8kzNtUjaiKeMfSrh+aEx7iFIxjPSmqtlYmVBN3ubNxdNIyhLRGJyCQ2BirOliG6ZTK6ovYA81y7PMRtkYbV7DvTbO8SKGNEMgIXcCV5NZOMJS5mi/ZvlsmemadBplm5a1kZnPHzMeK0IvIe7BAMkpG1jngDOa4DR9c89ispAI6DGDmuhtdTf7REGQENIBx2rto1YpJJWRw1qE03d3Z0h4J+tB6UHqfrQa9o4BAMUdqWkoATpS45qnqmqWmj2TXl7L5cKnBbaTz2HFee6t4/utbl/s7QVW1R/lNzcOEIHqMn5R+dROpGO5UYOWx6Uk8ErlI5kdx1VWBP5VL3rwzTJJdJvZLvR7zN5aqRcJOVCzDJzs5ORx9e9d9oXxH07VZYbW5hktrtyECqNysfbHP5iohWT0ehUqTW2p2p6Y/nR61538T768s30wWt1Pbh9+4xuVz93rj61WXwvqbIG/4Tccj/ns3/wAVTdTVpIFT0TbPTaGdEUliAAMkk4A/GvG7tdU0XxPptmdfmvkldGZo5WK8vjB5Ndn8SNS+xeGGtUOJrtxGoHXaOSQPy/OhVdG7bA6eqXc7AMrDKtkHuKRZFJKhgSOoBrzHw1r+s+H7zTvD99Y21vbFTIzHO/y+WLEhsdj2rH0bUtdk8QX+uaTpq3jTuy/OCQmSDwARzjFL2y0H7J6ns/PXHTjpTTKiOEZ1DN0BYZP0rhfDvi3XNY1240q8tLW2kihdiY0IKOOnViO9crfa5c3eraHcanuNxaTOkxCY3bX7AflTdZWuhKk72Z7OKb5sfmbPMXd6bhmuC/tvxYfCkesQxRyl52lMbL8ywA4xjv3yevSsXT72XUPiva3kttJbSSoreW/Vf3Hr6d6HVWmm4KnvqetEVFHPDNu8qWOTHXYwOPriuV8QR+Mm1RjossC2ZQYDlM579a890RvEOjXM4t5odPlmxn7Yyx+ZjP3d3XrRKryu1gjTur3PazcQrKImljEh/gLDP5VKOteM3OneMH8VwXEsJfUAAUnRQYxxxkgY9a69dR8R6H4d1S8190Z1QLbeXt+8cjsPXFEat90Dp22Z2wkRhkMCM44NKxCqWYhVHUtwBXlXhWbxD4c0mW5+wwNp7oblyz4kI25HfjoO3epdR8c6jq2g3Ua+H5Vt54mXz1JKqO5ztxxQqytdg6TvZHp6urgFGVgemDnNKM7uOleKeHLvUVutHltbO98uBjG8kbExyKz854wOpz647Ve19bi/+I93YHU5bOA4YybyFQCMHOM/Wl7bS9hulra569nA6UA9q8jn0Swht5Jh45SQopbYk2S2BnA+frWJIA+hzahba/dNLHIE+yyvtcrx82AxOMkDNJ1rdPxBUk+v4HvAyR9KDk89OO/FeYa5e3MXwu0eeO4lSYsgMiuQx+93/CsrToNTh8X6PZJq1xceckdxIC7YVSCxUjPPA/UU3Ws0rf0xKlfW57EGA4LAH604dAc15fr02Pi1po8whQYhwcDv/wDWr045zgVpGXM35ESja3mOzSdSaTmlNUIKWkooAO1BooNABSE+1LmmnoaAFzSGikPSgAzS/jSYpwGaAAdaCOlL2zTfSgB1LTaWgAJ6UtJzx9ad160CAd+KUDijjvTgp6d6AE4o7Cl20vfApgIenejHvS4HrzSfxZ7UCAUpBxnPFHSsjWdVa1uLXT7XH2y8bCt/cXu31FROahHmZUYubshdR8zU7eexsXRZkwHklXKLngj3OKqWvh427RI0YNrZc21uDxLJj/WN756VrWVj9iskt5JmuHRixkk+8T68VX1nWodItS7lWuHGYos8sff2rCcYpe1q6WNYSlf2dPUZq+qw6Rb+aUU3sy7VQAbmPv7VxJdnkeWZt00jFnf3oklnurhru7cvPJxn+6PQe1MbmvmcfjniJWWy2PVw+HVJeYjMGYkKBSUdDTScV5qdzqsBNIWx0NJmm9TiqQxciuk0XQGyl/qG2O1UblVu/wBfaub2561fu9Vu721itpXxFEAMA/fx3NdWGqUqcnOor22Xn5mNaM5Llg7X3G6jJayajO9mnl2+7gDv6kelU2ak6+3WkPXFYzlzScu5pFcqsNNMY09uKhY80kWhrNjNQSMCKe7VVlbArRK5SQyWTAqhPJ1qWaT3rPmkHPNdlKBZFLJVORqklbPFVXau6ERXAnP1pCaaTSE1qSO3UE0zNIXxRYY4tSbqjL0m6nYCQtjpRnNMDUuecCmWkSQzta3MdwvVG5HqPSvR7S9WW0SVNrnjax4yp7V53CI1YNKM4PT1rodK1mFJ0tHAVH4TPQGuevFvVImrC6udJpkmInYnCGRiMj7uP51ctFRgH2ghgdp6/Wq9mTJZkKwWSMlOR0NNS5+zkx3KbP8AaXpn1rkucrV27E0jbCBs3DJDMT0xVdG2eaGYFUO4F03MwNOW4QyAPIFU/wB4cGpLARySOzSAujEID796VwtZCWTK8OAqr5T5BAx1/wAahMHlyB+OWOflxkHtSRQn7aGnL7lG0ktjcf8Ad+lOvVnA3eeHVDkK3BI/rV3FbUp3ZaDFyjgrGPmRu/09Kso8ZtxMRsjYbiSarymNtqnLBj09KYbcGUxj+HnDdz9KFPoyuW6LA8t0Lhhsx97tUbSQTKsqtvUDAYA0jARo0RIxjn0x6VDauq2kYEaKpyAOw5/nVXTWgrFyAQycsSjZ+VvWtbSJz9tt0M5UiVeG5zyKwdw3gHBGeMdhWtp+1tQsyo6TJkD6iqh8SIqLRnp7dTSHFDfe/Gg9K+kPCDvR0xmjFHU80AQXdnb6havbXcSywPjcjdDzmvD9Ptom1fUY/smnTIkjBVu7nylUbj93DLn/AOtXuzMFQseg714NaXmki51d762a4eYt9kYKTtYk8kZHqK56+6N6OzNdrK3Cn/iVeHBwf+Yof/jla3wusLW4+23E0EbzQSq0Tnkp8pGVNc5Y6HqyaKLxfD8N3DICFdlbzE5x0BB/St74ZXltZ6hPZSTXS3dx1tvK+T5e5I5H5CsofGroufwOzJfG2saHf6x/Z9/a37S2RIDW5UZyATWPp+meFtQtdQnSPVEFlF5sis6ZPOMDirlzq8ei/E/U7qS0kulwV8uIAnJVef51R0mdbq38YzqhjEsJdUb+HLk4/kKG7y18wStHQrW1x4VtLiG6S01Y+U6upZkxkHPp613PieytvE/hmDX1MkJtreSeNT1+6cfkQDXFN4hhPgEaP9gn8zI/0naNn389evtXcQMU+EgIVmJsGXCjJ5BH9aqFmmvIU7pp+Zm+EfDtr4h0BtRvri6e8mD27TGUkhc9s9O4/E1ia9ZWfhnX9D0+OYvFalZZ3PGSz55Gf7o96i8O63rfh/T7e9ktpm0aJnwANod2Bxk+mcc1e07wpqPi+31HW9RJjuLhf9EDcAtng/TAxj3paSilFaj1Tbk9Dt9O8KwaZLqdza3Urz36n945zsJzyMe5B/CvJ9ZiuLXxGlnPrTXDwOFN0SxERz8xHOePrXceD9a1a5iufDl7bzrc20LKtwBzGMcbv6EZziuZvvCy6Preg2d8RNPePuuc+7D5fenUtKK5UKF4yd2bo0zX49Fs7/SPES33lyFwhfhwwA53deOMGqX22KH4tR3V5c28YCL5kquBHu8gA4JPrkVu3Xwu06Vo1gvbiGFVwVGGLHJOTnvg4/CuRXwrZR/ENdAeSZ7XAJfcAxzHu9PWiSkradQi4u+p2Pj+5C6fYXkOtvZxsfl8kktMGxyMHpjPNcNq2k3ra5pVi+rvevdhGikbcDGHbA4PPv8AhXV+MbbQNEn0y4u47m5mghEUFsWJjkVeF3E8cdcDk1R0sT2dy/jXxHDKFZwkEaJyueAcHoABgfWiavLUIO0dDO1+PWPDGqWUV3r1zOkuHZlkb5VBx613upa9omp+Dp7yWWRrCVfKk8tRvQk9MdjXF3moQ+NvHemi0tpHtYwodZV/hySc+3Su60Xwpp3h6O+aNXmjmbfsk+YKq9Fx3PvVU023y7Ezasr7nlegzabHY6qsj3H2x7eVIF/gKFO/vxWhpV3rcVlYaa16Dp99bXBSFUXgKrd8Z+8PWsy0vru20LU400/NrO5D3Bj5RiRhd3bvWlNZaj4cfSbueX7RM1uRZ2wUkoWU5B4xgFzxk1ijVljwTf6lfajpOl2U0sMFqZJrjYeHUtnBH5fnU9+lrJ8WbuK9dVtXUrKWfaNph9cisfQZ77StSj0aOKW11KS/i8xx18sZBU+o5zV3X7uzsPibeTX8LzWo+SSNBnIMQHf61Sfuq/cVveduxR1LTdM1XUZYfDVq4traNpJrl3Yg4HUZJ9OPWmW2mWw8AXmqbW+1falg3bjjZ8pxjp1HXrVrUdX0SSxhtNHl1LTYVDCcIu7z8/3sOM/5HFRXWt6TF4LbRLJbppXnEzySoqgn8CcVPu3bKTeiNvxAP+LTaN/vp/Jqbbyf2F400S7VhMmoWkSuD1QkBePyB/On+IP+STaN/vJ/7NVDVNBh8OaZZ64klxPPOFNuoUeXC5GQSe+M8DvVu97rokQrWs/Mo+K9TaXx1cahANyWk0YDL0+TGf1Br2m0uY720huoWDRyxh1I9CMiuF8P+B2fwfexXoK32oLvy3WMryufx6034e6nqdrd3Hh29tZMWuWEn/PLnofUHtWlO8Za9SJ2lHToeiUGkIHpRnpXQYBS9qSkoAWg0HtRQAUh5FLSY4NAC4pOad2o4xQAgGRSr2pRR2FACUneloNACdKUc0gpaACpBTKdQIXH8qd05/WmAUvNMBSSWOTmk/WjJwaO1IBR196KTORkCqeparZ6PZNd3swjiHA7lj6AetDaSuxqLk7IbrOqJpGlS3jLvZcCNCfvNXM+ElutX1e61i/Id4x5Y9Fb2+lcxq3iKXXdS3SRbIceVbxF8CMk/ePqa7dNR0jwlZRaW8zvPHH5jAKSXY+v415nto1qvO3aEfzPQdCVGlyJe/L8jX1bVYNIsGuZvmPRI84LtXn0k82pXj392QZH4VR/COw+gpt1fXOt35urk4ReI4+yD/PWnFscCvHzHMHXfLH4V+PmdWGwyorX4mKzZpM8cUgoUZGK8ZyuzqsIelN69akK0hHFMYznHSpngWOGJjIju4zsX+D600cHHegADoB7471SloJibcDpSBeKcfrQTijmGRkUw1IWpjkH2p3GiKRsiq7mpHbA4qs7Y71Su2WkRyP71UmepJJBWfNKOea7KNMoZNJWfLJT55evNUpZK9KnABHf0NQE801nqIvXQoktku6ml6iLU3d707E3Ji1Rl6YXqJ5gvUimlcZPkEdaQyADmqT3Y6LzUYZ3PzE1oolIv+cGHBqRXwM1UiXHSrKjPYmk0jRMmV3bocCpkQDnnPrmmIrHjH5Vp2WnvIQWFZTkorUGzW0jWpIyFutxUjAkHaugMiXCFVIdTzn0rDS0REx3qS2QrcoisQCe1edNKT00MJRW6NoRQiENcgkZ6KM1atrS2wJbN92ev+FUUlaJCJATg4DCn28qxSNJGTtc/Mg4z71lyqOjRj7zWjLk1pC6tNNuV4wXEgPzDHv/AErHM73jJK6qqAfIpOSfcn19q1nv4GRo5VYhvl49KzJoBboRw9uTwy8Ff8+tVzJaIcF3GyJuzlgFYYApbS3d4GkNwq/L8u45Y496j8tSwMTqyheCzVMLK3SKLafNkV8H0b6elUhvQgxHNCkglYSg/cbsfSkgVVtl2tvKk8t61dliQlnQBX6DNV1eNoQJFWMkkALwCfWqTFclQ5HzRrnuw4q/pf7vU7ViEP71Rg5/vD9azYhLbggAypnhs/dHoavae0i6pZsVDq0qYx/DyOauHxIzmvdZ6o33vxpKVup+tFfSngicetA6ml/Gk70AGaqW+mWFpIz29nBFIzFmZYwCSffrVsHI7cUm7sRRYAx3qP7ND9o+0eSnnbSpk2jdj0z6VJupMk0AQJp9ol694lrCLpvvShPmP49aYukacv2jFjbg3H+uIjA8znPPrzVwdeKWiyC7Kw06yFkLMWkP2YH/AFWwbOuenSpY4IoYBDHGqRAbdgGBj0qTOBR60WAiktoZbY28kSNCRjyyvFSAAAADAxwAOPypaKAGeWgkMgVQ7YDMBgnHTJ71DPYWdzPFNPawyyxf6t2QEpz2qwe1BosAD2FVf7OsftxvjaQm6x/rtg39MdevTirVGOccUAQT29tdhPtMCS+W25N6g7W9adLEkyGOWNZE7q65BqUY9KTqfSiwEMMEMCkQQxxA9QiBalHXqfwpRijGMkUARfZYDC8Pkx+U5JZNow2eufrT2gidoy0akxnKEj7p55HocHFPFFFgIjaWzXK3Rt4vtCjAl2jcB9ahOkac1+b5rG3N2es3ljf0x1NWs8UuaLILsb5UX/PNfyFQ3Wn2V7CYbq1imjJB2uoI4qx1paLILlQ6bYtZpaNZwm2jxtiKAqPoOgqd7aB4VieGNo0xtQrkDHTj/OKk69j+VFFkADmmrGiu0ioqu2AzAckDpk96XNFACk0A8CikHSgBaQUtIBQAv0pMGlFKeh4oATHFLgkc+tJSjtzQApFIKD35o7YoABSHNA6ClU0AJSikpRQIO1GKKMUAKDS96Q46CnAe1ACDIpfx6UuKQdOtAB60cZxn1o9aqanqNtpNhLe3T7YoxnGep9BQ2krsEm3ZGb4s1z+wdFedfmuZGEcIzyG/vfhXles+Ir3xBdpNdbUWIbY406L6n3J9ah8Q61da7efa7xsFMiONfuxj29azInWU/Jjgc4rxsViHUvy7H0GDwsaUU38Rsadcra3kc7wpN5Zysb/dJ96vmefUL17i4ffLKcse30FZECncAQc1sxARR443V49ebUeXodcoq9+peRljQKO360bwTVPzKcJK8yXM2LkLgbI4pQ2OlVhIOxxQJTU2sHKWw/FAbPWqpb3pwkNF2TylrIxSZFQeaaaZfei4cpOTio2kweKiaTjrxUJko1Y1EmaQ561GzjuagaX3qF5fetYQbL5SWSQ568VTkl6802SXtmqcs3Xmu2lRGkE01Z002M06abk5NZ0849a9KlTGwllyDzVRnz3qKW5UZyRVN76MZ+cV2RgyGXC9Rs1UDf5OEUmkBu5jhU2j1q+TuS7FtpB61E10i9DmkTTZpP8AWSGrMelRr1GTReKFcz3uZH4UYpFhlkzuBNbS2UagYWpVhAOAKXtF0HqZMVi2eatpZgYyc1f8oYqRIh2qHUYyoluOOKsRwc4AqwsFaNnabmGRWUqlhkdlp+45Irbit1jUADBqWGERqBjAqQ8muOU3J6kOVyo/yg1HZMW1KJe1TTqMVUsHKaxb56FsYpwWoP4WdVHAGj5HuaVrFHP4YqxHhdqg8g/nU4wBkLVyimji5mmZTaXKMmKTPcK3IzVEy3aMN9rK+Dhgi5x9RXTgDAwaCgLZxz7cGsXSjctVn1OTa3srlsBTGxwSD8uT6U9re5sIhshLwAcFWziulltrectviVh0OR1rNn0EMSbK7ltpD053L+RpqlLoy/brZmRLfxNKoB+cjOD2qOIxiIl1+YyNwDkGmXei+ILZm23UDuTkt5Oc0WOm+JtrrNpdteRs2T5fylfpVqjIvnhYuooePMS7nYfcXv65rX0yJRfWhPyuJEOPxFZLDVrUKo0G846Bex/rWlo9zq51C33+HrsKZly7H7ozyaqFOV0Y1JJxdj05up+tBxQ3U/WkPevpDwgxRxmjjNKQSc5oAaF55oOM+tLnrQccH+VAhoWlxjk9KY7iNck1VeVpOpwPamlcTlYsPcIp4+Y1A11IemFqLv1wayta8RaZoFv5t/cBM/dReWb6CrUURds1zLIf+Wh/Ok8yT++fzryHUvjPE4lj0+22hSQJWbPGM5xXK3Pxe17dvgulGU+6I1wD9KqwWZ9EieQfxfnUiXjD7wrw7RPjmyKI9asQ53AeZb8HHOcg8HtXqmg+INO8SacL7TZjJFnawIwynGSCPpSsgu0dIlwj9D+dSnkZHSsrHtTluXh+9lk/lUOJSkafeg4qOOZZV3qwIqT2zUlieuKXOaO5+gpTwO1ADT0FHajIyBR7ZFAC+gpKTqB+NAIx36UAHPPNLnAyTgetRTSrEvIyewqjLM8pyx49KpK5LlYtveov3RuP6VXa8lY4GF9gOarsyqpZmAAGSTxXBeIvifp2mCSHTVW7lX70h4iX8e/06e9WopEXbPQPOlY8yMT9aTzpB/y0b868Buviv4juJwYLiOONTnakQIP5g1qN8YNUfTAsdnELpOHmHII9dvQUaD5We2rdTKcbj+NTJfkffUY9q8P0/wCLmpRSK17bwTwE5ICmNh9O36V6jomvafr9mLqwnDjHzofvIfQjqKLINUdRFOkvRvwqUdKxAcetTw3zQsFkO5fX0qHGw1K5qUuaZG6yIGU5Bp+KksOgpaaaBzQIXBJ7Ud+etAFBoGKTxj2pDSDFJk8ZFADhnkelNZ1T7xx7VDJPjhDk+tV2PGWP4mqUSHLsTtc/3V496glvBEFMsyxhmCruIGSegH1rz3xR8W9G8P3VzYwxTXd5EpCsgBj8z0Jz278V4t4j8faz4kuPMnuXihEgkjij4CNgA4PXtnrV2SJ1Z9F3vj3w9Yh/N1iFmRtjLG245/D6VDpPxF0DV55orXUNpiAYmX5QQTgYz1zXymWYcgkk9SRQJnQjYxBzng9D60aDsfa6XbEBgQynoe1TJeKThhj6V8n+H/iR4g0K9gk+1SXMEa7PImbKlf6fhXvng/xzpvi6xRoXWK+APm2hbLJzjrjmlZMLtHeq6suQcijtWUHZDlG2n61bt75HOyQhHAzz0x61LVhp3LE0sdvC80rhI0G9mPQCvFvE/iqbXr523bbKJyLeMcDH94+5rU8eeNIdVDaPpsjG3En+kzg4WTH8I9q85vJWE5Ct8uBXm4qrzvki9D2MDh+X35bj7m65POapRXslvch1OAThh2xUbEnOarvxnuTXOoK1j0ztLbUo1IZnR1xkEHmrQ1OBz8syn6sK87KsRkZH41A8PfnPsa55YGEnqzTnXY9SW54zkH6c1KtyMc15KslzEf3c8q/RjUyavqkPC3j/AI81lLK77SDnXY9XE49akEq+teUjxLrCf8vAP1Wnr4v1heS8bf8AAayeUz6Nf18gconqonA707zM968tXxlqgPzJEf8AgJp48a6lgDyofyqHlNbpYLxPUC/vTWkA7ivN08bX5+9axN+dSr4wvm6WWfpmo/sqst7FKKZ3zSDuajeUetcSniDWLg7YrDk+xq1GfElyBthWPPtT/s6Ufikl8yuVHStKDnmoJJwOM8VmRaFr9xgy3QT6CrKeEXIBurySQ+garVKlDeYm4rqV7rUoYuGlX86yp9WjJ/dKz/QV0i+GrKMZWEsf9rmnf2OP4YgB9K2jXoRFzrocVNd3kw/dwEf71U3ttQmbLPtHoBXoB0WR+FiJ/Cj/AIRm7kPKYFbLHU0ZuV+p58ukszfvHZjVmPSYlPKj8a75fB8m3Ltipk8IA/xg1Msxp9zO8e5wiWcSdFFSCHHoBXbnwoq96iPhDLcO2fSo+v0n1HdHIiPjpmnbMdc5rqj4Oum4jP51NB4GvC+HkjRfXFP65S3uDlFdTkNhYdMVIltk5wcV3SeCFUfNdnPsKf8A8IbagfNdyE/TioeMp9yfaQOG8pRwaXyzjAGK7CTwfAQfLvOfcUieFAh4uVJ9xS+tU+5SqROdtLMuwJHFbcFoI14FaiaHLEMcYHTFOeyljjycAVlKsm9yXUT2KBTDCmlcfSrHJ49BTJCsKbj096E77CuUbs7I93GKx7aXbqls+7jzRzVi7uGmc/3fSqUoIAZRkqQa6KasaqOlj0NAqup6nkZqwM4IrPsrgXFrHKp3KyjBH61eByBg81Z57WpIAMD27UoODSHGOOtOAwKyaAZyAABxmnrKNwX0pvBODzmk6IwUYoUmgauON00Z4H4VZsL6OG8SU/KQckqcZ+vrWc/3Md6rseeKtVWncl000eiLfRyqHSQEH0qeKUOVwc5NeZGWXyysczRnHUGp9J1TVLW/giFwZImkVSD6ZrthjU2ro5pYN2bTPRWHP40hpzdfxpvbpXrnCHfpS8elNwfXiigA4/SkciNCT+FL3/Cqc0hkfGeF6U0rkt2GOxc5NNpTSVqZGT4k8QWvhnQ7jUrojEakJHv2mRuyivmHxR4qvfFGrS31wNu4/LGGyEX0ru/jDrNzrPiSPQLZWMVkoaTDZDOwz07YHHWq2ifDCa4s0lmPlsy9KiU1E3p0pT2PMgsjD7rc9+lNMLqRkEZ617hb/Cq1gUt9qfeeny9KpN8Kd05Z7nev4/yxWftYm31WZ40VZeSCM/rWpofiLUdAvobmyuZIxE+/ZuOwnoePpxXo+ofDRolLKfMQDjArgdZ8NXOnysRGQueBVKaexE6Mo7n0h4L8WQeL9BS+jTy51OyePrtbrkexro8f/Xr58+CmuPYeKJNJYL5N8mQTn5XUEgflkV9B1oczViq8r2D+enMJPzj0962YJ1mjDqQQeRWcQGBBAIPX3qhY3B07UTZyE+U/zRE+npUyXUuL6HSZ+c/SlJ+UcU1OXz2IpcYxUFiHJzzSZOTxT8Um3jPfNACA0ySURLu79qkOAPas2aQyOT26CqSuTJ2GuzOcscmo5JEiieWRgqIMsx4Ap9cN8R9Y+z6YLCN9pkXfL/ujkD8SM/hVkRXM7HH+OPG11qvmWlpJ9nsVOAA3zTe59vavNjFc3twtrEGKZ+6P89KukKga4nyz52qrds//AK/5+lej+BPCisiahcx8ycpkdRUznyq50U6XPK3QxNE+Hkt1ArXLvEp6hRyfxrr7XwLp1raNAEyGGDxzXdJaLEgAUY9MUGBSc7a5HKT3Z6MacI7I8d1j4eNbpJJYvuUfNsIrl7Ce+8P6kksEz2twh/A465HcetfQU9qCvQV5/wCL/DEN7A7Iu1jnBH8LDvVwqtbmNWhGSutzrfBvjCDxRZMsirDfwj99CDkf7y+2TjH/ANaumPIIr5q8L6xdaB4lilclXgk2yjPVO4PrkGvpRHWRFdDlWAKn1BrrTuebKNmMjum0+XJOYGPP+z/9at6KRZUDKcg1huiyIUcZUjBFRaRetbXbWEzZ28ox7rWckOLOkoFIOeRS1JYtFFFACYqvNKclVPHepJpNicfeNVKuK6mcn0Erzj4u+KH0TQ4rG2nMV1d5zt+9s/wP9K9Hr50+LV3LqvxAltVyVto0hAByM4DE/masUVdnnY3zu2SXLHcc5NWYtNaRCBu3dVUiu88D+Dkv9RaW4jzBH+pr1OLwrp0fC28fbPy9axnVUXY7KeHclc+antZUO0xvxUYgfcFKnk9a+lZ/B2lzqQ8CnOMnHXFV5fA2jEDFqgx6DFSq67FvCPoz5y8ltxUBsirmmaheaHqUF9asUkibcMHGcdq94bwPo2SfskZPqVFc7r3w+sHh3WqeXIBkECmqyM5YWS2Z6Z4P8V2ni3RY72DEcwwJoN24xtn19DitLV9NXVtMns3leLzVK+Yhww/+t7V4H8J9Wm0Px0umOMxXuYHBOMMMlT7/AP16+isVs7NHJrFnz9qdpdaPqUunXSbZIjgejr2I9jVNj5uDjnFeufELw5/a+jG+tkze2allwOZE7r/h/wDXrxuGRnDY69q8evR9nLTY97CYj2sddyR0OTULKvcVsw6PLcIrjJ3dMVci8NsRk5NczrRXU77nLGInoaaYx9fpXZr4ZB4wT9Ktw+FIx8zqAKPrMB3SPPWhb+6ajNnO5+WIn8K9Vi8NWgXlQT71cj0O2UZEY/KpeM7IXPE8fj0e7l6RMc+1XYvCl9L/AMscD3FevxaZbLyECj6U+5hjSE+SgyB1xUSxs7aIXtY3skeXW/gG8lXLsEH0re03wZZWyKk8ayyHqTUF3PfvdSIbh0QHoK2vDJPkTxtIzFWDDcecVhiq1b2V+b7jWTaVyxB4c05OBax/981pQaRZJ923jH/AasjHUVLmvDdao370mYSnJ9SM2NsjgLCv1Ap/2aLHQflTi4UZNRNexIevNHMZ3kxxt0A/nTI7dDzgVE+ox4PGafaTiVffNEmx2la5aW1iHbP1pywR5+6KVeakGAKSVzNtjBEEOQBTiOlBcY5pjTov8Qq7WFqx+z06VEBlsggD2qKTUo0BwRkDiqtpdlSQxyGPNTKVi1CTRqLCuQRwamEag9s1EjLjcpyp7+lTA5Az370IybZIqjrSE4NJvOMAUYzViGls1GxY8VLikxk80rMaZSaIknIqCSE9OvvWpsH1ppiBNFi1Mz/OkijClSVHY1mXcs7HCZA9M1vyQZ96hktgy4ZR9QKrmZUZpHMqZI23HOD1FUL+SVm29ErqnsR2HFUbrTPNTG3itqNfleq0NlOLZyjbVGRVaQMynbV68sZrObJRimarH5h6DvivUhJNXRrc0PDWoLG7afKxBzujYn9K7CNiyjkfWvOXRlcPHwynIPoa6XSNeWdRDO6pcgYOeN9avXU5a1PW6OoTk5HT1qXORVaK4yuzGKlViORUM5rMVQGZgB3xSsAD0pEJLnpzSueRWa2GVpPvGoWXmp25JqJumaRZDgeXknrTrPH9o2v/AF2X/wBCFMZvkUVJYj/iYW3/AF2X/wBCFXD4kD2Z6Sep+tJz60rfeP40npX0x4QmOOtGRS0n4UDIp22px1PAqpU90fnA9qgrSOxlJ6gajmlSCGSaQ4RFLMfYVJWJ4ukkj8JaqYh85tmUD6jH8j+lUJK7seV+HtJOvarNrNypaW7mec7h91d3yj8gK9VtLcLtXAAHtWH4XsYbDQ7YADJQc9unTNaja3aWzfPIoT+8TXHP3pHr00oRNYxKQOhqNoadDcwXMYeKRWB/unNSEf7QqXEtSKctupQ8DOK5TxBo8VzaTZiBYKccV2M0qICGZQfrWPeMrqce9SVueEabZvpHj7RLiNNiPexKcgcZcA/pX03XhfiGzFt4o0eTgMNQhZfwcV7pXZTd43PJxEeWdhKy9ehJsftUf+stmDj6dD+nNalNkRZInjYZVgQffNWzFE2jXq3lmjg5JArRB4ri/B90Y3lsnPMTsvPscV2fbisjUWjIoo9elAyvduVjAyfmqiKnu2zNj0FQVpFaGUnqB4rwfxzq7XviOcKcxnoe2F6frg/nXtGuXhsNEvLkfeSJsfXGB+tfNPiG+eTWpYIiXPyKvvxn/Cmy6ezZ0Hgzw9/wlniiKMhjYWi75T2Zv/1nP517rHbpb4jQAKvA7DFY/wAOdAg0LwlBI+0TTr5k0jHHBweT9KdqV5p7ubi5nuGQkhGRH2j2GBgmueprqehRXLodEwyFGe1Jsya5y3mgt4Rcx3rLAACTM20DJxyWxjnsa1LvUUh04zNKkcY+/IzAAfUmsjbYsXEkEQxJNGp9CwrHulhuVcI6Op9DmsjUtc0vTIhc3e51fO5yBj684z+Gal07UbbUpMxW7Q5AZdwKFgehwQODTtcXMtjyXxrpraR4gS4AIV/myO46GvcfCF2L3wlpswYt+52bvdSV/pXm/wATI7e+sbR7SVJpo2LkIcnyyBz9MkfnXYfC6YzeB7YEn5JHUAjGBnP9a6ad7WZ5+ISvdHZ1k62DAIL9PvQuA3+6T/jWtVe9gFzZTwEZ3xkfnVtXOZGzptyt1apIOcirY6Z965PwXeGazETHleK6xfu1kajhRSA0jHCFqAKkzbpD7UyiitUZPUSvFrzRkvfFOp6g5UpLcyFPl7A4B/IfrXtJ78dOvtXnVnaA3YVsjexbB7ev48dKUnaLNqCvIu+H9PWzh2ouFPPFdJGvy81WgjSJdi9uPxobVLG3JE1wibeuT39K49ZM9Re7GzLBUbqQoMc02G9s7pd0NwjD61YAUjOcj2qbWK5kypJEMGs25jABB6VtShFjLE4+tYd3KpBKsD9KdmJtHmGu6I1l460rULZfkN1EWz2O8DPPtXvteY6nZ/aZbeXus8e09cHd1/8ArV6dXXSd4nmYmNpiEAjnn1HrXh3i7RP7G1268lP3RYyKo/uNz+hyK9xrgPiRAI5NOuyPlctA/wBMZH9axxcL079h4So4VV5nJ+Fr+JE+xTNub7yE9/autVAQAOAa8wuLebS9QUKTgfPC/r7V3uj6mmqWiFSFkT5XHoa+frU9eZdT3zX24GFx9aeQzjBxToU/vDPHIqYqg4U5YdBWBDkNVQRx0FDzLCQFUu57CnR73B8xNgzwD1NWIo1DZReT/FSJv3GCFpAGcleeRUstqWgbatWY4hySM+tSjlSAPwp8pm5u+h5xfWLJeuH5Oan0wi2vkGR8/wAp/GrniArHd7jx9KyPNJwyjaQQQazknJWPQjLmjqdegwMelSL0FVLecTQRSg/6xefr3qyp4FeTNcsjnY54961l3MDKc1sBty1FLDuXNUtQjKxgHuKfazNFKB+VT3EGxicVUdcjryOhq1aSszdNNHRQziRAwP19qmySOKwrG6MbjP4ittCCBjoaz1WhzzjZla483b8p4rJmebODnFdFtBFQy2iP2601vdDjNLc5o5J96dHMY255HvWlcaYw5XNZ8kLLwV5rS6ejN4yTNS0vCmDwQex6VqxyBl3IfqPSuTR3iPGSO4rStLzBG1uRWMoOG2xFSlfVG+JKXdnGKqQypLjnmpwcfhQpaXOZqxNnPNGM0iPTgckDtVp3JAr270uKTGSeOPWlHcEde9OwAcUEAiikoYCFB6UjxoUA28jrUijim8gmjYLlOWxjmTDoOa5zUfDDZaW16/3MV2IYd85oxnvWtOpKDvEuNRxZ5XLHLHIY5Yyjjsapz2qvkk4I6YPIr1O/0i01KPbMg3dnXqK4fU9DvNPkctCXgB+VwM8V6FHEqTtszphUUjL0/XtQ0wiNibm3B+6x+ZR7Guy07XbXUY90Mg3Dqp4I/CuKKbvTHtUH2VlfzYXeOQdGXrXW7S8glSTPTlmUngj8Kdu3EnIrhbLX7m1wt6Nw/wCeif1Fb9trFtcKClwh/HFYSi0YOk0a/AB5yahlbC49aakhIOMEZ4I6GlwGmXdwo55pIm1hjxneR6cVYs0H2+2/66r/AOhChh8zHuTUlmf9Pt/+uq/+hCtIL3kTJ6M9AbqfxpB2obq340g6CvpTxBT1popTSdzQBUnOZTUdPm/1hplarYxe4VzviEHztzv+6WBiqHlS3uPyroqx9fgMsUTD+AliPX2rOt8FzpwbXtUn1OLmt9bi1VIYbtG05oZJPKjhVWBUqNoJB+X5v0rPuJbtbcyvb3rpLLtCiGFyPfDLyPyruEgmkCPbojSplSHJGUPUZHTkKfwqvKPLbZJYaguOrxx71Y+20k4+oFc/M27noKCWhybX9/olsbq1jtjHDnzIJPkd29AVO0E8Y+XHvU0njPVriZrE6IbScIHLTXQAwTjIwpz/APXrbbSl1e9tla3nhs4JPNkE/BlYY2gDOcZznOOgqn4o0lZddsNRAPlwq8cwUZwpHytgehpXDlZzU2o3MV4kd7d5lk5VEmcAj2IQ1qJrUVhZteXlxi0AyzEFivIA6Z654xW4tjZXCxTRTWsvlZCSI4O3PYYJx+FUZNJs/tC26JFJtcNIgOQiqcjj/eA/X0NO4rW2Mq5iTW9W0m+tj5lrbTiWU9DhcEYB5NepW1wl1bJPEco4BBNcfFbqlx5wRclfLHHTJycfkDXYW0Xk2sUfHyKBxW1Ju9lscmKilFSe5IaKU0lbnCcjpTGHxhfxjoZix/HBr0FTwK86sXD+Nb4j/nrj8hXoq8xg4rJ7my2FzzRwDS/xdKOp6UhmbMf37/Wo6fN/rnplarYxe5yHxFvxaeHkhDfNPMqkeq55/mK8K0+zfUdeu75cSG2YEwq+HlAwpwccYr1L4q3Za8s7VW5GPw6n+grgPh4WbXdRdBuYQEAnnGWGaibsrnTRinJJnsUGl6kbvQtWlvAbBY1iGn728oORlWbsx7ZI+lRa7oUmtyTPdPJvaJowv3lj91HTPv6Z6V0WjyCfQoIJQD+7CnPqOP6Uq292qkR3cLZPBmhLEfiGFYufY7YwWtzlNO0GbStGFqkoaGIbvmXaWOe5HQAcfTHas238H6d/wiPy2ERm8z7QAFxluDwPfnrxjjpXYX1u7uqTXXmFuNoGF/x/WpomhNsyM4DLwRnoe30qJSbLjCKWxzl74eg1q1SSVSwlCuSjleRnGO/c8Vch0OODyHKn9zGsKHuEAwBmrMNtbo+Q7oC27MMhAJ9wDirzWNoYTveWXcQ2JJC6/wDfJOKOZj5Fe9jjvEGiWMOmXd8yLhp433AZKxDaNvH1P6elafw4mafQp5HYMWm3HAx1ApPGJVfC95uIC7e/tz/SnfDRAvhMMM5aZs5+grWk7s5MUrQsdhR2ooNdB55zfhKQxavdwjgLO4A/E134PHFebeGJGfxFesOhnc/+PGvSVzismbIcBTJ+ITT8c1HP/qTQtwexUooorUxMq9ubkX/lRuEijQksB8xJ6YPasGzXd4nU3W6SOSAn92Nnl444HQ8HnIPWtfxCJY4GlgzvZccd6h0OzXzQxlM0nkOSzHnJZeK5HKXtHE9eFODoKaKGt3UsGoLaW0Ny9lIm5rlFG5ByGHXhvukcYxniuXvX0axhmvMX0qQfM7GOI7Oe+VGPwr0SMZ4wM+vpVG90uKSJ1CKQ4w6lchh7ipUiuTo3c5bS7yK9ijnjP+sO5f3ZBIyR97ec9DyOOK0b3xG2mQt9osbrCJuMqAPGevTkHt6VdtdEMfzfcAGFwMY/D/OKivdIaPQ5olmJmdSqyOM4PZiPw5pNjs1ojE1HUre6gL313JaxD7xZguPXvWTbgxXYbT7yaeLjcrEHbnp36d+K1ZtAt76yW2vYzOmEyWZgQVz7+5/OrA0iIOjJGEZFCLjsoGAKrmSRLi2yzamK8mt4C4RzJG7K4KEBSGJwcHopruY5Y5UDxurKe4NeftpEdvd212zfvSrqcfxA46/TYMemD612OhRNDpag5G5mYcmtacrPlOXEU7w52/I0a474lpnwukmOY7lCPxyD/OuxrjPifJs8I7R1e4jUfz/pV1fgZy0vjRyA06PWtFEZ4lQZjPcGufsri40y+3bCk8bYljboRXT+HZcWicZAFX9e0KHVbUXMTrFdIuVbONw9DXzXPyycXsfRxeiuXtO1ODUrYPCwwOGXuD6VoxYJxivL9OmnsdUeSMskgIEkLDA/z716Hp+oxajAGgYBx99e4rOpDlemxMo9jWEadWBJqwu0YBxg1XjYLwTj3NSFhng7eeWP9KlGLLO9VBCjOaaZC+VwV460xU/vE8/xE9KfkDuS3rVE2OU8Q2uP3mOc96w0Kqo4z6Cuv16MPbsTXEqzH5VGMHGayt0O+i7xOg0iYSWzR4wY2JA9jWsp4rmdJcwX21n/ANau0g+tdHETmvNxMbTFUVmTIeamXA96gzg1KDnpWEWZMr3cAdeOKx5oypIroioI5rOu7fOWAqy4SMg5Uhh1B/OtaxusqEJ4P6VmuuDjvTY5DG/saqS5ldbo1a5lY6dH5xipc5xVC0n81ME/MOnvV1WBGTWaehytWHYDdagms0lHvVnGegpRwar1Em1sc/c6c0ZJA4rOKPE2VODXYvGHGDWfd6arjKDBo1XobwrdGZVvdHOM4I7VtW90svDcMP4qwJ7Z4mPBBHQ06C52kKxw386iUPtQLnBSV0dMvv1qRTWdbXYYbX//AFVdB6Hr6EUoyOVxa3Jw2VpM5pgyMZ6GnBsAgHFaqVybDhxS4xTc8Y9aUDAxnpVCDrRS5GaTtRYAA5oBFAIoyKLAL0PFLjcpVsFemCKQdVzQCTI444PFAjB1Lwta3BaW2URueqDoa5+TRJI32gFSOua9AJ9TUM0Ucy/NjjofSt4YiUdGzaFaS3POpNKmU/L8w9cVnXOjSHJaMhvVeDXpEtmo4Ax71WewHB2nA7+tdkK0t0a+1XU80hj1jS3D2V3PGAfuSfMprbsfG7xNt1OwKADiaDkflXWtpik8qMeuKhl0CByPMhXn25rf2yl8SJlKEjGPjDSZ5AiXShm6bwVrb0y6SW+tmjkWQGVOVOf4hWdP4O0+YHfAoz7cmmad4Jt7XVbSa2aWEJOjFUY4PIqoum5LciXLyuzPYG6tSDoKU/eP1pK+jPBFpCOTRniloAp3AxJ9aiqzcjKA4qtWkdjKS1CoriATx7ehzkVLRTaTVmEZOLujnrORopSG7Eg1flneX5VAye9Z4BSedG+8rmmXl6bW3aURySAckRqWP5VwdbHtrVJlg3otmzLBIVAwZMgj/GqNxqUNzcDYJASOCQcEj36VTtPEiajCZYLC72j+KRCp4x2P1FQXniW0tEzdpLAvTcynHbuOO9VYNdzoLeS3uY8XMEbOOpZQc1Tu2hjJWGNEUnOFGKr2F/HewF4W3L2baRn86HQ+Wzsal6aAncsabb+fOmckZyfYdf8A61dNVTTIVh0+IbcMy5b8at12U48qPKxFXnl6AaazBVLHgDrTqxfFOoDT9BuGDYll/dIPr1P5ZrQwOd8LFrzXri5Bz5krP+ZzXp6g7QM1wngSwMcQlIx6V3341kaoB0pvfGKdR755pAZt0u2c471DVu9XlW/CqMkgjidyeFBJ+laJ6GbWp4p8Rb4SeJHwAQqsc59Bj+YNec6Pq0uh61Fdxk4EpEi5xuXjI/X9K6jxTc/adYncsA3lnIx3Y5P9a4W6wbg56FiaT1RvJuL06H0t4Y1yw1XT3On3SzGPazAdVyOh/WtU3cu1sDmvnr4feJh4e8T5nk22V2PKmJ6DupP0I/ImvoOF4rmMMjg55BHcVyzjyndRqc6uRx39jKjRzTxAg4bLYNV0/saJz5TohJ+bax5/xNObw9ZC++3xW8K3TLtdygIce47n3p4tZU2oLWEYO4sI164A/pUpHSlcrvf6bbW0kqORHGMkhCcfkKmtJjPEHRiY2+7kYpX0oSyrLcsZCpyinkKanYJBGSSFHJJJxx9aTJdlscT8TNQa30S2tEOXuJuOeQFHP8663wPbC28H2K4wWVmPvliP5AV494n14eI/FKmBt1pB+7hP94Aklh9T+mK940q2+yaTZ25ABjhRWA9QOf1rqpKx5uJnfQt1FdTC3tZZm6RoWOfbmpa53xlffZdGNup/eXLeWB/sjr/QfjWrORFPwJGz3LynncSTXpS+lcZ4HsjFZCQjGa7I9azNULmmScxtTvSkIBXHrSAp0Up4JHpSVqZEF3bi4gZSMkcrVHSURb+6aNNsnkNu46EFe3Y8Vq1VsNUiudZutPhGVtoh50qkbVdvup9cAnt2qJU03zHRRryjB0+jKiSfvSfU1O7gc1SJ2SH24NNu7kQweYxwoGSa47nq2W5ae6VfvMqLjOWPFUbnULCbT2mjuY5IwD86sCvHXmqn9rafc2/zzwFf9o1RvGsZlJM8O08KN3DevFMLdiW3lR3Dq4aNuQRyMVZn2hRjrWTC9vbRrFEFVR90L0qy0xbGTSbEWEhkvLiKNBuPPJ7V1scaxRrGv3VAArN0azWO3S4YN5jjjntWpXXSjZXZ5mJq8z5VshMV5x8Wb0LbaZYgjc8rSkZ7KMD+Z/KvSK8S+Ibz6l4klvI5A1ta7bcADp1yfzJpV37jsZ0FeaLWjyCC1RmIAJwB610ds6yN5jKN3oRXMaZHJOkfkwySNAu9gi5wO5rUhuHGCPvnHHpn1r5mqne59ClpY1NX0GDW4xJGRBeIPklXv7H2rjWkvdHv3DKbe9UZ/wBmT6etdva3GFAkI3D+HOMVPd2dtq1t5F3GpAztK9V9wamFRrSQk7bmXomvR6rH5VyfJuSMNk9fp6V0MUZjG3rj+Jua871TQLzRZPOJaa0Bys6csv1HatLSvFz20SQ3KtMrHb5h6qKtwvrEmUbq6O4ycAseDUglTACjOR1rOtrqK5QPC/mg9ADWjHE5ABG0f3RUoyatuV9TRGtyzc59q4SVHFy4XgZNekToFg2469BXCasqxXzZIGR0qZxszbDy6FPZ5eJB94HOa6WKQMFZTww3VzDTbui4Fa+kTGSyAP3o22nPp2rixEG43Oie1zYHPUVKnFV0Ykc1KGINcBiyemSIGXFKORTscVdyTFu4NrEiqLLmt+eIMORWHIjxPIrKGUng+lVDc3hK6JLS4McgGeRW9FKroGHQ9fauXbghl6itWwusEZ+63WpnG2q2CpG6ubSn0p+eagR8ipQfSoRzEinIo/Wk4Azzn0FO7Z6g1oiWQXFqlwhyOe1YF1YtFyQcfyrpgeQKZPCsqFSuc0vNGkKjicpFcNEwD9B3rYtb0jCt8wqjqFg0ZO08VRhneJgGzx1pOHMuaOjOlpTV0daJAy7lOV/lT1YVi2l5jBBznqa1IZVlGU4buKhSu7Pc5pQcS1uxRjPSmIxBDDtT8/hWyZmG7nGKd260mc0hIoQhQOc54pTg/wD1qQDcKQFSgKnNFwFH3sHrStgDJOPem4B5xyKDyME8UALzjOc00KFJx37UuMUZx/8AXoaGBGeDTMYwPU9aVhudWI+YDANIWFVCpKm7odrivtGP50xtxG4ADtk0K2znGR6UxpiQQMZB4Jr0KdWNRaE2Yv3M7efSi0yb6Es3/LVePxFRY+X52KDsfWpbVh9sg2ptXzF5/EVvD4kKWzOyY/MfrRmhh8x+tGK+nPHDvRniil6igBkiBoyM9aojkkeh5rR79KpXURT96oPH3h6iqTsTJXI6DSKyuoZWBBrl/HPiyLwtojujqb6X5beM+vQsfTAz+OK0WpkO1S7g897y3fcqS/Z5WHTcACfyyAans5VnTKHOfesD4dwJr3w1ZY2L3VtdSs46kk8nP1BH5U6CWfTbjjJXoQa5K0bTPVw01yW7GtNpsiMWhXGTk7GI/l1//XVa4sJJyolVzzn52LCrya7bMg3kIR61Bd69aGPCOGPtUanT7VsjlYQwiJQAAAM1QOrWA1C2s7u9ht0kbrKwUNj3NZt1f3N2X8lCFUFifQDJJ/IV4rqOsz6lqEt3IzYc/IpP3V7CqpU3OWuxz16vJHTdn1mjI8asjKUI4IPBFL068fWvlLTvFWtaO6tp2p3UCg58tZDsJ916H8a9A0b43XsYVNVsIbhRjLwN5bfXHIz+ArtseVY9trzvxDfHXdfjtLc7re3O1SP4mPU1Y1Dx7aapoqf2M0nm3OQxdSpjH+P04q74N8PnK3Ey89eRUSZUUddodiLOxiXoe9a4ANNChQqjpmnL1NZli96Pxpegzig/SgCCaMSLjvXKeKbr7JoNyA22ST90PqTg/pmuw9BXK+MtGl1DTjJbAmWIF1T+97U72Q4pcyufOeryeZqU7jnMn6Zx/SuamUPeEY+6ATXQ3yuLm5jZSJYcZzwRyc1ixp5l9Kc45CnP5VS2HPVma4wzD0P517j4JvrkeE9OuFcyYQq6E5zhiP5AV4ltMlyyjkljXsHwvk83RJ7Rv+WMzAD0B5/rWNf4bm2Fdpno+na3a3QCO4V/RuDWyjwN0YGuOuNISYlsEN/eHBqSzsriDrcyEe7VzqR3HT3U8KDOQPrXj/xR8W3IC6NZPsWZf3zD7xGRgD0z1P5V396+yE8lj714LrF4dW8Wzy5ygkKqQew4FaUvemY15NQ9TZ8CaUdS8VQWvIRWUNx6fMf5Yr6N6d+a+cvDerXXh2WXVbYIZMsdsgyrKf8A9Vd/o/xl0+dxBqtq9u3AMsJ3qPcr2/DNdaPPqJnppIUEk4A657V55eXLeI/Eo8okwREJHjuPX8aueIPFdvqNlHa6PP5sdwoZplBHy+gzzWv4O0Awos8i89uKUmRFHW6TZizskjA5xzV7nf8AhQOBgelAzu/4DUGg4dR0o4NIBzS/NzjFAFW4Xad3Y9aj7/pVyRQ6FD0Nea/EXxBrehWQitYwlvINrXK8sD6e1XF9DOS6l3x340j8OWHkWjq2ozD5O4iHdiP6Vi/Bu9fUbfxBbO4a7Z4rlWJ+Ytzz+BA/OvILq7e7k82R2ZmzyxJNdb8LNZ/sXx7ZFsCK8BtHJP8AeIIP/fQWtGtLBF2Z6tLdFbuRZF2ktypPQ96sCNLqIowDKRyPWrvivSgj/a0GEc4fA6H/AOvXMW9/LYyYlyVz96vOnG0rHr06nNFNGpcafFsJWMdKwbrSlnJX7JEOfvY5rol1OCdBtYZ9M1VeePlgR+NNXNfatbMxLXQ7azcTLCBIBgEDBx+HFX7O0kvrtYgDjOW9hWZrviax0a2MlxIC7D93Ep+aQ/0HvWb4f+LOnwRCG901ogx+aaF92fqpx/OtKdJyd2clfEcqstz1hEWONUUYCgAe2KdWXpPiPSNcBOnX8U5C7inKsB6kHBq7eXcFhayXNxIEiQZJP+etdR5hm+JtYGj6TI4YC4lykS+56n8K5Xw34YGs2E8NxI6LOuGcDJFUpZrnxXrnnFWEKnbGn91f8a9T0bTV0+zjjUY45qJWehcbrVEGg+G7bw7pUllZSN5rqS1yw+Ynsfw9K8/k8Ha/b3LSG2a4Uszhww3Nk9x6n0r1o89+KhQXP2uXeqJABhAOWY+pNctXDwqJReh008TOm3Ja3OGsdAfTrC51TVrTcYYwYoN3f1NQeH0F/qcFs4BjPzvzjiuyl066n+aWW3dm+SRSh2yxnsfQ/SsLxH4et7C2S801I7cRMXlJfB4HRT/SuKrhOW0orRbrqzqp4jnvGT1f4G3qmn2UGmTyi3Vfl5IGc+g/GvM9U8HJc/6TpjC3m6+QfuN9PStiLxHqEi7J5vPRv4JOhPqcdfpVq0mVh83BPGK5q9aMpqVNWNqMKlJNSdzgra5vdGvNksbW0+eVYcN/jXZ6V4nt50CXTCFwcBm5H51qXdlZahb+VexJKuMYPUfQ9q47VfCF3bsZtLc3EAzmJiA6j0z0NZ2TNeaM9GdtNOJLdjFgr1Df3q4bXYyLvee54NUdN1y8sZGt2aRdv3kkHT86tX+ox30atwko5K9sVEou5dOHIymucDA4xV3SpfJv2iZsLMu3n17GqaOODkEUhcxOrA4CkEfhWFSF00dK1VjrImz9RwanHNVI5UcJIvRwG/GrAdfUV4zVmYstIeKXNQLLgdakEg+lO5Nh7DNZl7ACD7dK0PMGahnZWU8GmEXZnPuCDRDIY3HPBNSXW1XqqXB9K6Yx5o6nUnc6W1n3x57r/KrgOehrmtPvMSYJ6cEeorfjkHGDwelcsouLsznnGzLKnBzmpU2hvr39Krg5pysRSUjJokkfyJAZFzCeNw6g+9TqVbowIPSo1fKkHBBHQ1CIdrERyH/Zqr22J3JLiFZUIIH0rmr2zMTMccV1IbKgHriq11Asy4xmm+6NKc3FnHiSSB1KcjPIrUtrzIDK341Be2bRMeCRms7LRvuU4I/WtHBVY+Z16TR2EF2swwSFkHQ+tWA4PHeuWtrzJ4OCOCPStq2vElwHOD2NY6r3ZHNOnY0gy5xk59aWoQ/Y/wD66kBp3MrEinHTrTI9gDFFKDOMGjdzSswwCc+lNPqICKXNNJxSYNFwsPOOMnrSRyI0i71YoD82KMnGOtIABkjimnrcLIViDkgYUngelRn3pxpucdOaGNDCeeOlNf5hnvSuVUZY/gKrGfPA4FZ8/I73LSuOKjhmck/pUts6m9tsnH7xePxFV5FLRjaSGPQU6zBXULdn5bzF49ORXt0nflbIktGd6fvH60UH7zfWk719UeIOooFJQAuKQjcCO1Lg0nPNAHMeJ9O1RtMuBo14bWZxkNjPP9PrXzrr1pqcWoSLqrTNdd3lJO715r6wZdwwRkVzPiLwjZ61AyywI3XtyPoa0hPlJcTyz4M+JP7G8SnSpmUW2o7VyT92QZ2/nkj8q9s1nw3Fe7p7dQsp5Zegf/P614Xqfw9v9GvFudPkY+W4dQw5Ug5GDXuuieKLDUdPt2muoYbsoPNhkfaVbHIGev4U6nLIISlB3RxN3oRYujbkdeCCKoR6OiPySf0r1HUoLG8tiZpFBx8rq3I/xrj4ptP0+5ga4kluzu+eK3hBKehcZ6ewzXP7KTeh2LERcbvcqeItPTw/8Mtav3xHcTWpjU45UP8AKB+OcflXzGyHpjpX0n8ZNZhu/CNtYWUgle6uFZo05YKoJGR1HOPyrxC28N3dwfnTy1PXdya6YRUYnFOTk7s5nBC52k/QV0Gg+GZrx0uLpCkROVj/AIm+vtXYaL4MAkUxwtJIf42HT6CvS9B8GCMrLOuTjPIqZS7AkY3hbwq8zxu8e2NQMLjjHpXqdpbJa26xqMYFFtax28aoi4AFTnNQUNPUfWnd6Rs5H1oNIYv4Ugozz1oA560CD0pHVXGCAQc8GndqMnIoA8x8d/D6LUDLqFiipdlfnwOJBzwfz614BJY3WlXlxHewvFMpPyuOvBOfpX2WyB1wVB61x/ijwNYa7Ayy26sSDg9CPxqkwPlqExwkSDBcDd+ODXcfCrUVTVLuBmx5uH59c8/zpde+FGo6ZcM9k5ljBzscYb8+9c9olrqfh7XYZ7i0ljVXVXbbkbScHkfnRJKSsOE3CVz6FLDGSvFRsyhelZ1pettCSdezVPJMwBxXFKLWjPSjNSV0Yvie/NppFzNnDKjbfr0FeNaZamSWe4I525B985/pXpvjjzJdGMUeXd5FG1eTiuS0vRrlIyGXyyzEnuemP51tQWjbMMTJXSKFyBHp/lqCSU+7+P8A+ujQPCs09wLm9U8NlIu/1NdxpnhiW4mVkhYseN5616FoXg5LcrJOuT71vc5JO+xk+FvCrOySzJhQO4r0qCBLeJUQcClhgWCMKgxipcVIhoAz0pAo8z3p/GKaARNk+lAx4IJ5pBypGBR9R39aM5J5GaAFIFUNW0m31WxktriJZI3G1lI61fyM8UvHOeKBHzf4u+H954duHltEeayJJHGWQe/qK5FHZCroSrKQQQccjkfrX1reWEV5CUkAbPevL/E/wwt7l5J7NTDK3UoOD9RWkZ9yWj0fwxqkHi3wfaXbgMJ4Qkw9HHDfkQa5fWNJl0y58l8vE3+rkx1Hp9azfhhdTeE4r3SdbuFjty4kt3IOOfvduOx/OvS5H03WbYxCe3uI2/uOGI+mO9Z1IKRrSqum/I8rlt0ZsAFc9NpxUVvp7GXa8skinopat7xBpUukuWzviPCydcH0OKZ4ZtRcXH2qQ7bWE5LOcB39Bn061goPmsdsqi5eZHj3xDEf/CZX9ooXNsI4QR6hBn8c1ySkqc/yrb1qx1G/8aaxOts5Sa8lk3Fsjlzjn6VfsPCUkrKZyX9ET/Gu26R5r1Zm6Jc6lDfxXGmyPHcxHKyDoPr6j1FeoTX2q+Kp4UnAWNQB5cedpbu31P6UuheCpHCIIvKj7DFelaN4ft9OQfKNw71DlcLFbw34eTT4Fd1+fGa6bHTjpSAYAAPpR+NQUOyMUcDn2xxSD6UFsZJBAHemI5nxJ4hvNFtjHtthd3lx5NiBnhT/ABP9OelcD4juNSOrvp9/qrXotwpYjhMntgVoeO4bnU9StJI9Ovmu0G1hGCyRrn5Qf9o1yj2WoWzN5tpdK+7B3RMefr3rzMTOUrx6HrYaEYpS0ubNpKq4ycsOma1I7rDcYJNcqtw0bYKlXHZhg+1Xbe4Q8MSCeTjtXA4nS1c6eO4ZHGOfc1fS5WRQCWznjn+Vc1BfARYPITovY1cjuTleRkjJx/CPX61NjNxJNWs4LsN5kQZ+z9CPx71xdxbSQSuiHepIGD1xXUT3hVCM/wAWDnmuc1Cf99x8zE0Qk9jaEdNSl5xUEcqx7GnG6BQF+B6D0qRZUb7+Dx6ZqOS2iYAx5+9uPOQfaqfK9zRXWxt6Vf77Pb3jO3mrpvj2xXMW8slnKzOMq3BAP61NJrFomd0xX6ivPq4Tmm2tjRWe50P9oMP4hSHUXx981yv/AAkVixYLMePVaT+24JTiIu59AppLAPsUlBnUNqbD+P8AWqk2rtjHmH8656a7uQpb7PLj/dqi11dyD5beT8xW9PAQ3Y+WKNybUC55Y1Xa9PY1khL9+fJAU+rUG2viR8qj8a640ILQd0a8N+YZFfrg8+4rtNOvFmiXDAqy5U15oLK8P8UY/Cuk8OyzQwtaTuGIO5DjHHpXHjsPFw54vVCnHmR24nHQkfnUqzDsRXP+awPQ0pnYd8fU4rxuWVzH2VzoRMB/EKd565zuFc4Lhs9f1pfPf1/Cn7wvYnStcYUMgB9aYlyrD5mwawReOFwCahkumA5JppTb2J9j0N288mSMgkfnXMXOxHOCKgu9VRBhplU4zy1YsuoeaSc8evY13UMLNvmehtCny9TUacIchwrDofSrOn6sszbGO2UduxrmWvB61El9nJUEFTgHvXZLBqcbM2smtT021vQ3yt+fpWkrnHPfvXnel+IAZFguXCscbHz1+tdfaXuRsbkH9K8mtRnRlyzOWpStqjY3Z/xpwfB5qmJgP4xij7SmOuaw5kupjytl3IIpM8Zz061TF0vbBNNmmmyskTqFxginGSewcjLwcbeOtMkl2lcNn1x2qis0m05OOOp4ArOudcsbT5JbyMv6Idxz+FOKlU0iilT1Nw3C4zngVDJcnoDWRb6nLfSMLKxuJlHR3GwH86vQ6dfSD/S7hLfPSKEZP/fRrZYeq3roU4qPxDZroICHcLn160kKyTuNqEAdSwxV+Gwt4ANkYLDo55NSsrN8ucD+laxwS6kuqlsQEKAEUF2Hf0p1quNQt2Jy/mICO3UUx5YolYhgoHVj3ptnKHvLd1OV81Mfiwr0aas0ZPVM788MfrSd6eeWP1ptfUHiiUuKMEUvrQAdKTuaX6c0d6AEoOKWkFAEM1pDOpDoD+FYd94Ts7rJ8tQfpXR+tHegRwU/gZjkRyMF9ATWcfAEkcoaP5W/vLxXp5xnoKSndhY85j8AMzAyMT9ea17TwRbQnLgEj2rr8AfhQec0BYz7TSbW1GEjXPrirwUDpjpTqB06UgDnAo9qDzik5x1FAAc5FBye9LxxxSDmgBOc9aUcHn0pMjOBQORxzQMAcig8HNNXhRS5OKAHjnJ7UmSfQ0mSBigE5BPQ+lAiC4tIbgESIpB9RWBfeEbO55WPA69K6YtndnPpScdumKAOAm8CnJ8qRhz2zVR/BNyXwZnI9ya9KyAaYxGCcD8qAPPofAJLBnNbNl4LtIWBZQSD6V1mSBjjpSAkAHHNMLFS1063tjhI1GParS9OAAKD1JzSDB47k0hkgPBJpV+9zTFHWlzznFAh2PSo8jzgevy9KXPPemcicZ/u0DRJ05PrSd+lJyR/jS8j0oAOO3SnA5OOvNIBzzS8daAAH5fSnFVIIIB4pBS5yeKBGbeaLaXgIeMd+1YFx4IgZi0R2ntjtXZEUi0wPPJ/BV2VK/aZWU9i5I/+vVePwJOybGkbaO2ePy6V6ZgZ6Cg/hxQI4K18ARgjzOcVv2XheytcfuwT9K3hgFs04dfxoAgjhjhwEQAD2qUYxn3oxS47dqQxOo46UdiaXGMCjHy0AA5NZV2z6pqCWlrd7IbSQNdhOpPVUz2z3qTWdYh0S0jlkUyTTSLDbQr1kkP8I/n+FTafYRafE6xKS0kjSyMxyWc9f8KT3sPZXHT2SS3EE3mzRmGQybImwrkjHzDvVbX9dtdA0yS8u2ViTiKMjl37Af41fnnitbeS4mkVIY0Lu7HgKOSSfYV88/ELxVPeXdney3Ukn2l2ks7IKFSG26B27726/SlO6i3HcqmlKSUtiXUNTm1TU57u4K+bK2WUcBfQClSYBlUfMe+a5a21m3ubgfNtLDK56g1rLcnYCecnGe9eRODvqe1Fq2h0Ed3ubPAHQVZFyQCA2CQNzVgxzK2MHOOlTJcDGCep5rNxGbDT7uAPmPIB/nVV7NZTgf8AAvaqv2tVBIOS5AAPYCrtvL91sHpnPoalqw02Eeiq33mYY/WrUXh7zODIyg/3TTo7sSHaCNoGBz1q4L3YqqpwSQADWckx87RB/wAIvZcLJdOGP3aRvBmnT4DTy5HI96uRz84xk5yeeanW6zu2NjsT6n0qPeWzHzy7nPy/DmxVmaK9mVj0BG6s6Xwxf6dMrQMksYPVTgmu3SYhTiQhaV2RkBIxjqTT9rPrqSpdzz6a4uIQROGU9gRUJulDD5efWuvvreO4Q4Qfj/hXNXNmQ+BCWA7rVxnF7o1V3syr9oQn5uSanXyj1Y5PpUDWW5vuSA/TNIthdCTKnPoOlW1B9RqUkWgF9RmgMxIZQSw6HPSq/wBlvkbLQuV7jGaH+1Rph4JF+qnNTyLoy1U7otebOfvzPz/dOarTmV8h5XYf3d1WYmhXaHR1z+FakL6UoOYidozgg1Hw6pGntEjmyZsYEkgA6DdTD9o52yS8d8mu4jvtDt4w32RJG6jsPrV1dR0jcB9miG0ZxxgGn7WX8pLrrsecEahIDsa6b3ycVWltNSbJkNwB7sa9b/tDSpMKMFj2CjA/KqN0NMmYAyZLZwMcU1Xa+yiFiL7o8kksZZHy+6Rh1Zj0qSOyvkTakxVffp+Vd5d6dafMyMDjrxjFY04jibBbgd8VqsQ5aWK5kzDSyu84e4z9FqaPTST80rt681phodnzvkelBniQ8EfhQ6k+hSlErppkajJBb61t6dqJtisU5LRA4DnqKzDOh5LYp0QM0gEasc9z0rCrD2kbTLvFqzOsfVrKNNz3SY9uaqTeKLGL7gkmP+yuKy49MlmYqSoI9KvQaDZof3+5iPvLntXDHBUI73ZFoLdleXxdK7YgslDH+82f5VLDd+JNSA8hBAp4yEwMfjWzapp9sA9vZo3YHqRVn+1ZUH3dq9MqOB+FbKFNfDBfPUhzivhiZ9v4Tu7oZ1TUp2UjmNG4restA0vTyDDaRZA5dhkmqI1GVsBZF6dqeouZuBvLH+6CRV67MwnOb3djZeeKJcnCp1+XioTPASrMM4zs49apJYXG4lkcjPV/Spv7NwAJHRAD2bNFjG0V1HT6hGowFI4xxVG4v5GjbdujjXjAHNXVs4Vbdl3OcZ6Co2jjEmVjUn35xQUuUysXExwH3jGMhataZYS/2hbbm2hZUOC3uOKtMwZcrwn5VJaSE6jAiYwJVJwPcVpH4kOUnyux6CfvH60nX6VH5jZP7tuvpS7yOqkfhX0p4JIOtHeoxItO8wZoGO4pO9JvWkDr1oEOzRimGVRTTcID1oAmxR3qA3kQ6tUZ1G3HV8UAWupoqkdWs16ygUw63pwHNwBQBoDrS9unWsr/AISHS163cY/GkPibRx1v4R/wKgDV70d6yD4q0McHUrcf8Cpv/CWaAMZ1W2H/AAOgLmzj+dNbrisf/hLvD3fWLQf8DpD4u8Pf9Bmy/wC/lMLmz0IzS54xz+VYZ8YeHeMa3Y8f9NaP+Ew8Of8AQdsf+/tAXNvofekGeuD1rE/4TDw3nP8Abth/39pP+Ew8N/8AQfsM/wDXagLm2Pu/jSccetYg8YeGsc69Ydf+e1L/AMJj4Z5/4nun/wDf4UBc2vqaMjYKw/8AhMfDP/Qd0/8A7/0Hxj4awc67p3P/AE2pBc3N2Qc+1JvyB1xmsMeMfDIznX9P/wC/1H/CZeGuM+INOH/bWgDcY56etMdhtPzE/NWN/wAJj4ZG3/if6d1/57VG/jDw3s41/Tv+/tA0zeLAnjNP+XvWCfGHhof8x/Tv+/wpT4z8MnGdf078JqEK5vYySQM0cA9PxrDPjPwxx/xUGncH/ntSf8Jl4Z6f8JBp/T/ntQFzcLcZBpc5HSsL/hMfDIH/ACH9Pz/12pf+Ez8M8/8AFQafx0/fUBc3ACeMU3nzc47Vijxn4YB/5D+n/wDf6g+MvDOONf07/v8ACiwXN05AIIoPHGDWEfGXhk4/4n+n/wDf4UHxl4Zzn+39P/7/AAphc3s+1LxgZ71gf8Jn4Z76/p//AH+FL/wmfhn/AKGDT/8Av7QFzfBHNGemOKwP+Ey8MAf8h/T/APv7S/8ACaeGc/8AIf0//v8AUBdG+CM0IR+tYX/Ca+GP+g/p/wD39pF8a+GAP+Q/p/X/AJ60AdBmkNYI8a+Fx/zHtP8A+/1B8aeGcca/p/8A3+oEb1OPWuf/AOE28MZ/5D+n/wDf2l/4Tbwxkn+3tP8A+/wosBv/AI0VhDxr4X4/4n2n/wDf4Uf8Jr4X5/4n2n/9/hQFzdHOKKwf+E18Mf8AQe0//v8ACnf8Jt4X/wCg9Yf9/hQFzZkhilaNpER2jO5Cy5Kn2P8AWn4z3rC/4TXwx/0HtP8A+/wqjrHxE8Oabpk1xDrFnPMFxHGj5y3ak9FdjSbaSOQ+K/i2KO6i0L7YYbFR5uoSRJ5hJHKxEcDBPvXhU2oXWu69NfXknmSuCemAFAwAB2AHatrxffW93ZtMt5HNcTzGSUq3UmsLw8sLXcxmmSMCPALGudVHKm5Hc6UYVIxTJJ7fGGBwSM5HY1ZttVuLQbJv3idc9xUkxthEAbqE46Yaqomtmjb97GDj1rFNtWaOl2T3Okt9RguUDxvk9xVxrpgoBww2/jXD7ogSyzIreqtVmLW5IVCzOki+oPNQ6N9hqqludcs5cjJwKvrdlIwEzwOvpXJ22sWsmGM6jA5Bq9/a9oUB+1IG/wB6spUpdjRVI23OpgmULgkHipo7zc7NnIBwB/OuY/tmzH/L3ARj+9U8OtWQVf8AToR9WrN0n2K549zqxd4AAOWJ6jvmrEd0DiPcOB3rkk16w8wD7bAByThutWRr2nbD/wATCA7h/erN0pdg5o9zro7gOSc4A4BFTLMZiOQwxgZrlE8Q6asYX+0IAeh+ap/+Ej0wJ8upWxzx9+pdOXYXNHub0jCTIxwOnvSJZrITk456Vjp4j0jj/iY2o4wMvVtPEejhB/xNLTPAzvqPZS7D9olszbhsExt2jbjp/SrcdtaL/wAsgR3bGQK54eKNG24GqWoJ9JOlSL4r0gkj+1rUAHj5+hpeyfYhzv1OlSK2UA+WPbI61MEg2jcqHPOCK5uLxToxO59Vs9pPTzOlOHinRMgf2raDPbzOAKPZyXQnmXc6T7LbSsP9Gt3Of7g9MVFNo+kSf6ywj47pkVit4t0JRsj1W0DN1Ik6UxPFGj8KNZtAu7kmXrS5ZrZAn5mhLoOkyx+XFayKDx8r9PeoG8G6eR8l1cKM88A0xfFOiYx/bFoBnkeZTx4t0Uvn+2bEDHTzO1OMZ9UHtGtmQy+DE3KV1Ajb2KZz+RqvL4SnBPlXaMe+U61fXxZoWP8AkMWSIOwk60f8JZom4r/a9jt/36fLPsxqs+5z1z4Uv9zOJ0MZ9jzWLdeF9VYsQUcDpzXcf8JToUg3Pq9ljsvmcUjeJtAOf+JrZ+2JP/rU06q2X4FKsup57/wi2qADft/Bqlh8G6nLtPCkn3rvx4g8NqpY6rZO3YeZj+lPXxXoIwf7Ysx9JP8A61Vz1u34B7aPQ5i28EXjBTM8eR3wa3bXwkYQA9yi4/2c1ck8WaIEyusWWR0/edaYvinQv4tYss+8lZyjUlvcXt33JV0G32gefISOjKuMVYj0GI4ElxMcDjoMVVXxXoXIGsWQGOf3lMk8VaG+R/bNljP/AD1pezl2J9q31L8ekWAbcsc0hHrJgVOLC0jwfIT9Sazl8VaAAM6xZADk4k60n/CWaCzHGsWYx/00p+zl2JdS/U2FW2hOY44wcZ3bBQ1wVbHr/CO35ViDxRoLYD6xZ57ESVC3ifRTISNXscZwSJaXJPsJOL3ZttMynPVs455pgkM25yCIzxgetYn/AAkuheb/AMhezGRjiSmv4n0OIEDWLRwTnAk6Gj2cuxd49zXuJhuVASF74NQhTsk+bGeAPWsN/EehyAZ1W03nkHzKVPE2kYKnVLNecH951p8kuw7xtubYZcdB0xmorV2TVbfJwGlXp/vCsY+IdGDMY9WtAB/CZKfYeINJn1W0VdRtSxnQBRJ1O4cVUYS5loO8bPU//9k="

/***/ },
/* 86 */
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,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"

/***/ },
/* 87 */
/***/ function(module, exports) {

	module.exports = "\r\n  <div class=\"home-wrap\">\r\n    <!-- 轮播部分 -->\r\n    <swiper></swiper>\r\n    <!--<router-view></router-view>-->\r\n\r\n  </div>\r\n";

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(89)
	__vue_script__ = __webpack_require__(91)
	__vue_template__ = __webpack_require__(92)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\WorkSpace\\Demo\\webpack-vue\\vue1\\src\\components\\select.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(90);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-4986dd69&file=select.vue!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./select.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-4986dd69&file=select.vue!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./select.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "\r\n    *{\r\n        list-style: none;\r\n    }\r\n   \r\n", ""]);

	// exports


/***/ },
/* 91 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template id="select">
	//   <div class="hot-wrap">
	//     <h1>评选</h1>
	//     <h1>评选</h1>
	//   </div>
	// </template>
	//
	// <script type="text/ecmascript-6">

	exports.default = {
	  el: '#select',
	  data: function data() {
	    return {};
	  }
	};
	// </script>
	//
	// <style lang="">
	//     *{
	//         list-style: none;
	//     }
	//
	// </style>

/***/ },
/* 92 */
/***/ function(module, exports) {

	module.exports = "\r\n  <div class=\"hot-wrap\">\r\n    <h1>评选</h1>\r\n    <h1>评选</h1>\r\n  </div>\r\n";

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(94)
	__vue_script__ = __webpack_require__(96)
	__vue_template__ = __webpack_require__(97)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\WorkSpace\\Demo\\webpack-vue\\vue1\\src\\components\\topic.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(95);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-be75a45c&file=topic.vue!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./topic.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-be75a45c&file=topic.vue!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./topic.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "\r\n    *{\r\n        list-style: none;\r\n    }\r\n   \r\n", ""]);

	// exports


/***/ },
/* 96 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template id="topic">
	//   <div class="topic-wrap">
	//     <h1>话题</h1>
	//     <h1>话题</h1>
	//   </div>
	// </template>
	//
	// <script type="text/ecmascript-6">

	exports.default = {
	  el: '#topic',
	  data: function data() {
	    return {};
	  }
	};
	// </script>
	//
	// <style lang="">
	//     *{
	//         list-style: none;
	//     }
	//
	// </style>

/***/ },
/* 97 */
/***/ function(module, exports) {

	module.exports = "\r\n  <div class=\"topic-wrap\">\r\n    <h1>话题</h1>\r\n    <h1>话题</h1>\r\n  </div>\r\n";

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(99)
	__vue_script__ = __webpack_require__(101)
	__vue_template__ = __webpack_require__(102)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\WorkSpace\\Demo\\webpack-vue\\vue1\\src\\components\\activity.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(100);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-29aab8bc&file=activity.vue!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./activity.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-29aab8bc&file=activity.vue!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./activity.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "\r\n    *{\r\n        list-style: none;\r\n    }\r\n   \r\n", ""]);

	// exports


/***/ },
/* 101 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template id="activity">
	//   <div class="activity-wrap">
	//     <h1>好多活动1</h1>
	//     <h1>好多活动2</h1>
	//   </div>
	// </template>
	//
	// <script type="text/ecmascript-6">

	exports.default = {
	  el: '#activity',
	  data: function data() {
	    return {};
	  }
	};
	// </script>
	//
	// <style lang="">
	//     *{
	//         list-style: none;
	//     }
	//
	// </style>

/***/ },
/* 102 */
/***/ function(module, exports) {

	module.exports = "\r\n  <div class=\"activity-wrap\">\r\n    <h1>好多活动1</h1>\r\n    <h1>好多活动2</h1>\r\n  </div>\r\n";

/***/ },
/* 103 */
/***/ function(module, exports) {

	module.exports = "module.exports = \"<!DOCTYPE html>\r\n<html>\r\n<head lang=\"en\">\r\n    <meta charset=\"UTF-8\">\r\n    <title>webpack+vue</title>\r\n    <!-- <link rel=\"stylesheet\" href=\"../../libs/css/index.css\"/> -->\r\n</head>\r\n<body>\r\n\r\n<!--<h1>1. 测试 webpack+vue单文件</h1>-->\r\n\r\n<!-- 测试vue ，这里的内容会写在 src/components/app.vue里面 -->\r\n<!--<div id=\"app1\"></div>-->\r\n\r\n\r\n\r\n<div class=\"outer-page-wrap\">\r\n    <div id=\"app\" class=\"con-1\">\r\n        <!-- 路由外链 -->\r\n        <router-view></router-view>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<!-- <script src=\"../static/js/index.js\"></script> -->\r\n<!-- dist/main.js 是打包之后的文件 -->\r\n<script src=\"dist/main.bundle.js\"></script>\r\n<script type=\"text/javascript\">\r\n    /**\r\n     *webpack会分析入口文件，\r\n     * 解析包含依赖关系的各个文件\r\n     * 这些文件(模块)都通过命令：webpack bundle.js 打包到了bundle.js里面\r\n     * webpack会给每个模块分配一个唯一的id，通过这个id索引和访问模块\r\n     * 在页面启动时，先会执行enter.js中的代码，其他模块会在执行require的时候再执行\r\n     *\r\n     */\r\n\r\n    /**\r\n     * loader可以理解为是模块和资源的转换器，\r\n     * 他本身是一个函数，接受源文件作为参数，返回转换的结果，\r\n     * 这样可以通过require来加载任何类型的模块或文件，比如vue，jsx，less，图片等\r\n     * loader可以通过管道方式链式调用，\r\n     * 每个loader可以把资源转换成任意格式并传递给下一loader，但是最后一个loader必须返回javascript\r\n     */\r\n\r\n    // viewport屏幕尺寸匹配\r\n\r\n    var head = document.getElementsByTagName('head')[0];\r\n    var useScaledViewportMeta = function ( ) {\r\n        var phoneWidth = parseInt(window.screen.width);\r\n        var phoneScale = phoneWidth/640;\r\n        var meta1 = document.createElement('meta');\r\n        meta1.name = 'viewport';\r\n        meta1.content = \"width=640, user-scalable=no, target-densitydpi=device-dpi,minimum-scale=\"+phoneScale+\",maximum-scale=\"+phoneScale+\"\";\r\n        head.appendChild(meta1);\r\n    };\r\n    var ua = navigator.userAgent;\r\n    if (/Android (\\d+\\.\\d+)/.test(ua)){\r\n        var version = parseFloat(RegExp.$1);\r\n        // andriod 2.3\r\n        if(version>2.3){\r\n            useScaledViewportMeta();\r\n            // andriod 2.3以上\r\n        }else{\r\n            var meta2 = document.createElement('meta');\r\n            meta2.name = 'viewport';\r\n            meta2.content = \"width=640, target-densitydpi=device-dpi\";\r\n            head.appendChild(meta2);\r\n        }\r\n        // 其他系统 iphone\r\n    } else {\r\n        useScaledViewportMeta();\r\n    }\r\n\r\n\r\n    var outerContent=document.getElementsByClassName('outer-page-wrap')[0];\r\n    outerContent.style.backgroundColor = '';\r\n    outerContent.style.width = '640px';\r\n    outerContent.style.margin = '0 auto';\r\n    outerContent.style.overFlow = 'hide';\r\n    outerContent.style.boxSizing = 'border-box';\r\n\r\n    setTimeout(function(){\r\n//      var header1=document.getElementsByClassName('header')[0];\r\n//      header1.style.display = 'none';\r\n    },1050);\r\n\r\n\r\n</script>\r\n</body>\r\n</html>\";";

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(105);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./node_modules/css-loader/index.js!./index1.css", function() {
				var newContent = require("!!./node_modules/css-loader/index.js!./index1.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "\r\n\r\n\r\n", ""]);

	// exports


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(107);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./node_modules/css-loader/index.js!./node_modules/less-loader/index.js?importLoaders=2!./node_modules/autoprefixer-loader/index.js!./node_modules/less-loader/index.js!./index1.less", function() {
				var newContent = require("!!./node_modules/css-loader/index.js!./node_modules/less-loader/index.js?importLoaders=2!./node_modules/autoprefixer-loader/index.js!./node_modules/less-loader/index.js!./index1.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  font-size: 22px;\n  font-family: '\\5FAE\\8F6F\\96C5\\9ED1';\n}\n.less-class-test {\n  color: #f00;\n  font-size: 40px;\n  background: #999;\n  text-decoration: none;\n}\na {\n  text-decoration: none;\n}\n", ""]);

	// exports


/***/ }
/******/ ]);