// import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props){
    super(props);
    // console.log("Parent constructor")
  }
  render() {
    // console.log("Parent Render")
    return (
      <div>
        <h2>About</h2>
        <h3>This is React about</h3>
        {/* <User name={"Ashay saini (function)"} /> */}
        <UserClass/>
      </div>
    );
  }
}

export default About;
