import "../styles/header.css";
import Search from "./Search";
import { NavLink } from "react-router-dom";

// import Nav from "../../generalComponents/components/Nav"
// import { useState } from "react"

const Header = () => {
  return (
    <header className="container-header">
      <h3 className="container-header__logo">Olx</h3>
      <Search></Search>
      <button className="container-header__btn-login">
        <NavLink
        // no anda
          to="/login-register" 
          className={({ isActive }) =>
            isActive ? "active" : "container-header__login--ingresar"
          }
        >
          Ingresar
        </NavLink>
      </button>
      <button className="container-header__btn-login">
        <NavLink to="/vender" className="container-header__login--ingresar">
          Vender
        </NavLink>
      </button>
      {/* <Nav icon="Menú"></Nav> */}
    </header>
  );
};
export default Header;
