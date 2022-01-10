import Cart from "./generalComponents/components/Cart";
import Footer from "../src/generalComponents/components/Footer";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import HomePage from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import Login from "./pages/login/Login";
import Vender from "./pages/vender/Vender";
import User from "./pages/user/User";
import Users from "./pages/users/Users";
import Registrarse from "./pages/usuario-registro/registrarse";
import "./App.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/vender" element={<Vender/>} />
          <Route
            path="/login"
            element={<Login/>}
          />
          <Route path="/sign-up" element={<Registrarse/>}></Route>
          <Route path="/users" element={<Users/>}></Route>
          <Route path="/users/:userId" element={<User/>}></Route>
          <Route path="/users/:userId" element={<User/>}></Route>
          <Route path="*" element={<NotFound/>} />
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
