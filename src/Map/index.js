import {APIProvider, Map} from '@vis.gl/react-google-maps';
import {Polyline} from './polyline.tsx'; // import from your local file

// const json_data = await fetch("data.json")
//     .then((res) => res.json())
//     .then((json) => {
//       return json;
//     });

 const flightPlanCoordinates = [
    { lat: 37.772, lng: -122.214 },
    { lat: 21.291, lng: -157.821 },
    { lat: -18.142, lng: 178.431 },
    { lat: -27.467, lng: 153.027 },
  ];

const MapMaker = () => (
  <APIProvider apiKey={'AIzaSyAkTQuO266PaDTfzMNR6zPA-zbsivd5ZYM'}>
    <Map
      defaultZoom={3}
      defaultCenter={{lat: 22.54992, lng: 0}}
      gestureHandling={'greedy'}
      disableDefaultUI={true}
    />
    {/* <Map defaultZoom={5} defaultCenter={{lat: 24, lng: -72}}> */}
      {/* Draw the Bermuda triangle */}
      {/* <Polyline
        path={flightPlanCoordinates}
      />

      {/* Draw the Bermuda triangle with an encoded path */}
      {/* <Polyline encodedPath={'o~h|CnbmhN~irk@_m{tAw`qsAgyhG'} /> } */}
    {/* </Map> */}
  </APIProvider>
);

export default MapMaker