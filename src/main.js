// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import VueResource from 'vue-resource';

/* 把axios对象挂到Vue实例上面，其他组件在使用axios的时候直接 this.$http就可以了 */
Vue.prototype.$http = axios;
Vue.use(VueAwesomeSwiper);
Vue.use(VueResource);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
});
