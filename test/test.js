import Musixmatch from 'musixmatch'

const init = {
	apikey: '<Api Key>',
	baseURL: 'https://api.musixmatch.com/ws/1.1/',
	corsURL: ''
}
const msx = Musixmatch(init)

msx.chartArtists({ country: 'us', page: 1, page_size: 10 }).then(function (data) {
	console.log(data.artist_list)
}).catch(function (err) {
	console.log(err.stack)
})
