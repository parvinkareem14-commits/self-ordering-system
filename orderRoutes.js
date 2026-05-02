

const express = require("express");

const Order = require("../models/Order");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newOrder = await Order.create(req.body);
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
module.exports = router;