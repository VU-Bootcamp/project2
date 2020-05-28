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
    var bikingKey = "200766147-11bb09dc53d8135d7b379b2ee6fd4563";
    var bikingURL =
      "https://www.mtbproject.com/data/get-trails?lat=" +
      lat +
      "&lon=" +
      lon +
      "&maxDistance=30&key=" +
      bikingKey;

    $.ajax({
      url: bikingURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      var results = response.trails;
      for (var i = 0; i < results.length; i++) {
        var trailName = $("<h1>").text(results[i].name);
        var trailUrl = $("<a>")
          .attr("href", results[i].url)
          .append(trailName);
        var location = $("<h3>").text(results[i].location);
        var image = $("<img>").attr("src", results[i].imgSmallMed);
        var length = $("<h3>").text(results[i].length + " mile round trip");
        var stars = $("<h3>").text(results[i].stars + "/5 star rating");
        var difficulty = $("<h3>").text("Difficulty: " + results[i].difficulty);
        var summary = $("<h3>").text(results[i].summary);

        $("#zip-div").append(
          trailUrl,
          image,
          location,
          difficulty,
          length,
          stars,
          summary
        );
      }
    });
  });
}

$("#select-zip").on("click", function(event) {
  event.preventDefault();
  $("#zip-div").empty();
  var inputZip = $("#zip-input")
    .val()
    .trim();

  getLocation(inputZip);
});
