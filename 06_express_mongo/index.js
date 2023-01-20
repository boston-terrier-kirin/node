const path = require('path');
const express = require('express');
const connectDB = require('./config/db');
const methodOverride = require('method-override');
const Product = require('./models/product');

connectDB();

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get('/products', async (req, res) => {
  const products = await Product.find({});

  res.render('products/index', { products });
});

app.get('/products/new', (req, res) => {
  res.render('products/new');
});

app.post('/products', async (req, res) => {
  const { name, price, category } = req.body;
  const newProduct = new Product({ name, price, category });

  await newProduct.save();

  res.redirect('/products');
});

app.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);

  res.render('products/show', { product });
});

app.get('/products/:id/edit', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);

  res.render('products/edit', { product });
});

app.put('/products/:id', async (req, res) => {
  const { id } = req.params;
  const { name, price, category } = req.body;

  await Product.findByIdAndUpdate(
    id,
    { name, price, category },
    { runValidators: true }
  );

  res.redirect('/products');
});

app.delete('/product/:id', async (req, res) => {
  const { id } = req.params;

  await Product.findByIdAndDelete(id);

  res.redirect('/products');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
