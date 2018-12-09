<template>
	<view class="changeTransactionPassword">
		<view class="header">
			{{personInfo.mobile}}
		</view>
		<view class="fill">
			<view class="val">
				<input placeholder="请输入手机短信验证码" v-model="mobileCode"/>
			</view>
			<TimeBtn :mobile="personInfo.mobile" type="find"></TimeBtn>
		</view>
		<view class="btn" @tap="next">
			下一步
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
				mobileCode:'',//手机验证码
			};
		},
		computed:{
			...mapState({
				personInfo:state =>{
					return state.personInfo
				},
				code:state => state.code
			})
		},
		components: {
			TimeBtn
		},
		onLoad() {

		},
		methods:{
			next(){
				if(this.code.length>0 && this.mobileCode.length>0 && this.code === this.mobileCode){
					
				}else{
					console.log(this.code)
					console.log(this.mobileCode)
					uni.showToast({
						title: '手机验证码不对',
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

	.changeTransactionPassword {
		height: 100%;
		background: #F7F7F7;
		box-sizing: border-box;
		padding-top: 30upx;
	}

	.header {
		height: 104upx;
		line-height: 104upx;
		background: #ededed;
		padding: 0 77upx;
		margin-bottom: 30upx;
	}

	.fill {
		display: flex;
		padding-left: 77upx;
		padding-right: 36upx;
		margin-bottom: 30upx;
		background: #fff;
		height: 104upx;
		line-height: 104upx;
		align-items: center;
		justify-content: space-between;
	}

	.fill .val {
		height: 100%;
		line-height: 100%;
		color: #999999;
		font-size: 30upx;
		flex: 1;
	}

	.fill .val input {
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
</style>
