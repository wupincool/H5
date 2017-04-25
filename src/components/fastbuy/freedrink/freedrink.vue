<template>
  <div class="freedrink">
    <div class="freedrink_tab">
      <router-link class="tab_item" to="/fastbuy"><</router-link>
      <router-view></router-view>
    </div>
    <div>
      <img src="./puwu.png">
      <input v-model="message">
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showDrink: false,
        message: 'puwu',
        url: './puwu.png'
      };
    },
    methods: {
      show() {
          this.showDrink = true;
      },
      hide() {}
    },
    components: {
    }
  };
</script>

<style>
  .freedrink{
    position: fixed;
    z-index: 10;
    left: 0;
    top: 0;
    bottom: 63px;
    z-index: 30;
    width: 100%;
    background: #fff;
  }
  .freedrink_tab{
    position: relative;
  }
  .freedrink_tab .tab_item{
    position: absolute;
    line-height: 16px;
    left: 10px;
    top: 10px;
  }
</style>
