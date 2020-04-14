import React from "react";
import { useState, useEffect } from "react";
import "../assets/styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Maps from "./Maps";
import Trend from "./Trend";
import { Loading } from "../components/Loading";

export default function App() {
  const [data, setData] = useState("");

  // Haciendo el llamado de los datos del personal afectado en Colombia
  const getData = async () => {
    const response = await fetch(
      "https://api-covi-19.jorgevelasquez006.now.sh/API/covi19.json"
    );

    const data = await response.json();
    data.map((item) => {
      item.key = item.countryregion;
    });
    setData(data);
  };

  useEffect(() => {
    if (!data) {
      getData();
    }
  }, []);

  if (!data) {
    /* Inicializando componentes ...*/
    return <Loading />;
    {
    }
  } else {
    return (
      <div className="">
        <Header />
        <div id="fix-for-navbar-fixed-top-spacing" style={{ height: "38px" }}>
          &nbsp;
        </div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-12 col-md-5">
              <Sidebar />
            </div>
            <div className="map-container col-12 col-md-7">
              <Maps countriesinfo={data} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
