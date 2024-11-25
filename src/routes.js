import { createBrowserRouter } from "react-router-dom";
import { Main, Home } from "views";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        element: <Home />,
        index: true,
      },
    ],
  },
]);

export default router;
