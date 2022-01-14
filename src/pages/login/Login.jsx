import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../generalComponents/components/Button";
import db from "../../db";
import "./login.css";
import Input from "../../generalComponents/components/Input";
import { useDispatch } from "react-redux";
import { LoginAction } from "../../actions/userAction";
import { useSelector } from "react-redux";


const Login = () => {
  
  const user = useSelector((store) => store.user)
  console.log(user)
  const distpach = useDispatch()
  const history = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  function handleInputChange(e) {
    const { value, name } = e.target; // capturo el value y la propiedad name

    setFormData({ ...formData, [name]: value }); // seteo de la propiedad name con lo que me llega
    // ej email que seria mi key y el valor
    console.log(formData)
  }

  const login = async (e) => {
    e.preventDefault();
    // De la db utilizo el la función auth para loguearme y eligo con que metodo(funcion)
    // y le paso 2 parametros en este caso. Si conicide con el usuario que está en la db me loguea
   await LoginAction(formData)// Espera a que se ejecute mi LoginAtion y luego continua
    history("/")
  }

  return (
    <div className="container-form__login">
      <h2>¡Hola! Ingresá tu e-mail y contraseña</h2>
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
          <Button title="CREAR CUENTA" variant="outline" ></Button>
        </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
