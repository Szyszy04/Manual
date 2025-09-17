// index.js - Główny plik eksportujący wszystkie moduły danych

// Eksport wszystkich składników i funkcji pomocniczych
export {
  ingredients,
  measureTypes,
  getIngredientById,
  getIngredientId,
  getAllIngredientNames,
  searchIngredients,
  getIngredientMeasure,
  getIngredientsByMeasure,
  formatIngredientWithMeasure,
  getMeasureStats
} from './ingredients.js';

// Eksport drinków i funkcji wyszukiwania
export {
  drinkLibrary,
  findDrinkByName,
  getAllDrinkCategories,
  getDrinksByCategory,
  getAllDrinks,
  searchDrinks,
  getDrinksByGlass,
  getDrinksByIngredient
} from './drinks.js';

// Eksport przepisów i funkcji konwersji
export {
  recipes,
  getRecipeWithNames,
  getRecipeWithNamesSimple,
  getAllRecipeNames,
  getRecipeById,
  searchRecipesByIngredient,
  getRecipesWithIngredientNames,
  analyzeRecipe,
  getRecipesByMeasure
} from './recipes.js';

// Eksport szklanek
export {
  glassOptions,
  getGlassById,
  getAllGlasses,
  searchGlasses,
  glassCategories
} from './glasses.js';

// Eksport informacji o alkoholach
export {
  vodkas,
  alcoholLibrary,
  getAlcoholByName,
  getVodkaByName,
  getAllAlcoholCategories,
  searchSpirits
} from './spirits.js';

// Funkcje ogólne łączące różne moduły
export function getFullDrinkInfo(drinkName) {
  const drink = findDrinkByName(drinkName);
  if (!drink) return null;

  const recipe = getRecipeWithNames(drinkName);

  return {
    ...drink,
    recipe: recipe.length ? recipe : null,
    recipeAnalysis: recipe.length ? analyzeRecipe(drinkName) : null
  };
}

export function searchAll(searchTerm) {
  const results = {
    drinks: searchDrinks(searchTerm),
    ingredients: searchIngredients(searchTerm),
    glasses: searchGlasses(searchTerm),
    spirits: searchSpirits(searchTerm)
  };

  return results;
}

// Pomocnicza funkcja do pobierania statystyk
export function getDataStatistics() {
  return {
    totalIngredients: ingredients.length,
    totalDrinks: getAllDrinks().length,
    totalCategories: getAllDrinkCategories().length,
    totalGlasses: getAllGlasses().length,
    totalRecipes: getAllRecipeNames().length,
    totalAlcoholCategories: getAllAlcoholCategories().length,
    totalVodkas: vodkas.length,
    measureStats: getMeasureStats()
  };
}

// Funkcje związane z miarami
export function getDrinksByMeasureType(measureType) {
  const recipesWithMeasure = getRecipesByMeasure(measureType);
  return recipesWithMeasure.map(recipeName => findDrinkByName(recipeName)).filter(Boolean);
}

export function getIngredientUsageStats() {
  const usageStats = {};
  getAllRecipeNames().forEach(recipeName => {
    const recipe = getRecipeById(recipeName);
    recipe.forEach(item => {
      if (item.ingredientId) {
        const ingredient = getIngredientById(item.ingredientId);
        if (ingredient) {
          const key = ingredient.name;
          usageStats[key] = (usageStats[key] || 0) + 1;
        }
      }
    });
  });
  return usageStats;
}

// Re-export potrzebnych funkcji z poszczególnych modułów
import { findDrinkByName } from './drinks.js';
import { getRecipeWithNames, analyzeRecipe, getRecipesByMeasure, getAllRecipeNames, getRecipeById } from './recipes.js';
import { searchDrinks } from './drinks.js';
import { searchIngredients, getMeasureStats, getIngredientById } from './ingredients.js';
import { searchGlasses } from './glasses.js';
import { searchSpirits } from './spirits.js';
import { ingredients } from './ingredients.js';
import { getAllDrinks, getAllDrinkCategories } from './drinks.js';
import { getAllGlasses } from './glasses.js';
import { getAllAlcoholCategories, vodkas } from './spirits.js';
