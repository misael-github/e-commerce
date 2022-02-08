import { useState, useEffect } from "react";
import "../styles/sectionProducts.css";
import Card from "../../generalComponents/components/Cards";
// import hilux from "../../assets/hilux.jpg"
import lavarropas from "../../assets/lavarropas.jpg";
import jsonProducts from "../../products.json";
import db from "../../db";

const SectionPoducts = () => {

  const [products, setProducts]= useState([])
  useEffect(() => {
    try {
      // onSnapshot es para que este escuchando todo el tiempo los cambios sino seria .get().then((querySnapshot))
      db.firestore()
      .collection("products") // colection products
      .onSnapshot((querySnapshot) => { 
          const productsList = []
          querySnapshot.forEach((doc) => {
            productsList.push(doc.data())
          });
          setProducts(productsList);
          console.log(products)
        });
      } catch (e) {
        console.log(e);
      }
  }, [])
  
  return (
    <div className="container-section-products">
    {
      products.map((p) =>(
        
        <Card
               name={p.name}
               price={p.price}
               ubication=""
               img={lavarropas}
               description={p.description}
             />
      ))
    }
    </div>
  
);

};
export default SectionPoducts;
