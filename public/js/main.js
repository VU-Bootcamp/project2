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

// ACTIVE API
// ACTIVITIES KEY: 9ktc2hwxq9r354339fgphe5c
// CAMPGROUND KEY: 2tdamsfrdp2b72uzqxnm89ky
// BASE ACTIVITY URL:
// BASE CAMPING URL:

// OPEN WEATHER MAP API to get the long and lat from the zip code input
// KNOXVILLE ZIP URL : https://api.openweathermap.org/data/2.5/forecast?zip=37920,us&appid=0644fdcf0afca9b1bf132e09859e56f8
// api id = 0644fdcf0afca9b1bf132e09859e56f8

function getLocation(zip) {
  var APIKey = "0644fdcf0afca9b1bf132e09859e56f8";

  // var zip = $("#zip-input")
  //   .val()
  //   .trim();

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
    console.log(response);

    var city = $("<h1>").text(response.city.name);
    var lon = $("<h3>").text(response.city.coord.lon);
    var lat = $("<h3>").text(response.city.coord.lat);

    $("#zip-div").empty();

    $("#zip-div").append(city, lon, lat);

    // getCampgrounds(response.city.coord.lon, response.city.coord.lat);
  });
}

$("#select-zip").on("click", function(event) {
  event.preventDefault();

  var inputZip = $("#zip-input")
    .val()
    .trim();

  getLocation(inputZip);
});

// function getCampgrounds(lon, lat) {
//   console.log(lon, lat);

//   // active api
//   // calls long/lat from openweathermap
//   // step1: create var api, queryurl, ajax call.
//   // step2: documemation to pull response needed
//   // step3: create empty div with class/id
//   // step4: push to empty
// }

// getLocation();
