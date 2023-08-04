function myGetCoords() {
    owmGeocode.city = document.getElementById("town").value;

    owmGeocode.request(myGetForecast);
}

function myGetForecast() {
    owmForecast.lat = owmGeocode.getLat();
    owmForecast.lon = owmGeocode.getLon();

    owmForecast.request(myDisplay);
}

function myDisplay() {
    displayLocation();
    displayForecast();
}