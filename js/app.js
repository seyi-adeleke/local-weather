/**
 * Created by seyi adeleke on 3/8/2016.
 */
$(document).ready(function(){
    //api for city and country
    var cityUrl = 'http://ip-api.com/json';

    $.getJSON(cityUrl).done (function (location) {
        $('#city').html(location.city+",");
        $('#country').html(location.country);
         /* var locationCoords = document.getElementById("location");
         locationCoords.innerHTML = "LAT:"+ location.lat + ",";
         locationCoords.innerHTML += "LONG:" + location.lon;
         */

        var weatherApi ='http://api.openweathermap.org/data/2.5/weather?lat='+location.lat+'&lon='+location.lon+'&units=metric&appid=19037534c7624a5254a20b799495dbcc';
        $.getJSON(weatherApi).done(function(weather){
            $("#current_weather").html(weather.weather[0].description);
            $("#temperature").html(weather.main.temp + " °C");
            $( "#button1" ).click(function()
            {
                var CelsiusTemp=weather.main.temp.toFixed(2);
                $("#temperature").html(CelsiusTemp + " °C");

            });
            $("#button2").click(function()
            {
                var CelsiusTemp =weather.main.temp.toFixed(2);
                var fahrenheitTemp = (CelsiusTemp  * (9/5) + 32).toFixed(2);
                $("#temperature").html(fahrenheitTemp +" °F" );
            });
            var weather_icon = weather.weather[0].description;
            if(weather_icon == "few clouds"){
                $("#icons").addClass("wi-cloud");
            }
            else if(weather_icon == "light rain"){
                $("#icons").addClass("wi-showers");
            }
            else if(weather_icon == "clear sky"){
                $("#icons").addClass("wi-day-sunny");
            }
            else if(weather_icon == "broken clouds"){
                $("#icons").addClass("wi-cloudy");
            }
        });

    });
    var buttonHighlightStyles = {
        'border-color':'aliceblue',
        'color':'aliceblue'
    };
    var buttonUnhighlightStyles = {
        "border-color":"gray",
        "color":"gray"
    };


    $('#button1').click(function(){
        $('#button2').css(buttonUnhighlightStyles);
        $('#button1').css(buttonHighlightStyles);
    });
    $('#button2').click(function(){
        $('#button1').css(buttonUnhighlightStyles);
        $('#button2').css(buttonHighlightStyles);

    });



});