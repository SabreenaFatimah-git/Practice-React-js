import React from "react";

class UserClass extends React.Component {
  // using a constructor for recieving props
  constructor(props) {
    super(props);
    // creating a state variable
    //'  this.state ' is actually an object containing state variable
    // also creating multiple state variables

  this.state = {
    userInfo: {
      name:"Default value",
      location: "Default location",
      avatar_url:"http://dummy-photo.com"
    }
  }
  }

  async componentDidMount() {
    // console.log("child componentdidmount");
    // make an Api call
    const data = await fetch(
      // "https://api.github.com/users/SabreenaFatimah-git"
    );
    const json = await data.json();

    // updating our state variable after we have got data by making api call
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }
componentDidUpdate(){
  // this is called later on at the end of updating dom
   
}

componentWillUnmount(){
  // it is called just before our component is unmounting (diappearing from webpage)
  
}

  render() {
    // destructuring on the fly
    // const { name, location } = this.props;
    const {name, location, twitter_username, bio, avatar_url} = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h3>Name:{name}</h3>
        <h4>Location:{location}</h4>
        <h4>Twitter: {twitter_username
        } </h4>
        <h4>Bio: {bio} </h4>
      </div>
    );
  }
}

export default UserClass;
