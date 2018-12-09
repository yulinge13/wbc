<template>
	<view class="link_com" @tap="linkTo">
		<view class="link_left">
			<image v-if="linkInfo.url" :src="linkInfo.url" class="icon" :style="'width:'+linkInfo.width+'px;height:'+linkInfo.height+'px'"></image>
			<!-- <image v-if="linkInfo.url" :src="linkInfo.url" class="icon"></image> -->
			<view class="bg_point" :style="'background:'+linkInfo.bgColor" v-else>

			</view>
			<view class="link_name">
				{{linkInfo.name}}
			</view>
		</view>
		<image src="http://www.dbl.name/wbc/static/images/更多.png" class="point"></image>
	</view>
</template>

<script>
	export default {
		props: ['linkItem'],
		data() {
			return {
			};
		},
		computed: {
			linkInfo() {
				return this.linkItem
			}
		},
		methods: {
			//跳转到其他页面
			linkTo() {
				const {
					link,
					isLogin
				} = this.linkInfo
				if (link) {
					const personInfo = uni.getStorageSync('personInfo') || this.$store.state.personInfo
					if(isLogin){
						if(personInfo.id){
							uni.navigateTo({
								url: link
							});
						}else{
							uni.showToast({
								title: '请先登陆!',
								duration: 1000,
								icon:'none'
							});
						}
						
					}else{
						if (link) {
							uni.navigateTo({
								url: link
							});
						}
					}
				}
			}
		}
	}
</script>

<style scoped>
	.link_com {
		height: 90upx;
		line-height: 90upx;
		display: flex;
		padding: 0 62upx;
		justify-content: space-between;
		align-items: center;
		background: #fff;
	}

	.link_left {
		display: flex;
		align-items: center;
	}

	.link_left .icon {
		width: 35upx;
		height: 35upx;
		margin-right: 22upx;
	}

	.link_left .link_name {
		font-size: 30upx;
		color: "#333333";
		font-family: "PingFang-SC-Regular",
	}

	.point {
		width: 19upx;
		height: 31upx;
	}

	.bg_point {
		width: 20upx;
		height: 20upx;
		border-radius: 50%;
		margin-right: 20upx;
	}
</style>
