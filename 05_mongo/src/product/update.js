const mongoose = require('mongoose');
const Product = require('./productModel');

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/products');

  // updateの時は、runValidatorsを指定する必要あり。
  const res = await Product.findOneAndUpdate(
    { name: 'Mountain Bike' },
    { price: -199.99 },
    { runValidators: true }
  );
  console.log(res);
}

main();
