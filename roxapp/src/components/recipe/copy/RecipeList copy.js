import { React, useState  } from "react";
import recipesAll from "../../data/recipesAll"; 
import AddRecipeForm from "./AddRecipeForm"; 

const RecipeList = () => {

	

	function saveRecipe(recipe) {
		const existingRecipes = JSON.parse(localStorage.getItem('recipesAll')) || [];

		existingRecipes.push(recipe);
	
		try {
			localStorage.setItem('recipesAll', JSON.stringify(existingRecipes));
			alert('Рецепт успішно додано!'); // Виводимо alert при успішному збереженні
		} catch (error) {
			console.error('Помилка при збереженні рецепта:', error);
		}
	}

	const [recipes, setRecipes] = useState([]); // Отримати рецепти з localStorage

	const handleRecipeAdded = (newRecipe) => {
		setRecipes([...recipes, newRecipe]);
		saveRecipe(newRecipe);
		//console.log(recipesAll);
		
		const updatedRecipesAll = [...recipesAll, newRecipe];
		console.log(typeof (recipesAll));
		
		
		localStorage.setItem('recipesAll', JSON.stringify(updatedRecipesAll));
		
};

	return (
		<>
			<section className="recipe">
				<div className="recipe__container container">

					<AddRecipeForm onRecipeAdded={handleRecipeAdded} />
					
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
