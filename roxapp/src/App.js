import React, { useState } from 'react';
import RecipeList from './components/recipe/RecipeList';
import SearchBar from './components/recipe/SearchBar';
import recipesAll from './data/recipesAll';

function App() {
    
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState(recipesAll);

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term) {
      setFilteredRecipes(
        recipesAll.filter(recipe => 
          recipe.name.toLowerCase().includes(term.toLowerCase()) ||
          recipe.description.toLowerCase().includes(term.toLowerCase())
        )
      );
    } else {
      setFilteredRecipes(recipesAll);
    }
  };
    return (
      <div className="App">

<RecipeList recipes={filteredRecipes} />
        <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
      
      </div>
    );
  }

  export default App; 
