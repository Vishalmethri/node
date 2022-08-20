const express = require("express");

const homeData = require("./home");

const router = express.Router();

router.get("/artists",(req,res,next) => {
    console.log(homeData.artists);
    res.render("artist",{artists: homeData.artists, pageTitle: "Artists"});
});

module.exports = router;