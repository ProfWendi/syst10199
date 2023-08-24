"use strict";

const port = 3000,
  http = require("http"),
  // fs module is for working with the file system
  fs = require("fs"); 

// Create a function that accepts a URL pattern and 
// returns an HTML file name in the /views directory.
// Note that if you've been looking at req.url in the 
// previous examples, you'll notice it always starts with "/"
// so 'views${url}.html' will be views/whatever.html
const getViewUrl = (url) => {                 
    return `views${url}.html`;
};

// a map of the different HTML files we 
// want to map to
/*const routeMap = {                                      
  "/": "views/index.html", // index page 
  "/page2": "views/page2.html", // page 2
};*/

http.createServer((req, res) => {
    
    // get the file name for the requested URL
    let viewUrl = getViewUrl(req.url);
    // for debugging:
    console.log(viewUrl);

    // read the html file that was requested
    // readFile() accepts 2 params:
    // viewURL: the file you want to read
    // optional options (none included in this example)
    // callback: the function to execute when the file is read 
    //   callback has 2 params:
    //   - error = any errors that were returned by readFile()
    //   - data = the contents of the file 
    // readFile() returns any errors that occurred (error param of callback)
    fs.readFile(viewUrl, (error, data) => {

        if (error) { // error finding/reading file
            res.writeHead(404);  // 404 = NOT FOUND
            res.write("<h1>File Not Found</h1>");
            console.log(error);  // for debugging

        } else {  // no errors, get the file
            res.writeHead(200, {  // 200 OK, returning text and HTML
                "Content-Type": "text/html"
            });
            // data contains the file contents
            // write the file's contents to the response body
            res.write(data);
        }
        // all done either way, send the response
        res.end();
    });
}).listen(port);

console.log(`The server has started and is listening `
    + ` on port number: ${port}`);