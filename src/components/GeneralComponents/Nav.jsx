import "../../styles/GeneralComponents/nav2.css"
import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <>
        <div className="container-nav">
         <ul className="ul__categorys ul_categorys--nav">
                  <li className="li__categorys li__categorys--nav"><Link to="/" className="items__ul--categorys items__ul--categorys--nav">Vehiculos</Link></li>
                  <li className="li__categorys li__categorys--nav"><Link to="/" className="items__ul--categorys items__ul--categorys--nav ">Inmuebles</Link></li>
                  <li className="li__categorys li__categorys--nav"><Link to="/" className="items__ul--categorys items__ul--categorys--nav">Electrodomésticos</Link></li>
                  <li className="li__categorys li__categorys--nav"><Link to="/" className="items__ul--categorys items__ul--categorys--nav">Construcción</Link></li>
                  <li className="li__categorys li__categorys--nav "><Link to="/" className="items__ul--categorys items__ul--categorys--nav" >Tecnologia</Link></li>
                  <li className="li__categorys li__categorys--nav"><Link to="/" className="items__ul--categorys items__ul--categorys--nav">Ropa</Link></li>
                </ul>
                </div>
        </>
    )
}
export default Nav