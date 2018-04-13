let httpHelper = {};

/*let base_url = "http://192.168.1.112:9003";*/
/*let base_url = "http://523309375.free.ngrok.cc";*/
/*let base_url = "http://192.168.1.143:9003";*/
let base_url = "http://192.168.1.172:9003";
/**
 * 基于 fetch 封装的 GET请求
 * @param url
 * @param params {}
 * @param headers
 * @returns {Promise}
 */
httpHelper.get = function(url, params, headers) {
	url = `${base_url}${url}`
	if (params) {
		let paramsArray = [];
		//encodeURIComponent
		Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
		if (url.search(/\?/) === -1) {
			url += '?' + paramsArray.join('&')
		} else {
			url += '&' + paramsArray.join('&')
		}
	}
	console.log(28, url);
	return new Promise(function(resolve, reject) {
		fetch(url, {
				method: 'GET',
				headers: headers ? headers : {
					"Content-Type": "application/json;charset=UTF-8",
				},
			})
			.then((response) => {
				console.log(37, response);
				if (response.ok) {
					return response.json();
				} else {
					return {
						isSucc: false,
						message: "数据问题"
					}
					reject({
						status: response.status
					})
				}
			})
			.then((response) => {
				resolve(response);
			})
			.catch((err) => {
				reject({
					status: -1
				});
			})
	})
}

httpHelper.put = function(url, data, headers) {
	url = `${base_url}${url}`;
	let formData = new FormData();
	if (data) {
		for (let key in data) {
			formData.append(key, data[key]);
		}
	}
	console.log(url);
	return new Promise(function(resolve, reject) {
		fetch(url, {
				method: 'PUT',
				body: formData._parts.length > 0 ? formData : null,
				headers: headers ? headers : null
			})
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					reject({
						status: response.status
					})
				}
			})
			.then((response) => {
				console.log(2, response)
				resolve(response);
			})
			.catch((err) => {
				console.log(3, err)
				reject({
					status: -1
				});
			})
	})
}
/**
 * 基于 fetch 封装的 POST请求  FormData 表单数据
 * @param url
 * @param formData
 * @param headers
 * @returns {Promise}
 */
httpHelper.post = function(url, data, headers) {
	url = `${base_url}${url}`;
	let formData = new FormData();
	if (data) {
		for (let key in data) {
			formData.append(key, data[key]);
		}
	}
	return new Promise(function(resolve, reject) {
		fetch(url, {
				method: 'POST',
				body: formData._parts.length > 0 ? formData : null,
				headers: headers ? headers : null
			})
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					reject({
						status: response.status
					})
				}
			})
			.then((response) => {
				console.log(2, response)
				resolve(response);
			})
			.catch((err) => {
				console.log(3, err)
				reject({
					status: -1
				});
			})
	})
}

httpHelper.uploadImage = (params) => {
	url = base_url + "/tool/upload";
	return new Promise(function(resolve, reject) {
		var ary = params.path.split('/');
		let formData = new FormData();
		let file = {
			uri: params.path,
			type: 'multipart/form-data',
			name: ary[ary.length - 1]
		};
		formData.append("file", file);
		fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'multipart/form-data',
				},
				body: formData,
			}).then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					reject({
						status: response.status
					})
				}
			})
			.then((responseData) => {
				console.log('uploadImage', responseData);
				resolve(responseData);
			})
			.catch((err) => {
				console.log('err', err);
				reject(err);
			});
	});
}

export default httpHelper;