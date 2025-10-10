import React from "react";

import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import Details from "../pages/Details/Details";
import Installation from "../pages/Installation/Installation";
import { appsLoader } from "../Loaders/appsLoader";
import { detailsLoader } from "../Loaders/detailsLoader";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },

      { path: "apps", element: <Apps />, loader: appsLoader },
      { path: "apps/:id", element: <Details />, loader: detailsLoader },
      { path: "installation", element: <Installation /> },
    ],
  },
]);
export default router;
