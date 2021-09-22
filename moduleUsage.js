const logger = require('./logger'); // require('./logger.js')
// if it's inside subfolder require('./subFolder/logger')
// if it's in prime folder require('../logger')

console.log(logger);
logger.log('JJ');

const logger2 = require('./logger'); // now it's a function. not a variable
logger2('JJ2');