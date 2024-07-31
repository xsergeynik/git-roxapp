import React from "react";
import recipesAll from "../../backend/recipesAll";

const RecipeList = () => {
  return (
    <>
    hello
    <ul className="recipe">
      {recipesAll.map((recipe) => (
        <li key={recipe.id} className="recipe__item">
          <h3 className="recipe__title">{recipe.name}</h3>
          <p className="recipe__description">{recipe.description}</p>

          <ul>
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>
                {index + 1} {instruction}
              </li>
            ))}
          </ul>

          {/* <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>
                {ingredient.name}
                {ingredient.quantity}
                {ingredient.unit}
              </li>
            ))}
          </ul> */}

        </li>
      ))}
      </ul>
      </>
  );
};

export default RecipeList;
