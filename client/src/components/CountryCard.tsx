/// <reference types="vite/client" />
import { useState, useEffect } from 'react';
import { CountryCard } from '../types';
import ExploreCountryButton from './ExploreCountryButton';
import LearnMoreButton from './LearnMoreBtn';

async function fetchCountryCards() {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/countries/`);
  const data = await response.json();
  return data;
}

type Props = {
  selectedCountry: CountryCard | null;
  setSelectedCountry: (country: CountryCard | null) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

//fetch all country cards and change the view to show the food cards for that country when the explore button is clicked
function CountryCardList({ selectedCountry, setSelectedCountry, loading, setLoading }: Props) {
  const [countryCards, setcountryCards] = useState<CountryCard[]>([]);

  

  useEffect(() => {
    fetchCountryCards().then((data) => {
      console.log(data);  // check for data 
      setcountryCards(data);
    });
  }, []);

  if (loading) {
    return <div className='card-wrapper'>Loading... </div>;
  }

  if (selectedCountry) {
    return (
    <div className='card-wrapper'>
      {selectedCountry.foodCards.map(food => (
        <div key={food.id} className='individual-card-container'>
          
          <div className="country-image-wrapper">
          <img 
          src = {food.imageUrl}
          alt={food.name}
          className='country-main-image'
          />
          </div>

        <div className="card-words">
          <p className='card-country-name'>{food.name}</p>
          <p className='card-description'>{food.description}</p>

        <LearnMoreButton 
          onClick={() =>
            console.log(food)
          }/>

        </div>
        </div>
      ))}
    </div>
    )
  }

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
              onClick={() => {
                setLoading(true);

                setTimeout(() => {
                  setSelectedCountry(card);
                  setLoading(false);
                }, 500);
              }}
            />
        </div>
      </div>
    ))}
  </div>
);
}

export default CountryCardList;