$(document).ready(function(){
  // Function: Formatting pop-up
  function formatPopup(name,address,city,zip,year,description,url){
    if (description === "NULL"){
      description = 'No description available';
    }
    return "<h3><b>" + name + "</b></h3><hr />" + "<b>Year Established:</b> " + year + "<br />" + "<b>Description: </b>" + description + "<br />" + "<b>Address: </b>" + address + ", " + city + " " + zip + "<br />" + '<a href="' + url + '" >Website</a>';
  }

  // Function: calculate color by decade
  function calculateColorDecade(year) {
    return year < 1910 ? "#00ffff" :
    year > 1910 && year < 1920? "#00c8ff" :
    year > 1920 && year < 1930? "#0096ff" :
    year > 1930 && year < 1940? "#0064ff" :
    year > 1940 && year < 1950? "#6432ff" :
    year > 1950 && year < 1960? "#9600ff" :
    year > 1960 && year < 1970? "#c800ff" :
    year > 1970 && year < 1980? "#ff00ff" :
    "#ff6cd9";
  }

  // Create map
  var map;
  map = L.map('map').setView([34,-118],10);
  // Add map baselayer - uses chan's mapbox access token
  L.tileLayer('https://{s}.tiles.mapbox.com/v4/maptimelaomar.f91a81fd/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiY3N0ZXJsaW5nIiwiYSI6IndFLXM2dkkifQ.CHZ2w6yCJWHbfllYo3AIcw', {
    attribution: '&copy; <a href="http://www.opencyclemap.org">OpenCycleMap</a>, &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
  }).addTo(map);

  // Add each restaurant's popup
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

  // Add data layer
  var geojsonLayer = new L.GeoJSON.AJAX("data/historic_restaurants.geojson",{
    onEachFeature:onEachFeature,
    pointToLayer: function(feature, latlon) {
      return L.circleMarker(latlon,{
        fillColor:calculateColorDecade(feature.properties.Year),
        color: '#FFF',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.5,
        radius: 6
      })
    }
  });
  geojsonLayer.addTo(map);

  // Add legend
  var legend = L.control({position: 'bottomright'});
  legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend'),
        years = [1900,1910,1920,1930,1940,1950,1960,1970,1980],
        labels = [];
    for (var i = 0; i < years.length; i++) {
        div.innerHTML +=
            '<i style="background:' + calculateColorDecade(years[i] + 1) + '"></i> ' +
            years[i] + (years[i + 1] ? '&ndash;' + years[i + 1] + '<br>' : '+');
    }
    return div;
  };
  legend.addTo(map);
});
