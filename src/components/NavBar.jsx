import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
function NavBar() {
  const [searchData, setSearchData] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search?query="+searchData);
  };

  return (
    <nav className="bg-sky-950">
      <div className="flex justify-between p-10">
      <h1 className="font-bold text-4xl text-white">Recipe Discovery App</h1>
      
      <ul className="flex gap-[50px] text-white mt-2 text-xl font-bold">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/favorites">Favorite Recipes</Link>
        </li>
      </ul>

     <form onSubmit={handleSubmit} className="relative w-80">
        <input
          type="search"
          placeholder="Search for a recipe"
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
         className="border bg-white p-2 pl-10 rounded-lg w-full"
        />
        <MagnifyingGlassIcon
className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-800"
/>
        {/* <button className="text-white" onClick={ handleSearch}>Search</button> */}
        </form>
        </div>
       
     
    </nav>
  );
}

export default NavBar;
