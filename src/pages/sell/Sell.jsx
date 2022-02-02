import Input from "../../generalComponents/components/Input";
import Header from "../../generalComponents/components/Header";
import Button from "../../generalComponents/components/Button";
import Title from "../../generalComponents/components/Title";
import { Link } from "react-router-dom";
import db from "../../db";
import "./sell.css";
import { useState } from "react";

const Sell = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
  });

  const upLoadProduct = async (e) => {
    // Creo una collection con el nombre que quiero y un doc con la info que tiene el state
    try {
      e.preventDefault();
      const user = db.auth().currentUser // Obtengo el userId 
      
      await db.firestore().collection("products").doc().set({...formData, userId: user.uid});
      alert("Producto cargado exitosamente!")
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="container-sell">
      <Header></Header>
      <div className="container-form__login">
        <Title text="¡Vendé tus productos en Olx!"></Title>
        <form method="" onSubmit="" className="form-sell">
          <div className=" fielset-sell">
            <label className="fieldset-label">Nombre</label>
            <i class=""></i>
            <Input
              type="text"
              className="fieldset-input"
              name="name"
              placeholder=" "
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            ></Input>
          </div>
          <div className="fielset-sell">
            <label className="fieldset-label">Descripción</label>
            <i class=""></i>
            <Input
              type="text"
              className="fieldset-input"
              name="description"
              placeholder="Ej.:Celular Samsung Galaxy s9 64gb Negro"
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            ></Input>
          </div>
          <div className="fielset-sell">
            <label className="fieldset-label">Precio</label>
            <i class=""></i>
            <Input
              type="number"
              className="fieldset-input"
              name="price"
              placeholder=""
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
            ></Input>
          </div>
          <input type="file" />
          <div className="container-btn-login">
            <Button
              title="CONTINUAR"
              type="submit"
              onClick={upLoadProduct}
            ></Button>

            {/* <Link to="/sign-up">
          <Button title="CREAR CUENTA" variant="outline" ></Button>
        </Link> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sell;
