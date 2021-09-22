const express = require('express');
const app = express();

// no if blocks
// can move all related routes to separate files
app.get('/', (req, res)=>{
    //http://localhost:3000/
    res.send('Hello World!!!');
});// '/' represents the root of the function

app.get('/api/courses', (req, res)=>{
    //http://localhost:3000/api/courses
    res.send(['JS', 'NodeJS', 'TS', 'Angular']);
});

// one route parameter in request
app.get('/api/courses/:id', (req, res)=>{
    //http://localhost:3000/api/courses/1
    res.send(req.params.id);
});

// multiple route parameters in request
app.get('/api/blogposts/:year/:month', (req, res)=>{
    http://localhost:3000/api/blogposts/1/12
    res.send(req.params);
});

// query parameter in request
app.get('/api/queryparam/:id/', (req, res)=>{
    //http://localhost:3000/api/queryparam/1?sortBy=Id
    res.send(req.query);
});

// proper way to use port
// const myPort = process.env.PORT || 3000; // env : environment variables
// app.listen(myPort, ()=> console.log(`listen to the port ${myPort}}`));
const myPort = 3000;
app.listen(myPort, ()=> console.log(`listen to the port ${myPort}}`));