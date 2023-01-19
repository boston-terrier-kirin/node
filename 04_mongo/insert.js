const mongoose = require('mongoose');
const Movie = require('./movieModel');

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/movies');

  // save
  const amadeus = new Movie({
    title: 'Amadeus',
    year: 1986,
    score: 9.2,
    rating: 'R',
  });
  await amadeus.save();

  // insertMany
  await Movie.insertMany([
    {
      title: 'Alian',
      year: 1979,
      score: 8.1,
      rating: 'R',
    },
    {
      title: 'Harry Potter',
      year: 2000,
      score: 9.7,
      rating: 'R',
    },
  ]);
}

main();
