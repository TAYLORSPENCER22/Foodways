/// <reference types="vite/client" />
import { useState, useEffect } from 'react';
import { CountryCard } from '../types';
import ExploreCountryButton from './ExploreCountryButton';

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
  <div className="card-wrapper">
    {countryCards.map(card => (
      <div key={card.id} className="individual-card-container">
        <img
          src={card.countryFlagUrl}
          alt={card.name}
          className="country-icon"
        />

        <div className="country-image-wrapper">
          <img
            src={card.countryImageUrl}
            alt={card.name}
            className="country-main-image"
          />
        </div>

        <div className="card-words">
          <p className='card-country-name'>{card.name}</p>
          <p className='card-description'>{card.description}</p>

          <ExploreCountryButton
              onClick={() => console.log(card.foodCards)}
            />
        </div>
      </div>
    ))}
  </div>
);
}

export default CountryCardList;