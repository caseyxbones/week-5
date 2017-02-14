/* =====================
 Copy your code from Week 4 Lab 2 Part 2 part2-app-state.js in this space
===================== */

var phillyBikeCrashesDataUrl = "https://raw.githubusercontent.com/CPLN692-MUSA611/datasets/master/json/philadelphia-bike-crashes-snippet.json"; // Shortcut for the crash data URL

//DOWNLOAD CRASH DATA:
var downloadData = $.ajax(phillyBikeCrashesDataUrl);

// PARSE CRASH DATA:
var parseData = function(ajaxResponseValue) {
  return(JSON.parse(ajaxResponseValue));
};

// USE PARSED DATA TO CREATE MARKERS FROM LAT & LONG:
var makeMarkers =  function (parsedInformation) {
    var markersTemp = _.map(parsedInformation, function(crash) {
      return L.marker([crash.lat_final, crash.long_final]);
    }
  );
  return markersTemp;
};

// PLOT THE MARKERS YOU CREATED IN THE PREVIOUS STEP:
var plotMarkers = function(markersAll) {
    _.each(markersAll, function (individualMarker) {
      individualMarker.addTo(map);
    }
    );
};

// THIS WILL REMOVE MARKERS, CAN BE USED WITH A RESET BUTTON LATER PERHAPS:
var removeMarkers = function(markersAll) {
    _.each(markersAll, function (individualMarker){
      map.removeLayer(individualMarker);
    });
};

// THIS WILL ALLOW A USER TO FILTER CRASH DATA BY 1 TO SEE IF A CRASH WAS FATAL.
// THIS IS A REALLY CRAPPY, ROUGH WAY TO ACCOMPLISH THIS GOAL.
var filterData = function(allParsedData) {
  return _.filter(allParsedData, function(crashObject){
    return crashObject.FATAL === 1;
  });
};


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

/* =====================
 CODE EXECUTED HERE!
===================== */

downloadData.done(function(data) {
  // console.log("Ajax data pull complete, downloadData done");
  var parsed = parseData(data);
  var filtered = filterData(parsed);
  // console.log(parsed);
  var markers = makeMarkers(filtered);
  // console.log("makeMarkers executed, complete");
  plotMarkers(markers);
  // console.log("plotMarkers executed, complete");
  // console.log(filtered);
  // removeMarkers(markers);                                    // this is currently hidden so that I can test the filter function
});
