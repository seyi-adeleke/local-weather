/**
 * Created by seyi adeleke on 3/8/2016.
 */
$(document).ready(function(){
    //api for city and country
    var cityUrl = 'http://ip-api.com/json';
    var weatherApi = 'http://api.openweathermap.org/data/2.5/weather?q=Lagos,Ng&appid=44db6a862fba0b067b1930da0d769e98';
    $.getJSON(cityUrl).done (function (location) {
            $('#country').html(location.country);
            $('#city').html(location.city);
            var locationCoords = document.getElementById("location");
           locationCoords.innerHTML = "lat:"+ location.lat+ ",";
           locationCoords.innerHTML += "long:" + location.lon;
            $.getJSON(openWeatherMap, {
            lat: location.lat,
            lon: location.lon,
            units: 'metric',
            APPID: APIKEY
        })

    });
});