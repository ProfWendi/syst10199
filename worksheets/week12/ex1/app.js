"use strict";

const express = require("express"),
    app = express(),
    mainController = require("./controllers/mainController");

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.get("/random/:max", mainController.renderIndex);

app.listen(app.get("port"), () => {
    console.log(`Server running on http://localhost:${app.get("port")}`);
});