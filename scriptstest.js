$(document).ready(function () {




$("#getWeatherForecast").click(function () {

    var cityName = $("#city").val().trim();
    var key = 'ba2a06e48d754582fb2a293987aa4f29';
    var url = 'http://api.openweathermap.org/data/2.5/weather'

$.ajax({
    url: url + "?q=" + cityName + "&appid=" + key,
    method: "GET",
}).then(function(response) {
        // Log the queryURL
        // console.log(queryURL);
        // Log the resulting object


        // Get Lat/Long
        let cityLat = response.coord.lat;
        let cityLong = response.coord.lon;

        var uvIndex = "https://api.openweathermap.org/data/2.5/onecall"

        // // Data call for UV Index (OneCall) using Lat/Long from weather API URL
        $.ajax({
            url: uvIndex + "?lat=" + cityLat + "&lon=" + cityLong + "&appid=" + key,
            method: "GET"
            }).then(function(response) {
                 console.log(response);
                // $("#uvIndex").text("UV Index:");
                // $("#uvIndexNum").text(response.current.uvi);
                
             
        });


      

    });

})

});