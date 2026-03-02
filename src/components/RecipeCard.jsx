import { Link } from "react-router-dom";
function RecipeCard({ meal }) {
  return (
    <>
    <Link to={"/recipe/" + meal.idMeal}>
      <h2>{meal.strMeal} Recipe</h2>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      </Link>
    </>
  );
}

export default RecipeCard;
