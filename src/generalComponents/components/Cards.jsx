import "../styles/cards.css";
import auriculares from "../../assets/auricular.jpg";
const Card = () => {
  return (
    <div className="container-card">
      <div className="main">
          <div className="container-img">

        <img src={auriculares} alt="imagen-producto" />
          </div>

        <div className="line"></div>
        
        <div className="container__title-and-price">
          <h1>BEATS</h1>
          <p className="price">$30</p>
        </div>
    
             <h3 className="ubication">Ubicación: San Luis</h3>
        
        <div className="container-buttons-and-cart">
          <div className="button-more"> MORE</div>
          <div className="add-to-card">
            <i class="fas fa-shopping-cart icon-cart"></i>
            <p className="add_to_cart_text">ADD TO CART</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
