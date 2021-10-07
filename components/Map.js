import React, { useContext, useState, useCallback } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Circle,
  InfoWindow,
  Autocomplete,
} from "@react-google-maps/api";
import { AppContext } from "../context/context";
import PopUp from "./PopUp";
import Docs from "./Docs";

export default function Map() {
  const { earthquakeData, activeQuake, setActiveQuake, showDocs, setShowDocs } =
    useContext(AppContext);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBvq24ToUr3NpA30UNZq-INvYhgE9b4KbY",
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded && earthquakeData.length > 0 ? (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: 64.773887, lng: -18.824735 }}
        zoom={6}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          minZoom: 6,
          maxZoom: 20,
          disableDefaultUI: true,
          styles: exampleMapStyles,
        }}
      >
        {earthquakeData.map((quake) => (
          <div key={quake.timestamp}>
            <Circle
              position={{
                latitude: quake.latitude,
                longitude: quake.longitude,
              }}
              radius={quake.size * 500}
              options={{
                strokeColor: "white",
                strokeOpacity: 0.2,
                strokeWeight: 1,
                fillColor: "#FF0000",
                fillOpacity: 0.55 * quake.depth,
                center: { lat: quake.latitude, lng: quake.longitude },
                radius: quake.size * 10000,
              }}
              onClick={() => {
                setActiveQuake(quake);
              }}
            ></Circle>
          </div>
        ))}
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
      {activeQuake && <PopUp title={activeQuake.humanReadableLocation} />}

      <button
        style={{
          margin: "1rem auto",
          fontWeight: "500",
          maxWidth: "80px",
        }}
        onClick={() => {
          setShowDocs(!showDocs);
        }}
      >
        read me
      </button>
      {showDocs && <Docs />}
    </div>
  ) : null;
}

// stílar

const containerStyle = {
  width: "100%",
  height: "550px",
  marginTop: "0rem",
};

const exampleMapStyles = [
  {
    featureType: "all",
    elementType: "labels.text.fill",
    stylers: [
      {
        saturation: 36,
      },
      {
        color: "#000000",
      },
      {
        lightness: 40,
      },
    ],
  },
  {
    featureType: "all",
    elementType: "labels.text.stroke",
    stylers: [
      {
        visibility: "on",
      },
      {
        color: "#000000",
      },
      {
        lightness: 16,
      },
    ],
  },
  {
    featureType: "all",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#000000",
      },
      {
        lightness: 20,
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#000000",
      },
      {
        lightness: 17,
      },
      {
        weight: 1.2,
      },
    ],
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000",
      },
      {
        lightness: 20,
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000",
      },
      {
        lightness: 21,
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#000000",
      },
      {
        lightness: 17,
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#000000",
      },
      {
        lightness: 29,
      },
      {
        weight: 0.2,
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000",
      },
      {
        lightness: 18,
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000",
      },
      {
        lightness: 16,
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000",
      },
      {
        lightness: 19,
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000",
      },
      {
        lightness: 17,
      },
    ],
  },
];

const circleOptions = {
  strokeColor: "#FF0000",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: "#FF0000",
  fillOpacity: 0.35,
};
