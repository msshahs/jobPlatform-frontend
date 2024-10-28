import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
// import RequireAuth from "./Components/Common/RequireAuth";
// import ProtectedRoutes from "./routes/ProtectedRoutes";
import PublicRoutes from "./routes/PublicRoutes";
// import { ShredLayout } from "../src/Components/Common/SharedLayout";

function App() {
  console.log("in the app");
  return (
    <>
      <Routes>
        {PublicRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            index={route.index}
            element={route.element}
          />
        ))}
        {/* <Route path="/" element={<ShredLayout />}>
          <Route element={<RequireAuth />}>
            {ProtectedRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                index={route.index}
                element={route.element}
              />
            ))}
          </Route>
        </Route> */}
      </Routes>
    </>
  );
}

export default App;
