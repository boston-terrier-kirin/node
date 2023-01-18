const fs = require('fs');

console.log('----- first');

const fileContents = fs.readFileSync('./file.txt', 'utf-8');
console.log(fileContents);

console.log('----- sedond');

fs.readFile('./file.txt', 'utf-8', (err, data) => {
  console.log(data);
});

console.log('----- third');

fs.writeFile('./file.txt', 'きりん', { flag: 'a' }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('OK');
  }
});

console.log('----- fourth');
