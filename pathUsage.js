const path = require('path'); // since it's a built-in module, no directory symbol
var pathObj = path.parse(__filename);
console.log(pathObj);