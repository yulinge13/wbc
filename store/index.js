import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
		personInfo:uni.getStorageSync('personInfo') || {},//用户信息
		code:''//验证码
	},
    mutations: {
		//清楚登陆信息
		clearPersonInfo(state){
			uni.removeStorageSync('personInfo');
			state.personInfo = {}
		}
	},
    actions: {}
})

export default store