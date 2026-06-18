/// <reference types="vite/client" />
import { useState, useEffect } from 'react';
import { CountryCard } from '../types';

async function fetchCountryCards() {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/countries/`);
  const data = await response.json();
  return data;
}

function CountryCardList() {
  const [countryCards, setcountryCards] = useState<CountryCard[]>([]);

  useEffect(() => {
    fetchCountryCards().then((data) => {
      console.log(data);  // ← check the browser console
      setcountryCards(data);
    });
  }, []);

  return (
    <div>
      {countryCards.map(card => (
        <p key={card.id}>{card.name}</p>  // ← just display names for now
      ))}
    </div>
  );
}

export default CountryCardList;