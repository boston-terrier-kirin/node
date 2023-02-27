const http = require('http');
const fs = require('fs');

var url = require('url');
var querystring = require('querystring');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

  if (req.method === 'GET') {
    const urlElements = url.parse(req.url, true);
    const q = urlElements.query;

    console.log(q.aaa);

    const html = fs.readFileSync('./upload.html');
    res.end(html);
  }

  if (req.method === 'POST') {
    let postData = '';

    req
      .on('data', function (chunk) {
        postData += chunk;
      })
      .on('end', function () {
        const q = querystring.parse(postData);
        console.log(q);

        res.end('あなたが送信したのは、' + postData);
      });
  }
});

server.listen(5000, () => {
  console.log(`Server running on port 5000`);
});
