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
    <nav className="bg-sky-900">
<div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-10 lg:px-20 py-6 gap-4">

<h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold text-center md:text-left">
Recipe Discovery App
</h1>

<ul className="flex flex-wrap justify-center md:justify-start text-lg md:text-xl font-bold text-white gap-6 md:gap-12">
<li>
<Link to="/">Home</Link>
</li>
<li>
<Link to="/favorites">Favorite Recipes</Link>
</li>
</ul>

<form onSubmit={handleSubmit} className="flex relative w-full max-w-xs">
<input
type="search"
placeholder="Search for a recipe..."
onChange={(e) => setSearchData(e.target.value)}
value={searchData}
className="border bg-white p-2 pl-10 rounded-lg w-full"
/>
<MagnifyingGlassIcon
className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-900"
/>
</form>

</div>
</nav>
  );
}

export default NavBar;
