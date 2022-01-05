import "../styles/nav.css";

const Nav = (props) => {
  return (
    <nav className="nav">
      <input type="checkbox" name="" id="check" />

      <label for="" className="logo "></label>

      <ul className="list">
        <li className="list__items">
          <a href="../index.html" className="nav_item">
            {props.category}
          </a>
        </li>
        <li className="list__items">
          <a href="../portfolio.html" className="nav_item">
            {props.category}
          </a>
        </li>
        <li className="list__items">
          <a href="../servicios.html" className="nav_item">
            {props.category}
          </a>
        </li>
        <li className="list__items">
          <a href="../contact.html" className="nav_item">
            {props.category}
          </a>
        </li>
      </ul>
      <label for="check" className="checkbtn-icon">
        <i className=" category-icon">{props.icon}</i>
        <i className="fas fa-times icono-x"></i>{" "}
      </label>
    </nav>

  );
};
export default Nav;
