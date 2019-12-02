import Musixmatch from '../index'
const init = {
	apikey: 'e7a3543c609d7dc2b4499437567b4d33',
	baseURL: 'https://api.musixmatch.com/ws/1.1/',
	corsURL: 'https://cors-anywhere.herokuapp.com/',
	options: {
		mode: 'cors'
	}
}
const msx = Musixmatch(init)

console.log(msx.chartArtists({ country: 'TR', page: 1, page_size: 10 }))

msx.chartArtists({ country: 'us', page: 1, page_size: 10 }).then(function (data) {
	console.log(data.artist_list)
}).catch(function (err) {
	console.log(err.stack)
})
