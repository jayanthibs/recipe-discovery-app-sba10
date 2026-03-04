import { Link } from "react-router-dom";
function RecipeCard({ meal }) {
  return (
    <>
      <Link to={"/recipe/" + meal.idMeal}>
        <h2 className="text-3xl font-bold p-4">{meal.strMeal} Recipe</h2>
        <img
          className="w-full max-w-sm rounded-lg"
          src={meal.strMealThumb}
          alt={meal.strMeal}
        />
      </Link>
    </>
  );
}

export default RecipeCard;
