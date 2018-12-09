<template>
	<view class="changeTransactionPasswordTwo">
		<view class="fill">
			<view class="val">
				<input placeholder="请输入交易密码" :password="true" v-model="old_password"/>
			</view>
		</view>
		<view class="fill">
			<view class="val">
				<input placeholder="请输入新的交易密码" :password="true" v-model="password"/>
			</view>
		</view>
		<view class="btn" @tap="linkTo">
			下一步
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
				old_password:'',//手机验证码
				password:'',//手机号
			};
		},
		computed:{
			...mapState({
				personInfo:state =>{
					return state.personInfo
				},
			})
		},
		onLoad() {
		},
		methods:{
			//下一步
			linkTo(){
				if(this.old_password.length>3 && this.password.length>3){
					if(this.old_password === this.password){
						uni.showToast({
							title: '原交易密码和新密码不能相同',
							duration: 1000,
							icon: 'none'
						});
					}else{
						this.Post({
							url:this.url.userEditpaypwd,
							data:{
								uid:this.personInfo.id,
								old_password:this.old_password,
								password:this.password
							}
						}).then(res => {
							if(res.code === 200){
								uni.showToast({
									title: res.msg,
									duration: 1000,
								});
								uni.reLaunch({
									url: '../changePasswordSuccess/changePasswordSuccess'
								});
							}
						})
					}
				}else{
					uni.showToast({
						title: '交易密码不能小于三位',
						duration: 1000,
						icon: 'none'
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

	.changeTransactionPasswordTwo {
		height: 100%;
		background: #F7F7F7;
		box-sizing: border-box;
		padding-top: 30upx;
	}
	.header{
		height: 104upx;
		line-height: 104upx;
		background: #fff;
		padding: 0 77upx;
		margin-bottom: 30upx;
		color: #999999;
	}
	.fill{
		display: flex;
		padding-left:77upx;
		padding-right:36upx;
		margin-bottom: 30upx;
		background: #fff;
		height: 104upx;
		line-height: 104upx;
		align-items: center;
		justify-content: space-between;
	}
	.fill .val{
		height: 100%;
		line-height: 100%;
		color: #999999;
		font-size: 30upx;
		flex: 1;
	}
	.fill .val input{
		height: 100%;
		line-height: 100%;
		padding-right: 20upx;
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
	.no_btn{
		background: #b7b7b7;
		color: #ffffff;
	}
</style>
