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
    var climbingKey = "200766147-f3b6f42bfba3f6ae5cad3d8a74412b79";
    var climbingURL =
      "https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=" +
      lat +
      "&lon=" +
      lon +
      "&maxDistance=30&minDiff=5.6&maxDiff=5.10&key=" +
      climbingKey;

    $.ajax({
      url: climbingURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      var results = response.routes;
      for (var i = 0; i < results.length; i++) {
        var routeName = $("<h1>").text(results[i].name);
        var routeUrl = $("<a>")
          .attr("href", results[i].url)
          .append(routeName);
        var image = $("<img>").attr("src", results[i].imgSmallMed);
        var rating = $("<h3>").text(results[i].rating + " rating");

        $("#zip-div").append(routeUrl, image, rating);
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
