import { useState } from "react";
import {Link} from "react-router-dom"
import Button from "../../generalComponents/components/Button";
import db from "../../db"
import "./login.css"
import Input from "../../generalComponents/components/Input";

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
    <div className="container-form__login">
        <h2>¡Hola! Ingresá tu e-mail y contraseña</h2>
      <form method="" onSubmit={login} className="form">
        <div className="fieldset">
          <label className="fieldset-label">Email</label>
          {/* <input className="fieldset-input"  name="email" onChange={handleInputChange} type="text" /> */}
        <Input type="text" className="fieldset-input" name="email" onChange={handleInputChange}></Input>
        </div>
        <div className="fieldset">
          <label className="fieldset-label">Contraseña</label>
          {/* <input className="fieldset-input" name="password" type="password" onChange={handleInputChange} /> */}
          <Input type="password" className="fieldset-input" name="password" onChange={handleInputChange}></Input>
        </div>
        <Button title="Enviar"></Button>
        <Link to ="/usuario_registro"><Button title="Crear cuenta"></Button></Link>
      </form>
    </div>
  );
};

export default Login;
