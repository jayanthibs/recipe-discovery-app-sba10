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

  if (!query) return <p>Please enter a search term.</p>;
  if (loading) return <Spinner />;
  if (error) return <ErrorMessage error={error} />;

  if (!data?.meals) return <p>No recipes found.</p>;

  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {data.meals.map((meal) => (
        <RecipeCard key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
}

export default SearchPage;
