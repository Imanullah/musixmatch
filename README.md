# musixmatch

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

NodeJS module musixmatch API
The simplified NodeJS module for request Musixmatch API support. Inspire by https://github.com/c0b41/musixmatch.
Request are pretty awesome, but I found myself using it into NodeJS

Also check out [here](https://github.com/c0b41/musixmatch#methods) to using the methods that are very similar to request

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

Add `musixmatch` dependency to your project

```bash
npm install musixmatch # or yarn add musixmatch
```

## Declaring & Creating a Client
You need to setup initial configuration
you can use all Musixmatch services then followed by method

```js
const Musixmatch = require("musixmatch");
const init = {
	// Required from Musixmatch.com
	apikey: '<Your Musicmatch API Key>',

	// Optional default 'https://api.musixmatch.com/ws/1.1/'
	// baseURL will be prepended to `url` unless `url` is absolute.
	baseURL: 'https://api.musixmatch.com/ws/1.1/',

	// Optional if you have problem with CORS, default is 'https://cors-anywhere.herokuapp.com/'
	// if you want remove prefix CORS url set value tobe ''
	corsURL: '<Your cors url>',

	// Optional default is 'Json'
	format: 'json'

  // More Optional Fetches API request
  options: {
		// `headers` are custom headers to be sent
		headers: {......}
	}
}

const msx = Musixmatch(init)

```
## Initinal Options
These are the available config options for making requests, for more information https://github.com/axios/axios#request-config

## Methods
For more information how to use Methods and Params with example... please refer to https://github.com/c0b41/musixmatch#methods

## Example

```js
import Musixmatch from 'musixmatch'

const msx = Musixmatch({apikey: '<Api Key>'})

msx.chartArtists({ country: 'us', page: 1, page_size: 3 }).then(function (data) {
	console.log(data.artist_list)
}).catch(function (err) {
	console.log(err.stack)
})

```
## License

[MIT License](./LICENSE)

Copyright (c) IMAN
Thanks to:
https://www.axfon.com
https://atel.us


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
