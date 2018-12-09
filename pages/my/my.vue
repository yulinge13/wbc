<template>
	<view class="my_page">
		<view class="person_info">
			<image src="http://www.dbl.name/wbc/static/images/头像未登录.png" class="head_icon"></image>
			<view class="login_or_res" v-show="!isLogin">
				<text class="login" @tap="linkToLogin">
					登陆
				</text>
				<view class="line">

				</view>
				<view class="res" @tap="linkToReg">
					注册
				</view>
			</view>
			<view class="is_login" v-show="isLogin">
				<view class="name">
					{{personInfo.nickname}}
				</view>
				<view class="mobile">
					冬宝链账号{{personInfo.mobile}}
				</view>
			</view>
			<view class="uid">
				UID: admin
			</view>
		</view>
		<view class="links">
			<LinkCom v-for="(i,index) in linkListsTop" :key="index" :linkItem="i" class="link_list"></LinkCom>
		</view>
		<view class="links">
			<LinkCom v-for="(i,index) in linkListsBot" :key="index" :linkItem="i" class="link_list"></LinkCom>
		</view>
		<view class="is_login_btn" @tap="quitLanding" v-if="isLogin">
			退出登陆
		</view>
	</view>
</template>

<script>
	import LinkCom from '../../components/linkCom.vue'
	export default {
		data() {
			return {
				linkListsTop: [{
						name: '我的分享',
						url: 'http://www.dbl.name/wbc/static/images/我的分享.png',
						link: ''
					},
					{
						name: '我的团队',
						url: 'http://www.dbl.name/wbc/static/images/左侧-我的团队1.png',
						link: ''
					}
				],
				linkListsBot: [{
						name: '问题提交',
						url: 'http://www.dbl.name/wbc/static/images/问题.png',
						link: ''
					},
					{
						name: '安全设置',
						url: 'http://www.dbl.name/wbc/static/images/安全设置 (1).png',
						link: '../saft/saft',
						isLogin:true
					}
				],
				personInfo: {}, //用户信息
				isLogin: false, //是否登陆
			};
		},
		components: {
			LinkCom
		},
		onShow() {
			this.getLoginInfo()
		},
		methods: {
			//注册
			linkToReg(){
				uni.navigateTo({
					url: '../register/register'
				});
			},
			//退出登陆
			quitLanding() {
				const _this = this
				uni.showModal({
					title: '提示',
					content: '是否确认退出登陆',
					success: function(res) {
						if (res.confirm) {
							uni.removeStorageSync('personInfo');
							_this.$store.state.personInfo = {}
							_this.isLogin = false
							uni.showToast({
								title: '退出登陆成功',
								duration: 1000,
							});
						}
					}
				});
			},
			//获取登陆信息
			getLoginInfo() {
				console.log(this.$store.state.personInfo)
				this.personInfo = uni.getStorageSync('personInfo') || this.$store.state.personInfo || {}
				if (this.personInfo.id) {
					this.isLogin = true
				} else {
					this.isLogin = false
				}
			},
			//登陸
			linkToLogin() {
				uni.navigateTo({
					url: '../login/login'
				});
			},
		}
	}
</script>

<style scoped>
	uni-page-body {
		height: 100%;
	}

	.my_page {
		background: url(http://www.dbl.name/wbc/static/images/bg2.png) no-repeat center;
		width: 100%;
		height: 100%;
		margin-top: -1upx;
		box-sizing: border-box;
		padding-top: 146upx;
		background-size: 100%;
	}

	.person_info {
		margin: 0 30upx;
		background-color: #ffffff;
		border-top-right-radius: 30upx;
		border-top-left-radius: 30upx;
		opacity: 0.8;
		position: relative;
		box-sizing: border-box;
		margin-bottom: 28upx;
	}

	.person_info .head_icon {
		width: 200upx;
		height: 200upx;
		border-radius: 50%;
		position: absolute;
		left: 50%;
		top: 0;
		margin-left: -100upx;
		margin-top: -100upx;
	}

	.person_info .login_or_res {
		height: 38upx;
		font-family: PingFang-SC-Medium;
		font-size: 36upx;
		color: #1b62ff;
		opacity: 0.8;
		line-height: 38upx;
		padding-top: 122upx;
		display: flex;
		justify-content: center;
		align-items: flex-end;
		margin-bottom: 114upx;
	}

	.person_info .login_or_res .line {
		width: 2upx;
		height: 31upx;
		background: #1b62ff;
		margin: 0 16upx;
	}

	.person_info .uid {
		height: 24upx;
		font-family: "PingFang-SC-Regular";
		font-size: 30upx;
		line-height: 24upx;
		color: "#333333";
		padding-bottom: 35upx;
		text-align: center;
	}

	.link_list {
		margin-bottom: 2upx;
	}

	.links {
		margin-bottom: 30upx;
	}

	.is_login .name {
		font-size: 69upx;
		color: #4a82fe;
		height: 52upx;
		line-height: 52upx;
		text-align: center;
		padding-top: 107upx;
		fontFamily: "PingFang-SC-Medium";
		padding-bottom: 31upx;
	}

	.is_login .mobile {
		text-align: center;
		font-size: 24upx;
		padding-bottom: 59upx;
		height: 25upx;
		line-height: 25upx;
		color: #666666;
		fontFamily: "PingFang-SC-Medium";
	}

	.is_login_btn {
		height: 90upx;
		line-height: 90upx;
		text-align: center;
		color: #fe0000;
		font-size: 30upx;
		background: #fff;
	}
</style>
