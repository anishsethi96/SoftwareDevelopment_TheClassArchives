const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");
db.sequelize.sync();
app.get("/", (req, res) => {
  res.json({ message: "The Class Archives" });
});

require("./routes/departments.routes")(app);
require("./routes/students.routes")(app);
require("./routes/courses.routes")(app);
require("./routes/papers.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 4200;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
