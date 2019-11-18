//req express, data.json, path module for absolute path, 
//set up middleware: set view engine to  "pug", use a static route and express.static method to serve static files in public folder
//set routes: "index" route (/) to render "Home" page w locals set to data.rojects
    //an "about" route (/about) to render "About" page
    //dynamic "project" routes (/rpoject or /projects) based on id of project that renders a customized version of Pug project template to show off each proj
        //meaning: adding data, or "locals" as an object that contains data to be passed to Pug template
//start server. should listn on port 3000 and log string to console that says which port app is listening to