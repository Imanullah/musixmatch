const Axios = require('axios')
const methods = require('./methods.js')

function Musixmatch(obj) {
	if (!(this instanceof Musixmatch)) return new Musixmatch(obj)
	var obj = obj ? obj : {}
	this._data = {
		apikey: obj.apikey ? obj.apikey : '',
		format: obj.format ? obj.format : 'json'
	}
	this.baseURL = obj.baseURL ? obj.baseURL : 'https://api.musixmatch.com/ws/1.1/'
	this.corsURL = obj.corsURL || obj.corsURL === '' ? obj.corsURL : 'https://cors-anywhere.herokuapp.com/'
	this._options = obj.options ? obj.options : {}
}

methods.forEach(function (entry) {
	Musixmatch.prototype[entry.method] = function (params) {
		const xparams = Object.assign({}, this._data, params)
		const uri = `/${entry.name}`
		const url = `${this.corsURL}/${this.baseURL}`
		const baseUrl = url.replace(/^\/|([^:]\/)\/+/g, '$1')

		const xoptions = Object.assign({}, { baseURL: baseUrl }, this._options)
		const instance = Axios.create(xoptions)

		try {
			const res = instance.get(uri, { params: xparams })
				.then(res => res.data)
				.then(resdata => resdata.message.body)
			return res
		} catch (error) {
			throw error.response.data
		}
	}
})

module.exports = Musixmatch
