import { useState } from "react";
import { FaSearch } from "react-icons/fa";


function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={() => onSearch(city)}><FaSearch size={15} /></button>
    </div>
  );
}


export default SearchBar;