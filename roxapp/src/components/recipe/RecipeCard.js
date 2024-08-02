// components/RecipeCard.js
import React from "react";
import RecipeCardInstructions from "./RecipeCardInstructions";  
import RecipeCardIngredients from "./RecipeCardIngredients";

function RecipeCard({ dataRecipe,searchTerm }) {
  return (
    <>
      <div className="recipe__item">
        <div className="recipe__image">
          <img src={dataRecipe.image} alt={dataRecipe.name} />
        </div>
        <h2>{dataRecipe.name}</h2>
          <p>{dataRecipe.description}</p>
 
  
    
        <RecipeCardIngredients dataRecipeInsgr={dataRecipe} searchTerm={searchTerm} />

        <details>
          <summary>Як готувати "{dataRecipe.name}"</summary>
          <RecipeCardInstructions dataRecipeInstr={dataRecipe} /> 
        </details>
      </div>
    </>
  );
}

export default RecipeCard;
