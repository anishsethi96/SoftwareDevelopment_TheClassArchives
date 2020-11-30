const db = require("../models");
const Papers = db.papers;
const Op = db.Sequelize.Op;

// Create and Save a new paper
exports.create = (req, res) => {
  // Validate request
  if (!req.body.rcs_id) {
    res.status(400).send({
      message: "rcs_id can not be empty!"``
    });
    return;
  }

  // Create paper Object
  const paperObj = {
    course_id: req.body.course_id,
    rcs_id: req.body.rcs_id,
    title_name: req.body.title_name,
    type_name: req.body.type_name,
    grade_percentage: req.body.grade_percentage,
    professor_first_name: req.body.professor_first_name,
    professor_last_name: req.body.professor_last_name,
    paper_year: req.body.paper_year,
    doc_link: req.body.doc_link,
  };

  // Save paper infomation in the database
  Papers.create(paperObj)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while adding new Papers."
      });
    });
};

// Retrieve all papers from the database by course id.
exports.findAllbyCourseID = (req, res) => {
  const title = req.params.course_id;
  //console.log(req.params.id);

  Papers.findAll({
    where: {
      course_id: {
        [Op.eq]: title
        }
      }
    })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Papers."
      });
    });
};

// Find a single paper with an rcsid and paperid
exports.findOne = (req, res) => {
};

// Update a paper by the id in the request
exports.update = (req, res) => {
};

// Delete a paper with the specified id in the request
exports.delete = (req, res) => {
};
