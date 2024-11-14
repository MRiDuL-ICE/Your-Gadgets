import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import Home from "./components/Home/Home.jsx";
import Errorpage from "./components/Errorpage/Errorpage.jsx";
import Signup from "./components/Sign Up/Signup.jsx";
import Details from "./components/Details/Details.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import ContextAPI from "./components/ContextAPI/ContextAPI.jsx";
import Stats from "./components/Stats/Stats.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "products/:product_id",
        element: <Details></Details>,
        loader: () => fetch("/products.json"),
      },
      {
        path: '/statistics',
        element: <Stats></Stats>
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        loader: () => fetch("products.json"),
        children: [
          {
            path: 'cart',
            element: <Dashboard></Dashboard>
          },
          {
            path: 'wishlist',
            element: <Dashboard></Dashboard>
          },
          {
            index: true,
            element: <Dashboard></Dashboard>
          }
        ]
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextAPI>
      <RouterProvider router={router} />
    </ContextAPI>
  </StrictMode>
);
