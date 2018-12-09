<template>
	<view class="wbcMoney">
		<view class="header">
			<image src="http://www.dbl.name/wbc/static/images/logo.png"></image>
			<view class="header_cont">
				<view class="header_name">
					冬宝链（WBC）
				</view>
				<view class="header_num">
					1253.3000
				</view>
			</view>
		</view>
		<view class="cont">
			<view class="fill fill_one">
				<view class="fill_title">
					<view class="fill_left">
						<image src="http://www.dbl.name/wbc/static/images/时钟 拷贝 2.png"></image>
						<view class="fill_left_name">
							已绑定银行卡
						</view>
					</view>
				</view>
				<view class="fill_cont">
					<input placeholder="请输入转入账户" class="input" />
				</view>
			</view>
			<view class="fill fill_three">
				<view class="fill_title">
					<view class="fill_left">
						<image src="http://www.dbl.name/wbc/static/images/时钟 拷贝 2.png"></image>
						<view class="fill_left_name">
							请输入提取WBC数量
						</view>
					</view>
				</view>
				<view class="fill_cont">
					<input placeholder="请输入提取数量" class="input" />
				</view>
			</view>
			<view class="act_num">
				<view class="act">
					<view class="act_name">
						实际提现：
					</view>
					<view class="act_val">
						5924.21
					</view>
				</view>
				<view class="act">
					<view class="act_name">
						扣除手续费用：
					</view>
					<view class="act_val">
						5924.21
					</view>
				</view>
			</view>
			<view class="fill fill_four">
				<view class="fill_title">
					<view class="fill_left">
						<image src="http://www.dbl.name/wbc/static/images/时钟 拷贝 2.png"></image>
						<view class="fill_left_name">
							请输入手机验证码
						</view>
					</view>
				</view>
				<view class="fill_cont">
					<input placeholder="请输入互转数量" class="input" />
					<TimeBtn :mobile="15983750925"></TimeBtn>
				</view>
			</view>
		</view>
		<view class="btn">
			提交
		</view>
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
			})
		},
		components:{
			TimeBtn
		},
		methods:{
			//获取实际能获得数量
			getActNum(){
				
			}
		}
		
	}
</script>

<style scoped>
	uni-page-body {
		height: 100%;
	}

	.wbcMoney {
		height: 100%;
		background: #F7F7F7;
	}

	.header {
		display: flex;
		background: #fff;
		height: 174upx;
		padding: 0 30upx;
		align-items: center;
		margin-bottom: 30upx;
	}

	.header image {
		width: 139upx;
		height: 70upx;
		margin-right: 21upx;
	}

	.header .header_cont {}

	.header .header_name {
		height: 38upx;
		line-height: 38upx;
		font-size: 40upx;
		color: #333333;
		padding-bottom: 28upx;

	}

	.header .header_num {
		height: 34upx;
		line-height: 34upx;
		font-size: 44upx;
		color: #3574fa;
	}

	.cont {
		/* padding: 0 30upx; */
		background: #f7f7f7;
		padding-bottom: 77upx;
	}

	.fill {
		background: #fff;
		border-radius: 14upx;
		margin-bottom: 30upx;
	}

	.fill .fill_title {
		border-bottom: 1upx solid #dbdbdb;
		display: flex;
		padding-top: 16upx;
		display: flex;
		justify-content: space-between;
		height: 73upx;
		line-height: 73upx;
		padding-left: 36upx;
	}

	.fill .fill_title .fill_left {
		display: flex;
		align-items: center;
	}

	.fill .fill_title .fill_right {
		padding-right: 36upx;
		font-size: 30upx;
		color: #1b62ff;
	}

	.fill .fill_title .fill_left .fill_left_name {
		padding-left: 11upx;
		font-size: 30upx;
		color: #333333;
	}

	.fill_cont {
		height: 92upx;
		line-height: 92upx;
		font-size: 30upx;
		color: #999999;
		padding-left: 107upx;
		display: flex;
		align-items: center;
	}
	
	.fill_cont .input {
		height: 92upx;
		line-height: 92upx;
		font-size: 30upx;
		color: #999999;
		flex: 1;
	}

	.fill_cont image {
		width: 42upx;
		height: 26upx;
		margin-right: 40upx;
	}

	.fill_one .fill_title image {
		width: 61upx;
		height: 61upx;
	}

	.fill_two .fill_title image {
		width: 61upx;
		height: 61upx;
	}
	.fill_three{
		margin-bottom: 0;
	}
	.fill_three .fill_title image {
		width: 61upx;
		height: 61upx;
	}

	.fill_four .fill_title image {
		width: 61upx;
		height: 61upx;
	}
	.fill_four .fill_cont{
		padding-right: 35upx;
	}
	.fill_four .fill_cont input{
		padding-right: 10upx;
	}
	.act_num{
		display: flex;
		padding: 0 33upx;
		height: 24upx;
		line-height: 24upx;
		padding-top: 13upx;
		font-size: 24upx;
		color: #666666;
		justify-content: space-between;
		padding-bottom: 44upx;
	}
	.act_num .act{
		display: flex;
	}
	.act_num .act_val{
		color: #3574fa;
		font-size: 30upx;
		padding-left: 10upx;
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
</style>
