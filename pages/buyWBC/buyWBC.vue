<template>
	<view class="buyWBC">
		<image src="http://www.dbl.name/wbc/static/images/链接你我.png"></image>
		<view class="btn" @tap="showModal">
			立即购买
		</view>
		<Pop :show="modalShow" type="bottom" @hidePopup="close">
			<view class="modal_cont">
				<view class="title">
					<view class="close" @tap="close">
						X
					</view>
					确认付款
				</view>
				<view class="num">
					￥200.00
				</view>
				<view class="pay_type">
					请选择付款方式
				</view>
				<view class="wora">
					<image src="http://www.dbl.name/wbc/static/images/微信.png" class="img" @tap="weichat"></image>
					<image src="http://www.dbl.name/wbc/static/images/支付宝 copy.png" class="img" @tap="alipay"></image>
				</view>
			</view>
		</Pop>
		<Pop :show="payShow" type="bottom" @hidePopup="closePayShow">
			<view class="pay_modal">
				<view class="pay_top">
					<view class="money_icon">
						<image src="http://www.dbl.name/wbc/static/images/BTC-比特币.png"></image>
					</view>
					<view class="money_num">
						￥{{this.price}}.00
					</view>
				</view>
				<view class="pay_mid">
					<view class="pay_name">
						购买数量
					</view>
					<view class="pay_num">
						<NumBox :min="1" :value="num" @change="getNum"></NumBox>
					</view>
				</view>
				<view class="pay_mid">
					<view class="pay_name">
						附加值
					</view>
					<view class="pay_num">
						冬革阿里产品<text>1</text>件
					</view>
				</view>
				<view class="btn order_btn" @tap="pay">
					确认订单
				</view>
			</view>
		</Pop>
	</view>
</template>

<script>
	import Pop from '../../components/pop.vue'
	import NumBox from '../../components/numBox.vue'
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
				price: 500,
				modalShow: false,
				payShow: false,
				num: 1,
				type: 1, //1微信 2支付宝
			};
		},
		components: {
			Pop,
			NumBox
		},
		computed: {
			...mapState({
				personInfo: state => {
					return state.personInfo
				}
			})
		},
		methods: {
			//获取数量
			getNum(val) {
				this.num = val
			},
			closePayShow() {
				this.payShow = false
			},
			showModal() {
				this.modalShow = true
			},
			close() {
				this.modalShow = false
			},
			weichat() {
				uni.showToast({
					title: '暂时不支持微信支付',
					duration: 1000,
					icon: 'none'
				});
				// 				
				// 				this.type = 1
				// 				this.payShow = true
			},
			alipay() {
				this.type = 2
				this.payShow = true
			},
			pay() {
				if (this.type === 1) {

				} else if (this.type === 2) {
					this.aliyPay()
				}
			},
			aliyPay() {
				uni.request({
					method: 'POST',
					url: 'http://www.dbl.name/index.php/' + this.url.alipayPay, //仅为示例，并非真实接口地址。
					data: {
						uid: this.personInfo.id,
						goods_name: 'wbc充值',
						charge: this.price,
						type: 'wbc',
						num: this.num
					},
					header: {
						"Content-Type": "application/x-www-form-urlencoded" //自定义请求头信息
					},
					success(res) {
						uni.requestPayment({
							provider: 'alipay',
							orderInfo: res.data, //订单数据
							success: function(res) {
								uni.showToast({
									title: '购买成功',
									duration: 1000,
								});
							},
							fail: function(err) {
								uni.showToast({
									title: '购买失败',
									duration: 1000,
									icon: 'none'
								});
							}
						});
					}
				});
			}
		}
	}
</script>

<style scoped>
	.buyWBC {
		padding: 30upx;
	}

	.buyWBC>image {
		height: 826upx;
		border-radius: 20upx;
		width: 100%;
		margin-bottom: 168upx;
	}

	.btn {
		height: 80upx;
		line-height: 80upx;
		text-align: center;
		color: #fff;
		font-size: 30upx;
		background: linear-gradient(to right, rgb(0, 26, 110), rgb(0, 48, 205));
		border-radius: 10upx;
	}

	.modal_cont {
		background: #fff;
	}

	.title {
		font-size: 40upx;
		position: relative;
		height: 107upx;
		line-height: 107upx;
		border-bottom: 1upx solid #dddddd;
		color: rgb(51, 51, 51);
	}

	.title .close {
		position: absolute;
		right: 30upx;
		top: 35upx;
		width: 38upx;
		text-align: center;
		line-height: 38upx;
		height: 38upx;
		color: #666666;
	}

	.num {
		font-size: 60upx;
		text-align: center;
		height: 46upx;
		line-height: 46upx;
		padding-top: 74upx;
		padding-bottom: 64upx;
		color: #333333;
	}

	.pay_type {
		font-size: 30upx;
		line-height: 29upx;
		height: 29upx;
		color: #333333;
		padding-bottom: 56upx;
	}

	.wora {
		display: flex;
		justify-content: center;
		padding-bottom: 52upx;
	}

	.wora .img {
		width: 102upx;
		height: 102upx;
		margin-right: 117upx;
	}

	.wora .img:nth-of-type(2) {
		margin-right: 0;
	}

	.pay_modal {
		padding: 0 30upx;
		padding-top: 30upx;
		background: #fff;
	}

	.pay_top {
		display: flex;
		margin-bottom: 85upx;
	}

	.pay_top .money_icon {
		width: 215upx;
		height: 215upx;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 40upx;
		border: 1upx solid #dddddd;
	}

	.pay_top .money_icon image {
		width: 178upx;
		height: 178upx;
	}

	.pay_top .money_num {
		font-size: 60upx;
		height: 46upx;
		line-height: 46upx;
		color: #f6931a;
		padding-top: 41upx;
	}

	.pay_mid {
		display: flex;
		height: 55upx;
		line-height: 55upx;
		font-size: 30upx;
		color: #333333;
		margin-bottom: 40upx;
	}

	.pay_mid .pay_name {
		width: 140upx;
		text-align: left;
	}

	.pay_num text {
		color: #f6931a;
		padding: 0 20upx;
	}

	.order_btn {
		margin-top: 20upx;
		margin-bottom: 60upx;
	}
</style>
