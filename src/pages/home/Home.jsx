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
import SlideShow from "../../generalComponents/components/SlidesShow";
import "./home.css"
import styled from "styled-components";


const HomePage = () => {
  return (
    <div className="container-HomePage">
      <Header></Header>
      <Nav category="Vehiculos"></Nav>
      <main className="main-container__slideShow">
        <Titulo>Productos destacados</Titulo>
        <SlideShow></SlideShow>
      </main>
      {/* <Banner> </Banner> */}
      <h3 className="section-products__title">Nuevas recomendaciones</h3>
      <SectionPoducts></SectionPoducts>
    </div>
  );
};

const Titulo = styled.p`

fotn-size:18px;
font-weight: 700;
text-transform:uppercase;
margin-bottom:10px;

`




export default HomePage;
