import db  from "../../src/db"
import { Link, useNavigate } from "react-router-dom";

// El Action interactua con una promesa asincrona y luego de eso dispacha info al store
export const LoginAction = (data) => {
return (dispatch) => { 
    try {
          db
          .auth()
          .signInWithEmailAndPassword(data.email, data.password)
          .then ((user)  => { //Capturo el user si es que se ejecutó correctamente(signInWithEmailAndPassword) 
                              //osea si se logueó correctamente
            dispatch({type:"SET_USER", payload:user})// Manda la info al reducer con el type "SET_USER" y 
                                                     // en payload paso la data
          }
          )
        //   history("/")
        
      } catch (error) {
        console.log(error)
      }
}
}