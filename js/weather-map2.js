"use strict";
// $.get("https://api.darksky.net/forecast/506ee2f6ac7798a67c04f69f807993cd/29.4241, -98.4936", {
//
// }).done(function(data) {
//     console.log(data);
// });
$.get("http://api.openweathermap.org/data/2.5/forecast?", {
    APPID: "56c01d6310f8ee5bf90905ea0fce8704",
    lat: "29.4241",
    lon: "-98.4936",
    units: "imperial"
}).done(function(data){
    console.log(data);
    console.log(data.list[0].main.temp_max);
    getForecast(data);
});
function getForecast(info){
    $("#day1").html("");
    $("#day2").html("");
    $("#day3").html("");
    $("#cityName").html("");
    $("#cityName").append(" "+info.city.name);
    for(var i = 0; i<3;i++) {
        var day = $('#day' + (i + 1));
        console.log(day);
        var dayCount = i * 8;
        var tempHigh = parseInt(info.list[dayCount].main.temp_max);
        var tempLow = parseInt(info.list[dayCount].main.temp_min);
        var weatherType = info.list[dayCount].weather[0].main;
        var weatherInfo = info.list[dayCount].weather[0].description;
        var humidity = info.list[dayCount].main.humidity;
        var wind = info.list[dayCount].wind.speed;
        var pressure = info.list[dayCount].main.pressure;
        var icon = info.list[dayCount].weather[0].icon;
        day.append("<h2>"+tempHigh+"°/"+tempLow+"°</h2>");
        day.append("<img src = 'http://openweathermap.org/img/w/"+icon+".png'>");
        day.append("<p>"+weatherType+": "+weatherInfo);
        day.append("<p>Humidity: " + humidity);
        day.append("<p>Wind: " + wind);
        day.append("<p>Pressure: " + pressure);
    }
}
var mapOptions = {
    zoom: 5,
    // This sets the center of the map at our location
    center: {
        lat: 29.467066,
        lng: -98.624418
    },
    mapTypeId: 'roadmap'
};
var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
var marker = new google.maps.Marker({
    position: mapOptions.center,
    map: map,
    draggable: true
});
var newLocation = google.maps.event.addListener(marker, 'dragend', function() {
    var newLat = marker.getPosition().lat();
    var newLng = marker.getPosition().lng();
    newWeather(newLat, newLng);
});
function newWeather(lat, lng){
    $.get("http://api.openweathermap.org/data/2.5/forecast?", {
        APPID: "56c01d6310f8ee5bf90905ea0fce8704",
        lat: lat,
        lon: lng,
        units: "imperial"
    }).done(function(data){
        console.log(data);
        console.log(data.list[0].main.temp_max);
        getForecast(data);
    });
}