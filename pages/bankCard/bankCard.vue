<template>
	<view class="bankCard">
<!-- 		<view class="login_name">
			注册
		</view>
		<view class="logo">
			<image src="http://www.dbl.name/wbc/static/images/logo_1拷贝2@2x.png"></image>
		</view> -->
		<view class="login_modal">
			<view class="fill">
				<image src="http://www.dbl.name/wbc/static/images/推荐拷贝3@2x.png" class="fill_pic"></image>
				<view class="fill_val">
					<input placeholder="请输入持卡人" v-model="fromData.incode" />
				</view>
			</view>
			<view class="fill">
				<image src="http://www.dbl.name/wbc/static/images/密码锁@2x.png" class="fill_pic"></image>
				<view class="fill_val">
					<input placeholder="请输入银行卡号" :password="true" v-model="fromData.password" />
				</view>
			</view>
			<view class="fill">
				<image src="http://www.dbl.name/wbc/static/images/确认@2x.png" class="fill_pic"></image>
				<view class="fill_val">
					<input placeholder="请确认银行卡号" :password="true" v-model="fromData.surePassword" />
				</view>
			</view>
			<view class="fill">
				<image src="http://www.dbl.name/wbc/static/images/确认@2x.png" class="fill_pic"></image>
				<view class="fill_val">
					<picker class="input" mode="selector" @change="typeChange" :value="0" :range="bankLists" range-key="bank_name">
						<view>{{bankLists[bankListsIndex].bank_name}}</view>
					</picker>
				</view>
			</view>
			<button class="login_btn" @tap="register">添加</button>
		</view>
		<view class="footer">
			冬宝链
		</view>
	</view>
</template>

<script>
import TimeBtn from '../../components/tiemBtn.vue'
import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
				fromData: {
					uid : '',
					name :'',
					bank_id :'',
					bank_account :'',
					default :1,
				}, //注册的数据
				bankLists:[
					{
						bank_name:'请选择开户行'
					}
				],//开户行列表
				bankListsIndex:0,//开户行的索引
			};
		},
		computed:{
			...mapState({
				personInfo:state =>{
					return state.personInfo
				}
			})
		},
		components: {
			TimeBtn
		},
		onLoad() {
			this.getBnakLits()
		},
		methods: {
			//选择银行
			typeChange(e){
				this.bankListsIndex = e.detail.value;
			},
			//获取数据能开户的银行
			getBnakLits(){
				this.Post({
					url: this.url.balanceGetBank,
					data: {
					}
				}).then(res => {
					if(res.code === 200){
						this.bankLists = res.data
					}
				})
			},
			//注册
			register() {
				const {
				name,
				bank_id,
				bank_account
				} = this.fromData
				if (name && bank_id && bank_account) {
// 					if(surePassword !== password){
// 						uni.showToast({
// 							title: '输入的密码和确认密码不一样',
// 							duration: 1000,
// 							icon: 'none'
// 						});
// 					}
					this.Post({
						url: this.url.userReg,
						data: {
							...this.fromData
						}
					}).then(res => {
						if(res.code === 200){
							uni.showToast({
								title: res.msg,
								duration: 1000,
							});
							uni.navigateTo({
								url: '../login/login'
							});
						}
					})
				} else {
					uni.showToast({
						title: '请填写完整信息',
						duration: 1000,
						icon: 'none'
					});
				}
			}
		}
	}
</script>

<style scoped>
	.bankCard{
		padding-top: 45upx;
	}
	.small {
		padding-right: 216upx;
	}
	
	.login_page {
		background: url(http://www.dbl.name/wbc/static/images/bg.png) no-repeat center;
		width: 100%;
		height: 100%;
	}

	.login_name {
		font-size: 50upx;
		font-family: PingFang-SC-Regular;
		color: #FFFFFF;
		padding-left: 33upx;
	}

	.logo {
		width: 173upx;
		height: 173upx;
		margin: 0 auto;
		margin-top: 65upx;
	}

	.logo image {
		width: 173upx;
		height: 173upx;
	}

	.login_modal {
		margin: 0 31upx;
		background: #fff;
		border-radius: 16upx;
		box-shadow: 0 0 6upx 1upx rgba(110, 181, 229, .2);
		padding: 0 87upx;
		padding-top: 51upx;
		padding-bottom: 73upx;
	}

	.fill {
		display: flex;
		border-bottom: 2upx solid #d8d8d8;
		margin-bottom: 44upx;
		align-items: center;
	}

	.fill .fill_pic {
		width: 29upx;
		height: 29upx;
		margin-right: 17upx;
	}

	.fill .fill_val {
		height: 60upx;
		line-height: 60upx;
		font-size: 30upx;
	}

	.fill .fill_val input {
		height: 100%;
		font-size: 30upx;
	}

	.fill:nth-of-type(6) {
		margin-bottom: 69upx;
	}

	.login_btn {
		height: 71upx;
		background: #4b72da;
		font-size: 30upx;
		line-height: 71upx;
		color: #fff;
	}

	.login_or_zhu {
		display: flex;
		justify-content: space-between;
		height: 23upx;
		line-height: 23upx;
		font-size: 24upx;
		color: #4b72da;
		fontFamily: "PingFang-SC-Regular";
		padding-top: 21upx;
		padding-bottom: 328upx;
	}

	.footer {
		/* 		height: 80upx;
		line-height: 80upx; */
		height: 27upx;
		line-height: 27upx;
		font-size: 27upx;
		fontFamily: "PingFang-SC-Medium";
		color: #666;
		position: relative;
		width: 80upx;
		margin: 0 auto;
		padding-top: 27upx;
	}

	.footer:after {
		content: '';
		position: absolute;
		left: 122upx;
		top: 40upx;
		width: 104upx;
		height: 2upx;
		background: #666666;
	}

	.footer:before {
		content: '';
		position: absolute;
		right: 122upx;
		top: 40upx;
		width: 104upx;
		height: 2upx;
		background: #666666;
	}
</style>
