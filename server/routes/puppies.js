const express = require('express');
const Puppy = require('../models/Puppy');
const router = express.Router();

// Get all puppies
router.get('/', async (req, res) => {
  try {
    const puppies = await Puppy.find();
    res.json(puppies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new puppy
router.post('/', async (req, res) => {
  const { name, dateOfBirth, gender, color, status, images } = req.body;
  try {
    const newPuppy = new Puppy({ name, dateOfBirth, gender, color, status, images });
    await newPuppy.save();
    res.status(201).json(newPuppy);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
