  import "../styles/nav.css"
  
  const Nav = (props) => {
      return (
        <nav className="nav">

        <input type="checkbox" name="" id="check" />

        <label for="" className="logo "></label>

        <ul className="list">
          <li className="list__items">
            <a href="../index.html" className="nav_item">{props.category}</a>
          </li>
          <li className="list__items">
            <a href="../portfolio.html" className="nav_item">{props.category}</a>
          </li>
          <li className="list__items">
            <a href="../servicios.html" className="nav_item">{props.category}</a>
          </li>
          <li className="list__items">
            <a href="../contact.html" className="nav_item">{props.category}</a>
          </li>
        </ul>
        <label for="check" className="checkbtn-icon"><i className=" category-icon">{props.icon}</i><i className="fas fa-times icono-x"></i> </label>

      </nav>
    //     <nav className="nav">
        
    //     <div className="nav_container">

    //         <label className="nav_label" htmlFor="menu" >
    //             <p className="category-responsive-text">Categorias</p>
    //              {/* <i class="fas fa-bars icon-bar"></i> */}
    //         </label>
    //         <input type="checkbox" className="nav_input" id="menu"/>

    //         <div className="nav_menu">
    //             <a href="" className="nav_item">{props.category}</a>
    //             <a href="" className="nav_item">{props.category}</a>
    //             <a href="" className="nav_item">{props.category}</a>
    //             <a href="" className="nav_item">{props.category}</a>
    //             <a href="" className="nav_item">{props.category}</a>
    //             <a href="" className="nav_item">{props.category}</a>
    //             <a href="" className="nav_item">{props.category}</a>
    //         </div>
    //     </div>
    //  </nav>
      )
  }
  export default Nav
  