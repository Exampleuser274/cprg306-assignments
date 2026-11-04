'use client';
import { useEffect,useState } from "react";
export default function MealIdeas ({ingredient}) {
    const [meals,setMeals] = useState([])
    function loadMealIdeas(){
        setMeals(fetchMealIdeas(ingredient))
    }
    useEffect(() => {
        loadMealIdeas();
        return () => {

        };
    }, [ingredient]);
    return(
        <div>
            <h1 className="text-3xl font-bold mt-2 mb-2 text-left">Meal Ideas</h1>
            <ul>
                {meals.map((meal) => (
                    <li key={meal.idMeal}>
                        {meal.strMeal}
                        <img
                        src={meal.strMealThumb}
                        alt="meal image"
                        width="500"
                        height="300"/>
                    </li>
                ))}
            </ul>
        </div>
    )
}
async function fetchMealIdeas(ingredient) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error)
    }
    
}