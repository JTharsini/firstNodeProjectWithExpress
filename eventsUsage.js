const EventEmitter = require('events'); // EventEmitter is a class
const emitter = new EventEmitter();

// on() or addListener() are exactly same
emitter.on('messageLogged', (eventArg) => {
    console.log('Listener called: ', eventArg);
});

// raise an event. if nowhere in the application registered a
// listener who is interested in this event
// then no changes
emitter.emit('messageLogged', {id: 1, url: 'http://'});// second argument
// is known as Event Argument.
// making a noise, produce - signalling as something has happened
