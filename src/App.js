
// import './App.css';
import Card from "./generalComponents/components/Cards";
import Layaut from "./generalComponents/components/Layaut"
import Nav from "./generalComponents/components/Nav"
import Footer from "./generalComponents/components/Footer";
// import Search from "./generalComponents/components/Search";
function App() {
  return (
    <div className="App">
    <Layaut>
    </Layaut>
      <Nav category="Vehiculos"/>
      <Card name="BEATS" price="$30" ubication="San Luis"/>
      <Footer></Footer>
    </div>
  );
}

export default App;
