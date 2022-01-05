import { useParams } from "react-router-dom"

const User = () => {

    // hook params captura lo que ingreso en la url 
    //  Y lo devuelve como objeto con la key como le puse en el path del componente
// const params = useParams()
// lo destructuro
 const {userId} = useParams()



  return (
       <div>
          User <h1>{userId} </h1>
       </div>
  ) 
}

export default User