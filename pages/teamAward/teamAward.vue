<template>
	<view class="teamAward">
		<view class="header">
			<image src="http://www.dbl.name/wbc/static/images/业绩.png"></image>
			<view class="header_cont">
				<view class="header_name">
					团队业绩
				</view>
				<view class="header_num">
					{{personInfo.team_bill}}
				</view>
			</view>
		</view>
		<view class="has_num">
			<view class="has_num_name">
				拥有数量
			</view>
			<view class="num">
				{{personInfo.team_bill}}
			</view>
		</view>
		<view class="faq">
			<view class="faq_left">
				<view class="faq_list">
					系数说明：
				</view>
				<view class="faq_list">
					奖励伞下业绩千分之三
				</view>
				<view class="faq_list">
					100万-千分之3.5
				</view>
				<view class="faq_list">
					200万-千分之4
				</view>
				<view class="faq_list">
					200万以上-千分之5
				</view>
			</view>
			<view class="faq_right">
				<view class="faq_list">
					最低提取数量：1000
				</view>
			</view>
		</view>
		<view class="btn">
			提现
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
		computed:{
			...mapState({
				personInfo:state =>{
					return state.personInfo
				}
			}),
		},
	}
</script>

<style scoped>
	page{
		height: 100%;
	}
.teamAward{
	height: 100%;
	background: #f7f7f7;
}
.header{
	background: #fff;
	padding: 0 30upx;
	margin-bottom: 30upx;
	display: flex;
	align-items: center;
	height: 174upx;
}
.header image{
	width: 99upx;
	height: 84upx;
}
.header .header_cont {
	margin-left: 20upx;
}
.header .header_cont .header_name{
	height: 38upx;
	line-height: 38upx;
	font-size: 40upx;
	color: #333333;
	padding-bottom: 28upx;
}
.header .header_cont .header_num{
	height: 34upx;
	line-height: 34upx;
	font-size: 44upx;
	color: #02d46a;
}
.has_num{
	display: flex;
	height: 104upx;
	line-height: 104upx;
	font-size: 30upx;
	color: #333333;
	padding: 0 30upx;	
	background: #fff;
}
.has_num .num{
	padding-left: 40upx;
	color: #3574fa;
	font-size: 40upx;
}
.faq{
	padding: 0 30upx;
	line-height: 23upx;
	display: flex;
	justify-content: space-between;
	padding-top: 15upx;
	padding-bottom: 90upx;
}
.faq>view{
	flex: 1;
}
.faq .faq_list{
	height: 23upx;
	font-size: 24upx;
	color: #999999;
	padding-bottom: 11upx;
}
.faq_right .faq_list{
	text-align: right;
}
.btn{
	margin: 0 30upx;
	height: 80upx;
	line-height: 80upx;
	text-align: center;
	color: #fff;
	border-radius: 10upx;
	font-size: 30upx;
	background: #3574fa;
}
</style>
