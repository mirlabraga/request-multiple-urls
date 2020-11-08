# request-multiple-urls

Request Multiple URL's is responsible for doing the fetch of URL and response with data JSON data.

## Development Requirements

- node >= v12 [![node](https://img.shields.io/badge/node-v12-blue.svg?cacheSeconds=2592000)](https://nodejs.org/en/download/)
- npm >= v6 [![npm](https://img.shields.io/badge/npm-v6.3.0-blue)](https://www.npmjs.com/get-npm)


## Installation

Use the package manager [npm](https://www.npmjs.com/) to install request-multiple-urls.

```bash
npm install --save request-multiple-urls
```

## Usage

```javascript
const { requestMultipleUrls } = require("../request-multiple-urls");

requestMultipleUrls(urls).then(urlContent => {
  //sucess requests
  urlContent.success.forEach(element => {
    ...
  });

  //error requests
  urlContent.error.forEach(element => {
    ...
  })
})

```

## Response example

```JSON
{
  success: [
    {
      data: [Object],
      timeGenerated: '2019-11-15T11:07:58',
      url: 'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json'
    },
    {
      data: [Object],
      timeGenerated: '2019-11-15T11:07:37',
      url: 'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json'
    }
  ],
  error: [
    { data: null, url: 'htt', error: 'Invalid URL: htt' },
    {
      data: null,
      url: 'https://ft-tech-test.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
      error: 'Unexpected token < in JSON at position 0'
    }
  ]
}
```

## Examples

To view the example, examples unzip the project and install the dependencies

```bash
$ unzip request-multiple-urls.zip
$ cd request-multiple-urls
$ npm install
$ node samples/main.js
```

## Tests

  To run the test suite, first, install the dependencies, then run `npm run test`:

```bash
$ npm install
$ npm run test
```

## Contributing
The contribuinte are welcome. Feel free to open pull requests.

Please make certain to update the tests as necessary.

## License
[MIT](https://choosealicense.com/licenses/mit/)
