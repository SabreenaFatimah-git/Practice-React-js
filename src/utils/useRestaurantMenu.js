import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  // creating state variable
  const [resInfo, setResInfo] = useState(null);

  // fetch data only once
  useEffect(() => {
    fetchdata();
  }, []);

  //   creating a async function
  const fetchdata = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data)
  };

  return resInfo;
};

export default useRestaurantMenu;
