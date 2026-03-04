
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
      <div className="bg-blue-50">
      <h2 className="text-3xl font-bold p-10 text-center">{strCategory} Recipes</h2>

      
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 w-full  px-6 pb-10">

  {meals?.map((item) => (
    <Link
      key={item.idMeal}
      to={"/recipe/" + item.idMeal}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
    >
      <img
        src={item.strMealThumb}
        alt={item.strMeal}
        className="w-full h-48 object-cover"
      />
      <h3 className="p-3 font-semibold text-center">
        {item.strMeal}
      </h3>
    </Link>
  ))}
</div>
</div>
    )
}

export default CategoryPage;