const mongoose = require('mongoose');
const Product = require('./productModel');

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/products');

  const products = await Product.findAll();
  console.log(products);
}

main();
