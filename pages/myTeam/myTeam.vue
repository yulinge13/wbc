<template>
	<view class="myTeam">
		<view class="header">
			<view class="title">
				<view class="title_name">
					今日团队业绩
				</view>
				<image src="http://www.dbl.name/wbc/static/images/今日.png" mode=""></image>
				<view class="title_num">
					{{todayNum}}
				</view>
			</view>
			<view class="title">
				<view class="title_name">
					昨日团队业绩
				</view>
				<image src="http://www.dbl.name/wbc/static/images/时钟 拷贝 2.png" mode=""></image>
				<view class="title_num">
					{{yesterdayNum}}
				</view>
			</view>
			<view class="title">
				<view class="title_name">
					主要分享节点数
				</view>
				<image src="http://www.dbl.name/wbc/static/images/分享.png" mode=""></image>
				<view class="title_num">
					{{memberNum}}
				</view>
			</view>
		</view>
		<view class="lists_title">
			<view class="lists_title_left">
				主要分享节点
			</view>
			<view class="lists_title_right">
				注册日期
			</view>
		</view>
		<view class="lists">
			<view class="list" v-for="(i,index) in lists" :key="index" @tap="linkToChild(i.id)">
				<view class="lists_title_left">
					{{i.nickname}}
				</view>
				<view class="lists_title_right">
					{{i.reg_time}}
				</view>
			</view>
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
				lists:[],
				id:null,
				todayNum:0,
				yesterdayNum:0,
				memberNum:0
			};
		},
		computed: {
			...mapState({
				personInfo: state => {
					return state.personInfo
				}
			}),
		},
		methods: {
			getLists(){
				this.Post({
					url:this.url.indexTeamMember,
					data:{
						uid:this.id
					}
				}).then(res => {
					if(res.code === 200){
						this.todayNum = res.data.today_num
						this.yesterdayNum = res.data.yesterday_num
						this.memberNum = res.data.member_num
						this.lists =  res.data.team
					}
				})
			},
			linkToChild(id){
				uni.navigateTo({
					url: '../myTeam/myTeam?id='+id
				});
			}
		},
		onLoad(option) {
			if(option.id){
				this.id = option.id
			}else{
				this.id = this.personInfo.id
			}
			this.getLists()
		}
	}
</script>

<style scoped>
	page {
		height: 100%;
	}

	.header {
		background: rgb(247, 247, 247);
		display: flex;
		padding: 31upx 48upx;
		align-items: center;
	}

	.header .title {
		padding-top: 32upx;
		flex: 1;
		border-radius: 14upx;
		background: #fff;
		text-align: center;
		font-size: 24upx;
		color: #333333;
		margin-right: 30upx;
		box-shadow: 0 0 2upx 2upx rgb(0, 0, 0, .1);
		padding-bottom: 29upx;
		align-content: center;
	}

	.header .title .title_name {
		height: 23upx;
		line-height: 23upx;
		padding-bottom: 25upx;
	}

	.header .title image {
		width: 66upx;
		height: 66upx;
		margin: 0 auto;
		margin-bottom: 20upx;

	}

	.header .title .title_num {
		height: 25upx;
		line-height: 25upx;
		color: #3574fa;
		font-size: 32upx;
	}

	.header .title:last-of-type {
		margin-right: 0;
	}
	.lists_title{
		background: #fff;
		color: #333333;
		font-size: 32upx;
		padding:0 50upx;
		padding-top: 30upx;
		padding-bottom: 26upx;
		display: flex;
		justify-content: space-between;
	}
	.lists_title>view{
		height: 32upx;
		line-height: 32upx;
	}
	.lists {}
	.list{
		background: #fff;
		color: #333333;
		font-size: 32upx;
		padding:0 50upx;
		display: flex;
		justify-content: space-between;
		border-top: 1upx solid #eeeeee;
	}
	.list>view{
		height: 98upx;
		line-height: 98upx;
	}
</style>
