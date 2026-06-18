import Mapbox from './components/mapbox'
import Header from './components/header'
// import ExploreCountryButton from './components/ExploreCountryButton'

import './App.css'
import Sidebar from '/Users/taylor/Desktop/Foodways/client/src/components/Sidebar.tsx'


function App() {
  return (
    <div className="app">
      <Header />
        <Sidebar />
        <Mapbox />
    </div>
  )
}


export default App