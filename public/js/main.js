// main page js
// $(document).ready(function() {
//   // This file just does a GET request to figure out which user is logged in
//   // and updates the HTML on the page
//   $.get("/api/user_data").then(function(data) {
//     $(".member-name").text(data.email);
//   });
// });

// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------
// api keys && functions

// HIKING TRAILS DATA API
// GET TRAILS API KEY = 200766147-11bb09dc53d8135d7b379b2ee6fd4563
// KNOXVILLE RADIUS URL = https://www.hikingproject.com/data/get-trails?lat=35.8929&lon=-83.9387&maxDistance=30&key=200766147-11bb09dc53d8135d7b379b2ee6fd4563
// function getHiking() {
//   var hikingKey = "200766147-11bb09dc53d8135d7b379b2ee6fd4563";
//   var hikingURL =
//     "https://www.hikingproject.com/data/get-trails?lat=" +
//     lat +
//     "&lon=" +
//     lon +
//     "&maxDistance=30&key=" +
//     hikingKey;
// }

// // MOUNTAIN BIKING DATA API
// // APIK KEY = 200766147-11bb09dc53d8135d7b379b2ee6fd4563
// // KNOXVILLE RADIUS URL = https://www.mtbproject.com/data/get-trails?lat=35.8929&lon=-83.9387&maxDistance=30&key=200766147-11bb09dc53d8135d7b379b2ee6fd4563
// function getBiking() {
//   var bikingKey = "200766147-11bb09dc53d8135d7b379b2ee6fd4563";
//   var bikingURL =
//     "https://www.mtbproject.com/data/get-trails?lat=" +
//     lat +
//     "&lon=" +
//     lon +
//     "&maxDistance=30&key=" +
//     bikingKey;
// }

// // MOUNTAIN CLIMBING DATA API
// // API KEY = 200766147-f3b6f42bfba3f6ae5cad3d8a74412b79
// // KNOXVILLE RADIUS URL = https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=35.8929&lon=-83.9387&maxDistance=30&minDiff=5.6&maxDiff=5.10&key=200766147-f3b6f42bfba3f6ae5cad3d8a74412b79
// function getClimbing() {
//   var climbingKey = "200766147-f3b6f42bfba3f6ae5cad3d8a74412b79";
//   var climbingURL =
//     "https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=" +
//     lat +
//     "&lon=" +
//     lon +
//     "&maxDistance=30&minDiff=5.6&maxDiff=5.10&key=" +
//     climbingKey;
// }

// // TRAIL RUNNING DATA API
// // API KEY = 200766147-11bb09dc53d8135d7b379b2ee6fd4563
// // KNOXVILLE RADIUS URL = https://www.trailrunproject.com/data/get-trails?lat=35.8929&lon=-83.9387&maxDistance=30&key=200766147-11bb09dc53d8135d7b379b2ee6fd4563
// function getRunning() {
//   var runningKey = "200766147-11bb09dc53d8135d7b379b2ee6fd4563";
//   var runningURL =
//     "https://www.trailrunproject.com/data/get-trails?lat=" +
//     lat +
//     "&lon=" +
//     lon +
//     "&maxDistance=30&key=" +
//     runningKey;
// }

function getLocation(zip) {
  var APIKey = "0644fdcf0afca9b1bf132e09859e56f8";
  var queryURL =
    "https://api.openweathermap.org/data/2.5/forecast?zip=" +
    zip +
    ",us&appid=" +
    APIKey;

  // ajax call to the OpenWeatherMap Api
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    var a = response;
    var lon = a.city.coord.lon;
    var lat = a.city.coord.lat;
    var runningKey = "200766147-11bb09dc53d8135d7b379b2ee6fd4563";
    var runningURL =
      "https://www.trailrunproject.com/data/get-trails?lat=" +
      lat +
      "&lon=" +
      lon +
      "&maxDistance=30&key=" +
      runningKey;

    $.ajax({
      url: runningURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      var results = response.trails;
      for (var i = 0; i < results.length; i++) {
        var trailName = $("<h1>").text(results[i].name);
        var image = $("<img>").attr("src", results[i].imgSmall);
        var length = $("<h3>").text(results[i].length);
        var stars = $("<h3>").text(results[i].stars);
        var summary = $("<h3>").text(results[i].summary);

        $("#zip-div").empty();

        $("#zip-div").append(trailName, image, length, stars, summary);
      }
    });
  });
}

$("#select-zip").on("click", function(event) {
  event.preventDefault();

  var inputZip = $("#zip-input")
    .val()
    .trim();

  getLocation(inputZip);
});
