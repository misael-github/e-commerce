
import "../../home/styles/header.css"
import Search from "../../generalComponents/components/Search"
// import Nav from "../../generalComponents/components/Nav"
// import { useState } from "react"

const Header = () => {

  return (
    <header className="container-header">
    <h3 className="container-header__logo">Olx</h3>
    <Search/>
    <button className="container-header__btn-login">
        <span className="container-header__login--ingresar" >Ingresar</span>
    </button>
    <button className="container-header__btn-login">
        <span className="container-header__login--ingresar">Vender</span>
    </button>
    {/* <Nav icon="Menú"></Nav> */}
  </header>
  )
}
export default Header