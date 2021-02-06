// npm i google-maps-react

// Zoom:
// 1: World
// 5: Landmass/continent
// 10: City
// 15: Streets
// 20: Buildings

const coordinates = {
  denver: { lat: 39.75260685, lng: -104.990791559375 },
  osa: { lat: 8.633170199999999, lng: -83.58292379837557 },
  cali: { lat: 34.2489684, lng: -117.1913321 },
  utila: { lat: 16.09654545, lng: -86.94879977368984 },
  andros: { lat: 24.736871100000002, lng: -78.02356424461638 },
  galapagos: { lat: -0.62881505, lng: -90.3638752022324 },
  amazon: { lat: -2.2625953010152324, lng: -71.38916015625001 },
  tybee: { lat: 31.9987321, lng: -80.8469427 },
  catskills: { lat: 42.01869237684385, lng: -74.53125000000001 },
  chicago: { lat: 41.8755616, lng: -87.6244212 },
  peoria: { lat: 40.6938609, lng: -89.5891008 },
  cornell: { lat: 41.9222443, lng: -91.4171209 },
  lagoaHumanoide: { lat: -21.80507955432942, lng: -49.090712070465095 },
};

export default coordinates;

// navigator.geolocation.getCurrentPosition(pos.coords)

// export default function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     console.log(showPosition);
//   }
// }

// function showPosition(position) {
//   var latlon = position.coords.latitude + "," + position.coords.longitude;

//   var img_url = `https://maps.googleapis.com/maps/api/staticmap?center=
//   ${latlon}&zoom=14&size=200x300&sensor=false&key=AIzaSyCMkt4nZU-9Wmu0t5nQMu_xgCD_3d8QF_M`;

//   document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
// }
