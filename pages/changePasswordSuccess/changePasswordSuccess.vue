<template>
	<view class="changePasswordSuccess">
		<view class="top">
			<image src="http://www.dbl.name/wbc/static/images/已完成 (1).png"></image>
			<view class="name">
				密码设置成功！
			</view>
		</view>
		<view class="moble_name">
			您的登录密码已更改！
		</view>
		<view class="tishi">
			下次请使用此新密码登录账户
		</view>
		<view class="btn" @tap="ok">
			确定
		</view>
		<view class="beizhu">
			备注：确定以后回到登录页面重新登录
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
				this.clearPersonInfo()
				uni.switchTab({
					url: '../index/index'
				});
			}
		}
	}
</script>

<style scoped>
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
