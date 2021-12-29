// import './App.css';
import Card from "./generalComponents/components/Cards";
import Layaut from "./generalComponents/components/Layaut";
import Header from "./home/components/Header";
import Nav from "./generalComponents/components/Nav";
import Footer from "./generalComponents/components/Footer";
import Banner from "./home/components/Banner";
import SectionPoducts from "./home/components/SectionProducts";
// import Search from "./generalComponents/components/Search";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Nav category="Vehiculos" />
      <Banner></Banner>
      <SectionPoducts></SectionPoducts>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
