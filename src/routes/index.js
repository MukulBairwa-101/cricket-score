import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import AppScreen from "../Containers/Home/AppScreen";
import UpcomingMatches from "../components/UpcomingMatches";
import Livescores from "../components/Livescores";
import Search from "../components/Search";

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <AppScreen />,
      children: [
        {
          path: "/currentmatches",
          element: <Livescores />,
        },
        {
          path: "/upcomingmatches",
          element: <UpcomingMatches />,
        },
        {
          path: "/playersearch",
          element: <Search />,
        },
      ],
    },

    {
      path: "*",
      element: <Navigate to="/currentmatches" />,
    },
  ]);
};

export default Router;
