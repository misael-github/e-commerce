import "../styles/header.css";
import { Link } from "react-router-dom";

// import { BiMenu } from "react-icons/bi";
import Button from "./Button";
import { useState } from "react";
import { useSelector } from "react-redux";
import db from "../../db";
import { GoGrabber } from "react-icons/go";
import { GoX } from "react-icons/go";
import { FaListUl } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

import { BiUserCircle } from "react-icons/bi";
import { BiSupport } from "react-icons/bi";
// import { IoMdCart } from "react-icons/fa";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const { user } = useSelector((store) => store.user);
  // Me deslogua firebesa llamando a su finction out
  const logOut = () => {
    console.log(user);
    db.auth().signOut();
  };
  const saludar = () => {
    console.log("hola");
  };
  return (
    <header className="container-header">
      <nav className="nav-header">
        <Link to="/">
          <di className="logo">
            <h2> Olx</h2>
          </di>
        </Link>
        <input
          className="input-search"
          type="text"
          name=""
          id=""
          placeholder="Buscar productos, marcas y mas..."
        />
        {/* Si menu es true le pone display none sino flex ycada vez que hacen click seteo el valor de menu y
        asi hago que se vea o no cada icono */}
        <GoGrabber
          className="icon-bars"
          style={{ display: menu ? "none" : "flex" }}
          onClick={() => setMenu(true)}
        />

        {/* style recibe un onjeto con los styles */}
        <GoX
          className="icon-cross"
          style={{ display: menu ? "flex" : "none" }}
          onClick={() => setMenu(false)}
        />
        {/* <i
          className=""
          style={{ display: menu ? "none" : "flex" }}
          onClick={() => setMenu(true)}
        ></i> */}
        {/* <i
          className="fas fa-times icon-cruz"
          style={{ display: menu ? "flex" : "none" }}// style recibe un onjeto con los styles
          onClick={() => setMenu(false)}
        ></i> */}

        {/* Si el menu esta es true el left es 0 sino -100% */}
        <ul className=" ul" style={{ left: menu ? "0" : "-100%" }}>
          <div className="ul__container--li-buttons">
            <li>
              {user ? (
                <Link to="/">
                  <Button title="LOG-OUT" variant="outline" onClick={logOut}></Button>
                </Link>
              ) : (
                <Link to="/login">
                  <Button title="INGRESAR" variant="outline" ></Button>
                </Link>
              )}
            </li>
            <Link to={user ? "/sell" : "/login"}>
              <li>
                <Button title="VENDER"></Button>
              </li>
            </Link>
          </div>
          <div className="ul__container--items">
            {/* <FaChevronDown  size="22px" className="ul__icons"/> */}
            {/* <Link to=""> */}
              <details className="details">
                <summary>Categorias</summary>
                <ul className="ul__categorys">
                  <li className="li__categorys"><Link to="/" className="items__ul--categorys">Vehiculos</Link></li>
                  <li className="li__categorys"><Link to="/" className="items__ul--categorys">Inmuebles</Link></li>
                  <li className="li__categorys"><Link to="/" className="items__ul--categorys">Electrodomésticos</Link></li>
                  <li className="li__categorys"><Link to="/" className="items__ul--categorys">Construcción</Link></li>
                  <li className="li__categorys"><Link to="/" className="items__ul--categorys" >Tecnologia</Link></li>
                  <li className="li__categorys"><Link to="/" className="items__ul--categorys">Ropa</Link></li>
                </ul>
              </details>
            {/* </Link> */}
          </div>
          <div className="ul__container--items">
            <BiUserCircle size="30px" className="ul__icons"/>
            <Link to="">
              <li className="list_items">Mi cuenta</li>
            </Link>
          </div>
          <div className="ul__container--items">
            <BiSupport  size="30px" className="ul__icons"/>
            <Link to="">
              <li className="list_items">Ayuda</li>
            </Link>
          </div>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
