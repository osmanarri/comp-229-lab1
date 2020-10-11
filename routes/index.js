/* js file include all the routes
student name: osman tahir
student # 301075554
date: 10-09-2020 */

const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Home" });
});

/* GET home page. */
router.get("/home", function (req, res, next) {
  res.render("index", { title: "Home" });
});

/* GET About Us page. */
router.get("/about", function (req, res, next) {
  res.render("about", { title: "About Me" });
});

/* GET Projects page. */
router.get("/projects", function (req, res, next) {
  res.render("projects", { title: "Projects" });
});

/* GET Services page. */
router.get("/services", function (req, res, next) {
  res.render("services", { title: "Services" });
});

/* GET Contact Us page. */
router.get("/contact", function (req, res, next) {
  res.render("contact", { title: "Contact" });
});

// capturing any unavailable route
router.get("*", function (req, res) {
  res.render("index", { title: "Home" });
});

module.exports = router;
