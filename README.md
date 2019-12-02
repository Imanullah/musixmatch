# musixmatch

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

#THIS MODULE ON TESTING



NodeJS module musixmatch API
The simplified NodeJS module for request Musixmatch API support. Inspire by https://github.com/c0b41/musixmatch.
Request are pretty awesome, but I found myself using it into NodeJS

Also check out [here](https://github.com/c0b41/musixmatch#methods) to using the methods that are very similar to request

## Setup

1. Add `musixmatch` dependency to your project

```bash
npm install musixmatch # or yarn add musixmatch
```

2. Declaring & Creating a Client
Now you can use all Musixmatch services followed by method

```js
const Musixmatch = require("musixmatch");
const init = {
	apikey: '<Your Musicmatch API Key',
	baseURL: 'https://api.musixmatch.com/ws/1.1/', // Optional default 'https://api.musixmatch.com/ws/1.1/'
	corsURL: 'https://cors-anywhere.herokuapp.com/', //Optional if you have problem with CORS default is 'https://cors-anywhere.herokuapp.com/'
  // Optional Fetches API request
  options: {
		mode: 'cors'
	}
}
const msx = Musixmatch(init)

msx.chartArtists({ country: 'us', page: 1, page_size: 10 }).then(function (data) {
	console.log(data.artist_list)
}).catch(function (err) {
	console.log(err.stack)
})
```

## Methods
For more information how to use Methods and Params with example... please refer to https://github.com/c0b41/musixmatch#methods

## License

[MIT License](./LICENSE)

Copyright (c) IMAN

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/musixmatch/latest.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/musixmatch

[npm-downloads-src]: https://img.shields.io/npm/dt/musixmatch.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/musixmatch

[circle-ci-src]: https://img.shields.io/circleci/project/github/https://github.com.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/https://github.com

[codecov-src]: https://img.shields.io/codecov/c/github/https://github.com.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/https://github.com

[license-src]: https://img.shields.io/npm/l/musixmatch.svg?style=flat-square
[license-href]: https://npmjs.com/package/musixmatch
