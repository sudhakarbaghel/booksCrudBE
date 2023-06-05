 
const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  number: String,
  nic: String,
  address: String,
});

module.exports = mongoose.model("Employee", employeeSchema);
