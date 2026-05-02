

const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: String, required: true },
  seatType: String,
  foodType: String,
  members: Number
});

module.exports = mongoose.model("Register", registerSchema);