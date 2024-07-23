import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/shimmer";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";
// import RestaurantMenu from "./components/RestaurantMenu";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {

  // passing this new info to our app, we use contextProvider
  const [userName, setUserName] = useState();

  // suppose we have some authentication number (data) and we have kept this data in our local state variable
  useEffect(() => {
    // make api call send username and password
    const data = {
      name: "Saby",
    };
    setUserName(data.name);
  }, []);


  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName}}>
      <div className="app">
      <Header />
      <Outlet />
      </div>
      </UserContext.Provider>    
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
