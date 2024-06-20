import { CDN_URL } from "../utils/constants";

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
      deliveryTime,
    } = resData?.data;
  
    return (
      <div className="res-card">
        <img
          className="res-logo"
          alt="res-logo"
          src={CDN_URL+cloudinaryImageId}
        ></img>
        <h4>{name}</h4>
        <h5>{cuisines.join(",")}</h5>
        <h5>{avgRating}</h5>
        <h5>{costForTwo / 100}</h5>
        <h5>{deliveryTime + " mins"}</h5>
      </div>
    );
  };

  export default RestaurantCard;