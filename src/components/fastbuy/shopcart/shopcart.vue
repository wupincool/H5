<!-- 确认订单页面 -->
<template>
  <div class="orderpage">
    <div class="order_border">
      <div class="order_title">
        <p>确认订单</p>
      </div>
      <div class="order_userinfo">
        <div class="user_name">
          <span class="order_userinfo_order_left">用户名:</span><span class="order_userinfo_order_right">久久久</span>
        </div>
        <div class="user_tel">
          <span class="order_userinfo_order_left">手机电话:</span><span class="order_userinfo_order_right">久久久</span>
        </div>
        <div class="user_address">
          <span class="order_userinfo_order_left_2">配送地址:</span>
          <select class="order_userinfo_order_select">
            <option value="volvo">杭州江干区东方电子商务园1号</option>
            <option value="saab">杭州江干区东方电子商务园2号</option>
            <option value="opel">杭州江干区东方电子商务园3号</option>
            <option value="audi">杭州江干区东方电子商务园4号</option>
          </select>
          <div class="order_userinfo_order_order_right"></div>
        </div>
        <div class="user_time">
          <span class="order_userinfo_order_left_2">配送时间:</span><span class="order_userinfo_order_right">5月3日 上午 11：00-12：00</span>
        </div>
      </div>
      <div class="order_detail">
        <div class="order_detail_title">
          <p>订单详情</p>
        </div>
        <div class="order_detail_content">
          <ul>
            <li>
              <div class="order_detail_content_left">
                <img src="../../../img/shangpin.png">
              </div>
              <div class="order_detail_content_mid">
                <p class="order_detail_content_mid_p1">￥899</p>
                <p class="order_detail_content_mid_p2">新品五粮液 52度 500ml</p>
              </div>
              <div class="order_detail_content_right">
                <span class="order_detail_content_right_p">X1</span>
                <input class="order_detail_content_right_input" name="checkbox" type="checkbox" value="" checked="checked"/>
              </div>
            </li>
          </ul>
        </div>
        <div class="order_detail_quan">
          <p class="order_detail_quan_p">优惠券</p>
        </div>
      </div>
      <div class="order_total">
        <div class="order_total_price">
          <span class="order_total_left">商品总额</span><span class="order_total_right">￥1798.00</span>
        </div>
        <div class="order_total_quan">
          <span class="order_total_left">优惠券</span><span class="order_total_right">￥-15.00</span>
        </div>
        <div class="order_total_delivery">
          <span class="order_total_left">配送费</span><span class="order_total_right">￥18.00</span>
        </div>
        <div class="order_total_all">
          <span class="order_total_left">总计</span><span class="order_total_right">￥1801.00</span>
        </div>
        <div class="order_total_payment">
          <span class="order_total_left">支付方式</span><span class="order_total_right">账户余额：0.00</span>
        </div>
      </div>
      <div class="order_payment">
        <div class="order_payment_zhifubao"></div>
        <div class="order_payment_weixin"></div>
        <div class="order_payment_yinlian"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style>
  .orderpage{
    position: fixed;
    left:0;
    top:0;
    right:0;
    bottom:0;
    background: #ffffff;
  }
  .order_border{
    margin: 0.2rem 0.2rem 0rem 0.2rem;
    color: #ffffff;
  }
  .order_title{
    height: 0.48rem;
    font-size: 0.24rem;
    line-height: 0.48rem;
    background: #e72e3c;
  }
  .order_userinfo{
    margin-top: 0.05rem;
    height: 1.08rem;
    background: #007aff;
  }
  .order_userinfo{
    font-size: 0.16rem;
  }
  .user_name{
    height: 0.27rem;
    background: #e72e3c;
  }
  .user_tel{
    height: 0.26rem;
    background: #da1b22;
  }
  .user_address{
    height: 0.28rem;
    background: #ba0d11;
  }
  .user_time{
    height: 0.3rem;
    background: #7f060d;
  }
  .order_userinfo_order_left{
    float: left;
    width: 0.8rem;
    height: 0.27rem;
    font-size: 0.12rem;
    line-height: 0.27rem;
    border-right: 0.01rem solid #bd2930;
  }
  .order_userinfo_order_left_2{
    float: left;
    width: 0.8rem;
    height: 0.27rem;
    font-size: 0.12rem;
    line-height: 0.27rem;
  }
  .order_userinfo_order_right{
    float: left;
    width: 1.96rem;
    height: 0.27rem;
    font-size: 0.12rem;
    line-height: 0.27rem;
  }
  .order_userinfo_order_select{
    float: left;
    width: 2.55rem;
    height: 0.27rem;
    font-size: 0.12rem;
    line-height: 0.27rem;
    border: none;
    background: #ba0d11;
    appearance:none;
    -moz-appearance:none;
    -webkit-appearance:none;
    color: #ffffff;
    text-align: center;
    background: url("../../../img/right_jiantou.png") no-repeat scroll right center transparent;
  }
  .order_detail{
    margin-top: 0.07rem;
    font-size: 0.14rem;
    background: #e72e3c;
  }
  .order_detail_title{
    height: 0.26rem;
    line-height: 0.26rem;
  }
  .order_detail_content{
    width: 100%;
    display: inline-block;
    background: #da1b22;
    font-size: 0.12rem;
  }
  .order_detail_content_left{
    float: left;
    display: block;
    margin-left: 0.15rem;
    width: 0.55rem;
    height: 0.55rem;
  }
  .order_detail_content_left img{
    float: left;
    width: 0.55rem;
    height: 0.55rem;
  }
  .order_detail_content_mid{
    float: left;
    width: 1.32rem;
    height: 0.55rem;
    background: #da1b22;
    text-align: left;
  }
  .order_detail_content_mid_p1{
    display: block;
    margin-top: 0.15rem;
    margin-left: 0.05rem;
    font-size: 0.16rem;
  }
  .order_detail_content_mid_p2{
    display: block;
    width: 1.76rem;
    margin-left: 0.05rem;
    height: 0.12rem;
  }
  .order_detail_content_right{
    float: right;
    width: 0.84rem;
    height: 0.55rem;
    background: #da1b22;
  }
  .order_detail_content_right_p{
    display: block;
    margin-top: 0.2rem;
  }
  .order_detail_content_right_input{
    float: right;
    margin-top: -0.12rem;
    margin-right: 0.1rem;
  }
  .order_detail_quan{
    height: 0.26rem;
    line-height: 0.26rem;
    text-align: left;
    background: #7f060d;
  }
  .order_detail_quan_p{
    margin-left: 0.1rem;
  }
  .order_total{
    margin-top: 0.05rem;
    height: 1.29rem;
    font-size: 0.16rem;
    line-height: 0.26rem;
    background: #e72e3c;
  }
  .order_total_price{
    height: 0.26rem;
  }
  .order_total_left{
    float: left;
    margin-left: 0.15rem;
    text-align: left;
    font-size: 0.12rem;
    width: 0.73rem;
  }
  .order_total_right{
    float: left;
    text-align: right;
    font-size: 0.12rem;
    width: 2.2rem;
  }
  .order_total_quan{
    height: 0.26rem;
    background: #da1b22;
  }
  .order_total_delivery{
    height: 0.26rem;
    background: #ba0d11;
  }
  .order_total_all{
    height: 0.26rem;
    background: #a40000;
  }
  .order_total_payment{
    height: 0.26rem;
    background: #ba0d11;
  }
  .order_payment{
    margin-top: 0.05rem;
  }
  .order_payment_zhifubao{
    display: inline-block;
    float: left;
    width: 0.86rem;
    height: 1.01rem;
    background: url("../../../img/zhifubao.png");
    background-size: 100% 100%;
  }
  .order_payment_weixin{
    display: inline-block;
    float: left;
    margin-left: 0.42rem;
    width: 0.84rem;
    height: 1.01rem;
    background: url("../../../img/weixin.png");
    background-size: 100% 100%;
  }
  .order_payment_yinlian{
    display: inline-block;
    float: right;
    width: 0.83rem;
    height: 1.01rem;
    background: url("../../../img/yinlian.png");
    background-size: 100% 100%;
  }
</style>
