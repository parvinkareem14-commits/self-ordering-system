

const express = require("express");
const Register = require("../models/Register");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const user = await Register.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;