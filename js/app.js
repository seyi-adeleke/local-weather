/**
 * Created by seyi adeleke on 3/8/2016.
 */
$(document).ready(function(){
    //api for city and country
    var cityUrl = 'http://ip-api.com/json';

    $.getJSON(cityUrl).done (function (location) {
        $('#country').html(location.country);
        $('#city').html(location.city+",");
        var locationCoords = document.getElementById("location");
        locationCoords.innerHTML = "LAT:"+ location.lat + ",";
        locationCoords.innerHTML += "LONG:" + location.lon;
        var weatherApi ='http://api.openweathermap.org/data/2.5/weather?lat='+location.lat+'&lon='+location.lon+'&units=metric&appid=19037534c7624a5254a20b799495dbcc';

        $.getJSON(weatherApi,{
            lat:location.lat,
            lon:location.lon
        }).done(function(weathers) {
            $("#current_weather").html(weathers.weather[0].main);
            $("#temperature").html(weathers.main.temp);
            $( "#button" ).click(function()
            {
                var CelsiusTemp =weathers.main.temp.toFixed(2);
                $("#temperature").html(CelsiusTemp);
            });
            $( "#button2" ).click(function()
            {
                var CelsiusTemp =weathers.main.temp;
                var fahrenheitTemp = (CelsiusTemp  * (9/5) + 32).toFixed(2);
                $("#temperature").html(fahrenheitTemp);
            });


        });
    });

});