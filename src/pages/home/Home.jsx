import Banner from "../../generalComponents/components/Banner";
import Header from "../../generalComponents/components/Header";
// import SectionProducts from "../../generalComponents/components/SectionProducts"
import jsonProducts from "../../products.json";
import auricular from "../../assets/auricular.jpg";
import Card from "../../generalComponents/components/Cards";
import Nav from "../../generalComponents/components/Nav";

const HomePage = () => {
  return (
    <div>
      <header className="header">
        <Header></Header>
        <Nav category="Vehiculos"></Nav>
      </header>
      <Banner></Banner>

      <h3 className="section-products__title">Nuevas recomendaciones</h3>

      <section className="container-section-products">
        {jsonProducts.map((product) => (
          <Card
            name={product.title}
            price={product.price}
            ubication={product.ubication}
            description={product.description}
            img={auricular}
          ></Card>
        ))}
      </section>
    </div>
  );
};
export default HomePage;
