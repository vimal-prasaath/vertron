import { createBrowserRouter } from "react-router-dom";
import { Main, Home, AboutUs, Services } from "views";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
        index: true,
      },
      {
        path: "/services",
        element: <Services />,
        index: true,
      },
    ],
  },
]);

export default router;
