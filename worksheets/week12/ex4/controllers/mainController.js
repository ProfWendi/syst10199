"use strict";
const employees = require("../models/employee.json");

exports.renderIndex = (req, res) => {
    res.render("index", {employees: employees});
};