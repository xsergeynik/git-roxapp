// components/RecipeCardInstructions.js
import React from "react";

function RecipeCardInstructions({ dataRecipeInstr }) {
  return (
    <>
      <ul className="recipe__instructions">
        {dataRecipeInstr.instructions.map((instruction, index) => (
          <li key={index}>
            {index + 1}. {instruction.description}
          </li>
        ))}
      </ul>
    </>
  );
}

export default RecipeCardInstructions;
