

const PORT       = 8000;
const ENV        = "development";
const express    = require("express");
const bodyParser = require("body-parser");
const sass       = require("node-sass-middleware");
const app        = express();
const morgan     = require('morgan');

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
// app.use(express.static("public"));
app.use(morgan('tiny'));


const db_helpers = require('./helper')

app.get("/", (req, res) => {
  const user = 1;
  const templateVars = { user };
  res.render('index');
});


app.listen(PORT, () => {
  console.log(`alibas.ca listening on port ${PORT} 😎`);
});