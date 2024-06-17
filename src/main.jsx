import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Shop from "./pages/Shop/Shop.jsx";
import { store } from "./toolkit/store.js";
import NewArr from "./pages/NewArr/NewArr.jsx";
import ProPage from "./pages/ProPage/ProPage.jsx";
import CartPage from "./pages/CartPage/CartPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/newArr/:type",
        element: <NewArr />,
      },
    ],
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/proPage/:proId",
    element: <ProPage />,
  },
  {
    path: '/cartPage',
    element: <CartPage/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
