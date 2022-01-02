import { useState } from "react";
import "../styles/cards.css";
// import auriculares from "../../assets/auricular.jpg";
import jsonProducts from "../../products.json"
// import { json } from "express";

const Cart = (props) => {

  const [cart, setCart] = useState(jsonProducts)


//   function para borrar 1 producto del carrito
  const deleteProduct = (productId) => {
  const changeCart =  cart.filter(product => product.id !== productId)
  setCart(changeCart)
  
  }
//   function para vaciar el carrito
 const emptyCart = () => {
    const changeCart = []
    setCart(changeCart)

 }

 const addProduct = (newProduct) => {
     newProduct.id = Date.now()
    const changeCart = [
        newProduct,
        ...cart
    ]

    setCart(changeCart)
 }

 const upDateProduct = (editProduct) => {
   const changeCart = cart.map(product => (
    // Acutualizo con los nuevos datos que le pase por params
       product.id === editProduct.id
       ? editProduct
       : product
   ))

    setCart(changeCart)
 }
  return (
    <div>
         <button onClick={() => addProduct({title:"remera", description:"remera vieja"})}>
           Add
       </button>
       
  

        <button onClick={() => deleteProduct(3)}>
            Delete
        </button>
      
      
        <button onClick={() => emptyCart()}>
            Empty Cart
        </button>
        
   {/* Recorro mi state cart que tiene adentro el json de los productos */}
    {cart.map(product => (
      <div key={product.id}>
       <h1>{product.id}{product.title}</h1>
       <p>{product.description}</p>
        
         
       <button onClick={() => deleteProduct(product.id)}>
            Delete
        </button>
        <button 
           onClick={() => upDateProduct({id:product.id, title:"titulo nuevo", description:"remera nueva edit"})}>
           UpDate
       </button>


       
      </div>
  ))}
   
    </div>
  );
};
export default Cart;
