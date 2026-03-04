
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import Spinner from "../components/Spinner";

function CategoryPage(){

const { strCategory } = useParams();

const { data, loading, error } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + strCategory,
  );

  const meals = data?.meals;
  if(loading) return <Spinner/>
if(error) return <ErrorMessage error={error}/>

    return(
    <div className="flex flex-col items-center">
    <h2 className="text-3xl font-bold p-4">{strCategory} Recipes</h2>
     
      <ul className="underline text-blue-500 text-lg list-disc">
        {meals &&
          meals?.map((meal) => (
            <Link key={meal.idMeal} to={"/recipe/" + meal.idMeal}>
              <li>{meal.strMeal}</li>
            </Link>
          ))}
      </ul>
    </div>
    )
}

export default CategoryPage;