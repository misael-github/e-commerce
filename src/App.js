import Cart from "./generalComponents/components/Cart";
import Footer from "../src/generalComponents/components/Footer";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import HomePage from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import LoginRegister from "./pages/login-register/LoginRegister";
import Vender from "./pages/vender/Vender";
import User from "./pages/user/User";
import Users from "./pages/users/Users";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage></HomePage>} />
          <Route path="/cart" element={<Cart></Cart>} />
          <Route path="/vender" element={<Vender></Vender>} />
          <Route
            path="/login-register"
            element={<LoginRegister></LoginRegister>}
          />
          <Route path="/users" element={<Users></Users>}></Route>
          <Route path="/users/:userId" element={<User></User>}></Route>
          <Route path="*" element={<NotFound></NotFound>} />
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
