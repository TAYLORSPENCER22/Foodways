import CountryCardList from '/Users/taylor/Desktop/Foodways/client/src/components/CountryCard'
import { useState } from 'react';
import { CountryCard } from '../types';

const Sidebar = () => {
    const [selectedCountry, setSelectedCountry] = useState<CountryCard | null>(null);
return (

    <>
    <div className="sideBar">
        <div className='cardHeadingContainer'>
        
             {selectedCountry && ( <button className='backBtn'
                onClick={() => setSelectedCountry(null)} > <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#f8ffef" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path></svg>
                </button> )}

        <div className="countryTitle">
        <h2>{selectedCountry ? selectedCountry.name : 'Explore Countries'}</h2>

        {selectedCountry && (
            <img className='individual-country-icon' src={selectedCountry.countryFlagUrl} alt={selectedCountry.name} />
            )}
        </div>

        <p> {selectedCountry ? `Explore ${selectedCountry.name}'s local favorites` 
            : 'Discover food, culture, and local favorites'}
        </p>

        </div>

        <div className="filterBtnContainer">
        {selectedCountry ? (
            <>
                <button className='filterBtn'>Country</button>
                <button className='filterBtn'>Regions</button>
                <button className='filterBtn'>Cities</button>
            </>

        ) : (
            <>
                <button className='filterBtn'>Countries</button>
                <button className='filterBtn'>Most Viewed</button>
                <button className='filterBtn'>Favorites</button>
            </>
        )}
    </div>
       
        < CountryCardList 
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
            />
        <p>View All Countries</p>
    </div>

    </>
)
}

export default Sidebar;
