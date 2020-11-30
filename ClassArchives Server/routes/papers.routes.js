module.exports = app => {
  const papers = require("../controllers/papers.controller.js");

  var router = require("express").Router();

  // Create a new object for the saved paper
  router.post("/", papers.create);

  // Retrieve all saved papers using course ID
  router.get("/:course_id", papers.findAllbyCourseID);

  // Retrieve a single paper with the RCSID and PaperID (Needs to be implemented)
  router.get("/:course_id", papers.findOne);

  // Update
  router.put("/:course_id", papers.update);

  // Delete
  router.delete("/:course_id", papers.delete);

  app.use('/api/papers', router);
};
