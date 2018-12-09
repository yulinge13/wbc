<template>
	<view class="recommendedAward">
		<view class="header">
			<image src="http://www.dbl.name/wbc/static/images/推荐奖励.png"></image>
			<view class="header_cont">
				<view class="header_name">
					可提现金额
				</view>
				<view class="header_num">
					{{personInfo.bill || 0}}
				</view>
			</view>
		</view>
		<view class="cont">
<!-- 			<view class="fill fill_one">
				<view class="fill_title">
					<view class="fill_left">
						<image src="http://www.dbl.name/wbc/static/images/时钟 拷贝 2.png"></image>
						<view class="fill_left_name">
							已绑定银行卡
						</view>
					</view>
				</view>
				<view class="fill_cont">
					<view class="" v-if="cardInfo.id">
						{{cardInfo.bank_account}}
					</view>
					<view class="" v-else @tap="linkToAddCard">
						请添加银行卡号
					</view>
				</view>
			</view> -->
			<view class="fill fill_three">
				<view class="fill_title">
					<view class="fill_left">
						<image src="http://www.dbl.name/wbc/static/images/键盘.png"></image>
						<view class="fill_left_name">
							请输入提取WBC数量
						</view>
					</view>
				</view>
				<view class="fill_cont">
					<input type="number" placeholder="请输入提取数量" class="input" v-model="formData.num" @input="getActNum" />
				</view>
			</view>
			<view class="act_num">
				<view class="act">
					<view class="act_name">
						实际提现：
					</view>
					<view class="act_val">
						{{actNum}}
					</view>
				</view>
				<view class="act">
					<view class="act_name">
						扣除手续费用：
					</view>
					<view class="act_val">
						{{cutNum}}
					</view>
				</view>
			</view>
			<view class="fill fill_four">
				<view class="fill_title">
					<view class="fill_left">
						<image src="http://www.dbl.name/wbc/static/images/交易密码.png"></image>
						<view class="fill_left_name">
							请输入交易密码
						</view>
					</view>
				</view>
				<view class="fill_cont">
					<input placeholder="请输入交易密码" class="input" :password="true" v-model="formData.pay_password" />
					<!-- <TimeBtn :mobile="15983750925"></TimeBtn> -->
				</view>
			</view>
		</view>
		<view class="btn" @tap="getMoney">
			提交
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	import TimeBtn from '../../components/tiemBtn.vue'
	export default {
		data() {
			return {
				cardInfo:{},//所有的银行卡
				formData:{
					num:0,
					pay_password:''
				},
				actNum:0,
				cutNum:0,
				sxf:null,//系数
			};
		},
		components: {
			TimeBtn
		},
		computed: {
			...mapState({
				personInfo: state => {
					return state.personInfo
				}
			})
		},
		onLoad() {
			this.getCardLists()
			this.getActsxf()
		},
		methods: {
			getActNum(val) {
				const sxf = (this.sxf.replace('%', '') - 0) / 100
				const num = val.detail.value - 0
				this.cutNum = sxf * num.toFixed(2)
				this.actNum = num - sxf * num.toFixed(2)
			},
			//获取实际能获得数量
			getActsxf() {
				this.Post({
					url: this.url.balanceWithdrawSxf,
					data: {
						type: 1
					}
				}).then(res => {
					if (res.code === 200) {
						this.sxf = res.data
					}
				})
			},
			//获取个人的银行卡
			getCardLists() {
				this.Post({
					url: this.url.balanceGetUbank,
					data: {
						uid: this.personInfo.id,
						type: '1'
					}
				}).then(res => {
					if (res.code === 200) {
						this.cardInfo = res.data
					}
				})
			},
			//添加银行卡
			linkToAddCard() {
				uni.navigateTo({
					url: '../bankCard/bankCard'
				});
			},
			//提现
			getMoney() {
				if (this.formData.num === 0) {
					uni.showToast({
						title: '请输入要提现的数量',
						duration: 1000,
						icon: 'none'
					});
					return
				}
				if (this.formData.pay_password.length <= 0) {
					uni.showToast({
						title: '请输入交易密码',
						duration: 1000,
						icon: 'none'
					});
					return
				}
				this.Post({
					url: this.url.balanceWithdraw,
					data: {
						uid: this.personInfo.id,
						type: 2,
						num: this.formData.num,
						pay_password: this.formData.pay_password
					}
				}).then(res => {
					if (res.code === 200) {
						uni.showToast({
							title: res.msg,
							duration: 1000,
						});
					}
				})
			}
		}
	}
</script>

<style scoped>
	uni-page-body {
		height: 100%;
	}

	.recommendedAward {
		height: 100%;
		background: #F7F7F7;
	}

	.header {
		display: flex;
		background: #fff;
		height: 174upx;
		padding: 0 30upx;
		align-items: center;
		margin-bottom: 30upx;
	}

	.header image {
		width: 158upx;
		height: 84upx;
		margin-right: 12upx;
	}

	.header .header_cont {}

	.header .header_name {
		height: 38upx;
		line-height: 38upx;
		font-size: 40upx;
		color: #333333;
		padding-bottom: 28upx;

	}

	.header .header_num {
		height: 34upx;
		line-height: 34upx;
		font-size: 44upx;
		color: #3ad504;
	}

	.cont {
		/* padding: 0 30upx; */
		background: #f7f7f7;
		padding-bottom: 77upx;
	}

	.fill {
		background: #fff;
		border-radius: 14upx;
		margin-bottom: 30upx;
	}

	.fill .fill_title {
		border-bottom: 1upx solid #dbdbdb;
		display: flex;
		padding-top: 16upx;
		display: flex;
		justify-content: space-between;
		height: 73upx;
		line-height: 73upx;
		padding-left: 36upx;
	}

	.fill .fill_title .fill_left {
		display: flex;
		align-items: center;
	}

	.fill .fill_title .fill_right {
		padding-right: 36upx;
		font-size: 30upx;
		color: #1b62ff;
	}

	.fill .fill_title .fill_left .fill_left_name {
		padding-left: 11upx;
		font-size: 30upx;
		color: #333333;
	}

	.fill_cont {
		height: 92upx;
		line-height: 92upx;
		font-size: 30upx;
		color: #999999;
		padding-left: 107upx;
		display: flex;
		align-items: center;
	}

	.fill_cont .input {
		height: 92upx;
		line-height: 92upx;
		font-size: 30upx;
		color: #999999;
		flex: 1;
	}

	.fill_cont image {
		width: 42upx;
		height: 26upx;
		margin-right: 40upx;
	}

	.fill_one .fill_title image {
		width: 61upx;
		height: 61upx;
	}

	.fill_two .fill_title image {
		width: 61upx;
		height: 61upx;
	}

	.fill_three {
		margin-bottom: 0;
	}

	.fill_three .fill_title image {
		width: 61upx;
		height: 61upx;
	}

	.fill_four .fill_title image {
		width: 61upx;
		height: 61upx;
	}

	.fill_four .fill_cont {
		padding-right: 35upx;
	}

	.fill_four .fill_cont input {
		padding-right: 10upx;
	}

	.act_num {
		display: flex;
		padding: 0 33upx;
		height: 24upx;
		line-height: 24upx;
		padding-top: 13upx;
		font-size: 24upx;
		color: #666666;
		justify-content: space-between;
		padding-bottom: 44upx;
	}

	.act_num .act {
		display: flex;
	}

	.act_num .act_val {
		color: #3574fa;
		font-size: 30upx;
		padding-left: 10upx;
	}

	.btn {
		margin: 0 30upx;
		height: 80upx;
		line-height: 80upx;
		border-radius: 10upx;
		text-align: center;
		font-size: 30upx;
		color: #fff;
		background: #3574fa;
	}
</style>
