const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  firstName: { type: String, required: true, maxLength: 20 },
  lastName: { type: String, required: true, maxLength: 20 },
});

// https://mongoosejs.com/docs/guide.html#virtuals
personSchema
  .virtual('fullName')
  .get(function () {
    return this.firstName + ' ' + this.lastName;
  })
  .set(function (v) {
    this.firstName = v.substr(0, v.indexOf(' '));
    this.lastName = v.substr(v.indexOf(' ') + 1);
  });

// https://mongoosejs.com/docs/middleware.html
personSchema.pre('save', async function () {
  console.log('About to save');
});

personSchema.post('save', async function () {
  console.log('Just saved');
});

module.exports = mongoose.model('Person', personSchema);
