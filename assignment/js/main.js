/* =====================
 Copy your code from Week 4 Lab 2 Part 2 part2-app-state.js in this space
===================== */

// You will need to use jQuery to select the button and create a click
// event on it. When the button is clicked, it should run a function that selects
// the three input fields, checks their values, and assigns those values to
// variables. Those variables should be used in your application to replace
// previously hardcoded data.

$(document).ready(function() {

  $("#url-input").text();
        $("#url-input").prop("disabled", false);
  $("#lat-input").text();
        $("#lat-input").prop("disabled", false);
  $("#long-input").text();
        $("#long-input").prop("disabled", false);
// FUCK YES I DID IT:
$("button").click(function() {
    var userForm = {};
        userForm.dataURL = $("#url-input").val();
        userForm.latKey = $("#lat-input").val();
        userForm.longKey = $("#long-input").val();
  var dataURL = userForm.dataURL;
      // console.log("Pulling data from: " + dataURL);
  var latKey = userForm.latKey;
      // console.log("The Latitude Key is " + latKey);
  var longKey = userForm.longKey;
      // console.log("The Longitude Key is " + longKey);
  var downloadData = $.ajax(dataURL);
  var parseData = function(ajaxResponseValue) {
      return(JSON.parse(ajaxResponseValue));
  };
  var makeMarkers =  function (parsedInformation) {
      var markersTemp = _.map(parsedInformation, function(crash) {
        // console.log(L.marker([crash.LAT, crash.LNG]));
        console.log(latKey, longKey);
        return L.marker([crash[latKey], crash[longKey]]);
      }
    );
    return markersTemp;
  };
  var plotMarkers = function(markersAll) {
      _.each(markersAll, function (individualMarker) {
        individualMarker.addTo(map);
      }
      );
  };
  downloadData.done(function(data) {
    var parsed = parseData(data);
    // var filtered = filterData(parsed);
    var markers = makeMarkers(parsed);
    plotMarkers(markers);
  });

});
});


/* =====================
 Leaflet setup - feel free to ignore this
===================== */

var map = L.map('map', {
  center: [39.9522, -75.1639],
  zoom: 14
});
var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);
