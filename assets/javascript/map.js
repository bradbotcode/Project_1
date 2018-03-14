var preloadArr = [{
    city: "Boston",
    state: "Massachusetts"
},{
    city: "Chicago",
    state: "Illinois"
},{
    city: "Orlando",
    state: "Florida"
},{
    city: "Sacramento",
    state: "California"
}];
var randomCity = Math.floor(Math.random() * (preloadArr.length))

var city = preloadArr[randomCity].city;
var state = preloadArr[randomCity].state;
var openMap = function() {
    $("#map").empty();
    var apiKey = "AIzaSyBQA5YHnpwER_Ix0gNhdsp3onqAh8gTWjY"
    var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + city + "," + state + "&key=AIzaSyBQA5YHnpwER_Ix0gNhdsp3onqAh8gTWjY"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        var latitude = response.results[0].geometry.location.lat
        console.log(latitude);
        var longitude = response.results[0].geometry.location.lng
        console.log(longitude)
    
    
        function initMap() {

            var uluru = {lat: latitude, lng: longitude};
            var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: uluru
            });

            var marker = new google.maps.Marker({
            position: uluru,
            map: map
            });
        };

    initMap();
    });
};
// Functions that runs on page load
$(function(){
 

    

    openMap();
});
// Functions that run on click
$(document).on("click", "#submit-button", function(){
    city = $("#city-input").val().trim();
    state = $("#state-input").val().trim();
    openMap();
});