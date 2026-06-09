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
]);

export default router;