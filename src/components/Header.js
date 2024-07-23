import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnNameR, setbtnNameR] = useState("Login");
  // console.log("header is called");

  // if no dependency array => useEffect is called on every render
  // if dependency array is present but empty = [] => useEffect is called on only initial render (once)
  // if dependency array is set as [btnNameR] => useEffect is called everytime btnNameR is updated/chaanged

  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);
  // console.log(data);

  return (
    <div className="flex items-center justify-between shadow-md bg-yellow-300">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL}></img>
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">Cart</li>
          <li className="px-4">
            <Link to="/About">About</Link>
          </li>
          <li className="px-4">
            <Link to="/Contact">Contact</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery Store</Link>
          </li>
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <button className="px-4"
            onClick={() => {
              btnNameR == "Login"
                ? setbtnNameR("Logout")
                : setbtnNameR("Login");
            }}
          >
            {btnNameR}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
