<template>
	<view class="login_page">
		<view class="login_name">
			登陆
		</view>
		<view class="logo">
			<image src="http://www.dbl.name/wbc/static/images/logo_1拷贝2@2x.png"></image>
		</view>
		<view class="login_modal">
			<view class="fill">
				<image src="http://www.dbl.name/wbc/static/images/账号@2x.png" class="fill_pic"></image>
				<view class="fill_val">
					<input placeholder="请输入账号" v-model="mobile" />
				</view>
			</view>
			<view class="fill">
				<image src="http://www.dbl.name/wbc/static/images/密码锁@2x.png" class="fill_pic"></image>
				<view class="fill_val">
					<input placeholder="请输入密码" :password="true" v-model="password" />
				</view>
			</view>
			<view class="fill">
				<image src="http://www.dbl.name/wbc/static/images/验证码拷贝@2x.png" class="fill_pic"></image>
				<view class="fill_val">
					<input placeholder="请输入验证码" />
				</view>
			</view>
			<button class="login_btn" @tap="login">登陆</button>
			<view class="login_or_zhu">
				<view class="login_text" @tap="linkToReg">
					注册
				</view>
				<view class="zhu_text">
					忘记密码?
				</view>
			</view>
		</view>
		<view class="footer">
			冬宝链
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mobile: '', //账号
				password: '', //密码
			};
		},
		methods: {
			//登陆
			login() {
				if (this.mobile && this.password) {
					this.Post({
						url: this.url.userLogin,
						data: {
							mobile: this.mobile,
							password: this.password
						}
					}).then(res => {
						if (res.code === 200) {
							uni.showToast({
								title: res.msg,
								duration: 1000,
							});
							uni.setStorageSync('personInfo', res.data);
							this.$store.state.personInfo = res.data
							uni.switchTab({
								url: '../my/my',
							});
						} else {
							uni.showToast({
								title: res.msg,
								duration: 1000,
								icon: 'none'
							});
						}
					})
				} else {
					uni.showToast({
						title: '请输入账号和密码',
						duration: 1000,
						icon: 'none'
					});
				}
			},
			//跳转到注册页面
			linkToReg() {
				uni.navigateTo({
					url: '../register/register'
				});
			}
		}
	}
</script>

<style scoped>
	.login_page {
		background: url(http://www.dbl.name/wbc/static/images/bg.png) no-repeat center;
		width: 100%;
		height: 100%;
		background-size: 100%;
	}

	.login_name {
		font-size: 50upx;
		font-family: PingFang-SC-Regular;
		color: #FFFFFF;
		padding-left: 33upx;
		/* padding-top: 89upx; */
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
		margin-top: 45upx;
		background: #fff;
		border-radius: 16upx;
		box-shadow: 0 0 6upx 1upx rgba(110, 181, 229, .2);
		padding: 0 87upx;
		padding-top: 51upx;
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

	.fill:nth-of-type(3) {
		margin-bottom: 69upx;
	}

	.login_btn {
		height: 71upx;
		background: #4b72da;
		font-size: 30upx;
		line-height: 71upx;
		color: #fff;
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
</style>
