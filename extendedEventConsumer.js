const Logger = require('./extendedEventEmitter');
const logger = new Logger();
logger.on('messageLogged', (eventArg) => {
    console.log('Listener called: ', eventArg);
})
logger.log('message');