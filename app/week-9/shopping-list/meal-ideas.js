"use client";

import { useEffect, useState } from "react";

// Get recipes that contain the ingredient selected from the shopping list.
async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(ingredient)}`,
  );

  if (!response.ok) {
    throw new Error("Unable to fetch meal ideas.");
  }

  const data = await response.json();
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  // Store the meals returned by the API in React state.
  const [meals, setMeals] = useState([]);
  const [loadedIngredient, setLoadedIngredient] = useState("");
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!ingredient) return;

    // Prevent an older request from overwriting the latest selection.
    let ignore = false;

    async function loadMealIdeas() {
      try {
        const meals = await fetchMealIdeas(ingredient);

        if (!ignore) {
          setMeals(meals);
          setLoadedIngredient(ingredient);
          setHasError(false);
        }
      } catch (error) {
        console.error("Failed to load meal ideas:", error);

        if (!ignore) {
          setMeals([]);
          setLoadedIngredient(ingredient);
          setHasError(true);
        }
      }
    }

    loadMealIdeas();

    return () => {
      ignore = true;
    };
  }, [ingredient]);

  // Show a loading message while results for the new ingredient are on the way.
  const isLoading = ingredient && loadedIngredient !== ingredient;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-blue-900 mb-4">Meal Ideas</h2>

      {!ingredient ? (
        <p className="text-gray-700">
          Select an item from your shopping list to see meal ideas.
        </p>
      ) : isLoading ? (
        <p className="text-gray-700">Loading meals for {ingredient}...</p>
      ) : hasError ? (
        <p className="text-red-700">
          Could not load meal ideas. Please try another item.
        </p>
      ) : meals.length === 0 ? (
        <p className="text-gray-700">
          No meal ideas found for {ingredient}. Try another item.
        </p>
      ) : (
        <div>
          <p className="text-gray-700 mb-4">
            Meals with <span className="font-bold">{ingredient}</span>:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-900">
            {meals.map((meal) => (
              <li key={meal.idMeal}>{meal.strMeal}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
