module.exports = app => {
  const departments = require("../controllers/departments.controller.js");

  var router = require("express").Router();

  // Create a department object
  router.post("/", departments.create);

  // Retrieve all information about departments
  router.get("/", departments.findAll);

  // Retrieve a department infomation with dept_code
  router.get("/:dept_code", departments.findOne);

  app.use('/api/departments', router);
};
