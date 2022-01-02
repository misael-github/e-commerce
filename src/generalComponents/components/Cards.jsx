import { useState } from "react";
import "../styles/cards.css";
// import auriculares from "../../assets/auricular.jpg";
import jsonProducts from "../../products.json"
import Cart from "./Cart";
const Card = (props) => {


//   const [cart, setCart] = useState(jsonProducts)

//   const addProduct = (newProduct) => {
//     newProduct.id = Date.now()
//    const changeCart = [
//        newProduct,
//        ...cart
//    ]

//    setCart(changeCart)
// }

  return (
    <div className="container-card">


      { <div className="main">
          <div className="container-img">
         
        <img src={props.img} alt="imagen-producto" />
          </div>

        <div className="line"></div>
        
        <div className="container__title-and-price">
          <h1>{props.name}</h1>
          <p className="price">${props.price}</p>
        </div>
    
             <h3 className="ubication">Ubicación: {props.ubication}</h3>
        
        <div className="container-buttons-and-cart">
          <div className="button-more"> MORE</div>
          
        <div className="add-to-card" >
            <i class="fas fa-shopping-cart icon-cart"></i>
            <p className="add_to_cart_text">ADD TO CART</p>
          </div>
        </div>
      </div> }
    </div>
  );
};
export default Card;
