const Sidebar = () => {
return (
    <>
    <div className="sideBar">
        <h1>Explore Countries</h1>
        <p>Discover food, culture, and local favorites</p>

        <button>All Countries</button>
        <button>Most Viewed</button>
        <button>My Favorites</button>

        {/* 
        country card components will go here 
            <CountryCard /> xhowever many
        */}
        
    </div>
    </>
)
}

export default Sidebar;