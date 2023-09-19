"use strict";
const express = require("express"),
    app = express(),
    homeController = require("./controllers/homeController");

// set the port and the template engine
app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

// get requests to index
app.get("/mvc_model/index", homeController.renderIndex);

// all other requests probably have form data
app.use(
    express.urlencoded({ extended: false })
);

// all requests to /circle
app.use("/mvc_model/circle", (req, res, next) => {
    homeController.getCircle(req, res);
    next();
});

// post requests to circle
app.post("/mvc_model/circle", homeController.renderResult);

app.listen(app.get("port"), () => {
    console.log(`Server running on http://localhost${app.get("port")}`);
});

