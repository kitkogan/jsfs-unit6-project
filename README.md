# static_node_express_site
 Create a website using static node.js and express

 This assignment asked students to create a portfolio website showcasing completed projects using static node.js and express.

 The instructions included denstrating knowledge of command line/git, npm, pug templates, setting up a server and using the terminal console to monitor connectons and catch errors, creating and navigating through directories, and generally building on the foundational concepts we have been practicing through the course so far.

 Additionally I chose to pursue the 'exceeds' options for extra credit in this project as well.
 These criteria include:

 |1) setting up the package.json to start when 'npm start' is running,

 |2) writing error handling middleware to render a pug template by adding an error.pug file to the views folder and including the correct code to display the error messages supplied by error.pug to the browser when a user attempts to access a nonexistent route.

 |3) customizing the css from selecting at least 3 elements from a supplied list.
    I accomplished this by:

        |1) changing the colors of the self-description text section in the sidebar, the hover color of the "Learn More" link text, the hover color for the buttons, and the main body background color. 
        |2) changing the style of the box shadows for the larger images within each individual project page
        |3) adding transition effects to expand the buttons (so they shift color AND grow in size on hover at specified size and duration.) I also implemented this same growth effect for the square shaped images in the main gallery. This also applied to my profile pic which links to a resume page I had previously made for a non-treehouse project. I didn't want the growth effect to apply to the bigger project images so I also added the correct css to stop those from inheriting it.