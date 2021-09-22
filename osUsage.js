const os = require('os');
var totalMem = os.totalmem();
console.log(totalMem);

var freeMem = os.freemem();
console.log('Free memory: ' + freeMem);

// Template string
// ES6 / ES2015 : ECMAScript 6
console.log(`Free memory: ${freeMem}`);