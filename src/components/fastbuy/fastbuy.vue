<template>
  <div class="fastbuy">
    <swiper></swiper>
    <!--<div class="back-tab">-->
      <!--<router-link class="tab_item" to="/app"><</router-link>-->
      <!--<router-view></router-view>-->
    <!--</div>-->
    <div class="top-item">
      <img src="./map.png">
    </div>
    <div class="fastbuy_content">
      <div class="content_detail">
        <div class="detail_left">
          <p>2<span>瓶</span></p>
        </div>
        <div class="detail_right">
          <div class="total_first_price">
            <p class="left">总价 899*2</p><p class="right">1798<span>元</span></p>
          </div>
          <div class="wel_price">
            <p class="left">优惠</p><p class="right">70<span>元</span></p>
          </div>
          <div class="post_price">
            <p class="left">配送费</p><p class="right">20<span>元</span></p>
          </div>
          <div class="total_last_price">
            <p class="left">总计</p><p class="right">1710<span>元</span></p>
          </div>
        </div>
      </div>
      <div class="pay" @click="pay">立即结算</div>
    </div>
    <div class="fastpaydetail" v-show="showPay">价格</div>
    <div class="bottom">
      <router-link class="tab_item" to="/bill">
        <img src="../../img/wo.png">
      </router-link>
      <router-link class="tab_item" to="/freedrink">
        <img src="../../img/na.png">
      </router-link>
      <router-link class="tab_item" to="/shopcart">
        <img src="../../img/jiao.png">
      </router-link>
      <router-link class="tab_item" to="/gift" >
        <img src="../../img/hong.png">
      </router-link>
      <router-link class="tab_item" to="/amap">
        <img src="../../img/fu.png">
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import swiper from './swiper/swiper';
    export default {
      data() {
        return {
          showFlag: true,
          showPay: false
//          giveData:{  //vue2.0将数据定位对象的形式，实现父子组件的通信
//            height:300,
//            longitude:116.404,
//            latitude:39.915
//          },
//          giveOutData:{
//            height:400,
//            longitude:116.417854,
//            latitude:39.921988
//          }
          };
        },
      methods: {
          hidefast() {
           this.showFlag = false;
         },
         show() {
           this.showFlag = true;
         },
          pay() {
              this.showPay = true;
          }
      },
      components: {
        swiper
      }
    };
</script>

<style>
  .fastbuy{
    position: fixed;
    left:0;
    top:0;
    right:0;
    bottom:0;
    background: #fbf4ea;
    margin:0 auto;
    overflow: hidden;
  }
  .top-item{
    position: absolute;
    top: 0.15rem;
    left: 0.33rem;
    width: 3.10rem;
    height: 3.20rem;
    background: #df2f32;
  }
  .top-item img{
    position: absolute;
    top: 0.10rem;
    left: 0.13rem;
    width: 2.87rem;
    height: 1.69rem;
  }
  .fastbuy_content{
    position: absolute;
    top: 3.45rem;
    left: 0.34rem;
    width: 3.07rem;
    height: 1.75rem;
    background: yellow;
    color: white;
  }
  .fastbuy_content .detail_left{
    position: absolute;
    top: 0;
    left: 0;
    width: 1.38rem;
    height: 1.48rem;
    background: #ba0d11;
  }
  .fastbuy_content .detail_left p{
    font-weight: bold;
    font-size: 1.08rem;
    line-height: 1.47rem;
    font-family: 黑体;
  }
  .fastbuy_content .detail_left span{
    font-size: 0.16rem;
    line-height: 0.16rem;
  }
  .fastbuy_content .detail_right{
    position: absolute;
    top: 0rem;
    left: 1.38rem;
    width: 1.70rem;
    height: 1.48rem;
  }
  .fastbuy_content .detail_right .total_first_price{
    position: absolute;
    top: 0rem;
    width: 1.70rem;
    height: 0.37rem;
    background: #e72e3c;
  }
  .fastbuy_content .detail_right .total_first_price .left{
    position: absolute;
    top: 0.20rem;
    left: 0.02rem;
    font-size: 0.12rem;
  }
  .fastbuy_content .detail_right .total_first_price .right{
    position: absolute;
    top: 0.14rem;
    right: 0.02rem;
    font-size: 0.18rem;
  }
  .fastbuy_content .detail_right .total_first_price .right span{
    top: 0.20rem;
    font-size: 0.12rem;
  }
  .fastbuy_content .detail_right .wel_price{
    position: absolute;
    top: 0.37rem;
    width: 1.70rem;
    height: 0.37rem;
    background: #d91c22;
  }
  .fastbuy_content .detail_right .wel_price .left{
    position: absolute;
    top: 0.20rem;
    left: 0.02rem;
    font-size: 0.12rem;
  }
  .fastbuy_content .detail_right .wel_price .right{
    position: absolute;
    top: 0.14rem;
    right: 0.02rem;
    font-size: 0.18rem;
  }
  .fastbuy_content .detail_right .wel_price .right span{
    top: 0.20rem;
    font-size: 0.12rem;
  }
  .fastbuy_content .detail_right .post_price{
    position: absolute;
    top: 0.74rem;
    width: 1.70rem;
    height: 0.37rem;
    background: #ba0d11;
  }
  .fastbuy_content .detail_right .post_price .left{
    position: absolute;
    top: 0.20rem;
    left: 0.02rem;
    font-size: 0.12rem;
  }
  .fastbuy_content .detail_right .post_price .right{
    position: absolute;
    top: 0.14rem;
    right: 0.02rem;
    font-size: 0.18rem;
  }
  .fastbuy_content .detail_right .post_price .right span{
    top: 0.20rem;
    font-size: 0.12rem;
  }
  .fastbuy_content .detail_right .total_last_price{
    position: absolute;
    top: 1.11rem;
    width: 1.70rem;
    height: 0.37rem;
    background: #a40000;
  }
  .fastbuy_content .detail_right .total_last_price .left{
    position: absolute;
    top: 0.20rem;
    left: 0.02rem;
    font-size: 0.12rem;
  }
  .fastbuy_content .detail_right .total_last_price .right{
    position: absolute;
    top: 0.14rem;
    right: 0.02rem;
    font-size: 0.18rem;
  }
  .fastbuy_content .detail_right .total_last_price .right span{
    top: 0.20rem;
    font-size: 0.12rem;
  }
  .back-tab .tab_item{
    position: absolute;
    line-height: 0.16rem;
    left: 0.10rem;
    top: 0.10rem;
  }
  .fastbuy_content .pay{
    position: absolute;
    top: 1.48rem;
    left: 0;
    width: 3.08rem;
    height: 0.36rem;
    font-size: 0.3rem;
    line-height: 0.36rem;
    background: #7f060d;
    display: inline-block;
  }
  .bottom{
    display: flex;
    position: fixed;
    z-index: 5;
    left:0;
    bottom: 0;
    width: 100%;
    height: 0.53rem;
    text-align: center;
    background: #ffffff;
  }
  .bottom img{
    height: 0.50rem;
  }
  .tab_item{
    flex: 1;
    text-align: center;
    display: block;
    text-decoration: none;
    font-size: 0.24rem;
    height: 0.63rem;
    line-height: 0.63rem;
    color: rgb(77,85,93);
  }
  .fastbuy .fastpaydetail{
    position: absolute;
    width: 1.60rem;
    height: 2.00rem;
    bottom: 1.00rem;
    left: 50%;
    margin-left: -0.80rem;
    background: #CAE1FF;
  }
</style>
