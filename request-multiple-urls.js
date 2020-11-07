const https = require('https');

async function requestMultipleUrls (urls) {
  let data = [];
  await Promise.all(urls.map(async (url) => {
    const contents = await httpsGet(url);
    data.push(contents);
  }));
  return eval(data);
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
