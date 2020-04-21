import React from "react";
import { IoIosBody } from "react-icons/io";

import {
  MdHome,
  MdStarHalf,
  MdPersonOutline,
  MdClearAll,
  MdWc,
  FiThermometer,
  MdVisibility,
  MdInfoOutline,
  MdHelpOutline,
} from "react-icons/md";
import { IoMdHand } from "react-icons/io";

import Propagacion from "../assets/images/propagacion.png";
import Lavarmanos from "../assets/images/lavadomanos.png";
import Evitacontacto from "../assets/images/evitacontactodirecto.png";
import Cubrirboca from "../assets/images/cubrirboca.png";
import Cubriraltoser from "../assets/images/cubriraltoser.png";
import Limpiedesinfecte from "../assets/images/limpiedesinfecte.png";

export default function Recomendacion() {
  return (
    <>
      <nav
        className="p-2 mb-2 bg-secondary text-white .bg-secondary"
        style={{ justifyContent: "center", marginTop: "12px" }}
      >
        <div className="container-fluid-nav text-center">
          <img className="logo-prevencion" src={Propagacion} alt="logo" />
          <h1 className="navbar-dark navbar-brand" style={{ height: "38px" }}>
            Cómo se propaga el coronavirus
          </h1>
        </div>
      </nav>
      <nav
        className="p-2 mb-2 bg-secondary text-white .bg-secondary"
        style={{ justifyContent: "center", marginTop: "12px" }}
      >
        <div className="container-fluid-nav text-center">
          <img className="logo-prevencion" src={Lavarmanos} alt="logo" />
          <h1 className="navbar-dark navbar-brand" style={{ height: "38px" }}>
            Limpiarse las manos con frecuencia
          </h1>
        </div>
      </nav>
      <nav
        className="p-2 mb-2 bg-secondary text-white .bg-secondary"
        style={{ justifyContent: "center", marginTop: "12px" }}
      >
        <div className="container-fluid-nav text-center">
          <img className="logo-prevencion" src={Evitacontacto} alt="logo" />
          <h1 className="navbar-dark navbar-brand" style={{ height: "38px" }}>
            Evitar el contacto directo
          </h1>
        </div>
      </nav>
      <nav
        className="p-2 mb-2 bg-secondary text-white .bg-secondary"
        style={{ justifyContent: "center", marginTop: "12px" }}
      >
        <div className="container-fluid-nav text-center">
          <img className="logo-prevencion" src={Cubrirboca} alt="logo" />
          <h1 className="navbar-dark navbar-brand" style={{ height: "38px" }}>
            Cubrirse la boca y la nariz
          </h1>
        </div>
      </nav>
      <nav
        className="p-2 mb-2 bg-secondary text-white .bg-secondary"
        style={{ justifyContent: "center", marginTop: "12px" }}
      >
        <div className="container-fluid-nav text-center">
          <img className="logo-prevencion" src={Cubriraltoser} alt="logo" />
          <h1 className="navbar-dark navbar-brand" style={{ height: "38px" }}>
            Cubrirse la boca al toser y estornudar
          </h1>
        </div>
      </nav>
      <nav
        className="p-5 mb-2 bg-secondary text-white .bg-secondary"
        style={{
          justifyContent: "center",
          marginTop: "12px",
          marginBottom: "50px",
        }}
      >
        <div className="container-fluid-nav text-center">
          <img className="logo-prevencion" src={Limpiedesinfecte} alt="logo" />
          <h1 className="navbar-dark navbar-brand" style={{ height: "38px" }}>
            Limpie y desinfecte superficies
          </h1>
        </div>
      </nav>
    </>
  );
}
