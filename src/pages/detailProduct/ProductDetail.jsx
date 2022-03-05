import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../../components/GeneralComponents/Header";
import db from "../../config/db";
import Button from "../../components/GeneralComponents/Button";

const ProductDetail = () => {
  const { productId } = useParams();

   const [productdetail, setProductproductdetail] = useState({})
  // console.log(productId)
  useEffect(() => {
    const productsRef = db.firestore().collection("products").doc(productId);
    productsRef
      .get()
      .then((res) => {
        console.log(res.data());
       
        const data = res.data()
        setProductproductdetail(data)
        
    })
    .catch((error) => {
        console.log(error);
    });
}, []);

// console.log(productdetail)
// console.log(Object.keys(productdetail))
  return (
    <div>
      <Header />
      <div className="container-card__detail-product ">
        <img src={productdetail.file} alt="" />
        <h2 className="name-product">{productdetail.name}</h2>
         <p className="price-product">{productdetail.price}</p>
         <p className="description-product">{productdetail.description}</p> 
      </div>
     <Button title="Comprar"></Button>
    </div>
  );
};
export default ProductDetail;
