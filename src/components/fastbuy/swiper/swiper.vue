<template>
  <div id="swiper">
    <!-- swiper -->
    <swiper :options="swiperOption">
    	<swiper-slide id="list" v-for="(good ,index) in goods">
        <dl s_index="index">
          <dt>
          	<img src="../../../img/shangpin_0.png">
          	<div class="fuzzy">选择产品</div>
          </dt>
          <dd><span>{{good.name}}</span><p>{{good.price}}</p></dd>
        </dl>
      </swiper-slide>
      
      <swiper-slide id="list" v-for="(good ,index) in goods">
        <dl>
          <dt>
          	<img src="../../../img/shangpin_0.png">
          </dt>
          <dd><span>{{good.name}}</span><p>{{good.price}}</p></dd>
        </dl>
      </swiper-slide>
      <swiper-slide id="list" v-for="(good ,index) in goods">
        <dl>
          <dt>
          	<img src="../../../img/shangpin_0.png">
          </dt>
          <dd><span>{{good.name}}</span><p>{{good.price}}</p></dd>
        </dl>
      </swiper-slide>
      <swiper-slide id="list" v-for="(good ,index) in goods">
        <dl>
          <dt>
          	<img src="../../../img/shangpin_0.png">
          </dt>
          <dd><span>{{good.name}}</span><p>{{good.price}}</p></dd>
        </dl>
      </swiper-slide>
    </swiper>
    
    <!--中间搜索框-->
    <div class="find">
      <div class="search">搜索</div>
      <input class="search_input">
      <button class="search_img"></button>
    </div>
    
    <!--搜索页面-->
    <div class="search_page" v-show="">
    	<!--头部-->
      <div class="search_top">
        <p class="search_top_word">搜索产品</p>
        <div class="search_top_input">
          <input>
          <img src="../../../img/search.png">
        </div>
      </div>
      
      <!--商品列表-->
      <div class="search_content" ref="menuWrapper">
      	
        <ul class="search_content_circle">
        	
        	<!--点击显示的商品-->
        	<li class="clickGood" v-show="showClickGood">
        		<div class="clickGood_img">
	      			<img src="../../../img/click_img.jpg">
	      		</div>
	      		<h2>{{clickGood_showname}}<span>{{clickGood_price}}</span>元</h2>
	      		<div class="clickGood_des">
	      			<h1 class="addGoodOK"  v-if="showAddGoodOK">添加成功</h1>
	      			<a class="clickGood_des_viewDetails">查看详情</a>
	      			<a class="addGood" @click="clickGood_None()">确认添加</a>
	      			
	      		</div>
        	</li>
        	
          <li class="search_content_circle_good" v-for="item in goods" @click="showGoodFun(item)">
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
      
      <!--返回-->
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
          spaceBetween: 10, // 间距
          freeMode: false
        },
        goods: [],
        showClickGood: false,
        showAddGoodOK: false,
        clickGood_showname: '',
        clickGood_price: '',
        fristshow: false,
        secondshow: false,
        thirdshow: false
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
      },
      showGoodFun(item) { // 点击商品，弹出框：显现的函数
      	this.showClickGood = true;
      	this.clickGood_showname = item.name;
      	this.clickGood_price = item.price;
      },
      clickGood_None() { // 确认添加成功之后，弹出提示框信息
				setTimeout(() => {
            this.showAddGoodOK = true;
        }, 300);
				setTimeout(() => {
            this.showAddGoodOK = false;
						this.showClickGood = false;
        }, 2000);
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
    /*height: 1.02rem;*/
    background: #c31820;
  }
  #list{
    /*width: 0.92rem;
    height: 1.02rem;*/
    /*margin-right:10rem;*/
  }
  #list dl {
    width:100%;
    height:100%;
    display: inline-block;
  }
  #list dl dt{
    width: 100%;
    height: 100%;
    float:left;
    display: inline-block;
    position: relative;
  }
  #list dt img{
    width: 100%;
    height: 100%;
    float:left;
    display: inline-block;
  }
  #list dt .fuzzy{
  	width: 0.39rem;
  	height: 0.58rem;
  	line-height: 0.26rem;
  	border: 1px solid #fff;
  	color: #fff;
  	background: #f1969d;
  	font-size: 0.19rem;
  	padding: 0.1rem 0.24rem;
  	position: absolute;
  	left: 0;
  	top: 0;
  	opacity: 0.7;
  }
  
  #list dl dd{
  	width: 100%;
  	text-align: left;
  	display: inline-block;
    float:left;
    color: white;
  }
  #list dd span{
  	font-size: 0.1rem;
  	display: inline-block;
  	max-width: 0.55rem;
  	height:0.16rem;
    line-height: 0.16rem;
    margin-top: 0.04rem;
    float: left;
    white-space:nowrap;
    text-overflow:ellipsis;
    overflow:hidden; 
  }
  #list dd p{
  	float: right;
  	min-width: 0.3rem;
    display: inline-block;
    margin-left: 0.01rem;
    font-size:0.18rem;
    line-height: 0.20rem;
    height:0.20rem;
  }
  
  .find{
    width: 100%;
    height: 0.32rem;
    line-height: 0.32rem;
    background: #df2f32;
    margin-top: -0.05rem;
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
    height: 5.01rem;
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
  
  
  .clickGood{
  	display: inline-block;
  	width: 101%;
  }
  
  	.clickGood_img{
  		width: 100%;
  		height: 1.6rem;
  	}
  		.clickGood_img img{
  			width: 100%;
  			height: 100%;
  		}
  	.clickGood h2{
  		font-size: 0.14rem;
  		line-height: 0.28rem;
  		width: 100%;
  		height: 0.28rem;
  		border-bottom: 1px solid #ca1e26;
  		border-top:  1px solid #ca1e26;
  		background: #e72e3c;
  		color: #fff;
  	}
  		.clickGood h2 span{
  			font-size: 0.18rem;
  			display: inline-block;
  			margin: 0 0.05rem;
  		}
  	.clickGood_des{
  		width: 100%;
  		display: flex;
  		position: relative;
  	}
  	.clickGood_des a{
  		flex:1;
  		display: inline-block;
  		padding: 0.062rem 0.5rem;
  		font-size: 0.14rem;
  		line-height: 0.2rem;
  		color: #fff;
  	}
  		.clickGood_des_viewDetails{
  			background: #ba0d11;
  		}
  		.addGood{
  			background: #7f060d;
  		}
  
  	.addGoodOK{
  		position: absolute;
  		left: 0;
  		top: -1.2rem;
  		width: 100%;
  		font-size: 0.18rem;
  		color: red;
  		padding: 0.2rem 0;
  		z-index: 100;
  		background: #fff;
  	}
  
  
  
  
  
  .search_content_circle_good{
    position: relative;
    float: left;
    width: 1.3rem;
    height: 1.74rem;
    border: 0.01rem solid #7e8c8d;
    border-right: none;
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
    position: absolute;
    top: 4.65rem;
    left: 0.12rem;
    width: 2.83rem;
    height: 0.26rem;
    font-size: 0.16rem;
    line-height: 0.26rem;
    color: #e3ffff;
    background: #7f060d;
  }
</style>
