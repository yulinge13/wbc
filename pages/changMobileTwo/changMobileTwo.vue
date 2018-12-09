<template>
	<view class="changMobileTwo">
		<view class="fill">
			<view class="val">
				<input placeholder="请输入修改后的手机号" v-model="mobile"/>
			</view>
		</view>
		<view class="fill">
			<view class="val">
				<input placeholder="请输入手机短信验证码" v-model="code"/>
			</view>
			<TimeBtn :disable="isMobile" :mobile="mobile"></TimeBtn>
		</view>
		<view :class="isMobile?'btn no_btn':'btn'" @tap="linkTo">
			下一步
		</view>
	</view>
</template>

<script>
	import TimeBtn from '../../components/tiemBtn.vue'
	export default {
		data() {
			return {
				personInfo:{},//用户信息
				code:'',//手机验证码
				mobile:'',//手机号
			};
		},
		computed:{
			isMobile(){
				let onOff = false
				if(!(/^1[34578]\d{9}$/.test(this.mobile))){
					onOff = true
				}else{
					onOff = false
				}
				return onOff
			}
		},
		components:{
			TimeBtn
		},
		onLoad() {
			this.personInfo = uni.getStorageSync('personInfo') || this.$store.state.personInfo
		},
		methods:{
			//下一步
			linkTo(){
			}
		}
	}
</script>

<style scoped>
	uni-page-body {
		height: 100%;
	}

	.changMobileTwo {
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
	.no_btn{
		background: #b7b7b7;
		color: #ffffff;
	}
</style>
