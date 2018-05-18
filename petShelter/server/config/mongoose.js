const dbName = "pets";
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
mongoose.connect(`mongodb://localhost/${dbName}`);

let modelsPath = path.join(__dirname, "./../models");
fs.readdirSync(modelsPath).forEach(function(file) {
    if(file.indexOf(".js") >= 0) {
        require(modelsPath + "/" + file);
    }
}) 
