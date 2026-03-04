<h1 align="center">Recipe Discovery App </h1>

A modern and responsive Recipe Discovery web application built with React that allows users to browse categories, view recipe details, search meals, and save their favorite recipes using the TheMealDB. 

## Installation & Setup
````bash
git clone https://github.com/jayanthibs/recipe-discovery-app-sba10.git
cd recipe-discovery-app-sba10
npm install
npm run dev
````

## Features

### Home Page (/)
- Fetches and displays all available recipe categories
- Each category links to its dynamic category page
### Category Page (/category/:categoryName)
- Displays recipes filtered by selected category
- Each recipe links to its detailed recipe page
### Recipe Detail Page (/recipe/:recipeId)
#### Displays:
- Recipe name
- Recipe image
- Ingredients list
- Instructions
- Includes Add to Favorites / Remove from Favorites functionality
- Favorite state managed globally via Context API
### Favorites Page (/favorites)
- Displays all saved favorite recipes
- Persists across browser sessions
- Shows friendly message if no favorites exist
### Search Functionality
- Search bar available in Navbar
- avigates to /search?query=RecipeName
- Displays search results dynamically

## Core Concepts Implemented

### State Management & Data Fetching
- useState
- useEffect
- Loading states (Spinner component)
- Error handling (ErrorMessage component)

### Custom Hooks
#### useFetch
A reusable hook that:
 - Fetches API data
 - Manages data, loading, and error
 - Used across all pages
#### useLocalStorage
 - Synchronizes state with localStorage
 - Persists favorites across browser sessions

### Global State (Context API)
#### FavoritesContext
Provides:
 - favorites → array of favorite recipe IDs
 - addFavorite(id)
 - removeFavorite(id)
 - isFavorite(id)
 - Internally uses useLocalStorage to persist data.

### Routing (React Router)
` Route	                            Description`<br/>
`/	                              Categories page`<br/>
`/category/:categoryName	      Recipes by category`<br/>
`/recipe/:recipeId	              Recipe detail`<br/>
`/favorites	                      Favorite recipes`<br/>
`/search?query=	                  Search results`

## Tech Stack

- React
- React Router DOM
- Context API
- Custom Hooks
- JavaScript (ES6+)
- Tailwind CSS (Responsive Design)
- TheMealDB API

## API Endpoints Used

From TheMealDB:

- List Categories
https://www.themealdb.com/api/json/v1/1/categories.php

- Filter by Category
https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood

- Recipe Details by ID
https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772

- Search by Name
https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

## Project Structure

```text
 src/
 ├── components/
 │    ├── Navbar.jsx
 │    ├── RecipeCard.jsx
 │    ├── Spinner.jsx
 │    └── ErrorMessage.jsx
 │
 ├── AppProviders.jsx
 │     
 ├── hooks/
 │    ├── useFetch.js
 │    └── useLocalStorage.js
 │
 ├── pages/
 │    ├── HomePage.jsx
 │    ├── CategoryPage.jsx
 │    ├── RecipeDetailPage.jsx
 │    ├── FavoritesPage.jsx
 │    └── SearchPage.jsx
 │
 ├── App.jsx
 └── main.jsx

 #Reflections

 🔹 Most Challenging Part

The most challenging part was managing the favorites state efficiently. I needed a way for the Recipe Detail Page to update favorites while keeping the Favorites Page in sync, all without adding favorite buttons elsewhere. Ensuring this state persisted across browser sessions with localStorage added an extra layer of complexity.

🔹 Key Design Decision

I created a FavoritesContext combined with a custom useLocalStorage hook. This design allowed the Recipe Detail Page to add/remove favorites while the Favorites Page could display them, keeping state centralized, reactive, and persistent. This approach avoided duplicating logic and ensured the app remained maintainable.