var apikey;
const google = window.google;

async function InitMap () {
  
  const json_data = await fetch("data.json")
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: json_data[0],
    mapTypeId: "terrain",
  });
  const bikeRoute = new google.maps.Polyline({
    path: json_data,
    geodesic: true,
    strokeColor: "#ff00008f",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  bikeRoute.setMap(map);
}

export default InitMap;