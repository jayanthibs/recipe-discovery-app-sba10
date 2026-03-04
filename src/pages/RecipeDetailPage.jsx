import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import Spinner from "../components/Spinner";
import { useContext } from "react";
import { FavoritesContext } from "../AppProviders";
import { HeartIcon as SolidHeart } from "@heroicons/react/24/solid";
import { HeartIcon as OutlineHeart } from "@heroicons/react/24/outline";

function RecipeDetailPage() {
  const { idMeal } = useParams();
  const { addFavorite, removeFavorite, isFavorite } =
    useContext(FavoritesContext);

  const { data, loading, error } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + idMeal,
  );

  const meal = data?.meals?.[0];

  // Dynamically extract ingredients
  const ingredients = [];
  if (meal) {
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== "") {
        ingredients.push(`${ingredient} - ${measure}`);
      }
    }
  }

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <>
      {meal && (
        <div className="bg-blue-50 flex flex-col items-center">
          <h2 className="text-3xl font-bold p-4">{meal.strMeal} Recipe</h2>

          <button
            onClick={() =>
              isFavorite(meal.idMeal)
                ? removeFavorite(meal.idMeal)
                : addFavorite(meal.idMeal)
            }
            className="p-2 transition"
          >
            {isFavorite(meal.idMeal) ? (
              <SolidHeart className="w-10 h-10 text-red-500" />
            ) : (
              <OutlineHeart className="w-10 h-10 text-gray-400 hover:text-red-500" />
            )}
          </button>

          <img
            className="w-120 h-100 rounded-lg"
            src={meal.strMealThumb}
            alt={meal.strMeal}
          />

          <h3 className="text-2xl font-bold p-4 flex justify-start">Ingredients:</h3>
          <ul>
            {ingredients.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h3 className="text-2xl font-bold p-4">Instructions:</h3>
          <p>{meal.strInstructions}</p>
        </div>
      )}
    </>
  );
}

export default RecipeDetailPage;
