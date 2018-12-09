<template>
	<view class="transactionDetails">
		<LinkCom v-for="(i,index) in linkLists" :key="index" :linkItem="i" class="link_list"></LinkCom>
	</view>
</template>

<script>
	import LinkCom from '../../components/linkCom.vue'
	export default {
		data() {
			return {
				linkLists: [{
						name: '提取WBC明细',
						link: '../extractDetails/extractDetails',
						isLogin:true,
						bgColor:'#3574fa'
					},
					{
						name: '互转明细',
						link: '../mutualTransferdetails/mutualTransferdetails',
						isLogin:true,
						bgColor:'#04d287'
					},
					{
						name: '存储明细',
						link: '',
						bgColor:'#b2e500'
					},
					{
						name: '预期收益明细',
						link: '',
						bgColor:'#ffde00'
					},
					{
						name: '锁仓和释放明细',
						link: '',
						bgColor:'#ff8400'
					},
					{
						name: '推荐奖励明细',
						link: '',
						bgColor:'#53a8ff'
					}
				],
			};
		},
		components:{
			LinkCom
		}
	}
</script>

<style>
.transactionDetails{
	padding: 20upx 30upx;
	background: #F7F7F7;
}
.link_list{
	margin-bottom: 30upx;
}
</style>
