import React, {useState, useEffect} from 'react';
import {APIProvider, Map} from '@vis.gl/react-google-maps';
import {Polyline} from './polyline.tsx'; // import from your local file



 const flightPlanCoordinates = [
    { lat: 37.772, lng: -122.214 },
    { lat: 21.291, lng: -157.821 },
    { lat: -18.142, lng: 178.431 },
    { lat: -27.467, lng: 153.027 },
  ];


// async function MapMaker() {

//   const json_data = await fetch("./data.json")
//     .then((res) => res.json())
//     .then((json) => {
//       return json;
//     });


//   return (
//   <APIProvider apiKey={'AIzaSyAkTQuO266PaDTfzMNR6zPA-zbsivd5ZYM'}>
//     <Map
//       defaultZoom={2}
//       defaultCenter={{lat: flightPlanCoordinates[2].lat, lng: flightPlanCoordinates[2].lng}}
//       gestureHandling={'greedy'}
//       disableDefaultUI={true}>
//       <Polyline path={json_data} />
//     </Map>

      
//   </APIProvider>
//   );
// };

function MapMaker() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch("/data.json");
        if (!res.ok) throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
        const json = await res.json(); // JSON.parse error will surface here
        if (mounted) setData(json);
      } catch (err) {
        if (mounted) setError(err.message || String(err));
        console.error("Failed to load data.json:", err);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  if (error) return <div>Error loading data: {error}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <APIProvider apiKey={"AIzaSyAkTQuO266PaDTfzMNR6zPA-zbsivd5ZYM"}>
      <Map
        defaultZoom={5}
        defaultCenter={{ lat: data[0].lat, lng: data[0].lng }}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      >
        <Polyline path={data} strokeColor='red'/>
      </Map>
    </APIProvider>
  );
}

export default MapMaker