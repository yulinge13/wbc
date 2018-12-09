<template>
	<view class="extractDetails">
		<view class="header">
			<view class="title">
				日期
			</view>
			<view class="title">
				类型
			</view>
			<view class="title">
				数量
			</view>
		</view>
		<view class="lists">
			<view class="list" v-for="(i,index) in lists" :key="index">
				<view class="time">
					{{i.date}}
				</view>
				<view class="type">
					{{i.whitchType}}
				</view>
				<view class="num" :style="'color:'+i.color">
					{{i.icon}}{{i.money}}
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
				lists:[],//
				pageNum:1
			};
		},
		computed:{
			...mapState({
				personInfo:state =>{
					return state.personInfo
				}
			})
		},
		methods:{
			//获取互转明细列表
			getLists(){
				this.Post({
					url:this.url.indexLogs,
					data:{
						uid:this.personInfo.id,
						type:1,
						page:this.pageNum
					}
				}).then(res => {
					if(res.code === 200){
						res.data.forEach(i => {
							if(this.personInfo.id === i.in_uid){
								i.money = i.in_charge
								i.whitchType = '转入'
								i.color = '#3574fa'
								i.icon = '+'
							}else{
								i.money = i.out_charge
								i.whitchType = '转出'
								i.color = '#ed3735'
								i.icon = '-'
							}
						})
						this.lists = res.data
					}
				})
			}
		},
		onLoad() {
			this.getLists()
		}
	}
</script>

<style scoped>
	.header {
		height: 160upx;
		line-height: 160upx;
		background: rgb(247, 247, 247);
		display: flex;
		padding: 0 48upx;
		align-items: center;
	}

	.header .title {
		flex: 1;
		height: 85upx;
		line-height: 85upx;
		border-radius: 14upx;
		background: #fff;
		text-align: center;
		font-size: 32upx;
		color: #333333;
		margin-right: 39upx;
		box-shadow: 0 0 2upx 2upx rgb(0, 0, 0, .1);
	}

	.header .title:last-of-type {
		margin-right: 0;
	}
	.lists{
		
	}
	.list{
		display: flex;
		padding-left: 50upx;
		border-bottom: 2upx solid #eeeeee;
		height: 100upx;
		line-height: 100upx;
	}
	.list .time{
		font-size: 24upx;
		/* padding-right: 40upx; */
		text-align: center;
	}
	.list .type{
		font-size: 24upx;
		flex: 1;
		text-align: center;
	}
	.list .num{
		font-size: 40upx;
		color: #3574fa;
		flex: 1;
		text-align: center;
	}
</style>
