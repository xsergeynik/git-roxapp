import React, { useState } from "react";
import './App.css';
import Header from "./components/Header";
import RecipeList from "./components/recipe/RecipeList";
import SearchBar from "./components/recipe/SearchBar";
import LoadPromiseDataFetcher from "./components/reusable/LoadPromiseDataFetcher";
import recipesAll from "./data/recipesAll"; 


function App() {
  const [searchTerm, setSearchTerm] = useState("");
	const [filteredRecipes, setFilteredRecipes] = useState(recipesAll);
	
	

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term) {
      setFilteredRecipes(
        recipesAll.filter((dataRecipe) => {
          const nameMatch = dataRecipe.name.toLowerCase().includes(term.toLowerCase());
          const descriptionMatch = dataRecipe.description.toLowerCase().includes(term.toLowerCase());
          const ingredientsMatch = dataRecipe.ingredients.some((ingredient) =>
            ingredient.name.toLowerCase().includes(term.toLowerCase())
          );

          return nameMatch || descriptionMatch || ingredientsMatch;
        })
      );
    } else {
      setFilteredRecipes(recipesAll);
    }
  };

  return (
    <div className="app">
     	<Header />
      <div className="app-recipe recipe">
			
				<LoadPromiseDataFetcher/>
      <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
        <RecipeList dataRecipes={filteredRecipes} searchTerm={searchTerm} />
        </div>
    </div>
  );
}

export default App;
