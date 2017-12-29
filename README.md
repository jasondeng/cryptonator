cryptonator
=============

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/cryptonator.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/cryptonator
[travis-image]: https://img.shields.io/travis/jasonCodeng/cryptonator.svg?style=flat-square
[travis-url]: https://travis-ci.org/jasonCodeng/cryptonator
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

[Cryptonator](https://www.cryptonator.com/api/) JavaScript API Wrapper

Install
-------

    npm install --save cryptonator


Usage
-----

**Note:** cryptonator depends on [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch) being defined globally.

- If you are using this in electron, it should work without any configuration.
- If you are using this in Node.js, you will need to use [`node-fetch`](https://www.npmjs.com/package/node-fetch).

  **Example:**
  ```js
  global.fetch = require('node-fetch')
  const cryptonator = require('cryptonator')
  ```

### Methods

### `simpleTicker()`

Returns actual volume-weighted price, total 24h volume and the price change.

`simpleTicker(cc)`

- `cc` (String) Currency Code

```js
cryptonator.simpleTicker('btc-usd')
.then(data => {
  console.log(data)

  // -> { ticker:
  //      { base: 'BTC',
  //        target: 'USD',
  //        price: '15000.90635723',
  //        volume: '39726.75805209',
  //        change: '285.53675830'
  //      }
  //      ... } 

})
.catch(console.error)

```

Replace btc-usd with the currency codes you need. Please refer to the [actual list of supported currencies](https://www.cryptonator.com/api/currencies). Volume is displayed only for the cryptocurrencies that are actually traded on online exchanges.

### `completeTicker()`

Returns actual volume-weighted price, total 24h volume, rate change as well as prices and volumes across all connected exchanges.

`completeTicker(cc)`

- `cc` (String) Currency Code

```js
cryptonator.completeTicker('btc-usd')
.then(data => {
  console.log(data)

  // -> { ticker:
  //      { base: 'BTC',
  //        target: 'USD',
  //        price: '15000.90635723',
  //        volume: '39726.75805209',
  //        change: '285.53675830'
  //      }
  //      ... } 

})
.catch(console.error)

```

Replace btc-usd with the currency codes you need. Please refer to the [actual list of supported currencies](https://www.cryptonator.com/api/currencies). Volume is displayed only for the cryptocurrencies that are actually traded on online exchanges.

## License

[MIT](LICENSE.md)
