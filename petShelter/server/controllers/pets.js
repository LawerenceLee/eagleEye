const mongoose = require('mongoose');
const Pet = mongoose.model('pet');


returnObjBuilder = (res) => {
    return (err, data) => {
        if (err) { res.json({ message: "error", error: err.message }) }
        else { res.json({ message: "success", data: data }) }
    }
}

module.exports = {
    index: (req, res) => {
        Pet.find({}, returnObjBuilder(res))
    },
    create: (req, res) => {
        Pet.create(req.body, returnObjBuilder(res))
    }, 
    show: (req, res) => {
        Pet.findById(req.params.petId, returnObjBuilder(res))
    },
    update: (req, res) => {
        Pet.findByIdAndUpdate(req.params.petId, req.body, {new: true}, returnObjBuilder(res))
    },
    destroy: (req, res) => {
        Pet.findByIdAndRemove(req.params.petId, returnObjBuilder(res))
    }
}