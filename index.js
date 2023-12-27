const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

app.use(express.static(path.join(__dirname, "/public")));

app.listen(80, ()=>{
    console.log("server online");
});