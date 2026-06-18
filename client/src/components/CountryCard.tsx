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
      console.log(data);  // check for data 
      setcountryCards(data);
    });
  }, []);

  return (
    <>
    <div className="card-wrapper">
      {countryCards.map(card => (
        <div className="individual-card-container">
        <p key={card.id}>{card.name}</p> 
        <p key={card.id}>{card.description}</p>
        </div>
      ))}
    </div>
    </>
  );
}

export default CountryCardList;