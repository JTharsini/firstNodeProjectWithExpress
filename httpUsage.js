const http = require('http');
const server = http.createServer((req, res) =>
{
    /*
        Add more things here will make code more complex.
        Express is the framework written on top of
        http module to make this more cleaner
    */
    //http://localhost:3000/
    if(req.url === '/')
    {
        res.write('Hello World');
        res.end();
    }
    //http://localhost:3000/api/courses
    if(req.url === '/api/courses')
    {
        res.write(JSON.stringify(['JS', 'TS', 'Angular']));
        res.end();
    }
}); 

// this server is an event emitter
server.on('connection', (socket) => {
    // if in browser, localhost:3000 it will
    // be invoked.
    // not a common scenario
    console.log("New connection...");
});
server.listen(3000);

console.log('Listening on port 3000...');