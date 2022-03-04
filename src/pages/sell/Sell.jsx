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
import { useEffect } from "react";

const Sell = () => {
  const [files, setFiles] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    file:""
  });

  const archivoHandler = async  (e) => {
    const archivo = e.target.files[0] // Obtengo la imagen
    const storageRef = db.storage().ref() // Hago referencia al storage
    const archivoPath =  storageRef.child(archivo.name)
    await archivoPath.put(archivo) // Inserto el archivo
    console.log("archivo cargado: ", archivo.name)
    const url = await archivoPath.getDownloadURL() // Obtengo la url
    await setFormData({...formData, file: url})
   
    console.log(formData.file)
  }
  const upLoadProduct = async (e) => {
    // Creo una collection con el nombre que quiero y un doc con la info que tiene el state
    try {
      e.preventDefault();
      const productsCollectionRef = await db.firestore().collection("products")
      const user = db.auth().currentUser; // Obtengo el userId
      Swal.fire({
        title:"Cargando...",
        // confirmButtonText:"",
        showConfirmButton:false,

      })
      await productsCollectionRef.add({ ...formData, userId: user.uid  })
        Swal.fire({
          icon:"success",
          title: "¡Producto cargado exitosamente!",
       
      })
    
    } catch (error) {
      Swal.fire({
        title: error,
      });
    }
  };

  // useEffect(() => {
  //   const readData = async () => {
  //     const fileList = await db.firestore().collection("products").get()
  //     setFiles(fileList.docs.map((doc) => doc.data()))
  //   }
  //   readData()
  // }, [])
  


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
          <input type="file" className="input-file"  onChange={archivoHandler} />
          </div>
          <ul className="ul-file"> 
            {files.map((doc) => 
              <li className="ul-file__items"><img src={doc.file} alt="" height="100px" width="100px" /></li>
            )}
          </ul>
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
