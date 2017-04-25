<template>
  <div id="app">
    <router-link to="/fastbuy" ><div class="fast"><img src="./img/vip.png"></div></router-link>
    <div class="saoyisao"></div>
    <router-link to="/choose" ><div class="choose"><img src="./img/main.png"></div></router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  import choose from './components/choose/choose.vue';
  import fastbuy from './components/fastbuy/fastbuy.vue';
export default {
  name: 'app',
  data() {
      return {
          fastShow: false,
          chooseShow: false
      };
  },
  methods: {
    showfast() {
        this.$refs.fastbuy.show();
    },
    showchoose() {
        this.chooseShow = !this.chooseShow;
    }
  },
  components: {
      choose,
      fastbuy
  }
};
</script>

<style>
  body{
    text-align: center;
  }
  #app {
    position: absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
    background: #ffffff;
    padding:0.21rem 0.69rem 0 0.69rem;
  }
  .fast{
    width: 2.4rem;
    height: 2.4rem;
  }
  .fast img{
    width: 2.4rem;
    height: 2.4rem;
  }
  .saoyisao{
    width: 2.57rem;
    height: 0.64rem;
    background: url("./img/saoyisao.png") no-repeat center;
  }
  .choose{
    width: 2.4rem;
    height: 2.4rem;
  }
  .choose img{
    width: 2.4rem;
    height: 2.4rem;
  }
</style>
