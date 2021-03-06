const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 8000;
const hbs = require("hbs");

//  publick static path 
 const staticPath = (path.join(__dirname, "../public"));
const templatesPath = (path.join(__dirname, "../src/templates/views"));
 const particalsPath =(path.join(__dirname, "../src/templates/partials"));

 app.set('view engine', 'hbs');
 app.set('views', templatesPath)
 app.use(express.static(staticPath));
 hbs.registerPartials(particalsPath)

 
// Routing
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/weather", (req, res) => {
    res.render("weather");
});

app.get("*", (req,res) =>{
    res.render("404");
})





app.listen(port, () => {
    console.log(`Runing at Port No. ${port}`)
});


