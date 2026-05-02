const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    tableNo: {
      type: Number,
      required: true
    },
    foods: [
      {
        name: String,
        price: Number
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);