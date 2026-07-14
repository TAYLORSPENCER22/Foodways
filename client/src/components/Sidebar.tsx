import CountryCardList from '/Users/taylor/Desktop/Foodways/client/src/components/CountryCard'
import { useState } from 'react';
import { CountryCard } from '../types';

const Sidebar = () => {
    const [selectedCountry, setSelectedCountry] = useState<CountryCard | null>(null);
return (

    <>
    <div className="sideBar">
        <div className='cardHeadingContainer'>
        
             {selectedCountry && ( <button
                onClick={() => setSelectedCountry(null)} > ← Back </button> )}
                
        <h1>{selectedCountry ? selectedCountry.name : 'Explore Countries'}</h1>
        
            

        <p> {selectedCountry ? `Explore ${selectedCountry.name}'s local favorites` 
            : 'Discover food, culture, and local favorites'}
        </p>

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
