/*jshint unused:false */

(function (exports) {

	'use strict';
    // 本地存储的 key
	var STORAGE_KEY = 'todos-vuejs-local';

	exports.todoStorage = {
		// 获取 本地存储的数据
		fetch: function () {
			return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
		},
		// 保存 本地存储的数据
		save: function (todos) {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
		}
	};

})(window);
