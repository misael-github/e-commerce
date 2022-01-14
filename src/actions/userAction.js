import db  from "../../src/db"
import { Link, useNavigate } from "react-router-dom";

// El Action interactua con una promesa asincrona y luego de eso dispacha info al store
export const LoginAction = async (data) => {

    try {
      await db 
          .auth()
          .signInWithEmailAndPassword(data.email, data.password) 
        //   history("/")
        
      } catch (error) {
        console.log(error)
      }
}
