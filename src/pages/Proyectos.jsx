import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";
import Simcro from "../assets/images/simcro.png";
import SimonDice from "../assets/images/simondice.png";
import Birdgram from "../assets/images/birdgram.png";
import Merquemos from "../assets/images/merquemos.png";
import StoreCats from "../assets/images/storecats.png";
import Pokemon from "../assets/images/pokemon.png";

class Projects extends Component {
  toggleCategories() {
    return (
      <>
        <div className="projects-title">
          <h4>Proyectos</h4>
        </div>
        <div className="projects-grid">
          <Card
            shadow={5}
            style={{
              width: "300px",
              margin: "auto",
              alignItems: "center",
              marginTop: "20px"
            }}
          >
            <img
              src={Simcro}
              alt="avatar"
              className="avatar-img"
              style={{
                height: "370px"
              }}
            />
            <h2>Simcro</h2>
            <CardText>
              SIMCRO es una PWA "Aplicacion web progresiba" desarrollada en
              Html, css y JavaScrip, la cual consume una API de Google maps y
              permite visualizar siertos datos en un mapa de calor.
            </CardText>
            <CardActions
              border
              style={{
                textAlign: "center"
              }}
            >
              <Button href="https://github.com/jorgevels/SIMCRO" colored>
                GitHub{" "}
              </Button>
              <i
                className="fa fa-heart"
                aria-hidden="true"
                style={{
                  padding: "0 02px 0 6px",
                  justifyContent: "center"
                }}
              />

              <Button href="https://simcro.co" colored>
                website
              </Button>
            </CardActions>
          </Card>

          <Card
            shadow={5}
            style={{
              width: "320px",
              margin: "auto",
              alignItems: "center",
              marginTop: "20px"
            }}
          >
            <img
              src={SimonDice}
              alt="avatar"
              className="avatar-img"
              style={{
                height: "370px"
              }}
            />
            <h2>SimonDice</h2>

            <CardText>
              SimonDice en un juego que conciste en memorizar una secuencia de
              colores para seguir avanzando en los diferentes niveles, ademas
              tiene una interacion de sonidos. Esta PWA esta desarrollada en
              html, css y JavaScript.
            </CardText>
            <CardActions
              border
              style={{
                textAlign: "center"
              }}
            >
              <Button href="" colored>
                GitHub
              </Button>
              <i
                className="fa fa-heart"
                aria-hidden="true"
                style={{
                  padding: "0 02px 0 6px",
                  justifyContent: "center"
                }}
              />

              <Button href="https://jorgevels.github.io/SimonDice" colored>
                LiveDemo
              </Button>
            </CardActions>
          </Card>
          <Card
            shadow={5}
            style={{
              width: "320px",
              margin: "auto",
              alignItems: "center",
              marginTop: "20px"
            }}
          >
            <img
              src={Merquemos}
              alt="avatar"
              className="avatar-img"
              style={{
                height: "370px"
              }}
            />

            <h2>Merquemos</h2>

            <CardText>
              Merquemos es una PWA, la cual le permite al usuario crear una
              lista de mercado para facilitar las compras, solo tendra que sacar
              el telefono celular e ir marcando los articulos que va depositando
              en el carro de compras.
            </CardText>
            <CardActions
              border
              style={{
                textAlign: "center"
              }}
            >
              <Button href="" colored>
                GitHub
              </Button>
              <i
                className="fa fa-heart"
                aria-hidden="true"
                style={{
                  padding: "0 02px 0 6px",
                  justifyContent: "center"
                }}
              />

              <Button href="https://jorgevels.github.io/Merquemos/" colored>
                LiveDemo
              </Button>
            </CardActions>
          </Card>
          <Card
            shadow={5}
            style={{
              width: "320px",
              margin: "auto",
              alignItems: "center",
              marginTop: "20px"
            }}
          >
            <img
              src={StoreCats}
              alt="avatar"
              className="avatar-img"
              style={{
                height: "370px"
              }}
            />
            <h2>StoreCats</h2>

            <CardText>
              StoreCats es una tienda de mascotas, la cual le permite al usuario
              selecionar de una galeria el gatito que mas te guste y desde la
              aplicacion puede gestionar el medio de pago, esta desarrollada en
              html, css y JavaScript.
            </CardText>
            <CardActions
              border
              style={{
                textAlign: "center"
              }}
            >
              <Button colored>GitHub</Button>
              <i
                className="fa fa-heart"
                aria-hidden="true"
                style={{
                  padding: "0 02px 0 6px",
                  justifyContent: "center"
                }}
              />

              <Button href="https://jorgevels.github.io/StoreCats/" colored>
                LiveDemo
              </Button>
            </CardActions>
          </Card>
          <Card
            shadow={5}
            style={{
              width: "320px",
              margin: "auto",
              alignItems: "center",
              marginTop: "20px"
            }}
          >
            <img
              src={Pokemon}
              alt="avatar"
              className="avatar-img"
              style={{
                height: "370px"
              }}
            />
            <h2>Un Pokemon</h2>

            <CardText>
              Un Pokemon es una aplicacion que consume la API de pokemon, en la
              cual el usuario podra ingresar cualquier numero y obtener un
              pokemon, este le mostrara su nombre y saltara de la felicidad de
              conocerte, esta desarrollada en html, css y JavaScript.
            </CardText>
            <CardActions
              border
              style={{
                textAlign: "center"
              }}
            >
              <Button colored>GitHub</Button>
              <i
                className="fa fa-heart"
                aria-hidden="true"
                style={{
                  padding: "0 02px 0 6px",
                  justifyContent: "center"
                }}
              />

              <Button href="https://jorgevels.github.io/UnPokemon/" colored>
                LiveDemo
              </Button>
            </CardActions>
          </Card>
          <Card
            shadow={5}
            style={{
              width: "320px",
              margin: "auto",
              alignItems: "center",
              marginTop: "20px"
            }}
          >
            <img
              src={Birdgram}
              alt="avatar"
              className="avatar-img"
              style={{
                height: "370px"
              }}
            />
            <h2>Birdgram</h2>

            <CardText>
              Birdgram es un Instagram de hermosos pajaros; es una PWA
              animalista en la que podras encontrar una gran bariedad de aves
              que habitan en todo el territorio nacional, esta desarrollada en
              React utilizando el potencial de Now y webpack.
            </CardText>
            <CardActions
              border
              style={{
                textAlign: "center"
              }}
            >
              <Button href="" colored>
                GitHub
              </Button>
              <i
                className="fa fa-heart"
                aria-hidden="true"
                style={{
                  padding: "0 02px 0 6px",
                  justifyContent: "center"
                }}
              />

              <Button
                href="https://react-birdgram.jorgevelasquez006.now.sh/"
                colored
              >
                LiveDemo
              </Button>
            </CardActions>
          </Card>
        </div>
      </>
    );
  }

  render() {
    return (
      <div className="category-tabs">
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
