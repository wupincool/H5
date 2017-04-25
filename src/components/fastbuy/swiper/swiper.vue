<template>
  <div id="swiper">
    <!-- swiper -->
    <swiper :options="swiperOption">
      <swiper-slide id="list">
        <dl>
          <dt><img src="../../../img/shangpin_0.png"></dt>
          <dd><span>52新品五粮液</span><i>899</i></dd>
        </dl>
      </swiper-slide>
      <swiper-slide id="list">
        <dl>
          <dt><img src="../../../img/shangpin_0.png"></dt>
          <dd><span>52度新品五粮液</span><i>899</i></dd>
        </dl>
      </swiper-slide>
      <swiper-slide id="list">
        <dl>
          <dt><img src="../../../img/shangpin_0.png"></dt>
          <dd><span>52度新品五粮液</span><i>899</i></dd>
        </dl>
      </swiper-slide>
      <swiper-slide id="list">
        <dl>
          <dt><img src="../../../img/shangpin_0.png"></dt>
          <dd><span>52度新品五粮液</span><i>899</i></dd>
        </dl>
      </swiper-slide>
      <swiper-slide id="list">
        <dl>
          <dt><img src="../../../img/shangpin_0.png"></dt>
          <dd><span>52度新品五粮液</span><i>899</i></dd>
        </dl>
      </swiper-slide>
      <swiper-slide id="list">
        <dl>
          <dt><img src="../../../img/shangpin_0.png"></dt>
          <dd><span>52度新品五粮液</span><i>899</i></dd>
        </dl>
      </swiper-slide>
      <swiper-slide id="list">
        <dl>
          <dt><img src="../../../img/shangpin_0.png"></dt>
          <dd><span>52度新品五粮液</span><i>899</i></dd>
        </dl>
      </swiper-slide>
      <swiper-slide id="list">
        <dl>
          <dt><img src="../../../img/shangpin_0.png"></dt>
          <dd><span>52度新品五粮液</span><i>899</i></dd>
        </dl>
      </swiper-slide>
    </swiper>
    <div class="find">
      <div class="search">搜索</div>
      <input class="search_input">
      <button class="search_img"></button>
    </div>
    <div class="search_page" v-show="">
      <div class="search_top">
        <p class="search_top_word">搜索产品</p>
        <div class="search_top_input">
          <input>
          <img src="../../../img/search.png">
        </div>
      </div>
      <div class="search_content" ref="menuWrapper">
        <ul class="search_content_circle">
          <li class="search_content_circle_good"  v-for="item in goods" >
            <img class="good_img" src="../../../img/good.png">
            <div class="search_content_circle_good_name">{{item.name}}</div>
            <div class="search_content_circle_good_second">{{item.description}}</div>
            <div class="search_content_circle_good_price">
              <span class="search_content_circle_good_price_pr">{{item.price}}</span>
              <span class="search_content_circle_good_price_bg"></span>
            </div>
            <div class="cat"></div>
          </li>
        </ul>
      </div>
      <div class="search_bottom">
        <div class="search_bottom_back">
          <p>返回上一级</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';

  var ERR_OK = 0;

  export default {
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          slidesPerView: 3,
          paginationClickable: true,
          spaceBetween: 30,
          freeMode: false
        },
        goods: []
      };
    },
    created() {
      this.$http.get('/api/goods').then((response) => {
        response = response.body;
        console.log(response.data);
        if (response.errno === ERR_OK) {
          this.goods = response.data;
          this.$nextTick(() => {
            this._initScroll();
          });
        }
      });
    },
    methods: {
      _initScroll() {
        this.menuScroll = new BScroll(this.$refs.menuWrapper, {
          click: true
        });
      }
    }
  };
</script>
<style>
  #swiper{
    position: absolute;
    z-index:1;
    left: 0.45rem;
    top: 2rem;
    width: 2.87rem;
    height: 1.02rem;
    background: #c31820;
  }
  #list{
    width: 0.92rem;
    height: 1.02rem;
    /*margin-right:10rem;*/
  }
  #list dl {
    width:120%;
    height:100%;
  }
  #list dl dt{
    width: 0.90rem;
    height: 0.80rem;
    float:left;
  }
  #list dt img{
    width: 100%;
    height: 100%;
    display: inline-block;
  }
  #list dl dd{
    text-align: left;
    margin-left: -0.15rem;
    float:left;
    width: 130%;
    height:0.20rem;
    color: white;
    font-size: 0.12rem;
    -webkit-transform: scale(0.75);
  }
  #list dd span{
    display: inline-block;
    margin-top:0.10rem;
    height:0.10rem;
  }
  #list dd i{
    display: inline-block;
    margin-left: 0.01rem;
    font-size:0.20rem;
    line-height: 0.20rem;
    height:0.20rem;
  }
  .find{
    width: 2.86rem;
    height: 0.32rem;
    line-height: 0.32rem;
    background: #df2f32;
  }
  .search{
    float: left;
    width: 0.36rem;
    height: 0.32rem;
    font-size: 0.16rem;
    line-height: 0.32rem;
    color: white;
  }
  .search_input{
    float: left;
    margin-top: 0.05rem;
    width: 2.09rem;
    height: 0.23rem;
    font-size: 0.16rem;
    line-height: 0.24rem;
  }
  .search_img{
    float: left;
    background: url("../../../img/search.png") no-repeat center 0.05rem;
    background-size: 80% 80%;
    width: 0.3rem;
    border: none;
    height: 0.28rem;
    line-height: 0.28rem;
    margin-left: 0.1rem;
  }
  .search_page{
    position: absolute;
    z-index:1;
    top: -1.84rem;
    left: -0.12rem;
    width: 3.10rem;
    height: 4.92rem;
    background: #e72e3c;
    transform: scale(1.05);
  }
  .search_page .search_top .search_top_word{
    margin-top: 0.05rem;
    font-size: 0.22rem;
    color: #e3ffff;
  }
  .search_top_input{
    position: relative;
    width: 2.85rem;
    height: 0.21rem;
  }
  .search_top_input input{
    position: absolute;
    top: 0;
    left: 0.12rem;
    width: 2.54rem;
    height: 0.2rem;
    border: 1px solid #F0F0F0;
  }
  .search_top_input img{
    position: absolute;
    top: 0;
    left: 2.68rem;
    width: 0.29rem;
    height: 0.21rem;
  }
  .search_page .search_content{
    position: absolute;
    top: 0.61rem;
    left: 0.12rem;
    width: 2.87rem;
    height: 3.75rem;
    background: #ba0d11;
  }
  .search_content_circle{
    position: absolute;
    top: 0.12rem;
    left: 0.12rem;
    width: 2.62rem;
    height: 3.51rem;
    overflow: hidden;
    background: white;
  }
  .search_content_circle_good{
    position: relative;
    float: left;
    width: 1.285rem;
    height: 1.74rem;
    border: 0.01rem solid #7e8c8d;
  }
  .search_content_circle_good .good_img{
    position: relative;
    top: 0.11rem;
  }
  .search_content_circle_good_name{
    position: absolute;
    left: 15px;
    bottom: 40px;
    width: 1.05rem;
    font-size: 0.12rem;
    text-align: center;
    font-weight: bold;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

  }
  .search_content_circle_good_second{
    position: absolute;
    left: 15px;
    bottom: 25px;
    width: 1.05rem;
    font-size: 0.12rem;
    transform: scale(0.75);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #cfcfcf;
  }
  .search_content_circle_good_price{
    position: absolute;
    left: 0;
    bottom: 10px;
    width: 1.5rem;
    margin-top: 0.05rem;
    font-size: 0.12rem;
    color: #eb2f3d;
    text-align: left;
    text-indent: 15px;
  }
  .search_content_circle_good_price_bg{
    display: inline-block;
    width: 0.1rem;
    height: 0.1rem;
    background: url("../../../img/quan.png") no-repeat center;
  }
  .search_content_circle_good_price img{

    width: 0.16rem;
    height: 0.16rem;
    background: #007aff;
  }
  .cat{
    position: absolute;
    background: url("../../../img/shopcart.png") no-repeat center;
    right: 0.13rem;
    bottom:0.05rem;
    width: 0.17rem;
    height: 0.17rem;
  }
  .search_bottom{
    position: relative;
    top: 3.98rem;
    left: 0.12rem;
    width: 2.83rem;
    height: 0.26rem;
    font-size: 0.16rem;
    line-height: 0.26rem;
    color: #e3ffff;
    background: #7f060d;
  }
</style>
