const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const homeData = require("./routes/home");
const artistRoutes = require("./routes/artist");

app.use(express.urlencoded({extended: false}));

app.use(artistRoutes);

app.use(homeData.routes);

app.use((req,res,next) => {
    res.status(404).render("404",{pageTitle: "Page Not Found"});
});

app.listen(3000);