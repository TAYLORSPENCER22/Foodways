import Mapbox from './components/mapbox'
import Header from './components/header'

import './App.css'
import Sidebar from '/Users/taylor/Desktop/Foodways/client/src/components/Sidebar.tsx'
import CountryCardList from '/Users/taylor/Desktop/Foodways/client/src/components/CountryCard'


function App() {
  return (
    <>
    < Header />
    < Sidebar />
    <CountryCardList />
    < Mapbox /> 

    </>
  )
}


export default App