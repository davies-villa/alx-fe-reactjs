import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json"; 

const RecipeDetail = () => {
  const { id } = useParams(); 
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = data.find((r) => r.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="text-center mt-10">Recipe not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mb-8"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
          <ul className="list-disc list-inside">
            {recipe.ingredients?.map((ingredient, index) => (
              <li key={index} className="text-lg">{ingredient}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Instructions</h2>
          <ol className="list-decimal list-inside">
            {recipe.instructions?.map((step, index) => (
              <li key={index} className="text-lg mb-2">{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
