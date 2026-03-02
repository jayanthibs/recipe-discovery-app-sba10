import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import Spinner from "../components/Spinner";
import { useContext } from "react";
import { FavoritesContext } from "../AppProviders";

function RecipeDetailPage() {

  
  const { idMeal } = useParams();
  const {addFavorite, removeFavorite, isFavorite} = useContext(FavoritesContext);

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
        <div style={{ backgroundColor: "lightSalmon" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2>{meal.strMeal} Recipe</h2>

           {  isFavorite(meal.idMeal)? <button onClick={()=>removeFavorite(meal.idMeal)}>Remove from Favotites</button> : <button onClick={()=>addFavorite(meal.idMeal)}>Add to Favotites</button> }

            <img
              style={{ width: "400px", height: "300px" }}
              src={meal.strMealThumb}
              alt={meal.strMeal}
            />
          </div>

          <h3>Ingredients:</h3>
          <ul>
          {ingredients.map(item=> <li key={item}>{item}</li>)}
          </ul>

          <h3>Instructions:</h3>
          <p>{meal.strInstructions}</p>
        </div>
      )}
    </>
  );
}

export default RecipeDetailPage;
