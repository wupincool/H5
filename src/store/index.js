/**
 * Created by Administrator on 2017/4/26 0026.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions/index.js';
import mutations from './mutations/index.js';
import * as getters from './getters/index.js';

Vue.use(Vuex);

//  state
const state = {
  totalcount: 0,  // fastbuy 总瓶数
  totalprice: 0,    //  fastbuy 总价
  totalcount_wel: 0,  // fastbuy 优惠总数
  totalpost_price: 0, // fastbuy 配送费
  totallast_price: 0, // fastbuy 总计
  pageData: {}    //  fetch action 操作的值
};

//  把上面的融到一起
export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
});
