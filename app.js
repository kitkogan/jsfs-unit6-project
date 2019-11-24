
// add required packages
const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const { projects } = require('./data/data.json');

const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');
const projectRouter = require('./routes/project');

// set view engine to pug
app.set('view engine', 'pug');

// set static route to serve static files in public folder
app.use('/static', express.static(path.join(__dirname, 'public')));

// set "home" route
app.use('/', indexRouter);


// set "about" route
app.use('/about', aboutRouter);

// set "project" routes
app.use('/projects', projectRouter);

// add middleware for catching errors
app.use((req, res, next) => {
    console.error("Uh-oh! Page not found");
    const err = new Error ('Not Found');
    err.status = 404;
    next(err);
});

app.use((req, res, next) => {
    const err = new Error ('Oops! An error occured');
    console.error("An Error Occured");
    err.status = 500;
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
});


// set listen on port 3000
app.listen(3000, () => {
    console.log('app is running on local host 3000')
});