module.exports = (sequelize, Sequelize) => {
  const Students = sequelize.define("students", {
    rcs_id: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    password: {
      type: Sequelize.STRING
    },
    first_name: {
      type: Sequelize.STRING
    },
    last_name: {
      type: Sequelize.STRING
    },
    dept_code: {
      type: Sequelize.STRING
    }
  }, {
    freezeTableName: true,
    timestamps: false
  });
  Students.removeAttribute('id');

  return Students;
};
