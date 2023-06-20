import React from "react";
import { createBrowserRouter, Route, Routes, Navigate, RouterProvider } from "react-router-dom";

import { Home, ChatGPT, NotFound } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/chatgpt" />
  },
  {
    path: "/chatgpt",
    element: <Home />

  },
  {
    path: "/clone",
    element: <ChatGPT />
  },
  {
    path: "*",
    element: <NotFound />,
  }
])


const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;