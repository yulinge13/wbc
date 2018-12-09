<template>
	<view class="nav_lists">
		<view class="nav_list" v-for="(i,index) in navLists" :key="index">
			<image :src="avtive===index?i.activePath:i.path"></image>
			<view class="nav_list_name" :style="avtive===index?'color:#1b62ff':''">
				{{i.name}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['avtive'],
		data() {
			return {
				navLists:[
					{
						name:'首页',
						activePath:'../../static/images/首页-选中01@2x.png',
						path:'../../static/images/首页-选中@2x.png'
					},
					{
						name:'转换区',
						activePath:'../../static/images/转换01@2x.png',
						path:'../../static/images/转换@2x.png'
					},
					{
						name:'我的',
						activePath:'../../static/images/团队01@2x.png',
						path:'../../static/images/团队@2x.png'
					}
				]
			};
		}
	}
</script>

<style scoped>
	.nav_lists{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		background: #fff;
		display: flex;
		flex-wrap: wrap;
		height: 98upx;
		border-top: solid 1px #d4d4d4;
	}
	.nav_lists .nav_list{
		width: 33.33%;
		text-align: center;
		margin-top: 13upx;
	}
	.nav_lists .nav_list image{
		width: 40upx;
		height: 40upx;
		margin: 0 auto;
	}
	.nav_lists .nav_list .nav_list_name{
		font-size: 24upx;
		color: #bfbfbf;
		padding-top: 9upx;
	}
</style>
