import { useParams } from "react-router-dom"
import Header from "./Header"

const ProductDetail = () => {
    const {productId} = useParams()
    console.log(productId)
  return (
  
    
      <div>
          <Header/>
          <div>
             
          </div>
          
         
      </div>
  )
}
export default ProductDetail