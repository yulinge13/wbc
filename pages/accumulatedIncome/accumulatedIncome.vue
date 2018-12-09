<template>
	<view class="accumulatedIncome">
		<view class="header">
			<view class="header_left">
				<view class="title">
					<image src="http://www.dbl.name/wbc/static/images/119849048695120235.png"></image>
					<view class="title_text">
						预期收益数量
					</view>
				</view>
				<view class="num">
					{{personInfo.points || 0}}
				</view>
			</view>
			<view class="header_right">
				<view class="title">
					<image src="http://www.dbl.name/wbc/static/images/22561832357606129.png"></image>
					<view class="title_text">
						储存收益数量
					</view>
				</view>
				<view class="num">
					{{personInfo.balance || 0}}
				</view>
			</view>
		</view>
		<view class="btn" @tap="submit">
			收益归集
		</view>
		<view class="tishi">
			执行操作会自动将收益归集到WBC钱包
		</view>
		<image src="http://www.dbl.name/wbc/static/images/309667562730824656.png" class="bg"></image>
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
				
			};
		},
		computed:{
			...mapState({
				personInfo:state =>{
					return state.personInfo
				}
			}),
		},
		onLoad() {
		},
		methods:{
			//获取收益
			submit(){
				console.log(this.personInfo)
				this.Post({
					url:this.url.balanceWithdraw,
					data:{
						uid:this.personInfo.id,
						type:3,
						num:this.personInfo.points,
					}
				})
			}
		}
	}
</script>

<style scoped>
uni-page-body{
	height: 100%;
}
.accumulatedIncome{
	background: #F7F7F7;
	height: 100%;
}
.header{
	display: flex;
	height: 290upx;
	background: #fff;
	padding: 0 36upx;
	align-items: center;
	margin-bottom: 56upx;
}
.header>view{
	flex: 1;
	height: 200upx;
	border-radius: 20upx;
	position: relative;
	margin-right: 35upx;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.header .header_left{
	background: url(http://www.dbl.name/wbc/static/images/微信图片_20181203235505.png) no-repeat center;
	background-size: 100%;
}
.header .header_right{
	margin-right: 0;
	background: url(http://www.dbl.name/wbc/static/images/微信图片_20181203235454.png) no-repeat center;
	background-size: 100%;
}
.header>view .title{
	display: flex;
	height: 40upx;
	line-height: 40upx;
	padding-bottom: 24upx;
	font-size: 24upx;
	color: #fff;
}
.header>view .title>image{
	width: 40upx;
	height: 40upx;
	margin-right: 10upx;
}
.header>view .num{
	font-size: 50upx;
	height: 38upx;
	line-height: 38upx;
	color: #fff;
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
.tishi{
	font-size: 24upx;
	height: 23upx;
	line-height: 23upx;
	color: #999999;
	padding-top: 14upx;
	padding-bottom: 320upx;
	text-align: center;
}
.bg{
	width: 334upx;
	height: 251upx;
	margin: 0 auto;
}
</style>
