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
    "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + idMeal
  );

  const meal = data?.meals?.[0];

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

  if (loading)
    return (
      <div className="flex justify-center items-center h-60">
        <Spinner />
      </div>
    );

  if (error) return <ErrorMessage error={error} />;

  return (
    <>
      {meal && (
        <div className="bg-cyan-200 min-h-screen p-6">
          
          {/* Header */}
          <div className="flex justify-between items-center max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold">
              {meal.strMeal}
            </h2>

            <button
              onClick={() =>
                isFavorite(meal.idMeal)
                  ? removeFavorite(meal.idMeal)
                  : addFavorite(meal.idMeal)
              }
              className="p-2 transition"
            >
              {isFavorite(meal.idMeal) ? (
                <SolidHeart className="w-8 h-8 text-red-500" />
              ) : (
                <OutlineHeart className="w-8 h-8 text-gray-400 hover:text-red-500" />
              )}
            </button>
          </div>

          {/* Main Content Grid */}
          <div className="max-w-6xl mx-auto mt-8 grid gap-10 md:grid-cols-2">
            
            {/* Image */}
            <div>
              <img
                className="w-full rounded-2xl shadow-lg"
                src={meal.strMealThumb}
                alt={meal.strMeal}
              />
            </div>

            {/* Ingredients */}
            <div>
              <h3 className="text-xl font-bold mb-4">
                Ingredients
              </h3>

              <ul className="space-y-2 text-black font-medium">
                {ingredients.map((item) => (
                  <li
                    key={item}
                    className="bg-white p-2 rounded-md shadow-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Instructions Section */}
          <div className="max-w-4xl mx-auto mt-12">
            <h3 className="text-xl font-bold mb-4">
              Instructions
            </h3>

            <p className="text-black leading-relaxed whitespace-pre-line ">
              {meal.strInstructions}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default RecipeDetailPage;