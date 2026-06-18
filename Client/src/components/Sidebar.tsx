import CountryCardList from '/Users/taylor/Desktop/Foodways/client/src/components/CountryCard'

const Sidebar = () => {
return (
    <>
    <div className="sideBar">
        <h1>Explore Countries</h1>
        <p>Discover food, culture, and local favorites</p>

        <button>All Countries</button>
        <button>Most Viewed</button>
        <button>My Favorites</button>
        < CountryCardList />
    </div>
    </>
)
}

export default Sidebar;