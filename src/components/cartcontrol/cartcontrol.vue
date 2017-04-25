<template>
	<div class="cartcontrol">
		<transition name="decrease">
				<div class="cart-decrease" v-show="food.count>0" @click="decreaseCart">
            <div class="inner icon-remove_circle_outline"></div>
        </div>
		</transition>
		<div class="cart-count" v-show="food.count>0"></div>
		<div class="cart-add icon-add_circle" @click="addCart"></div>
	</div>
</template>

<script>
	export default {
		methods: {
			addCart(event) {
				if (!event._constructed) {
					return;
				}
			},
			decreaseCart(event) {
				if (!event._constructed) {
					return;
				}
			}
		}
	};
</script>

<style>
	.cartcontrol{
		font-size: 0;
	}
	.cartcontrol .cart-decrease,.cart-add{
		display: inline-block;
		padding: 6px;
		line-height: 24px;
		font-size: 22px;
		color: rgb(0,160,220);
	}
  .decrease-enter-active, .decrease-leave-active {
    opacity: 1;
    transform: translate3D(0, 0, 0);
    transition: all 0.4s linear;
  }
  .decrease-enter, .decrease-leave-active {
    opacity: 0;
    transform: translate3D(24px, 0, 0);
  }
	.cartcontrol .cart-count{
		display: inline-block;
		vertical-align: top;
		width: 12px;
		padding-top: 6px;
		line-height: 24px;
		text-align: center;
		font-size: 10px;
		color: rgb(147,153,159);
	}
	.cartcontrol .cart-add{
		display: inline-block;
	}
</style>
