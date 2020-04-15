import React from "react";
import { useState, useEffect } from "react";
import { VegaLite } from "react-vega";
import { Loading } from "../components/Loading";
import "../assets/styles/App.css";

export default function Trend() {
  const url =
    "https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/timeseries?iso2=CO";

  const [data, setData] = useState("");

  const getData = async () => {
    const response = await fetch(url);
    const dataArray = await response.json();
    const formattedData = [];
    const firstItemTimeseries = dataArray[0].timeseries;
    const keys = Object.keys(firstItemTimeseries);
    let confirmed = 0,
      deaths = 0,
      recovered = 0;
    const sixMarch = new Date(2, 6, 2020);
    keys.map((key) => {
      const dateItem = new Date(key);
      if (dateItem >= sixMarch) {
        confirmed = firstItemTimeseries[key].confirmed - confirmed;
        formattedData.push({
          date: dateItem,
          type: "Confirmados",
          quantity: confirmed,
        });
        deaths = firstItemTimeseries[key].deaths - deaths;
        formattedData.push({
          date: dateItem,
          type: "Muertes",
          quantity: deaths,
        });
        recovered = firstItemTimeseries[key].recovered - recovered;
        formattedData.push({
          date: dateItem,
          type: "Recuperados",
          quantity: recovered,
        });
      }
    });
    /* console.log(formattedData); */
    setData({ items: formattedData });
  };

  useEffect(() => {
    if (!data) {
      getData();
    }
  }, []);

  const spec = {
    width: 250,
    height: 300,
    mark: {
      type: "line",
      tooltip: true,
    },
    encoding: {
      x: { field: "date", type: "temporal", title: "Fecha" },
      y: { field: "quantity", type: "quantitative", title: "Cantidad" },
      color: { field: "type", type: "nominal" },
    },
    data: { name: "items" },
    actions: false,
  };

  if (!data) {
    /* return <div>Buscando datos de Tendencia...</div>; */
    return <Loading />;
  }

  return (
    <div className="title_tendencia">
      <h4>Tendencia en Colombia</h4>
      <h6>Curba de tendencia del COVID-19 con datos reales</h6>
      <VegaLite spec={spec} data={data} />
    </div>
  );
}
