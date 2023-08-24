"use strict";

const port = 3000,
  http = require("http"),
  // fs module is for working with the file system
  fs = require("fs"); 

http.createServer((req, res) => {
    
    // get the file name for the requested URL
    let viewUrl = `views${req.url}`;
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

        res.setHeader("Content-Type", "text/html");

        if (error) { // error finding/reading file
            res.statusCode = 404; // 404 = NOT FOUND
            res.write("<h1>File Not Found</h1>");
            console.log(error);  // for debugging

        } else {  // no errors, get the file
            res.statusCode = 200; // 200 = OK
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