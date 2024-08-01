// components/RecipeCard.js
import React from 'react';

function RecipeCard({ recipe }) {
  return (
    <div>
      <h2>{recipe.name}</h2>
      <p>{recipe.description}</p>
      {/* Додаткова інформація про рецепт */}
    </div>
  );
}

export default RecipeCard;