module.exports = app => {
  const students = require("../controllers/students.controller.js");

  var router = require("express").Router();

  // Create a student login object
  router.post("/", students.create);

  // Retrieve all student information
  router.get("/", students.findAll);

  // Retrieve a single student's infomation with RCS_ID
  router.get("/:rcs_id", students.findOne);

  // Delete a User student with RCS_ID
  router.delete("/:rcs_id", students.delete);

  app.use('/api/students', router);
};
