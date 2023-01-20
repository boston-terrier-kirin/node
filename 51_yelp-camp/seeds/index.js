const { connectDB, closeDB } = require('../config/db');
const cities = require('./cities');
const { descriptors, places } = require('./seedHelper');
const Campground = require('../models/campground');

seedDB();

async function seedDB() {
  await connectDB();
  await Campground.deleteMany({});

  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const camp = new Campground({
      title: `${sample(descriptors)} ${sample(places)}`,
      location: `${cities[random1000].city} ${cities[random1000].state}`,
    });
    await camp.save();
  }

  closeDB();
}

function sample(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
