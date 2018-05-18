
    const express = require("express");
    const app = express();
    const path = require('path')
    app.use(express.static(__dirname + "/angularPets/dist/angularPets"))

    // Body Parser
    const bodyParser = require("body-parser");
    app.use(bodyParser.json());


    // Mongoose
    require("./server/config/mongoose")

    // Server
    const portNum = 8000;
    const server = app.listen(portNum, () => {
        console.log(`Listening on Port ${portNum}`);
    });

    // Routes
    require("./server/config/routes.js")(app)

    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./angularPets/dist/angularPets/index.html"))
    });