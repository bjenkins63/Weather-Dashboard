$(document).ready(function () {

    let now = dayjs();
    let currentDayVal = (now.format("MM/DD/YYYY"));


    $("#getWeatherForecast").click(function () {
        var city = $("#city").val();
        var key = 'ba2a06e48d754582fb2a293987aa4f29';

        $.ajax({
            url: 'https://api.openweathermap.org/data/2.5/weather',
            dataType: 'json',
            type: 'GET',
            data: { q: city, appid: key, units: 'imperial' },
            success: function (data) {
                var wf = '';
                $.each(data.weather, function (index, val) {
                    wf += '<p><b>' + data.name + data.main.temp + '&deg;F ' + ' | ' + val.main + ", " + val.description + ' | ' +
                        ' Humidy: ' + data.main.humidity + '%' + ' | ' + ' Wind Speed: ' + data.wind.speed + ' mph'
                        + ' | ' + 'lon' + data.coord.lon + ' | ' + 'lat' + data.coord.lat

                    var longitude = data.coord.lon;
                    var latitude = data.coord.lat;
                    var key = 'ba2a06e48d754582fb2a293987aa4f29';

                    const queryURLTwo = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&appid=" + key;
                    var uvIndex = "https://api.openweathermap.org/data/2.5/onecall"

                    $.ajax({
                        url: uvIndex + "?lat=" + latitude + "&lon=" + longitude + "&appid=" + key,
                        method: "GET"
                    }).then(function (response) {
                        $(".UvIndex").text("UV Index:");
                        $(".UvNum").text(response.current.uvi);

                        const weatherIconURL = "https://openweathermap.org/img/wn/";

                        let forecastDay1Date = now.add('1', 'day');
                        $(".day1-forecast-date").text(forecastDay1Date.format('MM/DD/YYYY'));
                        $(".day1-forecast-icon").attr("src", weatherIconURL + response.daily[0].weather[0].icon + ".png");
                        $(".day1-forecast-icon").attr("alt", response.daily[0].weather[0].description);
                        let kelvinForecastDay1 = ((response.daily[0].temp.day - 273.15) * 1.80 + 32).toFixed(2);
                        $(".day1-forecast-temp").text("Temp: " + kelvinForecastDay1 + " °F");
                        $(".day1-forecast-humidity").text("Humidity: " + response.daily[0].humidity + "%");

                        let forecastDay2Date = now.add('2', 'day');
                        $(".day2-forecast-date").text(forecastDay2Date.format('MM/DD/YYYY'));
                        $(".day2-forecast-icon").attr("src", weatherIconURL + response.daily[1].weather[0].icon + ".png");
                        $(".day2-forecast-icon").attr("alt", response.daily[1].weather[0].description);
                        let kelvinForecastDay2 = ((response.daily[1].temp.day - 273.15) * 1.80 + 32).toFixed(2);
                        $(".day2-forecast-temp").text("Temp: " + kelvinForecastDay2 + " °F");
                        $(".day2-forecast-humidity").text("Humidity: " + response.daily[1].humidity + "%");

                        let forecastDay3Date = now.add('3', 'day');
                        $(".day3-forecast-date").text(forecastDay3Date.format('MM/DD/YYYY'));
                        $(".day3-forecast-icon").attr("src", weatherIconURL + response.daily[2].weather[0].icon + ".png");
                        $(".day3-forecast-icon").attr("alt", response.daily[2].weather[0].description);
                        let kelvinForecastDay3 = ((response.daily[2].temp.day - 273.15) * 1.80 + 32).toFixed(2);
                        $(".day3-forecast-temp").text("Temp: " + kelvinForecastDay3 + " °F");
                        $(".day3-forecast-humidity").text("Humidity: " + response.daily[2].humidity + "%");
                        // Day 4
                        let forecastDay4Date = now.add('4', 'day');
                        $(".day4-forecast-date").text(forecastDay4Date.format('MM/DD/YYYY'));
                        $(".day4-forecast-icon").attr("src", weatherIconURL + response.daily[3].weather[0].icon + ".png");
                        $(".day4-forecast-icon").attr("alt", response.daily[3].weather[0].description);
                        let kelvinForecastDay4 = ((response.daily[3].temp.day - 273.15) * 1.80 + 32).toFixed(2);
                        $(".day4-forecast-temp").text("Temp: " + kelvinForecastDay4 + " °F");
                        $(".day4-forecast-humidity").text("Humidity: " + response.daily[3].humidity + "%");
                        // Day 5
                        let forecastDay5Date = now.add('5', 'day');
                        $(".day5-forecast-date").text(forecastDay5Date.format('MM/DD/YYYY'));
                        $(".day5-forecast-icon").attr("src", weatherIconURL + response.daily[4].weather[0].icon + ".png");
                        $(".day5-forecast-icon").attr("alt", response.daily[4].weather[0].description);
                        let kelvinForecastDay5 = ((response.daily[4].temp.day - 273.15) * 1.80 + 32).toFixed(2);
                        $(".day5-forecast-temp").text("Temp: " + kelvinForecastDay5 + " °F");
                        $(".day5-forecast-humidity").text("Humidity: " + response.daily[4].humidity + "%");

                    });

                    $("#showWeatherForecast").html(wf);
                })
            }
        })
    })

});
