import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import TheHomePage from "../pages/TheHomePage";
import TheLoginPage from "../pages/TheLoginPage";
import TheSignUpPage from "../pages/TheSignUpPage";
import TheForgotPasswordPage from "../pages/TheForgotPasswordPage";
import AddProduct from "../pages/AddProduct";
import TheProfilePage from "../pages/TheProfilePage";
import ThePrivateRoute from "../components/ThePrivateRoute";
import TheAdminPanel from "../pages/TheAdminPanel";
import TheAllUsersPage from "../pages/TheAllUsersPage";
import TheAllProductsPage from "../pages/TheAllProductsPage";
import TheShowProductDetail from "../pages/TheShowProductDetail";
import TheCartPage from "../pages/TheCartPage";
import TheSearchPage from "../pages/TheSearchPage";

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
        path: "/products",
        element: <TheAllProductsPage />,
      },
      {
        path: "/product/:id",
        element: <TheShowProductDetail />,
      },
      {
        path: "/search",
        element: <TheSearchPage />,
      },
      {
        path: "*",
        element: <ThePrivateRoute />,
        children: [
          {
            path: "profile",
            element: <TheProfilePage />,
          },
          {
            path: "admin",
            element: <TheAdminPanel />,
            children: [
              {
                path: "all-users",
                element: <TheAllUsersPage />,
              },
              {
                path: "products",
                element: <TheAllProductsPage />,
              },
            ],
          },
          {
            path: "cart",
            element: <TheCartPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
