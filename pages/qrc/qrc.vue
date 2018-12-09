<template>
	<view class="qrc">
		<image src="http://www.dbl.name/wbc/static/images/形状 4.png" class="bg"></image>
		<view class="qrc_box">
			<image :src="qrcUrl"></image>
		</view>
		<view class="click">
			长按保存二维码
		</view>
		<view class="name">
			预存WBC可用
		</view>
		<view class="num">
			{{personInfo.balance}}
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
				qrcUrl:''
			};
			
		},
		computed:{
			...mapState({
				personInfo:state =>{
					return state.personInfo
				}
			})
		},
		methods:{
			//获取二维码
			getQrc(){
				this.Post({
					url:this.url.userShareQrcode,
					data:{
						uid:this.personInfo.id
					}
				}).then(res => {
					if(res.code === 200){
						this.qrcUrl = res.data
					}else{
						uni.showToast({
							title: '获取二维码失败',
							duration: 1000,
							icon: 'none'
						});
					}
				}).catch(err => {
					uni.showToast({
						title: '获取二维码失败',
						duration: 1000,
						icon: 'none'
					});
				})
			}
		},
		onLoad() {
			this.getQrc()
		}
	}
</script>

<style scoped>
	uni-page-body {
		height: 100%;
	}
	.qrc{
		height: 100%;
		position: relative;
		padding-top: 200upx;
		box-sizing: border-box;
	}
	.bg{
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		z-index: -10;
	}
	.qrc_box{
		width: 492upx;
		height: 492upx;
		background: #fff;
		margin: 0 auto;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.qrc_box image{
		width: 460upx;
		height: 460upx;
	}
	.click{
		padding-top: 43upx;
		text-align: center;
		height: 29upx;
		line-height: 29upx;
		color: #fff;
		font-size: 30upx;
		padding-bottom: 171upx;
	}
	.name{
		padding-left: 41upx;
		font-size: 34upx;
		color: #333333;
		height: 32upx;
		line-height: 32upx;
		padding-bottom: 30upx;
	}
	.num{
		padding-left: 41upx;
		font-size: 60upx;
		color: #3574fa;
		height: 46upx;
		line-height: 46upx;
		padding-bottom: 148upx;
	}
</style>
