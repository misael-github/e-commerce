  import "../styles/nav.css"
  
  const nav = (props) => {
      return (
        <nav class="nav">

        <input type="checkbox" name="" id="check" />

        <label for="" class="logo "></label>

        <ul class="list">
          <li class="list__items">
            <a href="../index.html" className="nav_item">{props.category}</a>
          </li>
          <li class="list__items">
            <a href="../portfolio.html" className="nav_item">{props.category}</a>
          </li>
          <li class="list__items">
            <a href="../servicios.html" className="nav_item">{props.category}</a>
          </li>
          <li class="list__items">
            <a href="../contact.html" className="nav_item">{props.category}</a>
          </li>
        </ul>
        <label for="check" className="checkbtn-icon"><i class=" ">Categorias</i><i class="fas fa-times icono-x"></i> </label>

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
  export default nav
  