const mongoose = require('mongoose');
const Product = require('./productModel');

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/products');

  const bike = new Product({
    name: 'Mountain Helmet',
    price: 599,
    categories: ['Bike', 'Safety'],
    qty: {
      online: 10,
      inStore: 5,
    },
  });

  bike.save();
}

main();
