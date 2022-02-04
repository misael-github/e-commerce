import { useState, useEffect } from "react";
import "../styles/sectionProducts.css";
import Card from "../../generalComponents/components/Cards";
// import hilux from "../../assets/hilux.jpg"
import lavarropas from "../../assets/lavarropas.jpg";
import jsonProducts from "../../products.json";
import db from "../../db";

const SectionPoducts = () => {

  return (
    <div className="container-section-products">
      {useEffect(() => {
        try {
          // onSnapshot es para que este escuchando todo el tiempo los cambios sino seria .get().then((querySnapshot))
          db.firestore()
            .collection("products") // colection products
            .onSnapshot((querySnapshot) => { 
              querySnapshot.forEach((doc) => {
                <Card
                  name=""
                  price={doc.data().price}
                  ubication=""
                  img={lavarropas}
                  description={doc.data().description}
                />;
                console.log(doc.data());
              });
            });
        } catch (e) {
          console.log(e);
        }
      }, [])}

      {/* {jsonProducts.map((product) => (
    <Card
      name={product.name}
      price={product.price}
      ubication={product.ubication}
      img={lavarropas}
      description={product.description}
    />
  ))} */}
    </div>
  );
};
export default SectionPoducts;
