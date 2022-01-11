import { Link } from "react-router-dom";
import { useState } from "react";
import db from "../../db";

import "./sign-up.css";
import Input from "../../generalComponents/components/Input";
import Button from "../../generalComponents/components/Button";

const SignUp = () => {
  const [formData, setFormData] = useState({
    // firstNameAndLastName: "",
    password: "",
    email: "",
  });
  function handleInputChange(e) {
    const { value, name } = e.target; // capturo el value y la propiedad name

    setFormData({ ...formData, [name]: value }); // seteo de la propiedad name con lo que me llega
    // ej email que seria mi key y el valor
  }
  console.log(formData);

  const SignUp = async (e) => {
    e.preventDefault();
    // De la db utilizo el la función auth para loguearme y eligo con que metodo(funcion)
    // y le paso 2 parametros en este caso. Si conicide con el usuario que está en la db me loguea
    const user = await db
      .auth()
      .createUserWithEmailAndPassword(formData.email, formData.password);
    console.log(user);
  };
  return (
    <div className="container-form__login">
      <h2>¡Hola! Creá tu cuenta de Olx</h2>
      <form method="" onSubmit={SignUp} className="form">
       

        <div className="fieldset">
          <label className="fieldset-label"></label>
          <i class="fas fa-envelope icons-email-password"></i>
          <Input
            type="email"
            className="fieldset-input"
            name="email"
            placeholder="Email"
            onChange={handleInputChange}
          ></Input>
        </div>
        <div className="fieldset">
          <label className="fieldset-label"></label>
          <i class="fas fa-lock icons-email-password"></i>
          <Input
            type="password"
            className="fieldset-input"
            name="password"
            placeholder="Crear contraseña"
            onChange={handleInputChange}
          ></Input>
        </div>
        <div className="container-btn-login">
          <Button title="CREAR CUENTA"></Button>
          <Link to="/login">
            <Button title="SIGN-UP"></Button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
