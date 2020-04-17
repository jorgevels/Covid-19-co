import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import {
  MdStarHalf,
  MdPersonOutline,
  MdVisibility,
  MdClearAll,
  MdWc,
} from "react-icons/md";
const SIZE = "32px";

class Inf extends Component {
  render() {
    return (
      <div className="acerca-mi-body">
        <Grid className="acerca-mi-grid">
          <Cell col={6}>
            <div className="acerca-me">
              <MdStarHalf size={SIZE} /> <p>Lo que puedes hacer</p>
              <p style={{ fontFamily: "Lato" }}>
                Lavarse las manos es la mejor manera de ayudarlo a mantenerse
                saludable. Aquí te explicamos cómo hacerlo. Mójese las manos con
                agua limpia y corriente. Cierre el grifo y aplique jabón.
                Enjabona tus manos frotándolas. Pon el dorso de tus manos, entre
                tus dedos y debajo de tus uñas. Frota tus manos por 20 segundos.
                Cante "Feliz cumpleaños" dos veces mientras se lava para medir
                su tiempo. Enjuague sus manos con agua limpia y corriente. Seque
                al aire o use una toalla limpia. ¿No hay agua ni jabón? Use
                desinfectante para manos que contenga al menos 60 por ciento de
                alcohol. Aplica el gel en la palma de una mano. Frote sus manos
                juntas sobre todas las superficies y dedos de sus manos hasta
                que sus manos estén secas. Evite tocarse la cara y los ojos.
              </p>
            </div>
          </Cell>
          <MdPersonOutline size={SIZE} />
          {/* <img
            alt="avatar"
            style={{
              height: "250px",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "110px",
              marginTop: "20px",
            }}
          /> */}

          <Cell col={7}>
            <div className="acerca-me">
              <h4>Un curioso por aprender</h4>

              <p style={{ fontFamily: "Lato" }}>
                En mi camino de formación he desarrollado diversas capacidades
                que me han impulsado siempre a mejorar en cada proyecto, las más
                destacadas son : Creatividad, Autoaprendizaje, Proactividad,
                Responsabilidad, Trabajo en Equipo y Compromiso. Soy un curioso
                por aprender.
              </p>
            </div>

            <MdStarHalf size={SIZE} />
            {/* <img
              alt="avatar"
              style={{
                height: "200px",
                marginTop: "20px",
                marginLeft: "40px",
              }}
            /> */}
          </Cell>
          <Cell col={5}>
            <div className="acerca-me-tres">
              <h4>Nunca Pares de Aprender</h4>

              <p style={{ fontFamily: "Lato" }}>
                Soy un apacionado por el aprendizaje continuo, me gusta
                experimentar nuevas tegnologias y estar a la bangurdia. Mi
                curiosida por aprender me ha llevado a lograr lo que me he
                propuesto.
                <br /> El aprendizaje no debería acabarse cuando finalizas un
                “ciclo académico”, cuando acabas el colegio o terminas la
                universidad. Hoy más que nunca necesitamos leer, escuchar,
                debatir, y crear con lo que aprendemos cada día.
              </p>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Inf;
