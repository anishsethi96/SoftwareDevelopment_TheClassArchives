const dbConfig = require("../db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.departments = require("./departments.model.js")(sequelize, Sequelize);
db.students = require("./students.model.js")(sequelize, Sequelize);
db.courses = require("./courses.model.js")(sequelize, Sequelize);
db.papers = require("./papers.model.js")(sequelize, Sequelize);


module.exports = db;
