"use strict";

const express = require("express"),
    app = express(),
    mainController = require("./controllers/mainController"),
    path = require("path");

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use((req, res, next) => {
    console.log(req.url);
    next();
});
app.get("/employees", mainController.renderIndex);

app.use(express.static(path.join(__dirname, "public")));

app.listen(app.get("port"), () => {
    console.log(`Server running on http://localhost:${app.get("port")}`);
});