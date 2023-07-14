import React from "react";
import "./Layout.css";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";

function Layout(props) {
  return (
    <div>
      <Header />
      <main className="main">{props.children}</main>
      <NavBar />
    </div>
  );
}

export default Layout;
