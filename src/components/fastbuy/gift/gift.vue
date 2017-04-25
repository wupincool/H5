<template>
  <div class="gift">
    <div class="gift_tab">
      <router-link class="tab_item" to="/fastbuy"><</router-link>
      <router-view></router-view>
    </div>
    <div class="give">
      <router-link to="/give">
        <h2>发</h2>
      </router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
          return {
            showGift: false
          };
        },
        methods: {
          show() {
              this.showGift = true;
          },
          hide() {}
        }
    };
</script>

<style>
  .gift{
    position: fixed;
    z-index: 10;
    left: 0;
    top: 0;
    bottom: 63px;
    z-index: 30;
    width: 100%;
    background: #fff;
  }
  .gift_tab{
    position: relative;
  }
  .gift_tab .tab_item{
    position: absolute;
    line-height: 16px;
    left: 10px;
    top: 10px;
  }
  .gift .give{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;
    margin: -50px 0 0 -50px;
    background: red;
    border-radius: 50px;
    font-size: 80px;
    line-height: 100px;
  }
</style>
