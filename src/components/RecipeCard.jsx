import { Link } from "react-router-dom";
function RecipeCard({ meal }) {
  return (
      <Link
      to={`/recipe/${meal.idMeal}`}
      className="bg-white rounded-2xl shadow-md overflow-hidden 
                 hover:shadow-xl hover:-translate-y-1 
                 transition duration-300 block"
    >
      <img
        className="w-full h-48 sm:h-56 md:h-48 lg:h-56 object-cover"
        src={meal.strMealThumb}
        alt={meal.strMeal}
      />

      <div className="p-4">
        <h2 className="font-semibold text-center text-sm sm:text-base md:text-lg">
          {meal.strMeal}
        </h2>
      </div>
    </Link>
  );
}

export default RecipeCard;
