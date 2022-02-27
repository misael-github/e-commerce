import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../../generalComponents/components/Header";
import db from "../../db";

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
      <div>
        <h2>{productdetail.name}</h2>
         <p>{productdetail.description}</p> 
         <p>{productdetail.price}</p>
      </div>
    </div>
  );
};
export default ProductDetail;
