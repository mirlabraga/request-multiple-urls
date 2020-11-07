const { requestMultipleUrls } = require("../request-multiple-urls");


test('the fetch multiples urls request', () => {

  const urls = [
    'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
    'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
    'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json'
  ];

  return requestMultipleUrls(urls).then(data => {
    expect(data.length).toBe(3);
  });
});

test('the fetch fails with an error', () => {

  const urls = [
    'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
    'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
    'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json'
  ];

  requestMultipleUrls(urls).catch(e => expect(e).toMatch('error'));
})