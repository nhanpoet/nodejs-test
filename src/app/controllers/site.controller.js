const Course = require("../models/course.model");
const { mutMongoosesToObject } = require("../../utils/mongoose");

class SiteController {
  //[GET] /
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("home", {
          courses: mutMongoosesToObject(courses),
        });
      })
      .catch(next);
  }

  //[GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
