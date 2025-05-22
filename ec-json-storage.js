/* 		
		-------------------------------- ExtendsJSON --------------------------------
		ExtendsJSON is a wrapper script for the ExtendsClass JSON storage API
		(https://extendsclass.com/json-storage.html). You must have an API key to
		make POST requests. You can acquire one from https://extendsclass.com/connect. 

		See the full documentation here: 
*/

console.success = function (string) {
	console.log('%c' + string, 'color:#72BE8C;')
}
const ExtendsJSON = {

	post: function (data, apiKey, securityKey, private) {
		return new Promise(function (resolve, reject) {
			if (!data) {
				reject(new Error('POST requests require data to create bin'))
				return
			}
			if (!apiKey) {
				reject(new Error('POST requests require an api key'))
				return
			}
			if (!securityKey) console.warn('It is recommended to provide a security key')
			if (!private) console.warn('It is recommended to set bin to private')

			let request = new XMLHttpRequest()
			request.open("POST", "https://json.extendsclass.com/bin", true)
			request.setRequestHeader("Api-key", apiKey)
			request.setRequestHeader("Security-key", securityKey)
			request.setRequestHeader("Private", private)
			request.onload = () => {
				if (request.status === 201) {
					console.success('Bin created successfully')
					resolve(request.responseText)
				} else {
					reject(new Error('Request failed with status ' + request.status))
				}
			}
			request.send(JSON.stringify(data))
		})
	},

	get: function get(id, securityKey) {
		return new Promise(function (resolve, reject) {
			if (!id) {
				reject(new Error('GET requests require a bin ID'))
				return
			}

			let request = new XMLHttpRequest()
			request.open('GET', 'https://json.extendsclass.com/bin/' + id, true)
			request.setRequestHeader('Security-key', securityKey)
			request.onload = function () {
				if (request.status === 200) {
					resolve(request.responseText)
				} else {
					reject(new Error('Request failed with status ' + request.status))
				}
			}
			request.onerror = function () {
				reject(new Error('Request failed'))
			}
			request.send()
		})
	},

	put: function (data, id, securityKey) {
		return new Promise(function (resolve, reject) {
			if (!data) {
				reject(new Error('PUT requests require data to update bin'))
				return
			}
			if (!id) {
				reject(new Error('PUT requests require a bin ID'))
				return
			}
			if (!securityKey) console.warn('Some bins cannot be updated without a security key')

			let request = new XMLHttpRequest()
			request.open("PUT", "https://json.extendsclass.com/bin/" + id, true)
			request.setRequestHeader("Security-key", securityKey)
			request.onload = function () {
				if (request.status === 200) {
					resolve(request.responseText)
				} else {
					reject(new Error('Request failed with status ' + request.status))
				}
			}
			request.onerror = function () {
				reject(new Error('Request failed'))
			}
			request.send(JSON.stringify(data))
		})
	},

	patch: function (data, id, securityKey) {
		return new Promise(function (resolve, reject) {
			if (!data) {
				reject(new Error('PATCH requests require data to update bin'))
				return
			}
			if (!id) {
				reject(new Error('PATCH requests require a bin ID'))
				return
			}
			if (!securityKey) console.warn('Some bins cannot be updated without a security key')

			let request = new XMLHttpRequest()
			request.open("PATCH", "https://json.extendsclass.com/bin/" + id, true)
			request.setRequestHeader("Content-type", "application/merge-patch+json");
			request.setRequestHeader("Security-key", securityKey)
			request.onload = function () {
				if (request.status === 200) {
					resolve(request.responseText)
				} else {
					reject(new Error('Request failed with status ' + request.status))
				}
			}
			request.onerror = function () {
				reject(new Error('Request failed'))
			}
			request.send(JSON.stringify(data))
		})
	},

	delete: function (id, securityKey) {
		return new Promise(function (resolve, reject) {
			if (!id) {
				reject(new Error('PATCH requests require a bin ID'))
				return
			}
			if (!securityKey) console.warn('Some bins cannot be deleted without a security key')
			let request = new XMLHttpRequest()
			request.open("DELETE", "https://json.extendsclass.com/bin/" + id, true)
			request.setRequestHeader("Security-key", securityKey)
			request.onload = function () {
				if (request.status === 200) {
					resolve(request.responseText)
				} else {
					reject(new Error('Request failed with status ' + request.status))
				}
			}
			request.onerror = function () {
				reject(new Error('Request failed'))
			}
			request.send()
		})
	},
}
