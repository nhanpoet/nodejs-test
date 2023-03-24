const path = require("path");
const express = require("express");
const morgan = require("morgan");
const hbs = require("express-handlebars");
const methodOverride = require("method-override");
const sortMiddleware = require("./app/middlewares/sort.middleware");

const app = express();
const port = 3000;

const router = require("./routes");
const db = require("./config/db");

//Connect DB
db.connect();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride("_method"));

//Custom middleware
app.use(sortMiddleware);

//Template Engine
app.engine(
  "hbs",
  hbs.engine({
    extname: ".hbs",
    helpers: require("./helpers/handlebar"),
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

//HTTP Logger
// app.use(morgan("combined"));

//Routes init
router(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
