const Course = require("../models/course.model");
const { mutMongoosesToObject } = require("../../utils/mongoose");

class MeController {
  //[GET] /me/stored/courses
  show(req, res, next) {
    Promise.all([Course.find({}).sortable(req), Course.countDocumentsDeleted()])
      .then(([courses, deletedCount]) =>
        res.render("me/store-courses", {
          deletedCount,
          courses: mutMongoosesToObject(courses),
        })
      )
      .catch(next);
  }

  //[GET] /me/trash/courses
  trash(req, res, next) {
    Course.findDeleted({})
      .then((courses) =>
        res.render("me/trash-courses", {
          courses: mutMongoosesToObject(courses),
        })
      )
      .catch(next);
  }
}

module.exports = new MeController();
