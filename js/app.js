/**
 * Created by seyi adeleke on 3/8/2016.
 */
$(document).ready(function(){
    //api for city and country
    var cityUrl = 'http://ip-api.com/json';

    $.getJSON(cityUrl).done (function (location) {
        $('#country').html(location.country);
        $('#city').html(location.city);
        var locationCoords = document.getElementById("location");
        locationCoords.innerHTML = "lat:"+ location.lat+ ",";
        locationCoords.innerHTML += "long:" + location.lon;
        var weatherApi ='http://api.openweathermap.org/data/2.5/weather?lat='+location.lat+'&lon='+location.lon+'&appid=19037534c7624a5254a20b799495dbcc';

        $.getJSON(weatherApi,{
            lat:location.lat,
            lon:location.lon
        }).done(function(weather) {
            $("#temperature").text(Math.round(weather.main.temp));

        })
    });
});