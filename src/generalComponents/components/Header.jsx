import "../styles/header.css";
import { Link } from "react-router-dom";

// import { BiMenu } from "react-icons/bi";
import Button from "./Button";
// import { useState } from "react"

const Header = () => {

  const openMenu = () => {
    const ul = document.querySelector("ul")
    ul.classList.toggle = "list"
    console.log(ul)
  }

  return (
    <header className="container-header">
      <nav className="nav-header">
        <di className="logo">
          <h2> Olx</h2>
        </di>
        <input className="input-search" type="text" name="" id="" placeholder="Buscar productos, marcas y mas..."/>
        <i className="fas fa-bars icon-burger" onClick={openMenu}></i>
        <ul className="header-list">
          <Link to="/login"><li><Button title="Ingresar" className="button-ingresar"></Button></li></Link>
         <li><Button title="Vender" className="button-vender"></Button></li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
