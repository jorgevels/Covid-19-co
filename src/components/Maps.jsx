import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import { Icon } from "leaflet";

const myIcon = new Icon({
  iconUrl:
    "https://res.cloudinary.com/imagesfull/image/upload/v1586370527/like/icon-0_akbmne.png",
  iconSize: [18, 18],
});

function Maps(props) {
  const state = {
    lat: 3.009284,
    lng: -73.334665,
    zoom: 5,
  };
  if (!props) {
    return null;
  }

  return (
    <div className="map-frame">
      <Map center={state} zoom={state.zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {props.countriesinfo.map((item) => {
          if (item.lat !== null && item.lng !== null) {
            return (
              <Marker
                position={[item.location.lat, item.location.lng]}
                key={item.key}
                icon={myIcon}
              >
                <Popup>
                  <div>
                    <p>
                      <strong>{item.key}</strong>
                    </p>
                    <p className="text-secondary">
                      confirmados: {item.confirmed}
                    </p>
                    <p className="text-success">
                      {" "}
                      recuperados: {item.recovered}
                    </p>
                    <p className="text-danger">muertes: {item.deaths} </p>
                  </div>
                </Popup>
              </Marker>
            );
          } else {
            return;
          }
        })}
      </Map>
    </div>
  );
}

export default Maps;
