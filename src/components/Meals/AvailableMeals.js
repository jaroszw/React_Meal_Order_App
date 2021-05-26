import React, { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchedMeals = async () => {
      const response = await fetch(
        "https://dummym-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();
      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setTimeout(() => {
        setMeals(loadedMeals);
        setIsLoading(false);
      }, 500);
    };

    fetchedMeals().catch((err) => {
      console.log("ERROR");
      setIsLoading(false);
      setError(err);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.meals}>
        <Card>
          <p>Loading...</p>
        </Card>
      </section>
    );
  }

  if (error) {
    return (
      <section className={classes.meals}>
        <Card>
          <p>{error.message}</p>
        </Card>
      </section>
    );
  }
  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>{mealsList}</Card>
    </section>
  );
};

export default AvailableMeals;
