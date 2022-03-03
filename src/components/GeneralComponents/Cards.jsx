import { useState, useEffect } from "react";
import "../../styles/GeneralComponents/cards.css";
import { Link } from "react-router-dom";
// import auriculares from "../../assets/auricular.jpg";
import jsonProducts from "../../products.json";
import Cart from "../GeneralComponents/Cart";
import "../../styles/GeneralComponents/productDetail.css"
import db from "../../config/db"

const Card = (props) => {

  
  const [product, setProduct] = useState("")
  useEffect(() => {
    try {
      // onSnapshot es para que este escuchando todo el tiempo los cambios sino seria .get().then((querySnapshot))
      db.firestore()
      .collection("products") // colection products
      .onSnapshot((querySnapshot) => { 
          querySnapshot.forEach((doc) => {
            
            
          });
          
          
        });
      } catch (e) {
        console.log(e);
      }
  }, [])
  return (
    <div className="container-card">
      <Link to={`product/${props.id}`} className="main__link--card">
        <div className="main">
          <div className="container-img">
            <img className="img-cards" src={props.img} alt="imagen-producto" />
          </div>

          <div className="line"></div>

          <div className="container__description-product">
            <p className="title-product">{props.name}</p>
            <p className="description-product">{props.description}</p>
          </div>
          <p className="price">$ {props.price}</p>

          <p className="ubication">{props.ubication}</p>

          {/* <div className="container-buttons-and-cart">
          <div className="button-more"> MORE</div>

          <div className="add-to-card">
            <i class="fas fa-shopping-cart icon-cart"></i>
            <p className="add_to_cart_text">ADD TO CART</p>
          </div>
        </div> */}
        </div>
      </Link>
    </div>
  );
};
export default Card;
