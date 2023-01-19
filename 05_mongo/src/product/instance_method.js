const mongoose = require('mongoose');
const Product = require('./productModel');

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/products');

  const product = await Product.findOne({ name: 'Mountain Bike' });
  product.greet();
  product.toggleOnSale();
}

main();
