const mongoose = require('mongoose');
const Movie = require('./movieModel');

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/movies');

  {
    const res = await Movie.updateOne({ title: 'Amadeus' }, { year: 1984 });
    console.log(res);
    console.log('-----');
  }

  {
    const res = await Movie.updateMany(
      {
        title: { $in: ['Harry Potter', 'Amadeus'] },
      },
      {
        score: 10,
      }
    );
    console.log(res);
    console.log('-----');
  }

  {
    // 更新したobject(値は更新前)が戻ってくる
    const res = await Movie.findOneAndUpdate({ title: 'Alian' }, { score: 4 });
    console.log(res);
    console.log('-----');
  }

  {
    // なければinsertしてくれる
    const res = await Movie.findOneAndUpdate(
      { title: 'The Iron Giant2' },
      { score: 7 },
      { upsert: true }
    );
    console.log(res);
  }
}

main();
