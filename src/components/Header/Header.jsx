import React from "react";
import logo from "../../assets/logo.png";
import "./Header.styles.css";

/**
 * Function for creating the header
 */
export default function Header() {
  return (
    <header id="header">
      <img id="img" src={logo} alt="Logo showing a money bag" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
