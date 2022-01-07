import { useState } from "react";
import {Link} from "react-router-dom"
import db from "../../db"

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  function handleInputChange(e) {
    const { value, name } = e.target; // capturo el value y la propiedad name

    setFormData({ ...formData, [name]: value }); // seteo de la propiedad name con lo que me llega
                                                // ej email que seria mi key y el valor
  }

  const login = async (e) => {
    e.preventDefault();
    // De la db utilizo el la función auth para loguearme y eligo con que metodo(funcion)
    // y le paso 2 parametros en este caso. Si conicide con el usuario que está en la db me loguea
    const user = await db.auth().signInWithEmailAndPassword(formData.email, formData.password)
    console.log(user)
  };

  return (
    <div className="container-form">
      <form method="" onSubmit={login} className="form">
        <div className="fieldset">
          <label className="fieldset-label">login</label>
          <input className="fieldset-input"  name="email" onChange={handleInputChange} type="text" />
        </div>
        <div className="fieldset">
          <label className="fieldset-label">contraseña</label>
          <input className="fieldset-input" name="password" type="password" onChange={handleInputChange} />
        </div>
        <button type="submit">Enviar</button>
        <Link to ="/registrse">Recuperar clave | Registrarse</Link>
      </form>
    </div>
  );
};

export default Login;
