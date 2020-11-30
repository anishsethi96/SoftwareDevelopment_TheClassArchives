module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "qwerty4321",
  DB: "classarchives",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
