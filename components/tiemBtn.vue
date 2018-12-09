<template>
	<view :class="disable?'time_btn time_btn_dis':'time_btn'" @tap="timeComputer">
		发送验证码({{time}}s)
	</view>
</template>

<script>
	export default {
		props: ['mobile','disable','type'],
		data() {
			return {
				time: 60,
				onOff: true, //是否能点
			};
		},
		methods: {
			//时间倒计时
			timeComputer() {
				if (this.mobile.length > 0) {
					if (this.onOff) {
						this.onOff = false
						this.timer = setInterval(() => {
							this.time--
							if (this.time <= 0) {
								this.init()
							}
						}, 1000)
						this.sendMessage()
					}
				} else {
					uni.showToast({
						title: '请先输入手机号',
						duration: 1000,
						icon: 'none'
					});
				}
			},
			//按钮信息初始化
			init(){
				clearInterval(this.timer)
				this.onOff = true
				this.time = 60
			},
			//获取手机验证码
			sendMessage() {
				console.log(this.disable)
				const _this = this
				if(this.disable === undefined){
					this.Post({
						url: this.url.comCode,
						data: {
							mobile: this.mobile,
							type: this.type || 'type'
						},
						fail(){
							_this.init()
						}
					}).then(res => {
						if(res.code === 200){
							this.$store.state.code = res.data.code
						}
					})
				}else{
					if(this.disable === false){
						this.Post({
							url: this.url.comCode,
							data: {
								mobile: this.mobile,
								type: this.type
							},
							fail(){
								_this.init()
							}
						}).then(res => {
							if(res.code === 200){
								this.$store.state.code = res.data.code
							}
						})
					}else{
					this.init()
					}
				}
			}
		}
	}
</script>

<style scoped>
	.time_btn {
		width: 216upx;
		height: 64upx;
		border-radius: 4upx;
		background: #4b72da;
		line-height: 64upx;
		text-align: center;
		font-size: 22upx;
		color: #fff;
	}
	.time_btn_dis{
		background: #b7b7b7;
		color: #ffffff;
	}
</style>
