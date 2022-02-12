import Header from "../../generalComponents/components/Header";
import "./home.css";
import { useSelector } from "react-redux";
import SectionPoducts from "../../generalComponents/components/SectionProducts";
import {
  SlideShow,
  Slide,
  TextoSlide,
} from "../../generalComponents/components/SlidesShow";
import "./home.css";
import styled from "styled-components";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";

const HomePage = () => {
  return (
    <div className="container-HomePage">
      <Header></Header>
      {/* <Nav category="Vehiculos"></Nav> */}
      <main className="main-container__slideShow">
        <Titulo>Productos destacados</Titulo>
        <SlideShow controls = {true} autoplay= {true} velocidad = {2000} interval={2000}>
            <Slide>
              <a href="https://www.google.com"></a>
              <img src={img1} alt="" />
              {/* <TextoSlide>
                <p>15% de descuento en productos Apple</p>
              </TextoSlide> */}
            </Slide>
            <Slide>
              <a href="https://www.google.com"></a>
              <img src={img2} alt="" />
              {/* <TextoSlide>
                <p>15% de descuento en productos Apple</p>
              </TextoSlide> */}
            </Slide>
            <Slide>
              <a href="https://www.google.com"></a>
              <img src={img3} alt="" />
              {/* <TextoSlide>
                <p>15% de descuento en productos Apple</p>
              </TextoSlide> */}
            </Slide>
            <Slide>
              <a href="https://www.google.com"></a>
              <img src={img4} alt="" />
              {/* <TextoSlide>
                <p>15% de descuento en productos Apple</p>
              </TextoSlide> */}
            </Slide>
    
        </SlideShow>
      </main>
     
      <h3 className="section-products__title">Nuevas recomendaciones</h3>
      <SectionPoducts></SectionPoducts>
    </div>
  );
};

const Titulo = styled.p`
  fotn-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 10px;
  padding-left:15px;
`;

export default HomePage;
