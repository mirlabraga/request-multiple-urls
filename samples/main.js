const { requestMultipleUrls } = require("../request-multiple-urls");

const urls = [
  'htt',
  'https://ft-tech-test.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
  'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
  'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json'
];

requestMultipleUrls(urls).then(urlContent => {
  console.log(urlContent);
  // console.log(urlContent.success);
  // urlContent.sucess.forEach(element => {
  //   console.log(element);
  // });
})

//'https://ft-tech-test.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
