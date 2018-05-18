import os

PROJ_NAME = ""
CONTROLLER_NAME = ""


def gen_folders():
    # os.system(f'mkdir -p ./{PROJ_NAME}/client/views')
    # os.system(f"mkdir -p ./{PROJ_NAME}/client/static")
    os.system(f"mkdir -p ./{PROJ_NAME}/server/config")
    os.system(f"mkdir -p ./{PROJ_NAME}/server/controllers")
    os.system(f"mkdir -p ./{PROJ_NAME}/server/models")


def build_mongoose():
    conf = """  
    const dbName = "";
    const mongoose = require("mongoose");
    const fs = require("fs");
    const path = require("path");
    mongoose.connect(`mongodb://localhost/${dbName}`);

    let modelsPath = path.join(__dirname, "./../models");
    fs.readdirSync(modelsPath).forEach(function(file) {
        if(file.indexOf(".js") >= 0) {
            require(modelsPath + "/" + file);
        }
    }) """
    os.system(f"touch ./{PROJ_NAME}/server/config/mongoose.js")
    os.system(f"echo '{conf}' >> ./{PROJ_NAME}/server/config/mongoose.js")


def build_serverJS():
    serverJS = """
    const express = require("express");
    const app = express();
    app.set("view engine", "ejs");
    app.set("views", __dirname + "/client/views")
    app.use(express.static(__dirname + "/public/static"))

    // Session
    let session = require("express-session");
    app.use(session({
        secret: "ai0nasd979YTUG:*PYsdaisdh;dspdi",
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 60000 }
    }))

    // Body Parser
    const bodyParser = require("body-parser");
    app.use(bodyParser.json());

    // Flash
    const flash = require("express-flash");
    app.use(flash());

    // Mongoose
    require("./server/config/mongoose")

    // Server
    const portNum = 8000;
    const server = app.listen(portNum, () => {
        console.log(`Listening on Port ${portNum}`);
    });

    // Routes
    require("./server/config/routes.js")(app)"""
    # os.system(f"touch ./{PROJ_NAME}/server.js")
    os.system(f"echo '{serverJS}' >> ./{PROJ_NAME}/server.js")


def build_routes():
    routesJS = """
    const %(CONTROLLER_NAME)s = require("../controllers/%(CONTROLLER_NAME)s")
    module.exports = app => {
        app.get("/%(CONTROLLER_NAME)s", %(CONTROLLER_NAME)s.index);
        app.get("/%(CONTROLLER_NAME)s/:%(CONTROLLER_NAME)sId", %(CONTROLLER_NAME)s.show)
        app.post("/%(CONTROLLER_NAME)s", %(CONTROLLER_NAME)s.create);
        app.put("/%(CONTROLLER_NAME)s/:%(CONTROLLER_NAME)sId", %(CONTROLLER_NAME)s.update)
        app.delete("/%(CONTROLLER_NAME)s/:%(CONTROLLER_NAME)sId", %(CONTROLLER_NAME)s.destroy)
    }
    """ % {'CONTROLLER_NAME': CONTROLLER_NAME}
    os.system(f"echo '{ routesJS }' >> ./{ PROJ_NAME }/server/config/routes.js")


def main():
    gen_folders()
    build_mongoose()
    build_serverJS()
    build_routes()


if __name__ == '__main__':
    PROJ_NAME = input('Enter Project Name: ')
    CONTROLLER_NAME = input('Enter a Name for your main controller: ')
    main()
