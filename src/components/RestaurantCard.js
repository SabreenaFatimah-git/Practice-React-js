import { CDN_URL } from "../utils/constants";
import { Rating_Star } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    // destructuring res-data
    //optional chaining => .?
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      sla,
    } = resData?.info;
  
    return (
      <div className="m-1 p-4 w-[320px] hover:scale-95">
        <img
          className="rounded-2xl h-[180px] w-[285px] object-cover"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        ></img>
        <h4 className="font-bold py-2 text-lg
        ">{name}</h4>
        <div className="flex">
        <img className="w-[21px] h-[21px] mx-1" src={Rating_Star}></img>
        <h5 className="font-medium">{avgRating} stars . {sla?.slaString}</h5>
        </div>
        <h5>{cuisines.join(",")}</h5>
        <h5>{costForTwo}</h5>
        
      </div>
    );
  };

  export default RestaurantCard;