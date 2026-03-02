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
    <>
      <h1>Category List</h1>

     
      <ul>
        {categories &&
          categories?.map((category) => (
            <Link key={category.idCategory} to={"/category/" + category.strCategory}>
              <li>{category.strCategory}</li>
            </Link>
          ))}
      </ul>
    </>
  );
}

export default HomePage;
