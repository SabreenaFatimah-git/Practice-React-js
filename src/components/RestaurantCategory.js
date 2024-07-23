import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex ,setShowIndexClose}) => {
//console.log(data);

// const handleclick = () => {
// // setShowItems(!showItems);
// setShowIndex();
// };

const handleclick = () => {
  // show N HIDE item list
  //true is open and down arrow
  //toggle if showItems is true make it false and when it false make it true
  // setShowItems(true)
  // setShowItems(!showItems)

  if (showItems === true) {
    setShowIndexClose();

  } else {
    setShowIndex();
  }

  // console.log("clicked");
};

  return (
    <div>
      {/*here we will have a accordion header section   */}
      <div className="w-6/12 mx-auto my-4 bg-[#f7f7f8] shadow-lg p-4">
        <div className="flex justify-between cursor-pointer" onClick={handleclick}>
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>🔻</span>
        </div>

        {/* we will have accordion body */}
       {showItems && <ItemList items={data.itemCards} />} 
      </div>
    </div>
  );
};

export default RestaurantCategory;
