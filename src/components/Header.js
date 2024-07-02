import { LOGO_URL } from "../utils/constants";
import { useState} from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnNameR, setbtnNameR] = useState("Login");
  console.log("header is called");

  // if no dependency array => useEffect is called on every render
  // if dependency array is present but empty = [] => useEffect is called on only initial render (once)
  // if dependency array is set as [btnNameR] => useEffect is called everytime btnNameR is updated/chaanged


  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>

      <div className="nav-items">
        <ul>
          <li>
          <Link to="/">Home</Link></li>
          <li>Cart
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
            </li>
          <button
            className="login"
            onClick={() => {
              btnNameR == "Login"
                ? setbtnNameR("Logout")
                : setbtnNameR("Login");
            }}
          >
            {btnNameR}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
