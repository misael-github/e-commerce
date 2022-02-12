import "../styles/header.css";
import { Link } from "react-router-dom";

// import { BiMenu } from "react-icons/bi";
import Button from "./Button";
import { useState } from "react";
import { useSelector } from "react-redux";
import db from "../../db";
import  {GoGrabber}  from "react-icons/go";
import { GoX } from "react-icons/go";


const Header = () => {
  const [menu, setMenu] = useState(false);
  const {user} = useSelector((store) => store.user)
  // Me deslogua firebesa llamando a su finction out
  const logOut = () => {
    console.log(user)
    db.auth().signOut()
  }
const saludar = () => {
  console.log("hola")
}
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
          <GoGrabber className="icon-bars"  style={{ display: menu ? "none" : "flex" }}
          onClick={() => setMenu(true)}/>

          {/* style recibe un onjeto con los styles */}
          <GoX className="icon-cross"  style={{ display: menu ? "flex" : "none" }}
          onClick={() => setMenu(false)}/>
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
         
            <li className="list_items" >
              {user ? 
              <Link to="/">
              <Button title="LOG-OUT" className="button-ingresar" onClick={logOut}></Button>
              </Link>
               :
               <Link to="/login">
              <Button title="INGRESAR" className="button-ingresar"></Button>
              </Link>
               }
            </li>
            
         
          <Link to={ user ? "/sell":  "/login"}>
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
