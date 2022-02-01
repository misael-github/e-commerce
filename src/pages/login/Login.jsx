import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../generalComponents/components/Button";
import db from "../../db";
import "./login.css";
import Input from "../../generalComponents/components/Input";
import Title from "../../generalComponents/components/Title";
import { useDispatch } from "react-redux";
import { LoginAction } from "../../actions/userAction";
import { useSelector } from "react-redux";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { firebaseErrors } from "../../firebaseErros";

const Login = () => {
  const user = useSelector((store) => store.user);
  console.log(user);
  const distpach = useDispatch();
  const history = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  function handleInputChange(e) {
    const { value, name } = e.target; // capturo el value y la propiedad name

    setFormData({ ...formData, [name]: value }); // seteo de la propiedad name con lo que me llega
    // ej email que seria mi key y el valor
    console.log(formData);
  }

  const login = async (e) => {
    e.preventDefault();
    // De la db utilizo el la función auth para loguearme y eligo con que metodo(funcion)
    // y le paso 2 parametros en este caso. Si conicide con el usuario que está en la db me loguea
    try {
      await LoginAction(formData); // Espera a que se ejecute mi LoginAtion y luego continua
      history("/");
    } catch (error) {
      alert(error);
    }
  }

  const resetPassword = () => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, formData.email)
      .then(() => {
        alert("Password reset email sent!")
      })
      .catch((error) => {
        
        alert(firebaseErrors[error.code.split('/')[1]])
      });
    }

  return (
    <div className="container-form__login">
      <Title text="¡Hola! Ingresá tu e-mail y contraseña"></Title>
      {/* <h2></h2> */}
      <form method="" onSubmit={login} className="form">
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
            placeholder="Contraseña"
            onChange={handleInputChange}
          ></Input>
        </div>

        <div className="container-btn-login">
          <Button title="CONTINUAR" type="submit"></Button>

          <Link to="/sign-up">
            <Button title="CREAR CUENTA" variant="outline"></Button>
          </Link>
        <span className="reset-password" onClick={resetPassword}>¿Olvidaste tú contraseña?</span>
          
        </div>
      </form>
    </div>
  );
};

export default Login;
