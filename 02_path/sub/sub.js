const path = require('path');

// path.resolve()は、nodeコマンドで直接実行したスクリプトから見たパスになる。
// subから/dataを見たい場合はこうすればOK。
console.log(path.resolve('data', 'data.json'));

// これだと、sub/data/data.json になってしまう。
console.log(path.resolve(__dirname, 'data', 'data.json'));

// これだと、sub/data/data.json になってしまう。
console.log(path.join(__dirname, 'data', 'data.json'));

// これでdata/data.jsonが読める
const data = require(path.resolve('data', 'data.json'));
console.log(data);
console.log(data.users[0].name);
