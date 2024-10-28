import React from "react";
import Dashboard from "../pages/Dashboard";
import SignIn from "../pages/SignIn";
import LinkedInCallback from "../pages/LinkedInCallback";
const PublicRoutes = [
  {
    path: "/",
    index: false,
    element: <Dashboard />,
  },
  {
    path: "/signin",
    index: false,
    element: <SignIn />,
  },
  {
    path: "/auth/linkedin/callback",
    index: false,
    element: <LinkedInCallback />,
  },
];

export default PublicRoutes;
