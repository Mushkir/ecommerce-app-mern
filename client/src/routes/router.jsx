import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import TheHomePage from "../pages/TheHomePage";
import TheLoginPage from "../pages/TheLoginPage";
import TheSignUpPage from "../pages/TheSignUpPage";
import TheForgotPasswordPage from "../pages/TheForgotPasswordPage";
import AddProduct from "../pages/AddProduct";
import TheProfilePage from "../pages/TheProfilePage";
import ThePrivateRoute from "../components/ThePrivateRoute";

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
      {
        path: "/forgot-password",
        element: <TheForgotPasswordPage />,
      },
      {
        path: "/sign-up",
        element: <TheSignUpPage />,
      },
      {
        path: "/add-product",
        element: <AddProduct />,
      },
      {
        path: "*",
        element: <ThePrivateRoute />,
        children: [
          {
            path: "profile",
            element: <TheProfilePage />,
          },
        ],
      },
    ],
  },
]);

export default router;
