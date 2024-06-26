import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
  const [btnNameR, setbtnNameR] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Cart</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
