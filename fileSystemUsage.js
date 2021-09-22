const fileSystem = require('fs');

// async and sync versions of methods are available.
// for back-end non-blocked async methods should be used.
const files = fileSystem.readdirSync('./');
console.log(files);

// need to pass an additional parameter which is a callback
// for async method. It will be invoked once
// results are ready
fileSystem.readdir('./', function(err, filesAsync){ // if use '$' instead './' error will be output
    if(err)
    {
        console.log('Error', err);
    }
    else
    {
        console.log('Result', filesAsync);
    }
});