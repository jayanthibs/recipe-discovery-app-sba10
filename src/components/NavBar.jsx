import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function NavBar() {
  const [searchData, setSearchData] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/search?query="+searchData);
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/category">Home</Link>
        </li>
        <li>
          <Link to="/favorites">Favorite Recipes</Link>
        </li>
      </ul>

     
        <input
          type="search"
          placeholder="Search for a recipe"
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
        />
        <button onClick={ handleSearch}>Search</button>
     
    </nav>
  );
}

export default NavBar;
