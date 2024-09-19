import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import TheHomePage from "../pages/TheHomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <TheHomePage />,
      },
    ],
  },
]);

export default router;
