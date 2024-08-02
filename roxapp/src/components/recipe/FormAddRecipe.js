import React, { useState } from 'react';

function AddRecipeForm({ onRecipeAdded }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [categories, setCategories] = useState([]);

  // ... решта коду

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      id: Date.now(),
      name,
      description,
      image,
      categories,
      // ... інші поля
    };
//console.log(newRecipe);

    onRecipeAdded(newRecipe);
    // ...
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Назва:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Опис:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>
        Зображення:
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      </label>
      <label>
        Категорії:
        <select multiple value={categories} onChange={(e) => setCategories(Array.from(e.target.selectedOptions, (option) => option.value))}>
          {/* Додайте варіанти категорій */}
        </select>
      </label>
			{/* ... інші поля */}
			
      <button type="submit">Додати рецепт</button>
    </form>
  );
}


export default AddRecipeForm;