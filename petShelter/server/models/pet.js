let mongoose = require("mongoose");
const petsSchema = mongoose.Schema({
    name: {type: String, required: [true, "Name cannot be blank"], minlength: [3, "Name may not be less than 3 characters long"], unique: [true, "Pet names must be unique"]},
    type: {type: String, required: [true, "Pet Type cannot be blank"], minlength: [3, "Pet Type may not be less than 3 characters long"]},
    desc: {type: String, required: [true, "Description cannot be blank"], minlength: [3, "Description be at least three characters long"]},
    skills: {} 
}, {timestamp: true})
function arrayLimit(val) {
    return val.length <= 3;
  }
mongoose.model("pet", petsSchema)
