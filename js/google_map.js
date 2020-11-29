
var google;

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    // var myLatlng = new google.maps.LatLng(40.71751, -73.990922);
    // 17.68502632946354, 83.20584653966972 - Vasavi Temple
    // 17.68490366781238, 83.20588945512236
    // 17.68487300238225, 83.20640443925127
    // 17.68487300238225, 83.20637225270173
    var myLatlng = new google.maps.LatLng(17.68502632946354, 83.20637225270173);
    // 39.399872
    // -8.224454

    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: myLatlng,

        // How you would like to style the map. 
        scrollwheel: false,
        styles: [{ "featureType": "administrative.land_parcel", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "landscape.man_made", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "labels", "stylers": [{ "visibility": "simplified" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "hue": "#f49935" }] }, { "featureType": "road.highway", "elementType": "labels", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "hue": "#fad959" }] }, { "featureType": "road.arterial", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.local", "elementType": "labels", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "hue": "#a1cdfc" }, { "saturation": 30 }, { "lightness": 49 }] }]
    };



    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');
// 17.684791343928435, 83.20586058531512
    // Create the Google Map using out element and options defined above
    // var map = new google.maps.Map(mapElement, mapOptions);
    const myLatLng = { lat: 17.684791343928435, lng: 83.20586058531512 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 20,
        center: myLatLng,
    });
    new google.maps.Marker({
        position: myLatLng,
        map,
        title: "Mani weds Maneesha",
    });
    // new google.maps.Marker({
    //     position: myLatLng,
    //     map,
    //     title: "Hello World!",
    //   });
    // map.Marker({
    //     position: myLatLng,
    //     map,
    //     title: "Hello World!",
    //   });

    var addresses = ['Brooklyn'];

    for (var x = 0; x < addresses.length; x++) {
        $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address=' + addresses[x] + '&sensor=true' + '?key=AIzaSyB5_20yGuMNE63tlN389yBh1IUEY9u3hJM', null, function (data) {
            var p = data.results[0].geometry.location
            var latlng = new google.maps.LatLng(p.lat, p.lng);
            new google.maps.Marker({
                position: latlng,
                map: map,
                icon: 'images/loc.png'
            });

        });
    }

}
google.maps.event.addDomListener(window, 'load', init);