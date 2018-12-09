<template>
	<view class="index_page">
		<view class="index_page_top">
			<view class="header">
				<view class="header_left">
					<image src="http://www.dbl.name/wbc/static/images/logo.png" class="logo"></image>
					<view class="logo_name">
						冬宝链
					</view>
				</view>
				<view class="header_right">
					<image src="http://www.dbl.name/wbc/static/images/扫一扫@2x.png" class="sao"></image>
				</view>
			</view>
			<view class="profit">
				<view class="profit_name">产链权益系数</view>
				<view class="profit_num">{{coefficient}}</view>
			</view>
			<view class="banner">
				<image class="banner_pic" src="http://www.dbl.name/wbc/static/images/banner.png">
				</image>
				<view class="banner_text">
					<image src="http://www.dbl.name/wbc/static/images/通知@2x.png" class="notice_pic"></image>
					<view class="notice">
						冬宝链v1.0正式上线了！
					</view>
				</view>
				<view class="slider_lists">
					<view class="slider_list">
						<view class="slider_list_top">
							<image src="http://www.dbl.name/wbc/static/images/存储@2x.png"></image>
							<view class="slider_list_name">
								WBC存储量
							</view>
						</view>
						<view class="slider_list_num">
							{{$store.state.personInfo.balance}}
						</view>
					</view>
					<view class="slider_line">

					</view>
					<view class="slider_list">
						<view class="slider_list_top">
							<image src="http://www.dbl.name/wbc/static/images/收益(1)@2x.png"></image>
							<view class="slider_list_name">
								WBC预期收益
							</view>
						</view>
						<view class="slider_list_num">
							106,705.0000
						</view>
					</view>
				</view>
			</view>
			<view class="to_buy" @tap="buyWbc">
				<view class="buy_btn">
					<image src="http://www.dbl.name/wbc/static/images/购买按钮.png" class="buy_btn_pic"></image>
					<image src="http://www.dbl.name/wbc/static/images/手指.png" class="buy_pic"></image>
				</view>
			</view>
		</view>
		<view class="lists">
			<view class="list" v-for="(i,index) in linkLists" :key="index" @tap="linkTo(i)">
				<image :src="i.path"></image>
				<view class="list_name">
					{{i.name}}
				</view>
			</view>
		</view>
		<!-- <Nav :avtive="0"></Nav> -->
	</view>
</template>

<script>
	import Nav from '../../components/nav.vue'
	export default {
		components: {
			Nav
		},
		data() {
			return {
				linkLists: [{
						name: '持链量',
						path: 'http://www.dbl.name/wbc/static/images/持有收益(元)@2x.png'
					},
					{
						name: 'WBC钱包',
						path: 'http://www.dbl.name/wbc/static/images/钱包@2x.png',
						link: '../wbcMoney/wbcMoney',
						isLogin: true,
					},
					{
						name: '推荐奖励',
						path: 'http://www.dbl.name/wbc/static/images/奖励金@2x.png',
						link: '../recommendedAward/recommendedAward',
						isLogin: true,
					},
					{
						name: '交易明细',
						path: 'http://www.dbl.name/wbc/static/images/明细(1)@2x.png',
						link: '../transactionDetails/transactionDetails',
						isLogin: true,
					},
					{
						name: '累计收益',
						path: 'http://www.dbl.name/wbc/static/images/我的累计收益@2x.png',
						link: '../accumulatedIncome/accumulatedIncome',
						isLogin: true,
					},
					{
						name: '团队奖励',
						path: 'http://www.dbl.name/wbc/static/images/团队奖励.png',
						link: '../teamAward/teamAward',
						isLogin: true,
					},
					{
						name: '安全中心',
						path: 'http://www.dbl.name/wbc/static/images/安全中心@2x.png',
						link: '../saft/saft',
						isLogin: true,
					},
					{
						name: '分享二维码',
						path: 'http://www.dbl.name/wbc/static/images/分享二维码@2x.png',
						link: '../qrc/qrc',
						isLogin: true,
					},
					{
						name: '商城',
						path: 'http://www.dbl.name/wbc/static/images/商城@2x.png'
					}
				],
				coefficient:'',//系数
			}
		},
		onLoad() {
			this.getTax()
		},
		methods: {
			//买币
			buyWbc() {
				const personInfo = uni.getStorageSync('personInfo') || this.$store.state.personInfo
				if (personInfo.id) {
					uni.navigateTo({
						url: '../buyWBC/buyWBC'
					});
				} else {
					uni.showToast({
						title: '请先登陆!',
						duration: 1000,
						icon: 'none'
					});
				}
			},
			//获取系数
			getTax() {
				this.Get({
					url: this.url.indexEquityTax,
					data: {}
				}).then(res => {
					if(res.code === 200){
						this.coefficient = res.data.equity_tax || 0
					}
				})
			},
			//跳转到其他页面
			linkTo(i) {
				const {
					link,
					isLogin
				} = i
				if (link) {
					const personInfo = uni.getStorageSync('personInfo') || this.$store.state.personInfo
					if (isLogin) {
						if (personInfo.id) {
							uni.navigateTo({
								url: link
							});
						} else {
							uni.showToast({
								title: '请先登陆!',
								duration: 1000,
								icon: 'none'
							});
						}

					} else {
						if (link) {
							uni.navigateTo({
								url: link
							});
						}
					}
				}
			}
		}
	}
</script>

<style scoped>
	.index_page_top {
		padding: 0 31upx;
		padding-bottom: 20upx;
		border-bottom: 20upx #f6f6f6 solid;
	}

	.header {
		display: flex;
		justify-content: space-between;
	}

	.header .header_left {
		display: flex;
	}

	.header .header_left .logo {
		width: 126upx;
		height: 64upx;
		margin-right: 20upx;
	}

	.header .header_left .logo_name {
		width: 120upx;
		height: 38upx;
		font-size: 40upx;
		color: #333333;
		opacity: 0.8;
		padding-top: 11upx;
	}

	.header_right {
		margin-top: 11upx;
	}

	.header_right .sao {
		width: 40upx;
		height: 40upx;
	}

	.profit {
		display: flex;
	}

	.profit .profit_name {
		height: 23upx;
		font-size: 24upx;
		color: #333333;
		opacity: 0.8;
		padding-top: 40upx;
		padding-bottom: 35upx;
		margin-right: 13upx;
	}

	.profit .profit_num {
		height: 31upx;
		font-size: 40upx;
		color: #1b62ff;
		opacity: 0.8;
		padding-top: 32upx;
		padding-bottom: 29upx;
	}

	.banner {
		position: relative;
	}

	.banner .banner_pic {
		height: 250upx;
		width: 100%;
		font-size: 0;
	}

	.banner .banner_text {
		display: flex;
		height: 50upx;
		line-height: 50upx;
		background-color: #d2dcf1;
		padding-left: 30upx;
		width: 100%;
		box-sizing: border-box;
	}

	.banner .banner_text .notice_pic {
		width: 25upx;
		height: 22upx;
		margin-top: 14upx;
		margin-right: 11upx;
	}

	.banner .banner_text .notice {
		color: #1b62ff;
		font-size: 20upx;
	}

	.slider_lists {
		display: flex;
		padding-top: 20upx;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		box-sizing: border-box;
		padding: 0 52upx;
		justify-content: space-between;
	}

	.slider_lists .slider_line {
		width: 2upx;
		height: 78upx;
		background: #fff;
		margin: 0 42upx;
		align-self: center;
		margin-top: 70upx;
	}

	.slider_lists .slider_list {
		border-radius: 11upx;
		box-sizing: border-box;
		text-align: center;
	}

	.slider_lists .slider_list image {
		width: 40upx;
		height: 40upx;
	}


	.slider_lists .slider_list .slider_list_top {
		display: flex;
		height: 40upx;
		line-height: 40upx;
		padding-top: 61upx;
		font-size: 28upx;
		color: #ffffff;
		padding-bottom: 18upx;
		justify-content: center
	}

	.slider_lists .slider_list .slider_list_top image {
		margin-right: 10upx;
	}

	.slider_lists .slider_list .slider_list_num {
		font-size: 36upx;
		height: 34upx;
		line-height: 34upx;
		color: #fff;
	}

	.lists {
		display: flex;
		flex-wrap: wrap;
		padding-bottom: 50upx;
	}

	.lists .list {
		width: 33.33%;
		text-align: center;
		padding-top: 65upx;
	}

	.lists .list image {
		width: 54upx;
		height: 54upx;
		margin: 0 auto;
	}

	.lists .list .list_name {
		font-size: 28upx;
		color: #333333;
		padding-top: 15upx;
	}

	.to_buy {
		background: url(http://www.dbl.name/wbc/static/images/购买插图.png) no-repeat center;
		width: 100%;
		height: 150upx;
		border-radius: 12upx;
		position: relative;
		margin-top: 20upx;
	}

	.to_buy .buy_btn {
		position: absolute;
		left: 89upx;
		top: 47upx;
	}

	.to_buy .buy_btn .buy_btn_pic {
		width: 194upx;
		height: 52upx;
		position: absolute;
		left: 0;
		top: 0;
	}

	.to_buy .buy_btn .buy_pic {
		width: 64upx;
		height: 73upx;
		position: absolute;
		left: -48upx;
		top: 28upx;
	}
</style>
