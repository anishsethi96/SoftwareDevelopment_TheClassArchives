module.exports = (sequelize, Sequelize) => {
  const Papers = sequelize.define("papers", {
    course_id: {
      type: Sequelize.INTEGER
    },
    rcs_id: {
      type: Sequelize.STRING
    },
    title_name: {
      type: Sequelize.STRING
    },
    type_name: {
      type: Sequelize.STRING
    },
    grade_percentage: {
      type: Sequelize.DECIMAL
    },
    professor_first_name: {
      type: Sequelize.STRING
    },
    professor_last_name: {
      type: Sequelize.STRING
    },
    paper_year: {
      type: Sequelize.INTEGER
    },
    doc_link: {
      type: Sequelize.STRING
    }
  }, {
    freezeTableName: true,
    timestamps: false
  });
  Papers.removeAttribute('id');

  return Papers;
};
