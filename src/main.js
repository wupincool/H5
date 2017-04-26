// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import VueResource from 'vue-resource';
import AMap from 'vue-amap';
import store from './store/index.js';    //  store

Vue.use(AMap);
// 初始化vue-amap
AMap.initAMapApiLoader({
  // 申请的高德key
  key: '98a7ec968c2b2d7a45f30c0f5ac32ee6',
  // 插件集合
  plugin: ['']
});

/* 把axios对象挂到Vue实例上面，其他组件在使用axios的时候直接 this.$http就可以了 */
Vue.prototype.$http = axios;
Vue.use(VueAwesomeSwiper);
Vue.use(VueResource);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
});
