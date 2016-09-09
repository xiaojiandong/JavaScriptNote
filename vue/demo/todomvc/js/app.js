


/*global Vue, todoStorage */
(function (exports) {
	//import todoStorage from 'store.js';
	'use strict'; // 严格模式

	console.log('todoStorage : ');
	console.log(todoStorage);
	console.log(todoStorage.fetch());
	//console.log(todoStorage.fetch() instanceof Array);//true
    // 过滤器
	var filters = {
		// 全部
		all: function (todos) {
			return todos;
		},
		// 将要做
		active: function (todos) {
			return todos.filter(function (todo) {
				// 在返回的单条todo中添加了completed属性
				return !todo.completed;
			});
		},
		// 已完成
		completed: function (todos) {
			return todos.filter(function (todo) {
				return todo.completed;
			});
		}
	};

	exports.app = new Vue({
		// the root element that will be compiled
		el: '.todoapp',
		// app initial state
		data: {
			todos: todoStorage.fetch(),// ?获取本地存储
			newTodo: '', // 用户在输入框中输入的值
			editedTodo: null, // 需要编辑的数据
			visibility: 'all'
		},
		// watch todos change for localStorage persistence
		// 监听左侧复选框的变化
		watch: {
			todos: { // 监听todos的变化
				handler: function (todos) { // handler
				  console.log('todos : ');
				  console.log(todos);
				  todoStorage.save(todos);//本地存储todos的值
				},
				deep: true // 深度监听
			}
		},

		// computed properties
		// http://vuejs.org/guide/computed.html
		computed: { // 计算属性
            // 过滤todos
			filteredTodos: function () {
				console.log('filteredTodos');
				return filters[this.visibility](this.todos);
			},
			// 剩下下来的全部todos的长度
			remaining: function () {
				return filters.active(this.todos).length;
			},
			// 全部完成的todos
			allDone11: {
				get: function () {
					return this.remaining === 0;
				},
				set: function (value) {
					alert('当前的checkbox的属性变化了');
					/**
					 * 遍历全部的todos，
					 * 并添加completed属性
					 */
					this.todos.forEach(function (todo) {
						todo.completed = value;
						console.log('todo : ');
						console.log(todo);
						console.log('value : ');
						console.log(value);
					});
					console.log('this.allDone : ');
					console.log(this.allDone);
				}
			}
		},

		// methods that implement data logic.
		// note there's no DOM manipulation here at all.
		methods: {
			// 头部输入框enter键的方法
			addTodo: function () {
				var value = this.newTodo && this.newTodo.trim();
				if (!value) {
					return;
				}
				this.todos.push({ title: value, completed: false });
				this.newTodo = '';
				alert(value);
			},
			// 右侧删除btn方法
			removeTodo: function (todo) {
				console.log(this.todos);
				console.log(todo);
				this.todos.$remove(todo);
			},
			// 双击中间文案的方法
			editTodo: function (todo) {
				console.log('双击todo后：');
				console.log(todo);
				// beforeEditCache -> 在编辑之前，先存储当前的数据
				this.beforeEditCache = todo.title;
				// editedTodo -> 正在编辑的数据
				this.editedTodo = todo;
			},
			// 双击后的编辑输入框，失去焦点或输入enter键
			doneEdit: function (todo) {
				if (!this.editedTodo) {
					return;
				}
				this.editedTodo = null;
				todo.title = todo.title.trim();
				if (!todo.title) {
					this.removeTodo(todo);
				}
			},
            // 双击后的编辑输入框，退出方法
			cancelEdit: function (todo) {
				this.editedTodo = null;
				todo.title = this.beforeEditCache;
			},

			removeCompleted: function () {
				this.todos = filters.active(this.todos);
			}
		},
        // 初始化立即执行
		ready : function(){
			/**
			 * todos: todoStorage.fetch(),// ?
			 newTodo: '', // 用户在输入框中输入的值
			 editedTodo: null,
			 visibility: 'all'
 			 * @type {exports.app}
			 * @private
			 */
	      var _this = this;
		  console.log( _this.newTodo );
		},

		// a custom directive to wait for the DOM to be updated
		// before focusing on the input field.
		// http://vuejs.org/guide/custom-directive.html
		directives: { // 指令
			/*
			 * vue指令是异步更新的，
			 * 要在数据更新后修改DOM，
			 * 这必须在Vue.nextTick()里面的回调中执行
			 */
			'todo-focus': function (value) {
				if (!value) {
					return;
				}
				// el指 J_db_input 这个id的元素
				var el = this.el;
				Vue.nextTick(function () {
					el.focus();
					alert('数据更新后DOM修改后的回调');
				});
			}
		}
	});

})(window);
