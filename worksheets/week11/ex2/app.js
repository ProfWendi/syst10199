"use strict";

const express = require("express"),
      app  = express();
app.set("port", process.env.PORT || 3000);

app.use((req, res, next) => {
    console.log(`Request made: ${req.method} ${req.url}`);
    next();
});

app.use(express.urlencoded({extended: false}));

app.get("/exercise", (req, res) => {
    if (req.query.amount && req.query.tip) {
        const amount = parseFloat(req.query.amount);
        const tip = parseFloat(req.query.tip);
        let tipPercent = amount * tip / 100;
        res.send(`<h1>Tip Calculator</h1><p>Amount: $${amount.toFixed(2)}<br>
            Tip: ${tip}%<br>Tip Amount: $${tipPercent.toFixed(2)}</p>`);
    } else {
        res.send("<h1>Tip Calculator</h1><p>I need an <code>amount</code> "
            + "and <code>tip</code>.</p>");
    }
});

app.post("/exercise", (req, res) => {
    if (req.body.amount && req.body.tip) {
        const amount = parseFloat(req.body.amount);
        const tip = parseFloat(req.body.tip);
        let tipPercent = amount * tip / 100;
        res.send(`<h1>Tip Calculator</h1><p>Amount: $${amount.toFixed(2)}<br>
            Tip: ${tip}%<br>Tip Amount: $${tipPercent.toFixed(2)}</p>`);
    } else {
        res.send("<h1>Tip Calculator</h1><p>I need an <code>amount</code> "
            + "and <code>tip</code>.</p>");
    }
});


app.listen(app.get("port"), () => {
    console.log(`Server running on port ${app.get('port')}`);
});
