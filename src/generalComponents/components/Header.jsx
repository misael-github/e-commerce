import "../styles/header.css";
import { Link } from "react-router-dom";

// import { BiMenu } from "react-icons/bi";
import Button from "./Button";
import { useState } from "react";

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header className="container-header">
      <nav className="nav-header">
        <di className="logo">
          <h2> Olx</h2>
        </di>
        <input
          className="input-search"
          type="text"
          name=""
          id=""
          placeholder="Buscar productos, marcas y mas..."
        />
        {/* Si menu es true le pone display none sino flex ycada vez que hacen click seteo el valor de menu y
        asi hago que se vea o no cada icono */}
        <i
          className="fas fa-bars icon-burger"
          style={{ display: menu ? "none" : "flex" }}
          onClick={() => setMenu(true)}
        ></i>
        <i
          className="fas fa-times icon-cruz"
          style={{ display: menu ? "flex" : "none" }}
          onClick={() => setMenu(false)}
        ></i>
        {/* Si el menu esta es true el left es 0 sino -100% */}
        <ul className=" ul" style={{ left: menu ? "0" : "-100%" }}>
          <Link to="/login">
            <li className="list_items">
              <Button title="INGRESAR" className="button-ingresar"></Button>
            </li>
          </Link>
          <Link to="">
            <li className="list_items">
              <Button title="VENDER" className="button-vender"></Button>
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
