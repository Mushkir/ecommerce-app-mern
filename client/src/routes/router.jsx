import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import TheHomePage from "../pages/TheHomePage";
import TheLoginPage from "../pages/TheLoginPage";
import TheSignUpPage from "../pages/TheSignUpPage";
import TheForgotPasswordPage from "../pages/TheForgotPasswordPage";

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
    ],
  },
]);

export default router;
