const http = require("http"),
      fs = require("fs"),
      circle = require("./modules/circle.js");
      port = 3000;
      
      http.createServer( (req, res) => {
        res.setHeader("Content-Type", "text/html");
        
        if (req.url.indexOf("make") >= 0) {
            let urlObj = new URL(`https://${req.headers.host}${req.url}`);
            let radius = parseFloat(urlObj.searchParams.get("radius"));
 
            res.statusCode = 200;
        
            res.write(`<h1>Circle with radius ${radius}</h1>
                    <p>Circumference: ${circle.circumference(radius)}</p>
                    <p>Area: ${circle.area(radius)}</p>`);
            res.end();
        } else {
            fs.readFile("index.html", (error, data) =>{
                if (error) {
                    res.statusCode = 404;
                    res.write("<h1>File Not Found</h1>");
                    console.log(error);
                } else {
                    res.statusCode = 200;
                    res.write(data);
                    res.end();
                }
                res.end();
            });
        }
    }).listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
