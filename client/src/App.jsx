import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import TheNavBar from "./components/TheNavBar";
import TheFooter from "./components/TheFooter";
import apiEndPointObj from "./common/api_uri";
import { useDispatch } from "react-redux";
import { UserLoggedIn } from "./redux/user/userSlice";
import Context from "./context/context";

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [countCartItem, setCountCartItem] = useState(0);

  // JWT Token debugging method
  const getUserDetail = async () => {
    const response = await fetch(apiEndPointObj.getCurrentUserDetail.url, {
      method: apiEndPointObj.getCurrentUserDetail.method,
      credentials: "include",
    });

    const userData = await response.json();
    // console.log(userData.resp);

    if (userData.message === "Unauthorized") {
      navigate("/login");
    }
    dispatch(UserLoggedIn(userData.resp));
  };

  // Count cart items
  const countCartItems = async () => {
    try {
      const response = await fetch(apiEndPointObj.countCartItems.url, {
        method: apiEndPointObj.countCartItems.method,
        credentials: "include",
      });

      const respData = await response.json();
      if (!respData.error) {
        setCountCartItem(respData.data);
      }
      // console.log(respData.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserDetail();
    countCartItems();
  }, []);

  return (
    <>
      <Context.Provider
        value={{ getUserDetail, countCartItem, countCartItems }}
      >
        <TheNavBar />
        <main className="min-h-[calc(100vh-120px)]">
          <Outlet />
        </main>
        <TheFooter />
      </Context.Provider>
    </>
  );
};

export default App;
