"use client";

import { useEffect, useState } from "react";

// This function only fetches data; the component below manages the screen.
async function fetchMealIdeas(ingredient, signal) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(ingredient)}`,
    { signal }
  );
  if (!response.ok) {
    throw new Error("Unable to load meal ideas. Please try again later.");
  }
  const data = await response.json();
  // The API returns null when no meals match. Use an empty array instead.
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!ingredient) {
      return;
    }

    const controller = new AbortController();

    async function loadMealIdeas() {
      setLoading(true);
      setError("");
      setMeals([]);
      try {
        const mealIdeas = await fetchMealIdeas(ingredient, controller.signal);
        if (!controller.signal.aborted) {
          setMeals(mealIdeas);
        }
      } catch (error) {
        if (!controller.signal.aborted) {
          setError(error.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadMealIdeas();
    // Cancel the old request when another ingredient is selected or we leave.
    return () => controller.abort();
  }, [ingredient]);

  return (
    <section className="rounded-xl border border-slate-700 bg-slate-900 p-6" aria-live="polite" aria-busy={loading}>
      <h2 className="text-2xl font-bold text-emerald-300">Meal Ideas</h2>
      {!ingredient && <p className="mt-3 text-slate-300">Click a shopping item to see meal ideas.</p>}
      {ingredient && <p className="mt-3 text-slate-300">Ingredient: {ingredient}</p>}
      {loading && <p className="mt-4">Loading meal ideas...</p>}
      {error && <p role="alert" className="mt-4 text-red-300">{error}</p>}
      {ingredient && !loading && !error && meals.length === 0 && (
        <p className="mt-4 text-slate-300">No meal ideas found for this item.</p>
      )}
      {!loading && !error && (
        <ul className="mt-4 list-inside list-disc space-y-3">
          {meals.map((meal) => <li key={meal.idMeal}>{meal.strMeal}</li>)}
        </ul>
      )}
    </section>
  );
}
