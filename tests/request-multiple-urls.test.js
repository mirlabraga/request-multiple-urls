const { requestMultipleUrls } = require("../request-multiple-urls");
const nock = require('nock');

describe('the fetch multiples urls request', () => {

  nock('https://ft-tech-test-example.s3-eu-west-1.amazonaws.com')
    .get('/ftse-fsi.json')
    .reply(200, {
      "data": {
        "items": [{
          "symbolInput": "MTSE:FSI",
          "basic": {
            "symbol": "MTSE:FSI",
            "name": "MTSE 100 Index",
            "exchange": "FTSE International",
            "exhangeCode": "FSI",
            "bridgeExchangeCode": "GBFT",
            "currency": "GBP"
          },
          "quote": {
            "lastPrice": 7259.31,
            "openPrice": 7292.76,
            "high": 7335.55,
            "low": 7258.83,
            "previousClosePrice": 7292.76,
            "change1Day": -33.44999999999982,
            "change1DayPercent": -0.45867408224046613,
            "change1Week": -100.06999999999971,
            "change1WeekPercent": -1.359761284238614,
            "timeStamp": "2019-11-15T10:53:16",
            "volume": 165239344
          }
        }]
      },
      "timeGenerated": "2019-11-15T11:08:17"
    })

  nock('https://ft-tech-test-example.s3-eu-west-1.amazonaws.com')
    .get('/gbp-hkd.json')
    .reply(200, {
      "data": {
        "items": [{
          "symbolInput": "F2JMTSE:FSI",
          "basic": {
            "symbol": "F2JMTSE:FSI",
            "name": "F2JMTSE 100 Index",
            "exchange": "FTSE International",
            "exhangeCode": "FSI",
            "bridgeExchangeCode": "GBFT",
            "currency": "GBP"
          },
          "quote": {
            "lastPrice": 7259.31,
            "openPrice": 7292.76,
            "high": 7335.55,
            "low": 7258.83,
            "previousClosePrice": 7292.76,
            "change1Day": -33.44999999999982,
            "change1DayPercent": -0.45867408224046613,
            "change1Week": -100.06999999999971,
            "change1WeekPercent": -1.359761284238614,
            "timeStamp": "2019-11-15T10:53:16",
            "volume": 165239344
          }
        }]
      },
      "timeGenerated": "2019-11-15T11:08:17"
    })

  nock('htt')
    .get('/')
    .reply(200, { "error": [{ "data": null, "error": "Invalid URL: htt", "url": "htt" }], "success": [] })

  test('successufull request with valid URL\'s', () => {
    const urls = [
      'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
      'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json'
    ];

    requestMultipleUrls(urls).then(result => {
      expect(result.success.length).toBe(2);
      expect(result.success[0].data.items[0].symbolInput).toBe("MTSE:FSI");
      expect(result.success[1].data.items[0].symbolInput).toBe("F2JMTSE:FSI");
    });
  });

  test('fail request with invalid URL\'s', () => {

    const urls = [
      'htt'
    ];

    requestMultipleUrls(urls).then(result => {

      const resultExpect = { "error": [{ "data": null, "error": "Invalid URL: htt", "url": "htt" }], "success": [] };

      expect(result).toStrictEqual(resultExpect);
      expect(result.success.length).toBe(0);
      expect(result.success).toStrictEqual(resultExpect.success);
      expect(result.error.length).toBe(1);
      expect(result.error).toStrictEqual(resultExpect.error);
    });
  })
})
