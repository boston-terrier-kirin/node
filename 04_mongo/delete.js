const mongoose = require('mongoose');
const Movie = require('./movieModel');

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/movies');

  {
    // [MONGODB DRIVER] Warning: collection.remove is deprecated. Use deleteOne, deleteMany, or bulkWrite instead.
    const res = await Movie.remove({ title: 'Harry Potter' });
    console.log(res);
  }

  {
    const res = await Movie.deleteMany({ year: { $gte: 1990 } });
    console.log(res);
  }

  {
    const res = await Movie.findOneAndDelete({ title: 'Alian' });
    console.log(res);
  }
}

main();
