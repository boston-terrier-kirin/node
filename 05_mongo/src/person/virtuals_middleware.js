const mongoose = require('mongoose');
const Person = require('./personModel');

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/person');

  const person = new Person({
    firstName: 'Kirin',
    lastName: 'Matsumoto',
  });

  person.save();

  console.log(person.fullName);
}

main();
