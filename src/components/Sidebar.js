import React from "react";
import { useState, useEffect } from "react";
import Trend from "./Trend";
import { Loading } from "../components/Loading";

export default function Sidebar() {
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
    /* {
       <div>Buscando datos...</div>; 
    } */
  }

  return (
    <div>
      <h6>Afectacion a nivel mundial</h6>
      <ul>
        <li>
          Casos recuperados:{" "}
          <span className="text-success">{data.brief.recovered}</span>
        </li>
        <li>
          Casos confirmados:{" "}
          <span className="text-secondary">{data.brief.confirmed}</span>
        </li>
        <li>
          Muertes: <span className="text-danger">{data.brief.deaths}</span>
        </li>
      </ul>
      <h6>Afectacion en Colombia</h6>
      <ul>
        <li>
          Casos recuperados:{" "}
          <span className="text-success">{data.colBrief.recovered}</span>
        </li>
        <li>
          Casos confirmados:{" "}
          <span className="text-secondary">{data.colBrief.confirmed}</span>
        </li>
        <li>
          Muertes: <span className="text-danger">{data.colBrief.deaths}</span>
        </li>
      </ul>
      {/*  <Trend /> */}
    </div>
  );
}
