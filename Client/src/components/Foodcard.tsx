/// <reference types="vite/client" />
import { useState, useEffect } from 'react';
import { FoodCard } from '../types';

async function fetchFoodCards() {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/food-cards/`);
  const data = await response.json();
  return data;
}

function FoodCardList() {
  const [foodCards, setFoodCards] = useState<FoodCard[]>([]);

  useEffect(() => {
    fetchFoodCards().then((data) => {
      console.log(data);  // ← check the browser console
      setFoodCards(data);
    });
  }, []);

  return (
    <div>
      {foodCards.map(card => (
        <p key={card.id}>{card.name}</p>  // ← just display names for now
      ))}
    </div>
  );
}

export default FoodCardList;