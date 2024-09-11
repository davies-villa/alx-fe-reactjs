import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!title) {
      newErrors.title = 'Title is required';
    }

    if (!ingredients) {
      newErrors.ingredients = 'Ingredients are required';
    } else if (ingredients.split(',').length < 2) {
      newErrors.ingredients = 'At least two ingredients are required';
    }

    if (!steps) {
      newErrors.steps = 'Preparation steps are required';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const newRecipe = {
        title,
        ingredients: ingredients.split(','),
        steps,
      };

      console.log(newRecipe);
      alert('Recipe submitted successfully!');

      setTitle('');
      setIngredients('');
      setSteps('');
      setErrors({});
    }
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white rounded-lg shadow-md mt-8">
      <h2 className="text-2xl font-semibold mb-6 text-center">Add New Recipe</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="title">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full p-2 border ${
              errors.title ? 'border-red-500' : 'border-gray-300'
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500`}
            placeholder="Enter recipe title"
          />
          {errors.title && <p className="text-red-500 mt-2">{errors.title}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="ingredients">
            Ingredients (separate by commas)
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={`w-full p-2 border ${
              errors.ingredients ? 'border-red-500' : 'border-gray-300'
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500`}
            placeholder="Enter ingredients, separated by commas"
            rows="3"
          ></textarea>
          {errors.ingredients && <p className="text-red-500 mt-2">{errors.ingredients}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="steps">
            Preparation Steps
          </label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className={`w-full p-2 border ${
              errors.steps ? 'border-red-500' : 'border-gray-300'
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500`}
            placeholder="Enter preparation steps"
            rows="5"
          ></textarea>
          {errors.steps && <p className="text-red-500 mt-2">{errors.steps}</p>}
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
