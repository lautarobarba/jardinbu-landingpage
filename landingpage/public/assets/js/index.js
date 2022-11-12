// Click over link will collapse navbar
$(".nav-link").on("click", function () {
  $("#navbarLinks").collapse("hide");
});

// Leaflet
var map = L.map('map').setView([-54.781111, -68.292613], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  minZoom: 12,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([-54.781111, -68.292613]).addTo(map);
marker.bindPopup("Jardín Botánico Ushuaia").openPopup();
