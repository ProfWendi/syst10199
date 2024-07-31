"use strict";
"use strict";
const port = 3000,
      http = require("http");

http.createServer( (req, res) => {
    res.setHeader("Content-Type", "text/html");
    
    let output = "";
    if (req.url.indexOf("myname") >= 0) {
        res.statusCode = 200;
        output = "<h1>Your Name Here</h1>";
    } else {
        res.statusCode = 404;
        output = "<h1>Sorry, not found.</h1>";
    }
    res.end(output);
    
}).listen(port, () => {
    console.log(`Server running on port ${port}`);
});