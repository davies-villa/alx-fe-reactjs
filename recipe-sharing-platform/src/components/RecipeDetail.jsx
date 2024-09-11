import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find((recipe) => recipe.id === parseInt(id));
        setRecipe(selectedRecipe);
      });
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-lg mb-8" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
          <ul className="list-disc list-inside">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="text-lg text-gray-700">{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
          <ol className="list-decimal list-inside">
            {recipe.instructions.map((step, index) => (
              <li key={index} className="text-lg text-gray-700 mb-2">{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
