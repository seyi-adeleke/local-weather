/**
 * Created by seyi adeleke on 3/8/2016.
 */
$(document).ready(function(){
    //api for city and country
    var url = 'http://ipinfo.io/json'
    $.getJSON(url)
        .done (function (location) {
            $('#country').html(location.country);
            $('#city').html(location.city);
            $('#latitude').html(location.latitude);
            $('#longitude').html(location.longitude);

        });
});