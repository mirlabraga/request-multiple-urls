const https = require('https');
const { ValidationError } = require("./validation-error");

async function requestMultipleUrls (urls) {
  let data = [];
  await Promise.all(urls.map(async (url) => {
    const contents = await httpsGet(url);
    data.push(contents);
  }));
  return data;
}

const httpsGet = url => {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => resolve(body));
    }).on('error', reject);
  });
};

exports.requestMultipleUrls = requestMultipleUrls;
