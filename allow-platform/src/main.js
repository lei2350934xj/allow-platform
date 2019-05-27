// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 引入组件 后面可能会引入N多个组件 ...
import App from './components/App.vue';
// import router from './router'
// 引入elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入axios
import axios from 'axios';
Vue.prototype.$http = axios;	// axios是不能在其他组件中使用，所以将axios改写成vue的原型属性
axios.defaults.baseURL = '/api';

// 引入路由模块
import router from './router/router.js';

Vue.use(ElementUI);
Vue.config.productionTip = false

// 1-自动挂载 用 el
new Vue({
	el : '#app',
	router,
	render: h=>h(App)
});
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
