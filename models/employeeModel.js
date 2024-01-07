const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true,"employee must have a Name"],
  },
  dateOfBirth: Date,
  gender: {
    type: String,
    required: [true,"please spasify your gender"]
  },
  salary: {
    type: Number,
  },
},{timestamps:true});


module.exports = mongoose.model("employee", employeeSchema);