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
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold p-4">Recipe Category List</h1>

     
      <ul className="underline text-blue-500 text-lg list-disc">
        {categories &&
          categories?.map((category) => (
            <Link key={category.idCategory} to={"/category/" + category.strCategory}>
              <li>{category.strCategory}</li>
            </Link>
          ))}
      </ul>
    </div>
  );
}

export default HomePage;
