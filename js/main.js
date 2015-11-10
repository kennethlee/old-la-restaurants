function formatPopup(name,address,city,zip,year,description,url){
  if (description === "NULL"){
    description = 'No description available';
  }
  return "<h3><b>" + name + "</b></h3><hr />" + "<b>Year Established:</b> " + year + "<br />" + "<b>Description: </b>" + description + "<br />" + "<b>Address: </b>" + address + ", " + city + " " + zip + "<br />" + '<a href="' + url + '" >Website</a>';
}

var map;
$(document).ready(function(){
  map = L.map('map').setView([34,-118],10);
  //find many basemap options @ http://leaflet-extras.github.io/leaflet-providers/preview/
  //thunderforest landscape

  //uses chan's mapbox access token
  L.tileLayer('https://{s}.tiles.mapbox.com/v4/maptimelaomar.f91a81fd/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiY3N0ZXJsaW5nIiwiYSI6IndFLXM2dkkifQ.CHZ2w6yCJWHbfllYo3AIcw', {
    attribution: '&copy; <a href="http://www.opencyclemap.org">OpenCycleMap</a>, &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
  }).addTo(map);

  var onEachFeature = function(feature, layer){
    var name = feature.properties.Name;
    var address = feature.properties.Address;
    var city = feature.properties.City;
    var zip = feature.properties.Zip;
    var year = feature.properties.Year;
    var description = feature.properties.Descriptio;
    var url = feature.properties.Link;
    var popupText = formatPopup(name,address,city,zip,year,description,url);
    layer.bindPopup(popupText);
  };

  var geojsonLayer = new L.GeoJSON.AJAX("data/historic_restaurants.geojson",{
    onEachFeature:onEachFeature,
    pointToLayer: function(feature, latlon) {
      return L.circleMarker(latlon,{
        fillColor:colorFunc(feature.properties.Year),
        color: '#FFF',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.5,
        radius: 6
      })
    }});
    geojsonLayer.addTo(map);
  });

  function colorFunc(d) {
    var d = String(d);
    return d <1910 ? "#00ffff" :
    d >1910 && d<1920? "#00c8ff" :
    d >1920 && d<1930? "#0096ff" :
    d >1930 && d<1940? "#0064ff" :
    d >1940 && d<1950? "#6432ff" :
    d >1950 && d<1960? "#9600ff" :
    d >1960 && d<1970? "#c800ff" :
    d >1970 && d<1980? "#ff00ff" :
    "#ff6cd9";
  }
