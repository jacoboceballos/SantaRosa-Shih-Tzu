const mongoose = require('mongoose');

const PuppySchema = new mongoose.Schema({
  name: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, enum: ['Male', 'Female'], required: true },
  color: { type: String, required: true },
  status: { type: String, enum: ['Available', 'Reserved', 'Adopted'], default: 'Available' },
  images: [String],
});

module.exports = mongoose.model('Puppy', PuppySchema);
