module.exports = (sequelize, Sequelize) => {
  const Departments = sequelize.define("departments", {
    dept_code: {
      type: Sequelize.STRING(127),
      primaryKey: true
    },
    dept_name: {
      type: Sequelize.STRING(127)
    },
    school_name: {
      type: Sequelize.STRING(127)
    }
  }, {
    freezeTableName: true,
    timestamps: false
  });
  Departments.removeAttribute('id');

  return Departments;
};
