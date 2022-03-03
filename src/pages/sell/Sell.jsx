import Input from "../../components/GeneralComponents/Input";
import Header from "../../components/GeneralComponents/Header";
import Button from "../../components/GeneralComponents/Button";
import Title from "../../components/GeneralComponents/Title";
// import { Link } from "react-router-dom";
import db from "../../config/db";
import "../../styles/sell.css";
import { useState } from "react";
import Swal from "sweetalert2";
import storage from "../../store/store";

const Sell = () => {
  const [file, setFile] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    file: "",
  });

  const upLoadProduct = async (e) => {
    // Creo una collection con el nombre que quiero y un doc con la info que tiene el state
    try {
      e.preventDefault();
      const productsCollectionRef = db.firestore().collection("products")
      const user = db.auth().currentUser; // Obtengo el userId
      productsCollectionRef.add({ ...formData, userId: user.uid  }).then(r => console.log(r.id))
     
     
      Swal.fire({
        title: "Producto cargado exitosamente!",
      });
    } catch (error) {
      Swal.fire({
        title: error,
      });
    }
  };
  //storage
  const putFileFB = async (file, fileName) => {
    try {
      const res = await storage.child(fileName).put(file);
      return await res.ref.getDownloadURL();
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  const handleInputChange = async (e) => {
    const img = e.target.value;
    const productId = console.log(img);
    // const url = await putFileFB(img, `/products/${productId}_${img.name}`)
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
           <div className="cotainer-input--file">
          <input type="file" className="input-file" value={file} onChange={handleInputChange} />
          </div>
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
