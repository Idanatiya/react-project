import * as React from "react";
import { useRoutes, RouteObject } from "react-router-dom";
import About from "pages/About/About";
import Subscribe from "pages/Subscribe/Subscribe";
import Home from "pages/Home/Home";
import NotFound from "pages/NotFound/NotFound";
import { RouteEndpoints } from "routes/route";

const Routes = () => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: RouteEndpoints.Subsscribe,
      element: <Subscribe />,
    },
    {
      path: RouteEndpoints.About,
      element: <About />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ];

  return useRoutes(routes);
};
export default Routes;
