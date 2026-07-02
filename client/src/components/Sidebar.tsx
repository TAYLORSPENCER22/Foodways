import CountryCardList from '/Users/taylor/Desktop/Foodways/client/src/components/CountryCard'

const Sidebar = () => {
return (
    <>
    <div className="sideBar">
        <div className='cardHeadingContainer'>
        <h1>Explore Countries</h1>
        <p>Discover food, culture, and local favorites</p>

        <button>All Countries</button>
        <button>Most Viewed</button>
        <button>My Favorites</button>
     </div>
        < CountryCardList />
        <p>View All Countries</p>
    </div>

    </>
)
}

export default Sidebar;
