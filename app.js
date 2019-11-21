
// add required packages
const express = require('express');
const path = require('path');

// add required data
const { projects } = require('./data/data.json');


// add app routes
const app = express();
const router = express.Router();

const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');
const projectRouter = require('./routes/project');

// set view engine to pug
app.set('view engine', 'pug');

// set static route to serve static files in public folder
app.use('/static', express.static(path.join(__dirname, 'public')));

// set page routes
app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/project', projectRouter);

// set "home" route
app.get('/', (req, res) => {
    res.locals.projects = projectData;
    res.render('index', {projects: res.locals.projects});
});

// set "about" route
app.get('/about', (req, res) => {
    res.render('about');
});

// set "project" routes
app.get('/projects/:id', (req, res) => {
    const query = req.params.id
    res.locals.project = projectData[query]
    res.render('project')
});

// add static css routes
app.use('/static/css', express.static('public'))

// add middleware for catching errors
app.use((req, res, next) => {
    const err = new Error('Uh-oh! Page not found!');
    err.status = 404;
    next('err');
});

app.use((err, req, res, next) => {
    res.locals.error = err
    res.status(err.status);
    console.log(err.message, err.status, err.stack);
    res.render('error')
});

// set listen on port 3000
app.listen(3000, () => {
    console.log("Port 3000 is working!")
});