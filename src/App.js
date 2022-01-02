// import './App.css';
// import Card from "./generalComponents/components/Cards";
// import Layaut from "./generalComponents/components/Layaut";
import Header from "./home/components/Header";
import Nav from "./generalComponents/components/Nav";
import Footer from "./generalComponents/components/Footer";
import Banner from "./home/components/Banner";
// import SectionPoducts from "./home/components/SectionProducts";
import "./home/styles/index.css";
import lavarropas from "./assets/lavarropas.jpg";
import Cart from "./generalComponents/components/Cart";
// import Search from "./generalComponents/components/Search";
import Card from "./generalComponents/components/Cards";
import jsonProducts from "../src/products.json";

function App() {
  return (
    <div className="App">
      <header className="header">
        <Header></Header>
        <Nav category="Vehiculos" icon="Categorias" />
      </header>
      <Banner></Banner>

        <h3 className="section-products__title">Nuevas recomendaciones</h3>
      <section className="container-section-products">

        {jsonProducts.map((product) => (
          <Card
            name={product.name}
            price={product.price}
            ubication={product.ubication}
            img={lavarropas}
            description={product.description}
          />
        ))}
      </section>
      <Cart></Cart>
      <footer className="footer">
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
