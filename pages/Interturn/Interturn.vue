<template>
	<view class="interturn">
		<view class="header">
			<view class="header_top">
				<view class="header_name">
					冬宝链 (WBC)
				</view>
				<image src="http://www.dbl.name/wbc/static/images/20181202213613.png"></image>
			</view>
			<view class="header_num">
				1212332
			</view>
			<view class="header_lists">
				<view class="header_list">
					<image src="http://www.dbl.name/wbc/static/images/微信图片_20181202214237.png"></image>
					<view class="header_list_cont">
						<view class="header_list_name">
							预存WBC
						</view>
						<view class="header_list_num">
							￥455.0000
						</view>
					</view>
				</view>
				<view class="header_list">
					<image src="http://www.dbl.name/wbc/static/images/微信图片_20181202214232.png"></image>
					<view class="header_list_cont">
						<view class="header_list_name">
							补贴WBC
						</view>
						<view class="header_list_num">
							￥455.0000
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="cont">
			<view class="fill fill_one">
				<view class="fill_title">
					<view class="fill_left">
						<image src="http://www.dbl.name/wbc/static/images/银行卡.png"></image>
						<view class="fill_left_name">
							输入账号
						</view>
					</view>
					<view class="fill_right">
						验证
					</view>
				</view>
				<view class="fill_cont">
					<input placeholder="请输入转入账户" class="input" />
				</view>
			</view>
			<view class="fill fill_two">
				<view class="fill_title">
					<view class="fill_left">
						<image src="http://www.dbl.name/wbc/static/images/类型.png"></image>
						<view class="fill_left_name">
							选择类型
						</view>
					</view>
				</view>
				<view class="fill_cont">
					<picker class="input" mode="selector" @change="typeChange" :value="formData.type" :range="typeLists" range-key="name">
						 <view>{{typeLists[formData.type].name}}</view>
					</picker>
					<image src="http://www.dbl.name/wbc/static/images/下 拉.png"></image>
				</view>
			</view>
			<view class="fill fill_three">
				<view class="fill_title">
					<view class="fill_left">
						<image src="http://www.dbl.name/wbc/static/images/数量阶梯价.png"></image>
						<view class="fill_left_name">
							互转数量
						</view>
					</view>
				</view>
				<view class="fill_cont">
					<input placeholder="请输入互转数量" class="input" />
				</view>
			</view>
			<view class="fill fill_four">
				<view class="fill_title">
					<view class="fill_left">
						<image src="http://www.dbl.name/wbc/static/images/验证码 (1).png"></image>
						<view class="fill_left_name">
							发送验证码
						</view>
					</view>
					<view class="fill_right">
						手机
					</view>
				</view>
				<view class="fill_cont">
					<input placeholder="请输入互转数量" class="input" />
				</view>
			</view>
		</view>
		<view class="info">
			<view class="info_left">
				实到数量：0
			</view>
			<view class="info_right">
				节点费用：0
			</view>
		</view>
		<view class="sub_btn">
			提交
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				typeLists:[
					{
						name:'请选择互转类型',
					},
					{
						name:'成都',
					},
					{
						name:'北京',
					}
				],
				formData:{
					type:0
				}
			};
		},
		methods:{
			//选择类型
			typeChange(e){
				console.log(e)
				this.formData.type = e.detail.value;
			}
		}
	}
</script>

<style scoped>
	.interturn{
		background: #f7f7f7;
	}
	.header {
		background: #3574fa;
		width: 100%;
	}

	.header_top {
		display: flex;
		justify-content: space-between;
		padding: 0 30upx;
		height: 46upx;
		line-height: 46upx;
		font-size: 40upx;
		color: #fff;
		padding-top: 36upx;
		padding-bottom: 62upx;
	}

	.header_top image {
		width: 45upx;
		height: 46upx;
	}

	.header_num {
		font-size: 80upx;
		color: #fff;
		text-align: center;
	}

	.header_lists {
		display: flex;
		justify-content: space-around;
		padding: 0 30upx;
	}

	.header_list {
		display: flex;
		padding-top: 43upx;
		padding-bottom: 83upx;
		align-items: center;
	}

	.header_list image {
		width: 49upx;
		height: 49upx;
		margin-right: 18upx;
	}

	.header_list .header_list_cont {
		font-size: 30upx;
		color: #fff;
	}

	.header_list .header_list_cont .header_list_name {
		padding-bottom: 23upx;
		height: 29upx;
		line-height: 29upx;
	}

	.header_list .header_list_cont .header_list_num {
		height: 24upx;
		line-height: 24upx;
	}

	.cont {
		padding: 0 30upx;
		background: #f7f7f7;
	}

	.fill {
		padding-left: 35upx;
		padding-right: 7upx;
		background: #fff;
		border-radius: 14upx;
		margin-bottom: 30upx;
		transform: translateY(-44upx);
	}

	.fill .fill_title {
		border-bottom: 1upx solid #dbdbdb;
		display: flex;
		padding-top: 16upx;
		display: flex;
		justify-content: space-between;
		height: 73upx;
		line-height: 73upx;
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
		padding-left: 18upx;
		font-size: 30upx;
		color: #333333;
	}

	.fill_cont {
		height: 92upx;
		line-height: 92upx;
		font-size: 30upx;
		color: #999999;
		padding-left: 60upx;
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
	.fill_cont image{
		width: 42upx;
		height: 26upx;
		margin-right: 40upx;
	}

	.fill_one .fill_title image {
		width: 40upx;
		height: 32upx;
	}
	.fill_two .fill_title image {
		width: 42upx;
		height: 41upx;
	}
	.fill_three .fill_title image {
		width: 42upx;
		height: 41upx;
	}
	.fill_four .fill_title image {
		width: 36upx;
		height: 27upx;
	}
	.info{
		display: flex;
		padding: 0 72upx;
		height: 29upx;
		line-height: 29upx;
		font-size: 30upx;
		color: #333333;
		justify-content: space-between;
		background: #F7F7F7;
		transform: translateY(-44upx);
		padding-bottom: 66upx;
	}
	.sub_btn{
		margin: 0 30upx;
		height: 80upx;
		line-height: 80upx;
		font-size: 30upx;
		color: #fff;
		text-align: center;
		background: #4b72da;
		border-radius: 10upx;
		transform: translateY(-44upx);
	}
</style>
