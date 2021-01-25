$(document).ready(function() {
    $("#getWeatherForcast").click(function() {
        var city = $("#city").val();
        var key = 'ba2a06e48d754582fb2a293987aa4f29';
        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/weather',
            dataType: 'json',
            type: 'GET',
            data: {q: city, appid: key, units: 'imperial'},

            success: function(data){
                var wf = '';
                $.each(data.weather, function(index, val) {
                    wf += '<p><b>' + data.name + "</b><img src=" + val.icon + ".png></p>" +
                    data.main.temp + '&deg;F ' + ' | ' + val.main + ", " + val.description
                });
                $("#showWeatherForcast").html(wf);
            }

        })
    })

});
