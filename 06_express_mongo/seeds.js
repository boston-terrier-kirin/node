const connectDB = require('./config/db');
const Product = require('./models/product');

async function main() {
  await connectDB();

  const seedProducts = [
    {
      name: 'Ruby Grapefruit',
      price: 1.99,
      category: 'fruit',
    },
    {
      name: 'Fairy Eggplant',
      price: 1.0,
      category: 'vegetable',
    },
    {
      name: 'Organic Goddess Melon',
      price: 4.99,
      category: 'fruit',
    },
    {
      name: 'Organic Mini Seedless Watermelon',
      price: 3.99,
      category: 'fruit',
    },
    {
      name: 'Organic Celery',
      price: 1.5,
      category: 'vegetable',
    },
    {
      name: 'Chocolate Whole Milk',
      price: 2.69,
      category: 'dairy',
    },
  ];

  await Product.insertMany(seedProducts);
}

main();
