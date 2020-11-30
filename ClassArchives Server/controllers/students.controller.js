const db = require("../models");
const Students = db.students;
const Op = db.Sequelize.Op;

// Create and Save a new student
exports.create = (req, res) => {
  // Validate request
  if (!req.body.password) {
    res.status(400).send({
      message: "Password can not be empty!"
    });
    return;
  }

  // Create a student login object
  const studentObj = {
    rcs_id: req.body.rcs_id,
    password: req.body.password,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    dept_code: req.body.dept_code
  };

  // Save student details in the database
  Students.create(studentObj)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the student."
      });
    });
};

// Retrieve all student information from the database. (For admin use)
exports.findAll = (req, res) => {
  const title = req.query.rcs_id;
  var condition = title ? { rcs_id: { [Op.iLike]: `%${title}%` } } : null;

  Students.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving User infomation."
      });
    });
};

// Find a single student with an UID.
exports.findOne = (req, res) => {
  const id = req.params.rcs_id;

  Students.findByPk(id)
    .then(data => {
      res.send(data.password);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Students with RCS ID=" + id
      });
    });
};

// Update (Forget password..) a student with the specified rcs_id in the request
exports.delete = (req, res) => {
};
