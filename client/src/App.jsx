import React from "react";
import { createBrowserRouter, Route, Routes, Navigate, RouterProvider } from "react-router-dom";

import { NotFound } from "./pages";
import Home from "./pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />

  },
  {
    path: "/*",
    element: <NotFound />,
  }
])


const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;