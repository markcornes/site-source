import React, {useState, useEffect} from 'react';
import {AdvancedMarker, APIProvider, Map, Pin} from '@vis.gl/react-google-maps';
import {Polyline} from './polyline.tsx'; // import from your local file
import { MarkerWithInfowindow } from './marker-with-infowindow.tsx';

function ShowImage() {
  console.log("Clicked!");
}

function ImageMarker(props) {
  const [clicked, setClicked] = useState(false);
  const image = (
    <img src="https://i.imgur.com/JDJpwwW.jpg" width={100} alt="beep"/>
  );
  const pinGlyph = (
    <Pin background={"#ff0000"} glyphColor={"#ffffff"} borderColor={"#000000"} scale={.7}/>
  );
  return (
    <AdvancedMarker
      position={props.position}
      title={props.title}
      onClick={() => {
        setClicked(!clicked);
        // ShowImage();
      }
      }
      >
      <div>
        {clicked ? pinGlyph : ""}
        {!clicked ? image : "byeee"}
      </div>
      
    </AdvancedMarker>
  );
}



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

  const start_flag = {
    url: '/images/start_flag.png',
    scaledSize: new window.google.maps.Size(24, 24),
  }
  const finish_flag = {
    url: '/images/finish_flag.png',
    scaledSize: new window.google.maps.Size(24, 24),
  }

  return (
    <APIProvider apiKey={"AIzaSyBNvdrX5TxD_tplajh6HRseKWvG19bYmKU"}>
      <Map
        mapId={"DEMO_MAP_ID"}
        mapTypeId={"terrain"}
        defaultZoom={5}
        defaultCenter={{ lat: data[Math.floor(data.length/2)].lat, lng: data[Math.floor(data.length/2)].lng }}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
        // style={{width: '100%', height: '100%', position: 'relative'}} // IMPORTANT FOR FILLING THE CONTAINER
      >
        <Polyline path={data} strokeColor='#ff4229c5' strokeWeight='2'/>
        <AdvancedMarker position={{ lat: data[0].lat, lng: data[0].lng }} anchorLeft={'0%'}>
          <img src={"/images/start_flag.png"} width={24} height={24}/>
        </AdvancedMarker>
        <AdvancedMarker position={{ lat: data[data.length-1].lat, lng: data[data.length-1].lng }} anchorLeft={'0%'}>
          <img src={"/images/finish_flag.png"} width={24} height={24}/>
        </AdvancedMarker>
        {/* <ImageMarker
        position={{ lat: data[Math.floor(data.length/2)].lat, lng: data[Math.floor(data.length/2)].lng }}
        title={"Title!"}
        icon={"/images/finish_flag.png"}
        width={24}
        height={24}/> */}
      </Map>
    </APIProvider>
  );
}

export default MapMaker