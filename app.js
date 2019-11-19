//set routes: "index" route (/) to render "Home" page w locals set to data.rojects
    //an "about" route (/about) to render "About" page
    //dynamic "project" routes (/rpoject or /projects) based on id of project that renders a customized version of Pug project template to show off each proj
        //meaning: adding data, or "locals" as an object that contains data to be passed to Pug template
//start server. should listn on port 3000 and log string to console that says which port app is listening to

// add required packages
const express = require('express');
const path = require('path');

// add required data
const data = require('./data/data.json').data;
const projectData = data.projects

// app route
const app = express();

// set listen on port 3000
app.listen(3000);

// set view engine to pug
app.set('view engine', 'pug');

// set static route to serve static files in public folder
app.use('/static', express.static('public'));

// set home route
app.get('/', (req, res) => {
    res.locals.projects = projectData;
    res.render('index', {projects: res.locals.projects});

    console.log("Port 3000 is working!")
});


