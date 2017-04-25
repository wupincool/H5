<template>
  <div class="give">
    <div class="give_tab">
      <router-link class="tab_item" to="/gift"><</router-link>
      <router-view></router-view>
    </div>
    <div class="give-content">
      <div class="pic">
        <img src="./puwu.png">
        <div class="price">{{price1}}</div>
        <div class="control">
          <div class="decrease" @click="dec1">-</div>
          <div class="num">{{num1}}</div>
          <div class="add" @click="add1">+</div>
        </div>
      </div>
      <div class="pic">
        <img src="./puwu.png">
        <div class="price">{{price2}}</div>
        <div class="control">
          <div class="decrease" @click="dec2">-</div>
          <div class="num">{{num2}}</div>
          <div class="add" @click="add2">+</div>
        </div>
      </div>
      <div class="totalprice">
        <div>总价:{{totalprice}}</div>
      </div>
      <div class="pay" @click="showpaydetail">
        支付
      </div>
    </div>
    <div class="paydetail" v-show="showpay">
      <p class="paytotal">总价:{{totalprice}}</p>
      <div class="wxpay">微信支付</div>
      <div class="del" @click="hidepaydetail">取消</div>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                num1: 0,
                num2: 0,
                price1: 850,
                price2: 750,
                totalprice: 0,
                showpay: false
            };
        },
        methods: {
            dec1() {
                if (this.num1 <= 0) {
                    return;
                }
                this.num1 --;
                this.totalprice = this.totalprice - this.price1;
            },
            add1() {
                this.num1 ++;
                this.totalprice = this.totalprice + this.price1;
            },
            dec2() {
              if (this.num2 <= 0) {
                return;
              }
              this.num2 --;
              this.totalprice = this.totalprice - this.price2;
            },
            add2() {
              this.num2 ++;
              this.totalprice = this.totalprice + this.price2;
            },
            showpaydetail() {
                this.showpay = true;
            },
            hidepaydetail() {
                this.showpay = false;
            }
        }
    };
</script>

<style>
  .give{
    position: fixed;
    z-index: 10;
    left: 0;
    top: 0;
    bottom: 63px;
    z-index: 30;
    width: 100%;
    background: #fff;
  }
  .give .give-content{
    position: absolute;
    margin: 50px 50px 0 50px;
    background: #E6E6FA;
  }
  .give .give-content .pic{
    width: 100px;
    height: 150px;
    margin: 0 30px 0 0;
    display: inline-block;
  }
  .give .give-content img{
    width: 100px;
    height: 100px;
  }
  .control{
    position: relative;
    margin: 0 20px 0 20px;
  }
  .control .decrease,.num,.add{
    float: left;
    width: 20px;
  }
  .give_tab{
    position: relative;
  }
  .give_tab .tab_item{
    position: absolute;
    line-height: 16px;
    left: 10px;
    top: 10px;
  }
  .give-content .pay{
    width: 100px;
    height: 50px;
    line-height: 50px;
    border-radius: 10px;
    margin: 0 auto;
    background: #FF3030;
  }
  .paydetail{
    position: relative;
    width: 200px;
    height: 200px;
    margin: 0 auto;
    top: 200px;
    background: #DBDBDB;
    text-align: center;
  }
  .paydetail .paytotal{
    position: absolute;
    bottom: 20px;
    width: 100px;
    height: 20px;
    line-height: 20px;
    left: 50px;
    background: #EE00EE	;
  }
  .paydetail .wxpay{
    position: absolute;
    left: 20px;
    bottom: 0;
  }
  .paydetail .del{
    position: absolute;
    right: 20px;
    bottom: 0;
  }
</style>
