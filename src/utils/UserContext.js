import { createContext } from "react";
// we can access this context from anywhere in our app
// and for acessing this context react gives us a hook - Usecontext
const UserContext = createContext({
loggedInUser: "Default User",
});

export default UserContext;