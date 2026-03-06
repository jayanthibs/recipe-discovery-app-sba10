import ErrorMessage from "../components/ErrorMessage";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";

function HomePage() {
  const { data, loading, error } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php",
  );
const categories = data?.categories;

if(loading) return <Spinner/>
if(error) return <ErrorMessage error={error}/>

 return (
  <div
    className="min-h-screen flex flex-col md:flex-row"
    style={{
      backgroundImage: "url('/src/assets/background.avif')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
   
    <div className="w-full md:w-1/2 p-6 md:p-10">
      <h1 className="text-3xl font-bold text-white mb-6">
        Recipe Categories
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {categories &&
          categories.map((item) => (
            <Link
              key={item.idCategory}
              to={"/category/" + item.strCategory}
              className="block"
            >
              <li className="bg-white px-6 py-4 rounded-xl shadow-lg text-black-600 text-lg font-medium hover:bg-gray-100 transition">
                {item.strCategory}
              </li>
            </Link>
          ))}
      </ul>
    </div>
   
    <div className="hidden md:block w-1/2"></div>
  </div>
);
}

export default HomePage;
