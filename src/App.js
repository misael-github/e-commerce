import Cart from "./components/GeneralComponents/Cart";
import Footer from "./components/GeneralComponents/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import Login from "./pages/login/Login";
import Sell from "./pages/sell/Sell";
import User from "./pages/user/User";
import Users from "./pages/users/Users";
import SignUp from "./pages/sign-up/Sign-up";
import db from "./config/db";
import { useDispatch, useSelector } from "react-redux";
import ProductDetail from "./pages/detailProduct/ProductDetail";


function App() {
  const distpach = useDispatch();

  // USEeFFECT SE EJECUTA CUANDO SE MONTA EL COMPONENTE EN LA PAGINA
  // En el segundo parametro (opcional) le paso valores y cuando cambien los valores se ejecuta la function callback nuevamente
  // si no le paso nada en el array se ejecuta 1 sola vez


  useEffect(() => {
    db.auth().onAuthStateChanged((stateUser) => { // Cuando el stado de autenticacion cambie ejcuta el codigo
      distpach({ type: "SET_USER", payload: stateUser });
    });
  }, []);
  // useSelector me traigo data del store
  // const {user} = useSelector((store) => store.user)
  // console.log(user)

  return (
    
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:userId" element={<User />} />
          <Route path="/product/:productId" element={<ProductDetail/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      {/* <Cart></Cart> */}
      <footer className="footer">
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
