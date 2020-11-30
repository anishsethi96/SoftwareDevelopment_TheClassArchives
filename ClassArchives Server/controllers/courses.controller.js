const db = require("../models");
const Courses = db.courses;
const Op = db.Sequelize.Op;

// Create and Save a course
exports.create = (req, res) => {
  if (!req.body.course_id) {
    res.status(400).send({
      message: "Course ID can not be empty!"
    });
    return;
  }

  // Create a course object
  const courseObj = {
    course_id: req.body.course_id,
    course_name: req.body.course_name,
    dept_code: req.body.dept_code,
    semester_year: req.body.semester_year,
    semester_season: req.body.semester_season
  };

  // Save a new course in database
  Courses.create(courseObj)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the course."
      });
    });
};

// Retrieve all course infomation.
exports.findAll = (req, res) => {
  const title = req.query.course_id;
  var condition = title ? { course_id: { [Op.iLike]: `%${title}%` } } : null;

  Courses.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving course infomation."
      });
    });
};

// Find a room by course_id
exports.findOne = (req, res) => {
  const id = req.params.course_id;

  Courses.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving courses with Course ID=" + id
      });
    });
};

// Delete a room with the specified room_type_id in the request
exports.delete = (req, res) => {
};
