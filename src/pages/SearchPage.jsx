import { useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import RecipeCard from "../components/RecipeCard";

function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  const { data, loading, error } = useFetch(
    query
      ? "https://www.themealdb.com/api/json/v1/1/search.php?s=" + query
      : null
  );

  if (!query)
    return (
      <div className="flex justify-center items-center h-60">
        <p className="text-gray-600 text-lg">
          Please enter a search term.
        </p>
      </div>
    );

  if (loading)
    return (
      <div className="flex justify-center items-center h-60">
        <Spinner />
      </div>
    );

  if (error) return <ErrorMessage error={error} />;

  if (!data?.meals)
    return (
      <div className="flex justify-center items-center h-60">
        <p className="text-gray-600 text-lg">
          No recipes found for "{query}".
        </p>
      </div>
    );

  return (
    <div className="bg-cyan-200 min-h-screen p-6">
      
      {/* Page Title */}
      <h1 className="text-2xl font-bold mb-6 text-center">
        Search Results for "{query}"
      </h1>

      {/* Responsive Grid */}
      <div
        className="grid gap-6 
                   grid-cols-1 
                   sm:grid-cols-2 
                   md:grid-cols-3 
                   lg:grid-cols-4"
      >
        {data.meals.map((meal) => (
          <RecipeCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
}

export default SearchPage;