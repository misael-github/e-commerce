import db  from "../../src/db"
import { Link, useNavigate } from "react-router-dom";

export const LoginAction = (data) => {
return (dispatch) => {
    try {
          db
          .auth()
          .signInWithEmailAndPassword(data.email, data.password)
          .then ((user)  => {
            dispatch({type:"SET_USER", payload:user})
          }
          )
        //   history("/")
        
      } catch (error) {
        console.log(error)
      }
}
}