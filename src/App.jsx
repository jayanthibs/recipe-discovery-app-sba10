import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import SearchPage from "./pages/SearchPage";
import FavoritesPage from "./pages/FavoritesPage ";
import "./App.css";
import AppProviders from "./AppProviders";

function App() {
  return (
    <AppProviders>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:strCategory" element={<CategoryPage />} />
        <Route path="/recipe/:idMeal" element={<RecipeDetailPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </AppProviders>
  );
}

export default App;
