import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import TheHomePage from "../pages/TheHomePage";
import TheLoginPage from "../pages/TheLoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <TheHomePage />,
      },
      {
        path: "/login",
        element: <TheLoginPage />,
      },
    ],
  },
]);

export default router;
