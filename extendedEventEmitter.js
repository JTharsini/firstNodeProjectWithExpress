const EventEmitter = require('events'); // EventEmitter is a class

class Logger extends EventEmitter  // Pascal case convention
{
    log(message)
    {
        // send an HTTP request
        console.log(message);
        this.emit('messageLogged', {id: 1, url: 'http://'});// second argument
    }
}
module.exports = Logger;