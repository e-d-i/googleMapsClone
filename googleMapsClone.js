"use strict";

const MapBoxAccessToken = "pk.eyJ1IjoiZS1kLWkiLCJhIjoiY2t0MDRobHNpMXJ4dzJ3bGd0eTJiaHI0ZyJ9.qapF5-tFmI3BlWQ0GtiZnw";

navigator.geolocation.getCurrentPosition(successGeolocation, errorGeolocation, { enableHighAccuracy: true});

function setupMap(defaultPosition) {
  const map = new mapboxgl.Map({
    accessToken: MapBoxAccessToken,
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11?optimize=true',
    center: defaultPosition,
    zoom: 12,
    pitch: 15
  });

  const mapNavigatonControls = new mapboxgl.NavigationControl();
  map.addControl(mapNavigatonControls);

  const mapDirectionControls = new MapboxDirections({
    accessToken: MapBoxAccessToken
  });
  map.addControl(mapDirectionControls, "top-left");
}

function successGeolocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorGeolocation() {
  setupMap([116.397, 39.9156]);
}