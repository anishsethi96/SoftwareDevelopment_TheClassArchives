module.exports = (sequelize, Sequelize) => {
  const Courses = sequelize.define("courses", {
    course_id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    course_name: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    dept_code: {
      type: Sequelize.STRING(4),
      primaryKey: true,
    },
    semester_year: {
      type: Sequelize.INTEGER
    },
    semester_season: {
      type: Sequelize.INTEGER
    }
  }, {
    freezeTableName: true,
    timestamps: false
  });
  Courses.removeAttribute('id');

  return Courses;
};
