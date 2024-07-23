import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  // extracting resId from useparams()
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  // creating a state variable, so if showindex = 0 ,first will open
  const [showIndex, setShowIndex] = useState(null);

  // const [showIndexclose, setShowIndexClose] = useState(null)

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRatingString } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  //  const { itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards;
  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  // we want to find all the 'itemcategory' for getting data of all categories of menu
  // therefore filtering all the cards which have 'itemcategory'
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
   
  // console.log(categories);

  return (
    <div className="text-center">
      <h2 className="font-bold my-6 text-2xl">{name}</h2>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* categories accordion */}
      {/* here we want to map each category (all categories) we have, and for each category return our component RestaurantCategory  */}
      
      {categories.map((category, index) => (
        // here restaurantCategory is a controlled component as being controlled by parent component
        <RestaurantCategory key={category?.card?.card?.title} 
        data={category?.card?.card}
        // setting showItems true or false
        showItems={index === showIndex ? true : false}
        setShowIndex={() => setShowIndex(index)}
        setShowIndexClose={() => setShowIndex(null)}
        />
      ))} 
     
    </div>
  );
};

export default RestaurantMenu;
