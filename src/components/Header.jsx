import React from "react";

export default function Header() {
  return (
    <nav
      className="navbar fixed-top navbar-dark bg-dark"
      style={{ justifyContent: "center" }}
    >
      <div className="container-fluid-nav text-center">
        {/* <img
          className="logo-col"
          src="/src/assets/bandera_colombia.png"
          alt="logo"
        /> */}
        <h1 className="navbar-dark navbar-brand" style={{ height: "38px" }}>
          Coronavirus Colombia
        </h1>
      </div>
    </nav>
  );
}
