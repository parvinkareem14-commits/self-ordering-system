
const express = require("express");

const Review = require("../models/Review");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newReview = await Review.create(req.body);
    res.status(201).json(newReview);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;