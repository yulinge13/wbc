<template>
	<view class="mutualTransferdetails">
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
		<scroll-view scroll-y :style="'height:'+halfHeight" @scrolltolower="downLoad">
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
		</scroll-view>
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
				lists: [], //
				pageNum: 1,
				type: '',
				headerHeight: 0,
				pageSize: 10
			};
		},
		computed: {
			...mapState({
				personInfo: state => {
					return state.personInfo
				}
			}),
			halfHeight() {
				const res = uni.getSystemInfoSync();
				return res.windowHeight - this.headerHeight + 'px';
			}
		},
		methods: {
			//下拉刷新
			downLoad() {
				this.pageNum++
				this.getLists()
			},
			//获取互转明细列表
			getLists() {
				this.Post({
					url: this.url.indexLogs,
					data: {
						uid: this.personInfo.id,
						type: this.type,
						page: this.pageNum,
						row: this.pageSize
					}
				}).then(res => {
					if (res.code === 200) {
						res.data.forEach(i => {
							if (this.type == 2 || this.type == 1) {
								if (this.personInfo.id === i.in_uid) {
									i.money = i.in_charge
									i.whitchType = '转入'
									i.color = '#3574fa'
									i.icon = '+'
								} else {
									i.money = i.out_charge
									i.whitchType = '转出'
									i.color = '#ed3735'
									i.icon = '-'
								}
							} else if (this.type == 7) {
								i.money = i.goods_amount
								i.whitchType = '转入'
								i.color = '#3574fa'
								i.icon = '+'
							} else if (this.type == 5) {
								i.money = i.charge
								i.whitchType = '转入'
								i.color = '#3574fa'
								i.icon = '+'
							} else if (this.type == 3) {
								i.money = i.charge
								i.whitchType = '提现'
								i.color = '#ed3735'
								i.icon = '-'
							}
						})
						this.lists = [...this.lists, ...res.data]
					}
				})
			}
		},
		onReady() {
			let view = uni.createSelectorQuery().select(".header");

			view.fields({
				size: true,
				scrollOffset: true
			}, data => {
				this.headerHeight = data.height
			}).exec();
		},
		onLoad(option) {
			this.type = option.type
			let title = '互转明细'
			if (option.type == 2) {
				title = '互转明细'
			} else if (option.type == 1) {
				title = '提取WBC明细'
			} else if (option.type == 3) {
				title = '推荐奖明细'
			} else if (option.type == 4) {
				title = '锁仓释放明细'
			} else if (option.type == 5) {
				title = '积分收益明细'
			} else if (option.type == 6) {
				title = '积分释放明细'
			} else if (option.type == 7) {
				title = '我的交易记录'
			}
			console.log(title)
			uni.setNavigationBarTitle({
				title: title
			});
			this.getLists()
		}
	}
</script>

<style scoped>
	page {
		height: 100%;
	}

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

	.lists {}

	.list {
		display: flex;
		padding-left: 50upx;
		border-bottom: 2upx solid #eeeeee;
		height: 100upx;
		line-height: 100upx;
	}

	.list .time {
		font-size: 24upx;
		/* padding-right: 40upx; */
		text-align: center;
	}

	.list .type {
		font-size: 24upx;
		flex: 1;
		text-align: center;
	}

	.list .num {
		font-size: 40upx;
		color: #3574fa;
		flex: 1;
		text-align: center;
	}
</style>
