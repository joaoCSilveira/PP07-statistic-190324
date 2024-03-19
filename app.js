const express = require("express")
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/views"))

app.get("/", (req, res, next) => {
    res.render("index.ejs")
})


module.exports = app