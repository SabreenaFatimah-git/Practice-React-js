import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  
  // extracting resId from useparams()
  const {resId} = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRatingString } =
    resInfo?.cards[2]?.card?.card?.info;
  
  const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2  ]?.card?.card;
 //  const { itemCards2 } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards;
  
  return (
    <div className="menu">
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwoMessage}</h4>
      <h4>{avgRatingString}</h4> 
      <ul>
        {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name}- Rs.{item.card.info.defaultPrice/100}</li>)}
        {/* <li>{itemCards[0].card.info.name}</li> */}
      </ul>
      

    </div>
  );
  
};

export default RestaurantMenu;
