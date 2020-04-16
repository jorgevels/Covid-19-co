import React from "react";
import { Nav, Link } from "./styles";
// Se importan los iconos desde react icons
import {
  MdHome,
  MdFavoriteBorder,
  MdPersonOutline,
  MdLanguage,
  MdTimeline,
  MdThumbUp,
  MdPublic,
} from "react-icons/md";

// constante con el tamaño de los iconos
const SIZE = "32px";

export const NavBar = () => {
  return (
    <Nav>
      <Link to="covid-19-co/">
        <MdHome size={SIZE} />
      </Link>
      <Link to="/mundial">
        <MdPublic size={SIZE} />
      </Link>
      <Link to="/trend">
        <MdTimeline size={SIZE} />
      </Link>
      <Link to="/info">
        <MdThumbUp size={SIZE} />
      </Link>
    </Nav>
  );
};
