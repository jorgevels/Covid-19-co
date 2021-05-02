import React from "react";
import { useState, useEffect } from "react";
import Trend from "./Trend";
import { Loading } from "../components/Loading";
import { FaUserCheck, FaUser, FaCross } from "react-icons/fa";
const SIZE = "32px";

function Sidebar() {
  const briefUrl =
    "https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/brief";
  const colBriefUrl =
    "https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest?iso2=CO";

  const [data, setData] = useState("");

  const getData = async () => {
    const responseBrief = await fetch(briefUrl);
    const dataBrief = await responseBrief.json();
    const responseCol = await fetch(colBriefUrl);
    const dataCol = await responseCol.json();
    /* console.log(dataCol); */
    const response = {
      brief: dataBrief,
      colBrief: dataCol[0],
    };
    setData(response);
  };

  useEffect(() => {
    if (!data) {
      getData();
    }
  }, []);

  if (!data) {
    // Cargando los datos de la afetacion mundial
    return <Loading />;
  }

  return (
    <div
      className="container-fluid-nav text-center .bg-light text-black .bg-secondary"
      style={{
        height: "90vh",
      }}
    >
      <div className="mar" style={{ marginTop: "0px" }}>
        <h4>Afectación a nivel mundial</h4>
      </div>
      <ul>
        <FaUserCheck className="logo-confirmed" style={{ color: "#74121D" }} />
        <li>
          Total confirmados <br />
          <span className="danger"> {data.brief.confirmed}</span>
        </li>
        <FaUser className="logo-recovered" style={{ color: "#297045" }} />
        <li>
          Total recuperados <br />
          <span className="success">{data.brief.recovered}</span>
        </li>
        <FaCross className="logo-deaths" style={{ color: "#36494E" }} />
        <li>
          Muertes <br /> <span className="secondary">{data.brief.deaths}</span>
        </li>
      </ul>
      <div className="linea"></div>
      <h4>Afectación en Colombia</h4>
      <ul>
        <FaUserCheck className="logo-confirmed" style={{ color: "#74121D" }} />
        <li>
          Total confirmados
          <br />
          <span className="danger ">{data.colBrief.confirmed}</span>
        </li>

        <FaUser className="logo-recovered" style={{ color: "#297045" }} />
        <li>
          Total recuperados
          <br />
          <span className="success">{data.colBrief.recovered}</span>
        </li>
        <FaCross className="logo-deaths" style={{ color: "#36494E" }} />
        <li className="final">
          Muertes <br />{" "}
          <span className="secondary">{data.colBrief.deaths}</span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
