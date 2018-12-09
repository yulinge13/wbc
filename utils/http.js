const path = 'http://www.dbl.name/index.php/'
class Http {
	constructor() {}
	Get({
		url,
		data,
		fail
	}) {
		return new Promise((resolve, reject) => {
			uni.request({
				method: 'GET',
				url: path + url, //仅为示例，并非真实接口地址。
				data: {
					...data
				},
				header: {
					'content-type': 'application/json' //自定义请求头信息
				},
				success(res) {
					console.log(res.data.code)
					if (res.data.code === 200) {
						resolve(res.data)
					} else {
						uni.showToast({
							title: res.data.msg,
							duration: 1000,
							icon:'none'
						});
						fail && fail()
					}
				},
				fail(err) {
					reject(reject)
				}
			});
		})
	}
	Post({
		url,
		data,
		fail
	}) {
		return new Promise((resolve, reject) => {
			console.log(path)
			uni.request({
				method: 'POST',
				url: path + url, //仅为示例，并非真实接口地址。
				data: {
					...data
				},
				header: {
					"Content-Type": "application/x-www-form-urlencoded" //自定义请求头信息
				},
				success(res) {
					console.log(res)
					console.log(res.data.code)
					if (res.data.code === 200) {
						resolve(res.data)
					} else {
						uni.showToast({
							title: res.data.msg,
							duration: 1000,
							icon:'none'
						});
						fail && fail()
					}
				},
				fail(err) {
					reject(reject)
				}
			});
		})
	}
}
export default Http
