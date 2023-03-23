import React, { useState, useEffect } from "react";
import Card from "../components/Card";

export default function Ingredients() {
    const [meals, setMeals] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
            .then((response) => response.json())
            .then((data) => setMeals(data.meals))
            .catch((error) => console.error(error));
    }, []);

    const filteredMeals = meals.filter((meal) => meal.strIngredient.toLowerCase().includes(search.toLowerCase()));
    return (
        <div>
            <section>
                <div class="px-4 py-8 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-16">
                    <div class="flex flex-col w-full mb-12 text-center">
                        <h1 class="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
                            List Ingredients
                        </h1>
                        <p class="max-w-xl mx-auto mt-8 text-base leading-relaxed text-center text-gray-500">
                            List of ingredients that can be used to make a meal
                        </p>
                        <div class="w-full md:w-1/2 lg:w-1/2 mx-auto my-4">
                            <input value={search} onChange={(e) => setSearch(e.target.value)} id="search" name="search" class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                        </div>
                    </div>
                </div>
            </section>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 mx-6">
                {filteredMeals.map((meal) => (
                    <Card
                        id={meal.strIngredient}
                        key={meal.idMeal}
                        title={meal.strIngredient}
                        description={meal.strMeal}
                    />
                ))}
                {/* {meals.map((meal) => (
          <Card
            key={meal.idMeal}
            title={meal.strIngredient}
            description={meal.strMeal}
          />
        ))} */}
            </div>
        </div>
    );
}
