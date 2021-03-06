import Vue from 'vue'
import App from './App'
import Http from './utils/http.js'
import url from './utils/url.js'
import fun from './utils/fun.js'
import store from './store'
Vue.prototype.$store = store
const {
	Post,
	Get
} = new Http()
Vue.config.productionTip = false
Vue.prototype.Post = Post
Vue.prototype.Get = Get
Vue.prototype.url = url
Vue.prototype.fun = fun
App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
