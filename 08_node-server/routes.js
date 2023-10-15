const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<header><title>Enter a Message</title></header>');
    res.write(
      `
            <body>
              <form action="/message" method="POST">
                  <input type="text" name="messsage" />
                  <button type="submit">Send</button>
              </form>
            </body>
            `
    );
    res.write('</html>');
    return res.end();
  }

  if (url === '/message' && method === 'POST') {
    const body = [];

    req.on('data', (chunk) => {
      body.push(chunk);
    });

    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];

      fs.writeFile('message.txt', message, (err) => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<header><title>My First Page</title></header>');
  res.write('<body><h1>Hello World</h1></body>');
  res.write('</html>');
  res.end();
};

module.exports = requestHandler;
