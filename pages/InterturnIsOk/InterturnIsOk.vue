<template>
	<view class="InterturnIsOk">
		<view class="top">
			<image src="http://www.dbl.name/wbc/static/images/已完成 (1).png"></image>
			<view class="name">
				互转成功！
			</view>
		</view>
		<view class="moble_name">
			5秒后将自动跳回首页...
		</view>
		<view class="btn">
			回到首页
		</view>
		<image src="http://www.dbl.name/wbc/static/images/互转成功.png" class="bg"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onLoad() {
			setTimeout(() =>{
				uni.switchTab({
					url: '../index/index'
				});
			},5000)
		}
	}
</script>

<style scoped>
	.top{
		display: flex;
		padding: 0 75upx;
		padding-top: 61upx;
		align-items: center;
		padding-bottom: 38upx;
	}
	.top image{
		width: 131upx;
		height: 131upx;
		margin-right: 31upx;
	}
	.top .name{
		color: #56cd36;
		font-size: 40upx;
		height: 38upx;
		line-height: 38upx;
	}
	.moble_name{
		padding: 0 75upx;
		color: #999999;
		font-size: 30upx;
		height: 29upx;
		line-height: 29upx;
		padding-bottom: 64upx;
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
		margin-bottom: 308upx;
	}
	.bg{
		width: 349upx;
		height: 235upx;
		margin: 0 auto;
	}
</style>
