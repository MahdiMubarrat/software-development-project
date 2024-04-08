const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

// GET request to get all courses
router.get('/', async (req, res) => {
  const courses = await Course.find({});
  res.json(courses);
});

// POST request to add a new course
router.post('/', async (req, res) => {
  const newCourse = new Course(req.body);
  const savedCourse = await newCourse.save();
  res.json(savedCourse);
});

// Add PUT and DELETE routes as needed

module.exports = router;
