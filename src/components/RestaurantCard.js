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
      sla,
    } = resData?.info;
  
    return (
      <div className="res-card">
        <img
          className="res-logo"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        ></img>
        <h4>{name}</h4>
        <h5>{cuisines.join(",")}</h5>
        <h5>{avgRating} stars</h5>
        <h5>{costForTwo}</h5>
        <h5>{sla?.slaString}</h5>
      </div>
    );
  };

  export default RestaurantCard;