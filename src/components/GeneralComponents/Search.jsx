import { useState } from "react";
import "../../styles/GeneralComponents/inputSearch.css";

const SearchInput = () => {
const [search, setSearch] = useState("")

const handleInputChange = (e) => {
  const dataInput = e.target.value
  setSearch(dataInput)
  console.log(search)
}

  return (
    // <div className="container-search">
    //   <form className="nav-search">
    <input
    className="input-search"
    type="text"
    name=""
    id=""
    placeholder="Buscar productos, marcas y mas..."
    onChange={handleInputChange}
  />
        // {/* <button className="btn-search">Buscar</button> */}
      // {/* </form>
    // </div> */}
  );
};

export default SearchInput;
