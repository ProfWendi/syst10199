"use strict";
// app.js 


const port = 3000,
    http = require("http"),
    // a node.js module that allows you to work with the file system
    fs = require("fs"),
    // a third party module https://www.npmjs.com/package/chinese-year
    chineseYear = require("chinese-year");

    
http.createServer((req, res) => {
    // response will be in text/html
    res.setHeader("Content-Type", "text/html");
    
    // if the request contains "getyear", this request comes 
    // from the form submission (<form action="/getyear">...</form>)
    if (req.url.indexOf("getyear") >= 0) {

        // build a URL object with the app's host name and 
        // the request url
        const urlObj = new URL(`https://${req.headers.host}${req.url}`);

        // get the parameter for the year input
        const queryString = urlObj.searchParams;
        let year = queryString.get("year");

        // if we have a valid year, use it, otherwise use current year 
        year = (year) ? year : new Date().getFullYear();

        // get the animal for the year
        const animal = chineseYear.getAnimal(year);    
        // for debugging
        console.log("url: " + urlObj); 
        console.log("query: " + queryString);
        console.log("year: " + year);

        res.statusCode = 200; // 200 = OK
        res.write(`<h1>Chinese Year<h1><p>${year} is year of the ${animal}</p>`);
        res.end();

    } else {  // all other requests load the index page

        fs.readFile("index.html", (error, data) => {

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
    }
}).listen(port);

console.log(`The server has started and is listening `
    + ` on port number: ${port}`);


