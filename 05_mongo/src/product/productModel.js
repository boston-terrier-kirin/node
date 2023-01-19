const mongoose = require('mongoose');

// https://mongoosejs.com/docs/schematypes.html#schematype-options
const productSchema = new mongoose.Schema({
  name: { type: String, required: true, maxLength: 20 },
  price: {
    type: Number,
    min: [0, '金額は0より大きい数値を入力してください。'],
  },
  onSale: { type: Boolean, default: false },
  categories: { type: [String], default: ['Cycling'] },
  qty: {
    online: {
      type: Number,
      default: 0,
    },
    inStore: {
      type: Number,
      default: 0,
    },
  },
});

productSchema.methods.greet = function () {
  console.log(this.name, this.price);
};

productSchema.methods.toggleOnSale = function () {
  this.onSale = !this.onSale;
  this.save();
};

productSchema.statics.findAll = async function () {
  return await this.find({});
};

module.exports = mongoose.model('Product', productSchema);
