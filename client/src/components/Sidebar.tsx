import CountryCardList from '/Users/taylor/Desktop/Foodways/client/src/components/CountryCard'
import { useState } from 'react';
import { CountryCard } from '../types';

const Sidebar = () => {
    const [selectedCountry, setSelectedCountry] = useState<CountryCard | null>(null);
return (

    <>
    <div className="sideBar">
        <div className='cardHeadingContainer'>
        <h1>{selectedCountry ? selectedCountry.name : 'Explore Countries'}</h1>
        
        
        <p> {selectedCountry ? `Explore ${selectedCountry.name}'s local favorites` 
            : 'Discover food, culture, and local favorites'}
        </p>

        {selectedCountry ? (
            <>
                <button>Country</button>
                <button>Regions</button>
                <button>Cities</button>
            </>
        ) : (
            <>
                <button>Countries</button>
                <button>Most Viewed</button>
                <button>Favorites</button>
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
