module.exports.renderIndex = (req, res) => {
    res.render("index");
};

module.exports.renderResult = (req, res) => {
    res.render("result", { 
        username: req.body.username,
        year: req.body.year, 
        animal: req.body.animal
    });
}