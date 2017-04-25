//福利组件
<template>
  <div class="welfare">
    <div class="welfare_tab">
      <router-link class="tab_item" to="/fastbuy"><</router-link>
      <router-view></router-view>
    </div>
    <div>
      <input v-model="newItem" @keyup.enter="addNew">
      <ul>
        <li v-for="item in items">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showWelfare: false,
        items: [
            1
            ],
        newItem: ''
      };
    },
    methods: {
      show() {
          this.showWelfare = true;
      },
      hide() {},
      addNew() {
          this.items.push(this.newItem);
          this.newItem = '';
      }
    }
  };
</script>

<style>
  .welfare{
    position: fixed;
    z-index: 10;
    left: 0;
    top: 0;
    bottom: 63px;
    z-index: 30;
    width: 100%;
    background: #fff;
  }
  .welfare_tab{
    position: relative;
  }
  .welfare_tab .tab_item{
    position: absolute;
    line-height: 16px;
    left: 10px;
    top: 10px;
  }
</style>
