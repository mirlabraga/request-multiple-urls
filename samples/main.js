const { requestMultipleUrls } = require("../request-multiple-urls");

const urls = [
  'htt',
  'https://ft-tech-test.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
  'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
  'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json'
];

requestMultipleUrls(urls).then(urlContent => {
  console.log(JSON.stringify(urlContent));
  urlContent.success.forEach(element => {
    console.log(JSON.stringify(element.data, 2, null));
  });

  urlContent.error.forEach(element => {
    console.log(JSON.stringify(element, 2, null));
  })
})
