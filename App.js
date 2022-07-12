require('dotenv').config()
const express = require("express");
const Router = require("./routes/index")
const bodyParser = require("body-parser")

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static("public"));

app.use("/",Router);

app.listen("3000",()=>{console.log("server working on port 3000")})
