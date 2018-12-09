import Vue from 'vue'
import Vuex from 'vuex'
import url from '../utils/url'
import Http from '../utils/http.js'
const {
	Post,
	Get
} = new Http()
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		personInfo: uni.getStorageSync('personInfo') || {}, //用户信息
		code: '' //验证码
	},
	mutations: {
		//清楚登陆信息
		clearPersonInfo(state) {
			uni.removeStorageSync('personInfo');
			state.personInfo = {}
		},
		//更新数据
		dateUpInfo(state, uid) {
			return Post({
				url: url.userUserInfo,
				data: {
					uid
				},
			}).then(data => {
				if (data.code === 200) {
					uni.setStorageSync('personInfo', data.data);
					state.personInfo = data.data
				}
			})
		}
	},
	actions: {}
})

export default store
