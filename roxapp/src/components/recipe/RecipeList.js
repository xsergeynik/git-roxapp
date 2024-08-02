import React from "react";
import RecipeCard from "./RecipeCard";

function RecipeList({ dataRecipes, searchTerm }) {
  console.log(dataRecipes);
  return (
    <div className="recipe__list">
      {dataRecipes && dataRecipes.length > 0 ? (
        dataRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            dataRecipe={recipe}
            searchTerm={searchTerm}
          />
        ))
      ) : (
        <p>Рецепти не знайдені.</p>
      )}
    </div>
  );
}
export default RecipeList;
