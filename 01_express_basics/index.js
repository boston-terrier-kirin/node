const express = require('express');

const app = express();

// 一番単純なmiddleware。
app.use((req, res, next) => {
  console.log('WE GOT A NEW REQUEST');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/cats', (req, res) => {
  res.send('MEOW');
});

// query string
app.get('/dogs', (req, res) => {
  console.log(req.query);
  res.send('WOOF');
});

// path parameter
app.get('/dogs/:breed/:id', (req, res) => {
  const { breed, id } = req.params;
  res.send(`WOOF - ${breed} ${id}`);
});

app.get('*', (req, res) => {
  res.status(404).send('404');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
