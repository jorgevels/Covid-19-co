import React from "react";
import "../assets/style/NotFound.css";
import Astronaut from "../assets/images/astronaut.png";

const NotFoundx = () => {
  return (
    <div className="Container">
      <div className="NotFound__description">
        <h1>Error 404: La página que estas buscando no existe:</h1>
        <p>
          La página pudo ser movida o eliminada, puedes utilizar la barra de
          navegación para regresar
        </p>
      </div>
      <img src={Astronaut} alt="Astronaut" />
    </div>
  );
};

export default NotFoundx;
