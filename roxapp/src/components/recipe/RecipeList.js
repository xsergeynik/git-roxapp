import React from "react";
import recipesAll from "../../backend/recipesAll"; // Assuming recipesAll is an array of recipe objects

const RecipeList = () => {
	return (
		<>
			<section className="recipe">
				<div className="recipe__container container">
					<ul className="recipe__list">
						{recipesAll.map((recipe) => (
							<li key={recipe.id} className="recipe__item">
								<div className="recipe__image">
									<img src={recipe.image} alt={recipe.name} />
								</div>
								<h3 className="recipe__title">{recipe.name}</h3>
								<p className="recipe__description">{recipe.description}</p>

								{/* Instructions */}
								<ul className="recipe__instructions">
									{recipe.instructions.map((instruction, index) => (
										<li key={index}>
											{index + 1}. {instruction.description}
										</li>
									))}
								</ul>

								{/* Ingredients */}
								<ul className="recipe__ingredients">
									{recipe.ingredients.map((ingredient, index) => (
										<li key={index}>
											{ingredient.name}, {ingredient.quantity}, {ingredient.unit}
										</li>
									))}
								</ul>
							</li>
						))}
					</ul>
				</div>
			</section>
		</>
	);
};

export default RecipeList;
