"use strict";

exports.renderIndex = (req, res) => {

    res.render("index", { radius: 2.5 });
};