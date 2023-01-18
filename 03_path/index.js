const path = require('path');

console.log(__filename);
console.log(__dirname);
console.log('-----');

console.log(path.basename(__filename));
console.log(path.basename(__dirname));
console.log('-----');

console.log(path.extname(__filename));
console.log(path.extname(__dirname));
console.log('-----');

console.log(path.isAbsolute(__filename));
console.log(path.isAbsolute('./data.json'));
console.log('-----');

console.log(path.join('app', 'data', 'data.json'));
console.log(path.join(__dirname, '../data.json'));
console.log('-----');

// indexはTopにあるので、この2つは同じ
console.log(path.resolve('data', 'data.json'));
console.log(path.resolve(__dirname, 'data', 'data.json'));

// これでdata/data.jsonが読める
const data = require(path.resolve('data', 'data.json'));
console.log(data);
console.log(data.users[0].name);
