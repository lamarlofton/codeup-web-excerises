// (function() {
//     "use strict";
//
// $.ajax({
//     url: 'http://api.openweathermap.org/data/2.5/weather',
//     type: 'GET',
//     data: {
//         APPID: '56c01d6310f8ee5bf90905ea0fce8704',
//         q: 'San Antonio, US',
//         units: 'imperial'
//     }
// }).done(function(data){
//     console.log(data);
// });
//
// // $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
// //     APPID: '56c01d6310f8ee5bf90905ea0fce8704',
// //     lat: 29.423017,
// //     lon:-98.48527,
// //     units: 'imperial'
// // }).done(function(data) {
// //     console.log(data);
// // });
//
// var marker;
// function initMap() {
//     var mapCanvas = document.getElementById('map-canvas');
//
//     var mapOptions = {
//         zoom: 10,
//         center: {
//             lat:  29.423017,
//             lng: -98.48602
//         }
//     }
//     var map = new google.maps.Map(mapCanvas, mapOptions);
// };
//
// marker = new google.maps.Marker({
//     map: map,
//     draggable: true,
//     animation: google.maps.Animation.DROP,
//     icon: image
// });
//
//
// marker.addListener('click', function(){
//     var infowindow = new google.maps.InfoWindow({
//         content: ''
//     });
//     infowindow.open(map,marker);
// });
// });


var temp;
var loc;
var icon;
var humidity;
var wind;
var direction;

function sendRequest(url) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var data = JSON.parse(xmlhttp.responseText);
            var weather = {};
            weather.icon = data.weather[0].id;
            weather.humidity = data.main.humidity;
            weather.wind = data.wind.speed;
            weather.direction = data.wind.deg;
            weather.loc = data.name;
            weather.temp = data.main.temp;
            update(weather);
            // console.log(humidity);
        }
    }

 };
    // xmlhttp.open('GET', url, true);
    // xmlhttp.send();



function update (weather) {
    wind.innerHTML = weather.wind;
    direction.innerHTML =weather.direction;
    humidity.innerHTML = weather.humidity;
    loc.innerHTML = weather.loc;
    temp.innerHTML =weather.temp;

}


window.onload = function() {
    temp = document.getElementById('temperture');
    loc = document.getElementById('location');
    icon = document.getElementById('icon');
    humidity = document.getElementById('humidity');
    wind = document.getElementById('wind');
    direction = document.getElementById('direction');


   updateByZip(78258);
// }

function updateByZip(zip) {
    var url ='http://api.openweathermap.org/data/2.5/weather?' + 'zip=' + zip +
        "&APPID = " + APPID;
    sendRequest(url);
}

