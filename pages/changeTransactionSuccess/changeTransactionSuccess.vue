<template>
	<view class="changeTransactionSuccess">
		<view class="top">
			<image src="http://www.dbl.name/wbc/static/images/已完成 (1).png"></image>
			<view class="name">
				交易密码设置成功！
			</view>
		</view>
		<view class="moble_name">
			您的交易密码已更改！
		</view>
		<view class="tishi">
			下次请使用此新密码交易
		</view>
		<view class="btn" @tap="ok">
			确定
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

			};
		},
		computed: {
		},
		methods: {
			...mapMutations(['clearPersonInfo']),
			ok() {
				uni.switchTab({
					url: '../index/index'
				});
			}
		}
	}
</script>

<style scoped>
	page{
		height: 100%;
	}
	.top {
		display: flex;
		padding: 0 75upx;
		padding-top: 61upx;
		align-items: center;
		padding-bottom: 38upx;
	}

	.top image {
		width: 131upx;
		height: 131upx;
		margin-right: 31upx;
	}

	.top .name {
		color: #56cd36;
		font-size: 40upx;
		height: 38upx;
		line-height: 38upx;
	}

	.moble_name {
		padding: 0 75upx;
		color: #999999;
		font-size: 30upx;
		height: 29upx;
		line-height: 29upx;
		padding-bottom: 31upx;
	}

	.tishi {
		padding: 0 75upx;
		color: #999999;
		font-size: 30upx;
		height: 29upx;
		line-height: 29upx;
		padding-bottom: 101upx;
	}

	.beizhu {
		text-align: center;
		font-size: 30upx;
		height: 29upx;
		line-height: 29upx;
		color: #ff0000;
		padding-top: 98upx;
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
