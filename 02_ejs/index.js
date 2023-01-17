const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/random', (req, res) => {
  const rand = Math.floor(Math.random() * 10) + 1;

  res.render('random', {
    rand,
  });
});

app.get('/nba', (req, res) => {
  const titleList = [
    '[Inside The NBA] Kenny: “[The Knicks] are probably another piece away from trying to be an elite team.”',
    'Ja Morant said "We\'re fine in the West."',
    '[GAME THREAD] Golden State Warriors (21-22) @ Washington Wizards (18-25)',
  ];

  res.render('nba', {
    titleList,
  });
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
