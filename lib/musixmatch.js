import fetch from 'node-fetch'
import qp from 'query-parse'
import methods from './methods.js'

function Musixmatch(obj) {
	if (!(this instanceof Musixmatch)) return new Musixmatch(obj)
	var obj = obj ? obj : {}
	this._data = {
		apikey: obj.apikey ? obj.apikey : '',
		format: obj.format ? obj.format : 'json'
	}
	this.baseURL = obj.baseURL ? obj.baseURL : 'https://api.musixmatch.com/ws/1.1/'
	this.corsURL = obj.corsURL || obj.corsURL === '' ? obj.corsURL : 'https://cors-anywhere.herokuapp.com/'
	this.setOptions = obj.options ? obj.options : {}

	this.setBaseURL = (entry, params) => {
		const xparams = Object.assign({}, this._data, params)
		const uri = `${this.corsURL}/${this.baseURL}${entry}?${qp.toString(xparams)}`
		return uri.replace(/^\/|([^:]\/)\/+/g, '$1')
	}
}

methods.forEach(function (entry) {
	Musixmatch.prototype[entry.method] = async function (params, options) {
		const xoptions = Object.assign({}, this.setOptions, options)
		const endpointURL = this.setBaseURL(entry.name, params)

		const result = await fetch(endpointURL, options)
			.then(res => res.json())
			.then(json => json.message.body)
			.catch(error => {
				console.error(error)
				return error
			})
		return result
	}
})

module.exports = Musixmatch
