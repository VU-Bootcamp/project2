$(document).ready(function() {
  // Getting references to our form and inputs
  var loginForm = $("#");
  var emailInput = $("#");
  var usernameInput = $("#");
  var passwordInput = $("#");

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      username: usernameInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.username || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.username, userData.password);
    emailInput.val("");
    username.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the main page
  function loginUser(email, username, password) {
    $.post("/api/login", {
      email: email,
      username: username,
      password: password
    })
      .then(function() {
        window.location.replace("/main");
        // If there's an error, log the error
      })
      .catch(function(err) {
        console.log(err);
      });
  }
});
