module.exports = app => {
  const courses = require("../controllers/courses.controller.js");

  var router = require("express").Router();

  // Create a course object
  router.post("/", courses.create);

  // Retrieve all information about courses
  router.get("/", courses.findAll);

  // Retrieve information about a course using the course id
  router.get("/:course_id", courses.findOne);

  app.use('/api/courses', router);
};
