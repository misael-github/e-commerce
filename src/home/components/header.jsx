
import "../../home/styles/header.css"
import Search from "../../generalComponents/components/Search"

const Header = () => {
  return (
    <header className="container-header">
    <h3 className="container-header__logo">Olx</h3>
    <Search/>
    <button className="container-header__btn-login">
        <span className="container-header__login--ingresar">Ingresar</span>
    </button>
  </header>
  )
}
export default Header