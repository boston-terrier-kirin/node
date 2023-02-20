const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('tiny'));

app.use((req, res, next) => {
  console.log('[1]MIDDLEWARE!!');
  next();
  console.log('[4]MIDDLEWARE!!');
});

app.use((req, res, next) => {
  console.log('[2]MIDDLEWARE!!');
  next();
  console.log('[3]MIDDLEWARE!!');
});

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/dogs', (req, res) => {
  res.send('WOOF');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
