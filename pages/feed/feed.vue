<template>
	<view class="feed">
		<view class="section">
			<view class="text">
				<textarea v-model="content" placeholder="请输入你的反馈意见" :maxlength="100" :adjust-position="true" auto-focus />
				</view>
			</view>
		<view class="btn" @click="submit">
			提交
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
				content:''
			};
		},
		computed: {
			...mapState({
				personInfo: state => {
					return state.personInfo
				}
			})
		},
		methods:{
			submit(){
				if(this.content.length>10 || this.content.length<=100){
					this.Post({
						url:this.url.goodsQuestion,
						data:{
							uid:this.personInfo.id,
							content:this.content
						}
					}).then(res => {
						if(res.code === 200){
							uni.showToast({
								title: res.msg,
								duration: 1000,
							});
							setTimeout(() => {
								uni.switchTab({
									url:'../my/my'
								})
							},900)
						}else{
							uni.showToast({
								title: res.msg,
								duration: 1000,
								icon: 'none'
							});
						}
					})
				}else{
					uni.showToast({
						title: '反馈内容长度为10到100字符',
						duration: 1000,
						icon: 'none'
					});
				}
			}
		}
	}
</script>

<style scoped>
	.feed{
		padding: 0 30upx;
	}
	.btn {
		margin: 0 30upx;
		height: 80upx;
		line-height: 80upx;
		border-radius: 10upx;
		text-align: center;
		font-size: 30upx;
		color: #fff;
		background: #3574fa;
		margin-top: 30upx;
	}
	.text{
		margin: 0 30upx;
		border: 1upx solid #EEEEEE;
	}
	.text textarea{
		padding:10upx;
	}
</style>
