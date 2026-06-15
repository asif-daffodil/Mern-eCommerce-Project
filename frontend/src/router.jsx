import { createBrowserRouter } from "react-router";
import FrontLayout from "./layouts/FrontLayout";
import Home from "./pages/frontPages/Home";
import Cart from "./pages/frontPages/Cart";
import Shop from "./pages/frontPages/Shop";
import Faq from "./pages/frontPages/Faq";
import Contact from "./pages/frontPages/Contact";
import Login from "./pages/frontPages/auth/Login";
import Register from "./pages/frontPages/auth/Register";
import Checkout from "./pages/frontPages/Checkout";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/adminPages/Dashboard";
import Products from "./pages/adminPages/Products";
import Orders from "./pages/adminPages/Orders";
import Customers from "./pages/adminPages/Customers";
import Settings from "./pages/adminPages/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FrontLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/shop",
        element: <Shop />
      },
      {
        path: "/faq",
        element: <Faq />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/checkout",
        element: <Checkout />
      }
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "customers",
        element: <Customers />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);

export default router;
