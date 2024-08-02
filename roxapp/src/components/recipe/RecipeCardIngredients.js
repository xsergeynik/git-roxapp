// components/RecipeCardIngredients.js
import React from "react";

function RecipeCardIngredients({ dataRecipeInsgr, searchTerm }) {
  return (
    <ul className="recipe__ingredients ingredients">
      {dataRecipeInsgr.ingredients.map((ingredient, index) => {
        const isMatch =
          searchTerm &&
          ingredient.name.toLowerCase().includes(searchTerm.toLowerCase());
        return (
          <li key={index}>
            <div className={isMatch ? "highlight" : "ingredients__name"}>
              {ingredient.name}:&nbsp;
            </div>
            <div className="ingredients__quantity">{ingredient.quantity}</div>
            <div className="ingredients__unit">{ingredient.unit}</div>
          </li>
        );
      })}
    </ul>
  );
}

export default RecipeCardIngredients;
