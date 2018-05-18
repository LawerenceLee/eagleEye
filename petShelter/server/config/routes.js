const pets = require("../controllers/pets")
module.exports = app => {
    app.get("/server", pets.index);
    app.get("/server/:petId", pets.show)
    app.post("/server", pets.create);
    app.put("/server/:petId", pets.update)
    app.delete("/server/:petId", pets.destroy)
}

