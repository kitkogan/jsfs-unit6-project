
// add required packages
const express = require('express');
const path = require('path');

// add required data
const data = require('./data/data.json').data;
const projectData = data.projects

// app route
const app = express();

// set view engine to pug


app.set('view engine', 'pug');

// set static route to serve static files in public folder
app.use('/static', express.static(path.join(__dirname, 'public')));

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
    const err = new Error('Uh-oh! Page not found!')
    res.locals.error = err
    err.status = 404;
    res.render('error')
});

app.use((err, req, res, next) => {
    res.locals.error = err
    console.log(`Sorry, we seem to have encountered an error!: ${err.status}`);
    res.render('error')
});

// set listen on port 3000
app.listen(3000, () => {
    console.log("Port 3000 is working!")
});