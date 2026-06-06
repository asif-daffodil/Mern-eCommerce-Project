import { createBrowserRouter } from "react-router";
import FrontLayout from "./layouts/FrontLayout";
import Home from "./pages/frontPages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FrontLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default router;