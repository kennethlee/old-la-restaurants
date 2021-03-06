$(document).ready(function(){
  // Function: Formatting pop-up
  function formatPopup(name, address, city, zip, year, description, url){
    if (description === "NULL"){
      description = 'No description available';
    }
    return "<h3><b>" + name + "</b></h3><hr />" + "<b>Year Established:</b> " + year + "<br />" + "<b>Description: </b>" + description + "<br />" + "<b>Address: </b>" + address + ", " + city + " " + zip + "<br />" + '<a href="' + url + '" >Website</a>';
  }

  // Function: calculate color by decade
  function getColorBy(year) {
    var color;
    if (year < 1910) {
      color = "#00ffff";
    } else if (year > 1910 && year < 1920) {
      color = "#00c8ff";
    } else if (year > 1920 && year < 1930) {
      color = "#0096ff";
    } else if (year > 1930 && year < 1940) {
      color = "#0064ff";
    } else if (year > 1940 && year < 1950) {
      color = "#6432ff";
    } else if (year > 1950 && year < 1960) {
      color = "#9600ff";
    } else if (year > 1960 && year < 1970) {
      color = "#c800ff";
    } else if (year > 1970 && year < 1980) {
      color = "#ff00ff";
    } else {
      color = "#ff6cd9";
    }
    return color;
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
    var name        = feature.properties.Name;
    var address     = feature.properties.Address;
    var city        = feature.properties.City;
    var zip         = feature.properties.Zip;
    var year        = feature.properties.Year;
    var description = feature.properties.Descriptio;
    var url         = feature.properties.Link;
    var popupText   = formatPopup(name, address, city, zip, year, description, url);
    layer.bindPopup(popupText);
  };

  // Add data layer
  var geojsonLayer = new L.GeoJSON.AJAX("data/historic_restaurants.geojson",{
    onEachFeature: onEachFeature,
    pointToLayer: function(feature, latlon) {
      return L.circleMarker(latlon,{
        fillColor:   getColorBy(feature.properties.Year),
        color:       '#FFFFFF',
        weight:      2,
        opacity:     1,
        fillOpacity: 0.5,
        radius:      6
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
    years.forEach(function(year, index) {
      div.innerHTML +=
          '<i style="background:' + getColorBy(year + 1) + '"></i> ' +
          year + (years[index + 1] ? '&ndash;' + years[index + 1] + '<br>' : '+');
    })
    return div;
  };
  legend.addTo(map);
});
