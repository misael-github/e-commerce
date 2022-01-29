import Input from "../../generalComponents/components/Input"
import Header from "../../generalComponents/components/Header"
import Button from "../../generalComponents/components/Button"
import Title from "../../generalComponents/components/Title";
import { Link } from "react-router-dom";
import "./sell.css"

const Sell = () => {
    return(
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
            name="email"
            placeholder=" "
            // onChange={handleInputChange}
          ></Input>
        </div>
        <div className="fielset-sell">
          <label className="fieldset-label">Descripción</label>
          <i class=""></i>
          <Input
            type="text"
            className="fieldset-input"
            name="password"
            placeholder="Ej.:Celular Samsung Galaxy s9 64gb Negro"
            // onChange={handleInputChange}
          ></Input>
        </div>
        <div className="fielset-sell">
          <label className="fieldset-label">Precio</label>
          <i class=""></i>
          <Input
            type="number"
            className="fieldset-input"
            name="password"
            placeholder=""
            // onChange={handleInputChange}
          ></Input>
        </div>
        <div className="container-btn-login">
         
        <Button title="CONTINUAR" type="submit"></Button>
        
        {/* <Link to="/sign-up">
          <Button title="CREAR CUENTA" variant="outline" ></Button>
        </Link> */}
        </div>
      </form>
    </div>
        </div>
    )
}

export default Sell