"use client";

import React, { useState, useEffect, useCallback } from 'react';

const fetchMealIdeas = async (ingredient) => {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals;
    } catch (error) {
        console.error("Failed to fetch meals from API:", error);
        return null;
    }
};


function MealIdeas({ ingredient }) {
    
    const [meals, setMeals] = useState([]);
    const [hasLoaded, setHasLoaded] = useState(false);

    const loadMealIdeas = useCallback(async () => {
        if (!ingredient) {
            setMeals([]);
            setHasLoaded(false);
            return;
        }
        
        const mealResults = await fetchMealIdeas(ingredient);
        
        if (mealResults) {
            setMeals(mealResults);
        } else {
            setMeals([]); 
        }
        setHasLoaded(true);
    }, [ingredient]);


    useEffect(() => {
        let isMounted = true;

        const executeLoad = async () => {
            if (isMounted) {
                await loadMealIdeas();
            }
        };

        executeLoad();

        return () => {
            isMounted = false;
        };
    }, [ingredient, loadMealIdeas]);

return ( 

    <div className="text-green-800 p-4">
            <h2 className="text-4xl font-bold text-center mb-6 text-white">Meal Ideas</h2>

            {hasLoaded && meals.length === 0 ? (
                <p className="text-center text-white text-lg">
                    No meal ideas found for {ingredient}. Please try another item from the Shopping List
                </p>
            ) : (

            <ul className="grid grid-cols-2 gap-4">
                {meals && meals.map((meal) => (
                    <li key={meal.idMeal}
                    className="bg-gray-400 p-3 rounded-lg hover:bg-white transition-colors flex items-center justify-center text-center text-sm font-medium">
                        {meal.strMeal}
                    </li>
                ))}
            </ul>
            )}
    </div>
    );

};

export default MealIdeas;