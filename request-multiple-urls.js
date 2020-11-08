const https = require('https');

async function requestMultipleUrls (urls) {
  let data = new Object();
  data.success = [];
  data.error = [];

  const promises = urls.map(async (url) => {
    try {
      const contents = await httpsGet(url);
      return {
        ...JSON.parse(contents),
        url: url
      }
    } catch (error) {
      return {
        data: null,
        url: url,
        error: error.message
      }
    }
  });

  const results = await Promise.all(promises);

  data.success = results.filter(result => result.data !== null);
  data.error = results.filter(result => result.data === null);
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
