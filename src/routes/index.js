const newsRoute = require("./news.route");
const siteRoute = require("./site.route");
const meRoute = require("./me.route");
const coursesRoute = require("./courses.route");

function route(app) {
  app.use("/news", newsRoute);

  app.use("/me", meRoute);

  app.use("/courses", coursesRoute);

  app.use("/", siteRoute);
}

module.exports = route;
