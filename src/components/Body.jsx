import React from "react";
import {createBrowserRouter} from "react-router-dom"
import Browser from "./Browser";
import Header from "./header";
import Login from "./login";
import { RouterProvider } from "react-router-dom";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login/>
    },
    {
      path: "/browser",
      element: <Browser/>
    },
  ])

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body;