const db = require("../models");
const Departments = db.departments;
const Op = db.Sequelize.Op;

// Create and Save a department
exports.create = (req, res) => {
  // Validate request
  if (!req.body.dept_code) {
    res.status(400).send({
      message: "Dept code can not be empty!"
    });
    return;
  }

  // Create a department object
  const deptObj = {
    dept_code: req.body.dept_code,
    dept_name: req.body.dept_name,
    school_name: req.body.school_name,
  };


  // Save the department in database
  Departments.create(deptObj)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Department."
      });
    });
};

// Retrieve all department infomation.
exports.findAll = (req, res) => {
  const title = req.query.dept_name;
  var condition = title ? { dept_name: { [Op.iLike]: `%${title}%` } } : null;

  Departments.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Department infomation."
      });
    });
};

// Find a department by dept_code
exports.findOne = (req, res) => {
  const dept_code = req.params.dept_code;

  Departments.findByPk(dept_code)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Department with the department code=" + dept_code
      });
    });
};

// Delete a department with the specified dept_code in the request
exports.delete = (req, res) => {
};
