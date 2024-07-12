import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // creating a local state variable for listofrestaurants,
  // for this we use React hook known as `use-state` and passing a default value to it
  const [ListOfRestaurants, setListOfRestaurant] = useState([]);
  // the second parameter we have passed is a function which aids in modifying our state variable
  // in our usestate() we pass reslist as default parameter.

  // keeping another copy of listofrestaurants, for only filtered restaurants
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  // local state variable for binding it to value of input
  const [searchText, setsearchText] = useState([]);

  // we are using this useEffct to be able to fetch data once our body component renders
  useEffect(() => {
    fetchData();
  }, []);

  // writing function logic to fetch data , using fetch() - function given to us by js-engine browser
  const fetchData = async () => {
    const data = await fetch(
      //use this before ur url:  https://corsproxy.io/?
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    // converting this data to json
    const json = await data.json();

    // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    // optional chaining
    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h2>
        Looks like You are Offline!! Please chcek your Internet connection.
      </h2>
    );

  //This concept known as Conditional Rendering - i.e rendering on the basis of a condition
  /*if (ListOfRestaurants.length == 0) {
    return <Shimmer />;
  }*/

  return ListOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex justify-center">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />

          <button
            className="px-3 py-1 bg-green-700 m-4 rounded-lg"
            onClick={() => {
              //  filter restaurant cards logic  & update ui
              // search text
              const filteredRestaurant = ListOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              // updating our restaurant list
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          {/* passing an attribute onclick  and this onclick takes a callback function*/}
          <button
            className="px-3 py-1 bg-yellow-300 m-4 rounded-lg"
            onClick={() => {
              // filter logic
              const filteredlist = ListOfRestaurants.filter(
                (res) => res.info.avgRating > 4.3
              );
              // setListOfRestaurant(filteredlist);
              setFilteredRestaurant(filteredlist);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {/* we will use js Map function for looping through the restaurant list */}
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
