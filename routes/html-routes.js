// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", function(req, res) {
    // sends user to welcome page
    res.sendFile(path.join(__dirname, "../public/landing.html"));
  });

  app.get("/about", function(req, res) {
    // sending user to the about page
    res.sendFile(path.join(__dirname, "../public/about.html"));
  });

  app.get("/info", function(req, res) {
    // sending user to the info page
    res.sendFile(path.join(__dirname, "../public/info.html"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the main page
    if (req.user) {
      res.redirect("/main");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/signup", function(req, res) {
    // If the user already has an account send them to the main page
    if (req.user) {
      res.redirect("/main");
    }
    res.sendFile(path.join(__dirname, "../public/signUp.html"));
  });

  app.get("/trail-running", isAuthenticated, function(req, res) {
    // If the user already has an account send them to the main page

    res.sendFile(path.join(__dirname, "../public/running.html"));
  });

  app.get("/hiking", isAuthenticated, function(req, res) {
    // If the user already has an account send them to the main page

    res.sendFile(path.join(__dirname, "../public/hiking.html"));
  });

  app.get("/mtn-biking", isAuthenticated, function(req, res) {
    // If the user already has an account send them to the main page

    res.sendFile(path.join(__dirname, "../public/biking.html"));
  });

  app.get("/mtn-climbing", isAuthenticated, function(req, res) {
    // If the user already has an account send them to the main page

    res.sendFile(path.join(__dirname, "../public/climbing.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/main", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/main.html"));
  });
};
