const Joi = require('joi'); // returned object is a class
const express = require('express');
const app = express();

app.use(express.json());// returned middleware will be used in request pipeline

const courses = [
    { id: 1, name: 'JS'}, { id: 2, name: 'NodeJS'}, { id: 3, name: 'TS'},
    { id: 4, name: 'Angular'}
];

// no if blocks
// can move all related routes to separate files
app.get('/', (req, res)=>{
    //http://localhost:3000/
    return res.send('Hello World!!!');
});// '/' represents the root of the function

app.get('/api/courses', (req, res)=>{
    //http://localhost:3000/api/courses
    return res.send(courses);
});

// one route parameter in request
app.get('/api/courses/:id', (req, res)=>{
    //http://localhost:3000/api/courses/1
    const idOfCourse = parseInt(req.params.id);
    const course = courses.find(c => c.id === idOfCourse);
    if(!course) // 404
    {
        return res.status(404).send(`Course for id = ${idOfCourse} not found`);
    }
    else{
        return res.send(course);
    }
});

// multiple route parameters in request
app.get('/api/blogposts/:year/:month', (req, res)=>{
    http://localhost:3000/api/blogposts/1/12
    return res.send(req.params);
});

// query parameter in request
app.get('/api/queryparam/:id/', (req, res)=>{
    //http://localhost:3000/api/queryparam/1?sortBy=Id
    return res.send(req.query);
});

app.post('/api/courses', (req, res)=>{
    //http://localhost:3000/api/courses
    if(!req.body.name || req.body.name.length < 3)
    {
        // 400 Bad request
        return res.status(400).send('Name is required and should be with with 3 chars');
    }

    const course = {
        id: courses.length + 1, // this will be assigned by db if it's connected to
        name: req.body.name // to make it work, need to enable json parsing in the top
    };
    courses.push(course);
    return res.send(course);
});

app.post('/api/coursesWithJoi', (req, res)=>{
    //http://localhost:3000/api/coursesWithJoi
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });

    const {error} = validateCourse(schema, req.body);//result.error (object destructuring)
    if(error)
    {
        return res.status(400).send(error.details[0].message);
    }

    const course = {
        id: courses.length + 1, // this will be assigned by db if it's connected to
        name: req.body.name // to make it work, need to enable json parsing in the top
    };
    courses.push(course);
    return res.send(course);
});

app.put('/api/coursesWithJoi/:id', (req, res)=>{
    //http://localhost:3000/api/coursesWithJoi/1
    const schema = Joi.object({
        id: Joi.number().required(),
        name: Joi.string().min(3).required()
    });
    const error = validateCourse(schema, req.body).error;
    if(error)
    {
        return res.status(400).send(error.details[0].message);
    }
    const idOfCourse = parseInt(req.params.id);
    const course = courses.find(c => c.id === idOfCourse);
    if(!course) // 404
    {
        return res.status(404).send(`Course for id = ${idOfCourse} not found`);
    }
    else
    {
        course.name = req.body.name;
        return res.send(course);
    }
});

app.delete('/api/coursesWithJoi/:id', (req, res)=>{
    //http://localhost:3000/api/coursesWithJoi/1
    const schema = Joi.object({
        id: Joi.number().required()
    });
    const error = validateCourse(schema, req.body).error;
    if(error)
    {
        return res.status(400).send(error.details[0].message);
    }
    const idOfCourse = parseInt(req.params.id);
    const course = courses.find(c => c.id === idOfCourse);
    if(!course) // 404
    {
        return res.status(404).send(`Course for id = ${idOfCourse} not found`);
    }
    else
    {
        const indexOfCourse = courses.indexOf(course);
        courses.splice(indexOfCourse, 1);
        return res.send(course);
    }
});

// proper way to use port
// const myPort = process.env.PORT || 3000; // env : environment variables
// app.listen(myPort, ()=> console.log(`listen to the port ${myPort}}`));
const myPort = 3000;
app.listen(myPort, ()=> console.log(`listen to the port ${myPort}}`));

function validateCourse(schema, course)
{
    return schema.validate(course);
}