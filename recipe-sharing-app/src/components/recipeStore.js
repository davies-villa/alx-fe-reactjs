// src/recipeStore.js
import { create } from 'zustand';  // Ensure this import is correct

const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
}));

export { useRecipeStore };
