import { useContext } from "react";
import { FavoritesContext } from "../AppProviders";
import useFetch from '../hooks/useFetch';
import RecipeCard from "../components/RecipeCard";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

function FavoritesPage(){
    
    const { favorites } = useContext(FavoritesContext);

    if(favorites.length === 0) return <p> No Favorites Yet! Browse and add Favorite Recipes</p>

    return(
    <>
  { favorites.map(id => <FavoritesRecipe key={id} id={id}/>)}
    </>
    )
}

export default FavoritesPage;

function FavoritesRecipe({id}){

  const {data, loading, error} = useFetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i="+id);
  console.log(data);

   if (loading) return <Spinner />;
  if (error) return <ErrorMessage error={error} />;

  if (!data?.meals) return null;
const meal = data.meals[0];


  return(
    <>
    {<RecipeCard key = {meal.idMeal} meal={meal}/>}
    </>
  )

}