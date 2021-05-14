const path = require('path');

console.log('__filename', __filename);
console.log('basename', path.basename(__filename));
console.log('dirname', path.dirname(__filename));
console.log('extname: ', path.extname(__filename));
console.log('parse: ', path.parse(__dirname));
console.log('join', path.join(__dirname, 'test', 'second.html'));
console.log('resolve', path.resolve(__dirname, './test', '/second.html'));