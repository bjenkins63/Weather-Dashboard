$(document).ready(function () {


    $("#getWeatherForecast").click(function () {
        var city = $("#city").val();
        var lat = $("#lat").val();
        var lon = $("#lon").val();
        var key = 'ba2a06e48d754582fb2a293987aa4f29';
        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/weather',
            dataType: 'json',
            type: 'GET',
            data: { q: city, appid: key, units: 'imperial' },

            success: function (data) {
                var wf = '';
                $.each(data.weather, function (index, val) {
                    wf += '<p><b>' + data.name + "</b><img src=" + val.icon + ".png></p>" +
                        data.main.temp + '&deg;F ' + ' | ' + val.main + ", " + val.description + ' | ' +
                        ' Humidy: ' + data.main.humidity + '%' + ' | ' + ' Wind Speed: ' + data.wind.speed + ' mph'
                        + ' | ' + 'lon' + data.coord.lon + ' | ' + 'lat' + data.coord.lat
                });
                $("#showWeatherForecast").html(wf);
            }
        })
    })


    $("#getUv").click((event) => {
            event.preventDefault();

            var city = $("#city").val();
            var lat = $("#lat").val();
            var lon = $("#lon").val();
            var key = 'ba2a06e48d754582fb2a293987aa4f29';

            $.ajax({
                url: 'http://api.openweathermap.org/data/2.5/onecall',
                dataType: 'json',
                type: 'GET',
                data: { q: city, lat: lat, lon: lon, appid: key, },

                success: function (data) {
                    var wfuv = '';
                    $.each(data.uvi, function () {
                        wfuv = data.uvi;
                    });
                    $("#showUv").html(wfuv);
                },
            });

        });


    $("#getWeatherForecast").click(function () {
        var city = $("#city").val();
        var lat = $("#data.coord.lat")
        var lon = $("#data.coord.lon")
        var key = 'ba2a06e48d754582fb2a293987aa4f29';
        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/forecast',
            dataType: 'json',
            type: 'GET',
            data: { q: city, q: lat, q: lon, appid: key, units: 'imperial' },

            _success: function (data) {
                var wf5 = '';
                $.forEach(data.weather, function (index, val) {
                    wf5 += '<p><b>' + data.name + "</b><img src=" + val.icon + ".png></p>" +
                        data.main.temp + '&deg;F ' + ' | ' + val.main + ", " + val.description + ' | ' +
                        ' Humidy: ' + data.main.humidity + '%' + ' | ' + ' Wind Speed: ' + data.wind.speed + ' mph';
                });
                $("#showWeatherForecast").html(wf5);
            },
            get success() {
                return this._success;
            },
            set success(value) {
                this._success = value;
            },

        })




    })
});
