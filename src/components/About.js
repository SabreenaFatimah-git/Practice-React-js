// import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent constructor")
  }
  render() {
    // console.log("Parent Render")
    return (
      <div>
        <h2>About</h2>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1 className="font-bold">{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <h3>This is User About:</h3>
        {/* <User name={"Ashay saini (function)"} /> */}
        <UserClass />
      </div>
    );
  }
}

export default About;
