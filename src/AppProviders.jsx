import { createContext, useState } from "react";

export const FavoritesContext = createContext();

function AppProviders({ children }) {
  const [favorites, setFavorites] = useState([]);

  // Add an ID to favorites
  const addFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev : [...prev, id]
    );
  };

  // Remove an ID from favorites
  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((item) => item !== id));
   
  };

  // Check if an ID is in favorites and return message
  const isFavorite = (id) => {
    return favorites.includes(id);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export default AppProviders;