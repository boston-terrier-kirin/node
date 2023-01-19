const mongoose = require('mongoose');
const Movie = require('./movieModel');

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/movies');

  {
    // https://mongoosejs.com/docs/promises.html
    // https://mongoosejs.com/docs/promises.html#should-you-use-exec-with-await
    const movies = await Movie.find({ year: 2000 }).exec();
    console.log(movies);
    console.log('-----');
  }

  {
    const movies = await Movie.find({
      title: { $in: ['Harry Potter', 'Amadeus'] },
    });

    console.log(movies);
  }
}

main();
