import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import db from "../../config/db";
import "../../styles/sign-up.css"
import Title from "../../components/GeneralComponents/Title";

import Input from "../../components/GeneralComponents/Input";
import Button from "../../components/GeneralComponents/Button";
import { LoginAction } from "../../actions/userAction";
import { firebaseErrors } from "../../firebaseErros";
import {FaUser}  from "react-icons/fa"
import {AiFillHome} from "react-icons/ai"
import {BsPhoneFill} from "react-icons/bs"
import {MdEmail} from "react-icons/md"
import {RiLockPasswordFill} from "react-icons/ri"
import Swal from "sweetalert2";

const SignUp = () => {
  const history = useNavigate();

  const [formData, setFormData] = useState({
    // firstNameAndLastName: "",
    password: "",
    email: "",
    name: "",
    country: "",
    province:"",
    phone: "",
  });

  function handleInputChange(e) {
    const { value, name } = e.target; // capturo el value y la propiedad name
    setFormData({ ...formData, [name]: value }); // seteo de la propiedad name con lo que me llega
    // ej email que seria mi key y el valor
  }
  console.log(formData);

  const SignUp = async (e) => {
    e.preventDefault();
    try {
      // De la db utilizo el la función auth para loguearme y eligo con que metodo(funcion)
      // y le paso 2 parametros en este caso. Si conicide con el usuario que está en la db me loguea
      const credential = await db
        .auth()
        .createUserWithEmailAndPassword(formData.email, formData.password); // Creo un user
      await db.firestore().collection("users").doc(credential.user.uid).set({
        email: formData.email,
        name: formData.name,
        country: formData.country,
        phone: formData.phone,
        province: formData.province
      }); // Creo un doc en la collection user con el id que me genera firebase al crear el user
      Swal.fire({
        icon: "success",
        title: "Usuario creado correctamente!",
        showConfirmButton: false,
        timer: 1000,
      });

      await LoginAction(formData); // Espera a que se ejecute mi LoginAtion y luego continua
      history("/");
    } catch (error) {
      Swal.fire({
        title: firebaseErrors[error.code.split("/")[1]],
      });
    }
  };
  return (
    <div className="container-form__login">
      <Title text="¡Hola! Creá tu cuenta de Olx"></Title>
      {/* <h2></h2> */}
      <form method="" onSubmit={SignUp} className="form">
        <div className="fieldset">
          <label className="fieldset-label"></label>
          <FaUser
          className="icons-account icon-user"
          />
          {/* <i class="fas fa-lock icons-email-password"></i> */}
          <Input
            type="text"
            className="fieldset-input"
            name="name"
            placeholder="Nombre y apellido"
            onChange={handleInputChange}
          ></Input>
        </div>
        <div className="fieldset">
          <label className="fieldset-label"></label>
          <FaUser
          className="icons-account icon-user"
          />
          {/* <i class="fas fa-lock icons-email-password"></i> */}
          <Input
            type="text"
            className="fieldset-input"
            name="name"
            placeholder="Provincia"
            onChange={handleInputChange}
          ></Input>
        </div>
        <div className="fieldset">
          <label className="fieldset-label"></label>
          <AiFillHome
          className="icons-account"
          />
          {/* <i class="fas fa-lock icons-email-password"></i> */}
          <Input
            type="text"
            className="fieldset-input"
            name="country"
            placeholder="Domicilio"
            onChange={handleInputChange}
          ></Input>
        </div>
        <div className="fieldset">
          <label className="fieldset-label"></label>
          <BsPhoneFill
          className="icons-account"
          />
          {/* <i class="fas fa-lock icons-email-password"></i> */}
          <Input
            type="text"
            className="fieldset-input"
            name="phone"
            placeholder="Celular"
            onChange={handleInputChange}
          ></Input>
        </div>
        <div className="fieldset">
          <label className="fieldset-label"></label>
          <MdEmail
          className="icons-account"
          />
          {/* <i class="fas fa-envelope icons-email-password"></i> */}
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
          <RiLockPasswordFill
          className="icons-account"
          />
          {/* <i class="fas fa-lock icons-email-password"></i> */}
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
            <Button title="SIGN-UP" variant="outline"></Button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
