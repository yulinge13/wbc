<template>
	<view class="saft">
		<view class="links">
			<LinkCom v-for="(i,index) in linkLists" :key="index" :linkItem="i" class="link_list"></LinkCom>
		</view>
		<image src="http://www.dbl.name/wbc/static/images/色相_饱和度 754.png" class="bg"></image>
	</view>
</template>

<script>
	import LinkCom from '../../components/linkCom.vue'
	export default {
		data() {
			return {
				linkLists: [{
						name: '修改手机号',
						url: 'http://www.dbl.name/wbc/static/images/手机号.png',
						link: '../changeMobile/changeMobile',
						isLogin:true,
						width:38,
						height:47
					},
					{
						name: '修改登陆密码',
						url: 'http://www.dbl.name/wbc/static/images/登录.png',
						link: '../changePassword/changePassword',
						isLogin:true,
						width:38,
						height:38
					},
					{
						name: '修改交易密码',
						url: 'http://www.dbl.name/wbc/static/images/支付密码2.png',
						link: '../changeTransactionPassword/changeTransactionPassword',
						isLogin:true,
						width:38,
						height:44
					}
				],
			};
		},
		components: {
			LinkCom
		},
		onLoad(){
			this.linkLists.forEach(i => {
				i.width = uni.upx2px(i.width)
				i.height = uni.upx2px(i.height)
			})
		}
	}
</script>

<style scoped>
	uni-page-body{
		height: 100%;
		width: 100%;
	}
	.saft {
		padding-top: 30upx;
		padding-bottom: 138upx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		background: #f7f7f7;
	}

	.link_list {
		margin-bottom: 30upx;
	}
	.bg{
		width: 334upx;
		height: 308upx;
		margin: 0 auto;
	}
</style>
