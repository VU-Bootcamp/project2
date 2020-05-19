var path = require("path");

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  // *****BOILER PLATE*******

  // Load index page
<<<<<<< HEAD
  app.get("/", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("index", {
        msg: "Welcome to Project 2",
        examples: dbExamples
      });
    });
=======
  //   app.get("/", function(req, res) {
  //     db.Example.findAll({}).then(function(dbExamples) {
  //       res.render("index", {
  //         msg: "Welcome!",
  //         examples: dbExamples
  //       });
  //     });
  //   });

  //   // Load example page and pass in an example by id
  //   app.get("/example/:id", function(req, res) {
  //     db.Example.findOne({ where: { id: req.params.id } }).then(function(
  //       dbExample
  //     ) {
  //       res.render("example", {
  //         example: dbExample
  //       });
  //     });
  //   });

  //   // Render 404 page for any unmatched routes
  //   app.get("*", function(req, res) {
  //     res.render("404");
  //   });
  // };

  // -------------------------------------------------------------------------------------------

  // loading page sends them to the index.html page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/signup", function(req, res) {
    // sending them to the signup page if they don't have an account
    if (req.user) {
      res.redirect("/index");
    }
    res.sendFile(path.join(__dirname, "../public/signUp.html"));
>>>>>>> 589caf5c7102cee79e66c59e7d3ceb7ed18cbf13
  });

  app.get("/login", function (req, res) {
    // sending them to the login page if they don't have an account
    if (req.user) {
      res.redirect("/index");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // IF A USER LOGS OUT THEN TRIES TO ACCES A ROUTE THEY WILL BE REDIRECTED TO THE WELCOME PAGE (allows them to chose signup or login)
  app.get("/index", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
