import { useState, useEffect } from "react";
import "../../styles/GeneralComponents/sectionProducts.css";
import Card from "../../components/GeneralComponents/Cards";
// import hilux from "../../assets/hilux.jpg"
import lavarropas from "../../assets/lavarropas.jpg";
import jsonProducts from "../../products.json";
import db from "../../config/db";

const SectionPoducts = () => {

  const [products, setProducts]= useState([])
  useEffect(() => {
    try {
      // onSnapshot es para que este escuchando todo el tiempo los cambios sino seria .get().then((querySnapshot))
      const productsRef = db.firestore().collection("products")

      productsRef.onSnapshot((snap) => { 
          const productsList = []
          snap.forEach((doc) => {
            productsList.push({
            id:doc.id,
            ...doc.data()
            })
            // let data = doc.data() // Creo una var data y le asigno la toda la data que traigo de la db. (la db me trae la data en formato objeto)
            // data.id = doc.id  // Creo la prop id en el objeto data y le doy el valor de doc.id
            // // console.log(data)
            // productsList.push(data) // A el array de objetos le agrego data. Me da un warning
            
          });
          console.log(productsList)
          setProducts(productsList);
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

               key = {p.id}
               name={p.name.charAt(0).toUpperCase() + p.name.slice(1)} // charAt devuelve el caractér de una cadena y slice elimina lo que le indico y crea un array con todo lo demás
               price={p.price}
               ubication=""
               img={p.file}
               shortDescription={p.shortDescription.charAt(0).toUpperCase() + p.shortDescription.slice(1)}
               id = {p.id}
             />
      ))
    }
    </div>
  
);

};
export default SectionPoducts;
