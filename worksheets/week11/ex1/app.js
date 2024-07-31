"use strict";
const routeResponseMap = {
    "/ex1": "index.html",
    "/ex1/contact": "contact.html",
    "/ex1/about": "about.html"
};

const port = 3000,
    http = require("http"),
    fs = require("fs");

http.createServer((req, res) => {

    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    const fileName = (routeResponseMap[req.url]) ? 
       routeResponseMap[req.url] : "error.html";
    
    fs.readFile(fileName, (error, data) => {

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

}).listen(port, () => {
    console.log(`server is listening for requests on port ${port}`);    
});
