// hacer header y footer
// logo buscardor. ingresar, categorias
import "../styles/layaut.css"
const header = () => {
return (
    <div className="container-layaut">
     <header className="container-header">
      <h3 className="container-header__logo">Olx</h3>
      <button className="container-header__btn-login">
          <span className="container-header__login--ingresar">Ingresar</span>
      </button>
    </header>
     
     <nav className="nav">
        
        <div className="nav-container">

            <span></span>

            <label className="nav_label" htmlFor="menu" >
                 <i class="fas fa-bars" className="icon-bar"></i>
            </label>
            <input type="checkbox"  id="menu"/>
        </div>
     </nav>

    <footer className="container-footer">
        <div className="container-ul">
            <ul className="container-ul__list">
                <h3 className="container-ul__list--title">Otros paises</h3>
                <li className="container-ul__list--items">Ecuador</li>
                <li className="container-ul__list--items">Chile</li>
                <li className="container-ul__list--items">Perú</li>
                <li className="container-ul__list--items">México</li>
            </ul>
        </div>
        <div className="footer__parrafo">
            <p>OLX Clasificados © 2006-2021 OLX S.A. CUIT: 30-70964619-9 Miñones 2177, PB, CP 1428, Belgrano, CABA</p>
        </div>
        </footer>
    </div>
  

   
)

}

export default header