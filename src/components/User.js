import { useEffect, useState } from "react";

const User = ({name}) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(1);
  useEffect(() => {
    //Api call
  }, []);

  async function getuserinfo() {
    const  data = await fetch("https://api.github.com/users/SabreenaFatimah-git");
}
  return ( 
    <div className="user-card">
      <h1>Count = {count}</h1>
      <h1>Count2 = {count2}</h1>
      <h3>Name:{name}</h3>
      <h4>Location: Bangalore</h4>
      <h4>Contact: linkedin/sabreenarashid</h4>
    </div>
  );
};


export default User;