<template>
	<view class="changePassword">
		<view class="header">
			<view class="name">
				手机号
			</view>
			<view class="val">
				{{personInfo.mobile}}
			</view>
		</view>
		<view class="fill">
			<view class="name">
				原密码
			</view>
			<view class="val">
				<input placeholder="填写原密码" :password="true" v-model="oldPassword"/>
			</view>
		</view>
		<view class="fill">
			<view class="name">
				新密码
			</view>
			<view class="val">
				<input placeholder="填写新密码" :password="true" v-model="newPassword"/>
			</view>
		</view>
		<view class="fill">
			<view class="name">
				确认密码
			</view>
			<view class="val">
				<input placeholder="再次填写确认" :password="true" v-model="newPasswordTwo"/>
			</view>
		</view>
		<view class="forget">
			忘记原密码？
		</view>
		<view class="btn" @click="next">
			下一步
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				personInfo:{},
				newPassword:'',
				newPasswordTwo:'',
				oldPassword:'',
			};
		},
		onLoad() {
			this.personInfo = uni.getStorageSync('personInfo') || this.$store.state.personInfo || {}
		},
		methods:{
			next(){
				if(this.newPassword.length>=6 && this.oldPassword.length>=6 && this.newPasswordTwo.length>=6 ){
					if(this.newPassword === this.newPasswordTwo){
						this.Post({
							url: this.url.userEditpwd,
							data: {
								uid:this.personInfo.id,
								old_password:this.oldPassword,
								password:this.newPassword
							}
						}).then(res => {
							if(res.code === 200){
								uni.navigateTo({
									url: '../changePasswordSuccess/changePasswordSuccess'
								});
							}else{
								uni.showToast({
									title: res.msg,
									duration: 1000,
									icon:'none'
								});
							}
						}).catch(err => {
							uni.showToast({
								title: '修改密码失败',
								duration: 1000,
								icon:'none'
							});
						})
					}else{
						uni.showToast({
							title: '两次填写的密码不一样',
							duration: 1000,
							icon:'none'
						});
					}
				}else{
					uni.showToast({
						title: '密码长度至少6位',
						duration: 1000,
						icon:'none'
					});
				}
			}
		}
	}
</script>

<style scoped>
	uni-page-body {
		height: 100%;
	}

	.changePassword {
		height: 100%;
		background: #F7F7F7;
		box-sizing: border-box;
		padding-top: 30upx;
	}
	.header{
		height: 104upx;
		line-height: 104upx;
		background: #ededed;
		padding: 0 77upx;
		margin-bottom: 30upx;
		display: flex;
	}
	.header .name{
		color: #999999;
		font-size: 32upx;
		padding-right: 30upx;
	}
	.header .val{
		color: #999999;
		font-size: 32upx;
	}
	.fill{
		height: 104upx;
		line-height: 104upx;
		background: #fff;
		padding: 0 77upx;
		margin-bottom: 30upx;
		display: flex;
	}
	.fill:nth-of-type(4){
		margin-bottom: 0;
	}
	.fill .name{
		color: #333333;
		font-size: 32upx;
		width: 160upx;
	}
	.fill .val{
		color: #999999;
		font-size: 30upx;
	}
	.fill .val input{
		height: 100%;
		line-height: 100%;
	}
	.forget{
		height: 23upx;
		line-height: 23upx;
		color: #3574fa;
		font-size: 24upx;
		padding-left: 77upx;
		padding-top: 18upx;
		padding-bottom: 71upx;
	}
	.btn{
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
