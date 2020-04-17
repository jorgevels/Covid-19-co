import React from "react";
import { useState, useEffect } from "react";
import { Router } from "@reach/router";
import "../assets/styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "../components/NavBar";
import Header from "../components/Header";
import { Loading } from "../components/Loading";

import Maps from "../components/Maps";
import Trend from "../pages/Trend";
import Mundial from "../pages/Mundial";
import Inf from "../pages/Inf";
import NotFound from "../pages/NotFound";

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

  /* Inicializando componentes ...*/
  if (!data) {
    return <Loading />;
  } else {
    return (
      <>
        <div className="">
          <Header />
          <div id="fix-for-navbar-fixed-top-spacing" style={{ height: "42px" }}>
            &nbsp;
          </div>
          <div className="container mt-3">
            <div className="row">
              {/* <div className="col-12 col-md-5">
              <Sidebar />
            </div> */}
              <div className="map-container col-12 col-md-12">
                {/* <Maps countriesinfo={data} /> */}
              </div>
            </div>
          </div>
        </div>
        <Router>
          <NotFound default />
          <Maps path="covid-19-co/" countriesinfo={data} />
          <Mundial path="/mundial" />
          <Trend path="/trend" />
          <Inf path="/inf" />
        </Router>
        <NavBar />
      </>
    );
  }
}
