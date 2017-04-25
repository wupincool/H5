import Vue from 'vue';
import Router from 'vue-router';
import welfare from '@/components/fastbuy/welfare/welfare';
import bill from '@/components/fastbuy/bill/bill';
import gift from '@/components/fastbuy/gift/gift';
import freedrink from '@/components/fastbuy/freedrink/freedrink';
import fastbuy from '@/components/fastbuy/fastbuy';
import choose from '@/components/choose/choose';
import give from '@/components/fastbuy/gift/give/give';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/fastbuy',
      component: fastbuy
    },
    {
      path: '/choose',
      component: choose
    },
    {
      path: '/welfare',
      component: welfare
    },
    {
      path: '/bill',
      component: bill
    },
    {
      path: '/gift',
      component: gift
    },
    {
      path: '/freedrink',
      component: freedrink
    },
    {
      path: '/give',
      component: give
    }
  ]
});
