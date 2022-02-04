import Banner from "../../generalComponents/components/Banner";
import Header from "../../generalComponents/components/Header";
// import SectionProducts from "../../generalComponents/components/SectionProducts"
import jsonProducts from "../../products.json";
import auricular from "../../assets/auricular.jpg";
import Card from "../../generalComponents/components/Cards";
import Nav from "../../generalComponents/components/Nav";
import "./home.css";
import { useSelector } from "react-redux";
import SectionPoducts from "../../generalComponents/components/SectionProducts";

const HomePage = () => {
  return (
    <div>
      <Header></Header>
      <Nav category="Vehiculos"></Nav>
      <Banner> </Banner>
      <h3 className="section-products__title">Nuevas recomendaciones</h3>
      <SectionPoducts></SectionPoducts>
    </div>
  );
};
export default HomePage;
