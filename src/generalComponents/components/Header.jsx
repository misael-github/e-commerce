import "../styles/header.css";
import { Link } from "react-router-dom";

// import { BiMenu } from "react-icons/bi";
import Button from "./Button";
import { useState } from "react"

const Header = () => {
 
  const [menu, setMenu] = useState(false)
  

  
  // const openMenu = (e) => {
  //   const ul = document.querySelector(".ul");
  //   const iconCruz = document.querySelector(".icon-cruz")
  //   const iconHamburguesa = document.querySelector(".icon-burger")

  //   ul.style = "display:flex";
  //   iconCruz.style = "display:flex"
  //   iconHamburguesa.style = "display:none"
  //   console.log(ul);
  // };

  // const closeMenu = () => {
  //   const ul = document.querySelector(".ul");
  //   const iconCruz = document.querySelector(".icon-cruz")
  //   const iconHamburguesa = document.querySelector(".icon-burger")

  //   ul.style = "display:none"
  //  iconCruz.style = "display:none"
  //  iconHamburguesa.style = "display:flex"
  // }

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
        <i className="fas fa-bars icon-burger" style={{display: menu ? "none" : "flex"}} onClick={() => setMenu(true)}></i>
        <i className="fas fa-times icon-cruz" style={{display: menu ? "flex" : "none"}} onClick={() => setMenu(false)}></i>
        <ul className=" ul" style={{display: menu ? "flex" : "none"}}>
          <Link to="/login">
            <li className="list_items">
              <Button title="Ingresar" className="button-ingresar"></Button>
            </li>
          </Link>
          <Link to="">
            <li className="list_items">
            <Button title="Vender" className="button-vender"></Button>
          </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
