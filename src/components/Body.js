import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // creating a local state variable for listofrestaurants,
  // for this we use React hook known as `use-state` and passing a default value to it
  const [ListOfRestaurants, setListOfRestaurant] = useState(resList);
  // the second parameter we have passed is a function which aids in modifying our state variable
  // in our usestate() we pass reslist as default parameter.

  return (
    <div className="body">
      <div className="filter">
        {/* passing an attribute onclick  and this onclick takes a callback function*/}
        <button
          className="filter-btn"
          onClick={() => {
            // filter logic
            const filteredlist = ListOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurant(filteredlist);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* we will use js Map function for looping through the restaurant list */}

        {ListOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
