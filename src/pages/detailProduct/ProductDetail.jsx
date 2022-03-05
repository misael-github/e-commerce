import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../../components/GeneralComponents/Header";
import db from "../../config/db";
import Button from "../../components/GeneralComponents/Button";

const ProductDetail = () => {
  const { productId } = useParams();

  const [productdetail, setProductproductdetail] = useState({});
  // console.log(productId)
  useEffect(() => {
    const productsRef = db.firestore().collection("products").doc(productId);
    productsRef
      .get()
      .then((res) => {
        const data = res.data();
        setProductproductdetail(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const Buy = () => {
    
  }

  // console.log(productdetail)
  // console.log(Object.keys(productdetail))
  return (
    <div>
      <Header />
      <div className="container-card__detail-product ">
        <img src={productdetail.file} alt="" />
        <div className="info-container">
          <h1 className="name-product">{productdetail.name}</h1>
          {/* .charAt().toUpperCase() + productdetail.name.slice(1) me da error */}
          <h2 className="price-product">${productdetail.price}</h2>
          <p className="short-description__product">
            {productdetail.shortDescription}
          </p>
          <p className="detailed-description">Descripción:</p>
          <p className="detailed-description">
            {productdetail.detailedDescription}
          </p>
          <p className="">Medios de Pago: Mercado Pago o Whatsapp</p>
          <Button title="Comprar" className="btn__detail-product" onClick={Buy} ></Button>
        </div>
        {/* <div className="container-btn-buy"> */}
        {/* </div> */}
      </div>
    </div>
  );
};
export default ProductDetail;
