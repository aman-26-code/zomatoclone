import React, { useContext, useState } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
import { assets } from '../../assets/frontend_assets/assets';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  // Filter food list based on category and search term
  const filteredList = food_list.filter(item => {
    const matchCategory = category === "All" || item.category === category;
    const matchSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handleSearchIconClick = () => {
    setShowSearch(prevState => !prevState);
  };

  return (
    <div className="food-display" id="food-display">
      <div className="food-display-header">
        <h2>Top Dishes Near You</h2>
        {/* Search Icon */}
        <img
          className="search-icon"
          src={assets.search_icon} // Make sure this is correct
          alt="Search"
          onClick={handleSearchIconClick} // Click event for showing search bar
        />
      </div>

      {/* Conditional Search Bar */}
      {showSearch && (
        <input
          type="text"
          className="search-input"
          placeholder="Search dishes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term
        />
      )}

      <div className="food-display-list">
        {filteredList.length > 0 ? (
          filteredList.map((item, index) => (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))
        ) : (
          <p>No items found.</p>
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;
