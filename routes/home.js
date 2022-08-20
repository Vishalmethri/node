const express = require("express");

const router = express.Router();

const artists = [];

router.get("/", (req, res, next) => {
    res.render("home");
});

router.post("/", (req, res, next) => {
    artists.push({name : req.body.artists});
    res.redirect("/artists");
});

exports.routes = router;
exports.artists = artists;
