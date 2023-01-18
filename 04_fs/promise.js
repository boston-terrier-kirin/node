const fs = require('fs').promises;

console.log('----- first');

fs.readFile('file.txt', 'utf-8')
  .then((data) => {
    console.log('1', data);
  })
  .catch((err) => {
    console.log(err);
  });

async function read() {
  const data = await fs.readFile('file.txt', 'utf-8');
  console.log('2', data);
}

console.log('----- second');

read();

console.log('----- third');
