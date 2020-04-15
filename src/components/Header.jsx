import React from "react";

export default function Header() {
  return (
    <nav
      className="navbar fixed-top navbar-dark bg-dark"
      style={{ justifyContent: "center" }}
    >
      <div className="container-fluid-nav text-center">
        <img
          className="logo-col"
          src="https://maps.arcgis.com/sharing/rest/content/items/3ddd6c4932d649d6996db442e920ceb9/data"
          alt="logo"
        />
        <h1 className="navbar-dark navbar-brand" style={{ height: "38px" }}>
          Coronavirus Colombia
        </h1>
      </div>
    </nav>
  );
}
