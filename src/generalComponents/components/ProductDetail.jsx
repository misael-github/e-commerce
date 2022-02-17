import { useParams } from "react-router-dom"
import Header from "./Header"

const ProductDetail = () => {
    const {params} = useParams()
  return (
      <div>
          <Header/>
          
         
      </div>
  )
}
export default ProductDetail