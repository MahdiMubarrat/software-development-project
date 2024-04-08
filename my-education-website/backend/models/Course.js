const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  // Add other fields as necessary
});

module.exports = mongoose.model('Course', courseSchema);
